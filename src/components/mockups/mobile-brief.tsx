import { Sparkle, Inbox, Receipt, Chart, CheckSm, Calendar, Invoice, Megaphone } from "../icons";
import s from "./mobile-brief.module.css";
import type { ReactNode } from "react";

const DONE_ICON_MAP: Record<string, ReactNode> = {
  reply: <Inbox size={13} />,
  invoice: <Invoice size={13} />,
  cal: <Calendar size={13} />,
  mega: <Megaphone size={13} />,
  book: <Receipt size={13} />,
};

function ApprovalCard({ title, meta, body, primary, accent }: {
  title: string; meta: string; body: string; primary: string; accent?: boolean;
}) {
  return (
    <div className={`${s.appCard} ${accent ? s.appCardAccent : ""}`}>
      <div className={s.appMeta}>{meta}</div>
      <div className={s.appTitle}>{title}</div>
      <div className={s.appBody}>{body}</div>
      <div className={s.appActions}>
        <button className={`${s.appBtn} ${s.appBtnPrimary}`}>
          <CheckSm size={11} /> {primary}
        </button>
        <button className={s.appBtn}>Edit</button>
        <button className={`${s.appBtn} ${s.appBtnSkip}`}>Skip</button>
      </div>
    </div>
  );
}

function DoneRow({ text, icon }: { text: string; icon: string }) {
  return (
    <div className={s.doneRow}>
      <span className={s.doneIcon}><CheckSm size={10} /></span>
      <span style={{ fontSize: 12.5, color: "var(--ink-2)", flex: 1 }}>{text}</span>
      <span style={{ color: "var(--ink-3)" }}>{DONE_ICON_MAP[icon]}</span>
    </div>
  );
}

export function MobileBrief({ compact }: { compact?: boolean }) {
  return (
    <div className={s.screen}>
      <div className={s.status}>
        <span>9:41</span>
        <span style={{ display: "flex", gap: 5, alignItems: "center" }}>
          <svg width="16" height="10" viewBox="0 0 16 10" fill="none"><rect x="0" y="3" width="3" height="4" rx="0.5" fill="currentColor" /><rect x="4" y="2" width="3" height="6" rx="0.5" fill="currentColor" /><rect x="8" y="1" width="3" height="8" rx="0.5" fill="currentColor" /><rect x="12" y="0" width="3" height="10" rx="0.5" fill="currentColor" /></svg>
          <svg width="14" height="10" viewBox="0 0 14 10" fill="none" stroke="currentColor" strokeWidth="1"><path d="M0 5C2 2 5 1 7 1s5 1 7 4M2 7c1.4-1.5 3-2 5-2s3.6 0.5 5 2M4 9c1-1 2-1.5 3-1.5s2 0.5 3 1.5" /></svg>
          <svg width="22" height="10" viewBox="0 0 22 10" fill="none"><rect x="0.5" y="0.5" width="18" height="9" rx="2" stroke="currentColor" /><rect x="2" y="2" width="13" height="6" rx="1" fill="currentColor" /><rect x="19.5" y="3.5" width="1.5" height="3" rx="0.5" fill="currentColor" /></svg>
        </span>
      </div>

      <div className={s.header}>
        <div>
          <div style={{ fontSize: 11, fontFamily: "var(--font-mono)", color: "var(--ink-3)", letterSpacing: "0.06em", textTransform: "uppercase" }}>Fri · May 23</div>
          <div style={{ fontSize: 22, fontFamily: "var(--font-display)", lineHeight: 1.1, marginTop: 2 }}>Morning, Sam</div>
        </div>
        <div className={s.avatar}>S</div>
      </div>

      <div className={s.handled}>
        <div className={s.handledNum}>
          <span className="serif-italic" style={{ fontSize: 17, display: "block", color: "var(--ink-2)" }}>Today, I handled</span>
          <strong style={{ color: "var(--ink)", fontWeight: 600, fontSize: 20, display: "inline-block", marginTop: 2 }}>23 tasks</strong> for you.
        </div>
        <div className={s.handledBars}>
          <span style={{ flex: 7, background: "var(--positive)" }} />
          <span style={{ flex: 3, background: "var(--accent)" }} />
        </div>
        <div className={s.handledLegend}>
          <span><b style={{ display: "inline-block", width: 7, height: 7, borderRadius: 999, background: "var(--positive)", marginRight: 5, verticalAlign: "middle" }} />20 done</span>
          <span><b style={{ display: "inline-block", width: 7, height: 7, borderRadius: 999, background: "var(--accent)", marginRight: 5, verticalAlign: "middle" }} />3 review</span>
        </div>
      </div>

      <div className={s.sectionH}>Needs your approval</div>

      <ApprovalCard
        title="Reply to Acme — net 60 ask"
        meta="Customer · drafted 2m ago"
        body="Happy to extend net 60 on contracts above ₹5L/year. Want me to send the new MSA?"
        primary="Send"
      />
      <ApprovalCard
        title="Sign Q3 GST filing"
        meta="Compliance · due Mon"
        body="Output ₹84,210 · ITC ₹22,930 · Net payable ₹61,280"
        primary="Sign"
        accent
      />

      {!compact && (
        <>
          <ApprovalCard
            title="Invoice #142 — Hexa Labs"
            meta="Invoicing · ready"
            body="₹1,20,000 · net 30 · attached to PO #HX-882"
            primary="Send"
          />
          <div className={s.sectionH} style={{ marginTop: 6 }}>Done today</div>
          <DoneRow text="Replied to 8 customer threads" icon="reply" />
          <DoneRow text="Issued 3 invoices · ₹3.4L collected" icon="invoice" />
          <DoneRow text="Booked intro call with Priya" icon="cal" />
          <DoneRow text="Drafted Twitter for 4pm" icon="mega" />
          <DoneRow text="Reconciled 14 expenses" icon="book" />
          <div style={{ height: 80 }} />
        </>
      )}

      <div className={s.tabbar}>
        <div className={`${s.tab} ${s.tabActive}`}><Sparkle size={18} /><span>Brief</span></div>
        <div className={s.tab}><Inbox size={18} /><span>Inbox</span></div>
        <div className={s.tab}><Receipt size={18} /><span>Books</span></div>
        <div className={s.tab}><Chart size={18} /><span>Reports</span></div>
      </div>
    </div>
  );
}
