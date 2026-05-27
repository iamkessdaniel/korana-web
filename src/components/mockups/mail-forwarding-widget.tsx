import s from "./mail-forwarding-widget.module.css";

export function MailForwardingWidget() {
  return (
    <div className={s.widget}>
      <div className={s.label}>Forwarding active</div>
      <div className={s.flow}>
        <span className={s.source}>
          <span className={s.sourceIcon}>G</span>
          Gmail
        </span>
        <span className={s.arrow}>&rarr;</span>
        <span className={s.source}>
          <span className={s.sourceIcon} style={{ background: "#0078d4", fontSize: 10 }}>O</span>
          Outlook
        </span>
        <span className={s.arrow}>&rarr;</span>
        <span className={s.dest}>
          <span className={s.destDot} />
          Korana Mail
        </span>
      </div>
    </div>
  );
}
