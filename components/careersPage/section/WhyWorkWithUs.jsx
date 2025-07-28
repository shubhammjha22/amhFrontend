import { Card, CardContent } from "@/components/ui/card";
import { Award, Globe, Lightbulb, Star, TrendingUp, Users } from "lucide-react";
import React from "react";

export default function WhyWorkWithUs() {
  const whyWorkCards = [
    {
      icon: <TrendingUp className="w-7 h-7 text-green-400" />,
      iconClass: "bg-green-500/20",
      title: "Rapid Growth",
      description:
        " Join a fast-growing company where your impact is immediately visible and your career can accelerate quickly.",
      cardHover: "hover:border-green-500/50",
    },
    {
      icon: <Star className="w-7 h-7 text-blue-400" />,
      iconClass: "bg-blue-500/20",
      cardHover: "hover:border-blue-500/50",
      title: " Elite Clients",
      description:
        " Work with industry-leading companies and solve complex operational challenges at scale.",
    },
    {
      icon: <Lightbulb className="w-7 h-7 text-purple-400" />,
      iconClass: "bg-purple-500/20",
      cardHover: "hover:border-purple-500/50",
      title: "Innovation Focus",
      description:
        " Be at the forefront of operational innovation, using cutting-edge AI and automation technologies.",
    },
    {
      icon: <Users className="w-7 h-7 text-orange-400" />,
      iconClass: "bg-orange-500/20",
      cardHover: "hover:border-orange-500/50",
      title: "World-Class Team",
      description:
        "Collaborate with top talent from consulting, technology, and operations backgrounds.",
    },
    {
      icon: <Globe className="w-7 h-7 text-cyan-400" />,
      iconClass: "bg-cyan-500/20",
      cardHover: "hover:border-cyan-500/50",
      title: "Global Impact",
      description:
        "Make a meaningful difference in how businesses operate around the world.",
    },
    {
      icon: <Award className="w-7 h-7 text-pink-400" />,
      iconClass: "bg-pink-500/20",
      cardHover: "hover:border-pink-500/50",
      title: "Recognition",
      description:
        "  Your contributions are valued and rewarded with competitive compensation and growth opportunities..",
    },
  ];
  return (
    <>
      <section className="py-24 bg-gray-900/30">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl text-white mb-6">
              Why Work at <span className="text-green-400">Outscale?</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're not just building a company—we're creating a movement toward
              operational excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {whyWorkCards.map((item) => (
              <Card
                key={item.title}
                className={`bg-gradient-to-br from-gray-900 to-black border-gray-800 ${item.cardHover} transition-all duration-300 p-8`}
              >
                <CardContent className="p-0">
                  <div
                    className={`w-12 h-12 ${item.iconClass} rounded-xl flex items-center justify-center mb-4`}
                  >
                    {item.icon}
                  </div>
                  <h5 className="text-lg text-white mb-3">{item.title}</h5>
                  <p className="text-gray-300">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
