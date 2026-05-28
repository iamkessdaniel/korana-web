import Link from "next/link";
import type { Post } from "@/lib/posts";
import { ResearchCover } from "./research-cover";
import s from "./research-card.module.css";

type Props = {
  post: Post;
  featured?: boolean;
};

function formatDate(iso: string) {
  return new Date(iso + "T00:00:00").toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function ResearchCard({ post, featured }: Props) {
  return (
    <Link
      href={`/research/${post.slug}`}
      className={`${s.card} ${featured ? s.featured : ""}`}
    >
      <ResearchCover
        gradient={post.coverGradient}
        accent={post.coverAccent}
        variant={post.coverVariant}
      />
      <div className={s.body}>
        <div className={s.meta}>
          <span className={s.pill}>{post.category}</span>
        </div>
        <h3 className={s.title}>{post.title}</h3>
        <p className={s.excerpt}>{post.excerpt}</p>
        <div className={s.foot}>
          <span>{formatDate(post.date)}</span>
          <span className={s.dot} />
          <span>{post.readTime}</span>
        </div>
      </div>
    </Link>
  );
}
