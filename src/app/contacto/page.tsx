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
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-blue-950 sm:text-5xl">
            Conversemos de tu equipo
          </h1>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-slate-600">
            Cuéntanos tu contexto, tu sector y lo que necesitas fortalecer. Te respondemos
            directamente, sin formularios eternos ni respuestas automáticas genéricas.
          </p>

          <div className="mt-10 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">
            <ContactForm />
          </div>
        </div>

        <div className="space-y-6">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="/images/sml/sml-tecnicos-grupo.jpg"
              alt="Equipo de ORGCAP y participantes conversando durante una jornada de capacitación"
              fill
              sizes="(min-width: 1024px) 24rem, 90vw"
              className="object-cover"
            />
          </div>

          <div className="rounded-2xl bg-blue-950 p-7 text-white">
            <h2 className="text-xl font-semibold">Información de contacto</h2>
            <ul className="mt-5 space-y-4 text-sm">
              <li>
                <span className="block text-white/50">WhatsApp</span>
                <a href={site.whatsapp} target="_blank" rel="noreferrer" className="font-medium hover:text-blue-200">
                  {site.phone}
                </a>
              </li>
              <li>
                <span className="block text-white/50">Correo</span>
                <a href={`mailto:${site.email}`} className="font-medium hover:text-blue-200">
                  {site.email}
                </a>
              </li>
              <li>
                <span className="block text-white/50">Dirección</span>
                <span className="font-medium">{site.address}</span>
              </li>
              <li>
                <span className="block text-white/50">Instagram</span>
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium hover:text-blue-200"
                >
                  {site.instagramHandle}
                </a>
              </li>
              <li>
                <span className="block text-white/50">Facebook</span>
                <a href={site.facebook} target="_blank" rel="noreferrer" className="font-medium hover:text-blue-200">
                  {site.facebookHandle}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
