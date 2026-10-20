import Image from "next/image";
import Link from "next/link";
import { Container } from "./container";

export function CtaBand({
  title = "Conversemos sobre lo que tu equipo necesita",
  description = "Cuéntanos tu contexto y diseñamos una propuesta a la medida: presencial, online o mixta.",
  cta = "Escríbenos",
  href = "/contacto",
  image = "/images/about/cta-banda.jpg",
  imageAlt = "Equipo de ORGCAP trabajando junto a participantes de una jornada",
}: {
  title?: string;
  description?: string;
  cta?: string;
  href?: string;
  image?: string;
  imageAlt?: string;
}) {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24">
      <Image src={image} alt={imageAlt} fill sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-blue-950/82" />
      <Container className="relative text-center">
        <h2 className="mx-auto max-w-2xl text-3xl font-semibold leading-tight text-white sm:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/75">{description}</p>
        <Link
          href={href}
          className="mt-8 inline-flex rounded-full bg-white px-8 py-3.5 text-base font-semibold text-blue-900 shadow-lg transition-transform hover:-translate-y-0.5 hover:bg-blue-50"
        >
          {cta}
        </Link>
      </Container>
    </section>
  );
}
