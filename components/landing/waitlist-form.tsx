"use client";

import { useState } from "react";
import posthog from "posthog-js";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    if (!email.trim()) return;

    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "Failed to join waitlist"
        );
      }

      setSuccess(true);
      setEmail("");

      posthog.identify(email, {
        email,
      });

      posthog.capture("waitlist_joined");
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  }

  if (success) {
    return (
      <div className="glass mx-auto max-w-xl rounded-3xl p-6 text-center">
        <p className="font-display text-xl font-semibold">
          You're on the list.
        </p>

        <p className="mt-2 text-sm text-muted-foreground">
          We'll let you know when early access opens.
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-xl">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 sm:flex-row"
      >
        <input
          type="email"
          required
          placeholder="Enter your email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          disabled={loading}
          className="glass h-14 flex-1 rounded-full px-6 outline-none"
        />

        <button
          type="submit"
          disabled={loading}
          className="h-14 rounded-full bg-foreground px-8 font-ui text-primary-foreground transition-transform duration-300 hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading
            ? "Joining..."
            : "Get Early Access"}
        </button>
      </form>

      {error && (
        <p className="mt-4 text-center text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}