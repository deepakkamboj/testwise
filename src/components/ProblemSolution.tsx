import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, Target } from "lucide-react";

const ProblemSolution = () => {
  return (
    <section id="problem" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-2 border-destructive/20 hover:border-destructive/40 transition-colors shadow-lg">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-3 bg-destructive/10 rounded-lg">
                  <AlertCircle className="h-6 w-6 text-destructive" />
                </div>
                <CardTitle className="text-2xl">The Problem</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex gap-3">
                  <span className="text-destructive font-bold">•</span>
                  <p className="text-muted-foreground">
                    Manual test case creation is time-consuming and error-prone, draining consultant productivity
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="text-destructive font-bold">•</span>
                  <p className="text-muted-foreground">
                    Requirements scattered across Teams, SharePoint, Figma, and other tools make it difficult to maintain comprehensive coverage
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="text-destructive font-bold">•</span>
                  <p className="text-muted-foreground">
                    Incomplete test coverage leads to production bugs, rework, and reduced customer satisfaction
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="text-destructive font-bold">•</span>
                  <p className="text-muted-foreground">
                    Testing teams struggle to keep pace with agile delivery cycles and changing requirements
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-success/20 hover:border-success/40 transition-colors shadow-lg">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-3 bg-success/10 rounded-lg">
                  <Target className="h-6 w-6 text-success" />
                </div>
                <CardTitle className="text-2xl">The Opportunity</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex gap-3">
                  <span className="text-success font-bold">•</span>
                  <p className="text-muted-foreground">
                    AI-powered automation can generate comprehensive test cases in seconds, freeing consultants for higher-value work
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="text-success font-bold">•</span>
                  <p className="text-muted-foreground">
                    Multi-source integration ensures complete requirements coverage with automatic dependency detection
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="text-success font-bold">•</span>
                  <p className="text-muted-foreground">
                    Automated test case generation can save 8 hours/week per testing consultant, driving $100M+ annual value
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="text-success font-bold">•</span>
                  <p className="text-muted-foreground">
                    Real-time updates and traceability improve quality, reduce production bugs, and accelerate delivery cycles
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
