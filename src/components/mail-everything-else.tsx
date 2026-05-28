import s from "./mail-everything-else.module.css";

const MAIN_ITEMS = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    label: "Snooze",
    desc: "Hide now, surface later",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M2 12h20" stroke="currentColor" strokeWidth="1.5"/>
        <ellipse cx="12" cy="12" rx="4" ry="9" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    label: "Translate",
    desc: "Inline translation, 40+ languages",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="5" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="14" y="5" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="14" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    label: "Bundles",
    desc: "Group related threads automatically",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="5" width="18" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M3 7l9 6 9-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="18" cy="7" r="4" fill="var(--accent)" stroke="var(--surface)" strokeWidth="1.5"/>
      </svg>
    ),
    label: "Multi-account",
    desc: "All inboxes in one view",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <rect x="9" y="3" width="6" height="11" rx="3" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M6 11a6 6 0 0012 0M12 17v4M9 21h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    label: "Voice",
    desc: "Dictate replies, hands-free",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M21 12a9 9 0 11-4.22-7.63" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M21 4v4h-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    label: "Follow-up",
    desc: "Auto-remind if no reply in N days",
  },
];

const EXTRA_ITEMS = [
  {
    label: "Standing Rules",
    desc: "If X, always do Y \u2014 your policies, enforced",
  },
  {
    label: "Reply Confidence",
    desc: "See how sure the AI is before it sends",
  },
  {
    label: "One-tap Export",
    desc: ".mbox + CSV, every message, any time",
  },
];

export function MailEverythingElse() {
  return (
    <section className={`${s.ee} section`}>
      <div className="container">
        <div className={s.head}>
          <div className="eyebrow">And</div>
          <h2 className={`display ${s.h2}`}>
            <span className="serif-italic">Everything else</span> email already does &mdash; only smarter.
          </h2>
          <p className={s.sub}>
            Every standard feature you expect, plus AI that makes each one faster.
          </p>
        </div>

        <div className={s.grid}>
          {MAIN_ITEMS.map((item) => (
            <div className={s.item} key={item.label}>
              <div className={s.icon}>{item.icon}</div>
              <div className={s.label}>{item.label}</div>
              <div className={s.desc}>{item.desc}</div>
            </div>
          ))}
        </div>

        <div className={s.extraGrid}>
          {EXTRA_ITEMS.map((item) => (
            <div className={s.extraItem} key={item.label}>
              <div className={s.extraLabel}>{item.label}</div>
              <div className={s.extraDesc}>{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
