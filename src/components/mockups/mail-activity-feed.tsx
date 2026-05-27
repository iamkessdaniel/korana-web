import { MailEnvelope, Send, Inbox, Sparkle } from "../icons";
import s from "./mail-activity-feed.module.css";

const EVENTS = [
  { icon: "arrive", from: "Sarah Chen", what: "Email received — categorized Action", status: "done", time: "2m" },
  { icon: "draft", from: "→ Sarah Chen", what: "AI draft ready — awaiting approval", status: "review", time: "4m" },
  { icon: "send", from: "Stripe", what: "Auto-filed to FYI — no action needed", status: "done", time: "14m" },
  { icon: "triage", from: "Alex Rivera", what: "Categorized Action — draft queued", status: "done", time: "28m" },
  { icon: "send", from: "→ Aanya Reddy", what: "Reply sent (approved)", status: "done", time: "35m" },
  { icon: "triage", from: "Newsletter", what: "Categorized Noise — archived", status: "done", time: "1h" },
] as const;

const ICON_MAP: Record<string, React.ReactNode> = {
  arrive: <MailEnvelope size={14} />,
  draft: <Sparkle size={14} />,
  send: <Send size={14} />,
  triage: <Inbox size={14} />,
};

export function MailActivityFeed() {
  return (
    <div className={s.feed}>
      <div className={s.label}>Live mail activity</div>
      {EVENTS.map((row, i) => (
        <div className={s.row} key={i}>
          <div className={s.icon}>{ICON_MAP[row.icon]}</div>
          <div className={s.info}>
            <div className={s.who}>{row.from}</div>
            <div className={s.what}>{row.what}</div>
          </div>
          <div className={s.right}>
            <span className={`${s.status} ${row.status === "done" ? s.done : s.review}`}>
              {row.status === "done" ? "done" : "review"}
            </span>
            <span className={s.time}>{row.time} ago</span>
          </div>
        </div>
      ))}
    </div>
  );
}
