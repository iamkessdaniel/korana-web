import { PhoneFrame } from "./mockups/phone-frame";
import s from "./mail-drafts.module.css";

export function MailDrafts() {
  return (
    <section className={`${s.drafts} section`}>
      <div className="container">
        <div className={s.head}>
          <div className="eyebrow">AI Drafts</div>
          <h2 className={`display ${s.h2}`}>
            The reply is ready <span className="serif-italic">before</span> you open the thread.
          </h2>
          <p className={s.sub}>
            Korana reads every inbound message, writes a reply in your voice, and queues it. Routine replies send themselves. Important ones wait for your tap.
          </p>
        </div>

        <div className={s.stage}>
          <PhoneFrame>
            <div className={s.lockScreen}>
              <div className={s.lockTime}>9:41</div>
              <div className={s.lockDate}>Wednesday, May 28</div>

              <div className={s.notification}>
                <div className={s.notifHead}>
                  <div className={s.notifIcon}>
                    <div className={s.notifDot} />
                  </div>
                  <div className={s.notifApp}>Korana Mail</div>
                  <div className={s.notifTime}>now</div>
                </div>
                <div className={s.notifTitle}>AI Draft ready &mdash; Sarah Chen</div>
                <div className={s.notifBody}>
                  Re: Q3 proposal &mdash; &ldquo;Hi Sarah &mdash; absolutely. I&rsquo;ve attached the Q2 vs Q3 pricing comparison...&rdquo;
                </div>
                <div className={s.notifMeta}>94% tone match &middot; 12 threads referenced</div>
                <div className={s.notifActions}>
                  <button className={s.notifBtn}>Send</button>
                  <button className={s.notifBtnGhost}>Edit</button>
                  <button className={s.notifBtnGhost}>Skip</button>
                </div>
              </div>

              <div className={s.lockMeta}>
                23 other replies handled while you slept.
              </div>
            </div>
          </PhoneFrame>
        </div>
      </div>
    </section>
  );
}
