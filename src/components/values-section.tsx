import Image from "next/image";
import { values } from "@/lib/content";

const icons = [
  // excelencia
  <path key="a" d="M12 3l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.1-5.4 3.1 1.3-6-4.6-4.1 6.1-.6z" />,
  // liderazgo
  <path key="b" d="M12 3a4 4 0 110 8 4 4 0 010-8zM5 21a7 7 0 0114 0" />,
  // bienestar
  <path key="c" d="M12 21s-7-4.35-7-9.5A4.5 4.5 0 0112 7a4.5 4.5 0 017 4.5C19 16.65 12 21 12 21z" />,
  // futuro
  <path key="d" d="M4 12h16M14 6l6 6-6 6" />,
  // pertinencia
  <path key="e" d="M12 2L3 7l9 5 9-5-9-5zM3 17l9 5 9-5M3 12l9 5 9-5" />,
];

export function ValuesSection() {
  return (
    <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
      <div className="relative order-2 lg:order-1">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
          <Image
            src="/images/valores/reflexion.jpg"
            alt="Participante reflexionando durante una capacitación de ORGCAP"
            fill
            sizes="(min-width: 1024px) 32rem, 90vw"
            className="object-cover"
          />
        </div>
        <div className="absolute -right-4 -top-4 hidden w-36 overflow-hidden rounded-2xl border-4 border-cream-100 shadow-lg sm:block">
          <Image
            src="/images/valores/equipo-puños.jpg"
            alt="Equipo uniendo las manos en señal de colaboración"
            width={200}
            height={200}
            className="h-32 w-full object-cover"
          />
        </div>
      </div>

      <div className="order-1 lg:order-2">
        <ul className="space-y-6">
          {values.map((value, i) => (
            <li key={value.title} className="flex gap-4">
              <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-700">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round">
                  {icons[i]}
                </svg>
              </span>
              <div>
                <h3 className="font-serif text-lg text-navy-950">{value.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-navy-900/70">{value.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
