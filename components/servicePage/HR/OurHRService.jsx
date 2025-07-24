import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function OurHRService() {
  const hrServices = [
    {
      id: "recruitment",
      title: "Talent Acquisition & Onboarding",
      description:
        "AI-powered recruitment processes and seamless digital onboarding experiences",
      image:
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      highlights: [
        "90% faster onboarding",
        "AI candidate matching",
        "Digital workflows",
      ],
    },
    {
      id: "analytics",
      title: "People Analytics & Insights",
      description:
        "Real-time dashboards and predictive analytics for workforce optimization",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      highlights: [
        "Predictive modeling",
        "Real-time dashboards",
        "Custom reporting",
      ],
    },
    {
      id: "engagement",
      title: "Employee Experience",
      description:
        "Culture measurement and engagement programs that drive retention",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      highlights: [
        "40% reduction in turnover",
        "Pulse surveys",
        "Recognition programs",
      ],
    },
    {
      id: "payroll",
      title: "Payroll & Compliance",
      description:
        "Automated payroll processing with 98.5% accuracy and full compliance",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      highlights: [
        "98.5% accuracy",
        "Automated compliance",
        "Multi-country support",
      ],
    },
  ];
  return (
    <>
      {/* Services Section - Magazine Style Layout */}
      <section className="py-32 bg-black">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl text-white mb-8">
              Our <span className="text-green-400">HR Services</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive solutions designed to transform your workforce
              management
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {hrServices.map((service, index) => (
              <Card
                key={service.id}
                className="bg-gray-900/50 border-gray-800 hover:border-green-500/30 transition-all duration-500 group overflow-hidden"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    height={256}
                    width={256}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                </div>
                <CardContent className="p-8">
                  <h3 className="text-2xl text-white mb-4 group-hover:text-green-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-3">
                    {service.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span className="text-gray-400">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
