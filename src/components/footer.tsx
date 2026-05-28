import { Logo } from "./icons";
import { CtaForm } from "./cta-form";
import s from "./footer.module.css";

export function Footer({ hideCta }: { hideCta?: boolean } = {}) {
  return (
    <>
      {/* Final CTA */}
      {!hideCta && (
      <section className={s.cta} id="cta">
        <div className={`container ${s.ctaInner}`}>
          <div className={s.ctaEyebrow}>
            <span className="pulse-dot" />
            <span>One AI operator. The work of five people.</span>
          </div>
          <h2 className={`display ${s.ctaH2}`}>
            Spend your time<br />
            <span className="serif-italic">building.</span>
          </h2>
          <p className={s.ctaSub}>
            Let Korana run the rest. The work that used to eat your evenings finishes itself in the background.
          </p>
          <div className={s.ctaForm}>
            <CtaForm />
          </div>
        </div>
      </section>
      )}

      {/* Footer */}
      <footer className={s.ft}>
        <div className={`container ${s.ftInner}`}>
          <div className={s.ftTop}>
            <div className={s.ftBrand}>
              <div className={s.ftMark}>
                <Logo size={40} />
              </div>
              <div>
                <div className={s.ftWordmark}>korana</div>
                <div className={s.ftTag}>The AI Chief of Staff</div>
              </div>
            </div>
            <div className={s.ftCols}>
              <div>
                <div className={s.ftColH}>Product</div>
                <a href="#what">What it does</a>
                <a href="#channels">Channels</a>
                <a href="/mail">AI Mail</a>
                <a href="#pricing">Pricing</a>
                <a href="#">Changelog</a>
              </div>
              <div>
                <div className={s.ftColH}>For teams</div>
                <a href="#pricing">Enterprise</a>
                <a href="#">Security</a>
                <a href="#">DPDP & GDPR</a>
              </div>
              <div>
                <div className={s.ftColH}>Company</div>
                <a href="#">About</a>
                <a href="#">Blog</a>
                <a href="#">Careers</a>
                <a href="mailto:hi@korana.ai">hi@korana.ai</a>
              </div>
            </div>
          </div>

          <div className={s.ftBottom}>
            <div className={s.ftLegal}>
              &copy; 2026 Korana, Inc. · All work, less work.
            </div>
            <div className={s.ftSocials}>
              <a href="#" aria-label="Twitter">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 3h3l-7 8.1 8.3 11H16l-5-6.4-5.7 6.4H3l7.5-8.5L2 3h6.5l4.5 6L18 3z" /></svg>
              </a>
              <a href="#" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M4 4a2 2 0 110 4 2 2 0 010-4zm0 6h0V20h0V10zm3 0h3v1.5c.5-.9 1.7-1.7 3.5-1.7 3 0 4.5 2 4.5 5V20h-3v-4.4c0-1.4-.5-2.6-2-2.6S11 14.2 11 15.6V20H7V10z" /></svg>
              </a>
              <a href="#" aria-label="GitHub">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 00-3.2 19.5c.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.3-3.4-1.3-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.6 2.4 1.1 3 .8.1-.7.4-1.1.6-1.4-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1a9.6 9.6 0 015 0c2-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.9-2.4 4.7-4.6 5 .4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5A10 10 0 0012 2z" fillRule="evenodd" /></svg>
              </a>
            </div>
          </div>
        </div>

        <div className={s.ftMega} aria-hidden>korana</div>
        <div className={s.ftStamp}>
          The work of five people, handled for you.{" "}
          <span className={`serif-italic ${s.serifItalic}`}>Available on mobile, web, and WhatsApp.</span>
        </div>
      </footer>
    </>
  );
}
