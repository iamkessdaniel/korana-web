import { MAIL_FEATURES, type MailFeatureIcon } from "@/lib/data";
import { Inbox, Sparkle, Bell, Chart, AtSign, Forward, Logo, Shield } from "./icons";
import s from "./mail-features.module.css";
import type { ReactNode } from "react";

const ICON_MAP: Record<MailFeatureIcon, ReactNode> = {
  triage: <Inbox />,
  draft: <Sparkle size={22} />,
  queue: <Bell />,
  priority: <Chart />,
  domain: <AtSign />,
  forward: <Forward />,
  cos: <Logo size={18} />,
  privacy: <Shield />,
};

export function MailFeatures() {
  return (
    <section className={`${s.feat} section`} id="features">
      <div className="container">
        <div className={s.head}>
          <div className="eyebrow">Features</div>
          <h2 className={`display ${s.h2}`}>
            Everything your inbox<br />
            <span className="serif-italic">should already do.</span>
          </h2>
          <p className={s.sub}>
            Smart triage, AI drafts, approval queues, custom domains, forwarding from Gmail and Outlook,
            and deep integration with the rest of Korana. All for a dollar a month.
          </p>
        </div>

        <div className={s.grid}>
          {MAIL_FEATURES.map((f) => (
            <article className={s.card} key={f.title}>
              <span className={s.icon}>{ICON_MAP[f.icon]}</span>
              <h3 className={s.cardTitle}>{f.title}</h3>
              <p className={s.cardDesc}>{f.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
