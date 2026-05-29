import s from "./mail-phone-inbox.module.css";

const EMAILS = [
  { from: "Sarah Chen", subject: "Re: Q3 proposal", snippet: "Can we add the pricing table?", time: "2m", tag: "Decision", tagColor: "var(--accent)" },
  { from: "Stripe", subject: "Payout completed", snippet: "$4,280.00 deposited to your account", time: "14m", tag: "FYI", tagColor: "var(--info)" },
  { from: "Alex Rivera", subject: "Intro — Marker x Korana.ai", snippet: "Hey! Wanted to connect you two...", time: "28m", tag: "Reply", tagColor: "var(--accent)" },
  { from: "GitHub", subject: "[korana/api] PR #412 merged", snippet: "Fix: rate limiter edge case on batch...", time: "1h", tag: "Noise", tagColor: "var(--ink-3)" },
  { from: "Aanya Reddy", subject: "Invoice follow-up", snippet: "Just checking if you received #138?", time: "1h", tag: "Urgent", tagColor: "#b53d2b" },
];

export function MailPhoneInbox() {
  return (
    <div className={s.inbox}>
      <div className={s.header}>
        <div className={s.headerTop}>
          <div className={s.headerTitle}>Inbox</div>
          <div className={s.aiIndicator}>
            <span className={s.aiDot} />
            <span>AI</span>
          </div>
        </div>
        <div className={s.headerMeta}>5 unread · 2 need you</div>
        <div className={s.filters}>
          <span className={`${s.filter} ${s.filterActive}`}>All</span>
          <span className={s.filter}>Decisions</span>
          <span className={s.filter}>Urgent</span>
          <span className={s.filter}>FYI</span>
        </div>
      </div>
      <div className={s.list}>
        {EMAILS.map((e, i) => (
          <div className={`${s.row} ${i === 0 ? s.rowHighlight : ""}`} key={i}>
            <div className={s.rowTop}>
              <span className={s.from}>{e.from}</span>
              <span className={s.time}>{e.time}</span>
            </div>
            <div className={s.subject}>{e.subject}</div>
            <div className={s.rowBottom}>
              <span className={s.snippet}>{e.snippet}</span>
              <span className={s.tag} style={{ color: e.tagColor, background: `color-mix(in srgb, ${e.tagColor} 12%, transparent)` }}>
                {e.tag}
              </span>
            </div>
            {i === 0 && (
              <div className={s.aiDraft}>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                  <path d="M12 3l1.7 5.3L19 10l-5.3 1.7L12 17l-1.7-5.3L5 10l5.3-1.7L12 3z" fill="currentColor"/>
                </svg>
                <span>Draft ready · 94% tone match</span>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className={s.cmdBar}>
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" className={s.cmdIcon}>
          <path d="M12 3l1.7 5.3L19 10l-5.3 1.7L12 17l-1.7-5.3L5 10l5.3-1.7L12 3z" fill="currentColor"/>
        </svg>
        <span className={s.cmdText}>Ask Korana.ai...</span>
        <span className={s.cmdKbd}>⌘</span>
      </div>
    </div>
  );
}

export function MailPhoneDraft() {
  return (
    <div className={s.inbox}>
      <div className={s.header}>
        <div className={s.headerTop}>
          <div className={s.headerTitle}>AI Draft</div>
          <div className={s.matchBadge}>94% match</div>
        </div>
        <div className={s.headerMeta}>Re: Q3 proposal · Sarah Chen</div>
      </div>
      <div className={s.draftBody}>
        <div className={s.draftOriginal}>
          <div className={s.draftOrigLabel}>Original</div>
          <p>Can we add the pricing table from last quarter? I want to compare YoY before the board meeting.</p>
        </div>
        <div className={s.draftReply}>
          <div className={s.draftReplyLabel}>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
              <path d="M12 3l1.7 5.3L19 10l-5.3 1.7L12 17l-1.7-5.3L5 10l5.3-1.7L12 3z" fill="currentColor"/>
            </svg>
            AI Draft
          </div>
          <p>Hi Sarah — absolutely. I&apos;ve attached the Q2 vs Q3 pricing comparison. The main delta is the 12% volume discount we introduced in July. I&apos;ve also flagged the hosting cost increase (18%) in a separate row.</p>
          <p>Let me know if you want commentary for the board deck.</p>
        </div>
        <div className={s.toneRow}>
          <span className={s.toneLabel}>Tone</span>
          <span className={`${s.toneChip} ${s.toneActive}`}>As drafted</span>
          <span className={s.toneChip}>Shorter</span>
          <span className={s.toneChip}>Formal</span>
        </div>
        <div className={s.draftActions}>
          <button className={s.draftSend}>Approve &amp; Send</button>
          <button className={s.draftEdit}>Edit</button>
          <button className={s.draftSkip}>Skip</button>
        </div>
        <div className={s.draftMeta}>23 other replies handled while you slept.</div>
      </div>
    </div>
  );
}

export function MailPhoneSearch() {
  return (
    <div className={s.inbox}>
      <div className={s.header}>
        <div className={s.headerTop}>
          <div className={s.headerTitle}>Search</div>
        </div>
        <div className={s.searchBar}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
            <circle cx="10.5" cy="10.5" r="7" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M15.5 15.5L20 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <span className={s.searchQuery}>hotel receipt new york sept</span>
        </div>
      </div>
      <div className={s.searchResults}>
        <div className={s.searchResult}>
          <div className={s.searchFrom}>The Standard NYC</div>
          <div className={s.searchSubject}>Booking confirmation #STD-7821</div>
          <div className={s.searchSnippet}>&quot;Sept 14 check-in · 5 nights · $1,840.00&quot;</div>
          <div className={s.searchMeta}>
            <span className={s.searchTag}>Receipt</span>
            <span className={s.searchDate}>Sept 8</span>
          </div>
        </div>
        <div className={s.searchResult}>
          <div className={s.searchFrom}>Delta Air Lines</div>
          <div className={s.searchSubject}>E-ticket DL 412 — JFK</div>
          <div className={s.searchSnippet}>&quot;Departs Sept 14 · Seat 12A&quot;</div>
          <div className={s.searchMeta}>
            <span className={s.searchTag}>Travel</span>
            <span className={s.searchDate}>Sept 1</span>
          </div>
        </div>
        <div className={s.searchResult}>
          <div className={s.searchFrom}>Stripe</div>
          <div className={s.searchSubject}>Payment receipt — The Standard</div>
          <div className={s.searchSnippet}>&quot;Visa ending 4242 · $1,840.00&quot;</div>
          <div className={s.searchMeta}>
            <span className={s.searchTag}>Payment</span>
            <span className={s.searchDate}>Sept 14</span>
          </div>
        </div>
      </div>
      <div className={s.searchFooter}>
        Searched 24,841 messages in 0.2s
      </div>
    </div>
  );
}
