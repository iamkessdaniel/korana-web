"use client";

import { useState, useEffect } from "react";
import { Logo, Arrow } from "./icons";
import s from "./nav.module.css";

export function MailNav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className={`${s.nav} ${scrolled ? s.scrolled : ""}`}>
        <div className={`container ${s.inner}`}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <a href="/" className={s.brand} aria-label="Korana home">
              <span className={s.mark} aria-hidden>
                <Logo size={28} />
              </span>
              <span className={s.wordmark}>korana</span>
            </a>
            <span className={s.mailBadge}>mail</span>
          </div>

          <nav className={s.links}>
            <a href="#how" className={s.link}>How it works</a>
            <a href="#features" className={s.link}>Features</a>
            <a href="#pricing" className={s.link}>Pricing</a>
            <a href="/research" className={s.link}>Research</a>
            <a href="#faq" className={s.link}>FAQ</a>
          </nav>

          <div className={s.actions}>
            <a href="/" className={`${s.link} ${s.backLink}`}>
              &larr; korana.ai
            </a>
            <a href="#cta" className="btn btn-primary btn-sm">
              Get a mailbox
              <Arrow size={14} />
            </a>
            <button
              className={s.burger}
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Menu"
              aria-expanded={menuOpen}
            >
              <span className={`${s.burgerLine} ${menuOpen ? s.burgerOpen1 : ""}`} />
              <span className={`${s.burgerLine} ${menuOpen ? s.burgerOpen2 : ""}`} />
              <span className={`${s.burgerLine} ${menuOpen ? s.burgerOpen3 : ""}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer — outside header so fixed positioning works */}
      {menuOpen && <div className={s.overlay} onClick={closeMenu} />}
      <div className={`${s.drawer} ${menuOpen ? s.drawerOpen : ""}`}>
        <a href="/" className={s.drawerBrand} onClick={closeMenu}>
          <span className={s.mark} aria-hidden>
            <Logo size={24} />
          </span>
          <span className={s.drawerWordmark}>korana</span>
          <span className={s.mailBadge}>mail</span>
        </a>

        <div className={s.drawerLinks}>
          <a href="#how" className={s.drawerLink} onClick={closeMenu}>How it works</a>
          <a href="#features" className={s.drawerLink} onClick={closeMenu}>Features</a>
          <a href="#pricing" className={s.drawerLink} onClick={closeMenu}>Pricing</a>
          <a href="/research" className={s.drawerLink} onClick={closeMenu}>Research</a>
          <a href="#faq" className={s.drawerLink} onClick={closeMenu}>FAQ</a>
        </div>

        <div className={s.drawerLinks} style={{ borderTop: "1px solid var(--line-2)", marginTop: 8, paddingTop: 16 }}>
          <a href="/" className={s.drawerLink} onClick={closeMenu}>
            &larr; korana.ai
          </a>
        </div>
      </div>
    </>
  );
}
