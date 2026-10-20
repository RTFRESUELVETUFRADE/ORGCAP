import { Hero } from "@/components/hero";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { SectorCards } from "@/components/sector-cards";
import { ValuesSection } from "@/components/values-section";
import { SmlCaseStudy } from "@/components/sml-case-study";
import { VideoGallery } from "@/components/video-gallery";
import { TeamGrid } from "@/components/team-grid";
import { CtaBand } from "@/components/cta-band";
import Link from "next/link";
import { processSteps } from "@/lib/content";

export default function Home() {
  return (
    <>
      <Hero />

      <section className="py-20 sm:py-24" id="sectores">
        <Container>
          <SectionHeading
            eyebrow="Dónde trabajamos"
            title="Una propuesta distinta para cada sector"
            description="Adaptamos contenidos, metodología y experiencia de aprendizaje al sector, al perfil de los participantes y al problema que se quiere resolver."
          />
          <div className="mt-10">
            <SectorCards />
          </div>
        </Container>
      </section>

      <section className="bg-navy-50/60 py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Cómo trabajamos"
            title="De la necesidad a la aplicación"
            description="Nuestro modelo se estructura en torno a la pertinencia de la intervención, no a un programa estándar que se repite con cualquier cliente."
          />
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => (
              <div key={step.title} className="relative rounded-2xl bg-cream-50 p-6 ring-1 ring-navy-900/5">
                <span className="font-serif text-3xl text-amber-500">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 font-serif text-lg text-navy-950">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-900/65">{step.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24" id="experiencia">
        <Container>
          <SmlCaseStudy />
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Nuestros valores"
            title="Principios que guían cada capacitación"
          />
          <div className="mt-12">
            <ValuesSection />
          </div>
        </Container>
      </section>

      <section className="bg-navy-50/60 py-20 sm:py-24">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Conócenos en video"
              title="Jornadas, testimonios y contenidos propios"
            />
            <a
              href="https://www.youtube.com/@ORGCAP"
              target="_blank"
              rel="noreferrer"
              className="text-sm font-semibold text-navy-900 hover:text-amber-600"
            >
              Ver canal completo en YouTube →
            </a>
          </div>
          <div className="mt-10">
            <VideoGallery />
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading eyebrow="Nuestro equipo" title="Las personas detrás de ORGCAP" />
            <Link href="/nosotros" className="text-sm font-semibold text-navy-900 hover:text-amber-600">
              Conocer al equipo completo →
            </Link>
          </div>
          <div className="mt-10">
            <TeamGrid />
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
