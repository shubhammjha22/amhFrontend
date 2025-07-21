// components/Animation/MotionWrapper.tsx
"use client";

import { motion, MotionProps } from "framer-motion";
import { cn } from "@/lib/utils"; // adjust based on your project

export default function MotionWrapper({
  className,
  children,
  as = "div",
  ...rest
}) {
  const MotionTag = motion[as];

  return (
    <MotionTag className={cn(className)} {...rest}>
      {children}
    </MotionTag>
  );
}
