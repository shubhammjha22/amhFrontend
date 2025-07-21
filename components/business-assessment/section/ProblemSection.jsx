import { Button } from "@/components/ui/button";
import CTAButton from "../CTAButton";

const ProblemSection = () => {
  return (
    <>
      {/* Problem Section */}
      <section className="py-20 bg-black" id="services">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl text-white mb-6">
              The Truth About Scaling Operations
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Most growing companies hit the same walls. Here's what we see
              every day:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div>
                  <h3 className="text-lg text-white mb-2">
                    Manual Processes Everywhere
                  </h3>
                  <p className="text-gray-300">
                    Teams drowning in spreadsheets, emails, and repetitive tasks
                    that should be automated.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div>
                  <h3 className="text-lg text-white mb-2">
                    Compliance Nightmares
                  </h3>
                  <p className="text-gray-300">
                    Reactive fixes to errors, audit failures, and regulatory
                    gaps that shouldn't exist.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div>
                  <h3 className="text-lg text-white mb-2">Data Blindness</h3>
                  <p className="text-gray-300">
                    Making critical decisions with outdated reports or gut
                    feelings instead of real-time insights.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div>
                  <h3 className="text-lg text-white mb-2">Team Burnout</h3>
                  <p className="text-gray-300">
                    Constant firefighting and scrambling that prevents strategic
                    growth initiatives.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div>
                  <h3 className="text-lg text-white mb-2">Tribal Knowledge</h3>
                  <p className="text-gray-300">
                    Critical processes live in people's heads, creating single
                    points of failure.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div>
                  <h3 className="text-lg text-white mb-2">Hidden Costs</h3>
                  <p className="text-gray-300">
                    Inefficiencies that compound daily, silently eating profits
                    and growth potential.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center bg-gradient-to-r from-gray-900 to-black p-8 rounded-2xl border border-gray-800">
            <h3 className="text-2xl text-white mb-4">Sound Familiar?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              We don't work with everyone. Our clients value precision,
              transparency, and real results. That's why we built our
              proprietary assessment to help determine if you're a good match.
            </p>
            <CTAButton
              href={"/assessment"}
              className="bg-green-500 hover:bg-green-600 text-black px-8 py-3 rounded-full transition-all duration-200 hover:scale-105"
            >
              Find Out If We're a Match
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProblemSection;
