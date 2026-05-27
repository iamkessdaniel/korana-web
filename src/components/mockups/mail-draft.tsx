import s from "./mail-draft.module.css";

export function MailDraftMockup() {
  return (
    <div className={s.browser}>
      <div className={s.chrome}>
        <div className={s.dots}>
          <span /><span /><span />
        </div>
        <div className={s.url}>mail.korana.ai/compose</div>
      </div>

      <div className={s.compose}>
        <div className={s.fields}>
          <div className={s.field}>
            <span className={s.fieldLabel}>To</span>
            <span className={s.fieldValue}>sarah.chen@acme.co</span>
          </div>
          <div className={s.field}>
            <span className={s.fieldLabel}>Subject</span>
            <span className={s.fieldValue}>Re: Q3 proposal</span>
          </div>
        </div>

        {/* Original thread */}
        <div className={s.thread}>
          <div className={s.threadToggle}>Sarah Chen — May 26, 10:14 AM</div>
          <div className={s.threadBody}>
            Looks good — can we add the pricing table from last quarter? I want to compare YoY before the board meeting on Thursday. Also, can you flag the hosting cost change?
          </div>
        </div>

        {/* AI draft with tone controls */}
        <div className={s.draftArea}>
          <div className={s.draftText}>
            Hi Sarah — absolutely. I&apos;ve attached the Q2 vs Q3 pricing comparison. The main delta is the 12% volume discount we introduced in July. I&apos;ve also flagged the hosting cost increase (18%) in a separate row.

            Let me know if you want me to add commentary for the board deck.

            Best,
          </div>
        </div>

        <div className={s.toneBar}>
          <span className={s.toneLabel}>Tone</span>
          <button className={s.toneBtn}>More formal</button>
          <button className={s.toneBtn}>Shorter</button>
          <button className={s.toneBtn}>Friendlier</button>
          <button className={`${s.toneBtn} ${s.toneBtnActive}`}>As drafted</button>
        </div>

        <div className={s.toolbar}>
          <button className={s.sendBtn}>Send</button>
          <button className={s.scheduleBtn}>Schedule send</button>
          <div className={s.toolbarMeta}>AI draft · 94% match to your tone</div>
        </div>
      </div>
    </div>
  );
}
