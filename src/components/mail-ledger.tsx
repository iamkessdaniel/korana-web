import s from "./mail-ledger.module.css";

export function MailLedger() {
  return (
    <section className={`${s.ledger} section`}>
      <div className="container">
        <div className={s.head}>
          <div className="eyebrow">The Inbox Ledger</div>
          <h2 className={`display ${s.h2}`}>
            Every subscription, receipt, and booking &mdash;{" "}<span className="serif-italic">extracted&nbsp;automatically.</span>
          </h2>
          <p className={s.sub}>
            Korana reads confirmation emails, invoices, and booking threads the moment they arrive and builds a live dashboard. No manual entry. No spreadsheets. Just open the Ledger.
          </p>
        </div>

        <div className={s.layout}>
          {/* Left: email source */}
          <div className={s.source}>
            <div className={s.sourceLabel}>Korana reads this email</div>
            <div className={s.emailCard}>
              <div className={s.emailFrom}>From: billing@notion.so</div>
              <div className={s.emailSubject}>Your invoice for May 2026</div>
              <div className={s.emailBody}>
                Your Notion Team plan renewed. Amount: $96.00. Next billing date: June 1, 2026. Payment method: Visa ending 4242.
              </div>
            </div>
            <div className={s.arrowDown}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className={s.sourceLabel}>And adds it to your Ledger</div>
          </div>

          {/* Right: dashboard cards */}
          <div className={s.grid}>
            {/* Subscriptions */}
            <div className={s.card}>
              <div className={s.cardLabel}>Subscriptions</div>
              <div className={s.cardBig}>$1,247<span className={s.cardUnit}>/mo</span></div>
              <div className={s.cardRows}>
                <div className={s.cardRow}>
                  <span>Notion</span>
                  <span className={s.cardRowVal}>$96/mo</span>
                </div>
                <div className={s.cardRow}>
                  <span>Figma</span>
                  <span className={s.cardRowVal}>$75/mo</span>
                </div>
                <div className={s.cardRow}>
                  <span>Vercel</span>
                  <span className={s.cardRowVal}>$20/mo</span>
                </div>
                <div className={`${s.cardRow} ${s.cardRowMore}`}>
                  <span>+14 more detected from email</span>
                </div>
              </div>
            </div>

            {/* Spend */}
            <div className={s.card}>
              <div className={s.cardLabel}>Monthly Spend</div>
              <div className={s.cardSplit}>
                <div>
                  <div className={s.cardSmLabel}>Out</div>
                  <div className={s.cardMid}>$9,412</div>
                </div>
                <div className={s.cardDivider} />
                <div>
                  <div className={s.cardSmLabel}>In</div>
                  <div className={s.cardMid}>$14,287</div>
                </div>
              </div>
              <div className={s.cardRows}>
                <div className={s.cardRow}>
                  <span>SaaS &amp; tools</span>
                  <span className={s.cardRowVal}>$1,247</span>
                </div>
                <div className={s.cardRow}>
                  <span>Contractors</span>
                  <span className={s.cardRowVal}>$4,800</span>
                </div>
                <div className={s.cardRow}>
                  <span>Client payments</span>
                  <span className={s.cardRowVal} style={{ color: "var(--positive)" }}>+$14,287</span>
                </div>
              </div>
            </div>

            {/* Trips */}
            <div className={s.card}>
              <div className={s.cardLabel}>Trips &amp; Tickets</div>
              <div className={s.tripBlock}>
                <div className={s.tripCity}>New York</div>
                <div className={s.tripDates}>Sept 14 &ndash; 19</div>
              </div>
              <div className={s.cardRows}>
                <div className={s.cardRow}>
                  <span>Delta Airlines</span>
                  <span className={s.cardRowVal}>DL 412</span>
                </div>
                <div className={s.cardRow}>
                  <span>The Standard</span>
                  <span className={s.cardRowVal}>5 nights</span>
                </div>
                <div className={s.cardRow}>
                  <span>Conference</span>
                  <span className={s.cardRowVal}>Ticket #2481</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
