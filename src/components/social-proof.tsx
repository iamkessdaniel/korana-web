import { TESTIMONIALS, LOGOS } from "@/lib/data";
import s from "./social-proof.module.css";

export function SocialProof() {
  return (
    <section className={`${s.sp} section`}>
      <div className="container">
        <div className={s.logos}>
          <div className="eyebrow" style={{ marginBottom: 18 }}>Running the back office at</div>
          <div className={s.logosRow}>
            {LOGOS.map((l) => (
              <span className={s.logo} key={l}>{l}</span>
            ))}
          </div>
        </div>

        <div className={s.grid}>
          {TESTIMONIALS.map((t, i) => (
            <article className={`${s.card} ${i === 0 ? s.cardWide : ""}`} key={t.name}>
              <div className={s.quote}>
                <span className={`${s.mark} serif-italic`}>&ldquo;</span>
                <p className={s.quoteText}>{t.quote}</p>
              </div>
              <div className={s.foot}>
                <div className={s.avatar} style={{ background: t.color }}>{t.initial}</div>
                <div>
                  <div className={s.name}>{t.name}</div>
                  <div className={s.role}>{t.role} · <span style={{ color: "var(--ink-3)" }}>{t.company}</span></div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className={s.bar}>
          {[
            { n: "2.4M+", l: "tasks finished by Korana.ai" },
            { n: "11.4h", l: "reclaimed per founder per week" },
            { n: "96%", l: "tasks completed without escalation" },
            { n: "~8s", l: "median time to approve" },
          ].map((st) => (
            <div className={s.barItem} key={st.l}>
              <div className={s.barN}>{st.n}</div>
              <div className={s.barL}>{st.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
