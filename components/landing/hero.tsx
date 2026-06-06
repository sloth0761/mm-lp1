"use client";

import { motion } from "motion/react";
import { WaitlistForm } from "./waitlist-form";
import posthog from "posthog-js";
import { useEffect } from "react";

export function AnalyticsEvents() {
  useEffect(() => {
    posthog.capture("landing_view");
  }, []);

  return null;
}

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6 py-24">
      <div className="mx-auto w-full max-w-5xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-sm uppercase tracking-[0.3em] text-muted-foreground"
        >
          Founder Positioning Intelligence
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-8 text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl lg:text-8xl"
        >
          Become The Obvious
          <br />
          Choice In Your Market.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mx-auto mt-8 max-w-2xl text-lg text-muted-foreground lg:text-xl"
        >
          Stop posting random content. Build authority, trust, and demand with
          the people who actually buy.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-12"
        >
          <WaitlistForm />
        </motion.div>

        <p className="mt-4 text-sm text-muted-foreground">
          Join founders getting early access.
        </p>
      </div>
    </section>
  );
}