"use client";

import { useState } from "react";
import { Inbox, Send } from "./icons";
import { MailInboxMockup } from "./mockups/mail-inbox";
import { MailDraftMockup } from "./mockups/mail-draft";
import { ScaledFit } from "./mockups/scaled-fit";
import s from "./mail-inbox-demo.module.css";

type Tab = "inbox" | "draft";

const TABS: { id: Tab; icon: React.ReactNode; label: string }[] = [
  { id: "inbox", icon: <Inbox size={15} />, label: "Inbox" },
  { id: "draft", icon: <Send size={15} />, label: "Compose" },
];

export function MailInboxDemo() {
  const [active, setActive] = useState<Tab>("inbox");

  return (
    <section className={`${s.demo} section`}>
      <div className="container">
        <div className={s.head}>
          <div className="eyebrow">See it in action</div>
          <h2 className={`display ${s.h2}`}>
            Your inbox, <span className="serif-italic">reimagined.</span>
          </h2>
          <p className={s.sub}>
            A webmail client with AI built into every interaction. Triage, draft, approve — all in one place.
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
            <ScaledFit width={980} height={640}>
              <MailInboxMockup />
            </ScaledFit>
          </div>
          <div className={`${s.pane} ${active === "draft" ? s.paneOn : ""}`}>
            <ScaledFit width={980} height={640}>
              <MailDraftMockup />
            </ScaledFit>
          </div>
        </div>
      </div>
    </section>
  );
}
