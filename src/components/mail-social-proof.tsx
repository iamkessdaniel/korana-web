import { MAIL_TESTIMONIALS } from "@/lib/data";
import s from "./social-proof.module.css";

export function MailSocialProof() {
  return (
    <section className={`${s.sp} section`}>
      <div className="container">
        <div className={s.bar}>
          {[
            { n: "94%", l: "of emails handled" },
            { n: "<8 min", l: "average reply time" },
            { n: "$1/mo", l: "per mailbox /mo" },
            { n: "0", l: "emails lost in the move" },
          ].map((st) => (
            <div className={s.barItem} key={st.l}>
              <div className={s.barN}>{st.n}</div>
              <div className={s.barL}>{st.l}</div>
            </div>
          ))}
        </div>

        <div className={s.grid} style={{ marginTop: 32, gridTemplateColumns: "repeat(2, 1fr)" }}>
          {MAIL_TESTIMONIALS.map((t) => (
            <article className={s.card} key={t.name}>
              <div className={s.quote}>
                <span className={`${s.mark} serif-italic`}>&ldquo;</span>
                <p className={s.quoteText}>{t.quote}</p>
              </div>
              <div className={s.foot}>
                <div className={s.avatar} style={{ background: t.color }}>{t.initial}</div>
                <div>
                  <div className={s.name}>{t.name}</div>
                  <div className={s.role}>{t.role} &middot; <span style={{ color: "var(--ink-3)" }}>{t.company}</span></div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
