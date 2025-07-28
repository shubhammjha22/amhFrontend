import { Eye, Target, TrendingUp, Users } from "lucide-react";

export default function WhatMakesUsDiff() {
  return (
    <>
      {/* What Makes Us Different Section */}
      <section className="py-24 bg-gray-900/30">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl text-white mb-6">
              What Makes Us Different
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Global Talent. Local Impact. */}
            <div className="bg-gradient-to-br from-gray-900 to-black p-10 rounded-3xl border border-gray-800 hover:border-green-500/50 transition-all duration-300">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center">
                  <Users className="w-8 h-8 text-green-400" />
                </div>
                <div>
                  <h3 className="text-2xl text-white">Global Talent.</h3>
                  <h3 className="text-2xl text-green-400">Local Impact.</h3>
                </div>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                Top-tier specialists embedded in your business — trained for
                speed, precision, and accountability.
              </p>
            </div>

            {/* Technology + Transparency. */}
            <div className="bg-gradient-to-br from-gray-900 to-black p-10 rounded-3xl border border-gray-800 hover:border-blue-500/50 transition-all duration-300">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center">
                  <Eye className="w-8 h-8 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-2xl text-white">Technology +</h3>
                  <h3 className="text-2xl text-blue-400">Transparency.</h3>
                </div>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                We implement automation and real-time dashboards that eliminate
                manual busywork and enable confident, data-driven decisions.
              </p>
            </div>

            {/* Built to Flex. Ready to Scale. */}
            <div className="bg-gradient-to-br from-gray-900 to-black p-10 rounded-3xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-2xl text-white">Built to Flex.</h3>
                  <h3 className="text-2xl text-purple-400">Ready to Scale.</h3>
                </div>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                Whether you're growing 30% YoY or tripling revenue, our systems
                are designed to keep pace — and push you further.
              </p>
            </div>

            {/* We're Selective — On Purpose. */}
            <div className="bg-gradient-to-br from-gray-900 to-black p-10 rounded-3xl border border-gray-800 hover:border-orange-500/50 transition-all duration-300">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-orange-500/20 rounded-2xl flex items-center justify-center">
                  <Target className="w-8 h-8 text-orange-400" />
                </div>
                <div>
                  <h3 className="text-2xl text-white">We're Selective —</h3>
                  <h3 className="text-2xl text-orange-400">On Purpose.</h3>
                </div>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                We don't work with everyone. We invest deeply in every
                partnership, aligning closely with companies that value
                operational strength and strategic clarity.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
