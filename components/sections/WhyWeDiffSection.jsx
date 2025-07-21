"use client";
import React from "react";
import { motion } from "framer-motion";
import { Globe, Zap, Gauge, Heart } from "lucide-react";
import Image from "next/image";

export function WhyWeDiffSection() {
  const differentiators = [
    {
      id: 1,
      title: "Global Talent. Local Impact.",
      description:
        "Our world-class teams are handpicked for brilliance, trained for agility, and driven by outcomes.",
      icon: Globe,
      color: "from-blue-400 to-cyan-500",
      bgGradient: "from-blue-500/20 to-cyan-500/20",
      backgroundImage:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
    },
    {
      id: 2,
      title: "Built for the Future.",
      description:
        "Smart automation, real-time analytics, and digital-first, AI-enabled delivery unlock efficiencies and insights at scale.",
      icon: Zap,
      color: "from-purple-400 to-violet-500",
      bgGradient: "from-purple-500/20 to-violet-500/20",
      backgroundImage:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=2032&q=80",
    },
    {
      id: 3,
      title: "Speed Meets Precision.",
      description: "We don't just help you grow. We engineer momentum.",
      icon: Gauge,
      color: "from-green-400 to-emerald-500",
      bgGradient: "from-green-500/20 to-emerald-500/20",
      backgroundImage:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    },
    {
      id: 4,
      title: "Your Business, Our Obsession.",
      description:
        "As true partners, we co-create solutions that elevate performance and cut through complexity.",
      icon: Heart,
      color: "from-pink-400 to-rose-500",
      bgGradient: "from-pink-500/20 to-rose-500/20",
      backgroundImage:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=2126&q=80",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
        delayChildren: 0.2,
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
    <section className="relative py-20 bg-black overflow-hidden mt-10">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="h-full w-full bg-[radial-gradient(circle_at_25%_25%,rgba(34,197,94,0.08),transparent_50%),radial-gradient(circle_at_75%_75%,rgba(168,85,247,0.06),transparent_50%),radial-gradient(circle_at_50%_10%,rgba(59,130,246,0.05),transparent_50%)]"></div>
      </div>

      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-green-500/8 to-transparent rounded-full blur-3xl"
        animate={{ x: [0, -80, 0], y: [0, 60, 0] }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-l from-purple-500/6 to-transparent rounded-full blur-3xl"
        animate={{ x: [0, 60, 0], y: [0, -40, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Header */}
          <motion.div
            className="text-center mb-16 max-w-5xl mx-auto"
            variants={itemVariants}
          >
            <h3 className="text-5xl font-bold text-white mb-4">
              Why We're <span className="text-[#06DF73]">Different</span>
            </h3>
            <motion.div
              className="w-64 h-1 bg-gradient-to-r from-[#22C55E] to-[#84CC16] mx-auto rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
          </motion.div>

          {/* Differentiators Cards with Background Images */}
          <motion.div className="mt-20" variants={itemVariants}>
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {differentiators.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.id}
                    className="group"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, y: -8 }}
                  >
                    <motion.div className="relative h-full bg-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/10 hover:border-green-500/30 transition-all duration-300 overflow-hidden min-h-[320px]">
                      {/* Background Image */}
                      <div className="absolute inset-0 rounded-3xl overflow-hidden">
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Image
                            width={400}
                            height={520}
                            src={item.backgroundImage}
                            alt={item.title}
                            className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-all duration-500"
                          />
                        </motion.div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30"></div>
                      </div>

                      {/* Background gradient overlay */}
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-br ${item.bgGradient} opacity-0 group-hover:opacity-60 transition-opacity duration-300`}
                        whileHover={{ opacity: 0.6 }}
                      />

                      {/* Decorative corner element */}
                      <motion.div
                        className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${item.color} opacity-[10%] group-hover:opacity-25 rounded-bl-full transition-all duration-300`}
                        whileHover={{ scale: 1.2, opacity: 0.25 }}
                        transition={{ duration: 0.3 }}
                      />

                      <div className="relative z-10 h-full flex flex-col">
                        {/* Icon */}
                        <div className="flex items-start justify-between mb-4">
                          <motion.div
                            className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-xl`}
                            whileHover={{
                              rotate: 10,
                              scale: 1.1,
                              boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                            }}
                            transition={{ duration: 0.3 }}
                            animate={{
                              boxShadow: [
                                "0 10px 20px rgba(0,0,0,0.1)",
                                "0 15px 30px rgba(0,0,0,0.2)",
                                "0 10px 20px rgba(0,0,0,0.1)",
                              ],
                            }}
                          >
                            <motion.div
                              animate={{ rotate: [0, 5, 0] }}
                              transition={{ duration: 4, repeat: Infinity }}
                            >
                              <Icon className="w-8 h-8 text-white" />
                            </motion.div>
                          </motion.div>
                        </div>

                        {/* Content aligned with bottom line */}
                        <div className="flex-grow flex flex-col justify-end">
                          <motion.div
                            className="space-y-3 mb-4"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{
                              duration: 0.5,
                              delay: index * 0.1 + 0.3,
                            }}
                          >
                            <motion.h4
                              className="text-white text-xl"
                              whileHover={{ x: 5 }}
                              transition={{ duration: 0.2 }}
                            >
                              {item.title}
                            </motion.h4>
                            <motion.p
                              className="text-gray-200 leading-relaxed"
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              transition={{
                                duration: 0.6,
                                delay: index * 0.1 + 0.5,
                              }}
                            >
                              {item.description}
                            </motion.p>
                          </motion.div>

                          {/* Bottom accent line aligned with text */}
                          <motion.div
                            className={`h-1 bg-gradient-to-r ${item.color} rounded-full transition-all duration-500`}
                            initial={{ width: 0 }}
                            whileInView={{ width: "25%" }}
                            whileHover={{ width: "100%" }}
                            transition={{ duration: 0.8 }}
                          />
                        </div>
                      </div>

                      {/* Enhanced glow effect */}
                      <motion.div
                        className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl`}
                        style={{ zIndex: -1 }}
                        whileHover={{
                          opacity: 0.15,
                          scale: 1.1,
                        }}
                        transition={{ duration: 0.3 }}
                      />

                      {/* Additional floating particles */}
                      <motion.div
                        className={`absolute top-1/4 right-1/4 w-2 h-2 bg-gradient-to-r ${item.color} rounded-full opacity-0 group-hover:opacity-60`}
                        animate={{
                          y: [0, -10, 0],
                          opacity: [0, 0.6, 0],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: index * 0.5,
                        }}
                      />
                      <motion.div
                        className={`absolute bottom-1/3 left-1/3 w-1 h-1 bg-gradient-to-r ${item.color} rounded-full opacity-0 group-hover:opacity-40`}
                        animate={{
                          x: [0, 15, 0],
                          opacity: [0, 0.4, 0],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          delay: index * 0.7,
                        }}
                      />
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced decorative floating elements */}
      <motion.div
        className="absolute top-40 right-20 w-6 h-6 bg-green-400/30 rounded-full backdrop-blur-sm"
        animate={{
          y: [0, -15, 0],
          opacity: [0.3, 0.8, 0.3],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-40 left-20 w-8 h-8 bg-green-400/25 rounded-full backdrop-blur-sm"
        animate={{
          x: [0, 20, 0],
          opacity: [0.4, 0.9, 0.4],
          rotate: [0, 180, 360],
        }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-1/3 left-10 w-4 h-4 bg-green-400/35 rounded-full backdrop-blur-sm"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.3, 0.7, 0.3],
          y: [0, -8, 0],
        }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-1/6 right-1/3 w-3 h-3 bg-green-400/25 rounded-full backdrop-blur-sm"
        animate={{
          rotate: [0, 360],
          opacity: [0.3, 0.7, 0.3],
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/6 left-1/3 w-5 h-5 bg-green-500/20 rounded-full backdrop-blur-sm"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.6, 0.2],
          x: [0, 10, 0],
        }}
        transition={{ duration: 9, repeat: Infinity }}
      />

      {/* Additional animated background elements */}
      <motion.div
        className="absolute top-3/4 right-1/4 w-7 h-7 bg-green-400/15 rounded-full backdrop-blur-sm"
        animate={{
          y: [0, -25, 0],
          x: [0, 15, 0],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-1/2 right-10 w-2 h-2 bg-green-500/40 rounded-full backdrop-blur-sm"
        animate={{
          scale: [1, 1.8, 1],
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </section>
  );
}
