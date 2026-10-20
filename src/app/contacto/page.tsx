import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/container";
import { ContactForm } from "@/components/contact-form";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Conversemos sobre la capacitación que necesita tu equipo. Escríbenos y te respondemos a la brevedad.",
};

export default function ContactoPage() {
  return (
    <section className="py-16 sm:py-20">
      <Container className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <span className="text-sm font-semibold uppercase tracking-wide text-amber-600">Contacto</span>
          <h1 className="mt-3 font-serif text-4xl leading-tight tracking-tight text-navy-950 sm:text-5xl">
            Conversemos de tu equipo
          </h1>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-navy-900/70">
            Cuéntanos tu contexto, tu sector y lo que necesitas fortalecer. Te respondemos
            directamente, sin formularios eternos ni respuestas automáticas genéricas.
          </p>

          <div className="mt-10 rounded-[1.75rem] bg-cream-50 p-6 shadow-sm ring-1 ring-navy-900/5 sm:p-8">
            <ContactForm />
          </div>
        </div>

        <div className="space-y-6">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem]">
            <Image
              src="/images/contact/contacto-jardin.jpg"
              alt="Silla de descanso en un jardín, reflejando un espacio de conversación tranquila"
              fill
              sizes="(min-width: 1024px) 24rem, 90vw"
              className="object-cover"
            />
          </div>

          <div className="rounded-[1.75rem] bg-navy-950 p-7 text-cream-50">
            <h2 className="font-serif text-xl">Información de contacto</h2>
            <ul className="mt-5 space-y-4 text-sm">
              <li>
                <span className="block text-cream-50/50">Correo</span>
                <a href={`mailto:${site.email}`} className="font-medium hover:text-amber-400">
                  {site.email}
                </a>
              </li>
              <li>
                <span className="block text-cream-50/50">Instagram</span>
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium hover:text-amber-400"
                >
                  {site.instagramHandle}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
