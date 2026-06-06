"use client";

import { motion } from "motion/react";
import { SilverSphere } from "./silver-sphere";
import posthog from "posthog-js";
import { useEffect } from "react";
import { section } from "motion/react-client";

export function AnalyticsEvents() {
  useEffect(() => {
    posthog.capture("landing_view");
  }, []);

  return null;
}

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-32 pb-20 lg:px-10">
      <SilverSphere className="-left-40 top-10" size={560} />
      <SilverSphere className="right-[-10rem] bottom-0" size={420} delay={1.2} />

      <div className="relative mx-auto w-full max-w-5xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-ui text-sm uppercase tracking-[0.3em] text-muted-foreground"
        >
          Founder Positioning Intelligence
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.3, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="text-gradient mt-8 font-display text-5xl font-bold leading-[0.95] tracking-tightest sm:text-6xl lg:text-8xl"
        >
          Become The Obvious
          <br />
          Choice In Your Market.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-8 max-w-2xl font-body text-lg leading-relaxed text-muted-foreground lg:text-xl"
        >
          Stop posting random content. Build authority, trust, and demand with
          the people who actually buy.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#access"
            className="rounded-full bg-foreground px-8 py-4 font-ui text-base font-medium text-primary-foreground transition-transform duration-500 hover:scale-[1.03]"
          >
            Get Early Access
          </a>
          <a
            href="#thesis"
            className="font-ui text-base text-muted-foreground transition-colors hover:text-foreground"
          >
            Read the thesis →
          </a>
        </motion.div>
      </div>
    </section>
  );
}