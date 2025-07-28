"use client";
import React from "react";
import { motion } from "framer-motion";

import { ArrowRight, Calculator, CheckCircle, Zap } from "lucide-react";
import Image from "next/image";
import { Button } from "../../ui/button";
import Link from "next/link";
import { ROUTES } from "@/lib/utils";

export function CTABanner() {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section className="relative py-20 bg-black overflow-hidden">
      <div className="max-w-7xl  mx-auto px-6 lg:px-0">
        <motion.div
          className="relative bg-[#010401CC]/80  rounded-3xl overflow-hidden border border-gray-700/50 shadow-2xl"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/assessmentBanner.png"
              width={1200}
              height={720}
              alt="Professional working on laptop"
              className="w-full h-full object-contain opacity-80"
            />
            {/* Soft overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute inset-0 z-10">
            {/* Floating geometric shapes */}
            <motion.div
              className="absolute top-8 right-8 w-20 h-20 border border-green-400/20 rounded-full"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute bottom-12 left-12 w-12 h-12 bg-green-400/10 rounded-lg transform rotate-45"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div
              className="absolute top-1/2 right-1/4 w-6 h-6 bg-lime-400/20 rounded-full"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            />

            {/* Subtle grid pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="h-full w-full bg-[linear-gradient(rgba(34,197,94,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
            </div>
          </div>

          {/* Content */}
          <div className="relative z-20 p-12 lg:p-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <motion.div className="space-y-6" variants={itemVariants}>
                {/* Icon Badge */}
                <motion.div
                  className="inline-flex items-center space-x-2 "
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <Button
                    variant={"outline"}
                    className="flex items-center mx-auto bg-[#071A0E] hover:bg-[#071A0E] rounded-[40px] border-[1px] border-[#004F21] py-3 px-8 justify-center mb-6"
                  >
                    <Zap className="h-5 w-5 mr-2 text-[#06DF73]" />
                    <span className="text-[#06DF73] font-medium">
                      Accessment Ready
                    </span>
                  </Button>
                </motion.div>

                {/* Playful Headline */}
                <motion.div variants={itemVariants}>
                  <h2 className="text-white text-3xl lg:text-4xl leading-tight">
                    <motion.span
                      className="block text-gray-200"
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      Confident in Your Operations?
                    </motion.span>

                    <motion.span
                      className="block text-green-400 mt-2"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                    >
                      Let's Test It. 🎯
                    </motion.span>
                  </h2>
                </motion.div>

                {/* Supporting Text */}
                <motion.p
                  className="text-gray-300 text-base leading-relaxed"
                  variants={itemVariants}
                >
                  Take the Assessment to find out if you’re built to scale.
                </motion.p>
                <motion.p
                  className="text-gray-300 text-base leading-relaxed"
                  variants={itemVariants}
                >
                  Discover where your organization stands and unlock actionable
                  insights to drive meaningful transformation. Our comprehensive
                  assessment takes just 5 minutes and provides personalized
                  recommendations.
                </motion.p>

                {/* Feature List */}
                <motion.p
                  className="text-gray-300 text-base leading-relaxed"
                  variants={itemVariants}
                >
                  Get your Operational Health Score in minutes!
                </motion.p>
                <motion.div className="space-y-3" variants={itemVariants}>
                  {[
                    "5-minute quick assessment",
                    "Personalized recommendations",
                    "Instant results & action plan",
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                    >
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Right Content - CTA Button */}
              <motion.div
                className="flex flex-col items-center lg:items-end space-y-6"
                variants={itemVariants}
              >
                {/* Main CTA Button */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                >
                  <Link href={ROUTES.BUSINESS_ASSESSMENT}>
                    <Button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-black font-bold text-lg px-10 py-6 rounded-2xl shadow-lg shadow-green-500/25 border-0">
                      <Calculator className="mr-3 w-6 h-6" />
                      Take Readiness Assessment Test
                      <motion.div
                        className="ml-3"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ArrowRight className="w-6 h-6" />
                      </motion.div>
                    </Button>
                  </Link>
                </motion.div>

                {/* Supporting Info */}
                <motion.div
                  className="text-center space-y-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                >
                  <p className="text-gray-400 text-sm mr-2">
                    ✨ No email required • Instant results
                  </p>
                  {/* <div className="flex items-center justify-center lg:justify-end space-x-2">
                    <div className="flex -space-x-2">
                      {[1, 2, 3, 4].map((i) => (
                        <div
                          key={i}
                          className="w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full border-2 border-black flex items-center justify-center"
                        >
                          <span className="text-black text-xs">👤</span>
                        </div>
                      ))}
                    </div>
                    <span className="text-gray-400 text-sm">
                      2,500+ assessments completed
                    </span>
                  </div> */}
                </motion.div>

                {/* Decorative Element */}
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 1.6 }}
                >
                  <div className="w-32 h-32 relative">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-emerald-500/20 rounded-full"
                      animate={{ rotate: [0, 360] }}
                      transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                    <motion.div
                      className="absolute inset-4 bg-gradient-to-br from-green-500/30 to-emerald-600/30 rounded-full"
                      animate={{ rotate: [360, 0] }}
                      transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                    <div className="absolute inset-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                      <Calculator className="w-8 h-8 text-black" />
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Bottom Accent Line */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 1.8 }}
          />
        </motion.div>
      </div>
    </section>
  );
}
