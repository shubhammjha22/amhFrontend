import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Users,
  Settings,
  TrendingUp,
  ArrowRight,
  Sparkle,
  Zap,
  Brain,
} from "lucide-react";
import ServicePillar from "../components/ServicePillar";
import { TestimonialSlider } from "../components/TestiomonialSlider";

const icons = {
  users: Users,
  brain: Settings,
  "trending-up": TrendingUp,
};

export default function TestimonialSection({ services }) {
  return (
    <section className="bg-[#010401] text-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center  mb-16">
          <Button
            variant={"outline"}
            className="flex items-center mx-auto bg-[#071A0E] rounded-[40px] border-[1px] border-[#004F21] py-3 px-8 justify-center mb-6"
          >
            <Zap className="h-5 w-5 mr-2 text-[#06DF73]" />
            <span className="text-[#06DF73] font-medium">Testimonial</span>
          </Button>
          <h2 className="text-4xl md:text-5xl font-medium mb-4">
            What Our Partners Say{" "}
            {/* <span className="text-[#00C373]">Meets Innovation</span> */}
          </h2>
          <p className="text-base text-[#D7D7D7] max-w-2xl mx-auto">
            It’s one thing to promise growth. It’s another to deliver it at
            scale, again and again. Here’s what leaders say about partnering
            with Outscale.
          </p>
        </div>
        <TestimonialSlider />
      </div>
    </section>
  );
}
