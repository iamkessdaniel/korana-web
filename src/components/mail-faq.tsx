"use client";

import { useState } from "react";
import { MAIL_FAQS } from "@/lib/data";
import s from "./faq.module.css";

export function MailFAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className={`${s.faq} section`} id="faq">
      <div className={`container ${s.inner}`}>
        <div>
          <div className="eyebrow">Frequently asked</div>
          <h2 className={`display ${s.h2}`}>
            Questions about <span className="serif-italic">AI Mail.</span>
          </h2>
          <p style={{ fontSize: 16, color: "var(--ink-2)", marginTop: 16, maxWidth: "46ch" }}>
            More questions? Email{" "}
            <a href="mailto:hi@korana.ai" style={{ color: "var(--ink)", textDecoration: "underline", textUnderlineOffset: 3 }}>
              hi@korana.ai
            </a>{" "}
            — we read everything.
          </p>
        </div>

        <div className={s.list}>
          {MAIL_FAQS.map((item, i) => (
            <details
              key={i}
              className={s.item}
              open={open === i}
              onToggle={(e) => {
                if ((e.target as HTMLDetailsElement).open) setOpen(i);
              }}
            >
              <summary className={s.summary}>
                <span>{item.q}</span>
                <span className={s.chev}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </summary>
              <div className={s.answer}>{item.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
