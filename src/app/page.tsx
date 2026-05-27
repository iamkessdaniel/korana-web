import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { ThisWeek } from "@/components/this-week";
import { Capabilities } from "@/components/capabilities";
import { Approvals } from "@/components/approvals";
import { Channels } from "@/components/channels";
import { SocialProof } from "@/components/social-proof";
import { ProductsBanner } from "@/components/products-banner";
import { Pricing } from "@/components/pricing";
import { FAQ } from "@/components/faq";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <ThisWeek />
      <Capabilities />
      <Approvals />
      <Channels />
      <SocialProof />
      <ProductsBanner />
      <Pricing />
      <FAQ />
      <Footer />
    </>
  );
}
