import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { POSTS, getPost, getRelatedPosts } from "@/lib/posts";
import type { ContentBlock, Post } from "@/lib/posts";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { ResearchCover } from "@/components/research-cover";
import { ResearchCard } from "@/components/research-card";
import s from "../research.module.css";

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} — Korana Research`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://korana.ai/research/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      authors: ["Korana Research"],
      section: post.category,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
    alternates: { canonical: `https://korana.ai/research/${post.slug}` },
  };
}

function formatDate(iso: string) {
  return new Date(iso + "T00:00:00").toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function BlockRenderer({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case "p":
      return <p>{block.text}</p>;
    case "h2":
      return <h2>{block.text}</h2>;
    case "h3":
      return <h3>{block.text}</h3>;
    case "quote":
      return (
        <blockquote>
          {block.text}
          {block.cite && <cite>— {block.cite}</cite>}
        </blockquote>
      );
    case "list":
      return (
        <ul>
          {block.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );
  }
}

/** JSON-LD Article + BreadcrumbList schema for SEO/AEO */
function ArticleSchema({ post }: { post: Post }) {
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: "Korana Research",
      url: "https://korana.ai/research",
    },
    publisher: {
      "@type": "Organization",
      name: "Korana",
      url: "https://korana.ai",
      logo: {
        "@type": "ImageObject",
        url: "https://korana.ai/icon.svg",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://korana.ai/research/${post.slug}`,
    },
    articleSection: post.category,
    wordCount: post.body.reduce((n, b) => {
      if (b.type === "p" || b.type === "quote") return n + b.text.split(/\s+/).length;
      if (b.type === "list") return n + b.items.join(" ").split(/\s+/).length;
      return n;
    }, 0),
    ...(post.series ? { isPartOf: { "@type": "CreativeWorkSeries", name: post.series } } : {}),
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Korana", item: "https://korana.ai" },
      { "@type": "ListItem", position: 2, name: "Research", item: "https://korana.ai/research" },
      { "@type": "ListItem", position: 3, name: post.title, item: `https://korana.ai/research/${post.slug}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
    </>
  );
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = getRelatedPosts(slug);

  return (
    <>
      <ArticleSchema post={post} />
      <Nav />
      <main>
        <div className={s.articleWrap}>
          <Link href="/research" className={s.back}>
            &larr; All posts
          </Link>

          <div className={s.articleHeader}>
            <div className={s.articlePill}>{post.category}</div>
            <h1 className={`display ${s.articleTitle}`}>{post.title}</h1>
            <p className={s.articleSubtitle}>{post.subtitle}</p>
            <div className={s.articleMeta}>
              <span>Korana Research</span>
              <span className={s.metaDot} />
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span className={s.metaDot} />
              <span>{post.readTime}</span>
            </div>
          </div>

          <div className={s.articleCover}>
            <ResearchCover
              gradient={post.coverGradient}
              accent={post.coverAccent}
              variant={post.coverVariant}
            />
          </div>
        </div>

        <article className={s.prose}>
          {post.body.map((block, i) => (
            <BlockRenderer key={i} block={block} />
          ))}
        </article>

        <section className={s.related}>
          <div className="container">
            <p className={s.relatedH}>More from Korana Research</p>
            <div className={s.relatedGrid}>
              {related.map((p) => (
                <ResearchCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer hideCta />
    </>
  );
}
