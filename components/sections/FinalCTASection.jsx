"use client";
import React from "react";
import { motion } from "framer-motion";

import { ArrowRight, Calculator, CheckCircle, Zap } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";

export function FinalCTASection() {
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
    <section className="relative min-h-screen py-20 bg-black overflow-hidden mt-20 flex items-center justify-center">
      {/* Background Image */}

      <div className="w-[90%] h-[30rem] relative my-auto mx-auto  border-[1px] border-[#4DFA00] rounded-[32px]">
        <div className="absolute w-full h-full mx-auto rounded-[32px] z-0 ">
          <Image
            src="/banner2.png"
            width={1200}
            height={720}
            alt="Professional working on laptop"
            className="w-full mx-auto h-full object-cover rounded-[32px]"
          />
        </div>
        <motion.div
          className="relative  w-full h-full  rounded-3xl overflow-hidden "
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Content */}
          <div className="relative z-20 p-12 flex items-center justify-center h-full ">
            <div className="grid  gap-12 justify-center items-center">
              {/* Left Content */}
              <motion.div
                className="space-y-6 mx-auto text-center "
                variants={itemVariants}
              >
                {/* Playful Headline */}
                <motion.div variants={itemVariants}>
                  <h2 className="text-white text-3xl lg:text-5xl font-semibold ">
                    <motion.span
                      className="block text-white mt-2"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                    >
                      Good companies{" "}
                      <span className="text-[#B9B9B9]">keep up.</span>
                    </motion.span>
                    <motion.span
                      className="block text-white mt-2"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                    >
                      Great companies{" "}
                      <span className="text-[#06DF73]">Outscale.</span>
                    </motion.span>
                  </h2>
                </motion.div>

                <motion.div
                  //   key={index}
                  className="flex items-start justify-center "
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1 * 0.1 }}
                >
                  <span className="text-[#E1E1E1] text-2xl ">
                    <span className="text-[#06DF73]">
                      {" "}
                      Let’s see where you stand.{" "}
                    </span>{" "}
                    Is your organization built to outscale?
                  </span>
                </motion.div>

                <Button className="bg-glass-overlay mx-auto  font-dm hover:!from-green-600 hover:bg-glass-overlay/30 hover:scale-105 transition duration-200 hover:!to-emerald-700 text-white text-sm lg:text-base px-10 py-6 rounded-2xl border-0">
                  <Calculator className="mr-3 w-6 h-6" />
                  Take the Outscale Readiness Assessment Test
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
