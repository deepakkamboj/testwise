import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import Solution from "@/components/Solution";
import Features from "@/components/Features";
import Impact from "@/components/Impact";
import Architecture from "@/components/Architecture";
import Technology from "@/components/Technology";
import Roadmap from "@/components/Roadmap";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <ProblemSolution />
      <Solution />
      <Features />
      <Impact />
      <Architecture />
      <Technology />
      <Roadmap />
      <Footer />
    </div>
  );
};

export default Index;
