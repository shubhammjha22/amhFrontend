import { cn } from "@/lib/utils"; // Optional utility if using shadcn/ui

const stats = [
  {
    label:
      "Titan clients have historically compounded their wealth at an average of 10.72%/year...",
    value: "10.72%",
    subtitle: "With Titan",
    graphType: "line",
  },
  //   {
  //     label: "Better value than a typical private wealth manager.",
  //     value: "50%",
  //     subtitle: "cheaper",
  //     graphType: "bar",
  //   },
  //   {
  //     label: "Save up to 5–10 hours weekly managing your portfolio.",
  //     value: "100%",
  //     subtitle: "time saved",
  //     graphType: "arc",
  //   },
];

export default function TitanStats() {
  return (
    <section className="bg-black text-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-serif font-semibold">
          Why Work With a Real Advisor?
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6 max-w-6xl mx-auto">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="relative bg-gradient-to-b from-yellow-800/30 to-yellow-900/70 border border-yellow-900 rounded-2xl p-6 flex flex-col justify-between shadow-inner"
          >
            {/* Tooltip button */}
            <button className="absolute top-4 right-4 w-6 h-6 rounded-full bg-yellow-500/10 text-yellow-300 text-xs font-semibold flex items-center justify-center">
              +
            </button>

            {/* Graph area */}
            <div className="h-32 flex items-end justify-center relative mb-4">
              <svg
                width="411"
                height="379"
                viewBox="0 0 411 379"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M189.5 0.5H221.5C325.882 0.5 410.5 85.1182 410.5 189.5V378.5H0.5V189.5C0.5 85.1182 85.1182 0.500002 189.5 0.5Z"
                  fill="#0B1D0F"
                  stroke="url(#paint0_linear_2021_67)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_2021_67"
                    x1="286.199"
                    y1="7.03386e-07"
                    x2="205.066"
                    y2="359.708"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#06DF73" />
                    <stop offset="1" stop-color="#00A651" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Value */}
            <div className="text-4xl md:text-5xl font-bold text-yellow-300">
              {stat.value}
            </div>

            {/* Subtitle */}
            <div className="mt-2 text-yellow-100 text-sm">{stat.subtitle}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
