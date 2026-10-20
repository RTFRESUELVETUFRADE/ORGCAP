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
        <h1 className="text-4xl font-semibold leading-tight tracking-tight text-blue-950 sm:text-5xl">
          Notas desde nuestras jornadas
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
          Reflexiones y casos reales sobre capacitación, bienestar emocional y liderazgo en
          educación, empresas y minería.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 transition-shadow hover:shadow-lg"
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
                <h2 className="text-lg font-semibold leading-snug text-blue-950">{post.title}</h2>
                <time dateTime={post.date} className="mt-1.5 block text-xs font-medium text-slate-400">
                  {dateFormatter.format(new Date(post.date))}
                </time>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{post.excerpt}</p>
                <span className="mt-4 text-sm font-semibold text-blue-700 group-hover:text-blue-600">
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
