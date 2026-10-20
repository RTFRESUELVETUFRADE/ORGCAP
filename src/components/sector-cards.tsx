import Image from "next/image";
import Link from "next/link";
import { sectors } from "@/lib/content";

export function SectorCards() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {sectors.map((sector) => (
        <div
          key={sector.slug}
          className="group flex flex-col overflow-hidden rounded-[1.75rem] bg-cream-50 shadow-sm ring-1 ring-navy-900/5 transition-shadow hover:shadow-lg"
        >
          <div className="relative h-52 w-full overflow-hidden">
            <Image
              src={sector.image}
              alt={sector.imageAlt}
              fill
              sizes="(min-width: 768px) 33vw, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-navy-950/0 to-navy-950/0" />
            <span className="absolute bottom-4 left-5 font-serif text-xl text-cream-50">
              {sector.name}
            </span>
          </div>
          <div className="flex flex-1 flex-col p-6">
            <p className="text-sm font-semibold text-amber-600">{sector.short}</p>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-navy-900/70">
              {sector.description}
            </p>
            <Link
              href={`/servicios#${sector.slug}`}
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-900 hover:text-amber-600"
            >
              Conocer más
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
