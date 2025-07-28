"use client";
import { motion } from "framer-motion";

export default function ScrollIndicator() {
  return (
    <motion.div
      className="absolute bottom-8  w-full justify-center flex flex-col items-center space-y-4"
      animate={{ y: [0, -10, 0] }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <span className="text-white/70 text-sm tracking-wide">
        Scroll to explore
      </span>
      <div className="w-px h-12 bg-gradient-to-b from-[#22C55E] to-[#84CC16] animate-pulse" />
    </motion.div>
  );
}
