import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Briefcase,
  Building,
  Headphones,
  MessageCircle,
  Users,
} from "lucide-react";
import React from "react";

export default function LetsGetYouToRightTeam() {
  const contactCards = [
    {
      icon: <Building className="w-7 h-7 text-green-400" />,
      iconWrapperClass: "bg-green-500/20 group-hover:bg-green-500/30 ",
      borderHover: "hover:border-green-500/50",
      title: "Business Inquiry",
      subtitle: "Exploring Outscale's services",
      description:
        "You're exploring Outscale's services for your company and want to understand how we can help streamline your operations.",
      buttonText: "Talk to a Solutions Specialist",
      buttonClass: "bg-green-500 hover:bg-green-600 text-black",
      onClick: () => console.log("Business Inquiry Clicked"),
    },
    {
      icon: <Users className="w-7 h-7 text-blue-400" />,
      iconWrapperClass: "bg-blue-500/20  group-hover:bg-blue-500/30",
      borderHover: "hover:border-blue-500/50",
      title: "Partner With Us",
      subtitle: "Collaboration opportunities",
      description:
        "You're from a consulting firm, product vendor, or platform looking to collaborate and create mutual value.",
      buttonText: "Connect With Partnerships Team",
      buttonClass: "bg-blue-500 hover:bg-blue-600 ",
      onClick: () => console.log("Partner With Us Clicked"),
    },
    {
      icon: <MessageCircle className="w-7 h-7 text-purple-400" />,
      iconWrapperClass: " bg-purple-500/20 group-hover:bg-purple-500/30 ",
      borderHover: "hover:border-purple-500/50",
      title: "Media & PR",
      subtitle: "Press and events",
      description:
        "Event invites, podcast bookings, or press outreach — connect with our communications team.",
      buttonText: "Contact Our Communications Team",
      buttonClass: " bg-purple-500 hover:bg-purple-600 ",
      onClick: () => console.log("Media & PR Clicked"),
    },
    {
      icon: <Briefcase className="w-7 h-7 text-orange-400" />,
      iconWrapperClass: " bg-orange-500/20  group-hover:bg-orange-500/30",
      borderHover: "hover:border-orange-500/50",
      title: "Careers & Hiring",
      subtitle: "Join our team",
      description:
        "Looking to join the team or follow up on a role? Connect with our HR team about opportunities.",
      buttonText: "Explore Open Roles or Contact HR",
      buttonClass: "bg-orange-500 hover:bg-orange-600",
      onClick: () => console.log("Careers & Hiring Clicked"),
    },
    {
      icon: <Headphones className="w-7 h-7 text-cyan-400" />,
      iconWrapperClass: "bg-cyan-500/20 group-hover:bg-cyan-500/30 ",
      borderHover: "hover:border-cyan-500/50",
      title: "Client Support",
      subtitle: "Existing client assistance",
      description:
        "You're an existing client with a request or support query that needs immediate attention.",
      buttonText: "Access Client Support Hub",
      buttonClass: "bg-cyan-500 hover:bg-cyan-600",
      onClick: () => console.log("Client Support Clicked"),
    },
  ];
  return (
    <>
      {/* Let's Get You to the Right Team Section */}
      <section className="py-24 bg-gray-900/30">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl text-white mb-6">
              Let's Get You to the{" "}
              <span className="text-green-400">Right Team</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the pathway that best matches your needs, and we'll connect
              you with the right specialist
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contactCards.map((card, index) => (
              <Card
                key={index}
                className={`bg-gradient-to-br from-gray-900 to-black border-gray-800 ${card.borderHover} transition-all duration-300 group p-8`}
              >
                <CardContent className="p-0">
                  <div className="flex items-center space-x-4 mb-6">
                    <div
                      className={`w-14 h-14 rounded-xl flex items-center justify-center transition-colors ${card.iconWrapperClass}`}
                    >
                      {card.icon}
                    </div>
                    <div>
                      <h3 className="text-xl text-white group-hover:text-inherit transition-colors">
                        {card.title}
                      </h3>
                      <p className="text-sm text-gray-400">{card.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {card.description}
                  </p>
                  <Button
                    className={`w-full  text-white rounded-full ${card.buttonClass}`}
                    // onClick={card.onClick}
                  >
                    {card.buttonText}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
