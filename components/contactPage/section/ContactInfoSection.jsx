import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import React from "react";

export default function ContactInfoSection() {
  return (
    <>
      <section className="py-16 bg-gray-900/30">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Info Card */}
            <div className="relative">
              <Card className="bg-gradient-to-br from-gray-900 to-black border-gray-800 h-full hover:border-green-500/50 transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-2xl text-white mb-8">Get In Touch</h3>

                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-green-400" />
                      </div>
                      <div>
                        <h4 className="text-lg text-white mb-1">
                          Office Location
                        </h4>
                        <p className="text-gray-300">
                          7th Floor, Block A, Vishwa Business Park, Gerkar
                        </p>
                        <p className="text-gray-300">
                          Road Sector 50, Gurgaon Haryana 122018
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                        <Phone className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <h4 className="text-lg text-white mb-1">Call Us</h4>
                        <p className="text-gray-300">+1 (555) 123-4567</p>
                        <p className="text-sm text-gray-400">
                          Mon-Fri, 9am-6pm EST
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                        <Mail className="w-6 h-6 text-purple-400" />
                      </div>
                      <div>
                        <h4 className="text-lg text-white mb-1">
                          Send Us A Message
                        </h4>
                        <p className="text-gray-300">
                          hello@outscalepartners.com
                        </p>
                        <p className="text-sm text-gray-400">
                          We respond within 24 hours
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center">
                        <Clock className="w-6 h-6 text-orange-400" />
                      </div>
                      <div>
                        <h4 className="text-lg text-white mb-1">
                          Business Hours
                        </h4>
                        <p className="text-gray-300">
                          Monday - Friday: 9:00 AM - 6:00 PM EST
                        </p>
                        <p className="text-gray-300">
                          Saturday - Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Map Section */}
            <div className="relative">
              <Card className="h-full overflow-hidden bg-gray-800 border-gray-700">
                <div className="relative h-full min-h-[400px] bg-gradient-to-br from-gray-700 to-gray-800">
                  {/* Map placeholder - in a real app, you'd integrate with Google Maps or similar */}
                  {/* <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-16 h-16 text-green-400 mx-auto mb-4" />
                      <p className="text-white text-lg">Interactive Map</p>
                      <p className="text-gray-400">Gurgaon, Haryana, India</p>
                    </div>
                  </div> */}

                  {/* Map controls */}
                  {/* <div className="absolute top-4 right-4 space-y-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="bg-gray-900/90 hover:bg-gray-800 border-gray-600 text-gray-300"
                    >
                      View larger map
                    </Button>
                  </div> */}
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.5925765408956!2d77.04613707414262!3d28.461695691820527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19714814b3eb%3A0xe6fac571909e062d!2sGoogle%20Gurgaon%20-%20Signature%20Towers!5e0!3m2!1sen!2sin!4v1753688469874!5m2!1sen!2sin"
                    width="370"
                    height="100%"
                    allowFullScreen=""
                    loading="lazy"
                    className="w-full h-full"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                  {/* Location marker */}
                  {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-6 h-6 bg-green-500 rounded-full border-2 border-white shadow-lg animate-pulse"></div>
                  </div> */}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
