"use client";

import { useState, useEffect } from "react";
import { Logo, Arrow, Phone, Web, Whatsapp, Inbox, Invoice, Calendar, Scale, Receipt } from "./icons";
import { PhoneFrame } from "./mockups/phone-frame";
import { MobileBrief } from "./mockups/mobile-brief";
import { ChatWidget } from "./mockups/chat-widget";
import s from "./hero.module.css";

const ACTIVITY = [
  { icon: "reply", who: "Acme Corp", what: "Pricing reply drafted", status: "awaiting", time: "2m" },
  { icon: "invoice", who: "Hexa Labs", what: "Invoice #142 sent", status: "done", time: "14m" },
  { icon: "cal", who: "Priya Mehta", what: "Intro call booked", status: "done", time: "32m" },
  { icon: "tax", who: "GST Q3", what: "Filing prepared", status: "awaiting", time: "1h" },
  { icon: "reply", who: "Lyra Studio", what: "Follow-up sent", status: "done", time: "1h" },
  { icon: "book", who: "3 expenses", what: "Categorized", status: "done", time: "2h" },
] as const;

const ICON_MAP: Record<string, React.ReactNode> = {
  reply: <Inbox size={14} />,
  invoice: <Invoice size={14} />,
  cal: <Calendar size={14} />,
  tax: <Scale size={14} />,
  book: <Receipt size={14} />,
};

const STATS = [
  { n: "47", l: "customer replies" },
  { n: "12", l: "invoices issued" },
  { n: "₹2.4L", l: "collected" },
  { n: "6", l: "filings prepared" },
];

const ROTATING_WORDS = ["every company.", "every founder.", "every startup.", "every team."];

export function Hero() {
  const [wordIdx, setWordIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIdx((i) => (i + 1) % ROTATING_WORDS.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={s.hero}>
      <div className="grid-bg" aria-hidden />
      <div className={`container ${s.inner}`}>
        <div className={s.eyebrow}>
          <span className={`pulse-dot ${s.eyebrowDot}`} aria-hidden />
          <span>Korana.ai — Your AI Chief of Staff</span>
        </div>

        <h1 className={`display ${s.title}`}>
          AI Chief of Staff for<br />
          <span className={s.rotateWrap}>
            {ROTATING_WORDS.map((word, i) => (
              <span
                key={word}
                className={`serif-italic ${s.titleEm} ${s.rotateWord} ${i === wordIdx ? s.rotateActive : ""}`}
              >
                {word}
              </span>
            ))}
          </span>
        </h1>

        <p className={s.sub}>
          One AI operator handles bookkeeping, invoicing, tax, customer messages, follow-ups, and reporting. You just approve what matters.
        </p>

        <div className={s.actions}>
          <a href="#cta" className="btn btn-primary btn-lg">
            Request access
            <Arrow size={15} />
          </a>
          <a href="#what" className="btn btn-ghost btn-lg">
            <span className={s.play} aria-hidden>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M6 4l14 8-14 8V4z"/></svg>
            </span>
            See it in action
          </a>
        </div>

        <div className={s.replaces} aria-label="Roles Korana.ai replaces">
          <span className={s.replacesLabel}>Replaces</span>
          <span className={s.replacesChip}>Bookkeeper</span>
          <span className={s.replacesChip}>EA</span>
          <span className={s.replacesChip}>Ops generalist</span>
          <span className={s.replacesChip}>SDR</span>
          <span className={s.replacesChip}>Part-time CFO</span>
        </div>

        <div className={s.meta}>
          <span><Phone size={14} /> Mobile</span>
          <span className={s.metaDot} aria-hidden>·</span>
          <span><Web size={14} /> Web</span>
          <span className={s.metaDot} aria-hidden>·</span>
          <span><Whatsapp size={14} /> WhatsApp</span>
        </div>
      </div>

      {/* Hero product display */}
      <div className={s.display}>
        <div className={s.displayInner}>
          <div className={s.phoneWrap}>
            <PhoneFrame>
              <MobileBrief compact />
            </PhoneFrame>
          </div>

          <div className={`${s.card} ${s.brief}`}>
            <div className={s.briefHead}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div className={s.avatar}><Logo size={14} /></div>
                <div style={{ display: "flex", flexDirection: "column", gap: 1, alignItems: "flex-start" }}>
                  <div style={{ fontSize: 13, fontWeight: 600, color: "var(--ink)" }}>Friday Brief</div>
                  <div style={{ fontSize: 11.5, color: "var(--ink-3)" }}>May 23 · 4:30pm · auto-prepared</div>
                </div>
              </div>
              <span className="tag" style={{ height: 24, fontSize: 11.5 }}>
                <span className="pulse-dot" style={{ width: 6, height: 6 }} /> Live
              </span>
            </div>
            <div className={s.briefHeadline}>
              <span className="serif-italic" style={{ fontSize: 28, lineHeight: 1.1, color: "var(--ink)" }}>
                This week, Korana.ai handled
              </span>
              <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginTop: 10 }}>
                <span style={{ fontFamily: "var(--font-display)", fontSize: 64, lineHeight: 1, color: "var(--ink)" }}>147</span>
                <span style={{ fontSize: 14, color: "var(--ink-3)" }}>tasks · across 6 channels</span>
              </div>
            </div>
            <div className={s.statGrid}>
              {STATS.map((st) => (
                <div className={s.stat} key={st.l}>
                  <div className={s.statN}>{st.n}</div>
                  <div className={s.statL}>{st.l}</div>
                </div>
              ))}
            </div>
            <div className={s.briefFoot}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ width: 8, height: 8, borderRadius: 99, background: "var(--accent)" }} />
                <span style={{ fontSize: 13, color: "var(--ink-2)" }}>3 items need your approval</span>
              </div>
              <button className={s.footBtn}>
                Review <Arrow size={13} />
              </button>
            </div>
          </div>

          <div className={s.activity}>
            <div className={s.activityLabel}>Live activity</div>
            {ACTIVITY.map((row, i) => (
              <div className={s.actRow} key={i}>
                <div className={s.actIcon}>{ICON_MAP[row.icon]}</div>
                <div className={s.actInfo}>
                  <div className={s.actWho}>{row.who}</div>
                  <div className={s.actWhat}>{row.what}</div>
                </div>
                <div className={s.actRight}>
                  <span className={`${s.actStatus} ${row.status === "done" ? s.actDone : s.actReview}`}>
                    {row.status === "done" ? "done" : "review"}
                  </span>
                  <span className={s.actTime}>{row.time} ago</span>
                </div>
              </div>
            ))}
          </div>

          {/* Floating chat widget */}
          <div className={s.chatFloat}>
            <ChatWidget />
          </div>
        </div>
      </div>
    </section>
  );
}
