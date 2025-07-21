import { mockApi } from "@/lib/mockApi";
import Header from "@/components/layout/Header";
import HeroSection from "@/components/sections/HeroSection";
import ProblemsSection from "@/components/sections/ProblemsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import FormulaSection from "@/components/sections/FormulaSection";
import DifferenceSection, {
  OutscaleDifferenceSection,
} from "@/components/sections/DifferenceSection";
import SimpleHeroSection from "@/components/sections/SimpleHeroSection";
import { CTABanner } from "@/components/sections/CTABanner";
import ProofResults from "@/components/sections/ProofandResult";
import { ReadyToSee } from "@/components/sections/ReadyToSee";
import TestimonialSection from "@/components/sections/Testimonial";
import DriveImpact from "@/components/sections/DriveImpact";
import { CorporateCTABanner } from "@/components/sections/CorporateCTABanner";
import { WhyWeDiffSection } from "@/components/sections/WhyWeDiffSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import Footer from "@/components/sections/Footer";
import BusinessAssesmentHeader from "@/components/business-assessment/section/BusinesssAssessmentHeader";
import ProblemSection from "@/components/business-assessment/section/ProblemSection";
import FeatureSection from "@/components/business-assessment/section/FeatureSection";
import ProcessSection from "@/components/business-assessment/section/ProcessSection";
import FinalBusinessCTASectiom from "@/components/business-assessment/section/FinalCTASection";
import AssignmentPage from "@/components/assessmentPage/AssignmentPage";

// Generate static paths for all available pages
export async function generateStaticParams() {
  const { pages } = await mockApi.getPages();
  return pages.map((page) => ({
    slug: page.slug,
  }));
}

// Generate metadata for each page
export async function generateMetadata({ params }) {
  const content = await mockApi.getPageContent(params.slug);

  return {
    title: content?.hero?.title || "Outscale Partners",
    description:
      content?.hero?.description ||
      "Transform your business with intelligent automation and strategic outsourcing solutions.",
  };
}

export default async function DynamicPage({ params }) {
  const navigation = await mockApi.getNavigation();
  const content = await mockApi.getPageContent(params.slug);

  if (!content) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
          <p className="text-gray-300">
            The page you're looking for doesn't exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <Header navigation={navigation} />

      {/* Home page has full hero, others have simple hero */}
      {params.slug === "home" ? (
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
      ) : params.slug === "business-assessment" ? (
        <>
          <BusinessAssesmentHeader />

          <ProblemSection />

          <FeatureSection />

          <ProcessSection />

          <FinalBusinessCTASectiom />
        </>
      ) : params.slug === "assessment" ? (
        <AssignmentPage />
      ) : (
        <SimpleHeroSection hero={content.hero} />
      )}
      <Footer />
    </div>
  );
}
