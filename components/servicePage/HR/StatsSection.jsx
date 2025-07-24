export default function StatsSection() {
  return (
    <>
      {/* Stats Section - Modern Grid Layout */}
      <section className="py-32 bg-gray-900/20">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl text-white mb-8">
              Results That Matter
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Quantifiable impact across every dimension of workforce management
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="text-7xl lg:text-8xl text-green-400 mb-4 group-hover:scale-105 transition-transform duration-300">
                12K+
              </div>
              <div className="text-xl text-white mb-2">Employees Onboarded</div>
              <div className="text-gray-400">Annually across all clients</div>
            </div>

            <div className="text-center group">
              <div className="text-7xl lg:text-8xl text-blue-400 mb-4 group-hover:scale-105 transition-transform duration-300">
                98.5%
              </div>
              <div className="text-xl text-white mb-2">Payroll Accuracy</div>
              <div className="text-gray-400">Zero-error processing rate</div>
            </div>

            <div className="text-center group">
              <div className="text-7xl lg:text-8xl text-purple-400 mb-4 group-hover:scale-105 transition-transform duration-300">
                60%
              </div>
              <div className="text-xl text-white mb-2">Faster Onboarding</div>
              <div className="text-gray-400">Reduced time-to-productivity</div>
            </div>

            <div className="text-center group">
              <div className="text-7xl lg:text-8xl text-orange-400 mb-4 group-hover:scale-105 transition-transform duration-300">
                40%
              </div>
              <div className="text-xl text-white mb-2">Turnover Reduction</div>
              <div className="text-gray-400">Average across client base</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
