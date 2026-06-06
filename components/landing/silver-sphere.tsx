"use client";

import { motion } from "motion/react";

interface Props {
  className?: string;
  size?: number;
  delay?: number;
}

export function SilverSphere({ className, size = 480, delay = 0 }: Props) {
  return (
    <motion.div
      aria-hidden
      className={`silver-sphere pointer-events-none absolute rounded-full ${className ?? ""}`}
      style={{ width: size, height: size }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{
        opacity: 0.55,
        scale: 1,
        y: [0, -24, 0],
      }}
      transition={{
        opacity: { duration: 2, delay },
        scale: { duration: 2, delay },
        y: {
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
          delay,
        },
      }}
    />
  );
}