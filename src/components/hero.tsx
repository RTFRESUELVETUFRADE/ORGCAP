import Image from "next/image";
import Link from "next/link";
import { Container } from "./container";
import { hero, programs } from "@/lib/content";

type Slide = {
  id: string;
  headline: string;
  lead: string;
  cta: string;
  ctaHref: string;
  secondaryCta?: string;
  secondaryHref?: string;
  image: string;
  imageAlt: string;
};

const slides: Slide[] = [
  {
    id: "sml",
    headline: hero.headline,
    lead: hero.lead,
    cta: hero.cta,
    ctaHref: hero.ctaHref,
    secondaryCta: hero.secondaryCta,
    secondaryHref: hero.secondaryHref,
    image: "/images/hero/hero-circulo-grupo.jpg",
    imageAlt: "Jornada de capacitación de ORGCAP: un grupo de participantes conversando en círculo",
  },
  ...programs.map((program) => ({
    id: program.slug,
    headline: program.heroHeadline,
    lead: program.heroLead,
    cta: "Conocer el seminario",
    ctaHref: `/servicios#${program.slug}`,
    image: program.heroImage,
    imageAlt: program.heroImageAlt,
  })),
];

export function Hero() {
  return (
    <div className="snap-y snap-proximity">
      {slides.map((slide, i) => (
        <section
          key={slide.id}
          id={slide.id}
          className="relative flex min-h-[32rem] scroll-mt-18 snap-start items-end overflow-hidden sm:min-h-[38rem]"
        >
          <Image
            src={slide.image}
            alt={slide.imageAlt}
            fill
            priority={i === 0}
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-950/75 to-blue-950/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/60 via-blue-950/10 to-transparent" />

          <Container className="relative py-14 sm:py-20">
            <h1 className="max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
              {slide.headline}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">{slide.lead}</p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href={slide.ctaHref}
                className="rounded-full bg-white px-7 py-3.5 text-base font-semibold text-blue-900 shadow-lg transition-transform hover:-translate-y-0.5 hover:bg-blue-50"
              >
                {slide.cta}
              </Link>
              {slide.secondaryCta && slide.secondaryHref && (
                <Link
                  href={slide.secondaryHref}
                  className="rounded-full border-2 border-white/40 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
                >
                  {slide.secondaryCta}
                </Link>
              )}
            </div>
            <Image
              src="/images/brand/wordmark-white.png"
              alt="ORGCAP — Formación y Capacitación"
              width={1020}
              height={307}
              className="mt-12 h-10 w-auto opacity-90 sm:h-12"
            />
          </Container>

          <div className="absolute right-5 top-1/2 hidden -translate-y-1/2 flex-col gap-3 sm:flex">
            {slides.map((dot) => (
              <a
                key={dot.id}
                href={`#${dot.id}`}
                aria-label={`Ir a ${dot.headline}`}
                className={`h-2.5 w-2.5 rounded-full border border-white/70 transition-colors ${
                  dot.id === slide.id ? "bg-white" : "bg-transparent hover:bg-white/40"
                }`}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
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
