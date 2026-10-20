import Image from "next/image";
import Link from "next/link";
import { smlCaseStudy } from "@/lib/content";

export function SmlCaseStudy() {
  return (
    <div className="grid overflow-hidden rounded-[2rem] bg-navy-950 text-cream-50 lg:grid-cols-2">
      <div className="relative min-h-[18rem] lg:min-h-full">
        <Image
          src={smlCaseStudy.image}
          alt="Jornada de capacitación de ORGCAP para el Servicio Médico Legal"
          fill
          sizes="(min-width: 1024px) 40rem, 100vw"
          className="object-cover"
        />
      </div>

      <div className="flex flex-col justify-center p-8 sm:p-12">
        <span className="text-sm font-semibold uppercase tracking-wide text-amber-400">
          Experiencia destacada
        </span>
        <h3 className="mt-3 font-serif text-2xl leading-snug sm:text-3xl">{smlCaseStudy.title}</h3>
        <p className="mt-2 text-sm font-medium text-cream-50/60">{smlCaseStudy.client}</p>

        <p className="mt-5 text-base leading-relaxed text-cream-50/80">{smlCaseStudy.summary}</p>

        <ul className="mt-6 space-y-2.5">
          {smlCaseStudy.details.map((detail) => (
            <li key={detail} className="flex gap-3 text-sm leading-relaxed text-cream-50/80">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" />
              {detail}
            </li>
          ))}
        </ul>

        <p className="mt-6 text-xs italic text-cream-50/45">{smlCaseStudy.note}</p>

        <Link
          href="/blog/jornadas-sml-gestion-emocional"
          className="mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-amber-500 px-5 py-2.5 text-sm font-semibold text-navy-950 transition-colors hover:bg-amber-400"
        >
          Leer el caso completo
        </Link>
      </div>
    </div>
  );
}
