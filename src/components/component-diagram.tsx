import React from "react";
import {
  Bot,
  MessageSquare,
  Brain,
  FileText,
  Settings,
  Database,
  Code,
  Play,
  ArrowRight,
  Mail,
  Users,
  Mic,
  Video,
  FileSpreadsheet,
  Figma,
} from "lucide-react";

interface ComponentNode {
  id: string;
  title: string;
  subtitle?: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
  category:
    | "ui"
    | "datasource"
    | "processing"
    | "azuredevops"
    | "output"
    | "config";
}

const components: ComponentNode[] = [
  // User Interface Layer
  {
    id: "ui",
    title: "User Interface",
    subtitle: "Microsoft Copilot Studio",
    icon: <Bot className="w-6 h-6" />,
    color: "text-purple-600",
    bgColor: "bg-purple-100",
    category: "ui",
  },

  // Data Sources Layer
  {
    id: "teams",
    title: "Teams Integration",
    subtitle: "Teams Connector",
    icon: <Users className="w-5 h-5" />,
    color: "text-blue-600",
    bgColor: "bg-blue-100",
    category: "datasource",
  },
  {
    id: "emails",
    title: "Email Integration",
    subtitle: "Outlook Connector",
    icon: <Mail className="w-5 h-5" />,
    color: "text-blue-600",
    bgColor: "bg-blue-100",
    category: "datasource",
  },
  {
    id: "audio",
    title: "Audio Sources",
    subtitle: "Meeting Transcripts, Voice Notes",
    icon: <Mic className="w-5 h-5" />,
    color: "text-blue-600",
    bgColor: "bg-blue-100",
    category: "datasource",
  },
  {
    id: "video",
    title: "Video Sources",
    subtitle: "Recordings, Demos",
    icon: <Video className="w-5 h-5" />,
    color: "text-blue-600",
    bgColor: "bg-blue-100",
    category: "datasource",
  },
  {
    id: "sharepoint",
    title: "Future Sources",
    subtitle: "SharePoint, Figma Connectors",
    icon: <FileSpreadsheet className="w-5 h-5" />,
    color: "text-blue-600",
    bgColor: "bg-blue-100",
    category: "datasource",
  },

  // AI Processing Layer
  {
    id: "ai-engine",
    title: "AI Processing Engine",
    subtitle: "NLP • ML Models • Risk Analysis",
    icon: <Brain className="w-6 h-6" />,
    color: "text-pink-600",
    bgColor: "bg-pink-100",
    category: "processing",
  },

  // Azure DevOps Layer
  {
    id: "manual-tc",
    title: "Azure DevOps",
    subtitle: "Manual Test Cases",
    icon: <FileText className="w-6 h-6" />,
    color: "text-green-600",
    bgColor: "bg-green-100",
    category: "azuredevops",
  },

  // Configuration Layer
  {
    id: "ado-mcp",
    title: "Azure DevOps MCP",
    subtitle: "Test Case Descriptions",
    icon: <Settings className="w-6 h-6" />,
    color: "text-blue-600",
    bgColor: "bg-blue-100",
    category: "config",
  },
  {
    id: "test-config",
    title: "Test Configuration",
    subtitle: "URL, Browser, Env, Tags",
    icon: <Database className="w-6 h-6" />,
    color: "text-orange-600",
    bgColor: "bg-orange-100",
    category: "config",
  },

  // Output Layer
  {
    id: "playwright-mcp",
    title: "Playwright MCP",
    subtitle: "Test Generation",
    icon: <Code className="w-6 h-6" />,
    color: "text-indigo-600",
    bgColor: "bg-indigo-100",
    category: "output",
  },
  {
    id: "test-execution",
    title: "Test Execution",
    subtitle: "Build Pipeline",
    icon: <Play className="w-6 h-6" />,
    color: "text-pink-600",
    bgColor: "bg-pink-100",
    category: "output",
  },
];

interface ConnectionLine {
  from: string;
  to: string;
  label?: string;
  color: string;
}

const connections: ConnectionLine[] = [
  { from: "ui", to: "teams", color: "stroke-purple-400" },
  { from: "ui", to: "emails", color: "stroke-purple-400" },
  { from: "ui", to: "audio", color: "stroke-purple-400" },
  { from: "ui", to: "video", color: "stroke-purple-400" },
  { from: "ui", to: "sharepoint", color: "stroke-purple-400" },

  { from: "teams", to: "ai-engine", color: "stroke-blue-400" },
  { from: "emails", to: "ai-engine", color: "stroke-blue-400" },
  { from: "audio", to: "ai-engine", color: "stroke-blue-400" },
  { from: "video", to: "ai-engine", color: "stroke-blue-400" },
  { from: "sharepoint", to: "ai-engine", color: "stroke-blue-400" },

  {
    from: "ai-engine",
    to: "manual-tc",
    color: "stroke-pink-400",
    label: "Creates Test Cases",
  },
  {
    from: "manual-tc",
    to: "ado-mcp",
    color: "stroke-green-400",
    label: "Pulls Descriptions",
  },
  { from: "test-config", to: "playwright-mcp", color: "stroke-orange-400" },
  {
    from: "ado-mcp",
    to: "playwright-mcp",
    color: "stroke-blue-400",
    label: "Config + Descriptions",
  },
  {
    from: "playwright-mcp",
    to: "test-execution",
    color: "stroke-indigo-400",
    label: "Generated Tests",
  },
];

