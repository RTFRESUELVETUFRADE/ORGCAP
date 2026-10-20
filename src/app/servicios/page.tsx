import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { CtaBand } from "@/components/cta-band";
import { sectors, methodologies, ppdu, processSteps } from "@/lib/content";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Capacitación para educación, empresas y minería: diagnóstico, diseño a medida, talleres, consultorías y acompañamiento.",
};

export default function ServiciosPage() {
  return (
    <>
      <section className="pb-6 pt-16 sm:pt-20">
        <Container className="max-w-3xl">
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-blue-950 sm:text-5xl">
            Formación diseñada para tu sector, no un curso genérico
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Trabajamos con instituciones públicas y privadas, establecimientos educacionales,
            empresas, equipos profesionales, mandos medios, directivos y ejecutivos. La forma de
            intervención puede variar, pero mantenemos una misma premisa: la solución formativa
            debe guardar relación directa con el desafío que enfrenta tu organización.
          </p>
        </Container>
      </section>

      {sectors.map((sector, i) => (
        <section
          key={sector.slug}
          id={sector.slug}
          className={`scroll-mt-24 py-16 sm:py-20 ${i % 2 === 1 ? "bg-slate-50" : ""}`}
        >
          <Container>
            <div
              className={`grid items-center gap-10 lg:grid-cols-2 ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src={sector.servicesImage ?? sector.image}
                  alt={sector.servicesImageAlt ?? sector.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 32rem, 90vw"
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-semibold text-blue-950">{sector.name}</h2>
                <p className="mt-2 text-lg font-medium text-blue-600">{sector.short}</p>
                <p className="mt-4 text-base leading-relaxed text-slate-600">{sector.description}</p>
                <ul className="mt-6 space-y-2.5">
                  {sector.needs.map((need) => (
                    <li key={need} className="flex gap-3 text-sm leading-relaxed text-slate-700">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                      {need}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Container>
        </section>
      ))}

      <section className="bg-blue-950 py-16 sm:py-20">
        <Container>
          <SectionHeading title="De la necesidad a la aplicación" tone="light" />
          <div className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2">
            {processSteps.map((step, i) => (
              <div key={step.title} className="flex gap-5">
                <span className="text-2xl font-semibold text-blue-400">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/70">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            title="Herramientas que integramos según cada programa"
            description="La selección depende del objetivo del programa y del contexto institucional. No son una intervención clínica: cuando se requiere atención especializada, derivamos a los profesionales pertinentes."
          />
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {methodologies.map((m) => (
              <div
                key={m}
                className="rounded-2xl bg-slate-50 px-5 py-4 text-sm font-medium text-blue-950 ring-1 ring-slate-200"
              >
                {m}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid items-center gap-10 overflow-hidden rounded-2xl bg-blue-50 p-8 sm:p-12 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold text-blue-950 sm:text-3xl">{ppdu.title}</h2>
              <div className="mt-4 space-y-4">
                {ppdu.body.map((p, i) => (
                  <p
                    key={i}
                    className={`text-sm leading-relaxed ${
                      i === ppdu.body.length - 1 ? "italic text-slate-500" : "text-slate-600"
                    }`}
                  >
                    {p}
                  </p>
                ))}
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src={ppdu.image}
                alt="Sala de formación con asientos dispuestos para una jornada académica"
                fill
                sizes="(min-width: 1024px) 28rem, 90vw"
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      <CtaBand
        title="¿Qué desafío quieres resolver con tu equipo?"
        description="Cuéntanos tu sector y el contexto del equipo. Te respondemos con una propuesta concreta, no con un catálogo genérico."
      />
    </>
  );
}
