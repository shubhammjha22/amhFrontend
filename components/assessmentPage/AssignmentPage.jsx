import { ClientAssignment } from "./section/ClientAssignment";
import HeroSection from "./section/HeroSection";

export default function AssignmentPage() {
  return (
    <>
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <HeroSection />
        <ClientAssignment />
      </div>
    </>
  );
}
