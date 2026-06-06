"use client";

import Image from "next/image";
import { motion } from "motion/react";

export function Thesis() {
  return (
    <section
      id="thesis"
      className="relative overflow-hidden px-6 py-32 lg:px-10"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="relative overflow-hidden rounded-3xl shadow-soft"
        >
          <div className="relative h-[420px] lg:h-[560px]">
            <Image
              src="/crowd.jpg"
              alt="Crowd"
              fill
              className="object-cover grayscale"
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />

          <div className="absolute inset-0 flex items-end p-8 lg:p-16">
            <blockquote className="max-w-2xl font-display text-3xl font-bold lg:text-5xl">
              Everyone is moving.
              <br />
              <span className="text-muted-foreground">
                Very few know what they’re becoming known for.
              </span>
            </blockquote>
          </div>
        </motion.div>
      </div>
    </section>
  );
}