import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { TeamGrid } from "@/components/team-grid";
import { ValuesSection } from "@/components/values-section";
import { CtaBand } from "@/components/cta-band";
import { about, certificate, values } from "@/lib/content";

export const metadata: Metadata = {
  title: "Sobre nosotros",
  description: "Quiénes somos, cómo trabajamos y el equipo detrás de ORGCAP Capacitación Profesional.",
};

export default function NosotrosPage() {
  return (
    <>
      <section className="relative overflow-hidden pb-6 pt-16 sm:pt-20">
        <Container className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-blue-950 sm:text-5xl">
              Un equipo chileno que organiza, capacita y acompaña
            </h1>
            <p className="mt-5 text-base leading-relaxed text-slate-600">{about.intro}</p>
            <p className="mt-4 text-base leading-relaxed text-slate-600">{about.focus}</p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="/images/about/manuel-hablando.jpg"
              alt="Director de ORGCAP exponiendo frente a un grupo de participantes en una jornada"
              fill
              sizes="(min-width: 1024px) 32rem, 90vw"
              className="object-cover"
            />
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading title="Conoce al equipo de expertos" />
          <div className="mt-10">
            <TeamGrid full />
          </div>
        </Container>
      </section>

      <section className="bg-blue-950 py-16 sm:py-20">
        <Container>
          <SectionHeading title="Lo que no transamos en ninguna jornada" tone="light" />
          <div className="mt-12">
            <ValuesSection
              items={values}
              image="/images/valores/equipo-puños.jpg"
              imageAlt="Equipo de ORGCAP uniendo las manos en señal de colaboración"
            />
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="max-w-3xl">
          <Link
            href="/nosotros/certificado"
            className="group flex flex-col gap-5 rounded-2xl bg-blue-50 p-8 ring-1 ring-blue-100 transition-colors hover:bg-blue-100/70 sm:flex-row sm:items-center sm:p-10"
          >
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="12" cy="12" r="9" />
              </svg>
            </span>
            <div className="flex-1">
              <h2 className="text-xl font-semibold text-blue-950">
                Somos una OTEC certificada bajo la norma {certificate.title.replace("Certificación ", "")}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Nuestro sistema de gestión de calidad fue auditado y certificado por {certificate.issuer}. Revisa el
                certificado completo y su alcance.
              </p>
            </div>
            <span className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-blue-700 group-hover:text-blue-600">
              Ver certificado →
            </span>
          </Link>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
