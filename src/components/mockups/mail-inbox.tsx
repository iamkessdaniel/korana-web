import s from "./mail-inbox.module.css";

const FOLDERS = [
  { name: "Inbox", count: 6, active: true, icon: "inbox" },
  { name: "Action", count: 3, active: false, icon: "flag" },
  { name: "FYI", count: 8, active: false, icon: "eye" },
  { name: "Drafts", count: 2, active: false, icon: "edit" },
  { name: "Sent", count: 0, active: false, icon: "send" },
  { name: "Archived", count: 0, active: false, icon: "archive" },
];

const EMAILS = [
  { from: "Sarah Chen", avatar: "SC", avatarBg: "#c14a26", subject: "Re: Q3 proposal", snippet: "Looks good — can we add the pricing table from last quarter?", time: "2m", category: "Action", catColor: "var(--accent)", unread: true, selected: true },
  { from: "Stripe", avatar: "S", avatarBg: "#635bff", subject: "Payout completed — $4,280.00", snippet: "Your payout has been deposited to your bank account ending in 4821.", time: "14m", category: "FYI", catColor: "var(--info)", unread: true, selected: false },
  { from: "Alex Rivera", avatar: "AR", avatarBg: "#2d6b4e", subject: "Intro — Marker x Korana", snippet: "Hey! Wanted to connect you two — I think there's a great opportunity here.", time: "28m", category: "Action", catColor: "var(--accent)", unread: true, selected: false },
  { from: "GitHub", avatar: "GH", avatarBg: "#24292e", subject: "[korana/api] PR #412 merged", snippet: "Fix: rate limiter edge case on batch endpoints for high-traffic accounts.", time: "1h", category: "Noise", catColor: "var(--ink-3)", unread: false, selected: false },
  { from: "Aanya Reddy", avatar: "AR", avatarBg: "#b53d2b", subject: "Invoice follow-up", snippet: "Hi — just checking if you received invoice #138? It was due last Friday.", time: "1h", category: "Urgent", catColor: "#b53d2b", unread: true, selected: false },
];

export function MailInboxMockup() {
  return (
    <div className={s.browser}>
      {/* Browser chrome */}
      <div className={s.chrome}>
        <div className={s.dots}>
          <span className={s.dotRed} /><span className={s.dotYellow} /><span className={s.dotGreen} />
        </div>
        <div className={s.urlBar}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className={s.lockIcon}><rect x="4" y="11" width="16" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.5"/><path d="M8 11V7a4 4 0 018 0v4" stroke="currentColor" strokeWidth="1.5"/></svg>
          <span>mail.korana.ai</span>
        </div>
        <div style={{ width: 52 }} />
      </div>

      <div className={s.layout}>
        {/* Sidebar */}
        <div className={s.sidebar}>
          <div className={s.sideHead}>
            <div className={s.sideLogo}>
              <svg width="14" height="14" viewBox="0 0 100 100" fill="none"><ellipse cx="50" cy="50" rx="40" ry="22" transform="rotate(-28 50 50)" fill="none" stroke="currentColor" strokeWidth="10" strokeLinecap="round"/><circle cx="50" cy="50" r="14" fill="currentColor"/><circle cx="83" cy="33" r="10" fill="var(--accent)"/></svg>
            </div>
            <div>
              <div className={s.sideBrand}>Korana Mail</div>
              <div className={s.sideEmail}>you@company.com</div>
            </div>
          </div>
          <button className={s.composeBtn}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
            Compose
          </button>
          <div className={s.folderList}>
            {FOLDERS.map((f) => (
              <div className={`${s.folder} ${f.active ? s.folderActive : ""}`} key={f.name}>
                <span className={s.folderName}>{f.name}</span>
                {f.count > 0 && <span className={s.folderCount}>{f.count}</span>}
              </div>
            ))}
          </div>
          <div className={s.sideFooter}>
            <div className={s.storageBar}>
              <div className={s.storageUsed} style={{ width: "32%" }} />
            </div>
            <div className={s.storageText}>3.2 GB of 10 GB used</div>
          </div>
        </div>

        {/* Email list */}
        <div className={s.list}>
          <div className={s.listHead}>
            <span className={s.listTitle}>Inbox</span>
            <span className={s.listCount}>6 unread</span>
          </div>
          {EMAILS.map((e, i) => (
            <div className={`${s.row} ${e.selected ? s.rowSelected : ""} ${e.unread ? s.rowUnread : ""}`} key={i}>
              <div className={s.rowAvatar} style={{ background: e.avatarBg }}>{e.avatar}</div>
              <div className={s.rowContent}>
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
            </div>
          ))}
        </div>

        {/* Detail pane */}
        <div className={s.detail}>
          <div className={s.detailHead}>
            <div className={s.detailMeta}>
              <div className={s.detailAvatar} style={{ background: "#c14a26" }}>SC</div>
              <div>
                <div className={s.detailFrom}>Sarah Chen</div>
                <div className={s.detailEmail}>sarah.chen@acme.co · 2 min ago</div>
              </div>
            </div>
            <div className={s.detailSubject}>Re: Q3 proposal</div>
          </div>
          <div className={s.detailBody}>
            <p>Hi — looks good overall! Can we add the pricing table from last quarter? I want to compare YoY before the board meeting on Thursday.</p>
            <p>Also, can you flag the hosting cost change? That jumped 18%.</p>
          </div>
          <div className={s.aiDraft}>
            <div className={s.aiHeader}>
              <div className={s.aiLabel}>
                <span className={s.aiDot} />
                AI Draft
              </div>
              <span className={s.aiMatch}>94% tone match</span>
            </div>
            <div className={s.aiText}>
              Hi Sarah — absolutely. I&apos;ve attached the Q2 vs Q3 pricing comparison. The main delta is the 12% volume discount we introduced in July. I&apos;ve also flagged the hosting cost increase (18%) in a separate row. Let me know if you want me to add commentary for the board deck.
            </div>
            <div className={s.aiActions}>
              <button className={s.aiApprove}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M4 12.5L9 17.5L20 6.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Approve &amp; Send
              </button>
              <button className={s.aiEdit}>Edit draft</button>
              <button className={s.aiSkip}>Skip</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
