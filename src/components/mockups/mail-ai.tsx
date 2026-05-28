import s from "./mail-ai.module.css";

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
            <div className={s.sideBrand}>Korana Mail</div>
          </div>
          <div className={s.sideItem}>Inbox</div>
          <div className={`${s.sideItem} ${s.sideActive}`}>AI</div>
          <div className={s.sideItem}>Drafts</div>
          <div className={s.sideItem}>Sent</div>
        </div>

        {/* Main — conversational AI interface */}
        <div className={s.main}>
          {/* Conversation history */}
          <div className={s.convo}>
            <div className={s.userMsg}>
              <div className={s.msgBubble}>
                Reply to Sarah about the Q3 proposal. Attach the pricing comparison and flag the hosting cost increase.
              </div>
              <div className={s.msgMeta}>You &middot; 10:22 AM</div>
            </div>

            <div className={s.aiMsg}>
              <div className={s.aiAvatar}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M12 3l1.7 5.3L19 10l-5.3 1.7L12 17l-1.7-5.3L5 10l5.3-1.7L12 3z" fill="currentColor"/>
                </svg>
              </div>
              <div className={s.aiContent}>
                <div className={s.aiLabel}>Korana</div>
                <div className={s.aiText}>
                  Done. I&apos;ve drafted a reply to Sarah Chen with the Q2 vs Q3 pricing table attached and the 18% hosting cost flagged in a separate row. 94% tone match.
                </div>
                <div className={s.aiCard}>
                  <div className={s.aiCardHead}>
                    <span className={s.aiCardLabel}>Draft ready</span>
                    <span className={s.aiCardMatch}>94% tone match</span>
                  </div>
                  <div className={s.aiCardTo}>To: sarah.chen@acme.co</div>
                  <div className={s.aiCardSubject}>Re: Q3 proposal</div>
                  <div className={s.aiCardPreview}>
                    Hi Sarah &mdash; absolutely. I&apos;ve attached the Q2 vs Q3 pricing comparison. The main delta is the 12% volume discount we introduced in July...
                  </div>
                  <div className={s.aiCardActions}>
                    <button className={s.aiCardSend}>Approve &amp; Send</button>
                    <button className={s.aiCardEdit}>Edit</button>
                    <button className={s.aiCardEdit}>Discard</button>
                  </div>
                </div>
              </div>
            </div>

            <div className={s.userMsg}>
              <div className={s.msgBubble}>
                What invoices are overdue this week?
              </div>
              <div className={s.msgMeta}>You &middot; 10:24 AM</div>
            </div>

            <div className={s.aiMsg}>
              <div className={s.aiAvatar}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M12 3l1.7 5.3L19 10l-5.3 1.7L12 17l-1.7-5.3L5 10l5.3-1.7L12 3z" fill="currentColor"/>
                </svg>
              </div>
              <div className={s.aiContent}>
                <div className={s.aiLabel}>Korana</div>
                <div className={s.aiText}>
                  Two overdue invoices found:
                </div>
                <div className={s.aiList}>
                  <div className={s.aiListItem}>
                    <span className={s.aiListDot} style={{ background: "var(--warning)" }} />
                    <span><strong>#138</strong> &mdash; Aanya Reddy &mdash; $4,200 &middot; 12 days overdue</span>
                  </div>
                  <div className={s.aiListItem}>
                    <span className={s.aiListDot} style={{ background: "var(--warning)" }} />
                    <span><strong>#141</strong> &mdash; Marker Studio &mdash; $1,800 &middot; 3 days overdue</span>
                  </div>
                </div>
                <div className={s.aiSuggestion}>Want me to send a follow-up to both?</div>
              </div>
            </div>
          </div>

          {/* Command bar */}
          <div className={s.cmdBar}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className={s.cmdIcon}>
              <path d="M12 3l1.7 5.3L19 10l-5.3 1.7L12 17l-1.7-5.3L5 10l5.3-1.7L12 3z" fill="currentColor"/>
            </svg>
            <span className={s.cmdPlaceholder}>Ask Korana anything or give an instruction...</span>
            <div className={s.cmdHint}>
              <kbd className={s.kbd}>/</kbd>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
