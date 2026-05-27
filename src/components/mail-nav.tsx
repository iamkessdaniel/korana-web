"use client";

import { useState, useEffect } from "react";
import { Logo, Arrow } from "./icons";
import s from "./nav.module.css";

export function MailNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${s.nav} ${scrolled ? s.scrolled : ""}`}>
      <div className={`container ${s.inner}`}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <a href="/" className={s.brand} aria-label="Korana home">
            <span className={s.mark} aria-hidden>
              <Logo size={28} />
            </span>
            <span className={s.wordmark}>korana</span>
          </a>
          <span
            style={{
              fontSize: 11,
              fontFamily: "var(--font-mono)",
              fontWeight: 500,
              color: "var(--accent)",
              background: "var(--accent-soft)",
              padding: "3px 8px",
              borderRadius: 4,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              lineHeight: 1,
            }}
          >
            mail
          </span>
        </div>

        <nav className={s.links}>
          <a href="#how" className={s.link}>How it works</a>
          <a href="#features" className={s.link}>Features</a>
          <a href="#pricing" className={s.link}>Pricing</a>
          <a href="#faq" className={s.link}>FAQ</a>
        </nav>

        <div className={s.actions}>
          <a href="/" className={s.link} style={{ fontSize: 13, display: "inline-flex", alignItems: "center", gap: 4 }}>
            &larr; korana.ai
          </a>
          <a href="#cta" className="btn btn-primary btn-sm">
            Get a mailbox
            <Arrow size={14} />
          </a>
        </div>
      </div>
    </header>
  );
}
