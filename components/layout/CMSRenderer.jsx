import HeroSection from "@/components/homepage/section/HeroSection";
import ProblemsSection from "@/components/homepage/section/ProblemsSection";
import ServicesSection from "@/components/homepage/section/ServicesSection";
import FormulaSection from "@/components/homepage/section/FormulaSection";
import DifferenceSection, {
  OutscaleDifferenceSection,
} from "@/components/homepage/section/DifferenceSection";
import SimpleHeroSection from "@/components/homepage/section/SimpleHeroSection";
import { CTABanner } from "@/components/homepage/section/CTABanner";
import ProofResults from "@/components/homepage/section/ProofandResult";
import { ReadyToSee } from "@/components/homepage/section/ReadyToSee";
import TestimonialSection from "@/components/homepage/section/Testimonial";
import DriveImpact from "@/components/homepage/section/DriveImpact";
import { CorporateCTABanner } from "@/components/homepage/section/CorporateCTABanner";
import { WhyWeDiffSection } from "@/components/homepage/section/WhyWeDiffSection";
import { FinalCTASection } from "@/components/homepage/section/FinalCTASection";

import BusinessAssesmentHeader from "@/components/business-assessment/section/BusinesssAssessmentHeader";
import ProblemSection from "@/components/business-assessment/section/ProblemSection";
import FeatureSection from "@/components/business-assessment/section/FeatureSection";
import ProcessSection from "@/components/business-assessment/section/ProcessSection";
import FinalBusinessCTASectiom from "@/components/business-assessment/section/FinalCTASection";
import AssignmentPage from "@/components/assessmentPage/section/AssignmentPage";
import { HumanResourceHeader } from "@/components/servicePage/HR/HumanResourceHeader";
import StatsSection from "@/components/servicePage/HR/StatsSection";
import OurHRService from "@/components/servicePage/HR/OurHRService";
import IndustryWeTransform from "@/components/servicePage/HR/IndustryWeTransform";
import TrendingSection from "@/components/servicePage/HR/TrendingSection";
import MeetOurLeaderSection from "@/components/servicePage/HR/MeetOurLeaderSection";
import AwardsSection from "@/components/servicePage/HR/AwardsSection";
import CTASection from "@/components/servicePage/HR/CTASection";
import { AboutOutScaleHeader } from "@/components/aboutPage/section/AboutOutScaleHeader";

// import all your components...

export default function CMSRenderer({ slug, content }) {
  switch (slug) {
    case "home":
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

    case "business-assessment":
      return (
        <>
          <BusinessAssesmentHeader />
          <ProblemSection />
          <FeatureSection />
          <ProcessSection />
          <FinalBusinessCTASectiom />
        </>
      );

    case "assessment":
      return <AssignmentPage />;

    // case "about":
    //   return <AboutOutScaleHeader />;

    case "services/hr":
      return (
        <>
          <HumanResourceHeader />
          <StatsSection />
          <OurHRService />
          <IndustryWeTransform />
          <TrendingSection />
          <MeetOurLeaderSection />
          <AwardsSection />
          <CTASection />
        </>
      );

    default:
      return <SimpleHeroSection hero={content.hero} />;
  }
}
