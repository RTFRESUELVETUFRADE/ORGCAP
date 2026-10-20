import Image from "next/image";
import Link from "next/link";
import { Container } from "./container";

export function CtaBand({
  title = "Conversemos sobre lo que tu equipo necesita",
  description = "Cuéntanos tu contexto y diseñamos una propuesta a la medida: presencial, online o mixta.",
  cta = "Escríbenos",
  href = "/contacto",
}: {
  title?: string;
  description?: string;
  cta?: string;
  href?: string;
}) {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24">
      <Image
        src="/images/about/cta-banda.jpg"
        alt="Equipo celebrando con las manos levantadas al atardecer"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-navy-950/80" />
      <Container className="relative text-center">
        <h2 className="mx-auto max-w-2xl font-serif text-3xl leading-tight text-cream-50 sm:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-cream-50/75">
          {description}
        </p>
        <Link
          href={href}
          className="mt-8 inline-flex rounded-full bg-amber-500 px-8 py-3.5 text-base font-semibold text-navy-950 shadow-lg transition-transform hover:-translate-y-0.5 hover:bg-amber-400"
        >
          {cta}
        </Link>
      </Container>
    </section>
  );
}
