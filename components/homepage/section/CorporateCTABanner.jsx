"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, TrendingUp, Users } from "lucide-react";

import Image from "next/image";
import { Button } from "../../ui/button";
import Link from "next/link";
import { ROUTES } from "@/lib/utils";

export function CorporateCTABanner() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
        delayChildren: 0.3,
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

  const features = [
    {
      icon: CheckCircle,
      text: "End operational chaos",
    },
    {
      icon: TrendingUp,
      text: "Begin smart scaling",
    },
    {
      icon: Users,
      text: "Become your business multiplier",
    },
  ];

  return (
    <section className="relative py-20 bg-black overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="h-full w-full bg-[radial-gradient(circle_at_20%_30%,rgba(34,197,94,0.08),transparent_50%),radial-gradient(circle_at_80%_70%,rgba(59,130,246,0.06),transparent_50%)]"></div>
      </div>

      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-green-500/8 to-transparent rounded-full blur-3xl"
        animate={{ x: [0, 80, 0], y: [0, -40, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-l from-blue-500/6 to-transparent rounded-full blur-3xl"
        animate={{ x: [0, -50, 0], y: [0, 30, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div className="space-y-6" variants={itemVariants}>
              {/* Main Headlines */}
              <div className="space-y-2">
                <motion.h2
                  className="text-white text-4xl  leading-tight"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  We're not a vendor.
                </motion.h2>

                <motion.h3
                  className="text-white text-xl lg:text-2xl leading-tight"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  We're the multiplier your business{" "}
                  <span className="text-[#06DF73]">
                    {" "}
                    didn't know it needed.{" "}
                  </span>
                </motion.h3>
              </div>

              {/* Features List */}
              <motion.div className="space-y-4" variants={itemVariants}>
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    >
                      <motion.div
                        className="w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center"
                        whileHover={{ scale: 1.2 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Icon className="w-3 h-3 text-black" />
                      </motion.div>
                      <span className="text-gray-300 text-lg">
                        {feature.text}
                      </span>
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* CTA Text */}
              <motion.div className="space-y-4 pt-6" variants={itemVariants}>
                <motion.p
                  className="text-white font-semibold text-xl lg:text-3xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  This is where operational chaos ends and smart scale begins.
                </motion.p>

                <motion.p
                  className="text-[#06DF73] text-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  Ready to see where you stand?
                </motion.p>
              </motion.div>

              {/* CTA Button */}
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link href={ROUTES.BUSINESS_ASSESSMENT}>
                  <Button
                    className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-6 text-lg rounded-2xl shadow-lg shadow-green-500/25 border-0 group transition-all duration-300"
                    size="lg"
                  >
                    Take the Outscale Readiness Assessment
                    <motion.div
                      className="ml-3"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Image */}
            <motion.div className="relative" variants={itemVariants}>
              <motion.div
                className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-blue-500/5"></div>

                <div className="relative z-10">
                  <motion.div
                    className="aspect-[4/3] rounded-2xl overflow-hidden"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    <Image
                      src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                      alt="Corporate team collaboration and business growth"
                      width={600}
                      height={530}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  {/* Overlay Stats */}
                  <motion.div
                    className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md rounded-xl p-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                  >
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-green-400 text-xl">2x</div>
                        <div className="text-white text-sm">Revenue Growth</div>
                      </div>
                      <div>
                        <div className="text-blue-400 text-xl">85%</div>
                        <div className="text-white text-sm">Time Saved</div>
                      </div>
                      <div>
                        <div className="text-purple-400 text-xl">100%</div>
                        <div className="text-white text-sm">Satisfaction</div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Glassmorphism border glow */}
                <motion.div
                  className="absolute inset-0 rounded-3xl bg-gradient-to-r from-green-400/10 to-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
                  style={{ zIndex: -1 }}
                />
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg shadow-green-500/25"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <TrendingUp className="w-8 h-8 text-white" />
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/25"
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Users className="w-6 h-6 text-white" />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Decorative floating elements */}
      <motion.div
        className="absolute top-32 right-16 w-8 h-8 bg-white/10 rounded-full backdrop-blur-sm"
        animate={{ y: [0, -20, 0], opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-32 left-16 w-6 h-6 bg-green-400/20 rounded-full backdrop-blur-sm"
        animate={{ x: [0, 20, 0], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 1.8 }}
      />
    </section>
  );
}
