import Image from "next/image";
import { type Value } from "@/lib/content";

export function ValuesSection({
  items,
  intro,
  image,
  imageAlt,
}: {
  items: Value[];
  intro?: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
      <div>
        {intro && <p className="text-lg leading-relaxed text-white/80">{intro}</p>}
        <ul className="mt-7 space-y-5">
          {items.map((value) => (
            <li key={value.title}>
              <p className="text-lg leading-relaxed text-white">
                <span className="font-semibold">{value.title}:</span>{" "}
                <span className="text-white/75">{value.description}</span>
              </p>
            </li>
          ))}
        </ul>
      </div>

      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl lg:aspect-[5/4]">
        <Image src={image} alt={imageAlt} fill sizes="(min-width: 1024px) 32rem, 90vw" className="object-cover" />
      </div>
    </div>
  );
}
