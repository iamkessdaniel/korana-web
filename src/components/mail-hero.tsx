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
          Email that thinks, replies,<br />
          and <span className={`serif-italic ${s.titleEm}`}>decides.</span>
        </h1>

        <p className={s.sub}>
          AI drafts in your voice, categorizes every message, handles routine email autonomously.
          Custom domain or forward from Gmail/Outlook. One dollar a month.
        </p>

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
