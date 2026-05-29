import type { Metadata } from "next";
import { POSTS } from "@/lib/posts";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { ResearchCard } from "@/components/research-card";
import s from "./research.module.css";

export const metadata: Metadata = {
  title: "Korana.ai Research — Ideas on AI, Work, and the Future of Business",
  description:
    "Thought leadership from Korana.ai on AI-native companies, the AI Chief of Staff, intelligent email, and the future of work.",
  openGraph: {
    title: "Korana.ai Research",
    description: "Ideas on AI, work, and the future of business.",
    url: "https://korana.ai/research",
  },
  alternates: { canonical: "https://korana.ai/research" },
};

function CollectionSchema() {
  const ld = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Korana.ai Research",
    description:
      "Thought leadership on AI-native companies, the AI Chief of Staff, intelligent email, and the future of work.",
    url: "https://korana.ai/research",
    publisher: {
      "@type": "Organization",
      name: "Korana.ai",
      url: "https://korana.ai",
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: POSTS.map((post, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `https://korana.ai/research/${post.slug}`,
        name: post.title,
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
    />
  );
}

export default function ResearchPage() {
  const sorted = [...POSTS].sort((a, b) => b.date.localeCompare(a.date));
  const featured = sorted[0]!;
  const rest = sorted.slice(1);

  return (
    <>
      <CollectionSchema />
      <Nav />
      <main>
        <section className={s.hero}>
          <div className="container">
            <p className={s.eyebrow}>Korana.ai Research</p>
            <h1 className={`display ${s.h1}`}>
              Ideas on AI, work, and<br />
              <em>the future of business.</em>
            </h1>
            <p className={s.subtitle}>
              How AI is reshaping the way companies operate — from the inbox to the org chart.
            </p>
          </div>
        </section>

        <div className="container">
          <div className={s.featured}>
            <ResearchCard post={featured} featured />
          </div>
          <div className={s.grid}>
            {rest.map((post) => (
              <ResearchCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </main>
      <Footer hideCta />
    </>
  );
}
