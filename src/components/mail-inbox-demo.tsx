"use client";

import { useState } from "react";
import { Inbox, Sparkle } from "./icons";
import { MailInboxMockup } from "./mockups/mail-inbox";
import { MailAiMockup } from "./mockups/mail-ai";
import { ScaledFit } from "./mockups/scaled-fit";
import s from "./mail-inbox-demo.module.css";

type Tab = "inbox" | "ai";

const TABS: { id: Tab; icon: React.ReactNode; label: string }[] = [
  { id: "inbox", icon: <Inbox size={15} />, label: "Inbox" },
  { id: "ai", icon: <Sparkle size={15} />, label: "AI" },
];

export function MailInboxDemo() {
  const [active, setActive] = useState<Tab>("inbox");

  return (
    <section className={`${s.demo} section`} id="how">
      <div className="container">
        <div className={s.head}>
          <div className="eyebrow">Smart Views</div>
          <h2 className={`display ${s.h2}`}>
            Open your inbox to <span className="serif-italic">decisions,</span>{" "}not&nbsp;messages.
          </h2>
          <p className={s.sub}>
            Every email is categorized the moment it arrives. Smart Views surface what needs you and hide what doesn&rsquo;t. The AI Insights panel extracts dates, invoices, and action items &mdash; so you act from context, not clutter.
          </p>
        </div>

        <div className={s.tabs}>
          {TABS.map((t) => (
            <button
              key={t.id}
              className={`${s.tab} ${active === t.id ? s.tabActive : ""}`}
              onClick={() => setActive(t.id)}
            >
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        <div className={s.stage}>
          <div className={`${s.pane} ${active === "inbox" ? s.paneOn : ""}`}>
            <div className={s.stageWrap}>
              <ScaledFit width={980} height={640}>
                <MailInboxMockup />
              </ScaledFit>

              {/* Widget 1 — AI Insights Extracted (top-right) */}
              <div className={`${s.floatWidget} ${s.fw1}`}>
                <div className={s.fwLabel}>AI Insights Extracted</div>
                <div className={s.fwRow}>
                  <span className={s.fwIcon}>{"\u{1F4C5}"}</span>
                  <span className={s.fwText}>Meeting detected</span>
                  <span className={s.fwMeta}>Thu 2pm</span>
                </div>
                <div className={s.fwRow}>
                  <span className={s.fwIcon}>{"\u{1F4B0}"}</span>
                  <span className={s.fwText}>Invoice #138</span>
                  <span className={s.fwChip} style={{ color: "var(--warning)", background: "color-mix(in srgb, var(--warning) 12%, transparent)" }}>overdue</span>
                </div>
                <div className={s.fwRow}>
                  <span className={s.fwIcon}>{"\u{1F4CB}"}</span>
                  <span className={s.fwText}>Decision needed</span>
                  <span className={s.fwMeta}>Q3 pricing</span>
                </div>
              </div>

              {/* Widget 2 — Routed to Chief of Staff (bottom-left) */}
              <div className={`${s.floatWidget} ${s.fw2}`}>
                <div className={s.fwLabel}>Routed to Chief of Staff</div>
                <div className={s.fwRow}>
                  <span className={s.fwDot} style={{ background: "var(--warning)" }} />
                  <span className={s.fwText}>Invoice #138 &rarr; receivables</span>
                </div>
                <div className={s.fwRow}>
                  <span className={s.fwDot} style={{ background: "var(--info)" }} />
                  <span className={s.fwText}>Board review &rarr; calendar</span>
                </div>
                <div className={s.fwRow}>
                  <span className={s.fwDot} style={{ background: "var(--positive)" }} />
                  <span className={s.fwText}>Pricing table &rarr; task created</span>
                </div>
              </div>

              {/* Widget 3 — Upcoming (top-left) */}
              <div className={`${s.floatWidget} ${s.fw3}`}>
                <div className={s.fwLabel}>Upcoming</div>
                <div className={s.fwRow}>
                  <span className={s.fwDot} style={{ background: "var(--info)" }} />
                  <span className={s.fwText}>Board review</span>
                  <span className={s.fwMeta}>Thu 2pm</span>
                </div>
                <div className={s.fwRow}>
                  <span className={s.fwDot} style={{ background: "var(--warning)" }} />
                  <span className={s.fwText}>Invoice #138</span>
                  <span className={s.fwChip} style={{ color: "var(--warning)", background: "color-mix(in srgb, var(--warning) 12%, transparent)" }}>overdue</span>
                </div>
                <div className={s.fwRow}>
                  <span className={s.fwDot} style={{ background: "var(--accent)" }} />
                  <span className={s.fwText}>Reply to Alex</span>
                  <span className={s.fwMeta}>today</span>
                </div>
              </div>

              {/* Widget 4 — AI Active (bottom-right, pill) */}
              <div className={`${s.floatWidget} ${s.fw4}`}>
                <div className={s.fwPill}>
                  <div className={s.fwPillLabel}>
                    <span className={s.fwPillDot} />
                    AI Active
                  </div>
                  <span className={s.fwPillStats}>6 triaged &middot; 3 drafts &middot; 2 routed</span>
                </div>
              </div>
            </div>
          </div>
          <div className={`${s.pane} ${active === "ai" ? s.paneOn : ""}`}>
            <ScaledFit width={980} height={640}>
              <MailAiMockup />
            </ScaledFit>
          </div>
        </div>
      </div>
    </section>
  );
}
