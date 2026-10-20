import Image from "next/image";
import { team } from "@/lib/content";

export function TeamGrid({ full = false }: { full?: boolean }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {team.map((person) => (
        <div
          key={person.slug}
          className="flex flex-col overflow-hidden rounded-[1.75rem] bg-cream-50 shadow-sm ring-1 ring-navy-900/5"
        >
          <div className="relative aspect-[4/5] w-full">
            <Image
              src={person.image}
              alt={`Retrato de ${person.name}`}
              fill
              sizes="(min-width: 1024px) 24rem, 90vw"
              className="object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="font-serif text-xl text-navy-950">{person.name}</h3>
            <p className="mt-1 text-sm font-semibold text-amber-600">{person.role}</p>
            <p className="mt-3 text-sm leading-relaxed text-navy-900/70">{person.summary}</p>
            {full && (
              <div className="mt-4 space-y-3 border-t border-navy-900/10 pt-4">
                {person.bio.map((paragraph, i) => (
                  <p key={i} className="text-sm leading-relaxed text-navy-900/65">
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
