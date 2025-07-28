import React from "react";
import { CommonOutScaleHeader } from "./section/CommonOutScaleHeader";
import WhatWeDoSection from "./section/WhatWeDoSection";
import WhyWeExist from "./section/WhyWeExist";
import WhatMakesUsDiff from "./section/WhatMakesUsDiff";
import MissionSection from "./section/MissionSection";
import AboutCTASection from "./section/AboutCTASection";
import { heroSection } from "@/lib/mockApi";

export default function AboutUsPage() {
  const data = heroSection[0];
  return (
    <>
      <CommonOutScaleHeader data={data} />
      <WhatWeDoSection />
      <WhyWeExist />
      <WhatMakesUsDiff />
      <MissionSection />
      <AboutCTASection />
    </>
  );
}
