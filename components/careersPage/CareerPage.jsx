import React from "react";
import CommonSecondOutScaleHeader from "../business-assessment/section/CommonSecondOutScaleHeader";
import { heroSection } from "@/lib/mockApi";
import WhyWorkWithUs from "./section/WhyWorkWithUs";
import BenefitsNPerks from "./section/Benefits&Perks";
import OurValues from "./section/OurValues";
import JobListingSection from "./section/JobListingSection";
import OurCulture from "./section/OurCulture";
import ReadyToJoin from "./section/ReadyToJoin";

export default function CareerPage({ type = "careers" }) {
  const section = heroSection.filter((t) => t.id == type);
  const data = section[0];
  return (
    <>
      <CommonSecondOutScaleHeader data={data} />
      <WhyWorkWithUs />
      <BenefitsNPerks />
      <OurValues />
      <JobListingSection />
      <OurCulture />
      <ReadyToJoin />
    </>
  );
}
