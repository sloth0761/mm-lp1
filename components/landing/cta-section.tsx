import { WaitlistForm } from "./waitlist-form";

export function CTASection() {
  return (
    <section
      id="access"
      className="px-6 py-32 lg:px-10"
    >
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-gradient font-display text-5xl font-bold">
          Become known for something that matters.
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">
          Join the waitlist and get early access to Narron.
        </p>

        <div className="mt-12">
          <WaitlistForm />
        </div>
      </div>
    </section>
  );
}