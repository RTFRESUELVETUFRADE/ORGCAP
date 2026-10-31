"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
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
  imagePosition?: string;
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
    // The taekwondo group photo is a tall portrait crop; a plain center crop
    // cuts through people's faces, so the focal point is pulled up to where
    // they actually are instead of the image's vertical middle.
    imagePosition: program.slug === "alto-rendimiento" ? "50% 40%" : undefined,
  })),
];

export function Hero() {
  const trackRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [active, setActive] = useState(0);

  const goTo = useCallback((index: number) => {
    const clamped = Math.max(0, Math.min(slides.length - 1, index));
    slideRefs.current[clamped]?.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const width = track.clientWidth || 1;
        setActive(Math.round(track.scrollLeft / width));
      });
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      track.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="relative">
      <div
        ref={trackRef}
        tabIndex={0}
        aria-label="Carrusel de presentación de ORGCAP, desliza o usa las flechas para navegar"
        className="no-scrollbar flex snap-x snap-mandatory overflow-x-auto overflow-y-hidden scroll-smooth"
      >
        {slides.map((slide, i) => (
          <div
            key={slide.id}
            ref={(el) => {
              slideRefs.current[i] = el;
            }}
            className="relative flex min-h-[32rem] w-full shrink-0 snap-start items-end overflow-hidden sm:min-h-[38rem]"
          >
            <Image
              src={slide.image}
              alt={slide.imageAlt}
              fill
              priority={i === 0}
              sizes="100vw"
              className="object-cover"
              style={slide.imagePosition ? { objectPosition: slide.imagePosition } : undefined}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-950/75 to-blue-950/30" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-950/60 via-blue-950/10 to-transparent" />

            <Container className="relative py-14 sm:py-20">
              <h1 className="max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
                {slide.headline.split("\n").map((line, idx) => (
                  <span key={idx} className="block">
                    {line}
                  </span>
                ))}
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
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={() => goTo(active - 1)}
        disabled={active === 0}
        aria-label="Diapositiva anterior"
        className="absolute left-3 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition-colors hover:bg-white/30 disabled:pointer-events-none disabled:opacity-0 sm:flex"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
          <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <button
        type="button"
        onClick={() => goTo(active + 1)}
        disabled={active === slides.length - 1}
        aria-label="Siguiente diapositiva"
        className="absolute right-3 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition-colors hover:bg-white/30 disabled:pointer-events-none disabled:opacity-0 sm:flex"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
          <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <div className="absolute inset-x-0 bottom-5 flex items-center justify-center gap-2.5">
        {slides.map((slide, i) => (
          <button
            key={slide.id}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Ir a ${slide.headline}`}
            aria-current={i === active}
            className={`h-2.5 rounded-full border border-white/70 transition-all ${
              i === active ? "w-7 bg-white" : "w-2.5 bg-transparent hover:bg-white/40"
            }`}
          />
        ))}
      </div>
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
