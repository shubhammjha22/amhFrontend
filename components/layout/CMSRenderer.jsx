import SimpleHeroSection from "@/components/homepage/section/SimpleHeroSection";
import AssignmentPage from "@/components/assessmentPage/AssignmentPage";
import BusinessAssignmentPage from "@/components/business-assessment/BusinessAssignmentPage";
import HomePage from "@/components/homepage/HomePage";
import AboutUsPage from "@/components/aboutPage/AboutUsPage";
import ContactPage from "@/components/contactPage/ContactPage";
import HRServicePage from "@/components/servicePage/HRServicePage";
import CareerPage from "../careersPage/CareerPage";

// import all your components...

export default function CMSRenderer({ slug, content }) {
  switch (slug) {
    case "home":
      return (
        <>
          <HomePage content={content} />
        </>
      );

    case "business-assessment":
      return (
        <>
          <BusinessAssignmentPage />
        </>
      );

    case "assessment":
      return <AssignmentPage />;

    case "about":
      return (
        <>
          <AboutUsPage />
        </>
      );
    case "contact":
      return (
        <>
          <ContactPage />
        </>
      );
    case "careers":
      return (
        <>
          <CareerPage />
        </>
      );

    case "services/hr":
      return (
        <>
          <HRServicePage />
        </>
      );

    default:
      return <SimpleHeroSection hero={content.hero} />;
  }
}
