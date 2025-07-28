import { Card } from "@/components/ui/card";

import { ArrowRight, CheckCircle2, Shield } from "lucide-react";
import Image from "next/image";
import React from "react";
import ContactForm from "./ContactForm";

export default function ReadyToConnect() {
  return (
    <>
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl text-white mb-6">
              Ready to <span className="text-green-400">Connect?</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Let's start the conversation. Tell us about your challenges and
              we'll show you how we can help.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Left Side - Contact Info & Image */}
            <div className="lg:col-span-2 space-y-8">
              {/* Contact Image */}
              <Card className="overflow-hidden bg-gradient-to-br from-gray-900 to-black border-gray-800">
                <div className="relative h-80">
                  <Image
                    height={320}
                    width={320}
                    src="https://images.unsplash.com/photo-1553484771-371a605b060b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Customer service representative with headset"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-2xl mb-2">Expert Support</h3>
                    <p className="text-white/90">
                      Our specialists are ready to help you succeed
                    </p>
                  </div>
                </div>
              </Card>

              {/* Contact Benefits */}
              <div className="space-y-6">
                <h3 className="text-2xl text-white">Why reach out?</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-green-400" />
                    </div>
                    <div>
                      <h4 className="text-lg text-white mb-1">
                        Free Consultation
                      </h4>
                      <p className="text-gray-400">
                        Get expert advice tailored to your specific needs
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="text-lg text-white mb-1">Fast Response</h4>
                      <p className="text-gray-400">
                        We respond to all inquiries within 24 hours
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-purple-500/20 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="text-lg text-white mb-1">
                        Custom Solutions
                      </h4>
                      <p className="text-gray-400">
                        Solutions designed specifically for your business
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
