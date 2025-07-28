import ProblemSection from "./section/ProblemSection";
import FeatureSection from "./section/FeatureSection";
import ProcessSection from "./section/ProcessSection";
import FinalCTASection from "./section/FinalCTASection";
import CommonSecondOutScaleHeader from "./section/CommonSecondOutScaleHeader";
import { heroSection } from "@/lib/mockApi";

export default function BusinessAssignmentPage({
  type = "business-assessment",
}) {
  const section = heroSection.filter((t) => t.id == type);
  const data = section[0];
  return (
    <>
      <CommonSecondOutScaleHeader data={data} />
      <ProblemSection />
      <FeatureSection />
      <ProcessSection />
      <FinalCTASection />
    </>
  );
}
