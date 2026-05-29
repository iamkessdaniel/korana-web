import s from "./mail-ai.module.css";

const SMART_VIEWS = [
  { name: "All Mail", count: 24, active: false, dimmed: false },
  { name: "Decisions", count: 3, active: true, dimmed: false },
  { name: "Meetings", count: 4, active: false, dimmed: false },
  { name: "Action Items", count: 6, active: false, dimmed: false },
  { name: "Invoices", count: 2, active: false, dimmed: false },
  { name: "FYI", count: 8, active: false, dimmed: false },
  { name: "Noise", count: 12, active: false, dimmed: true },
];

const EMAILS = [
  { from: "Sarah Chen", avatar: "SC", avatarBg: "#c14a26", subject: "Re: Q3 proposal", time: "2m", tag: "Decision needed", tagColor: "var(--accent)", selected: true },
  { from: "Aanya Reddy", avatar: "AR", avatarBg: "#b53d2b", subject: "Invoice follow-up", time: "28m", tag: "Invoice #138 overdue", tagColor: "var(--warning)", selected: false },
  { from: "Alex Rivera", avatar: "AR", avatarBg: "#2d6b4e", subject: "Intro — Marker x Korana.ai", time: "1h", tag: "Intro — reply suggested", tagColor: "var(--info)", selected: false },
];

export function MailAiMockup() {
  return (
    <div className={s.browser}>
      <div className={s.shine} />
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
        {/* Sidebar — matches web mockup */}
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
              <div className={s.sideBrand}>Korana.ai Mail</div>
              <div className={s.sideEmail}>you@company.com</div>
            </div>
          </div>
          <button className={s.composeBtn}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
              <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            Compose
          </button>

          <div className={s.sideLabel}>Smart Views</div>
          <div className={s.folderList}>
            {SMART_VIEWS.map((f) => (
              <div className={`${s.sideItem} ${f.active ? s.sideActive : ""} ${f.dimmed ? s.sideDimmed : ""}`} key={f.name}>
                <span>{f.name}</span>
                {f.count > 0 && <span className={s.sideCount}>{f.count}</span>}
              </div>
            ))}
          </div>

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
            <div className={s.ledgerRow}>
              <span className={s.ledgerName}>Trips &amp; Tickets</span>
              <span className={s.ledgerVal}>2</span>
            </div>
          </div>

          <div className={s.sideLabels}>
            <div className={s.sideLabel}>Labels</div>
            <div className={s.labelRow}>
              <span className={s.labelDot} style={{ background: "var(--accent)" }} />
              <span className={s.labelName}>Lyra</span>
            </div>
            <div className={s.labelRow}>
              <span className={s.labelDot} style={{ background: "var(--info)" }} />
              <span className={s.labelName}>Personal</span>
            </div>
            <div className={s.labelRow}>
              <span className={s.labelDot} style={{ background: "var(--ink-3)" }} />
              <span className={s.labelName}>Newsletters</span>
            </div>
          </div>

          <div className={s.sideAi}>
            <div className={s.sideAiHead}>AI Assistant</div>
            <div className={s.sideAiStatus}>
              <span className={s.sideAiDot} />
              Active
            </div>
            <div className={s.sideAiStat}>6 drafts ready</div>
            <div className={s.sideAiStat}>
              <span className={s.sideAiLink}>3 items routed to CoS</span>
            </div>
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
                Korana.ai
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
                <button className={s.aiEditBtn}>Edit</button>
                <button className={s.aiSkip}>Skip</button>
              </div>
            </div>
          </div>

          {/* Floating command bar */}
          <div className={s.cmdBar}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className={s.cmdIcon}>
              <path d="M12 3l1.7 5.3L19 10l-5.3 1.7L12 17l-1.7-5.3L5 10l5.3-1.7L12 3z" fill="currentColor"/>
            </svg>
            <span className={s.cmdText}>Ask Korana.ai anything...</span>
            <kbd className={s.kbd}>/</kbd>
          </div>
        </div>
      </div>
    </div>
  );
}
