"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function TrendingSection() {
  const [currentTrendingIndex, setCurrentTrendingIndex] = useState(0);

  const trendingItems = [
    {
      title: "Generative AI for Employee Feedback Analysis",
      description:
        "AI-powered sentiment analysis and insights from employee feedback to drive engagement strategies and improve workplace culture.",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      badge: "AI & Analytics",
    },
    {
      title: "Predictive Models for Workforce Planning",
      description:
        "Advanced analytics to forecast hiring needs, skills gaps, and workforce optimization opportunities for strategic growth.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      badge: "Predictive Analytics",
    },
    {
      title: "Automation in Payroll & Compliance",
      description:
        "Smart automation systems that ensure accurate payroll processing and regulatory compliance while reducing manual errors.",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      badge: "Automation",
    },
  ];
  const nextTrending = () => {
    setCurrentTrendingIndex((prev) => (prev + 1) % trendingItems.length);
  };

  const prevTrending = () => {
    setCurrentTrendingIndex(
      (prev) => (prev - 1 + trendingItems.length) % trendingItems.length
    );
  };
  return (
    <>
      {/* Trending Section - Full Width Carousel */}
      <section className="py-32 bg-black">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl text-white mb-8">
              What's <span className="text-green-400">Trending</span>
            </h2>
            <p className="text-xl text-gray-400">
              Latest innovations in HR technology and workforce management
            </p>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-3xl">
              <Card className="bg-gray-900/50 border-gray-800 overflow-hidden">
                <div className="grid lg:grid-cols-2">
                  <div className="relative h-80 lg:h-96">
                    <Image
                      height={384}
                      width={384}
                      src={trendingItems[currentTrendingIndex].image}
                      alt={trendingItems[currentTrendingIndex].title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-6 left-6">
                      <div className="bg-green-500/20 border border-green-500/30 rounded-full px-4 py-2">
                        <span className="text-green-400 text-sm">
                          {trendingItems[currentTrendingIndex].badge}
                        </span>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-12 flex flex-col justify-center">
                    <h3 className="text-3xl text-white mb-6">
                      {trendingItems[currentTrendingIndex].title}
                    </h3>
                    <p className="text-xl text-gray-300 leading-relaxed mb-8">
                      {trendingItems[currentTrendingIndex].description}
                    </p>
                    <Button className="bg-green-500 hover:bg-green-600 text-black px-8 py-3 rounded-full self-start">
                      Learn More
                    </Button>
                  </CardContent>
                </div>
              </Card>
            </div>

            {/* Navigation */}
            <button
              onClick={prevTrending}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={nextTrending}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            {/* Dots */}
            <div className="flex justify-center mt-8 space-x-3">
              {trendingItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTrendingIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTrendingIndex
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
