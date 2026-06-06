"use client";

import { SilverSphere } from "./silver-sphere";
import { Reveal } from "./reveal";
import { WaitlistForm } from "./waitlist-form";

export function CTASection() {
  return (
    <section id="access" className="relative overflow-hidden px-6 py-40 lg:px-10">
      <SilverSphere className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" size={620} />

      <div className="relative mx-auto max-w-3xl text-center">
        <Reveal>
          <h2 className="text-gradient font-display text-5xl font-bold leading-[0.98] tracking-tightest lg:text-7xl">
            Get Your Founder
            <br />
            Positioning Audit
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mx-auto mt-8 max-w-xl font-body text-lg text-muted-foreground">
            Discover what you should be known for — and how to build authority
            that compounds with the people who actually buy.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-12">
            <WaitlistForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}