function ComponentCard({ component }: { component: ComponentNode }) {
  return (
    <div className="relative group">
      <div className="p-4 rounded-lg border-2 border-gray-200 bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
        <div
          className={`w-12 h-12 rounded-lg ${component.bgColor} flex items-center justify-center mb-3 mx-auto shadow-sm`}
        >
          <div className={component.color}>{component.icon}</div>
        </div>
        <h3 className="text-sm font-semibold text-center text-gray-800 mb-1">
          {component.title}
        </h3>
        {component.subtitle && (
          <p className="text-xs text-center text-gray-600">
            {component.subtitle}
          </p>
        )}
      </div>
    </div>
  );
}

export function ComponentDiagram() {
  const uiComponents = components.filter((c) => c.category === "ui");
  const dataSourceComponents = components.filter(
    (c) => c.category === "datasource"
  );
  const processingComponents = components.filter(
    (c) => c.category === "processing"
  );
  const azureDevOpsComponents = components.filter(
    (c) => c.category === "azuredevops"
  );
  const configComponents = components.filter((c) => c.category === "config");
  const outputComponents = components.filter((c) => c.category === "output");

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="space-y-8">
        {/* User Interface Layer */}
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center justify-center gap-2">
            <Bot className="w-5 h-5 text-purple-600" />
            User Interface
          </h3>
          <div className="flex justify-center">
            {uiComponents.map((component) => (
              <ComponentCard key={component.id} component={component} />
            ))}
          </div>
        </div>

        {/* Arrow Down */}
        <div className="flex justify-center">
          <ArrowRight className="w-6 h-6 text-red-500 rotate-90" />
        </div>

        {/* Data Sources Layer */}
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center justify-center gap-2">
            <MessageSquare className="w-5 h-5 text-blue-600" />
            Data Sources
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {dataSourceComponents.map((component) => (
              <ComponentCard key={component.id} component={component} />
            ))}
          </div>
        </div>

        {/* Arrow Down */}
        <div className="flex justify-center">
          <ArrowRight className="w-6 h-6 text-red-500 rotate-90" />
        </div>

        {/* AI Processing Layer */}
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center justify-center gap-2">
            <Brain className="w-5 h-5 text-pink-600" />
            AI Processing Engine
          </h3>
          <div className="flex justify-center">
            {processingComponents.map((component) => (
              <ComponentCard key={component.id} component={component} />
            ))}
          </div>
        </div>

        {/* Arrow Down */}
        <div className="flex justify-center">
          <ArrowRight className="w-6 h-6 text-red-500 rotate-90" />
        </div>

        {/* Azure DevOps Layer */}
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center justify-center gap-2">
            <FileText className="w-5 h-5 text-green-600" />
            Azure DevOps Test Cases
          </h3>
          <div className="flex justify-center">
            {azureDevOpsComponents.map((component) => (
              <ComponentCard key={component.id} component={component} />
            ))}
          </div>
        </div>

        {/* Arrow Down */}
        <div className="flex justify-center">
          <ArrowRight className="w-6 h-6 text-red-500 rotate-90" />
        </div>

        {/* Configuration Layer */}
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center justify-center gap-2">
            <Settings className="w-5 h-5 text-blue-600" />
            Configuration & MCP Integration
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {configComponents.map((component) => (
              <ComponentCard key={component.id} component={component} />
            ))}
          </div>
        </div>

        {/* Arrow Down */}
        <div className="flex justify-center">
          <ArrowRight className="w-6 h-6 text-red-500 rotate-90" />
        </div>

        {/* Output Layer */}
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center justify-center gap-2">
            <Play className="w-5 h-5 text-pink-600" />
            Test Generation & Execution
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {outputComponents.map((component) => (
              <ComponentCard key={component.id} component={component} />
            ))}
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="mt-8 pt-6 border-t border-gray-200">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div className="flex items-center gap-2 text-gray-600">
            <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
            <span>User Interface</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span>Data Sources</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
            <span>AI Processing</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span>Test Generation</span>
          </div>
        </div>
      </div>
    </div>
  );
}
