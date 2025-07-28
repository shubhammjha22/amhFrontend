import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import React from "react";

export default function ReadyToJoin() {
  return (
    <section className="py-24 bg-gradient-to-r from-green-900/20 to-green-800/20 border-y border-green-500/20">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-5xl text-white mb-6">
            Ready to Join <span className="text-green-400">Our Team?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Don't see the perfect role? We're always looking for exceptional
            talent. Send us your resume and let's start a conversation.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button className="bg-green-500 hover:bg-green-600 text-black px-12 py-4 rounded-full text-lg transition-all duration-200 hover:scale-105 group">
              Submit General Application
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black px-12 py-4 rounded-full text-lg transition-all duration-200"
              // onClick={onBack}
            >
              Contact Our Team
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
