import s from "./mail-setup.module.css";

export function MailSetup() {
  return (
    <section className={`${s.setup} section`}>
      <div className="container">
        <div className={s.head}>
          <div className="eyebrow">Setup in two minutes</div>
          <h2 className={`display ${s.h2}`}>
            Bring your domain. Or use ours. <span className="serif-italic">Or both.</span>
          </h2>
          <p className={s.sub}>
            Three paths to get started. No migration headaches, no DNS degree required.
          </p>
        </div>

        <div className={s.grid}>
          {/* Card 1 — Custom domain */}
          <div className={s.card}>
            <div className={s.cardTitle}>Bring your own domain</div>
            <p className={s.cardDesc}>
              Point your domain to Korana. We handle SPF, DKIM, and DMARC automatically.
            </p>
            <div className={s.domainPreview}>
              <div className={s.domainAddr}>you@yourcompany.com</div>
              <div className={s.domainArrow}>&darr;</div>
              <div className={s.domainDest}>
                <span className={s.domainDot} />
                Korana Mail
              </div>
            </div>
            <div className={s.cardMeta}>Full DNS setup guided &middot; takes 2 minutes</div>
          </div>

          {/* Card 2 — Forwarding */}
          <div className={`${s.card} ${s.cardMiddle}`}>
            <div className={s.cardTitle}>Forward from Gmail or Outlook</div>
            <p className={s.cardDesc}>
              Keep your current address. Korana handles the work.
            </p>
            <div className={s.flowBlock}>
              <div className={s.flowItem}>
                <span className={s.flowIcon} style={{ background: "#ea4335" }}>G</span>
                <span className={s.flowLabel}>Gmail</span>
              </div>
              <span className={s.flowArrow}>&rarr;</span>
              <div className={s.flowItem}>
                <span className={s.flowIcon} style={{ background: "#0078d4", fontSize: 10 }}>O</span>
                <span className={s.flowLabel}>Outlook</span>
              </div>
              <span className={s.flowArrow}>&rarr;</span>
              <div className={s.flowItem}>
                <span className={s.flowDot} />
                <span className={s.flowLabel}>Korana</span>
              </div>
            </div>
            <div className={s.cardMeta}>2-minute setup &middot; no migration</div>
          </div>

          {/* Card 3 — Fresh address */}
          <div className={s.card}>
            <div className={s.cardTitle}>Or take a fresh address</div>
            <p className={s.cardDesc}>
              Get a @korana.email address instantly. No domain needed.
            </p>
            <div className={s.inputPreview}>
              <div className={s.inputBar}>
                <span className={s.inputText}>sam@korana.email</span>
                <span className={s.inputCheck}>&check; available</span>
              </div>
            </div>
            <div className={s.cardMeta}>Ready in seconds</div>
          </div>
        </div>
      </div>
    </section>
  );
}
