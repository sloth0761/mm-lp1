"use client";

import { motion } from "motion/react";

export function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <div className="glass flex items-center gap-3 rounded-full px-5 py-2.5">
          <span className="h-2 w-2 rounded-full bg-foreground" />
          <span className="font-display text-base font-bold tracking-tightest">
            Narron
          </span>
        </div>

        <nav className="hidden items-center gap-9 md:flex">
          <a href="#thesis">Thesis</a>
          <a href="#how-it-works">How it works</a>
          <a href="#access">Access</a>
        </nav>

        <a
          href="#access"
          className="glass rounded-full px-5 py-2.5"
        >
          Get Early Access
        </a>
      </div>
    </motion.header>
  );
}