"use client";

import { useEffect, useRef } from "react";
import mermaid from "mermaid";

export function SequenceDiagram() {
  const diagramRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize mermaid with TestWise theme colors
    mermaid.initialize({
      startOnLoad: true,
      theme: "base",
      themeVariables: {
        primaryColor: "#6C63FF", // Purple - matches TestWise UI
        primaryTextColor: "#333", // Dark text
        primaryBorderColor: "#4C9AFF", // Blue - matches connectors
        lineColor: "#666", // Medium gray for connections
        secondaryColor: "#C063FF", // Pink - matches AI Engine
        tertiaryColor: "#3DBE29", // Green - matches configuration
        background: "#ffffff", // White background
        mainBkg: "#ffffff", // White
        secondBkg: "#f8f9fa", // Light gray
        tertiaryBkg: "#6C63FF", // Purple accent
        actorBkg: "#f8f9fa", // Light background for actors
        actorBorder: "#333", // Dark borders for actors
        actorTextColor: "#333", // Dark text for actors
        actorLineColor: "#666", // Medium gray for actor lines
        signalColor: "#333", // Dark signal text
        signalTextColor: "#333", // Dark signal text
        labelBoxBkgColor: "#f8f9fa", // Light label background
        labelTextColor: "#333", // Dark label text
        loopTextColor: "#333", // Dark loop text
        noteBorderColor: "#4C9AFF", // Blue note borders
        noteBkgColor: "#e3f2fd", // Light blue note background
        noteTextColor: "#333", // Dark note text
      },
    });

    // Mermaid diagram definition - TestWise Sequence Flow
    const diagramDefinition = `
sequenceDiagram
    %% Components / Participants
    participant User as User Interface (Copilot Studio)
    participant Copilot as Copilot Orchestrator
    participant AI as AI Processing Service
    participant Teams as Data Connectors (Teams, Emails, Audio, Video)
    participant ADO as Azure DevOps Service
    participant ADOMCP as Azure DevOps MCP Component
    participant Config as Test Configuration Component
    participant PWMCP as Playwright MCP Component
    participant Pipeline as Build Pipeline Service

    %% Flow
    User->>Copilot: 1️⃣ Select Work Item
    Copilot->>AI: 2️⃣ Trigger AI Processing Service

    AI->>Teams: 3️⃣ Fetch Context Data<br/>(Requirements, Conversations, Attachments)
    Teams-->>AI: 4️⃣ Return Enriched Context

    Note over AI: **AI Processing**<br/>Performs NLP, Dependency Detection,<br/>and Risk Analysis
    AI->>ADO: 5️⃣ Create Manual Test Case Artifacts

    ADO-->>Copilot: 6️⃣ Provide Test Case References
    Copilot-->>User: 7️⃣ Display Generated Test Cases

    Note over Copilot,ADOMCP: **Automation Flow Initiated**

    User->>Copilot: 8️⃣ Trigger Automation Workflow
    Copilot->>ADOMCP: 9️⃣ Invoke Azure DevOps MCP Component

    ADOMCP->>ADO: 🔟 Retrieve Test Case Items
    ADO-->>ADOMCP: 1️⃣1️⃣ Return Test Case Descriptions

    Config->>PWMCP: 1️⃣2️⃣ Provide Runtime Configurations<br/>(Browser, Environment, Tags)
    ADOMCP->>PWMCP: 1️⃣3️⃣ Send Test Cases + Configurations

    PWMCP->>Pipeline: 1️⃣4️⃣ Generate and Execute Playwright Tests
    Pipeline-->>User: 1️⃣5️⃣ Return Test Execution Results
    `;

    // Render the diagram
    if (diagramRef.current) {
      diagramRef.current.innerHTML = "";
      const id = `mermaid-${Date.now()}`;
      mermaid.render(id, diagramDefinition).then((result) => {
        if (diagramRef.current) {
          diagramRef.current.innerHTML = result.svg;
        }
      });
    }
  }, []);

  return (
    <div className="w-full  mx-auto">
      <div className="bg-gradient-to-br from-background to-secondary/20 border border-border rounded-xl p-6 shadow-coffee-shadow">
        <div
          ref={diagramRef}
          className="w-full overflow-x-auto bg-background rounded-lg p-4 border"
          style={{ minHeight: "400px" }}
        />
        <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-3 text-xs">
          <div className="flex items-center gap-2 text-muted-foreground">
            <div className="w-3 h-3 bg-primary rounded-full"></div>
            <span>User Actions</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <div className="w-3 h-3 bg-secondary rounded-full"></div>
            <span>AI Processing</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <div className="w-3 h-3 bg-accent rounded-full"></div>
            <span>Test Generation</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
            <span>Data Flow</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span>Configuration</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
            <span>Test Execution</span>
          </div>
        </div>
      </div>
    </div>
  );
}
