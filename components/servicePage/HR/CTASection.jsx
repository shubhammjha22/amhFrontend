import { Button } from "@/components/ui/button";
import { ROUTES } from "@/lib/utils";
import { ArrowRight, Phone } from "lucide-react";
import Link from "next/link";

export default function CTASection() {
  return (
    <>
      {/* CTA Section - Full Width */}
      <section className="py-32 bg-gradient-to-r from-green-900/20 to-green-800/20 border-y border-green-500/20">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl lg:text-6xl text-white mb-8">
              Ready to <span className="text-green-400">Transform</span> Your
              Workforce?
            </h2>
            <p className="text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Let's optimize your HR operations and unlock your team's full
              potential.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href={ROUTES.BUSINESS_ASSESSMENT}>
                <Button
                  className="bg-green-500 hover:bg-green-600 text-black px-12 py-4 rounded-full text-lg transition-all duration-200 hover:scale-105 group"
                  // onClick={onBack}
                >
                  Start Your Assessment
                  <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black px-12 py-4 rounded-full text-lg transition-all duration-200"
                // onClick={onBack}
              >
                <Phone className="w-5 h-5 mr-3" />
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
