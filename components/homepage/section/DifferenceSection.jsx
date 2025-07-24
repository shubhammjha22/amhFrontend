import { Card } from "@/components/ui/card";
import Image from "next/image";
import MotionWrapper from "../../Animation/motionWrapper";

export default function DifferenceSection({ difference }) {
  return (
    <section className="bg-black text-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {difference.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {difference.items.map((item, index) => (
            <Card
              key={index}
              className="bg-gray-900/50 border-gray-800 overflow-hidden group hover:border-green-400/50 transition-all duration-300"
            >
              <div className="relative h-64 bg-gradient-to-br from-green-900/20 to-gray-900/40">
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {item.title}
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-300">{item.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export function OutscaleDifferenceSection() {
  const features = [
    {
      title: "Precision at Scale",
      description:
        "Control every process mapped, measured, and constantly improved so growth never outpaces.",
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop&auto=format",
    },
    {
      title: "Automation Where It Matters",
      description:
        "We automate routine tasks to cut waste and free your team for high-value moves.",
      image:
        "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&h=300&fit=crop&auto=format",
    },
    {
      title: "Elite Talent on Demand",
      description:
        "Skilled specialists who know your industry and deliver with speed and care.",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop&auto=format",
    },
    {
      title: "Clarity in Real Time",
      description:
        "Live dashboards and sharp reporting so leaders act with confidence, not guesswork.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&auto=format",
    },
    {
      title: "Business Innovation",
      description:
        "Enterprise business functions reimagined and innovated through next gen systems, AI-enabled agents, and experience-led solutions.",
      image:
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop&auto=format",
    },
    {
      title: "A True Growth Partner",
      description:
        "We don't just handle tasks. We build resilient systems and teams designed to move fast, think ahead, and deliver outcomes that stick.",
      image:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop&auto=format",
    },
  ];

  // Duplicate features for seamless loop
  const duplicatedFeatures = [...features, ...features];

  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-[#0a1a0a] to-[#001a0a] relative overflow-hidden py-24">
      {/* Content */}
      <div className="relative z-10 px-8 md:px-16 lg:px-24 max-w-full mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-white mb-4">
            The Outscale Difference
          </h3>
          <MotionWrapper
            className="w-24 h-1 bg-gradient-to-r from-[#22C55E] to-[#84CC16] mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        </div>
      </div>
      {/* Marquee Cards */}
      <div className="relative overflow-hidden mb-20">
        <div className="marquee-container flex space-x-8">
          {duplicatedFeatures.map((feature, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-96 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 hover:border-[#22C55E]/30 transition-all duration-500 group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>

              <div className="p-8">
                <h4 className="text-xl font-semibold text-white group-hover:text-[#22C55E] transition-colors duration-300 mb-4">
                  {feature.title}
                </h4>

                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Gradient Fade Effects */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-black via-black/80 to-transparent pointer-events-none z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-black via-black/80 to-transparent pointer-events-none z-10"></div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(80px, 80px); }
        }

        @keyframes marquee-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .marquee-container {
          animation: marquee-scroll 60s linear infinite;
          width: calc(200% + 2rem);
        }

        .marquee-container:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
