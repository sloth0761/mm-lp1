"use client";

import Link from "next/link";
import { motion } from "motion/react";

export function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
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
          {["Thesis", "How it works", "Access"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase().replace(/\s/g, "-")}`}
              className="font-ui text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item}
            </Link>
          ))}
        </nav>

        <Link
          href="#access"
          className="glass rounded-full px-5 py-2.5 font-ui text-sm font-medium text-foreground transition-all hover:shadow-soft"
        >
          Get Early Access
        </Link>
      </div>
    </motion.header>
  );
}