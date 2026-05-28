import type { MetadataRoute } from "next";
import { POSTS } from "@/lib/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const postUrls: MetadataRoute.Sitemap = POSTS.map((p) => ({
    url: `https://korana.ai/research/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    {
      url: "https://korana.ai",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://korana.ai/mail",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://korana.ai/research",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...postUrls,
  ];
}
