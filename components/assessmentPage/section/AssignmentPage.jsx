import { ClientAssignment } from "./ClientAssignment";
import HeroSection from "./HeroSection";

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
