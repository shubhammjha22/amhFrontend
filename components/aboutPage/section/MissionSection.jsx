import Image from "next/image";
import React from "react";

export default function MissionSection() {
  return (
    <>
      {/* Mission Statement Section */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative z-10 bg-gradient-to-br from-gray-900 to-black p-1 rounded-3xl border border-gray-700">
                <Image
                  height={500}
                  width={500}
                  src="https://images.unsplash.com/photo-1553484771-371a605b060b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Innovative technology workspace"
                  className="w-full h-[500px] object-cover rounded-3xl"
                />
              </div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-green-500/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-cyan-400/15 rounded-full blur-2xl"></div>
            </div>

            <div className="space-y-10">
              <h2 className="text-4xl lg:text-5xl text-white">Our Mission</h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-green-400 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-xl text-gray-300 leading-relaxed">
                    To redefine what it means to scale.
                  </p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-green-400 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-xl text-gray-300 leading-relaxed">
                    To replace chaos with clarity.
                  </p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-green-400 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-xl text-gray-300 leading-relaxed">
                    To give every partner the freedom to move boldly — without
                    the drag.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
