"use client";

import { Reveal } from "./reveal";

const problems = [
  "They attract the wrong audience",
  "They become known for the wrong things",
  "They struggle to turn attention into opportunities",
];

const solutions = [
  "What they should be known for",
  "What buyers actually care about",
  "Which conversations they should own",
  "How to build authority that compounds",
];

export function ProblemSolution() {
  return (
    <section id="how-it-works" className="bg-surface px-6 py-32 lg:px-10">
      <div className="mx-auto max-w-6xl">
        {/* Problem */}
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal>
            <p className="font-ui text-sm uppercase tracking-[0.3em] text-muted-foreground">
              The problem
            </p>
            <h2 className="text-gradient mt-6 font-display text-4xl font-bold leading-[1.02] tracking-tightest lg:text-6xl">
              Most founders create content.
            </h2>
            <p className="mt-6 max-w-md font-body text-lg text-muted-foreground">
              Very few intentionally build authority. The result is attention
              that never converts into trust — or demand.
            </p>
          </Reveal>

          <div className="flex flex-col justify-center gap-4">
            {problems.map((p, i) => (
              <Reveal key={p} delay={i * 0.1}>
                <div className="glass flex items-center gap-5 rounded-2xl px-6 py-6">
                  <span className="font-display text-sm font-bold text-silver">
                    0{i + 1}
                  </span>
                  <span className="font-body text-lg text-foreground">{p}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Solution */}
        <div className="mt-40">
          <Reveal className="max-w-2xl">
            <p className="font-ui text-sm uppercase tracking-[0.3em] text-muted-foreground">
              The solution
            </p>
            <h2 className="text-gradient mt-6 font-display text-4xl font-bold leading-[1.02] tracking-tightest lg:text-6xl">
              Narron helps founders discover what to own.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {solutions.map((s, i) => (
              <Reveal key={s} delay={i * 0.08}>
                <div className="group relative h-full overflow-hidden rounded-3xl bg-card p-8 shadow-card backdrop-blur-2xl transition-shadow duration-500 hover:shadow-soft">
                  <span className="font-display text-5xl font-bold text-silver-light">
                    {i + 1}
                  </span>
                  <p className="mt-6 font-display text-xl font-semibold tracking-tight text-foreground">
                    {s}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}