"use client";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

export default function MeetOurLeaderSection() {
  const [currentLeaderIndex, setCurrentLeaderIndex] = useState(0);

  const leaders = [
    {
      name: "Sarah Chen",
      title: "VP of People Operations",
      quote:
        "Building people-first cultures that drive measurable business results.",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      background: "15+ years in People Ops at Fortune 500 companies",
    },
    {
      name: "Marcus Rodriguez",
      title: "Director of HR Technology",
      quote:
        "Leveraging AI and automation to transform the employee experience.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      background: "Former tech lead at leading HRIS platforms",
    },
    {
      name: "Emily Watson",
      title: "Head of Talent Acquisition",
      quote:
        "Strategic recruiting that aligns talent with business objectives.",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      background: "Built recruiting teams for 3 unicorn startups",
    },
  ];

  const nextLeader = () => {
    setCurrentLeaderIndex((prev) => (prev + 1) % leaders.length);
  };

  const prevLeader = () => {
    setCurrentLeaderIndex(
      (prev) => (prev - 1 + leaders.length) % leaders.length
    );
  };
  return (
    <>
      {/* Leadership Section - Card Based Layout */}
      <section className="py-32 bg-gray-900/20">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl text-white mb-8">
              Meet Our <span className="text-green-400">Leadership</span>
            </h2>
            <p className="text-xl text-gray-400">
              Experienced leaders driving HR innovation and transformation
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <Card className="bg-gray-900/50 border-gray-800 overflow-hidden">
              <div className="grid lg:grid-cols-5">
                <div className="lg:col-span-2 relative h-80 lg:h-auto">
                  <Image
                    height={320}
                    width={320}
                    src={leaders[currentLeaderIndex].image}
                    alt={leaders[currentLeaderIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="lg:col-span-3 p-12 flex flex-col justify-center">
                  <h3 className="text-3xl text-white mb-2">
                    {leaders[currentLeaderIndex].name}
                  </h3>
                  <p className="text-green-400 text-lg mb-6">
                    {leaders[currentLeaderIndex].title}
                  </p>
                  <blockquote className="text-2xl text-gray-300 italic mb-6 leading-relaxed">
                    "{leaders[currentLeaderIndex].quote}"
                  </blockquote>
                  <p className="text-gray-400">
                    {leaders[currentLeaderIndex].background}
                  </p>
                </CardContent>
              </div>
            </Card>

            {/* Navigation */}
            <button
              onClick={prevLeader}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={nextLeader}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            {/* Dots */}
            <div className="flex justify-center mt-8 space-x-3">
              {leaders.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentLeaderIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentLeaderIndex
                      ? "bg-green-500"
                      : "bg-gray-600"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
