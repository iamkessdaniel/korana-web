import { CtaForm } from "./cta-form";
import s from "./footer.module.css";

export function MailCta() {
  return (
    <section className={s.cta} id="cta">
      <div className={`container ${s.ctaInner}`}>
        <div className={s.ctaEyebrow}>
          <span className="pulse-dot" />
          <span>Your first mailbox is waiting.</span>
        </div>
        <h2 className={`display ${s.ctaH2}`}>
          Your inbox, <span className="serif-italic">handled.</span>
        </h2>
        <p className={s.ctaSub}>
          Get a mailbox. Forward your Gmail. Watch Korana.ai sort, draft, and reply in your voice. Cancel any time &mdash; every message exports in one tap.
        </p>
        <div className={s.ctaForm}>
          <CtaForm />
          <div style={{ fontSize: 12.5, color: "var(--ink-3)", marginTop: 14, fontFamily: "var(--font-mono)" }}>
            Setup takes 2 minutes &middot; $1/mo &middot; cancel anytime
          </div>
        </div>
      </div>
    </section>
  );
}
