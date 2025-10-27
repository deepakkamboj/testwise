import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Technology = () => {
  const techStack = [
    {
      category: "AI & Machine Learning",
      items: [
        "Azure OpenAI",
        "NLP Models",
        "Risk Assessment ML",
        "Dependency Detection",
      ],
      color: "primary",
    },
    {
      category: "Integration Platforms",
      items: [
        "Microsoft Teams Connector",
        "Azure DevOps Connector",
        "Outlook Connector",
        "Microsoft Graph",
      ],
      color: "secondary",
    },
    {
      category: "Test Automation",
      items: [
        "Playwright",
        "MCP (Model Context Protocol)",
        "Azure DevOps Test Plans",
      ],
      color: "accent",
    },
    {
      category: "Planned Integrations",
      items: ["SharePoint", "Figma", "Audio/Video Processing"],
      color: "success",
    },
  ];

  return (
    <section id="technology" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Technology Stack</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Built on Microsoft's enterprise-grade platform with cutting-edge AI
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {techStack.map((stack, index) => (
            <Card
              key={index}
              className="border-2 hover:border-primary/30 transition-all shadow-md hover:shadow-xl"
            >
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <div
                    className={`w-3 h-3 rounded-full bg-${stack.color}`}
                  ></div>
                  {stack.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {stack.items.map((item, itemIndex) => (
                    <Badge
                      key={itemIndex}
                      variant="secondary"
                      className="text-sm px-3 py-1"
                    >
                      {item}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-8 border-2 border-primary/20 shadow-xl bg-gradient-to-br from-primary/5 to-secondary/5">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-4 text-center">
              Keywords & Search Terms
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              <Badge variant="outline" className="text-base px-4 py-2">
                AI Test Case Generator
              </Badge>
              <Badge variant="outline" className="text-base px-4 py-2">
                Requirement-Based Testing
              </Badge>
              <Badge variant="outline" className="text-base px-4 py-2">
                NLP for Software Testing
              </Badge>
              <Badge variant="outline" className="text-base px-4 py-2">
                Test Automation
              </Badge>
              <Badge variant="outline" className="text-base px-4 py-2">
                Azure DevOps Testing
              </Badge>
              <Badge variant="outline" className="text-base px-4 py-2">
                AI-Powered QA
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Technology;
