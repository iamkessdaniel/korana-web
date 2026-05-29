import { AtSign, Sparkle, CheckSm } from "./icons";
import { MailTimeline } from "./mockups/mail-timeline";
import s from "./mail-how-it-works.module.css";

const STEPS = [
  {
    n: "1",
    icon: <AtSign size={20} />,
    title: "Connect your domain",
    desc: "Point your MX records to Korana.ai, or keep Gmail/Outlook and set up forwarding. Either way, two minutes.",
  },
  {
    n: "2",
    icon: <Sparkle size={20} />,
    title: "Unleash the AI on your inbox",
    desc: "Every message is triaged, context is loaded from prior threads, and a reply is drafted in your voice — before you even open it.",
  },
  {
    n: "3",
    icon: <CheckSm size={20} />,
    title: "You approve what matters",
    desc: "Routine replies go out automatically. Important ones wait for your tap. You decide the threshold.",
  },
];

export function MailHowItWorks() {
  return (
    <section className={`${s.how} section`} id="how">
      <div className="container">
        <div className={s.head}>
          <div className="eyebrow">How it works</div>
          <h2 className={`display ${s.h2}`}>
            Three steps. <span className="serif-italic">Zero inbox stress.</span>
          </h2>
        </div>

        <div className={s.grid}>
          {STEPS.map((step) => (
            <div className={s.card} key={step.n}>
              <div className={s.cardTop}>
                <span className={s.num}>{step.n}</span>
                <span className={s.icon}>{step.icon}</span>
              </div>
              <h3 className={s.cardTitle}>{step.title}</h3>
              <p className={s.cardDesc}>{step.desc}</p>
            </div>
          ))}
        </div>

        <div className={s.timelineWrap}>
          <div className={s.timelineLabel}>An email&apos;s journey through Korana.ai</div>
          <MailTimeline />
        </div>
      </div>
    </section>
  );
}
