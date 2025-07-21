import {
  ChevronDown,
  ArrowRight,
  CheckCircle2,
  Users,
  Target,
  TrendingUp,
  Star,
  Shield,
  Zap,
  BarChart3,
  Clock,
  Award,
  Lightbulb,
} from "lucide-react";
import { Button } from "@/components/ui/button";

import CTAButton from "../CTAButton";

export default function BusinessAssesmentHeader() {
  const navigateToAssignment = () => {
    // setCurrentPage("assignment");
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative flex items-center justify-center min-h-[80vh] bg-gradient-to-br from-black via-green-900/20 to-black overflow-hidden">
        {/* Technology Background Elements */}
        <div className="absolute inset-0 opacity-60">
          {/* Floating Geometric Shapes */}
          <div className="absolute top-16 left-16 w-28 h-28 bg-green-500/25 rounded-full blur-xl"></div>
          <div className="absolute top-32 right-20 w-36 h-36 bg-green-400/20 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-green-400 bg-opacity-[35%] rounded-full blur-md"></div>
          <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-green-500/30 rounded-full blur-lg"></div>
          <div className="absolute bottom-1/3 right-16 w-32 h-32 bg-green-400/25 rounded-full blur-xl"></div>
          <div className="absolute top-2/3 left-12 w-16 h-16 bg-green-500/40 rounded-full blur-sm"></div>

          {/* Circuit-like Lines */}
          <div className="absolute top-24 left-1/3 w-px h-32 bg-gradient-to-b from-green-500/80 to-transparent"></div>
          <div className="absolute top-24 left-1/3 w-32 h-px bg-gradient-to-r from-green-500/80 to-transparent"></div>
          <div className="absolute bottom-32 right-1/4 w-px h-28 bg-gradient-to-b from-green-400/60 to-transparent"></div>
          <div className="absolute bottom-32 right-1/4 w-28 h-px bg-gradient-to-l from-green-400/60 to-transparent"></div>
          <div className="absolute top-1/2 left-1/2 w-40 h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent"></div>
          <div className="absolute top-1/3 right-1/3 w-px h-24 bg-gradient-to-b from-green-500/70 to-transparent"></div>
          <div className="absolute bottom-1/4 left-1/5 w-24 h-px bg-gradient-to-r from-green-400/70 to-transparent"></div>

          {/* Tech Icons */}
          <div className="absolute top-20 right-24 text-green-500/40">
            <TrendingUp className="w-8 h-8" />
          </div>
          <div className="absolute bottom-28 left-24 text-green-400/30">
            <Shield className="w-6 h-6" />
          </div>
          <div className="absolute top-1/2 right-20 text-green-400/40">
            <Target className="w-10 h-10" />
          </div>
          <div className="absolute top-1/4 left-[16rem] text-green-500/40">
            <Zap className="w-7 h-7" />
          </div>
          <div className="absolute bottom-1/3 right-1/3 text-green-400/30">
            <BarChart3 className="w-9 h-9" />
          </div>
          <div className="absolute top-2/3 left-1/4 text-green-500/40">
            <Users className="w-6 h-6" />
          </div>

          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.12)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

          {/* Additional Background Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-green-900/20 via-green-900/5 to-black/40"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 py-16">
          <div className="text-center max-w-4xl mx-auto">
            {/* Operations Excellence Platform Badge */}
            <div className="inline-flex items-center space-x-2 bg-green-500/10 border border-green-500/30 rounded-full px-4 py-2 mb-12">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-green-400 text-sm">
                Operations Excellence Platform
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl lg:text-6xl xl:text-7xl leading-tight mb-8">
              Are You Ready to Grow
              <br />
              <span className="text-green-400">Without Growing Pains?</span>
            </h1>

            {/* Description */}
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-12">
              At Outscale, we partner with growth-focused companies to handle
              the critical operations that slow them down, so they can do more
              of what they love with confidence.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <CTAButton
                href={"/assessment"}
                className="bg-green-500 hover:bg-green-600 text-black px-8 py-3 rounded-full transition-all duration-200 hover:scale-105 group flex items-center px-[20px] py-[10px]"
              >
                Take Free Assessment
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </CTAButton>

              <Button
                variant="outline"
                className="border-white text-[rgba(0,0,0,1)] bg-white hover:bg-white/80 hover:text-black px-8 py-3 rounded-full transition-all duration-200 px-[38px] py-[10px]"
              >
                Learn More
              </Button>
            </div>

            {/* Hero Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-4xl lg:text-5xl text-green-400 mb-2">
                  500+
                </div>
                <div className="text-gray-400">Companies Scaled</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl text-green-400 mb-2">
                  40%
                </div>
                <div className="text-gray-400">Average Cost Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl text-green-400 mb-2">
                  3x
                </div>
                <div className="text-gray-400">Faster Growth</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
