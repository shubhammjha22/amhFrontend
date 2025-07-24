import { Button } from "../../ui/button";
import { Card, CardContent } from "../../ui/card";
import { ArrowRight, Phone, Mail, Play } from "lucide-react";
import Image from "next/image";

export function HumanResourceHeader() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section - Asymmetrical Split Layout */}
      <section className="relative min-h-screen bg-[#0D542B]/30 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/10 via-black to-green-900/5"></div>

        <div className="relative z-10 container mx-auto px-6 py-32">
          <div className="grid lg:grid-cols-12 gap-16 items-center min-h-[80vh]">
            {/* Content - 7 columns */}
            <div className="lg:col-span-7 space-y-10">
              <div className="inline-flex items-center space-x-2 bg-green-500/10 border border-green-500/20 rounded-full px-6 py-3">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-green-400">
                  Human Resources Excellence
                </span>
              </div>

              <h1 className="text-6xl lg:text-7xl xl:text-8xl leading-[0.9] tracking-tight">
                Empowering
                <br />
                <span className="text-green-400">Workforces.</span>
                <br />
                Transforming
                <br />
                <span className="text-gray-400">Outcomes.</span>
              </h1>

              <p className="text-2xl text-gray-300 leading-relaxed max-w-2xl">
                From talent acquisition to advanced analytics, our HR solutions
                are engineered to drive measurable workforce impact.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 pt-8">
                <Button
                  className="bg-green-500 hover:bg-green-600 text-black px-10 py-4 rounded-full text-lg transition-all duration-200 hover:scale-105 group flex items-center"
                  //   onClick={onBack}
                >
                  Explore Our HR Capabilities
                  <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  variant="outline"
                  className="border-gray-600 text-gray-300 hover:bg-white hover:text-black px-10 py-4 rounded-full text-lg transition-all duration-200"
                  //   onClick={onBack}
                >
                  <Play className="w-5 h-5 mr-3" />
                  Watch Demo
                </Button>
              </div>
            </div>

            {/* Visual - 5 columns */}
            <div className="lg:col-span-5 relative">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-3xl blur-3xl"></div>
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Modern HR team collaboration"
                  height={600}
                  width={300}
                  className="relative z-10 w-full h-[600px] object-cover rounded-3xl border border-gray-800"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Contact Widget */}
      <div className="fixed bottom-8 right-8 z-50">
        <Card className="bg-gray-900/95 backdrop-blur-sm border-gray-700 shadow-2xl max-w-sm">
          <CardContent className="p-6">
            <h3 className="text-white mb-4">
              Ready to optimize your workforce?
            </h3>
            <div className="flex flex-col space-y-3">
              <Button className="bg-green-500 hover:bg-green-600 text-black px-6 py-2 rounded-full flex items-center text-sm">
                <Phone className="w-4 h-4 mr-2" />
                Request Consultation
              </Button>
              <Button
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-white hover:text-black px-6 py-2 rounded-full flex items-center text-sm"
              >
                <Mail className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
