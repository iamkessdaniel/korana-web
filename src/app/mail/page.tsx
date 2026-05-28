import type { Metadata } from "next";
import { MailNav } from "@/components/mail-nav";
import { MailHero } from "@/components/mail-hero";
import { MailActBand } from "@/components/mail-act-band";
import { MailInboxDemo } from "@/components/mail-inbox-demo";
import { MailChannels } from "@/components/mail-channels";
import { MailSetup } from "@/components/mail-setup";
import { MailDrafts } from "@/components/mail-drafts";
import { MailLedger } from "@/components/mail-ledger";
import { MailScamProtection } from "@/components/mail-scam-protection";
import { MailSearch } from "@/components/mail-search";
import { MailAskKorana } from "@/components/mail-ask-korana";
import { MailEverythingElse } from "@/components/mail-everything-else";
import { MailSocialProof } from "@/components/mail-social-proof";
import { MailPricing } from "@/components/mail-pricing";
import { MailFAQ } from "@/components/mail-faq";
import { MailCta } from "@/components/mail-cta";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Korana AI Mail — Email that thinks, replies, and decides",
  description:
    "AI-powered email hosting at $1/month per mailbox. Smart triage, AI drafts in your voice, custom domain, Gmail/Outlook forwarding. Stop managing email.",
  openGraph: {
    title: "Korana AI Mail — Email that thinks, replies, and decides",
    description:
      "AI-powered email hosting at $1/month. Smart triage, AI drafts, custom domain. Stop managing email.",
    url: "https://korana.ai/mail",
  },
  twitter: {
    title: "Korana AI Mail — Email that thinks, replies, and decides",
    description:
      "AI-powered email hosting at $1/month. Smart triage, AI drafts, custom domain. Stop managing email.",
  },
  alternates: {
    canonical: "https://korana.ai/mail",
  },
};

export default function MailPage() {
  return (
    <>
      <MailNav />
      <MailHero />

      {/* Act One — Email, reimagined */}
      <MailActBand
        title="Email,"
        em="reimagined."
        subtitle="A mailbox that sorts, surfaces, and syncs — before you touch it."
      />
      <MailInboxDemo />
      <MailChannels />
      <MailSetup />

      {/* Act Two — Unleash the AI */}
      <MailActBand
        title="Unleash the AI in email with"
        em="Korana Mail."
        subtitle="Draft, protect, search, track, ask — all handled."
      />
      <MailDrafts />
      <MailLedger />
      <MailScamProtection />
      <MailSearch />
      <MailAskKorana />
      <MailEverythingElse />

      <MailSocialProof />
      <MailPricing />
      <MailFAQ />
      <MailCta />
      <Footer />
    </>
  );
}
