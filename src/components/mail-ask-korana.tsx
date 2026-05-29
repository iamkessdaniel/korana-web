"use client";

import { useState, useEffect } from "react";
import { Sparkle } from "./icons";
import s from "./mail-ask-korana.module.css";

const QUESTION = "What did we agree with Acme on payment terms?";

export function MailAskKorana() {
  const [typed, setTyped] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < QUESTION.length) {
        setTyped(QUESTION.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
        setTimeout(() => setShowAnswer(true), 600);
      }
    }, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={`${s.ask} section`}>
      <div className="container">
        <div className={s.head}>
          <div className="eyebrow">Ask Korana.ai</div>
          <h2 className={`display ${s.h2}`}>
            Type one sentence. <span className="serif-italic">Get&nbsp;the&nbsp;answer&nbsp;back.</span>
          </h2>
          <p className={s.sub}>
            Ask anything about your email history. Korana.ai reads the relevant threads, extracts the facts, and gives you a sourced brief &mdash; not a list of messages.
          </p>
        </div>

        <div className={s.stage}>
          <div className={s.inputBar}>
            <Sparkle size={18} />
            <span className={s.inputText}>{typed}<span className={s.cursor} /></span>
            <button className={s.askBtn}>Ask</button>
          </div>

          {showAnswer && (
            <div className={s.answer}>
              <div className={s.answerLabel}>Answer</div>
              <div className={s.answerHeadline}>
                Net 60 on contracts above $50k/year &mdash; agreed March 12.
              </div>
              <div className={s.answerBody}>
                <p>
                  In the March 12 thread between you and Sarah Chen (Acme Corp), you agreed to extend net 60 payment terms on contracts exceeding $50,000/year. The updated MSA was attached to your reply on March 14 and countersigned by Sarah on March 18.
                </p>
                <p>
                  The previous terms were net 30, standard. The change applies to the Q2 renewal only, per Sarah&rsquo;s request.
                </p>
              </div>
              <div className={s.answerFootnotes}>
                <div className={s.footnote}>
                  <span className={s.fnNum}>1</span>
                  <span>Re: net 60 ask &mdash; Sarah Chen, Mar 12</span>
                </div>
                <div className={s.footnote}>
                  <span className={s.fnNum}>2</span>
                  <span>Updated MSA &mdash; you, Mar 14</span>
                </div>
                <div className={s.footnote}>
                  <span className={s.fnNum}>3</span>
                  <span>Countersigned MSA &mdash; Sarah Chen, Mar 18</span>
                </div>
              </div>
              <div className={s.answerMeta}>
                Read 47 messages and 2 attachments in 0.4 seconds.
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
