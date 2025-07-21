const ProcessSection = () => {
  return (
    <>
      {/* Process Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl text-white mb-6">
              How the Assessment Works
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our proven 3-step process to evaluate your operational readiness
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Step 1 */}
            <div className="text-center relative">
              <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-500/30">
                <span className="text-2xl text-green-400">1</span>
              </div>
              <h3 className="text-xl text-white mb-4">8 Strategic Questions</h3>
              <p className="text-gray-300 leading-relaxed">
                Answer targeted questions about your processes, team capacity,
                technology, compliance, and growth readiness.
              </p>
              {/* Connector */}
              <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-gray-700 transform translate-x-10"></div>
            </div>

            {/* Step 2 */}
            <div className="text-center relative">
              <div className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-blue-500/30">
                <span className="text-2xl text-blue-400">2</span>
              </div>
              <h3 className="text-xl text-white mb-4">Instant Analysis</h3>
              <p className="text-gray-300 leading-relaxed">
                Our proprietary algorithm evaluates your responses and generates
                your Operations Health Score and readiness level.
              </p>
              {/* Connector */}
              <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-gray-700 transform translate-x-10"></div>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-purple-500/30">
                <span className="text-2xl text-purple-400">3</span>
              </div>
              <h3 className="text-xl text-white mb-4">Custom Roadmap</h3>
              <p className="text-gray-300 leading-relaxed">
                Receive personalized recommendations and next steps based on
                your specific operational challenges and opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProcessSection;
