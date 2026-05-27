import s from "./mail-inbox.module.css";

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
  {
    from: "Sarah Chen",
    avatar: "SC",
    avatarBg: "#c14a26",
    subject: "Re: Q3 proposal",
    snippet: "Can we add the pricing table...",
    time: "2m",
    unread: true,
    selected: true,
    tag: "\u{1F4CB} Decision needed",
    tagColor: "var(--accent)",
  },
  {
    from: "Aanya Reddy",
    avatar: "AR",
    avatarBg: "#b53d2b",
    subject: "Invoice follow-up",
    snippet: "Just checking if you received...",
    time: "28m",
    unread: true,
    selected: false,
    tag: "\u{1F4B0} Invoice #138 \u2014 $4,200 overdue",
    tagColor: "var(--warning)",
  },
  {
    from: "Alex Rivera",
    avatar: "AR",
    avatarBg: "#2d6b4e",
    subject: "Intro \u2014 Marker x Korana",
    snippet: "Wanted to connect you two...",
    time: "1h",
    unread: true,
    selected: false,
    tag: "\u{1F91D} Intro \u2014 reply suggested",
    tagColor: "var(--info)",
  },
  {
    from: "Google Calendar",
    avatar: "GC",
    avatarBg: "#4285f4",
    subject: "Board review \u2014 Thursday 2pm",
    snippet: "Priya Mehta has accepted...",
    time: "2h",
    unread: false,
    selected: false,
    tag: "\u{1F4C5} Thu 2pm added to calendar",
    tagColor: "var(--info)",
  },
  {
    from: "Stripe",
    avatar: "S",
    avatarBg: "#635bff",
    subject: "Payout completed \u2014 $4,280.00",
    snippet: "Deposited to account ending...",
    time: "3h",
    unread: false,
    selected: false,
    tag: "Auto-filed \u00B7 no action",
    tagColor: "var(--ink-3)",
  },
];

export function MailInboxMockup() {
  return (
    <div className={s.browser}>
      {/* Browser chrome */}
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
        {/* ── Sidebar ── */}
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
          <button className={s.composeBtn}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
              <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            Compose
          </button>

          <div className={s.sideLabel}>Smart Views</div>
          <div className={s.folderList}>
            {SMART_VIEWS.map((f) => (
              <div
                className={`${s.folder} ${f.active ? s.folderActive : ""} ${f.dimmed ? s.folderDimmed : ""}`}
                key={f.name}
              >
                <span className={s.folderName}>{f.name}</span>
                {f.count > 0 && <span className={s.folderCount}>{f.count}</span>}
              </div>
            ))}
          </div>

          <div className={s.sideAi}>
            <div className={s.sideAiHead}>
              <span>AI Assistant</span>
            </div>
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

        {/* ── Email list ── */}
        <div className={s.list}>
          <div className={s.listHead}>
            <span className={s.listTitle}>Decisions</span>
            <span className={s.listCount}>3 need you</span>
          </div>
          {EMAILS.map((e, i) => (
            <div
              className={`${s.row} ${e.selected ? s.rowSelected : ""} ${e.unread ? s.rowUnread : ""}`}
              key={i}
            >
              <div className={s.rowAvatar} style={{ background: e.avatarBg }}>
                {e.avatar}
              </div>
              <div className={s.rowContent}>
                <div className={s.rowTop}>
                  <span className={s.from}>{e.from}</span>
                  <span className={s.time}>{e.time}</span>
                </div>
                <div className={s.subject}>{e.subject}</div>
                <div className={s.snippet}>{e.snippet}</div>
                <span
                  className={s.aiTag}
                  style={{
                    color: e.tagColor,
                    background: `color-mix(in srgb, ${e.tagColor} 12%, transparent)`,
                  }}
                >
                  {e.tag}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* ── Detail pane ── */}
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

          {/* AI Insights panel */}
          <div className={s.aiInsights}>
            <div className={s.aiInsightsHead}>
              <span className={s.aiInsightsLabel}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2l2.09 6.26L20.18 9l-5 4.36L16.82 20 12 16.47 7.18 20l1.64-6.64-5-4.36 6.09-.74z" fill="currentColor" />
                </svg>
                AI Insights
              </span>
              <span className={s.aiInsightsCount}>2 items extracted</span>
            </div>

            <div className={s.insightRow}>
              <span className={s.insightIcon}>{"\u{1F4C5}"}</span>
              <div className={s.insightBody}>
                <div className={s.insightType}>Meeting Detected</div>
                <div className={s.insightDesc}>Board review &mdash; Thursday 2pm</div>
                <div className={s.insightQuote}>&ldquo;...before the board meeting on Thursday.&rdquo;</div>
                <div className={s.insightActions}>
                  <button className={`${s.insightBtn} ${s.insightBtnDone}`}>Added to calendar &#10003;</button>
                  <button className={s.insightBtn}>Open in CoS &rarr;</button>
                </div>
              </div>
            </div>

            <div className={s.insightRow}>
              <span className={s.insightIcon}>{"\u{1F4CA}"}</span>
              <div className={s.insightBody}>
                <div className={s.insightType}>Data Request</div>
                <div className={s.insightDesc}>Q2 pricing table + hosting cost flag</div>
                <div className={s.insightQuote}>&ldquo;...add the pricing table from last quarter?&rdquo;</div>
                <div className={s.insightActions}>
                  <button className={s.insightBtn}>Create task &rarr;</button>
                  <button className={s.insightBtn}>Add to CoS &rarr;</button>
                </div>
              </div>
            </div>
          </div>

          <div className={s.detailBody}>
            <p>Hi &mdash; looks good overall! Can we add the pricing table from last quarter? I want to compare YoY before the board meeting on Thursday.</p>
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
              Hi Sarah &mdash; absolutely. I&apos;ve attached the Q2 vs Q3 pricing comparison. The main delta is the 12% volume discount we introduced in July. I&apos;ve also flagged the hosting cost increase (18%) in a separate row. Let me know if you want me to add commentary for the board deck.
            </div>
            <div className={s.aiActions}>
              <button className={s.aiApprove}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                  <path d="M4 12.5L9 17.5L20 6.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
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
