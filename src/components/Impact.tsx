import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Clock, Users, Star } from "lucide-react";

const Impact = () => {
  const metrics = [
    {
      icon: TrendingUp,
      value: "$100M+",
      label: "Annual Value",
      description: "Projected savings across ISD",
      color: "text-success",
      bgColor: "bg-success/10"
    },
    {
      icon: Clock,
      value: "8 hours",
      label: "Weekly Savings",
      description: "Per testing consultant (~700 in ISD)",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: Users,
      value: "4,000+",
      label: "Delivery Team Members",
      description: "Saving 2 hours per week each",
      color: "text-secondary",
      bgColor: "bg-secondary/10"
    },
    {
      icon: Star,
      value: "Better CSAT",
      label: "Quality Impact",
      description: "Fewer bugs, faster releases",
      color: "text-accent",
      bgColor: "bg-accent/10"
    }
  ];

  return (
    <section id="impact" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Business Impact</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transforming productivity and quality across Industry Solutions Delivery
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {metrics.map((metric, index) => (
            <Card key={index} className="border-2 hover:border-primary/30 transition-all shadow-lg hover:shadow-xl">
              <CardContent className="pt-6 text-center space-y-4">
                <div className={`mx-auto w-16 h-16 rounded-full ${metric.bgColor} flex items-center justify-center`}>
                  <metric.icon className={`h-8 w-8 ${metric.color}`} />
                </div>
                <div>
                  <div className="text-3xl font-bold mb-1">{metric.value}</div>
                  <div className="text-sm font-semibold text-foreground mb-2">{metric.label}</div>
                  <p className="text-xs text-muted-foreground">{metric.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="border-2 border-primary/20 shadow-xl bg-gradient-to-br from-card to-muted/20">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Additional Benefits</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center space-y-2">
                <div className="text-4xl mb-2">🚀</div>
                <h4 className="font-semibold">Faster Time-to-Market</h4>
                <p className="text-sm text-muted-foreground">
                  Accelerate release cycles with automated test generation
                </p>
              </div>
              <div className="text-center space-y-2">
                <div className="text-4xl mb-2">🎯</div>
                <h4 className="font-semibold">Higher Quality</h4>
                <p className="text-sm text-muted-foreground">
                  Deeper, broader test coverage minimizes production bugs
                </p>
              </div>
              <div className="text-center space-y-2">
                <div className="text-4xl mb-2">💡</div>
                <h4 className="font-semibold">Strategic Focus</h4>
                <p className="text-sm text-muted-foreground">
                  Free consultants for high-value strategic work
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Impact;
