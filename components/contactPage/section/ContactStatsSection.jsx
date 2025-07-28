import React from "react";

export default function ContactStatsSection() {
  return (
    <>
      <section className="py-16 bg-gray-900/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl text-white mb-4">Why Choose Outscale?</h2>
            <p className="text-gray-400">
              Trusted by companies worldwide for operational excellence
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl text-green-400 mb-2">500+</div>
              <div className="text-gray-300">Companies Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl text-blue-400 mb-2">&lt;24hr</div>
              <div className="text-gray-300">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-4xl text-purple-400 mb-2">98%</div>
              <div className="text-gray-300">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl text-orange-400 mb-2">3x</div>
              <div className="text-gray-300">Faster Growth</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
