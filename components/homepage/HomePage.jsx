import { CorporateCTABanner } from "./section/CorporateCTABanner";
import { CTABanner } from "./section/CTABanner";
import { OutscaleDifferenceSection } from "./section/DifferenceSection";
import DriveImpact from "./section/DriveImpact";
import { FinalCTASection } from "./section/FinalCTASection";
import FormulaSection from "./section/FormulaSection";
import HeroSection from "./section/HeroSection";
import ProblemsSection from "./section/ProblemsSection";
import ProofResults from "./section/ProofandResult";
import { ReadyToSee } from "./section/ReadyToSee";
import ServicesSection from "./section/ServicesSection";
import TestimonialSection from "./section/Testimonial";
import { WhyWeDiffSection } from "./section/WhyWeDiffSection";

export default function HomePage({ content }) {
  return (
    <>
      <HeroSection hero={content.hero} />
      <ProblemsSection problems={content.problems} />
      <ServicesSection services={content.services} />
      <FormulaSection formula={content.formula} />
      <OutscaleDifferenceSection difference={content.difference} />
      <CTABanner />
      <ProofResults />
      <ReadyToSee />
      <TestimonialSection />
      <DriveImpact problems={content.problems} />
      <CorporateCTABanner />
      <WhyWeDiffSection />
      <FinalCTASection />
    </>
  );
}
