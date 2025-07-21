import { ArrowRight, Brain, TrendingUp, Users } from "lucide-react";

import React from "react";
import Link from "next/link";
import MotionWrapper from "../Animation/motionWrapper";

const icons = {
  users: Users,
  brain: Brain,
  "trending-up": TrendingUp,
};
const ServicePillar = ({ pillar: items }) => {
  const pillars = [
    {
      icon: Users,
      title: "Elite Talent",
      subtitle: "World-class professionals",
      description:
        "Handpicked experts who drive innovation and deliver exceptional results across every project.",
      color: "from-green-400 to-emerald-500",
      delay: 0.2,
    },
    {
      icon: Brain,
      title: "Intelligent Systems",
      subtitle: "AI-powered solutions",
      description:
        "Cutting-edge technology platforms that optimize performance and accelerate digital transformation.",
      color: "from-emerald-400 to-green-500",
      delay: 0.4,
    },
    {
      icon: TrendingUp,
      title: "Relentless Improvement",
      subtitle: "Continuous evolution",
      description:
        "Constant refinement and optimization to ensure sustained growth and competitive advantage.",
      color: "from-green-500 to-lime-400",
      delay: 0.6,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <MotionWrapper
      className="grid lg:grid-cols-3 gap-8 mb-16"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {items.map((pillar, index) => {
        const Icon = icons[pillar.icon] ?? Users;

        return (
          <MotionWrapper
            key={index}
            className="relative group"
            variants={itemVariants}
            // onHoverStart={() => setActiveCard(index)}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 h-full overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div
                  className={`h-full w-full bg-gradient-to-br ${pillars[index].color}`}
                ></div>
              </div>

              {/* Content */}
              <div className="relative z-10 space-y-6">
                <MotionWrapper
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${pillars[index].color} flex items-center justify-center`}
                  //   whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon className="w-8 h-8 text-black" />
                </MotionWrapper>

                <div>
                  <h3 className="text-white text-2xl mb-2">{pillar.title}</h3>
                  <p className="text-green-400 text-sm mb-4">
                    {pillar.subtitle}
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                {/* Interactive Elements */}
                <MotionWrapper
                  className="flex hover:cursor-pointer items-center space-x-2 text-green-400 opacity-10 group-hover:opacity-100 group-hover:text-green-300 transition-colors"
                  //   initial={{ opacity: 0 }}
                  //   whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link href={pillar.ctaLink}>
                    <span className="text-sm">Learn more</span>
                  </Link>
                  <ArrowRight className="w-4 h-4" />
                </MotionWrapper>
              </div>

              {/* Hover Effect */}
              <MotionWrapper
                className={`absolute inset-0 bg-gradient-to-br ${pillars[index].color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              />
            </div>

            {/* Glow Effect */}
            <MotionWrapper
              className={`absolute inset-0 bg-gradient-to-br ${pillar.color} opacity-0 group-hover:opacity-20 blur-xl rounded-2xl -z-10`}
              initial={{ scale: 0.8 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
          </MotionWrapper>
        );
      })}
    </MotionWrapper>
  );
};

export default ServicePillar;
