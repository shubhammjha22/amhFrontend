"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Define the testimonial type
// type Testimonial = {
//   id: number
//   quote: string
//   name: string
//   position: string
//   company: string
//   image: string
// }

// Sample testimonial data
const testimonials = [
  {
    id: 1,
    quote:
      "Outsourced gives us best tools, control, and confidence to elevate our business online. They feel like an extension of our leadership team, not just a service provider.",
    name: "Jane Smith",
    position: "CEO",
    company: "Tech Solutions",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 2,
    quote:
      "The team at Outsourced has transformed our digital presence. Their strategic approach and attention to detail have been invaluable to our growth.",
    name: "Michael Johnson",
    position: "Marketing Director",
    company: "Growth Enterprises",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 3,
    quote:
      "Working with Outsourced has been a game-changer for our business. Their expertise and dedication have helped us achieve remarkable results.",
    name: "Sarah Williams",
    position: "Founder",
    company: "Innovative Startups",
    image: "/placeholder.svg?height=400&width=400",
  },
];

export function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToPrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToSlide = (index) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Auto-advance slides
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     goToNext();
  //   }, 8000);
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <section
      className="relative w-full bg-[#010401] text-white  overflow-hidden"
      aria-labelledby="testimonial-heading"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="relative max-w-5xl mx-auto">
          <div
            className={cn(
              "flex transition-opacity duration-500",
              isAnimating ? "opacity-10" : "opacity-100"
            )}
          >
            <div className="flex justify-centeritems-center">
              <div className="md:col-span-2">
                <Avatar className="h-[32rem] w-[32rem] rounded-lg mx-auto z-0">
                  <AvatarImage
                    src={
                      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop&auto=format" ||
                      "/placeholder.svg"
                    }
                    alt={`${testimonials[currentIndex].name}, ${testimonials[currentIndex].position} at ${testimonials[currentIndex].company}`}
                    className="object-cover rounded-xl"
                  />
                  <AvatarFallback className="text-4xl">
                    {testimonials[currentIndex].name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
              </div>
              <div className="w-full relative h-full flex items-center justify-center flex-col ">
                <div className="md:col-span-5 w-[46rem] flex flex-col bg-[#0A1519] z-10 p-8 mt-16 -ml-[8rem] rounded-2xl">
                  <blockquote className="text-xl font-medium mb-6">
                    &ldquo;{testimonials[currentIndex].quote}&rdquo;
                  </blockquote>
                  <footer className="mt-auto">
                    <cite className="not-italic">
                      <div className="font-semibold text-sm">
                        {testimonials[currentIndex].name}
                      </div>
                      <div className="text-[#06DD72] text-sm">
                        {testimonials[currentIndex].position} at{" "}
                        {testimonials[currentIndex].company}
                      </div>
                    </cite>
                  </footer>
                </div>
                {/* Navigation controls */}
                <div className="flex justify-between w-full px-4 items-center mt-8">
                  <div className="flex space-x-2 items-center">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={cn(
                          "rounded-full transition-all",
                          index === currentIndex
                            ? "w-3 h-3 bg-[#06DD72]"
                            : "w-2 h-2 bg-[#D9D9D9]"
                        )}
                        aria-label={`Go to slide ${index + 1}`}
                        aria-current={index === currentIndex ? "true" : "false"}
                      />
                    ))}
                  </div>
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={goToPrev}
                      className="border-[#202633] border-[1px]  !bg-[#0A1519] hover:bg-gray-800 p-1 rounded-2xl "
                      aria-label="Previous testimonial"
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={goToNext}
                      className="border-[#202633] border-[1px]  !bg-[#0A1519] hover:bg-gray-800 p-1 rounded-2xl "
                      aria-label="Next testimonial"
                    >
                      <ChevronRight className="h-6 w-6" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
