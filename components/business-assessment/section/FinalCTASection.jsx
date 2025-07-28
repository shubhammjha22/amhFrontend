import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Clock, Target } from "lucide-react";
import CTAButton from "../components/CTAButton";

const FinalCTASection = () => {
  return (
    <>
      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-900/20 to-green-800/20 border-y border-green-500/20">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl text-white mb-6">
              Ready to Transform Your Operations?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Take the first step towards operational excellence with our
              comprehensive readiness assessment.
            </p>

            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 mb-8">
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-6 h-6 text-green-400" />
                  </div>
                  <h3 className="text-lg text-white mb-2">
                    5-Minute Assessment
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Quick, comprehensive evaluation
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-lg text-white mb-2">Instant Results</h3>
                  <p className="text-gray-400 text-sm">
                    Get your score immediately
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-lg text-white mb-2">Custom Roadmap</h3>
                  <p className="text-gray-400 text-sm">
                    Personalized action plan
                  </p>
                </div>
              </div>
              <CTAButton
                href={"/assessment"}
                className="bg-green-500 hover:bg-green-600 text-black px-12 py-4 rounded-full text-lg transition-all duration-200 hover:scale-105 group"
              >
                Take the Outscale Readiness Assessment
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </CTAButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FinalCTASection;
