import {
  Logo, Lock, Sparkle, Inbox, Receipt, Invoice, Scale,
  Pipeline, Calendar, Chart, Megaphone, ChevronDown,
  Search, Bell, Plus, Arrow,
} from "../icons";
import s from "./web-dashboard.module.css";
import type { ReactNode } from "react";

const WEEK_ICON_MAP: Record<string, ReactNode> = {
  reply: <Inbox size={13} />,
  invoice: <Invoice size={13} />,
  cal: <Calendar size={13} />,
  mega: <Megaphone size={13} />,
  book: <Receipt size={13} />,
  tax: <Scale size={13} />,
};

function KPI({ label, value, sub, up, accent }: {
  label: string; value: string; sub: string; up?: boolean; accent?: boolean;
}) {
  return (
    <div style={{
      background: "var(--surface)", border: "1px solid var(--line)",
      borderRadius: 12, padding: "12px 14px",
      display: "flex", flexDirection: "column", gap: 2,
    }}>
      <div style={{ fontSize: 11.5, color: "var(--ink-3)", fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "0.06em" }}>{label}</div>
      <div style={{ fontFamily: "var(--font-display)", fontSize: 28, lineHeight: 1, color: accent ? "var(--accent)" : "var(--ink)", marginTop: 4 }}>{value}</div>
      <div style={{ fontSize: 11.5, color: up ? "var(--positive)" : "var(--ink-3)", marginTop: 2, display: "inline-flex", alignItems: "center", gap: 4 }}>
        {up && "↑ "}{sub}
      </div>
    </div>
  );
}

function WbApproval({ tag, title, preview, due, accent, last }: {
  tag: string; title: string; preview: string; due: string; accent?: boolean; last?: boolean;
}) {
  return (
    <div style={{
      padding: "12px 0",
      borderBottom: last ? "none" : "1px solid var(--line-2)",
      display: "flex", gap: 12, alignItems: "flex-start",
    }}>
      <div style={{
        width: 32, height: 32, borderRadius: 8,
        background: accent ? "var(--accent-soft)" : "var(--bg-2)",
        color: accent ? "var(--accent)" : "var(--ink-2)",
        display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
      }}>
        <Sparkle size={14} />
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 11, fontFamily: "var(--font-mono)", color: "var(--ink-3)", letterSpacing: "0.04em", textTransform: "uppercase" }}>{tag}</div>
        <div style={{ fontSize: 13.5, fontWeight: 600, marginTop: 2 }}>{title}</div>
        <div style={{ fontSize: 12.5, color: "var(--ink-2)", marginTop: 3, lineHeight: 1.4, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{preview}</div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 6 }}>
        <span style={{
          fontSize: 10.5, fontFamily: "var(--font-mono)",
          padding: "2px 6px", borderRadius: 4,
          background: accent ? "var(--accent)" : "var(--bg-2)",
          color: accent ? "#fff" : "var(--ink-3)",
        }}>{due}</span>
        <div style={{ display: "flex", gap: 5 }}>
          <button style={{ padding: "4px 10px", borderRadius: 6, background: "var(--ink)", color: "var(--bg)", fontSize: 11.5, fontWeight: 500 }}>Approve</button>
          <button style={{ padding: "4px 10px", borderRadius: 6, background: "transparent", color: "var(--ink-3)", fontSize: 11.5 }}>Edit</button>
        </div>
      </div>
    </div>
  );
}

function WeekItem({ icon, label, count, pct }: {
  icon: string; label: string; count: string; pct: number;
}) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <span style={{
        width: 26, height: 26, borderRadius: 7,
        background: "var(--bg-2)", color: "var(--ink-2)",
        display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
      }}>
        {WEEK_ICON_MAP[icon]}
      </span>
      <span style={{ fontSize: 13, color: "var(--ink-2)", flex: 0, minWidth: 170 }}>{label}</span>
      <span style={{ flex: 1, height: 6, borderRadius: 999, background: "var(--bg-2)", overflow: "hidden" }}>
        <span style={{ display: "block", height: "100%", width: `${pct * 100}%`, background: "var(--accent)", borderRadius: 999 }} />
      </span>
      <span style={{ fontFamily: "var(--font-display)", fontSize: 18, color: "var(--ink)", minWidth: 34, textAlign: "right" }}>{count}</span>
    </div>
  );
}

