import { Card, CardContent } from "@/components/ui/card";
import { Brain, FileText, Workflow, CheckCircle2 } from "lucide-react";

const Solution = () => {
  return (
    <section id="solution" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Solution</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            TestWise automatically generates manual test cases in Azure DevOps by analyzing requirements from Microsoft Teams 
            using advanced NLP and ML. Once manual test cases are created, we generate automated Playwright tests using MCP, 
            with SharePoint and Figma integration on the roadmap.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="border-2 hover:border-primary/50 transition-all shadow-md hover:shadow-xl">
            <CardContent className="pt-6 text-center space-y-4">
              <div className="mx-auto w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-lg">AI-Powered Analysis</h3>
              <p className="text-sm text-muted-foreground">
                Advanced NLP extracts testable conditions from requirements across multiple sources
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-secondary/50 transition-all shadow-md hover:shadow-xl">
            <CardContent className="pt-6 text-center space-y-4">
              <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-secondary to-primary flex items-center justify-center">
                <FileText className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-lg">Auto-Generation</h3>
              <p className="text-sm text-muted-foreground">
                Creates detailed test cases and steps with risk assessment and dependency mapping
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-accent/50 transition-all shadow-md hover:shadow-xl">
            <CardContent className="pt-6 text-center space-y-4">
              <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center">
                <Workflow className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-lg">Automation Ready</h3>
              <p className="text-sm text-muted-foreground">
                Identifies automation candidates and recommends appropriate testing tools
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-success/50 transition-all shadow-md hover:shadow-xl">
            <CardContent className="pt-6 text-center space-y-4">
              <div className="mx-auto w-16 h-16 rounded-full bg-success flex items-center justify-center">
                <CheckCircle2 className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-lg">Complete Traceability</h3>
              <p className="text-sm text-muted-foreground">
                Every test case linked to source requirements for full audit trail
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="border-2 border-primary/20 shadow-xl bg-card">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <div className="w-2 h-8 bg-gradient-primary rounded-full"></div>
              Current Workflow
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold flex-shrink-0">
                  1
                </div>
                <p className="text-muted-foreground pt-1">
                  <strong className="text-foreground">User Initiates:</strong> User selects a work item and triggers the TestWise agent through Copilot Studio
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-secondary text-white flex items-center justify-center font-bold flex-shrink-0">
                  2
                </div>
                <p className="text-muted-foreground pt-1">
                  <strong className="text-foreground">AI Analysis:</strong> Agent captures requirements from Microsoft Teams conversations and analyzes context
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold flex-shrink-0">
                  3
                </div>
                <p className="text-muted-foreground pt-1">
                  <strong className="text-foreground">Manual Test Creation:</strong> Agent generates detailed manual test cases in Azure DevOps with steps and traceability
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-success text-white flex items-center justify-center font-bold flex-shrink-0">
                  4
                </div>
                <p className="text-muted-foreground pt-1">
                  <strong className="text-foreground">Automation Generation:</strong> From manual test cases, generate automated Playwright tests using MCP
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Solution;
