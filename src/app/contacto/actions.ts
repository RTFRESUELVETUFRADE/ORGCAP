"use server";

import { Resend } from "resend";
import { site } from "@/lib/content";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const sectorLabels: Record<string, string> = {
  educacion: "Educación",
  empresas: "Empresas y ejecutivos",
  mineria: "Minería",
  otro: "Otro",
};

export async function sendContactMessage(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  // Honeypot: real users never fill this hidden field.
  if (String(formData.get("website") ?? "").trim() !== "") {
    return { status: "success", message: "¡Gracias! Te responderemos a la brevedad." };
  }

  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const sector = String(formData.get("sector") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || name.length > 120) {
    return { status: "error", message: "Cuéntanos tu nombre para poder saludarte." };
  }
  if (!EMAIL_RE.test(email)) {
    return { status: "error", message: "Revisa tu correo electrónico, no parece válido." };
  }
  if (!message || message.length < 10) {
    return { status: "error", message: "Cuéntanos un poco más sobre lo que necesitas (mínimo 10 caracteres)." };
  }
  if (message.length > 4000) {
    return { status: "error", message: "Tu mensaje es muy largo, intenta resumirlo un poco." };
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
    message: "¡Gracias! Recibimos tu mensaje y te responderemos a la brevedad.",
  };
}
