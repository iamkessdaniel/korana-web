import s from "./mail-phone-inbox.module.css";

const EMAILS = [
  { from: "Sarah Chen", subject: "Re: Q3 proposal", snippet: "Looks good — can we add the pricing table?", time: "2m", category: "Action", catColor: "var(--accent)" },
  { from: "Stripe", subject: "Payout completed", snippet: "$4,280.00 deposited to your account", time: "14m", category: "FYI", catColor: "var(--info)" },
  { from: "Alex Rivera", subject: "Intro — Marker x Korana", snippet: "Hey! Wanted to connect you two...", time: "28m", category: "Action", catColor: "var(--accent)" },
  { from: "GitHub", subject: "[korana/api] PR #412 merged", snippet: "Fix: rate limiter edge case on batch...", time: "1h", category: "Noise", catColor: "var(--ink-3)" },
  { from: "Aanya Reddy", subject: "Invoice follow-up", snippet: "Hi — just checking if you received #138?", time: "1h", category: "Urgent", catColor: "#b53d2b" },
  { from: "Newsletter", subject: "This week in AI", snippet: "The latest on foundation model pricing...", time: "3h", category: "Noise", catColor: "var(--ink-3)" },
];

export function MailPhoneInbox() {
  return (
    <div className={s.inbox}>
      <div className={s.header}>
        <div className={s.headerTitle}>Inbox</div>
        <div className={s.headerMeta}>6 unread · 2 need you</div>
      </div>
      <div className={s.list}>
        {EMAILS.map((e, i) => (
          <div className={s.row} key={i}>
            <div className={s.rowTop}>
              <span className={s.from}>{e.from}</span>
              <span className={s.time}>{e.time}</span>
            </div>
            <div className={s.subject}>{e.subject}</div>
            <div className={s.rowBottom}>
              <span className={s.snippet}>{e.snippet}</span>
              <span className={s.cat} style={{ color: e.catColor, background: `color-mix(in srgb, ${e.catColor} 12%, transparent)` }}>
                {e.category}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
