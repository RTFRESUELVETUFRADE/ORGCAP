import Image from "next/image";
import Link from "next/link";
import { Container } from "./container";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-10 pb-20 sm:pt-14 sm:pb-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-24 h-[30rem] w-[30rem] rounded-full bg-amber-100/70 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 bottom-0 h-[24rem] w-[24rem] rounded-full bg-navy-100/70 blur-3xl"
      />

      <Container className="relative grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-navy-900/5 px-4 py-1.5 text-sm font-medium text-navy-800">
            OTEC chilena · Educación, empresas y minería
          </span>

          <h1 className="mt-6 font-serif text-4xl leading-[1.08] tracking-tight text-navy-950 sm:text-5xl lg:text-[3.4rem]">
            Capacitación que se entiende, se aplica y se nota
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-navy-900/75">
            Diseñamos formación a la medida de cada equipo, conectando conocimientos técnicos con
            comunicación, liderazgo y bienestar. Porque un aprendizaje solo vale cuando se traslada
            a la práctica.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="/contacto"
              className="rounded-full bg-navy-900 px-7 py-3.5 text-base font-semibold text-cream-50 shadow-sm transition-transform hover:-translate-y-0.5 hover:bg-navy-800"
            >
              Conversemos de tu equipo
            </Link>
            <Link
              href="/servicios"
              className="rounded-full border-2 border-navy-900/15 px-7 py-3.5 text-base font-semibold text-navy-900 transition-colors hover:border-navy-900/30 hover:bg-navy-900/5"
            >
              Ver nuestros servicios
            </Link>
          </div>

          <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-navy-900/10 pt-8">
            <div>
              <dt className="sr-only">Sectores</dt>
              <dd className="font-serif text-2xl text-navy-950">3</dd>
              <p className="text-sm text-navy-900/60">sectores estratégicos</p>
            </div>
            <div>
              <dt className="sr-only">Modalidad</dt>
              <dd className="font-serif text-2xl text-navy-950">100%</dd>
              <p className="text-sm text-navy-900/60">presencial, online o mixta</p>
            </div>
            <div>
              <dt className="sr-only">Origen</dt>
              <dd className="font-serif text-2xl text-navy-950">CL</dd>
              <p className="text-sm text-navy-900/60">equipo 100% chileno</p>
            </div>
          </dl>
        </div>

        <div className="relative hidden sm:block">
          <div className="grid grid-cols-5 grid-rows-6 gap-3">
            <div className="relative col-span-3 row-span-4 overflow-hidden rounded-[1.75rem] shadow-xl shadow-navy-950/10">
              <Image
                src="/images/hero/hero-circulo-grupo.jpg"
                alt="Jornada de capacitación ORGCAP con un grupo de participantes conversando en círculo"
                fill
                priority
                sizes="(min-width: 1024px) 28rem, 60vw"
                className="object-cover"
              />
            </div>
            <div className="relative col-span-2 col-start-4 row-span-3 overflow-hidden rounded-[1.5rem] shadow-xl shadow-navy-950/10">
              <Image
                src="/images/hero/hero-educacion.jpg"
                alt="Profesora ayudando a un estudiante en una actividad de aprendizaje"
                fill
                sizes="(min-width: 1024px) 14rem, 40vw"
                className="object-cover"
              />
            </div>
            <div className="relative col-span-2 col-start-4 row-span-3 row-start-4 overflow-hidden rounded-[1.5rem] shadow-xl shadow-navy-950/10">
              <Image
                src="/images/hero/hero-gesto.jpg"
                alt="Facilitador de ORGCAP explicando un concepto durante un taller"
                fill
                sizes="(min-width: 1024px) 14rem, 40vw"
                className="object-cover"
              />
            </div>
            <div className="relative col-span-3 row-span-2 row-start-5 overflow-hidden rounded-[1.5rem] shadow-xl shadow-navy-950/10">
              <Image
                src="/images/about/manuel-hablando.jpg"
                alt="Director de ORGCAP exponiendo frente a un grupo de participantes"
                fill
                sizes="(min-width: 1024px) 20rem, 50vw"
                className="object-cover"
              />
            </div>
          </div>
          <div
            aria-hidden
            className="absolute -bottom-5 -left-5 rounded-2xl bg-amber-500 px-5 py-3 text-sm font-semibold text-navy-950 shadow-lg"
          >
            Jornadas reales, equipos reales
          </div>
        </div>
      </Container>
    </section>
  );
}
