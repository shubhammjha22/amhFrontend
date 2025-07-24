import { Card } from "@/components/ui/card";
import {
  Users,
  Settings,
  TrendingUp,
  Plus,
  Equal,
  Zap,
  Puzzle,
  Brain,
} from "lucide-react";
import { Button } from "../../ui/button";
import MotionWrapper from "../../Animation/motionWrapper";

const icons = {
  users: Users,
  settings: Settings,
  "trending-up": TrendingUp,
};

const colorClasses = {
  green: "bg-green-600",
  blue: "bg-blue-600",
  emerald: "bg-emerald-600",
};

export default function FormulaSection({ formula }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3,
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

  const pillars = [
    {
      title: "Elite talent",
      icon: Users,
      color: "from-green-400 to-emerald-500",
    },
    {
      title: "Intelligent systems",
      icon: Brain,
      color: "from-emerald-400 to-green-500",
    },
    {
      title: "Relentless improvement",
      icon: TrendingUp,
      color: "from-green-500 to-lime-400",
    },
  ];

  return (
    <section className="bg-[#010401] text-white py-20 relative font-instrument">
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full bg-[linear-gradient(45deg,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(-45deg,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
      </div>

      <div className="w-[90%] px-2 mx-auto ">
        <div className="w-full ">
          <MotionWrapper
            className="grid lg:grid-cols-2 gap-8 justify-between  w-full items-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <MotionWrapper className="space-y-6 -mt-32" variants={itemVariants}>
              {/* Puzzle Icon and Title */}
              <div className="flex items-start space-x-4">
                <MotionWrapper
                  className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-400 via-yellow-400 to-red-400 rounded-lg flex items-center justify-center shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Puzzle className="w-8 h-8 text-white" />
                </MotionWrapper>
                <div>
                  <MotionWrapper
                    as="h2"
                    className="text-[#06DF73] text-3xl lg:text-4xl leading-tight mb-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2, once: true }}
                  >
                    Thinking about:
                  </MotionWrapper>
                  <MotionWrapper
                    as="h3"
                    className="text-white text-2xl "
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    How Outscale Partners Can Help?
                  </MotionWrapper>
                </div>
              </div>

              {/* Description */}
              <MotionWrapper className="space-y-6" variants={itemVariants}>
                <MotionWrapper
                  as="p"
                  className="text-[#D7D7D7] text-lg leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  {formula.description}
                </MotionWrapper>

                <MotionWrapper
                  as="p"
                  className="text-[#D7D7D7] text-lg max-w-lg leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  {formula.subtitle}
                </MotionWrapper>
              </MotionWrapper>
            </MotionWrapper>
            {/* Left Content */}
            {/* <div>
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-black font-bold text-sm">💡</span>
                </div>
                <span className="text-amber-400 font-medium">
                  Thinking about:
                </span>
              </div>
              <h2 className="text-2xl font-bold mb-4">
                How Outscale Partners Can Help?
              </h2>
              <p className="text-gray-300 mb-6">{formula.description}</p>
              <p className="text-gray-300">{formula.subtitle}</p>
            </div> */}

            {/* Right Formula */}

            {/* <div className="space-y-6">
              <h3 className="text-3xl font-bold text-center mb-8">
                {formula.title}
              </h3>

              <div className="space-y-4">
                {formula.items.map((item, index) => {
                  const Icon = icons[item.icon];
                  const colorClass = colorClasses[item.color];

                  return (
                    <div key={index}>
                      <Card className="bg-gray-900/50 border-gray-800 p-4 flex items-center space-x-4">
                        <div
                          className={`w-10 h-10 ${colorClass} rounded-full flex items-center justify-center`}
                        >
                          <Icon className="h-5 w-5 text-white" />
                        </div>
                        <span className="text-white font-medium">
                          {item.title}
                        </span>
                      </Card>

                      {index < formula.items.length - 1 && (
                        <div className="flex justify-center py-2">
                          <Plus className="h-6 w-6 text-gray-400" />
                        </div>
                      )}
                    </div>
                  );
                })}

                <div className="flex justify-center py-2">
                  <Equal className="h-6 w-6 text-gray-400" />
                </div>

                <div className="text-center">
                  <Button
                    variant={"outline"}
                    className="flex items-center mx-auto bg-[#071A0E] rounded-[40px] border-[1px] border-[#004F21] py-3 px-8 justify-center mb-6"
                  >
                    <Zap className="h-5 w-5 mr-2 text-[#06DF73]" />
                    <span className="text-[#06DF73] font-medium">Success</span>
                  </Button>
                </div>
              </div>
            </div> */}

            <MotionWrapper
              className="space-y-6"
              variants={itemVariants}
              viewport={{ once: true }}
            >
              {/* Formula Header */}
              <MotionWrapper
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h3 className="text-white text-2xl lg:text-3xl mb-2">
                  Our Formula is simple
                </h3>
                <MotionWrapper
                  className="w-44 h-1 bg-gradient-to-r from-[#22C55E] to-[#84CC16] mx-auto rounded-full"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                />
              </MotionWrapper>

              {/* Formula Pills */}
              <div className="space-y-6">
                {pillars.map((pillar, index) => {
                  const Icon = pillar.icon;
                  return (
                    <MotionWrapper
                      key={index}
                      className="group"
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                    >
                      <MotionWrapper
                        className="bg-[#0A151980]/50 border-[1.2px] border-[#202633] rounded-3xl p-6 shadow-greenGlow hover:shadow-xl transition-all duration-300 relative overflow-hidden"
                        whileHover={{ scale: 1.02, y: -5 }}
                        viewport={{ once: true }}
                      >
                        {/* Background gradient on hover */}
                        <MotionWrapper
                          viewport={{ once: true }}
                          className={`absolute inset-0 bg-gradient-to-r ${pillar.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                        />

                        <div className="relative z-10 flex items-center justify-center space-x-4">
                          <MotionWrapper
                            className={`w-12 h-12 rounded-full bg-gradient-to-br ${pillar.color} flex items-center justify-center shadow-lg`}
                            // whileHover={{ rotate: 360 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                          >
                            <Icon className="w-6 h-6 text-white" />
                          </MotionWrapper>
                          <span className="text-white text-xl lg:text-2xl text-center flex-1">
                            {pillar.title}
                          </span>
                        </div>
                      </MotionWrapper>
                    </MotionWrapper>
                  );
                })}
              </div>

              {/* Connection Lines */}
              <MotionWrapper
                className="flex flex-col items-center space-y-2 py-1"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1.4 }}
              >
                <div className="text-gray-400 text-3xl">+</div>
                <div className="w-px h-5 bg-gradient-to-b from-green-600 to-transparent"></div>
                <div className="text-gray-400 text-3xl">+</div>
                <div className="w-px h-5 bg-gradient-to-b from-green-600 to-transparent"></div>
                <div className="text-gray-400 text-3xl">=</div>
                <MotionWrapper
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  viewport={{ once: true }}
                >
                  <Button
                    variant={"outline"}
                    className="flex items-center mx-auto bg-[#071A0E] rounded-[40px] border-[1px] border-[#004F21] py-3 px-8 justify-center mb-6"
                  >
                    <Zap className="h-5 w-5 mr-2 text-[#06DF73]" />
                    <span className="text-[#06DF73] font-medium">Success</span>
                  </Button>
                </MotionWrapper>
              </MotionWrapper>
            </MotionWrapper>
            {/* </div> */}
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
}
