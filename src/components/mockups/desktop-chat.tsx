import { ChatWidget } from "./chat-widget";
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

      {/* Floating AI chat widget — prominent */}
      <div className={s.widgetWrap}>
        <ChatWidget large />
      </div>
    </div>
  );
}
