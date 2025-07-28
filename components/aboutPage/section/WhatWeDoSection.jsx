import {
  BarChart3,
  Cog,
  Database,
  Headphones,
  Scale,
  Users,
} from "lucide-react";

export default function WhatWeDoSection() {
  return (
    <>
      {/* What We Do Section */}
      <section className="py-24 bg-gray-900/30">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl text-white mb-6">What We Do</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4">
              Outscale is a strategic operations partner. We plug directly into
              your business to handle the critical areas that typically get
              sidelined as you grow:
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              But we don't stop at coverage — we bring precision. Our globally
              distributed teams, AI-enabled systems, and proven operational
              frameworks are designed to move fast, think ahead, and execute
              with excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* People Operations */}
            <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-gray-800 hover:border-green-500/50 transition-all duration-300 group">
              <div className="w-14 h-14 bg-green-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-500/30 transition-colors">
                <Users className="w-7 h-7 text-green-400" />
              </div>
              <h3 className="text-xl text-white mb-4">People Operations</h3>
              <p className="text-gray-300 leading-relaxed">
                From HR systems to talent management, we streamline your people
                processes to scale efficiently while maintaining culture and
                compliance.
              </p>
            </div>

            {/* Finance & Accounting */}
            <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-gray-800 hover:border-blue-500/50 transition-all duration-300 group">
              <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500/30 transition-colors">
                <BarChart3 className="w-7 h-7 text-blue-400" />
              </div>
              <h3 className="text-xl text-white mb-4">Finance & Accounting</h3>
              <p className="text-gray-300 leading-relaxed">
                Clean books, automated reporting, and strategic financial
                insights that give you confidence in every business decision.
              </p>
            </div>

            {/* Technology & Automation */}
            <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300 group">
              <div className="w-14 h-14 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-500/30 transition-colors">
                <Cog className="w-7 h-7 text-purple-400" />
              </div>
              <h3 className="text-xl text-white mb-4">
                Technology & Automation
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Smart systems that eliminate manual work, reduce errors, and
                give your team time to focus on high-value activities.
              </p>
            </div>

            {/* Legal & Compliance */}
            <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-gray-800 hover:border-orange-500/50 transition-all duration-300 group">
              <div className="w-14 h-14 bg-orange-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-500/30 transition-colors">
                <Scale className="w-7 h-7 text-orange-400" />
              </div>
              <h3 className="text-xl text-white mb-4">Legal & Compliance</h3>
              <p className="text-gray-300 leading-relaxed">
                Stay ahead of regulatory requirements with proactive compliance
                management and risk mitigation strategies.
              </p>
            </div>

            {/* Data, Analytics & AI */}
            <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 group">
              <div className="w-14 h-14 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-cyan-500/30 transition-colors">
                <Database className="w-7 h-7 text-cyan-400" />
              </div>
              <h3 className="text-xl text-white mb-4">Data, Analytics & AI</h3>
              <p className="text-gray-300 leading-relaxed">
                Transform data into actionable insights with AI-powered
                analytics that drive smarter, faster decision-making.
              </p>
            </div>

            {/* Customer Experience */}
            <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-gray-800 hover:border-pink-500/50 transition-all duration-300 group">
              <div className="w-14 h-14 bg-pink-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-pink-500/30 transition-colors">
                <Headphones className="w-7 h-7 text-pink-400" />
              </div>
              <h3 className="text-xl text-white mb-4">Customer Experience</h3>
              <p className="text-gray-300 leading-relaxed">
                Optimize every touchpoint in your customer journey to increase
                satisfaction, retention, and lifetime value.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
