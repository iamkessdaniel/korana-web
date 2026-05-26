import { TIMELINE_DAYS } from "@/lib/data";
import s from "./this-week.module.css";

export function ThisWeek() {
  return (
    <section className={s.tw} id="what">
      <div className="container">
        <div className={s.head}>
          <div className="eyebrow">This week / May 17 — May 23</div>
          <h2 className={`display ${s.h2}`}>
            <span className="serif-italic">A senior chief of staff,</span><br />
            working in the background.
          </h2>
          <p className={s.sub}>
            This is what running the AI-native way actually looks like. Korana reads your inbox,
            books, calendar, and CRM, figures out what needs to happen, and gets started — drafting,
            sending, filing, scheduling. The only thing it asks for is your signature on what matters.
          </p>
        </div>

        <div className={s.timeline}>
          {TIMELINE_DAYS.map((d, i) => (
            <div className={`${s.day} ${i === TIMELINE_DAYS.length - 1 ? s.dayLast : ""}`} key={d.day}>
              <div className={s.dayLabel}>
                <div className={s.dayName}>{d.day}</div>
                <div className={s.dayDate}>{d.date}</div>
              </div>
              <div className={s.rows}>
                {d.rows.map((r, ri) => (
                  <div className={s.row} key={ri}>
                    <span className={s.time}>{r.time}</span>
                    <span className={`${s.dot} ${r.status === "done" ? s.dotDone : s.dotReview}`} />
                    <span className={s.text}>{r.text}</span>
                    <span className={`${s.status} ${r.status === "done" ? s.statusDone : s.statusReview}`}>
                      {r.status === "done" ? "✓ done" : "↑ to you"}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={s.stats}>
          {[
            { n: "147", unit: "", l: "tasks handled" },
            { n: "96", unit: "%", l: "finished without you" },
            { n: "11", unit: "h", l: "of evenings reclaimed" },
            { n: "3", unit: "", l: "decisions sent to you" },
          ].map((st) => (
            <div className={s.stat} key={st.l}>
              <span className="serif-italic" style={{ fontSize: 54, lineHeight: 1, color: "var(--ink)" }}>
                {st.n}{st.unit && <span style={{ fontSize: 32, color: "var(--ink-3)" }}>{st.unit}</span>}
              </span>
              <div className={s.statLabel}>{st.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
