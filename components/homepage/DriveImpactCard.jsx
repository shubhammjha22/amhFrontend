"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function DriveCards({}) {
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
    <div className="grid justify-center grid-cols-1 items-center sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 w-[90%] mx-auto  ">
      {painPoints.map((point, index) => (
        <div
          key={index}
          className="relative group cursor-pointer max-w-md h-[450px]  "
          onClick={() => handleCardClick(index)}
        >
          <div
            className="card-container h-full"
            style={{ perspective: "1000px" }}
          >
            <div
              className={`card-inner h-full ${
                flippedCards.has(index) ? "flipped" : ""
              }`}
            >
              {/* Front */}
              <div className="absolute card-front inset-0 backface-hidden shadow-[40px] overflow-hidden rounded-lg border border-[#202633]">
                <div className="absolute inset-0">
                  <Image
                    src="https://d3ubkh78jboupj.cloudfront.net/custom-cms/20250716_074726_6877590ee8e48.png"
                    alt={point.title}
                    fill
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>
                </div>
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  <div className="relative flex flex-col  h-full text-left">
                    <Button className="flex text-white items-center text-xl font-instrument font-medium w-fit bg-white/10 hover:bg-[#FFFFFF30] rounded-[40px] border-[0.5px] border-[#D7D7D7] backdrop-blur-[20px] py-3 px-4 justify-center mb-6">
                      {point.title}
                    </Button>
                  </div>
                  <div className="transition-opacity duration-300 text-left rounded-3xl">
                    <p className="text-[#D7D7D7] text-lg font-medium">
                      {point.description}
                    </p>
                    <p className=" py-3 text-white  transition-transform duration-200 hover:translate-x-1 space-x-1 flex items-center gap-2 font-bold text-xl w-fit">
                      Know more <ArrowRight className=" h-4 w-4" />
                    </p>
                  </div>
                </div>
              </div>

              {/* Back */}
              <div className="card-back absolute inset-0 h-full overflow-hidden rounded-lg border border-[#22C55E]/30">
                <div className="absolute inset-0">
                  <Image
                    src="https://d3ubkh78jboupj.cloudfront.net/custom-cms/20250716_074726_6877590ee8e48.png"
                    alt={point.title}
                    fill
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.3)_0%,rgba(10,21,25,0.9)_100%)]" />
                </div>
                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                  <div className="relative flex flex-col h-full text-left">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      How we fix it
                    </h3>
                    <p className="text-[#D7D7D7] text-xl">
                      {point?.solution || "Solution details not available."}
                    </p>
                  </div>
                  <div className="text-right ">
                    <div className="transition-opacity duration-300 ">
                      <p
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCardClick(index);
                        }}
                        className="bg-white bg-opacity-[16%] rounded-[32px] ml-auto conic-border-rounded px-4 py-3 text-white font-medium transition-transform duration-200 hover:translate-x-1 spce-x-2 flex items-center gap-2 w-fit"
                      >
                        Back to Problem
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <style>{`
        .card-container {
          width: 100%;
        }
        
        .card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          text-align: center;
          transition: transform 0.6s;
          transform-style: preserve-3d;
        }
        
        .card-inner.flipped {
          transform: rotateY(180deg);
        }
        
        .card-front, .card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          border-radius: 8px;
        }
        
        .card-back {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
}
