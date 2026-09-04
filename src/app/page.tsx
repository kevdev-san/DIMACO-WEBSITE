import { Benefits } from "@/components/benefits";
import { CategoryPreview } from "@/components/category-preview";
import { CompanyOverview } from "@/components/company-overview";
import { ContactSection } from "@/components/contact-section";
import { CoverageSection } from "@/components/coverage-section";
import { Hero } from "@/components/hero";
import { MissionVision } from "@/components/mission-vision";
import { QuoteCta } from "@/components/quote-cta";

export default function Home() {
  return (
    <main id="contenido">
      <Hero />
      <CompanyOverview />
      <Benefits />
      <CategoryPreview />
      <MissionVision />
      <CoverageSection />
      <QuoteCta />
      <ContactSection />
    </main>
  );
}
