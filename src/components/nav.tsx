"use client";

import { useState, useEffect } from "react";
import { Logo, Arrow } from "./icons";
import s from "./nav.module.css";

export function Nav() {
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
        <a href="#" className={s.brand} aria-label="Korana home">
          <span className={s.mark} aria-hidden>
            <Logo size={28} />
          </span>
          <span className={s.wordmark}>korana</span>
        </a>

        <nav className={s.links}>
          <a href="#what" className={s.link}>Product</a>
          <a href="#channels" className={s.link}>Channels</a>
          <a href="#pricing" className={s.link}>Pricing</a>
          <a href="#faq" className={s.link}>FAQ</a>
        </nav>

        <div className={s.actions}>
          <a href="#" className={`${s.link} ${s.login}`}>Sign in</a>
          <a href="#cta" className="btn btn-primary btn-sm">
            Request access
            <Arrow size={14} />
          </a>
        </div>
      </div>
    </header>
  );
}
