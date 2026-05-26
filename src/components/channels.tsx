"use client";

import { useState } from "react";
import { Web, Phone, Whatsapp, CheckSm } from "./icons";
import { PhoneFrame } from "./mockups/phone-frame";
import { MobileBrief } from "./mockups/mobile-brief";
import { WhatsappChat } from "./mockups/whatsapp-chat";
import { WebDashboard } from "./mockups/web-dashboard";
import { ScaledFit } from "./mockups/scaled-fit";
import s from "./channels.module.css";

type Channel = "web" | "mobile" | "wa";

const TABS: { id: Channel; icon: React.ReactNode; label: string }[] = [
  { id: "web", icon: <Web size={15} />, label: "Web app" },
  { id: "mobile", icon: <Phone size={15} />, label: "Mobile" },
  { id: "wa", icon: <Whatsapp size={15} />, label: "WhatsApp" },
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
            Reply on WhatsApp between meetings. Approve from your phone in the cab.
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

          {/* WhatsApp */}
          <div className={`${s.pane} ${active === "wa" ? s.paneOn : ""}`}>
            <div className={s.text}>
              <h3 className={s.paneH}><span className="serif-italic">Just chat.</span> Get it done.</h3>
              <p className={s.paneP}>
                Korana speaks WhatsApp like a real chief of staff would — short messages,
                clear asks, ready drafts. Reply with a thumbs up, a &ldquo;send it&rdquo;, or your own words.
                Nothing to install, no new app to learn.
              </p>
              <ul className={s.bullets}>
                <li><CheckSm size={11} /> Verified business number, end-to-end encrypted</li>
                <li><CheckSm size={11} /> Voice notes, photos, documents — all understood</li>
                <li><CheckSm size={11} /> Approve sends, signs, payments inline</li>
                <li><CheckSm size={11} /> Daily summary at 8am, weekly brief Friday 4:30pm</li>
              </ul>
            </div>
            <div className={`${s.visual} ${s.visualWa}`}>
              <PhoneFrame>
                <WhatsappChat />
              </PhoneFrame>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
