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
          Stop managing email.<br />
          <span className="serif-italic">Let Korana handle it.</span>
        </h2>
        <p className={s.ctaSub}>
          AI triage, AI drafts, custom domain, IMAP/SMTP — $1/month. Set up in 2 minutes.
        </p>
        <div className={s.ctaForm}>
          <CtaForm />
          <div style={{ fontSize: 12.5, color: "var(--ink-3)", marginTop: 14, fontFamily: "var(--font-mono)" }}>
            $1/mo per mailbox · no credit card · cancel anytime
          </div>
        </div>
      </div>
    </section>
  );
}
