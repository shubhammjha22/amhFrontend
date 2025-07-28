import { Card, CardContent } from "@/components/ui/card";
import {
  Building,
  Clock,
  Coffee,
  Cpu,
  DollarSign,
  Globe,
  GraduationCap,
  Heart,
  Plane,
  ShoppingCart,
  Wrench,
} from "lucide-react";
import React from "react";

export default function BenefitsNPerks() {
  const benefits = [
    {
      icon: <Heart className="w-6 h-6 text-red-400" />,
      title: "Health & Wellness",
      description:
        "Comprehensive health insurance, mental health support, and wellness stipends",

      bgColor: "bg-red-500/20",
      hoverBgColor: "group-hover:bg-red-500/30",
      iconColor: "text-red-400",
    },
    {
      icon: <Clock className="w-6 h-6 text-blue-400" />,
      title: "Work-Life Balance",
      description:
        "Flexible schedules, unlimited PTO, and remote-first culture",
      bgColor: "bg-blue-500/20",
      hoverBgColor: "group-hover:bg-blue-500/30",
      iconColor: "text-blue-400",
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-purple-400" />,
      title: "Learning & Development",
      description:
        "$3,000 annual learning budget and conference attendance support",
      bgColor: "bg-purple-500/20",
      hoverBgColor: "group-hover:bg-purple-500/30",
      iconColor: "text-purple-400",
    },
    {
      icon: <DollarSign className="w-6 h-6 text-green-400" />,
      title: "Financial Benefits",
      description:
        "Competitive salary, equity participation, and 401k matching",
      bgColor: "bg-green-500/20",
      hoverBgColor: "group-hover:bg-green-500/30",
      iconColor: "text-green-400",
    },
    {
      icon: <Coffee className="w-6 h-6 text-orange-400" />,
      title: "Perks & Culture",
      description:
        "Team retreats, home office setup, and collaborative environment",
      bgColor: "bg-orange-500/20",
      hoverBgColor: "group-hover:bg-orange-500/30",
      iconColor: "text-orange-400",
    },
    {
      icon: <Globe className="w-6 h-6 text-cyan-400" />,
      title: "Global Impact",
      description:
        "Work with clients worldwide and make a meaningful difference",
      bgColor: "bg-cyan-500/20",
      hoverBgColor: "group-hover:bg-cyan-500/30",
      iconColor: "text-cyan-400",
    },
  ];
  return (
    <>
      {/* Industries Section - Icon Grid Layout */}
      <section className="py-32 bg-black">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl text-white mb-8">
              Benefits & <span className="text-green-400">Perks</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We invest in our team's success, well-being, and professional
              growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((industry, index) => (
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
