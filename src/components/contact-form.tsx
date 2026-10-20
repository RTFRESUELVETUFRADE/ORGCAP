"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import { sendContactMessage, type ContactFormState } from "@/app/contacto/actions";

const initialState: ContactFormState = { status: "idle", message: "" };

const inputClass =
  "w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-blue-950 placeholder:text-slate-400 outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20";

const MESSAGE_MIN_LENGTH = 100;

const emptyValues = { name: "", email: "", phone: "", sector: "", message: "" };

export function ContactForm() {
  const [state, formAction, pending] = useActionState(sendContactMessage, initialState);
  const loadedAtRef = useRef<HTMLInputElement>(null);
  // Controlled fields: a failed submission (e.g. a transient server error) must not
  // wipe what the visitor already typed, so values live in React state, not the DOM.
  const [values, setValues] = useState(emptyValues);

  useEffect(() => {
    // Set imperatively (not via state) so mounting doesn't trigger an extra render.
    if (loadedAtRef.current) loadedAtRef.current.value = Date.now().toString();
  }, []);

  const setField = (field: keyof typeof values) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setValues((v) => ({ ...v, [field]: e.target.value }));

  if (state.status === "success") {
    return (
      <div className="flex flex-col items-center py-6 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-blue-600">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
            <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <h3 className="mt-5 text-xl font-semibold text-blue-950">¡Gracias por escribirnos!</h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-slate-600">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-5">
      {/* Honeypot field — hidden from real users, bots tend to fill every input */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      {/* Timestamp used server-side to reject submissions sent implausibly fast */}
      <input type="hidden" name="loadedAt" ref={loadedAtRef} defaultValue="" />

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-blue-950">
            Nombre *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            minLength={2}
            maxLength={120}
            value={values.name}
            onChange={setField("name")}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-blue-950">
            Correo electrónico *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            maxLength={254}
            value={values.email}
            onChange={setField("email")}
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-blue-950">
            Teléfono (opcional)
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            placeholder="+56 9 1234 5678"
            pattern="[0-9+\s()-]{8,20}"
            title="Ingresa un número de teléfono válido (8 a 20 dígitos, puede incluir +, espacios o paréntesis)"
            value={values.phone}
            onChange={setField("phone")}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="sector" className="mb-1.5 block text-sm font-medium text-blue-950">
            Sector de interés
          </label>
          <select
            id="sector"
            name="sector"
            value={values.sector}
            onChange={setField("sector")}
            className={inputClass}
          >
            <option value="">Selecciona una opción</option>
            <option value="educacion">Educación</option>
            <option value="empresas">Empresas y ejecutivos</option>
            <option value="mineria">Minería</option>
            <option value="otro">Otro</option>
          </select>
        </div>
      </div>

      <div>
        <div className="mb-1.5 flex items-baseline justify-between">
          <label htmlFor="message" className="block text-sm font-medium text-blue-950">
            Cuéntanos tu desafío *
          </label>
          <span
            className={`text-xs ${
              values.message.length >= MESSAGE_MIN_LENGTH ? "text-blue-600" : "text-slate-400"
            }`}
          >
            {values.message.length}/{MESSAGE_MIN_LENGTH} mín.
          </span>
        </div>
        <textarea
          id="message"
          name="message"
          required
          minLength={MESSAGE_MIN_LENGTH}
          maxLength={4000}
          rows={6}
          value={values.message}
          onChange={setField("message")}
          className={inputClass}
          placeholder="Cuéntanos el contexto de tu equipo, el desafío que enfrentan y qué esperas lograr con la capacitación. Mientras más detalle nos des, mejor podemos ayudarte (mínimo 100 caracteres)."
        />
      </div>

      {state.status === "error" && (
        <p role="alert" className="rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="inline-flex w-full items-center justify-center rounded-full bg-blue-600 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {pending ? "Enviando…" : "Enviar mensaje"}
      </button>
    </form>
  );
}
