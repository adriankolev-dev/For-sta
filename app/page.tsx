import { AdminMockup } from "@/components/admin-mockup";
import { CartCheckout } from "@/components/cart-checkout";
import { ConfigurationLogic } from "@/components/configuration-logic";
import { ConfiguratorMockup } from "@/components/configurator-mockup";
import { EndToEndFlow } from "@/components/end-to-end-flow";
import { Excluded } from "@/components/excluded";
import { FinalCta } from "@/components/final-cta";
import { Footer } from "@/components/footer";
import { FutureExtensions } from "@/components/future-extensions";
import { Hero } from "@/components/hero";
import { Included } from "@/components/included";
import { Investment } from "@/components/investment";
import { Navbar } from "@/components/navbar";
import { Opportunity } from "@/components/opportunity";
import { PricingEngine } from "@/components/pricing-engine";
import { Principles } from "@/components/principles";
import { ProductionFlow } from "@/components/production-flow";
import { Scope } from "@/components/scope";
import { Solution } from "@/components/solution";
import { Timeline } from "@/components/timeline";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Opportunity />
        <Solution />
        <ConfiguratorMockup />
        <ConfigurationLogic />
        <PricingEngine />
        <CartCheckout />
        <ProductionFlow />
        <AdminMockup />
        <EndToEndFlow />
        <Scope />
        <FutureExtensions />
        <Timeline />
        <Investment />
        <Included />
        <Excluded />
        <Principles />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
