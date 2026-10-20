"use client";

import { useActionState, useRef, useEffect } from "react";
import { sendContactMessage, type ContactFormState } from "@/app/contacto/actions";

const initialState: ContactFormState = { status: "idle", message: "" };

const inputClass =
  "w-full rounded-xl border border-navy-900/15 bg-cream-50 px-4 py-3 text-sm text-navy-950 placeholder:text-navy-900/40 outline-none transition-colors focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20";

export function ContactForm() {
  const [state, formAction, pending] = useActionState(sendContactMessage, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
    }
  }, [state]);

  return (
    <form ref={formRef} action={formAction} className="space-y-5">
      {/* Honeypot field — hidden from real users, bots tend to fill every input */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-navy-900">
            Nombre *
          </label>
          <input id="name" name="name" type="text" required maxLength={120} className={inputClass} />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-navy-900">
            Correo electrónico *
          </label>
          <input id="email" name="email" type="email" required className={inputClass} />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-navy-900">
            Teléfono (opcional)
          </label>
          <input id="phone" name="phone" type="tel" className={inputClass} />
        </div>
        <div>
          <label htmlFor="sector" className="mb-1.5 block text-sm font-medium text-navy-900">
            Sector de interés
          </label>
          <select id="sector" name="sector" defaultValue="" className={inputClass}>
            <option value="">Selecciona una opción</option>
            <option value="educacion">Educación</option>
            <option value="empresas">Empresas y ejecutivos</option>
            <option value="mineria">Minería</option>
            <option value="otro">Otro</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-navy-900">
          Cuéntanos tu desafío *
        </label>
        <textarea
          id="message"
          name="message"
          required
          minLength={10}
          maxLength={4000}
          rows={5}
          className={inputClass}
          placeholder="¿Qué necesita tu equipo? Mientras más contexto nos des, mejor te podemos ayudar."
        />
      </div>

      {state.status !== "idle" && (
        <p
          role="status"
          className={`rounded-xl px-4 py-3 text-sm font-medium ${
            state.status === "success"
              ? "bg-amber-50 text-amber-700"
              : "bg-red-50 text-red-700"
          }`}
        >
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="inline-flex w-full items-center justify-center rounded-full bg-navy-900 px-7 py-3.5 text-base font-semibold text-cream-50 transition-colors hover:bg-navy-800 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {pending ? "Enviando…" : "Enviar mensaje"}
      </button>
    </form>
  );
}
