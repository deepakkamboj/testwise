import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Circle, Target } from "lucide-react";

const Roadmap = () => {
  const phases = [
    {
      title: "Current State",
      status: "complete",
      icon: CheckCircle2,
      items: [
        "Requirements capture from Microsoft Teams",
        "Manual test case generation in Azure DevOps",
        "Playwright test automation using MCP",
        "Integration with Copilot Studio",
        "Automated test case creation from conversations",
      ],
    },
    {
      title: "Next Phase",
      status: "in-progress",
      icon: Circle,
      items: [
        "Enhanced Teams meeting transcript analysis",
        "Multi-work-item notifications for requirement changes",
        "Improved Playwright test generation with MCP",
        "Advanced test coverage analysis",
        "Enhanced risk and dependency detection",
      ],
    },
    {
      title: "Future Vision",
      status: "planned",
      icon: Target,
      items: [
        "Figma and SharePoint integration",
        "Autonomous, real-time test case updates",
        "Direct automation script execution",
        "Audio and Video integration to collect requirements",
        "Advanced analytics and reporting dashboard",
      ],
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "complete":
        return {
          badge: "bg-success text-white",
          icon: "text-success",
          border: "border-success/30",
        };
      case "in-progress":
        return {
          badge: "bg-primary text-white",
          icon: "text-primary",
          border: "border-primary/30",
        };
      case "planned":
        return {
          badge: "bg-accent text-white",
          icon: "text-accent",
          border: "border-accent/30",
        };
      default:
        return {
          badge: "bg-muted",
          icon: "text-muted-foreground",
          border: "border-muted",
        };
    }
  };

  return (
    <section id="roadmap" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Product Roadmap</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our journey from prototype to autonomous AI testing platform
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {phases.map((phase, index) => {
            const colors = getStatusColor(phase.status);
            return (
              <Card
                key={index}
                className={`border-2 ${colors.border} shadow-xl hover:shadow-2xl transition-all`}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <CardTitle className="text-2xl">{phase.title}</CardTitle>
                    <phase.icon className={`h-8 w-8 ${colors.icon}`} />
                  </div>
                  <Badge className={colors.badge}>
                    {phase.status === "complete"
                      ? "Completed"
                      : phase.status === "in-progress"
                      ? "In Progress"
                      : "Planned"}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {phase.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <div
                          className={`w-2 h-2 rounded-full ${colors.icon.replace(
                            "text-",
                            "bg-"
                          )} mt-2 flex-shrink-0`}
                        ></div>
                        <span className="text-sm text-muted-foreground">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card className="mt-12 border-2 border-primary/20 shadow-xl bg-card">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-4 text-center">
              Strategic Goals
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-4xl mb-2">🎯</div>
                <h4 className="font-semibold mb-2">Full Autonomy</h4>
                <p className="text-sm text-muted-foreground">
                  AI agent autonomously identifies and updates test cases in
                  real-time
                </p>
              </div>
              <div>
                <div className="text-4xl mb-2">🔗</div>
                <h4 className="font-semibold mb-2">Universal Integration</h4>
                <p className="text-sm text-muted-foreground">
                  Seamless connection to all enterprise collaboration and ALM
                  tools
                </p>
              </div>
              <div>
                <div className="text-4xl mb-2">⚡</div>
                <h4 className="font-semibold mb-2">End-to-End Automation</h4>
                <p className="text-sm text-muted-foreground">
                  From requirements to executed automated tests, fully AI-driven
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Roadmap;
