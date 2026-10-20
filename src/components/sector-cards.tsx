import Image from "next/image";
import Link from "next/link";
import { sectors } from "@/lib/content";

export function SectorCards() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {sectors.map((sector) => (
        <div
          key={sector.slug}
          className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 transition-shadow hover:shadow-xl"
        >
          <div className="relative h-52 w-full overflow-hidden">
            <Image
              src={sector.image}
              alt={sector.imageAlt}
              fill
              sizes="(min-width: 768px) 33vw, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-950/70 via-blue-950/0 to-blue-950/0" />
            <span className="absolute bottom-4 left-5 text-xl font-semibold text-white">{sector.name}</span>
          </div>
          <div className="flex flex-1 flex-col p-6">
            <p className="text-sm font-semibold text-blue-600">{sector.short}</p>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{sector.description}</p>
            <Link
              href={`/servicios#${sector.slug}`}
              className="mt-5 inline-flex w-fit items-center gap-1.5 rounded-full border-2 border-blue-600 px-4 py-2 text-sm font-semibold text-blue-600 transition-colors hover:bg-blue-600 hover:text-white"
            >
              Ver más
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
