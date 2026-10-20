import type { MetadataRoute } from "next";
import { site, blogPosts } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/servicios", "/nosotros", "/blog", "/contacto"].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
  }));

  const postRoutes = blogPosts.map((post) => ({
    url: `${site.url}/blog/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  return [...staticRoutes, ...postRoutes];
}
