import { Arrow, Logo, MailEnvelope } from "./icons";
import s from "./products-banner.module.css";

export function ProductsBanner() {
  return (
    <section className={`${s.banner} section`}>
      <div className="container">
        <div className={s.head}>
          <div className="eyebrow">Products</div>
          <h2 className={`display ${s.h2}`}>
            Two products. <span className="serif-italic">One operator.</span>
          </h2>
        </div>

        <div className={s.grid}>
          <div className={s.card}>
            <div className={s.cardIcon}>
              <Logo size={20} />
            </div>
            <div>
              <h3 className={s.cardTitle}>AI Chief of Staff</h3>
              <p className={s.cardDesc}>
                Bookkeeping, invoicing, tax, customer messages, sales, scheduling, reporting — one AI operator instead of 5&ndash;10 hires.
              </p>
            </div>
            <div className={s.cardFoot}>
              <span className={s.cardPrice}>From $49/mo</span>
              <a href="#what" className={s.cardLink}>
                Learn more <Arrow size={12} />
              </a>
            </div>
          </div>

          <a href="/mail" className={`${s.card} ${s.cardAccent}`}>
            <div className={s.cardIcon} style={{ background: "var(--accent-soft)", borderColor: "var(--accent)" }}>
              <MailEnvelope size={18} />
            </div>
            <div>
              <span className={s.newBadge}>New</span>
              <h3 className={s.cardTitle}>AI Mail</h3>
              <p className={s.cardDesc}>
                Email that thinks, replies, and decides. AI triage, AI drafts in your voice, custom domain — $1/mo per mailbox.
              </p>
            </div>
            <div className={s.cardFoot}>
              <span className={s.cardPrice}>$1/mo per mailbox</span>
              <span className={s.cardLink}>
                Explore AI Mail <Arrow size={12} />
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
