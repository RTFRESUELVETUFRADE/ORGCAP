import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { TeamGrid } from "@/components/team-grid";
import { ValuesSection } from "@/components/values-section";
import { CtaBand } from "@/components/cta-band";
import { about, actos } from "@/lib/content";

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
            <span className="text-sm font-semibold uppercase tracking-wide text-amber-600">
              Sobre nosotros
            </span>
            <h1 className="mt-3 font-serif text-4xl leading-tight tracking-tight text-navy-950 sm:text-5xl">
              Un equipo chileno que organiza, capacita y acompaña
            </h1>
            <p className="mt-5 text-base leading-relaxed text-navy-900/70">{about.intro}</p>
            <p className="mt-4 text-base leading-relaxed text-navy-900/70">{about.focus}</p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem]">
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
          <SectionHeading eyebrow="Nuestro equipo" title="Conoce al equipo de expertos" />
          <div className="mt-10">
            <TeamGrid full />
          </div>
        </Container>
      </section>

      <section className="bg-navy-50/60 py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="Nuestros valores" title="Lo que no transamos en ninguna jornada" />
          <div className="mt-12">
            <ValuesSection />
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="max-w-3xl">
          <div className="rounded-[1.75rem] bg-cream-50 p-8 ring-1 ring-navy-900/5 sm:p-10">
            <span className="text-sm font-semibold uppercase tracking-wide text-amber-600">
              Próximamente
            </span>
            <h2 className="mt-3 font-serif text-2xl text-navy-950">{actos.title}</h2>
            <p className="mt-4 text-sm leading-relaxed text-navy-900/65">{actos.body}</p>
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
