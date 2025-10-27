import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bot, Zap, FileCheck } from "lucide-react";
import heroImage from "@/assets/hero-testing.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="pt-32 pb-20 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <Badge variant="secondary" className="w-fit">
              TestWise: AI-Driven Requirement-to-Test Automation
            </Badge>
            
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Turning Conversations into{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Coverage
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              AI for Smarter Testing. Automatically generate manual test cases in Azure DevOps from Teams requirements, 
              then create automated Playwright tests. Save thousands of hours annually and drive $100M+ in value.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                onClick={() => scrollToSection("solution")}
                className="bg-gradient-primary hover:opacity-90 transition-opacity shadow-lg"
              >
                Explore Solution
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("features")}
              >
                View Features
              </Button>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <Bot className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">AI-Powered</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-secondary" />
                <span className="text-sm font-medium">Automated</span>
              </div>
              <div className="flex items-center gap-2">
                <FileCheck className="h-5 w-5 text-success" />
                <span className="text-sm font-medium">Comprehensive</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="AI-powered testing automation interface"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
            <div className="absolute -top-6 -right-6 w-40 h-40 bg-accent/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
