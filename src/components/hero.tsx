import Image from "next/image";
import Link from "next/link";
import { Container } from "./container";
import { hero } from "@/lib/content";

export function Hero() {
  return (
    <section className="relative flex min-h-[32rem] items-end overflow-hidden sm:min-h-[38rem]">
      <Image
        src="/images/hero/hero-circulo-grupo.jpg"
        alt="Jornada de capacitación de ORGCAP: un grupo de participantes conversando en círculo"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-950/75 to-blue-950/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950/60 via-blue-950/10 to-transparent" />

      <Container className="relative py-14 sm:py-20">
        <h1 className="max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
          {hero.headline}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
          {hero.lead}
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-4">
          <Link
            href={hero.ctaHref}
            className="rounded-full bg-white px-7 py-3.5 text-base font-semibold text-blue-900 shadow-lg transition-transform hover:-translate-y-0.5 hover:bg-blue-50"
          >
            {hero.cta}
          </Link>
          <Link
            href={hero.secondaryHref}
            className="rounded-full border-2 border-white/40 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
          >
            {hero.secondaryCta}
          </Link>
        </div>
        <Image
          src="/images/brand/wordmark-white.png"
          alt="ORGCAP — Formación y Capacitación"
          width={1020}
          height={307}
          className="mt-12 h-10 w-auto opacity-90 sm:h-12"
        />
      </Container>
    </section>
  );
}

export function HeroBanner() {
  return (
    <div className="bg-blue-600">
      <Container className="grid gap-3 py-6 sm:grid-cols-2 sm:gap-8 sm:py-7">
        {hero.bannerLines.map((line) => (
          <p key={line} className="text-center text-base font-medium leading-snug text-white sm:text-left sm:text-lg">
            {line}
          </p>
        ))}
      </Container>
    </div>
  );
}
