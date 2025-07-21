"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function FlipCards({}) {
  let imgRectangle440 =
    "https://d3ubkh78jboupj.cloudfront.net/custom-cms/20250716_074726_6877590ee8e48.png";
  const painPoints = [
    {
      title: "Hidden Costs",
      description: "Quiet inefficiencies that bleed profit behind the scenes.",
      solution:
        "Outscale pinpoints waste with clear process mapping, smart automation, and disciplined controls — so every dollar works harder.",
      trackingLabel: "hidden_costs",
      image: imgRectangle440,
    },
    {
      title: "Overloaded Teams",
      description: "Top talent buried in busywork, not strategy.",
      solution:
        "We embed smart processes and top-tier support that remove daily bottlenecks, letting your people work at their highest and best use - not getting buried in admin noise.",
      trackingLabel: "overloaded_teams",
      image: imgRectangle440,
    },
    {
      title: "Processes That Don't Scale",
      description: "Old workflows crack under new demands.",
      solution:
        "Our proven frameworks rebuild your workflows for consistency, resilience, and speed - no matter how fast you grow.",
      trackingLabel: "processes_dont_scale",
      image: imgRectangle440,
    },
    {
      title: "Compliance Risks",
      description: "One slip can cost reputation, trust, or potential fines.",
      solution:
        "Outscale's governance, controls, audit trails, and 24/7 SLA-backed committed service level execution protect you from costly mistakes and keep you ahead of regulations.",
      trackingLabel: "compliance_risks",
      image: imgRectangle440,
    },
    {
      title: "Poor Visibility",
      description: "Leaders flying blind without real-time insights.",
      solution:
        "We turn fragmented data into live dashboards and reliable reporting, so you make faster, sharper decisions.",
      trackingLabel: "poor_visibility",
      image: imgRectangle440,
    },
    {
      title: "Leaders in the Weeds",
      description:
        "Key personnel and leadership stuck firefighting instead of moving big ideas forward.",
      solution:
        "We take the everyday grind off your leaders' shoulders, so they spend less time putting out fires and more time driving big, bold moves.",
      trackingLabel: "leaders_in_weeds",
      image: imgRectangle440,
    },
  ];
  const [flippedCards, setFlippedCards] = useState(new Set());

  const handleCardClick = (index) => {
    console.log(`Pain point selected: ${painPoints[index].trackingLabel}`);
    setFlippedCards((prev) => {
      const newSet = new Set(prev);
      newSet.has(index) ? newSet.delete(index) : newSet.add(index);
      return newSet;
    });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16 w-[90%] mx-auto">
      {painPoints.map((point, index) => (
        <div
          key={index}
          className="relative group cursor-pointer h-[450px]"
          onClick={() => handleCardClick(index)}
        >
          <div className="relative w-full h-full rounded-lg overflow-hidden border border-[#202633]">
            {/* Static Background Image */}
            <div className="absolute inset-0 z-0">
              <Image
                src="https://d3ubkh78jboupj.cloudfront.net/custom-cms/20250716_074726_6877590ee8e48.png"
                alt={point.title}
                fill
                className="object-cover object-center"
              />
              {flippedCards.has(index) ? (
                <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.3)_0%,rgba(10,21,25,0.9)_100%)]" />
              ) : (
                <>
                  <div className="absolute inset-0 bg-[#5D6F32]/20 pointer-events-none"></div>
                  <div className="absolute inset-0 bg-green-dark-fade pointer-events-none"></div>
                </>
              )}
            </div>

            {/* Flip Content */}
            <div
              className="relative w-full h-full"
              style={{ perspective: "1000px" }}
            >
              <div
                className={`card-inner h-full w-full ${
                  flippedCards.has(index) ? "flipped" : ""
                }`}
              >
                {/* Front Content */}
                <div className="card-front font-instrument absolute inset-0 p-8  flex flex-col justify-between">
                  <div className="flex flex-col h-full text-left">
                    <h3 className="text-2xl font-instrument font-bold text-white mb-2">
                      {point.title}
                    </h3>
                    <div className="w-20 h-[2px] bg-white mb-4"></div>
                    <p className="text-[#D7D7D7] font-medium  text-xl">
                      {point.description}
                    </p>
                  </div>
                  <div>
                    <p className="bg-white bg-opacity-[16%] rounded-[32px] conic-border-rounded px-4 py-3 text-white font-semibold font-instrument transition-transform duration-200 hover:translate-x-1 flex items-center gap-2 w-fit">
                      How we Fix it <ArrowRight className="ml h-5 w-5" />
                    </p>
                  </div>
                </div>

                {/* Back Content */}
                <div className="card-back absolute inset-0 p-8 flex flex-col justify-between">
                  <div className="flex flex-col h-full text-left">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      How we fix it
                    </h3>
                    <p className="text-[#D7D7D7] text-xl">
                      {point?.solution || "Solution details not available."}
                    </p>
                  </div>
                  <div className="text-right">
                    <p
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCardClick(index);
                      }}
                      className="bg-white bg-opacity-[16%] rounded-[32px] ml-auto conic-border-rounded px-4 py-3 text-white font-medium transition-transform duration-200 hover:translate-x-1 flex items-center gap-2 w-fit"
                    >
                      Back to Problem
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <style>{`
      .card-inner {
        position: relative;
        width: 100%;
        height: 100%;
        transition: transform 0.6s;
        transform-style: preserve-3d;
      }
  
      .card-inner.flipped {
        transform: rotateY(180deg);
      }
  
      .card-front,
      .card-back {
        backface-visibility: hidden;
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 1;
      }
  
      .card-back {
        transform: rotateY(180deg);
      }
    `}</style>
    </div>
  );
}
