import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function WhyWeExist() {
  return (
    <>
      {/* Why We Exist Section */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl lg:text-5xl text-white">Why We Exist</h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Behind every growth goal lies a tangle of processes, platforms,
                and people challenges. Most businesses tackle these reactively.
                We fix them proactively — before they become bottlenecks.
              </p>

              <div className="space-y-6">
                <h3 className="text-2xl text-white">
                  We were built to serve companies that:
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-300 text-lg">
                      Value elite execution and reliable outcomes.
                    </span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-300 text-lg">
                      Want a real partner, not a traditional vendor.
                    </span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-300 text-lg">
                      Are ready to scale smarter, faster, and with less noise.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 bg-gradient-to-br from-gray-900 to-black p-1 rounded-3xl border border-gray-700">
                <Image
                  height={400}
                  width={400}
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Strategic business planning session"
                  className="w-full h-[400px] object-cover rounded-3xl"
                />
              </div>
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-500/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -right-6 w-28 h-28 bg-purple-400/15 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
