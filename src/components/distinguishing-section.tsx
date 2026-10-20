import Image from "next/image";
import { Container } from "./container";
import { distinguishing } from "@/lib/content";

export function DistinguishingSection() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24">
      <Image
        src="/images/sml/sml-escuchando.jpg"
        alt="Participantes de ORGCAP escuchando atentamente durante una jornada"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-blue-950/88" />
      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">
            {distinguishing.title}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-white/80">{distinguishing.body}</p>
        </div>
        <ul className="mx-auto mt-10 max-w-2xl space-y-4">
          {distinguishing.points.map((point) => (
            <li key={point} className="flex gap-3 text-base leading-relaxed text-white/85">
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
              {point}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
