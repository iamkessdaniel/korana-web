"use client";

import { useState, useEffect } from "react";
import { Search } from "./icons";
import s from "./mail-search.module.css";

const QUERY = "that hotel receipt from the new york trip in september";

const RESULTS = [
  {
    from: "The Standard, NYC",
    subject: "Booking Confirmation #STD-28471",
    snippet: '"...your reservation for Sept 14\u201319, 1 room, king suite. Total: $2,340..."',
    action: "Open thread",
  },
  {
    from: "Stripe",
    subject: "Payment Receipt \u2014 $2,340.00",
    snippet: '"...payment to The Standard High Line, ref ch_3N8x...4242..."',
    action: "Open thread",
  },
  {
    from: "Delta Air Lines",
    subject: "Your trip to New York \u2014 Sept 14",
    snippet: '"...Flight DL 412, JFK Terminal 4, departing 8:15 AM..."',
    action: "Open thread",
  },
];

export function MailSearch() {
  const [typed, setTyped] = useState("");
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < QUERY.length) {
        setTyped(QUERY.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
        setTimeout(() => setShowResults(true), 400);
      }
    }, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={`${s.search} section`}>
      <div className="container">
        <div className={s.head}>
          <div className="eyebrow">Search</div>
          <h2 className={`display ${s.h2}`}>
            Find the thread <span className="serif-italic">you&nbsp;barely&nbsp;remember.</span>
          </h2>
          <p className={s.sub}>
            Describe what you&rsquo;re looking for in plain language. Korana.ai searches subjects, bodies, attachments, and extracted data &mdash; and returns results ranked by relevance, not date.
          </p>
        </div>

        <div className={s.stage}>
          <div className={s.searchBar}>
            <Search size={18} />
            <span className={s.searchText}>{typed}<span className={s.cursor} /></span>
          </div>

          {showResults && (
            <div className={s.results}>
              {RESULTS.map((r, i) => (
                <div
                  className={s.result}
                  key={i}
                  style={{ animationDelay: `${i * 250}ms` }}
                >
                  <div className={s.resultTop}>
                    <span className={s.resultFrom}>{r.from}</span>
                    <span className={s.resultAction}>{r.action} &rarr;</span>
                  </div>
                  <div className={s.resultSubject}>{r.subject}</div>
                  <div className={s.resultSnippet}>{r.snippet}</div>
                </div>
              ))}
              <div
                className={s.resultMeta}
                style={{ animationDelay: `${RESULTS.length * 250}ms` }}
              >
                Searched 24,841 messages and 1,247 attachments in 0.2 seconds.
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
