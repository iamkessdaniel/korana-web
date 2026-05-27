import { Logo, Sparkle, Mic, Send } from "../icons";
import s from "./chat-widget.module.css";

interface ChatWidgetProps {
  large?: boolean;
  className?: string;
}

export function ChatWidget({ large, className }: ChatWidgetProps) {
  return (
    <div className={`${s.widget} ${large ? s.widgetLg : ""} ${className || ""}`}>
      <div className={s.head}>
        <div className={s.avatar}>
          <Logo size={14} />
        </div>
        <div>
          <div className={s.name}>
            Korana <span className={s.online} />
          </div>
          <div className={s.sub}>AI Chief of Staff</div>
        </div>
      </div>

      <div className={s.msgs}>
        <div className={s.bot}>
          3 invoices cleared overnight. Acme replied — they&apos;re in. Draft the SOW?
        </div>
        <div className={s.user}>
          Yes, send it. Move Friday&apos;s call to 3pm.
        </div>
        <div className={s.bot}>
          Done. SOW sent, call moved. Anything else?
        </div>
        <span className={s.time}>just now</span>
      </div>

      <div className={s.bar}>
        <span className={s.sparkle}><Sparkle size={14} /></span>
        <span className={s.placeholder}>Ask Korana anything…</span>
        <span className={s.mic}><Mic size={13} /></span>
        <span className={s.send}><Send size={12} /></span>
      </div>
    </div>
  );
}