function ActivityLine({ time, who, what, status }: {
  time: string; who: string; what: string; status: "done" | "awaiting";
}) {
  return (
    <div style={{
      display: "flex", alignItems: "center", gap: 14,
      padding: "9px 0", borderBottom: "1px solid var(--line-2)",
    }}>
      <span style={{ fontSize: 11.5, fontFamily: "var(--font-mono)", color: "var(--ink-3)", minWidth: 54 }}>{time}</span>
      <span style={{
        width: 6, height: 6, borderRadius: 999,
        background: status === "done" ? "var(--positive)" : "var(--accent)",
        flexShrink: 0,
      }} />
      <span style={{ fontSize: 13, color: "var(--ink-2)", flex: 1 }}>
        <b style={{ color: "var(--ink)", fontWeight: 500 }}>{who}</b> — {what}
      </span>
      <span style={{
        fontSize: 10.5, fontFamily: "var(--font-mono)",
        padding: "2px 7px", borderRadius: 4,
        background: status === "done" ? "color-mix(in srgb, var(--positive) 12%, transparent)" : "var(--accent-soft)",
        color: status === "done" ? "var(--positive)" : "var(--accent)",
      }}>{status === "done" ? "done" : "awaiting"}</span>
    </div>
  );
}

export function WebDashboard() {
  return (
    <div className={s.frame}>
      <div className={s.chrome}>
        <div className={s.lights}>
          <span style={{ background: "#ff5f57" }} />
          <span style={{ background: "#febc2e" }} />
          <span style={{ background: "#28c840" }} />
        </div>
        <div className={s.url}>
          <Lock size={12} />
          <span>app.korana.ai/brief</span>
        </div>
        <div style={{ width: 60 }} />
      </div>

      <div className={s.app}>
        <aside className={s.side}>
          <div className={s.sideBrand}>
            <span className={s.sideMark}><Logo size={14} /></span>
            <span>Korana</span>
          </div>
          <div className={s.sideOrg}>
            <div className={s.sideOrgMark}>L</div>
            <div style={{ flex: 1, lineHeight: 1.1 }}>
              <div style={{ fontSize: 13, fontWeight: 600 }}>Lyra Studio</div>
              <div style={{ fontSize: 11, color: "var(--ink-3)" }}>5 seats</div>
            </div>
            <ChevronDown size={14} />
          </div>

          <div className={s.sideNav}>
            <div className={`${s.sideLink} ${s.sideLinkActive}`}><Sparkle size={15} /> Brief <span className={s.sideBadge}>3</span></div>
            <div className={s.sideLink}><Inbox size={15} /> Inbox</div>
            <div className={s.sideLink}><Receipt size={15} /> Books</div>
            <div className={s.sideLink}><Invoice size={15} /> Invoicing</div>
            <div className={s.sideLink}><Scale size={15} /> Tax & filings</div>
            <div className={s.sideLink}><Pipeline size={15} /> Sales</div>
            <div className={s.sideLink}><Calendar size={15} /> Calendar</div>
            <div className={s.sideLink}><Chart size={15} /> Reports</div>
            <div className={s.sideLink}><Megaphone size={15} /> Social</div>
          </div>

          <div style={{ flex: 1 }} />

          <div className={s.sideFoot}>
            <div className={s.sideUser}>
              <div className={s.sideUAvatar}>S</div>
              <div>
                <div style={{ fontSize: 12.5, fontWeight: 500 }}>Sam Walia</div>
                <div style={{ fontSize: 11, color: "var(--ink-3)" }}>Founder</div>
              </div>
            </div>
          </div>
        </aside>

        <main className={s.main}>
          <div className={s.topbar}>
            <div>
              <div style={{ fontSize: 11.5, fontFamily: "var(--font-mono)", color: "var(--ink-3)", letterSpacing: "0.08em", textTransform: "uppercase" }}>Friday Brief</div>
              <div className={s.h1}>
                <span className="serif-italic">Good afternoon, </span>Sam.
              </div>
            </div>
            <div className={s.topActions}>
              <button className={s.pill}><Search size={14} /> Ask Korana…</button>
              <button className={s.iconBtn}><Bell size={15} /></button>
              <button className={s.iconBtn}><Plus size={14} /></button>
            </div>
          </div>

          <div className={s.kpiRow}>
            <KPI label="Tasks this week" value="147" sub="+ 32 vs last week" up />
            <KPI label="Revenue collected" value="₹8.4L" sub="+ ₹2.1L vs last week" up />
            <KPI label="Customers replied" value="47" sub="median 12m response" />
            <KPI label="Pending approvals" value="3" sub="all under 6h" accent />
          </div>

          <div className={s.grid}>
            <div className={s.card}>
              <div className={s.cardH}>
                <div>
                  <div className={s.cardTitle}>Needs your approval</div>
                  <div className={s.cardSub}>3 items · sorted by deadline</div>
                </div>
                <button className={s.link}>View all <Arrow size={12} /></button>
              </div>
              <WbApproval tag="Customer · Acme" title="Reply re: net 60 ask" preview="Happy to extend net 60 on contracts above ₹5L/year. Want me to send the MSA?" due="2h ago" />
              <WbApproval tag="Compliance · GST" title="Sign Q3 filing" preview="Output ₹84,210 · ITC ₹22,930 · Net payable ₹61,280" due="due Mon" accent />
              <WbApproval tag="Invoicing · Hexa Labs" title="Send invoice #142" preview="₹1,20,000 · net 30 · attached to PO #HX-882" due="ready" last />
            </div>

            <div className={s.card}>
              <div className={s.cardH}>
                <div>
                  <div className={s.cardTitle}>This week, handled by Korana</div>
                  <div className={s.cardSub}>May 17 — May 23</div>
                </div>
                <span className="tag" style={{ fontSize: 11.5, height: 24 }}>
                  <Sparkle size={11} /> Auto
                </span>
              </div>
              <div className={s.weekRow}>
                <WeekItem icon="reply" label="Customer replies" count="47" pct={0.85} />
                <WeekItem icon="invoice" label="Invoices issued" count="12" pct={0.6} />
                <WeekItem icon="book" label="Expenses reconciled" count="38" pct={0.7} />
                <WeekItem icon="cal" label="Meetings scheduled" count="9" pct={0.4} />
                <WeekItem icon="mega" label="Social posts drafted" count="6" pct={0.3} />
                <WeekItem icon="tax" label="Filings prepared" count="2" pct={0.2} />
              </div>
            </div>
          </div>

          <div className={s.card} style={{ marginTop: 14 }}>
            <div className={s.cardH}>
              <div>
                <div className={s.cardTitle}>Activity</div>
                <div className={s.cardSub}>Live stream of what Korana is doing</div>
              </div>
              <div style={{ display: "flex", gap: 8 }}>
                <button className={`${s.chip} ${s.chipActive}`}>All</button>
                <button className={s.chip}>Done</button>
                <button className={s.chip}>Drafting</button>
                <button className={s.chip}>Awaiting</button>
              </div>
            </div>
            <ActivityLine time="2:14pm" who="Acme Corp" what="Drafted pricing reply" status="awaiting" />
            <ActivityLine time="2:01pm" who="Hexa Labs" what="Sent invoice #142" status="done" />
            <ActivityLine time="1:48pm" who="Priya Mehta" what="Booked Tue 11am intro call" status="done" />
            <ActivityLine time="1:33pm" who="GST Q3" what="Filing prepared, awaiting signature" status="awaiting" />
          </div>
        </main>
      </div>
    </div>
  );
}
