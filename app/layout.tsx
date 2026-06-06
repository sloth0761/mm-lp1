import type { Metadata } from "next";
import localFont from "next/font/local";
import { PHProvider } from "@/components/providers/posthog-provider";
import "./globals.css";

const satoshi = localFont({
  src: "fonts/Satoshi-Variable.woff2",
  variable: "--font-display",
  display: "swap",
});

const generalSans = localFont({
  src: "fonts/GeneralSans-Variable.woff2",
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Narron — Become The Obvious Choice In Your Market",
  description:
    "Founder positioning intelligence. Build authority, trust, and demand with the people who actually buy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${satoshi.variable} ${generalSans.variable} bg-white text-black dark:bg-black dark:text-white`}
    >
      <body className="min-h-full flex flex-col">
        <PHProvider>
          {children}
        </PHProvider>
      </body>
    </html>
  );
}