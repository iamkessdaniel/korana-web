import s from "./mail-ai.module.css";

const SIDEBAR_ITEMS = [
  { name: "Inbox", count: 24, active: false },
  { name: "Decisions", count: 3, active: true },
  { name: "Action Items", count: 6, active: false },
  { name: "FYI", count: 8, active: false },
  { name: "Noise", count: 12, active: false, dimmed: true },
];

const EMAILS = [
  { from: "Sarah Chen", avatar: "SC", avatarBg: "#c14a26", subject: "Re: Q3 proposal", time: "2m", tag: "Decision needed", tagColor: "var(--accent)", selected: true },
  { from: "Aanya Reddy", avatar: "AR", avatarBg: "#b53d2b", subject: "Invoice follow-up", time: "28m", tag: "Invoice #138 overdue", tagColor: "var(--warning)", selected: false },
  { from: "Alex Rivera", avatar: "AR", avatarBg: "#2d6b4e", subject: "Intro — Marker x Korana", time: "1h", tag: "Intro — reply suggested", tagColor: "var(--info)", selected: false },
];

export function MailAiMockup() {
  return (
    <div className={s.browser}>
      <div className={s.chrome}>
        <div className={s.dots}>
          <span className={s.dotRed} />
          <span className={s.dotYellow} />
          <span className={s.dotGreen} />
        </div>
        <div className={s.urlBar}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className={s.lockIcon}>
            <rect x="4" y="11" width="16" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
            <path d="M8 11V7a4 4 0 018 0v4" stroke="currentColor" strokeWidth="1.5" />
          </svg>
          <span>mail.example.com</span>
        </div>
        <div style={{ width: 52 }} />
      </div>

      <div className={s.layout}>
        {/* Sidebar */}
        <div className={s.sidebar}>
          <div className={s.sideHead}>
            <div className={s.sideLogo}>
              <svg width="14" height="14" viewBox="0 0 100 100" fill="none">
                <ellipse cx="50" cy="50" rx="40" ry="22" transform="rotate(-28 50 50)" fill="none" stroke="currentColor" strokeWidth="10" strokeLinecap="round" />
                <circle cx="50" cy="50" r="14" fill="currentColor" />
                <circle cx="83" cy="33" r="10" fill="var(--accent)" />
              </svg>
            </div>
            <div>
              <div className={s.sideBrand}>Korana Mail</div>
              <div className={s.sideEmail}>you@company.com</div>
            </div>
          </div>
          <div className={s.sideLabel}>Smart Views</div>
          {SIDEBAR_ITEMS.map((item) => (
            <div className={`${s.sideItem} ${item.active ? s.sideActive : ""} ${item.dimmed ? s.sideDimmed : ""}`} key={item.name}>
              <span>{item.name}</span>
              {item.count > 0 && <span className={s.sideCount}>{item.count}</span>}
            </div>
          ))}
          <div className={s.sideLedger}>
            <div className={s.sideLabel}>Inbox Ledger</div>
            <div className={s.ledgerRow}>
              <span className={s.ledgerName}>Subscriptions</span>
              <span className={s.ledgerVal}>$1,247/mo</span>
            </div>
            <div className={s.ledgerRow}>
              <span className={s.ledgerName}>Spend</span>
              <span className={s.ledgerVal}>$9,412</span>
            </div>
          </div>
          <div className={s.sideAi}>
            <span className={s.sideAiDot} />
            <span>AI Active</span>
            <span className={s.sideAiStat}>6 drafts ready</span>
          </div>
        </div>

        {/* Email list */}
        <div className={s.list}>
          <div className={s.listHead}>
            <span className={s.listTitle}>Decisions</span>
            <span className={s.listBadge}>3 need you</span>
          </div>
          {EMAILS.map((e, i) => (
            <div className={`${s.row} ${e.selected ? s.rowSelected : ""}`} key={i}>
              <div className={s.rowAvatar} style={{ background: e.avatarBg }}>{e.avatar}</div>
              <div className={s.rowContent}>
                <div className={s.rowTop}>
                  <span className={s.rowFrom}>{e.from}</span>
                  <span className={s.rowTime}>{e.time}</span>
                </div>
                <div className={s.rowSubject}>{e.subject}</div>
                <span className={s.rowTag} style={{ color: e.tagColor, background: `color-mix(in srgb, ${e.tagColor} 12%, transparent)` }}>{e.tag}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Detail pane with AI conversation */}
        <div className={s.detail}>
          <div className={s.detailHead}>
            <div className={s.detailMeta}>
              <div className={s.detailAvatar} style={{ background: "#c14a26" }}>SC</div>
              <div>
                <div className={s.detailFrom}>Sarah Chen</div>
                <div className={s.detailEmail}>sarah.chen@acme.co &middot; 2 min ago</div>
              </div>
            </div>
            <div className={s.detailSubject}>Re: Q3 proposal</div>
          </div>

          <div className={s.detailBody}>
            <p>Can we add the pricing table from last quarter? I want to compare YoY before the board meeting on Thursday.</p>
          </div>

          {/* AI conversation panel */}
          <div className={s.aiPanel}>
            <div className={s.aiPanelHead}>
              <span className={s.aiPanelLabel}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                  <path d="M12 3l1.7 5.3L19 10l-5.3 1.7L12 17l-1.7-5.3L5 10l5.3-1.7L12 3z" fill="currentColor"/>
                </svg>
                Korana AI
              </span>
              <span className={s.aiPanelBadge}>2 actions</span>
            </div>
            <div className={s.aiReply}>
              I&apos;ve drafted a reply with the Q2 vs Q3 pricing comparison attached and the 18% hosting cost flagged.
            </div>
            <div className={s.aiDraftCard}>
              <div className={s.aiDraftHead}>
                <span className={s.aiDraftLabel}>
                  <span className={s.aiDot} />
                  Draft ready
                </span>
                <span className={s.aiDraftMatch}>94% match</span>
              </div>
              <div className={s.aiDraftPreview}>
                Hi Sarah &mdash; absolutely. I&apos;ve attached the Q2 vs Q3 pricing comparison. The main delta is the 12% volume discount...
              </div>
              <div className={s.aiDraftActions}>
                <button className={s.aiSend}>
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
                    <path d="M4 12.5L9 17.5L20 6.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Approve &amp; Send
                </button>
                <button className={s.aiEdit}>Edit</button>
                <button className={s.aiSkip}>Skip</button>
              </div>
            </div>
          </div>

          {/* Command bar */}
          <div className={s.cmdBar}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className={s.cmdIcon}>
              <path d="M12 3l1.7 5.3L19 10l-5.3 1.7L12 17l-1.7-5.3L5 10l5.3-1.7L12 3z" fill="currentColor"/>
            </svg>
            <span className={s.cmdText}>Ask Korana anything...</span>
            <kbd className={s.kbd}>/</kbd>
          </div>
        </div>
      </div>
    </div>
  );
}
