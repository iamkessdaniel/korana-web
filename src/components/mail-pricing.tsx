"use client";

import { useState } from "react";
import { MAIL_PRICING_TIERS } from "@/lib/data";
import { CheckSm, Lock } from "./icons";
import s from "./pricing.module.css";

export function MailPricing() {
  const [annual, setAnnual] = useState(true);

  return (
    <section className={`${s.pr} section`} id="pricing">
      <div className="container">
        <div className={s.head}>
          <div className="eyebrow">Pricing</div>
          <h2 className={`display ${s.h2}`}>
            Start at one dollar.{" "}<span className="serif-italic">Grow&nbsp;into&nbsp;it.</span>
          </h2>
          <p className={s.sub}>
            Three plans. No usage caps. Every plan includes AI triage, Smart Views, custom domain, IMAP/SMTP, and encrypted hosting.
          </p>
          <div className={s.toggle}>
            <button className={`${s.toggleBtn} ${!annual ? s.toggleActive : ""}`} onClick={() => setAnnual(false)}>Monthly</button>
            <button className={`${s.toggleBtn} ${annual ? s.toggleActive : ""}`} onClick={() => setAnnual(true)}>
              Annual <span className={s.toggleSave}>&minus;20%</span>
            </button>
          </div>
        </div>

        <div className={s.grid}>
          {MAIL_PRICING_TIERS.map((t) => (
            <div className={`${s.card} ${t.featured ? s.featured : ""}`} key={t.name}>
              {"badge" in t && t.badge && <div className={s.badge}>{t.badge}</div>}
              <div>
                <h3 className={s.name}>{t.name}</h3>
                <p className={s.tagline}>{t.tagline}</p>
              </div>

              <div className={s.price}>
                {"customLabel" in t && t.customLabel ? (
                  <span className={`${s.priceN} serif-italic`}>{t.customLabel}</span>
                ) : annual ? (
                  <>
                    <span className={s.priceCurrency}>$</span>
                    <span className={s.priceN}>{t.annual}</span>
                    <span className={s.pricePer}>/ yr</span>
                  </>
                ) : (
                  <>
                    <span className={s.priceCurrency}>$</span>
                    <span className={s.priceN}>{t.monthly}</span>
                    <span className={s.pricePer}>/ mo</span>
                  </>
                )}
              </div>

              <a href="#cta" className={`btn ${t.ctaStyle === "primary" ? "btn-primary" : "btn-ghost"} ${s.cta} ${t.featured ? (t.ctaStyle === "primary" ? s.primary : s.ghost) : ""}`}>
                {t.cta}
              </a>

              <ul className={s.feat}>
                {t.features.map((f) => (
                  <li key={f}>
                    <span className={s.featCheck}><CheckSm size={10} /></span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p style={{ textAlign: "center", marginTop: 32, fontStyle: "italic", fontFamily: "var(--font-display)", fontSize: "clamp(15px, 1.3vw, 17.5px)", color: "var(--ink-2)" }}>
          The most affordable intelligent email hosting on the planet.
        </p>

        <div className={s.foot}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <Lock />
            <span style={{ fontSize: 13.5, color: "var(--ink-2)" }}>
              All plans include IMAP/SMTP, SPF/DKIM/DMARC, and encrypted storage.
              <span style={{ color: "var(--ink-3)" }}> &middot; </span>
              <a href="#faq" style={{ color: "var(--ink)", textDecoration: "underline", textDecorationThickness: "1px", textUnderlineOffset: "3px" }}>See FAQ</a>
            </span>
          </div>
          <div style={{ fontSize: 12.5, color: "var(--ink-3)", fontFamily: "var(--font-mono)" }}>
            no credit card &middot; cancel anytime
          </div>
        </div>
      </div>
    </section>
  );
}
