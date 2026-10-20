import { Hero, HeroBanner } from "@/components/hero";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { SectorCards } from "@/components/sector-cards";
import { ValuesSection } from "@/components/values-section";
import { VideoGallery } from "@/components/video-gallery";
import { DistinguishingSection } from "@/components/distinguishing-section";
import { homeValues } from "@/lib/content";

export default function Home() {
  return (
    <>
      <Hero />
      <HeroBanner />

      <section className="bg-blue-950 py-20 sm:py-24">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading title="Jornadas, testimonios y contenidos propios" tone="light" />
            <a
              href="https://www.youtube.com/@ORGCAP"
              target="_blank"
              rel="noreferrer"
              className="text-sm font-semibold text-blue-300 hover:text-white"
            >
              Ver canal completo en YouTube →
            </a>
          </div>
          <div className="mt-10">
            <VideoGallery />
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24" id="sectores">
        <Container>
          <SectionHeading
            title="Principales áreas de acción"
            description="Hacer realidad tu mejor futuro es nuestra vocación. Adaptamos contenidos, metodología y experiencia de aprendizaje al sector, al perfil de los participantes y al problema que se quiere resolver."
          />
          <div className="mt-10">
            <SectorCards />
          </div>
        </Container>
      </section>

      <section className="bg-blue-950 py-20 sm:py-24">
        <Container>
          <SectionHeading title="Nuestros valores" tone="light" />
          <div className="mt-12">
            <ValuesSection
              items={homeValues}
              intro="En ORGCAP creemos que el éxito sostenido nace de principios claros que guían cada acción. Nuestros valores son el reflejo de nuestro compromiso con las personas, las empresas y el país."
              image="/images/hero/hero-circulo-grupo.jpg"
              imageAlt="Grupo de participantes conversando en círculo durante una jornada ORGCAP"
            />
          </div>
        </Container>
      </section>

      <DistinguishingSection />
    </>
  );
}
