import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/container";
import { blogPosts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blog",
  description: "Notas de ORGCAP sobre capacitación, bienestar emocional y liderazgo en educación, empresas y minería.",
};

const dateFormatter = new Intl.DateTimeFormat("es-CL", { day: "numeric", month: "long", year: "numeric" });

export default function BlogPage() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <span className="text-sm font-semibold uppercase tracking-wide text-amber-600">Blog</span>
        <h1 className="mt-3 font-serif text-4xl leading-tight tracking-tight text-navy-950 sm:text-5xl">
          Notas desde nuestras jornadas
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-navy-900/70">
          Reflexiones y casos reales sobre capacitación, bienestar emocional y liderazgo en
          educación, empresas y minería.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col overflow-hidden rounded-[1.75rem] bg-cream-50 shadow-sm ring-1 ring-navy-900/5 transition-shadow hover:shadow-lg"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={post.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 24rem, 90vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <time dateTime={post.date} className="text-xs font-semibold uppercase tracking-wide text-amber-600">
                  {dateFormatter.format(new Date(post.date))}
                </time>
                <h2 className="mt-2 font-serif text-lg leading-snug text-navy-950">{post.title}</h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-navy-900/65">{post.excerpt}</p>
                <span className="mt-4 text-sm font-semibold text-navy-900 group-hover:text-amber-600">
                  Leer nota →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
