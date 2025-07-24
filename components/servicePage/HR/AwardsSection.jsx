import { Award, Star } from "lucide-react";

export default function AwardsSection() {
  return (
    <>
      {/* Awards Section - Minimal Layout */}
      <section className="py-32 bg-black">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl text-white mb-8">
              <span className="text-green-400">Recognized</span> Excellence
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-16 max-w-4xl mx-auto">
            <div className="text-center group">
              <div className="w-24 h-24 bg-green-500/20 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:bg-green-500/30 transition-colors">
                <Award className="w-12 h-12 text-green-400" />
              </div>
              <h3 className="text-2xl text-white mb-4">
                Best HR Tech Implementation
              </h3>
              <p className="text-green-400 text-lg">2024 Industry Award</p>
              <p className="text-gray-400 mt-2">
                Recognized for innovative AI-driven solutions
              </p>
            </div>

            <div className="text-center group">
              <div className="w-24 h-24 bg-blue-500/20 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:bg-blue-500/30 transition-colors">
                <Star className="w-12 h-12 text-blue-400" />
              </div>
              <h3 className="text-2xl text-white mb-4">
                Top 10 People-first Firms
              </h3>
              <p className="text-blue-400 text-lg">Industry Recognition</p>
              <p className="text-gray-400 mt-2">
                Leading the way in employee-centric HR
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
