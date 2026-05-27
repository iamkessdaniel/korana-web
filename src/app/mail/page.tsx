import type { Metadata } from "next";
import { MailNav } from "@/components/mail-nav";
import { MailHero } from "@/components/mail-hero";
import { MailHowItWorks } from "@/components/mail-how-it-works";
import { MailFeatures } from "@/components/mail-features";
import { MailInboxDemo } from "@/components/mail-inbox-demo";
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
      <MailHowItWorks />
      <MailFeatures />
      <MailInboxDemo />
      <MailSocialProof />
      <MailPricing />
      <MailFAQ />
      <MailCta />
      <Footer />
    </>
  );
}
