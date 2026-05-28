import s from "./mail-ai.module.css";

const SIDEBAR_ITEMS = [
  { name: "Inbox", count: 24, active: false },
  { name: "Decisions", count: 3, active: true },
  { name: "Drafts", count: 6, active: false },
  { name: "Sent", count: 0, active: false },
  { name: "Noise", count: 12, active: false, dimmed: true },
];

const EMAILS = [
  { from: "Sarah Chen", subject: "Re: Q3 proposal", time: "2m", tag: "Decision needed", tagColor: "var(--accent)" },
  { from: "Aanya Reddy", subject: "Invoice follow-up", time: "28m", tag: "Invoice #138 overdue", tagColor: "var(--warning)" },
  { from: "Alex Rivera", subject: "Intro — Marker x Korana", time: "1h", tag: "Intro — reply suggested", tagColor: "var(--info)" },
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
          <span>mail.korana.ai</span>
        </div>
        <div style={{ width: 52 }} />
      </div>

      <div className={s.layout}>
        {/* Sidebar */}
        <div className={s.sidebar}>
          <div className={s.sideHead}>
            <svg width="14" height="14" viewBox="0 0 100 100" fill="none">
              <ellipse cx="50" cy="50" rx="40" ry="22" transform="rotate(-28 50 50)" fill="none" stroke="currentColor" strokeWidth="10" strokeLinecap="round" />
              <circle cx="50" cy="50" r="14" fill="currentColor" />
              <circle cx="83" cy="33" r="10" fill="var(--accent)" />
            </svg>
            <span className={s.sideBrand}>Korana Mail</span>
          </div>
          <div className={s.sideLabel}>Smart Views</div>
          {SIDEBAR_ITEMS.map((item) => (
            <div className={`${s.sideItem} ${item.active ? s.sideActive : ""} ${item.dimmed ? s.sideDimmed : ""}`} key={item.name}>
              <span>{item.name}</span>
              {item.count > 0 && <span className={s.sideCount}>{item.count}</span>}
            </div>
          ))}
          <div className={s.sideAi}>
            <span className={s.sideAiDot} />
            <span>AI Active</span>
          </div>
        </div>

        {/* Email list */}
        <div className={s.list}>
          <div className={s.listHead}>Decisions <span className={s.listBadge}>3</span></div>
          {EMAILS.map((e, i) => (
            <div className={`${s.row} ${i === 0 ? s.rowSelected : ""}`} key={i}>
              <div className={s.rowFrom}>{e.from}</div>
              <div className={s.rowSubject}>{e.subject}</div>
              <div className={s.rowBottom}>
                <span className={s.rowTag} style={{ color: e.tagColor, background: `color-mix(in srgb, ${e.tagColor} 12%, transparent)` }}>{e.tag}</span>
                <span className={s.rowTime}>{e.time}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Detail pane with AI conversation */}
        <div className={s.detail}>
          <div className={s.detailHead}>
            <div className={s.detailFrom}>Sarah Chen</div>
            <div className={s.detailSubject}>Re: Q3 proposal</div>
          </div>

          <div className={s.detailBody}>
            <p>Can we add the pricing table from last quarter? I want to compare YoY before the board meeting on Thursday.</p>
          </div>

          {/* AI conversation panel */}
          <div className={s.aiPanel}>
            <div className={s.aiPanelHead}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                <path d="M12 3l1.7 5.3L19 10l-5.3 1.7L12 17l-1.7-5.3L5 10l5.3-1.7L12 3z" fill="currentColor"/>
              </svg>
              <span>Korana AI</span>
            </div>
            <div className={s.aiReply}>
              I&apos;ve drafted a reply with the Q2 vs Q3 pricing comparison attached and the 18% hosting cost flagged.
            </div>
            <div className={s.aiDraftCard}>
              <div className={s.aiDraftHead}>
                <span className={s.aiDraftLabel}>Draft ready</span>
                <span className={s.aiDraftMatch}>94% match</span>
              </div>
              <div className={s.aiDraftPreview}>
                Hi Sarah &mdash; absolutely. I&apos;ve attached the Q2 vs Q3 pricing comparison. The main delta is the 12% volume discount...
              </div>
              <div className={s.aiDraftActions}>
                <button className={s.aiSend}>Approve &amp; Send</button>
                <button className={s.aiEdit}>Edit</button>
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
