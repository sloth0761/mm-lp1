import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { PHProvider } from "@/components/providers/posthog-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <PHProvider>
          {children}
        </PHProvider>
      </body>
    </html>
  );
}