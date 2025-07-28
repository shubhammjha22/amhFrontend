// "use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import ScrollIndicator from "../components/ScrollIndicator";

export default function HeroSection({ hero }) {
  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-[#0a1a0a] to-[#001a0a] relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 z-10 opacity-40">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
            animation: "grid-move 20s linear infinite",
          }}
        ></div>
      </div>

      {/* Network Connection Lines */}
      <svg
        className="absolute inset-0 -top-24 left-10 w-full h-full pointer-events-none"
        style={{ zIndex: 1 }}
      >
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22C55E" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#84CC16" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#10B981" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        <path
          d="M 100 200 Q 400 100 800 300"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          fill="none"
          opacity="0.6"
        />
        <path
          d="M 200 100 Q 600 400 1000 200"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          fill="none"
          opacity="0.4"
        />
        <path
          d="M 0 400 Q 300 200 600 500"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          fill="none"
          opacity="0.5"
        />
        <path
          d="M 400 0 Q 700 300 900 100"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          fill="none"
          opacity="0.5"
        />

        {/* Connection Nodes */}
        <circle cx="200" cy="300" r="4" fill="#22C55E" opacity="0.8">
          <animate
            attributeName="opacity"
            values="0.8;0.3;0.8"
            dur="3s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="600" cy="200" r="4" fill="#84CC16" opacity="0.8">
          <animate
            attributeName="opacity"
            values="0.3;0.8;0.3"
            dur="2.5s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="800" cy="400" r="4" fill="#10B981" opacity="0.8">
          <animate
            attributeName="opacity"
            values="0.8;0.3;0.8"
            dur="4s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>

      {/* Floating Geometric Shapes */}
      <div
        className="absolute left-24 -top-4 z-10 inset-0 pointer-events-none"
        style={{ zIndex: 2 }}
      >
        {/* Large Hexagon */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 opacity-20">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <polygon
              points="50,5 85,25 85,75 50,95 15,75 15,25"
              fill="none"
              stroke="#22C55E"
              strokeWidth="2"
              opacity="0.6"
            />
          </svg>
        </div>

        {/* Medium Rectangle */}
        <div className="absolute z-10 top-1/3 left-1/5 w-24 h-16 border-2 border-[#84CC16]/30 bg-[#22C55E]/10 backdrop-blur-sm rounded-lg opacity-60"></div>

        {/* Small Diamond */}
        <div className="absolute z-10 top-2/3 right-1/3 w-16 h-16 rotate-45 border-2 border-[#10B981]/40 bg-[#84CC16]/10 backdrop-blur-sm opacity-50"></div>

        {/* Floating Screens */}
        <div className="absolute z-10 top-1/2 left-1/4 w-20 h-14 bg-[#22C55E]/20 backdrop-blur-md border border-[#22C55E]/50 rounded-lg opacity-70">
          <div className="w-full h-2 bg-[#22C55E]/60 rounded-t-lg"></div>
          <div className="p-2 space-y-1">
            <div className="w-3/4 h-1 bg-[#84CC16]/60 rounded"></div>
            <div className="w-1/2 h-1 bg-[#84CC16]/40 rounded"></div>
            <div className="w-2/3 h-1 bg-[#84CC16]/60 rounded"></div>
          </div>
        </div>

        <div className="absolute z-10 top-1/3 left-64 w-20 h-14 bg-[#22C55E]/20 backdrop-blur-md border border-[#22C55E]/50 rounded-lg opacity-70">
          <div className="w-full h-2 bg-[#22C55E]/60 rounded-t-lg"></div>
          <div className="p-2 space-y-1">
            <div className="w-3/4 h-1 bg-[#84CC16]/60 rounded"></div>
            <div className="w-1/2 h-1 bg-[#84CC16]/40 rounded"></div>
            <div className="w-2/3 h-1 bg-[#84CC16]/60 rounded"></div>
          </div>
        </div>
      </div>

      {/* Ambient Glow Effects */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{ zIndex: 1 }}
      >
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-[#22C55E]/10 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute top-2/3 right-1/4 w-80 h-80 bg-[#84CC16]/10 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#10B981]/10 rounded-full blur-3xl opacity-40"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center min-h-screen px-12 md:px-20 lg:px-32">
        <div className="text-left z-10 max-w-5xl">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight">
            {hero.title}
            <br />
            <span className="bg-primaryBg  inline-block mt-4 bg-clip-text text-transparent">
              {hero.subtitle}
            </span>
          </h1>

          <Link href={hero.ctaLink}>
            <Button
              variant="outline"
              className="bg-white/10 backdrop-blur-sm border-textPrimary/60 text-textPrimary hover:bg-textPrimary/20 hover:text-textSecondary hover:border-textSecondary px-6 py-2 rounded-lg transition-all duration-300"
            >
              {hero.ctaText}
              <div className="absolute inset-0 bg-gradient-to-r from-[#4ADE80] to-[#A3E635] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>
          </Link>
        </div>
        <div className="absolute left-10 h-full w-full l">
          <iframe
            src="https://my.spline.design/particleaibrain-TYTJPC5ko213RqLBTWTTIG4g"
            frameBorder="0"
            className=" ml-[24rem] z-10 -mt-[4rem] w-full h-full inset-0 "
            allow="autoplay; fullscreen"
          />
        </div>
        {/* Scroll Indicator */}
      </div>
      <ScrollIndicator />
    </section>
  );
}
