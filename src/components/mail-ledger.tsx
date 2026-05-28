import s from "./mail-ledger.module.css";

export function MailLedger() {
  return (
    <section className={`${s.ledger} section`}>
      <div className="container">
        <div className={s.head}>
          <div className="eyebrow">The Inbox Ledger</div>
          <h2 className={`display ${s.h2}`}>
            Your inbox already has <span className="serif-italic">every receipt.</span>
          </h2>
          <p className={s.sub}>
            Korana reads confirmations, invoices, and booking emails the moment they arrive &mdash; and turns them into a live financial and logistics dashboard. No manual entry. No spreadsheets.
          </p>
        </div>

        <div className={s.grid}>
          {/* Card 1 — Subscriptions */}
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
                <span>+14 more</span>
              </div>
            </div>
          </div>

          {/* Card 2 — Spend (middle, offset) */}
          <div className={`${s.card} ${s.cardMiddle}`}>
            <div className={s.cardLabel}>Spend</div>
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

          {/* Card 3 — Trips */}
          <div className={s.card}>
            <div className={s.cardLabel}>Trips &amp; Tickets</div>
            <div className={s.tripBlock}>
              <div className={s.tripCity}>Lagos</div>
              <div className={s.tripDates}>Sept 14 &ndash; 19</div>
            </div>
            <div className={s.cardRows}>
              <div className={s.cardRow}>
                <span>Ethiopian Airlines</span>
                <span className={s.cardRowVal}>ET 507</span>
              </div>
              <div className={s.cardRow}>
                <span>Radisson Blu</span>
                <span className={s.cardRowVal}>5 nights</span>
              </div>
              <div className={s.cardRow}>
                <span>Conference</span>
                <span className={s.cardRowVal}>Ticket #2481</span>
              </div>
            </div>
          </div>
        </div>

        <div className={s.pullQuote}>
          <div className={s.pullBar} />
          <p className={s.pullText}>
            &ldquo;Inbox Ledger found $480/month in subscriptions I forgot about. The AI paid for itself before lunch on day one.&rdquo;
          </p>
          <div className={s.pullAttr}>Priya Nair &middot; Solo founder &middot; Bangalore</div>
        </div>
      </div>
    </section>
  );
}
