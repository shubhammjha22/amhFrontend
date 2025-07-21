import FlipCards from "../homepage/FlipCard";

export default function ProblemsSection({ problems }) {
  return (
    <section className="bg-[#0d0f10] text-white py-24 w-full">
      <div className="max-w-7xl mx-auto px-8 lg:px-12 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold mb-8">
            What's{" "}
            <span className="bg-primaryBg bg-clip-text text-transparent">
              Slowing You Down?
            </span>
          </h2>
          <p className="text-lg text-center text-gray-300 max-w-[62rem] mx-auto leading-relaxed mb-12">
            {problems.description}
          </p>
          <p className="text-textPrimary text-base font-medium">
            {problems.subtitle}
          </p>
        </div>
      </div>
      <FlipCards painPoints={problems.items} />
    </section>
  );
}
