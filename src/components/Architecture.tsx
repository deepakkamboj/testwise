import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { WorkflowTestWisePipeline } from "./workflow";
import { SequenceDiagram } from "./sequence-diagram";
import { ComponentDiagram } from "./component-diagram";

const Architecture = () => {
  const [isWorkflowVisible, setIsWorkflowVisible] = useState(true);

  return (
    <section id="architecture" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Interactive Component Workflow */}
        <div className="mb-20">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-3">Interactive Workflow</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Watch the animated flow of data through TestWise components with
              real-time state indicators
            </p>
          </div>
          <Card className="border-2 no-shadow">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-2xl">
                    Live Component Workflow
                  </CardTitle>
                  <p className="text-muted-foreground mt-2">
                    Interactive animation showing data flow, processing states,
                    and component interactions
                  </p>
                </div>
                <button
                  onClick={() => setIsWorkflowVisible(false)}
                  onMouseUp={() =>
                    setTimeout(() => setIsWorkflowVisible(true), 100)
                  }
                  className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200 text-sm font-medium"
                >
                  ↻ Restart Animation
                </button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="bg-muted/50 rounded-lg p-8 overflow-x-auto">
                <WorkflowTestWisePipeline isVisible={isWorkflowVisible} />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Component Architecture Overview */}
        <div className="mb-20">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-3">Solution Architecture</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore the modular components that make up TestWise's intelligent
              testing ecosystem
            </p>
          </div>
          <Card className="border-2 no-shadow">
            <CardContent className="p-8">
              <ComponentDiagram />
            </CardContent>
          </Card>
        </div>

        {/* Sequence Diagram Section */}
        <div className="mb-20">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-3">Process Flow Sequence</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Step-by-step sequence diagram showing the complete TestWise
              workflow from user input to test execution. Detailed flow showing
              how user interactions trigger AI processing, test case creation,
              and automated test execution
            </p>
          </div>

          <div className="p-8 overflow-x-auto">
            <SequenceDiagram />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Architecture;
