import { Award, CheckCircle2, Clock, Lightbulb } from "lucide-react";

const FeatureSection = () => {
  return (
    <>
      {/* Features Section */}
      <section className="py-20 bg-gray-900/30" id="assessment">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl text-white mb-6">
              The Outscale Readiness Assessment
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Industry-first, proprietary assessment that identifies your
              operational readiness for scale
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Why Take Assessment */}
            <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-gray-800 hover:border-green-500/50 transition-all duration-300 group">
              <div className="w-14 h-14 bg-green-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-500/30 transition-colors">
                <Lightbulb className="w-7 h-7 text-green-400" />
              </div>
              <h3 className="text-xl text-white mb-4">
                Why Take the Assessment?
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>
                    Spot hidden inefficiencies in your HR, Finance, and core
                    business processes
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>
                    Get actionable guidance on strengths and exposures
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>
                    Receive a custom roadmap with prioritized next steps
                  </span>
                </li>
              </ul>
            </div>

            {/* What to Expect */}
            <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-gray-800 hover:border-green-500/50 transition-all duration-300 group">
              <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500/30 transition-colors">
                <Clock className="w-7 h-7 text-blue-400" />
              </div>
              <h3 className="text-xl text-white mb-4">What to Expect</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 mt-1 mr-3 flex-shrink-0" />
                  <span>Takes less than 5 minutes – no prep needed</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 mt-1 mr-3 flex-shrink-0" />
                  <span>Get your Operations Health Score instantly</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 mt-1 mr-3 flex-shrink-0" />
                  <span>Potential invitation for free consultation</span>
                </li>
              </ul>
            </div>

            {/* Why We're Selective */}
            <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-gray-800 hover:border-green-500/50 transition-all duration-300 group">
              <div className="w-14 h-14 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-500/30 transition-colors">
                <Award className="w-7 h-7 text-purple-400" />
              </div>
              <h3 className="text-xl text-white mb-4">Why We're Selective</h3>
              <p className="text-gray-300 leading-relaxed">
                At Outscale, operational excellence starts with people and is
                amplified by smart technology. We build agile, high-performing
                teams supported by modern digital systems and smart automation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureSection;
