import s from "./mail-timeline.module.css";

const STEPS = [
  { time: "0:00", label: "Email arrives", detail: "From: Sarah Chen", color: "var(--ink)" },
  { time: "0:03", label: "Categorized", detail: "Action — needs reply", color: "var(--accent)" },
  { time: "0:12", label: "Context loaded", detail: "12 prior threads found", color: "var(--info)" },
  { time: "0:45", label: "Draft written", detail: "In your voice & tone", color: "var(--positive)" },
  { time: "8:20", label: "You approved", detail: "One tap from phone", color: "var(--positive)" },
  { time: "8:22", label: "Reply sent", detail: "Delivered to Sarah", color: "var(--positive)" },
];

export function MailTimeline() {
  return (
    <div className={s.timeline}>
      <div className={s.track}>
        {STEPS.map((step, i) => (
          <div className={s.step} key={i}>
            <div className={s.dot} style={{ background: step.color }} />
            <div className={s.time}>{step.time}</div>
            <div className={s.label}>{step.label}</div>
            <div className={s.detail}>{step.detail}</div>
            {i < STEPS.length - 1 && <div className={s.line} />}
          </div>
        ))}
      </div>
      <div className={s.total}>
        <span className={s.totalN}>8 min 22 sec</span>
        <span className={s.totalL}>from inbox to sent</span>
      </div>
    </div>
  );
}
