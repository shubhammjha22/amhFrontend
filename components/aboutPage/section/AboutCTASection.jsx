import { Button } from "@/components/ui/button";
import { ROUTES } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function AboutCTASection() {
  return (
    <>
      {/* What's Next CTA Section */}
      <section className="py-24 bg-gradient-to-r from-green-900/20 to-green-800/20 border-y border-green-500/20">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl text-white mb-6">
              What's Next
            </h2>
            <p className="text-2xl text-gray-300 mb-4">
              Good companies keep up.{" "}
              <span className="text-green-400">Great companies outscale.</span>
            </p>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Let's find out what's holding you back — and how we can fix it.
            </p>

            <div className="bg-gray-900/50 backdrop-blur-sm rounded-3xl p-12 border border-gray-800 mb-8">
              <div className="mb-8">
                <div className="inline-flex items-center space-x-2 bg-green-500/10 border border-green-500/30 rounded-full px-6 py-3 mb-6">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-green-400">
                    👉 Take the Outscale Readiness Assessment
                  </span>
                </div>
                <p className="text-gray-300 text-lg">
                  Find out if your business is truly built to scale — or quietly
                  falling behind.
                </p>
              </div>
              <Link href={ROUTES.BUSINESS_ASSESSMENT}>
                <Button
                  className="bg-green-500 hover:bg-green-600 text-black px-12 py-4 rounded-full text-lg transition-all duration-200 hover:scale-105 group"
                  // onClick={onBack}
                >
                  Take the Assessment Now
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
