"use client";

import { useState } from "react";
import { PRICING_TIERS } from "@/lib/data";
import { Arrow, CheckSm, Lock } from "./icons";
import s from "./pricing.module.css";

export function Pricing() {
  const [annual, setAnnual] = useState(true);

  return (
    <section className={`${s.pr} section`} id="pricing">
      <div className="container">
        <div className={s.head}>
          <div className="eyebrow">Pricing</div>
          <h2 className={`display ${s.h2}`}>
            One seat. <span className="serif-italic">A team&apos;s output.</span>
          </h2>
          <p className={s.sub}>
            Less than a single junior hire. Replaces the bookkeeper, EA, ops generalist, SDR,
            and fractional CFO — and works around the clock. Most teams save ~$6–10k/mo on Team.
          </p>
          <div className={s.toggle}>
            <button className={`${s.toggleBtn} ${!annual ? s.toggleActive : ""}`} onClick={() => setAnnual(false)}>Monthly</button>
            <button className={`${s.toggleBtn} ${annual ? s.toggleActive : ""}`} onClick={() => setAnnual(true)}>
              Annual <span className={s.toggleSave}>−20%</span>
            </button>
          </div>
        </div>

        <div className={s.grid}>
          {PRICING_TIERS.map((t) => (
            <div className={`${s.card} ${t.featured ? s.featured : ""}`} key={t.name}>
              {"badge" in t && t.badge && <div className={s.badge}>{t.badge}</div>}
              <div>
                <h3 className={s.name}>{t.name}</h3>
                <p className={s.tagline}>{t.tagline}</p>
              </div>

              <div className={s.price}>
                {"customLabel" in t && t.customLabel ? (
                  <span className={`${s.priceN} serif-italic`}>{t.customLabel}</span>
                ) : (
                  <>
                    <span className={s.priceCurrency}>$</span>
                    <span className={s.priceN}>{annual ? t.annual : t.monthly}</span>
                    <span className={s.pricePer}>/ mo</span>
                  </>
                )}
                {!("customLabel" in t && t.customLabel) && annual && (
                  <div className={s.priceMeta}>billed annually · ${((annual ? t.annual : t.monthly) ?? 0) * 12} / yr</div>
                )}
              </div>

              <a href="#cta" className={`btn ${t.ctaStyle === "primary" ? "btn-primary" : "btn-ghost"} ${s.cta} ${t.featured ? (t.ctaStyle === "primary" ? s.primary : s.ghost) : ""}`}>
                {t.cta}
                {t.ctaStyle === "primary" && <Arrow size={14} />}
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

        <div className={s.foot}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <Lock />
            <span style={{ fontSize: 13.5, color: "var(--ink-2)" }}>
              All plans include SSO, 2FA, audit logs, and data export.
              <span style={{ color: "var(--ink-3)" }}> · </span>
              <a href="#" style={{ color: "var(--ink)", textDecoration: "underline", textDecorationThickness: "1px", textUnderlineOffset: "3px" }}>Compare features</a>
            </span>
          </div>
          <div style={{ fontSize: 12.5, color: "var(--ink-3)", fontFamily: "var(--font-mono)" }}>
            no credit card · cancel anytime
          </div>
        </div>
      </div>
    </section>
  );
}
