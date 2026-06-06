export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-12 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-foreground" />
          <span className="font-display text-base font-bold tracking-tightest">
            Narron
          </span>
        </div>

        <p className="font-body text-sm text-muted-foreground">
          Founder positioning intelligence.
        </p>

        <p className="font-body text-sm text-muted-foreground">
          © {new Date().getFullYear()} Narron
        </p>
      </div>
    </footer>
  );
}