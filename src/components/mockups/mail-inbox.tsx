import s from "./mail-inbox.module.css";

const FOLDERS = [
  { name: "Inbox", count: 6, active: true },
  { name: "Action", count: 3, active: false },
  { name: "FYI", count: 8, active: false },
  { name: "Sent", count: 0, active: false },
  { name: "Drafts", count: 2, active: false },
  { name: "Archived", count: 0, active: false },
];

const EMAILS = [
  { from: "Sarah Chen", subject: "Re: Q3 proposal", snippet: "Looks good — can we add the pricing table?", time: "2m", category: "Action", catColor: "var(--accent)", unread: true, selected: true },
  { from: "Stripe", subject: "Payout completed — $4,280.00", snippet: "Your payout has been deposited to your bank.", time: "14m", category: "FYI", catColor: "var(--info)", unread: true, selected: false },
  { from: "Alex Rivera", subject: "Intro — Marker x Korana", snippet: "Hey! Wanted to connect you two — I think there's", time: "28m", category: "Action", catColor: "var(--accent)", unread: true, selected: false },
  { from: "GitHub", subject: "[korana/api] PR #412 merged", snippet: "Fix: rate limiter edge case on batch endpoints", time: "1h", category: "Noise", catColor: "var(--ink-3)", unread: false, selected: false },
  { from: "Aanya Reddy", subject: "Invoice follow-up", snippet: "Hi — just checking if you received invoice #138?", time: "1h", category: "Urgent", catColor: "#b53d2b", unread: true, selected: false },
];

export function MailInboxMockup() {
  return (
    <div className={s.browser}>
      {/* Browser chrome */}
      <div className={s.chrome}>
        <div className={s.dots}>
          <span /><span /><span />
        </div>
        <div className={s.url}>mail.korana.ai</div>
      </div>

      <div className={s.layout}>
        {/* Sidebar */}
        <div className={s.sidebar}>
          <div className={s.sideHead}>
            <div className={s.sideBrand}>Korana Mail</div>
          </div>
          {FOLDERS.map((f) => (
            <div className={`${s.folder} ${f.active ? s.folderActive : ""}`} key={f.name}>
              <span>{f.name}</span>
              {f.count > 0 && <span className={s.folderCount}>{f.count}</span>}
            </div>
          ))}
        </div>

        {/* Email list */}
        <div className={s.list}>
          {EMAILS.map((e, i) => (
            <div className={`${s.row} ${e.selected ? s.rowSelected : ""} ${e.unread ? s.rowUnread : ""}`} key={i}>
              <div className={s.rowTop}>
                <span className={s.from}>{e.from}</span>
                <span className={s.cat} style={{ color: e.catColor, background: `color-mix(in srgb, ${e.catColor} 12%, transparent)` }}>
                  {e.category}
                </span>
                <span className={s.time}>{e.time}</span>
              </div>
              <div className={s.subject}>{e.subject}</div>
              <div className={s.snippet}>{e.snippet}</div>
            </div>
          ))}
        </div>

        {/* Open email + AI draft */}
        <div className={s.detail}>
          <div className={s.detailHead}>
            <div className={s.detailFrom}>Sarah Chen</div>
            <div className={s.detailSubject}>Re: Q3 proposal</div>
          </div>
          <div className={s.detailBody}>
            <p>Hi — looks good overall! Can we add the pricing table from last quarter? I want to compare YoY before the board meeting on Thursday.</p>
            <p>Also, can you flag the hosting cost change? That jumped 18%.</p>
          </div>
          <div className={s.aiDraft}>
            <div className={s.aiLabel}>
              <span className={s.aiDot} />
              AI Draft — ready for approval
            </div>
            <div className={s.aiText}>
              Hi Sarah — absolutely. I&apos;ve attached the Q2 vs Q3 pricing comparison. The main delta is the 12% volume discount we introduced in July. I&apos;ve also flagged the hosting cost increase (18%) in a separate row. Let me know if you want me to add commentary for the board deck.
            </div>
            <div className={s.aiActions}>
              <button className={s.aiApprove}>Approve &amp; Send</button>
              <button className={s.aiEdit}>Edit</button>
              <button className={s.aiSkip}>Skip</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
