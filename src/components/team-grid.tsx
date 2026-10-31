import Image from "next/image";
import { team } from "@/lib/content";

export function TeamGrid({ full = false }: { full?: boolean }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {team.map((person) => (
        <div
          key={person.slug}
          className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200"
        >
          <div className="relative aspect-[4/5] w-full">
            <Image
              src={person.image}
              alt={`Retrato de ${person.name}`}
              fill
              sizes="(min-width: 1024px) 24rem, 90vw"
              className="object-cover"
            />
            <a
              href={person.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label={`LinkedIn de ${person.name}`}
              className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-blue-700 text-white shadow-md ring-2 ring-white transition-colors hover:bg-blue-600"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.82-2.05 3.75-2.05C20.9 8.65 22 11 22 14.2V21h-4v-5.9c0-1.4-.03-3.2-1.95-3.2-1.95 0-2.25 1.52-2.25 3.1V21H9z" />
              </svg>
            </a>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-blue-950">{person.name}</h3>
            <p className="mt-1 text-sm font-semibold text-blue-600">{person.role}</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">{person.summary}</p>
            {full && (
              <div className="mt-4 space-y-3 border-t border-slate-200 pt-4">
                {person.bio.map((paragraph, i) => (
                  <p key={i} className="text-sm leading-relaxed text-slate-600">
                    {paragraph}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
