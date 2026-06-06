"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        y: 28,
        filter: "blur(8px)",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      }}
      viewport={{ once: true }}
      transition={{
        duration: 1,
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}