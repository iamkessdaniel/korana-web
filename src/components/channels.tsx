"use client";

import { useState } from "react";
import { Web, Phone, Desktop, CheckSm } from "./icons";
import { PhoneFrame } from "./mockups/phone-frame";
import { MobileBrief } from "./mockups/mobile-brief";
import { DesktopChat } from "./mockups/desktop-chat";
import { WebDashboard } from "./mockups/web-dashboard";
import { ScaledFit } from "./mockups/scaled-fit";
import s from "./channels.module.css";

type Channel = "web" | "mobile" | "desktop";

const TABS: { id: Channel; icon: React.ReactNode; label: string }[] = [
  { id: "web", icon: <Web size={15} />, label: "Web" },
  { id: "mobile", icon: <Phone size={15} />, label: "Mobile" },
  { id: "desktop", icon: <Desktop size={15} />, label: "Desktop" },
];

export function Channels() {
  const [active, setActive] = useState<Channel>("web");

  return (
    <section className={`${s.ch} section`} id="channels">
      <div className="container">
        <div className={s.head}>
          <div className="eyebrow">Channels</div>
          <h2 className={`display ${s.h2}`}>
            Wherever you work, <span className="serif-italic">Korana shows up.</span>
          </h2>
          <p className={s.sub}>
            Get updates in your favorite chat apps. Approve from your phone in the cab.
            Open the full dashboard at your desk. Same chief of staff, same context, every surface.
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
            <div className={s.text}>
              <h3 className={s.paneH}><span className="serif-italic">Command center,</span> at your desk.</h3>
              <p className={s.paneP}>
                The web app is where you spend the longer minutes — reviewing the week,
                planning next, drilling into a customer thread, pulling up the P&L.
                Built for keyboard speed.
              </p>
              <ul className={s.bullets}>
                <li><CheckSm size={11} /> Universal search & ask: &ldquo;what&apos;s overdue?&rdquo;</li>
                <li><CheckSm size={11} /> Live activity stream across all eight jobs</li>
                <li><CheckSm size={11} /> Approve, edit, or reassign with one tap</li>
                <li><CheckSm size={11} /> Voice notes — speak instructions, get them back done</li>
              </ul>
            </div>
            <div className={`${s.visual} ${s.visualWeb}`}>
              <ScaledFit width={980} height={760}>
                <WebDashboard />
              </ScaledFit>
            </div>
          </div>

          {/* Mobile */}
          <div className={`${s.pane} ${active === "mobile" ? s.paneOn : ""}`}>
            <div className={s.text}>
              <h3 className={s.paneH}>In your pocket. <span className="serif-italic">In a hurry.</span></h3>
              <p className={s.paneP}>
                Native iOS & Android. Designed for the gap between meetings — your morning brief,
                a few approvals, a voice note instruction, and you&apos;re done. Under three minutes.
              </p>
              <ul className={s.bullets}>
                <li><CheckSm size={11} /> Morning brief delivered as a push notification</li>
                <li><CheckSm size={11} /> Voice-first — &ldquo;send the Acme reply, decline lunch&rdquo;</li>
                <li><CheckSm size={11} /> Swipe to approve, hold to record reply</li>
                <li><CheckSm size={11} /> Offline-safe — Korana keeps going, syncs when you&apos;re back</li>
              </ul>
            </div>
            <div className={`${s.visual} ${s.visualMobile}`}>
              <PhoneFrame>
                <MobileBrief />
              </PhoneFrame>
            </div>
          </div>

          {/* Desktop */}
          <div className={`${s.pane} ${active === "desktop" ? s.paneOn : ""}`}>
            <div className={s.text}>
              <h3 className={s.paneH}><span className="serif-italic">Always there,</span> never in the way.</h3>
              <p className={s.paneP}>
                A floating AI assistant that lives on your desktop. Ask anything with voice or text,
                get instant updates across all your channels. No tab-switching, no context-switching —
                just speak and it&apos;s done.
              </p>
              <ul className={s.bullets}>
                <li><CheckSm size={11} /> Voice mode — speak instructions, hear updates back</li>
                <li><CheckSm size={11} /> Cross-app updates: Slack, email, WhatsApp in one thread</li>
                <li><CheckSm size={11} /> Approve, delegate, or reschedule inline</li>
                <li><CheckSm size={11} /> Always-on — runs quietly until you need it</li>
              </ul>
            </div>
            <div className={`${s.visual} ${s.visualDesktop}`}>
              <ScaledFit width={720} height={520}>
                <DesktopChat />
              </ScaledFit>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
