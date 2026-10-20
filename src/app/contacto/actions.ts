"use server";

import { Resend } from "resend";
import { headers } from "next/headers";
import { site } from "@/lib/content";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
};

// RFC 5322-ish, pragmatic: local@domain.tld, no spaces, single @.
const EMAIL_RE = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
// Digits only after stripping spaces/()+- — between 8 and 15 digits (E.164-ish).
const PHONE_DIGITS_RE = /^\d{8,15}$/;
// Header-injection / control-character guard: newlines, carriage returns, null bytes.
const CONTROL_CHARS_RE = /[\r\n\0]/;

const MESSAGE_MIN_LENGTH = 100;
const MESSAGE_MAX_LENGTH = 4000;
const MIN_FILL_TIME_MS = 2500; // faster than this and it almost certainly wasn't typed by a person
const RATE_LIMIT_WINDOW_MS = 30_000;

const sectorLabels: Record<string, string> = {
  educacion: "Educación",
  empresas: "Empresas y ejecutivos",
  mineria: "Minería",
  otro: "Otro",
};

// Best-effort in-memory rate limit: survives for the life of a warm serverless
// instance, which is enough to stop a rapid double-submit or a simple retry loop.
// It is not a substitute for an edge-level WAF against a determined attacker.
const recentSubmissions = new Map<string, number>();

function isRateLimited(key: string): boolean {
  const now = Date.now();
  for (const [k, ts] of recentSubmissions) {
    if (now - ts > RATE_LIMIT_WINDOW_MS) recentSubmissions.delete(k);
  }
  const last = recentSubmissions.get(key);
  if (last && now - last < RATE_LIMIT_WINDOW_MS) return true;
  recentSubmissions.set(key, now);
  return false;
}

function cleanField(value: FormDataEntryValue | null, maxLength: number): string {
  return String(value ?? "")
    .trim()
    .slice(0, maxLength);
}

export async function sendContactMessage(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  // Honeypot: real users never fill this hidden field.
  if (cleanField(formData.get("website"), 200) !== "") {
    return { status: "success", message: "Gracias por tu mensaje. Te responderemos a la brevedad." };
  }

  const name = cleanField(formData.get("name"), 120);
  const email = cleanField(formData.get("email"), 254);
  const phone = cleanField(formData.get("phone"), 30);
  const sector = cleanField(formData.get("sector"), 30);
  const message = cleanField(formData.get("message"), MESSAGE_MAX_LENGTH);
  const loadedAt = Number(cleanField(formData.get("loadedAt"), 20));

  // Bot-speed check: a human can't read the form and write 100+ characters in under ~2.5s.
  if (loadedAt && Date.now() - loadedAt < MIN_FILL_TIME_MS) {
    return { status: "success", message: "Gracias por tu mensaje. Te responderemos a la brevedad." };
  }

  // Header-injection guard: these fields ride into the email's headers/subject, so a
  // newline there could forge extra headers. The message body legitimately contains
  // newlines (it's multi-line free text), so it's only checked for null bytes below.
  if ([name, email, phone, sector].some((field) => CONTROL_CHARS_RE.test(field))) {
    return { status: "error", message: "Tu nombre, correo o teléfono contienen caracteres no permitidos (saltos de línea). Revísalos e inténtalo de nuevo." };
  }
  if (message.includes("\0")) {
    return { status: "error", message: "Tu mensaje contiene caracteres no permitidos. Revísalo e inténtalo de nuevo." };
  }

  if (!name || name.length < 2) {
    return { status: "error", message: "Cuéntanos tu nombre para poder saludarte." };
  }
  if (!EMAIL_RE.test(email)) {
    return { status: "error", message: "Revisa tu correo electrónico: no parece una dirección válida." };
  }
  if (phone && !PHONE_DIGITS_RE.test(phone.replace(/[\s()+-]/g, ""))) {
    return { status: "error", message: "Revisa tu número de teléfono: debe tener entre 8 y 15 dígitos." };
  }
  if (message.length < MESSAGE_MIN_LENGTH) {
    return {
      status: "error",
      message: `Cuéntanos un poco más sobre tu desafío (mínimo ${MESSAGE_MIN_LENGTH} caracteres, llevas ${message.length}).`,
    };
  }

  const headerList = await headers();
  const ip =
    headerList.get("x-forwarded-for")?.split(",")[0]?.trim() || headerList.get("x-real-ip") || "unknown";
  if (isRateLimited(`${ip}:${email}`)) {
    return {
      status: "error",
      message: "Ya recibimos un mensaje tuyo hace unos segundos. Si necesitas enviar algo más, espera un momento e inténtalo de nuevo.",
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY no está configurada.");
    return {
      status: "error",
      message: "No pudimos enviar tu mensaje por un problema técnico. Escríbenos directo a " + site.email,
    };
  }

  const resend = new Resend(apiKey);
  const to = process.env.CONTACT_TO_EMAIL || site.email;
  const from = process.env.CONTACT_FROM_EMAIL || "ORGCAP Web <onboarding@resend.dev>";

  try {
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `Nuevo contacto desde orgcap.cl — ${name}`,
      text: [
        `Nombre: ${name}`,
        `Email: ${email}`,
        phone ? `Teléfono: ${phone}` : null,
        sector ? `Sector de interés: ${sectorLabels[sector] ?? sector}` : null,
        "",
        "Mensaje:",
        message,
      ]
        .filter(Boolean)
        .join("\n"),
    });

    if (error) {
      console.error("Resend error:", error);
      return {
        status: "error",
        message: "No pudimos enviar tu mensaje por un problema técnico. Escríbenos directo a " + site.email,
      };
    }
  } catch (err) {
    console.error("Error enviando correo de contacto:", err);
    return {
      status: "error",
      message: "No pudimos enviar tu mensaje por un problema técnico. Escríbenos directo a " + site.email,
    };
  }

  return {
    status: "success",
    message: "Recibimos tu mensaje correctamente y te responderemos a la brevedad. Si tu consulta es urgente, puedes escribirnos directamente a " + site.email + ".",
  };
}
