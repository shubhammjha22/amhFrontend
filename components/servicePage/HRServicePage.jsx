import React from "react";
import { HumanResourceHeader } from "./HR/HumanResourceHeader";
import StatsSection from "./HR/StatsSection";
import OurHRService from "./HR/OurHRService";
import IndustryWeTransform from "./HR/IndustryWeTransform";
import TrendingSection from "./HR/TrendingSection";
import MeetOurLeaderSection from "./HR/MeetOurLeaderSection";
import AwardsSection from "./HR/AwardsSection";
import CTASection from "./HR/CTASection";
import { CommonOutScaleHeader } from "../aboutPage/section/CommonOutScaleHeader";
import { heroSection } from "@/lib/mockApi";

export default function HRServicePage() {
  const data = heroSection[1];
  return (
    <>
      <CommonOutScaleHeader data={data} />
      <StatsSection />
      <OurHRService />
      <IndustryWeTransform />
      <TrendingSection />
      <MeetOurLeaderSection />
      <AwardsSection />
      <CTASection />
    </>
  );
}
