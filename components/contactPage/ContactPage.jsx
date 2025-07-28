import React from "react";
import CommonSecondOutScaleHeader from "../business-assessment/section/CommonSecondOutScaleHeader";
import { heroSection } from "@/lib/mockApi";
import LetsGetYouToRightTeam from "./section/LetsGetYouToRightTeam";
import FastTrackBookSection from "./section/FastTrackBookSection";
import ContactInfoSection from "./section/ContactInfoSection";
import ReadyToConnect from "./section/ReadyToConnect";
import ContactStatsSection from "./section/ContactStatsSection";

export default function ContactPage({ type = "contact-us" }) {
  const section = heroSection.filter((t) => t.id == type);
  const data = section[0];
  return (
    <>
      <CommonSecondOutScaleHeader data={data} />
      <LetsGetYouToRightTeam />
      <FastTrackBookSection />
      <ContactInfoSection />
      <ReadyToConnect />
      <ContactStatsSection />
    </>
  );
}
