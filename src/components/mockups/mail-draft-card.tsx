import s from "./mail-draft-card.module.css";

export function MailDraftCard() {
  return (
    <div className={s.card}>
      <div className={s.head}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div className={s.avatar}>AI</div>
          <div>
            <div className={s.headTitle}>Korana.ai drafted a reply</div>
            <div className={s.headMeta}>To: Sarah Chen · Re: Q3 proposal · 2 min ago</div>
          </div>
        </div>
        <span className={s.tag}>
          <span className={s.dot} /> Drafting
        </span>
      </div>

      <div className={s.thread}>
        <div className={s.threadLabel}>Sarah Chen wrote:</div>
        <div className={s.threadQuote}>Looks good — can we add the pricing table from last quarter? I want to compare YoY before the board meeting.</div>
      </div>

      <div className={s.draft}>
        <div className={s.draftLabel}>Your reply (AI draft):</div>
        <div className={s.draftText}>
          Hi Sarah — absolutely. I&apos;ve attached the Q2 vs Q3 pricing comparison. The main delta is the 12% volume discount we introduced in July. Let me know if you want me to add commentary for the board deck.
        </div>
      </div>

      <div className={s.actions}>
        <button className={s.btnPrimary}>Send reply</button>
        <button className={s.btnGhost}>Edit</button>
      </div>
    </div>
  );
}
