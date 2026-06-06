"use client";

import Image from "next/image";
import { motion } from "motion/react";

export function Thesis() {
  return (
    <section id="thesis" className="relative overflow-hidden px-6 py-32 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-3xl shadow-soft"
        >
          <div className="relative h-[420px] lg:h-[560px]">
            <Image
              src="/crowd.jpeg"
              alt="A blurred crowd in motion, representing the noise of an undifferentiated market"
              fill
              className="object-cover grayscale"
              loading="lazy"
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />

          <div className="absolute inset-0 flex items-end p-8 lg:p-16">
            <motion.blockquote
              initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-2xl font-display text-3xl font-bold leading-tight tracking-tightest text-foreground lg:text-5xl"
            >
              Everyone is moving.
              <br />
              <span className="text-muted-foreground">
                Very few know what they&rsquo;re becoming known for.
              </span>
            </motion.blockquote>
          </div>
        </motion.div>
      </div>
    </section>
  );
}