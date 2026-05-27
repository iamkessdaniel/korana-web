import { Logo, Sparkle, Mic, Send } from "../icons";
import s from "./desktop-chat.module.css";

export function DesktopChat() {
  return (
    <div className={s.screen}>
      {/* macOS title bar */}
      <div className={s.titleBar}>
        <span className={`${s.dot} ${s.dotRed}`} />
        <span className={`${s.dot} ${s.dotYellow}`} />
        <span className={`${s.dot} ${s.dotGreen}`} />
        <span className={s.barTitle}>Korana — Dashboard</span>
      </div>

      {/* Faded background workspace */}
      <div className={s.workspace}>
        <div className={s.fakeNav}>
          <div className={s.fakeLogo} />
          <div className={s.fakeTab} />
          <div className={s.fakeTab} />
          <div className={s.fakeTab} />
        </div>
        <div className={s.fakeGrid}>
          <div className={s.fakeCardWide} />
          <div className={s.fakeCard} />
          <div className={s.fakeCard} />
          <div className={s.fakeCard} />
          <div className={s.fakeCardWide} />
        </div>
      </div>

      {/* Floating AI chat widget */}
      <div className={s.widget}>
        <div className={s.widgetHead}>
          <div className={s.widgetAvatar}>
            <Logo size={16} />
          </div>
          <div>
            <div className={s.widgetName}>
              Korana <span className={s.onlineDot} />
            </div>
            <div className={s.widgetSub}>AI Chief of Staff</div>
          </div>
        </div>

        <div className={s.messages}>
          <div className={s.msgBot}>
            3 invoices cleared overnight. Acme replied — they&apos;re in. Want me to draft the SOW?
          </div>
          <div className={s.msgUser}>
            Yes, send it. Also reschedule Friday's call to 3pm.
          </div>
          <div className={s.msgBot}>
            Done. SOW sent to Acme, call moved to 3pm. Anything else?
          </div>
          <span className={s.msgTime}>just now</span>
        </div>

        <div className={s.inputBar}>
          <span className={s.sparkle}><Sparkle size={16} /></span>
          <span className={s.inputField}>Ask Korana anything…</span>
          <span className={s.micBtn}><Mic size={14} /></span>
          <span className={s.sendBtn}><Send size={13} /></span>
        </div>
      </div>
    </div>
  );
}
