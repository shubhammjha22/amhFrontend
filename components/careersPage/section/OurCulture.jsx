import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function OurCulture() {
  const cultureKey = [
    {
      title: "Remote-First Approach",
      description:
        "Work from anywhere while staying connected with your global team.",
    },
    {
      title: "Continuous Learning",
      description:
        "Dedicated time and budget for professional development and skill building.",
    },
    {
      title: "Ownership Mentality",
      description:
        "Take ownership of your work and drive meaningful impact for our clients.",
    },
  ];
  return (
    <>
      {/* Culture Section */}
      <section className="py-24 bg-gray-900/30">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl lg:text-5xl text-white">
                Our <span className="text-green-400">Culture</span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                We believe that exceptional results come from exceptional people
                working in an environment where they can thrive.
              </p>

              <div className="space-y-6">
                {cultureKey.map((item) => (
                  <div key={item.title} className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg text-white mb-1">{item.title}</h4>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 bg-gradient-to-br from-gray-900 to-black p-1 rounded-3xl border border-gray-700">
                <Image
                  height={400}
                  width={400}
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Diverse team collaborating in modern workspace"
                  className="w-full h-[400px] object-cover rounded-3xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-green-500/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
