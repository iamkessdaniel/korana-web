import { CAPABILITIES, type CapabilityIcon } from "@/lib/data";
import { Arrow, Receipt, Invoice, Scale, Inbox, Pipeline, Calendar, Chart, Megaphone } from "./icons";
import s from "./capabilities.module.css";
import type { ReactNode } from "react";

const ICON_MAP: Record<CapabilityIcon, ReactNode> = {
  receipt: <Receipt />,
  invoice: <Invoice />,
  scale: <Scale />,
  inbox: <Inbox />,
  pipeline: <Pipeline />,
  calendar: <Calendar />,
  chart: <Chart />,
  megaphone: <Megaphone />,
};

export function Capabilities() {
  return (
    <section className={`${s.cap} section`}>
      <div className="container">
        <div className={s.head}>
          <div className="eyebrow">What Korana.ai does</div>
          <h2 className={`display ${s.h2}`}>
            Eight jobs.<br />
            <span className="serif-italic">One chief of staff.</span>
          </h2>
          <p className={s.sub}>
            The old way: a bookkeeper, a VA, a fractional CFO, an SDR, an EA — hired out one by one.
            The AI-native way: one operator that does all of it, in coordination, all the time.
            Five to ten hires of overhead, gone.
          </p>
        </div>

        <div className={s.grid}>
          {CAPABILITIES.map((c) => (
            <article className={s.card} key={c.title}>
              <div className={s.cardTop}>
                <span className={s.icon}>{ICON_MAP[c.icon]}</span>
                <span className={`${s.tag} ${c.tag === "review" ? s.tagReview : ""}`}>
                  {c.tag === "review" ? "you approve" : "fully auto"}
                </span>
              </div>
              <h3 className={s.cardTitle}>{c.title}</h3>
              <p className={s.cardDesc}>{c.description}</p>
            </article>
          ))}
        </div>

        <div className={s.foot}>
          <div className={s.footText}>
            <span className="serif-italic" style={{ fontSize: 22, color: "var(--ink)" }}>Plus everything else</span>
            <span style={{ color: "var(--ink-3)", fontSize: 15 }}>— vendor management, contracts, hiring funnels, expense approvals.</span>
          </div>
          <a href="#cta" className="btn btn-ghost btn-sm">See full capability list <Arrow size={13} /></a>
        </div>
      </div>
    </section>
  );
}
