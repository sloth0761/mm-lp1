import { Navbar } from "@/components/landing/navbar";
import { Hero } from "@/components/landing/hero";
import { Thesis } from "@/components/landing/thesis";
import {ProblemSolution} from "@/components/landing/problem-solution";
import { CTASection } from "@/components/landing/cta-section";
import { Footer } from "@/components/landing/footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Thesis />
      <ProblemSolution />
      <CTASection />
      <Footer />
    </main>
  );
}