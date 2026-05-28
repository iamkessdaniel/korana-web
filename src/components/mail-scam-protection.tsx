import { Shield } from "./icons";
import s from "./mail-scam-protection.module.css";

export function MailScamProtection() {
  return (
    <section className={`${s.scam} section`}>
      <div className="container">
        <div className={s.head}>
          <div className="eyebrow">Scam Protection</div>
          <h2 className={`display ${s.h2}`}>
            Phishing caught <span className="serif-italic">before&nbsp;you&nbsp;see&nbsp;it.</span>
          </h2>
          <p className={s.sub}>
            Korana analyzes sender reputation, link destinations, and language patterns before the message reaches your inbox. Flagged emails are quarantined with a clear explanation.
          </p>
        </div>

        <div className={s.stage}>
          <div className={s.card}>
            <div className={s.cardHead}>
              <div className={s.shieldWrap}>
                <Shield size={20} />
              </div>
              <div>
                <div className={s.cardTitle}>Korana held this for you</div>
                <span className={s.heldPill}>HELD</span>
              </div>
            </div>

            <div className={s.email}>
              <div className={s.emailFrom}>
                From: <span className={s.emailAddr}>accounts@paypa<span className={s.flaggedChar}>I</span>.com</span>
              </div>
              <div className={s.emailSubject}>Action required: Verify your account</div>
              <div className={s.emailSnippet}>
                Dear customer, we&rsquo;ve detected unusual activity on your account. Click below to verify your identity or your account will be suspended within 24 hours...
              </div>
            </div>

            <div className={s.reasons}>
              <div className={s.reasonsTitle}>Why Korana flagged this</div>
              <div className={s.reasonRow}>
                <span className={s.reasonDot} style={{ background: "var(--warning)" }} />
                <span>Domain spoofing &mdash; &ldquo;paypa<strong>I</strong>.com&rdquo; uses a capital I, not lowercase L</span>
              </div>
              <div className={s.reasonRow}>
                <span className={s.reasonDot} style={{ background: "var(--warning)" }} />
                <span>Urgency language &mdash; &ldquo;suspended within 24 hours&rdquo; is a known phishing pattern</span>
              </div>
              <div className={s.reasonRow}>
                <span className={s.reasonDot} style={{ background: "var(--warning)" }} />
                <span>Link destination &mdash; points to an unrelated domain, not paypal.com</span>
              </div>
            </div>

            <div className={s.actions}>
              <button className={s.actionBtn}>Move to trash</button>
              <button className={s.actionBtnGhost}>Mark as safe</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
