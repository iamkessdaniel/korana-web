"use client";

import { useState } from "react";
import { Web, Phone, Desktop } from "./icons";
import { MailInboxMockup } from "./mockups/mail-inbox";
import { MailPhoneInbox } from "./mockups/mail-phone-inbox";
import { PhoneFrame } from "./mockups/phone-frame";
import { ScaledFit } from "./mockups/scaled-fit";
import s from "./mail-channels.module.css";

type Tab = "web" | "mobile" | "desktop";

const TABS: { id: Tab; icon: React.ReactNode; label: string }[] = [
  { id: "web", icon: <Web size={15} />, label: "Web" },
  { id: "mobile", icon: <Phone size={15} />, label: "Mobile" },
  { id: "desktop", icon: <Desktop size={15} />, label: "Desktop" },
];

const CONTENT: Record<Tab, { bullets: string[]; }> = {
  web: {
    bullets: [
      "Full three-column layout — sidebar, list, detail",
      "AI Insights panel and draft approval inline",
      "Keyboard shortcuts for power users",
      "Works in any modern browser, nothing to install",
    ],
  },
  mobile: {
    bullets: [
      "Swipe to approve, archive, or snooze",
      "Push notifications for items that need you",
      "Offline reading — syncs when you reconnect",
      "Native-feeling speed on iOS and Android",
    ],
  },
  desktop: {
    bullets: [
      "Menu-bar quick-reply widget",
      "Native notifications and badge counts",
      "Spotlight / Alfred integration for search",
      "Same AI features as web — nothing stripped",
    ],
  },
};

export function MailChannels() {
  const [active, setActive] = useState<Tab>("web");

  return (
    <section className={`${s.channels} section`}>
      <div className="container">
        <div className={s.head}>
          <div className="eyebrow">Channels</div>
          <h2 className={`display ${s.h2}`}>
            Same inbox, <span className="serif-italic">every device.</span>
          </h2>
          <p className={s.sub}>
            Web, mobile, and desktop — one experience, fully synced. Pick up where you left off on any screen.
          </p>
        </div>

        <div className={s.tabs}>
          {TABS.map((t) => (
            <button
              key={t.id}
              className={`${s.tab} ${active === t.id ? s.tabActive : ""}`}
              onClick={() => setActive(t.id)}
            >
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        <div className={s.stage}>
          {/* Web */}
          <div className={`${s.pane} ${active === "web" ? s.paneOn : ""}`}>
            <div className={s.split}>
              <div className={s.copy}>
                <ul className={s.bullets}>
                  {CONTENT.web.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
              <div className={s.mockup}>
                <ScaledFit width={980} height={640} maxScale={0.6}>
                  <MailInboxMockup />
                </ScaledFit>
              </div>
            </div>
          </div>

          {/* Mobile */}
          <div className={`${s.pane} ${active === "mobile" ? s.paneOn : ""}`}>
            <div className={s.split}>
              <div className={s.copy}>
                <ul className={s.bullets}>
                  {CONTENT.mobile.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
              <div className={s.mockup} style={{ display: "flex", justifyContent: "center" }}>
                <PhoneFrame>
                  <MailPhoneInbox />
                </PhoneFrame>
              </div>
            </div>
          </div>

          {/* Desktop */}
          <div className={`${s.pane} ${active === "desktop" ? s.paneOn : ""}`}>
            <div className={s.split}>
              <div className={s.copy}>
                <ul className={s.bullets}>
                  {CONTENT.desktop.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
              <div className={s.mockup}>
                <div className={s.desktopWidget}>
                  <div className={s.dwHead}>
                    <div className={s.dwDot} />
                    <span className={s.dwLabel}>Korana Mail</span>
                    <span className={s.dwBadge}>3</span>
                  </div>
                  <div className={s.dwItem}>
                    <div className={s.dwFrom}>Sarah Chen</div>
                    <div className={s.dwSnippet}>Re: Q3 proposal — looks good, can we add...</div>
                    <div className={s.dwActions}>
                      <button className={s.dwBtn}>Approve &amp; Send</button>
                      <button className={s.dwBtnGhost}>Edit</button>
                    </div>
                  </div>
                  <div className={s.dwItem}>
                    <div className={s.dwFrom}>Alex Rivera</div>
                    <div className={s.dwSnippet}>Intro — Marker x Korana</div>
                    <div className={s.dwActions}>
                      <button className={s.dwBtn}>Approve &amp; Send</button>
                      <button className={s.dwBtnGhost}>Edit</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
