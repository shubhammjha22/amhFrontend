import DriveCards from "../DriveImpactCard";
import FlipCards from "../FlipCard";

export default function DriveImpact({ problems }) {
  return (
    <section className="bg-[#0D0F10] text-white py-24 font-instrument">
      <div className="max-w-7xl mx-auto  sm:px-8 lg:px-12 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-2">
            Where We{" "}
            <span className="bg-primaryBg bg-clip-text text-transparent">
              Drive Impact ?
            </span>
          </h2>
          <p className="text-base text-gray-300 max-w-xl mx-auto leading-relaxed mb-4">
            Some companies follow trends. We build the infrastructure for what’s
            next.
          </p>
          <p className="text-base text-gray-300 max-w-xl mx-auto leading-relaxed ">
            Outscale Partners is the global growth engine for businesses ready
            to scale beyond limits and lead without compromise.
          </p>
        </div>
      </div>
      <DriveCards painPoints={problems.items} />
    </section>
  );
}
