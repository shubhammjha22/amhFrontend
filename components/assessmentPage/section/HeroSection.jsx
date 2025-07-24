import { BarChart, Settings, Target } from "lucide-react";

export default function HeroSection() {
  return (
    <>
      <section className="relative flex items-center justify-center min-h-[60vh] bg-gradient-to-br from-black via-green-900/30 to-black overflow-hidden">
        {/* Technology Background Elements */}
        <div className="absolute inset-0 opacity-40">
          {/* Floating Geometric Shapes */}
          <div className="absolute top-20 left-20 w-32 h-32 bg-green-500/20 rounded-full blur-xl"></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-green-400/15 rounded-full blur-lg"></div>
          <div className="absolute bottom-32 left-32 w-20 h-20 bg-green-400/30 rounded-full blur-md"></div>
          <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-green-500/10 rounded-full blur-2xl"></div>

          {/* Circuit-like Lines */}
          <div className="absolute top-32 left-1/4 w-px h-24 bg-gradient-to-b from-green-500/70 to-transparent"></div>
          <div className="absolute top-32 left-1/4 w-24 h-px bg-gradient-to-r from-green-500/70 to-transparent"></div>
          <div className="absolute bottom-40 right-1/3 w-px h-20 bg-gradient-to-b from-green-400/50 to-transparent"></div>
          <div className="absolute bottom-40 right-1/3 w-20 h-px bg-gradient-to-l from-green-400/50 to-transparent"></div>
          <div className="absolute top-1/2 left-1/2 w-32 h-px bg-gradient-to-r from-transparent via-green-500/40 to-transparent"></div>

          {/* Tech Icons */}
          <div className="absolute top-24 right-20 text-green-500/30">
            <BarChart className="w-8 h-8" />
          </div>
          <div className="absolute bottom-24 left-20 text-green-400/25">
            <Settings className="w-6 h-6" />
          </div>
          <div className="absolute top-1/2 right-16 text-green-400/30">
            <Target className="w-10 h-10" />
          </div>

          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.08)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

          {/* Additional Background Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-green-900/40 via-green-900/20 to-black/80"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 py-12">
          <div className="text-center max-w-4xl mx-auto">
            {/* Main Heading */}
            <h1 className="text-4xl lg:text-5xl xl:text-6xl leading-tight mb-6">
              Discover Your Operations
              <br />
              <span className="text-green-400">Readiness Score</span>
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto mb-8">
              Take our comprehensive 8-question assessment to identify your
              operational strengths, gaps, and receive personalized
              recommendations for scaling your business.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
