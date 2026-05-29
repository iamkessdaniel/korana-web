"use client";

import { useState } from "react";
import { APPROVAL_ITEMS } from "@/lib/data";
import { Sparkle, CheckSm, Inbox, Scale, Calendar } from "./icons";
import s from "./approvals.module.css";
import type { ReactNode } from "react";

const ICON_MAP: Record<string, ReactNode> = {
  inbox: <Inbox size={16} />,
  scale: <Scale size={16} />,
  calendar: <Calendar size={16} />,
};

interface DoneItem {
  id: number;
  title: string;
}

export function Approvals() {
  const [items, setItems] = useState(APPROVAL_ITEMS);
  const [done, setDone] = useState<DoneItem[]>([]);

  const approve = (id: number) => {
    const item = items.find((x) => x.id === id);
    if (!item) return;
    setItems(items.filter((x) => x.id !== id));
    setDone([{ id: item.id, title: item.title }, ...done].slice(0, 4));
  };

  return (
    <section className={`${s.ap} section`}>
      <div className="container">
        <div className={s.head}>
          <div className="eyebrow">The dynamic</div>
          <h2 className={`display ${s.h2}`}>
            You approve <span className="serif-italic">what matters.</span><br />
            Korana.ai does the rest.
          </h2>
          <p className={s.sub}>
            Korana.ai drafts, runs, and finishes. The only thing that comes to you is a small
            handful of decisions a day — each with full context, a recommendation, and one tap to approve.
          </p>
        </div>

        <div className={s.frame}>
          <div className={s.frameHead}>
            <div className={s.frameTitle}>
              <Sparkle size={16} />
              <span>Today&apos;s approvals</span>
              <span className={s.count}>{items.length}</span>
            </div>
            <div style={{ display: "flex", gap: 8, fontSize: 12, color: "var(--ink-3)" }}>
              <span>Auto-prioritized</span>
              <span>·</span>
              <span>Try it — tap a card</span>
            </div>
          </div>

          <div className={s.list}>
            {items.length === 0 && (
              <div className={s.empty}>
                <div style={{ fontSize: 48, fontFamily: "var(--font-display)", color: "var(--ink)" }}>0</div>
                <div className="serif-italic" style={{ fontSize: 22, color: "var(--ink-2)", marginTop: 4 }}>Inbox zero, by 9am.</div>
                <div style={{ fontSize: 13, color: "var(--ink-3)", marginTop: 8 }}>Korana.ai handled the rest of today already.</div>
              </div>
            )}
            {items.map((item) => (
              <div className={`${s.item} ${item.urgent ? s.urgent : ""}`} key={item.id}>
                <div className={s.itemIcon}>{ICON_MAP[item.iconType]}</div>
                <div>
                  <div className={s.itemTag}>{item.kind} · <span>{item.time}</span></div>
                  <div className={s.itemTitle}>{item.title}</div>
                  <div className={s.itemBody}>&ldquo;{item.body}&rdquo;</div>
                  <div className={s.itemMeta}>{item.meta}</div>
                </div>
                <div className={s.itemActions}>
                  <button className={`${s.btn} ${s.btnPrimary}`} onClick={() => approve(item.id)}>
                    <CheckSm size={11} /> {item.action}
                  </button>
                  <button className={s.btn}>Edit</button>
                  <button className={`${s.btn} ${s.btnGhost}`}>Skip</button>
                </div>
              </div>
            ))}
          </div>

          <div className={s.frameFoot}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{
                width: 24, height: 24, borderRadius: 6,
                background: "color-mix(in srgb, var(--positive) 12%, transparent)",
                color: "var(--positive)",
                display: "inline-flex", alignItems: "center", justifyContent: "center",
              }}><CheckSm size={11} /></span>
              <span style={{ fontSize: 13, color: "var(--ink-2)" }}>
                {done.length === 0 ? "Already done today" : "Just sent"}
                <span style={{ color: "var(--ink-3)" }}> · </span>
                <span className="mono" style={{ fontSize: 12, color: "var(--ink-3)" }}>
                  {done.length > 0 ? done[0]!.title.toLowerCase() : "20 tasks · 0 needing review"}
                </span>
              </span>
            </div>
            <div style={{ fontSize: 12, color: "var(--ink-3)", fontFamily: "var(--font-mono)" }}>
              avg approval time · 8s
            </div>
          </div>
        </div>

        <div className={s.metaRow}>
          <div className={s.metaStat}>
            <span className="serif-italic" style={{ fontSize: 40, color: "var(--ink)" }}>4-8</span>
            <span style={{ fontSize: 14, color: "var(--ink-2)", marginLeft: 8 }}>decisions a day,<br />not 40.</span>
          </div>
          <div className={s.metaStat}>
            <span className="serif-italic" style={{ fontSize: 40, color: "var(--ink)" }}>1 tap</span>
            <span style={{ fontSize: 14, color: "var(--ink-2)", marginLeft: 8 }}>to approve.<br />Reply with edits to refine.</span>
          </div>
          <div className={s.metaStat}>
            <span className="serif-italic" style={{ fontSize: 40, color: "var(--ink)" }}>0 sec</span>
            <span style={{ fontSize: 14, color: "var(--ink-2)", marginLeft: 8 }}>spent in dashboards.<br />Comes to you, anywhere.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
