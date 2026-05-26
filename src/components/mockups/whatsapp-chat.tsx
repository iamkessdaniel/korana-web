import { Logo, Mic } from "../icons";
import s from "./whatsapp-chat.module.css";

function KMsg({ children, time, tight }: { children: React.ReactNode; time: string; tight?: boolean }) {
  return (
    <div className={`${s.msg} ${s.msgK}`} style={tight ? { padding: "5px 9px" } : undefined}>
      {children}
      <span className={s.time}>{time}</span>
    </div>
  );
}

function UMsg({ children, time }: { children: React.ReactNode; time: string }) {
  return (
    <div className={`${s.msg} ${s.msgU}`}>
      {children}
      <span className={s.time}>
        {time}
        <svg width="14" height="9" viewBox="0 0 16 10" fill="none" stroke="#34b7f1" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ verticalAlign: "-1px", marginLeft: 2, display: "inline" }}>
          <path d="M1 5L4.5 8.5L10 2" />
          <path d="M5.5 5L9 8.5L14.5 2" />
        </svg>
      </span>
    </div>
  );
}

export function WhatsappChat() {
  return (
    <div className={s.screen}>
      <div className={s.header}>
        <button className={s.back}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>
        <div className={s.avatar}><Logo size={16} /></div>
        <div className={s.titles}>
          <div className={s.title}>
            Korana
            <svg width="13" height="13" viewBox="0 0 24 24" fill="#1e7cbf" style={{ verticalAlign: "-2px", marginLeft: 3, display: "inline" }}>
              <path d="M12 2l2.4 1.8L17.4 3l1.2 2.7 2.7 1.2-.8 2.9L22 12l-1.8 2.4.8 2.9-2.7 1.2-1.2 2.7-2.9-.8L12 22l-2.4-1.8-2.9.8-1.2-2.7L2.7 17l.8-2.9L2 12l1.8-2.4-.8-2.9L5.7 5.4 6.9 2.7l2.9.8L12 2z" />
              <path d="M8 12l3 3 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
          </div>
          <div className={s.subtitle}>online · AI Chief of Staff</div>
        </div>
        <div className={s.actions}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17 10.5V7a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h12a1 1 0 001-1v-3.5l4 4v-11l-4 4z" /></svg>
          <svg width="4" height="20" viewBox="0 0 4 20" fill="currentColor"><circle cx="2" cy="4" r="2" /><circle cx="2" cy="10" r="2" /><circle cx="2" cy="16" r="2" /></svg>
        </div>
      </div>

      <div className={s.body}>
        <div className={s.datePill}>TODAY</div>

        <KMsg time="8:30 AM">
          Morning. <b>3 things</b> need you today. I&apos;ll send each — tap to act.
        </KMsg>

        <KMsg time="8:31 AM">
          <div className={s.card}>
            <div className={s.cardMeta}>&#9889; ACME CORP · Customer</div>
            <div className={s.cardTitle}>Pricing reply — net 60 ask</div>
            <div className={s.cardBody}>
              &ldquo;Happy to extend net 60 on contracts above ₹5L/year.
              Want me to send the new MSA?&rdquo;
            </div>
            <div className={s.cardFoot}>
              <span>Reply to <b>raj@acme.io</b></span>
            </div>
          </div>
          Approve to send, or reply with edits.
        </KMsg>

        <UMsg time="8:32 AM">Send it</UMsg>

        <KMsg time="8:32 AM" tight>
          <div className={s.mini}>
            <span className={`${s.miniDot} ${s.miniDotDone}`} /> Sent to Acme · ✓ delivered
          </div>
        </KMsg>

        <KMsg time="8:34 AM">
          Q3 GST is ready — output ₹84,210 · ITC ₹22,930 · net ₹61,280.
          <div className={s.btnRow}>
            <button className={`${s.waBtn} ${s.waBtnPrimary}`}>Review &amp; sign</button>
            <button className={s.waBtn}>View detail</button>
          </div>
        </KMsg>

        <UMsg time="8:35 AM">Sign</UMsg>

        <KMsg time="8:35 AM" tight>
          <div className={s.mini}>
            <span className={`${s.miniDot} ${s.miniDotDone}`} /> Filed with GSTN · ack KQ7-3318
          </div>
        </KMsg>

        <KMsg time="8:36 AM">
          Last one — invoice <b>#142 to Hexa Labs</b>, ₹1,20,000.
          Want me to add the PO and send?
        </KMsg>

        <div className={s.typing}>
          <span /><span /><span />
        </div>
      </div>

      <div className={s.input}>
        <div className={s.inputBar}>
          <span>&#128522;</span>
          <span style={{ flex: 1, color: "#999", fontSize: 14 }}>Message</span>
          <span>&#128206;</span>
          <span>&#128247;</span>
        </div>
        <button className={s.mic}>
          <Mic size={18} />
        </button>
      </div>
    </div>
  );
}
