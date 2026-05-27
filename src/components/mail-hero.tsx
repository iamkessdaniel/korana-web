import { Arrow, MailEnvelope } from "./icons";
import { PhoneFrame } from "./mockups/phone-frame";
import { MailPhoneInbox } from "./mockups/mail-phone-inbox";
import { MailDraftCard } from "./mockups/mail-draft-card";
import { MailActivityFeed } from "./mockups/mail-activity-feed";
import { MailForwardingWidget } from "./mockups/mail-forwarding-widget";
import s from "./mail-hero.module.css";

export function MailHero() {
  return (
    <section className={s.hero}>
      <div className="grid-bg" aria-hidden />
      <div className={`container ${s.inner}`}>
        <div className={s.eyebrow}>
          <MailEnvelope size={14} />
          <span>Korana AI Mail — $1/mo per mailbox</span>
        </div>

        <h1 className={`display ${s.title}`}>
          Email that thinks,<br />
          replies, and <span className={`serif-italic ${s.titleEm}`}>decides.</span>
        </h1>

        <div className={s.promises}>
          <div className={s.promise}>
            <span className={s.promiseDot} style={{ background: "var(--positive)" }} />
            Zero inbox anxiety — AI triages and prioritizes every message
          </div>
          <div className={s.promise}>
            <span className={s.promiseDot} style={{ background: "var(--accent)" }} />
            Replies drafted in your voice — sent in under 8 minutes
          </div>
          <div className={s.promise}>
            <span className={s.promiseDot} style={{ background: "var(--info)" }} />
            Your domain, your rules — forward from Gmail or go all-in
          </div>
        </div>

        <div className={s.actions}>
          <a href="#cta" className="btn btn-primary btn-lg">
            Get a mailbox
            <Arrow size={15} />
          </a>
          <a href="#how" className="btn btn-ghost btn-lg">
            See how it works
          </a>
        </div>

        <div className={s.replaces} aria-label="Problems Korana Mail solves">
          <span className={s.replacesLabel}>Replaces</span>
          <span className={s.replacesChip}>Gmail clutter</span>
          <span className={s.replacesChip}>Unread anxiety</span>
          <span className={s.replacesChip}>Support VA</span>
          <span className={s.replacesChip}>Email filters</span>
          <span className={s.replacesChip}>Response delay</span>
        </div>
      </div>

      <div className={s.display}>
        <div className={s.displayInner}>
          <div className={s.phoneWrap}>
            <PhoneFrame>
              <MailPhoneInbox />
            </PhoneFrame>
          </div>

          <div className={s.center}>
            <MailDraftCard />
          </div>

          <div className={s.right}>
            <MailActivityFeed />
          </div>

          <div className={s.floatWidget}>
            <MailForwardingWidget />
          </div>
        </div>
      </div>
    </section>
  );
}
