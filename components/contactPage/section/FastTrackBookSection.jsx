import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  Clock,
  Lightbulb,
  Shield,
  Target,
} from "lucide-react";
import React from "react";

export default function FastTrackBookSection() {
  const expectCards = [
    {
      icon: <Target className="w-6 h-6 text-green-400" />,
      iconClass: "bg-green-500/20",
      cardHover: "hover:border-green-500/30",
      title: "Strategic Assessment",
      description: `We'll discuss your current challenges and growth objectives`,
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-blue-400" />,
      iconClass: "bg-blue-500/20",
      cardHover: "hover:border-blue-500/30",
      title: " Custom Recommendations",
      description: "Get personalized insights on how Outscale can help",
    },
    {
      icon: <ArrowRight className="w-6 h-6 text-purple-400" />,
      iconClass: "bg-purple-500/20",
      cardHover: "hover:border-purple-500/30",
      title: "Next Steps",
      description: "Clear action plan tailored to your business needs",
    },
  ];
  return (
    <>
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl text-white mb-6">
              Fast-track: <span className="text-green-400">Book a Call</span>
            </h2>
            <h3 className="text-2xl text-gray-300 mb-4">
              Prefer to talk directly?
            </h3>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Book a no-pressure call with our team to explore how we can help.
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            {/* Call Benefits Header */}
            <div className="text-center mb-12">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-8 h-8 text-green-400" />
              </div>
              <h4 className="text-3xl text-white mb-4">
                What to expect from your call:
              </h4>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Our discovery calls are designed to understand your unique
                challenges and provide immediate value.
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {expectCards.map((item) => (
                <Card
                  key={item.title}
                  className={`bg-gradient-to-br from-gray-900 to-black border-gray-800 ${item.cardHover} transition-all duration-300 p-6`}
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

            {/* Call to Action Card */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-gray-800">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-4 h-4 bg-green-400 rounded-full"></div>
                  <span className="text-green-400 text-lg">
                    30-minute discovery call
                  </span>
                </div>
                <h5 className="text-2xl text-white mb-4">
                  Ready to get started?
                </h5>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  No sales pressure. Just a genuine conversation about your
                  business and how we might help you scale without the chaos.
                </p>
                <Button className="w-full bg-green-500 hover:bg-green-600 text-black rounded-full py-3 text-lg">
                  Schedule Your Call
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>

              <div className="space-y-6">
                <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800">
                  <div className="flex items-center space-x-3 mb-3">
                    <Clock className="w-5 h-5 text-blue-400" />
                    <span className="text-white">Quick Setup</span>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Book in under 60 seconds with instant confirmation
                  </p>
                </div>

                <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800">
                  <div className="flex items-center space-x-3 mb-3">
                    <Shield className="w-5 h-5 text-purple-400" />
                    <span className="text-white">Confidential</span>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Your business information stays completely secure
                  </p>
                </div>

                <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800">
                  <div className="flex items-center space-x-3 mb-3">
                    <CheckCircle2 className="w-5 h-5 text-green-400" />
                    <span className="text-white">No Commitment</span>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Explore options with zero obligation
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
