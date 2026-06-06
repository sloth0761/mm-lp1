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
    <section
      id="how-it-works"
      className="bg-surface px-6 py-24 lg:px-10"
    >
      <div className="mx-auto max-w-6xl">
        {/* Problem */}

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="font-ui text-sm uppercase tracking-[0.3em] text-muted-foreground">
              The Problem
            </p>

            <h2 className="text-gradient mt-6 font-display text-4xl font-bold leading-tight tracking-tightest lg:text-6xl">
              Most founders create content.
            </h2>

            <p className="mt-6 max-w-md text-lg text-muted-foreground">
              Very few intentionally build authority.
              The result is attention that never converts
              into trust or demand.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {problems.map((problem, index) => (
              <div
                key={problem}
                className="glass flex items-center gap-5 rounded-2xl px-6 py-6"
              >
                <span className="font-display text-sm font-bold text-silver">
                  0{index + 1}
                </span>

                <span className="text-lg">
                  {problem}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Solution */}

        <div className="mt-32">
          <p className="font-ui text-sm uppercase tracking-[0.3em] text-muted-foreground">
            The Solution
          </p>

          <h2 className="text-gradient mt-6 max-w-3xl font-display text-4xl font-bold leading-tight tracking-tightest lg:text-6xl">
            Narron helps founders discover what to own.
          </h2>

          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {solutions.map((solution, index) => (
              <div
                key={solution}
                className="rounded-3xl bg-card p-8 shadow-card backdrop-blur-xl"
              >
                <span className="font-display text-5xl font-bold text-silver-light">
                  {index + 1}
                </span>

                <p className="mt-6 font-display text-xl font-semibold">
                  {solution}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}