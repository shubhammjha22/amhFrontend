import { Card, CardContent } from "@/components/ui/card";
import {
  Building,
  Cpu,
  Heart,
  Plane,
  ShoppingCart,
  Wrench,
} from "lucide-react";
import React from "react";

export default function IndustryWeTransform() {
  const industries = [
    {
      title: "Aviation & Airports",
      icon: <Plane className="w-6 h-6" />,
      description:
        "Specialized HR solutions for aviation industry compliance and safety",
      bgColor: "bg-blue-500/20",
      hoverBgColor: "group-hover:bg-blue-500/30",
      iconColor: "text-blue-400",
    },
    {
      title: "Manufacturing",
      icon: <Wrench className="w-6 h-6" />,
      description: "Workforce management for complex manufacturing operations",
      bgColor: "bg-orange-500/20",
      hoverBgColor: "group-hover:bg-orange-500/30",
      iconColor: "text-orange-400",
    },
    {
      title: "Technology",
      icon: <Cpu className="w-6 h-6" />,
      description:
        "Scalable HR tech solutions for fast-growing technology companies",
      bgColor: "bg-purple-500/20",
      hoverBgColor: "group-hover:bg-purple-500/30",
      iconColor: "text-purple-400",
    },
    {
      title: "Healthcare",
      icon: <Heart className="w-6 h-6" />,
      description:
        "Compliance-first HR management for healthcare organizations",
      bgColor: "bg-red-500/20",
      hoverBgColor: "group-hover:bg-red-500/30",
      iconColor: "text-red-400",
    },
    {
      title: "Retail",
      icon: <ShoppingCart className="w-6 h-6" />,
      description: "Large-scale workforce management for retail and e-commerce",
      bgColor: "bg-emerald-500/20",
      hoverBgColor: "group-hover:bg-emerald-500/30",
      iconColor: "text-emerald-400",
    },
    {
      title: "Financial Services",
      icon: <Building className="w-6 h-6" />,
      description:
        "Regulatory compliance and risk management for financial institutions",
      bgColor: "bg-cyan-500/20",
      hoverBgColor: "group-hover:bg-cyan-500/30",
      iconColor: "text-cyan-400",
    },
  ];
  return (
    <>
      {/* Industries Section - Icon Grid Layout */}
      <section className="py-32 bg-gray-900/20">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl text-white mb-8">
              Industries We <span className="text-green-400">Transform</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Specialized HR solutions tailored to industry-specific challenges
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-gray-900 to-black border-gray-800 hover:border-green-500/30 transition-all duration-300 group p-8"
              >
                <CardContent className="p-0">
                  <div className="flex items-center space-x-4 mb-6">
                    <div
                      className={`w-14 h-14 ${industry.bgColor} rounded-xl flex items-center justify-center ${industry.hoverBgColor} transition-colors`}
                    >
                      <div className={industry.iconColor}>{industry.icon}</div>
                    </div>
                    <h3 className="text-xl text-white group-hover:text-green-400 transition-colors">
                      {industry.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    {industry.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
