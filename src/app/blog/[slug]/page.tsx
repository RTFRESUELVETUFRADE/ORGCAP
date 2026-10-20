import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/container";
import { CtaBand } from "@/components/cta-band";
import { blogPosts } from "@/lib/content";

const dateFormatter = new Intl.DateTimeFormat("es-CL", { day: "numeric", month: "long", year: "numeric" });

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata(props: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { title: post.title, description: post.excerpt, images: [{ url: post.image }] },
  };
}

export default async function BlogPostPage(props: PageProps<"/blog/[slug]">) {
  const { slug } = await props.params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <article className="py-16 sm:py-20">
        <Container className="max-w-3xl">
          <Link href="/blog" className="text-sm font-semibold text-slate-500 hover:text-blue-600">
            ← Volver al blog
          </Link>
          <h1 className="mt-6 text-3xl font-semibold leading-tight tracking-tight text-blue-950 sm:text-4xl">
            {post.title}
          </h1>
          <time dateTime={post.date} className="mt-2 block text-sm font-medium text-slate-500">
            {dateFormatter.format(new Date(post.date))}
          </time>

          <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-2xl">
            <Image
              src={post.image}
              alt=""
              fill
              priority
              sizes="(min-width: 1024px) 48rem, 100vw"
              className="object-cover"
            />
          </div>

          <div className="prose-custom mt-10 space-y-5">
            {post.body.map((paragraph, i) => (
              <p key={i} className="text-base leading-relaxed text-slate-700">
                {paragraph}
              </p>
            ))}
          </div>
        </Container>
      </article>

      {related.length > 0 && (
        <section className="bg-slate-50 py-16">
          <Container className="max-w-3xl">
            <h2 className="text-xl font-semibold text-blue-950">También te puede interesar</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="rounded-2xl bg-white p-5 text-sm font-medium text-blue-950 ring-1 ring-slate-200 hover:text-blue-600"
                >
                  {p.title}
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      <CtaBand />
    </>
  );
}
