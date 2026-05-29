"use client";

import { useState, useEffect, useRef } from "react";
import { Logo, Arrow, ChevronDown, MailEnvelope } from "./icons";
import s from "./nav.module.css";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [showProducts, setShowProducts] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const dropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!showProducts) return;
    const onClick = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) {
        setShowProducts(false);
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [showProducts]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className={`${s.nav} ${scrolled ? s.scrolled : ""}`}>
        <div className={`container ${s.inner}`}>
          <a href="#" className={s.brand} aria-label="Korana.ai home">
            <span className={s.mark} aria-hidden>
              <Logo size={28} />
            </span>
            <span className={s.wordmark}>korana</span>
          </a>

          <nav className={s.links}>
            <div className={s.dropWrap} ref={dropRef}>
              <button
                className={`${s.link} ${s.dropTrigger}`}
                onClick={() => setShowProducts((v) => !v)}
                aria-expanded={showProducts}
              >
                Products <ChevronDown size={12} />
              </button>
              {showProducts && (
                <div className={s.dropdown}>
                  <a href="#what" className={s.dropItem} onClick={() => setShowProducts(false)}>
                    <div className={s.dropIcon}>
                      <Logo size={16} />
                    </div>
                    <div>
                      <div className={s.dropTitle}>AI Chief of Staff</div>
                      <div className={s.dropDesc}>Run your back office on autopilot</div>
                    </div>
                  </a>
                  <a href="/mail" className={s.dropItem}>
                    <div className={s.dropIcon} style={{ background: "var(--accent-soft)", color: "var(--accent)" }}>
                      <MailEnvelope size={15} />
                    </div>
                    <div>
                      <div className={s.dropTitle}>
                        AI Mail
                        <span className={s.dropNew}>New</span>
                      </div>
                      <div className={s.dropDesc}>Email that thinks, replies & decides</div>
                    </div>
                  </a>
                </div>
              )}
            </div>
            <a href="#channels" className={s.link}>Channels</a>
            <a href="#pricing" className={s.link}>Pricing</a>
            <a href="/research" className={s.link}>Research</a>
            <a href="#faq" className={s.link}>FAQ</a>
          </nav>

          <div className={s.actions}>
            <a href="#" className={`${s.link} ${s.login}`}>Sign in</a>
            <a href="#cta" className="btn btn-primary btn-sm">
              Request access
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
        <a href="#" className={s.drawerBrand} onClick={closeMenu}>
          <span className={s.mark} aria-hidden>
            <Logo size={24} />
          </span>
          <span className={s.drawerWordmark}>korana</span>
        </a>

        <div className={s.drawerSection}>
          <div className={s.drawerLabel}>Products</div>
          <a href="#what" className={s.drawerItem} onClick={closeMenu}>
            <div className={s.dropIcon}>
              <Logo size={16} />
            </div>
            <div>
              <div className={s.dropTitle}>AI Chief of Staff</div>
              <div className={s.dropDesc}>Run your back office on autopilot</div>
            </div>
          </a>
          <a href="/mail" className={s.drawerItem} onClick={closeMenu}>
            <div className={s.dropIcon} style={{ background: "var(--accent-soft)", color: "var(--accent)" }}>
              <MailEnvelope size={15} />
            </div>
            <div>
              <div className={s.dropTitle}>
                AI Mail
                <span className={s.dropNew}>New</span>
              </div>
              <div className={s.dropDesc}>Email that thinks, replies & decides</div>
            </div>
          </a>
        </div>

        <div className={s.drawerLinks}>
          <a href="#channels" className={s.drawerLink} onClick={closeMenu}>Channels</a>
          <a href="#pricing" className={s.drawerLink} onClick={closeMenu}>Pricing</a>
          <a href="/research" className={s.drawerLink} onClick={closeMenu}>Research</a>
          <a href="#faq" className={s.drawerLink} onClick={closeMenu}>FAQ</a>
          <a href="#" className={s.drawerLink} onClick={closeMenu}>Sign in</a>
        </div>
      </div>
    </>
  );
}
