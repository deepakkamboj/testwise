import React, { useState, useEffect, useRef } from "react";
import { AnimatedBeam } from "./animated-beam";
import {
  MicrosoftCopilotLogo,
  AzureDevOpsLogo,
  PlaywrightLogo,
  TeamsLogo,
  AIProcessingLogo,
  ConfigurationLogo,
} from "./logos";
import {
  Bot,
  Database,
  Settings,
  Code,
  Play,
  MessageSquare,
  Brain,
  FileText,
} from "lucide-react";

interface WorkflowCodeExampleProps {
  isVisible: boolean;
}

// Component states for interactive feedback
type ComponentState = "idle" | "loading" | "success" | "error";

interface ComponentStates {
  dataConnectors: ComponentState;
  aiEngine: ComponentState;
  manualTestCases: ComponentState;
  azureDevOpsMCP: ComponentState;
  testConfig: ComponentState;
  playwrightMCP: ComponentState;
  testExecution: ComponentState;
}

export function WorkflowTestWisePipeline({
  isVisible,
}: WorkflowCodeExampleProps) {
  const [animationStep, setAnimationStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentProcessing, setCurrentProcessing] = useState<string | null>(
    null
  );

  // State management for component states
  const [componentStates, setComponentStates] = useState<ComponentStates>({
    dataConnectors: "idle",
    aiEngine: "idle",
    manualTestCases: "idle",
    azureDevOpsMCP: "idle",
    testConfig: "idle",
    playwrightMCP: "idle",
    testExecution: "idle",
  });

  // Color scheme for different stages
  const stageColors = {
    purple: {
      border: "border-purple-300",
      text: "text-purple-700",
      bg: "bg-purple-50",
      beam: "#6C63FF",
    },
    blue: {
      border: "border-blue-300",
      text: "text-blue-700",
      bg: "bg-blue-50",
      beam: "#4C9AFF",
    },
    green: {
      border: "border-green-300",
      text: "text-green-700",
      bg: "bg-green-50",
      beam: "#3DBE29",
    },
    pink: {
      border: "border-pink-300",
      text: "text-pink-700",
      bg: "bg-pink-50",
      beam: "#C063FF",
    },
  };

  // Helper function to get state icon
  const getStateIcon = (state: ComponentState, className = "w-4 h-4") => {
    switch (state) {
      case "loading":
        return (
          <div
            className={`${className} animate-spin border-2 border-blue-500 border-t-transparent rounded-full`}
          />
        );
      case "success":
        return (
          <div
            className={`${className} bg-green-500 rounded-full flex items-center justify-center`}
          >
            <div className="w-2 h-2 bg-white rounded-full" />
          </div>
        );
      case "error":
        return (
          <div
            className={`${className} bg-red-500 rounded-full flex items-center justify-center`}
          >
            <div className="w-2 h-2 bg-white" />
          </div>
        );
      default:
        return null;
    }
  };

  // Helper function to update component state
  const updateComponentState = (
    component: keyof ComponentStates,
    state: ComponentState
  ) => {
    setComponentStates((prev) => ({
      ...prev,
      [component]: state,
    }));
  };

  const containerRef = useRef<HTMLDivElement>(null);
  const diagramRef = useRef<HTMLDivElement>(null);

  // Refs for workflow components
  const userInterfaceRef = useRef<HTMLDivElement>(null);
  const dataConnectorsRef = useRef<HTMLDivElement>(null);
  const aiEngineRef = useRef<HTMLDivElement>(null);
  const manualTestCasesRef = useRef<HTMLDivElement>(null);
  const azureDevOpsMCPRef = useRef<HTMLDivElement>(null);
  const testConfigRef = useRef<HTMLDivElement>(null);
  const playwrightMCPRef = useRef<HTMLDivElement>(null);
  const testExecutionRef = useRef<HTMLDivElement>(null);

  // Animation steps
  const totalSteps = 8;

  const startAnimation = React.useCallback(() => {
    setAnimationStep(0);
    setIsAnimating(true);
    setCurrentProcessing(null);

    // Reset all component states
    setComponentStates({
      dataConnectors: "idle",
      aiEngine: "idle",
      manualTestCases: "idle",
      azureDevOpsMCP: "idle",
      testConfig: "idle",
      playwrightMCP: "idle",
      testExecution: "idle",
    });

    const stepDurations = [
      2000, // Step 1: User Interface to Data Connectors
      2000, // Step 2: Data Connectors to AI Engine
      2000, // Step 3: AI Engine to Manual Test Cases
      2000, // Step 4: Manual Test Cases to Azure DevOps MCP
      1500, // Step 5: Test Config to Playwright MCP
      2000, // Step 6: Azure DevOps MCP to Playwright MCP
      2000, // Step 7: Playwright MCP to Test Execution
      2000, // Step 8: Complete
    ];

    let currentStep = 0;
    const animateNextStep = () => {
      if (currentStep < totalSteps) {
        setTimeout(() => {
          setAnimationStep(currentStep + 1);

          // State management for each step
          if (currentStep === 0) {
            setCurrentProcessing("dataConnectors");
            updateComponentState("dataConnectors", "loading");
          } else if (currentStep === 1) {
            updateComponentState("dataConnectors", "success");
            setCurrentProcessing("aiEngine");
            updateComponentState("aiEngine", "loading");
          } else if (currentStep === 2) {
            updateComponentState("aiEngine", "success");
            setCurrentProcessing("manualTestCases");
            updateComponentState("manualTestCases", "loading");
          } else if (currentStep === 3) {
            updateComponentState("manualTestCases", "success");
            setCurrentProcessing("azureDevOpsMCP");
            updateComponentState("azureDevOpsMCP", "loading");
          } else if (currentStep === 4) {
            setCurrentProcessing("playwrightMCP");
            updateComponentState("playwrightMCP", "loading");
            updateComponentState("testConfig", "loading");
          } else if (currentStep === 5) {
            updateComponentState("azureDevOpsMCP", "success");
            updateComponentState("testConfig", "success");
          } else if (currentStep === 6) {
            updateComponentState("playwrightMCP", "success");
            setCurrentProcessing("testExecution");
            updateComponentState("testExecution", "loading");
          } else if (currentStep === 7) {
            updateComponentState("testExecution", "success");
            setCurrentProcessing(null);
          }

          currentStep++;
          if (currentStep < totalSteps) {
            animateNextStep();
          } else {
            setTimeout(() => {
              setIsAnimating(false);
            }, 1000);
          }
        }, stepDurations[currentStep]);
      }
    };

    setTimeout(animateNextStep, 500);
  }, []);

  // Intersection Observer to start animation when element is in view
  useEffect(() => {
    if (!containerRef.current) return;

    const element = containerRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !isAnimating && animationStep === 0) {
          startAnimation();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [isAnimating, animationStep, startAnimation]);

  // Auto-replay animation
  useEffect(() => {
    if (animationStep === totalSteps && !isAnimating) {
      const timer = setTimeout(() => {
        startAnimation();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [animationStep, isAnimating, startAnimation]);

  // Reset animation when isVisible changes
  useEffect(() => {
    if (isVisible) {
      startAnimation();
    }
  }, [isVisible, startAnimation]);

  return (
    <div className="relative w-full" ref={containerRef}>
      <div className="w-full border border-gray-200 rounded-lg bg-gradient-to-br from-gray-50 to-white p-6">
        <div className="relative w-full" ref={diagramRef}>
          {/* TestWise Workflow - Component Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
            {/* User Interface */}
            <div className="flex flex-col items-center">
              <div
                ref={userInterfaceRef}
                className={`p-4 rounded-lg border-2 ${stageColors.purple.border} ${stageColors.purple.bg} transition-all duration-500`}
              >
                <div className="w-12 h-12 mx-auto mb-2 rounded-lg bg-purple-100 flex items-center justify-center shadow-sm">
                  <Bot className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xs font-semibold text-center text-gray-800">
                  User Interface
                </h3>
                <p className="text-xs text-center text-gray-600">
                  Microsoft Copilot Studio
                </p>
              </div>
            </div>

            {/* Data Connectors */}
            <div className="flex flex-col items-center">
              <div
                ref={dataConnectorsRef}
                className={`p-4 rounded-lg border-2 transition-all duration-500 ${
                  componentStates.dataConnectors === "loading"
                    ? `${stageColors.blue.border} ${stageColors.blue.bg} shadow-lg scale-105`
                    : componentStates.dataConnectors === "success"
                    ? `border-green-300 bg-green-50 shadow-lg scale-105`
                    : `${stageColors.blue.border} ${stageColors.blue.bg}`
                }`}
              >
                <div className="flex items-center justify-center mb-2">
                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center shadow-sm">
                    <MessageSquare className="w-6 h-6 text-blue-600" />
                  </div>
                  {getStateIcon(componentStates.dataConnectors, "w-4 h-4 ml-2")}
                </div>
                <h3 className="text-xs font-semibold text-center text-gray-800">
                  Data Connectors
                </h3>
                <p className="text-xs text-center text-gray-600">
                  Teams, Emails, Audio, Video
                </p>
                {componentStates.dataConnectors === "loading" && (
                  <p className="text-xs text-center text-red-600 mt-1">
                    Collecting data...
                  </p>
                )}
              </div>
            </div>

            {/* AI Processing Engine */}
            <div className="flex flex-col items-center">
              <div
                ref={aiEngineRef}
                className={`p-4 rounded-lg border-2 transition-all duration-500 ${
                  componentStates.aiEngine === "loading"
                    ? `${stageColors.pink.border} ${stageColors.pink.bg} shadow-lg scale-105`
                    : componentStates.aiEngine === "success"
                    ? `border-green-300 bg-green-50 shadow-lg scale-105`
                    : `${stageColors.pink.border} ${stageColors.pink.bg}`
                }`}
              >
                <div className="flex items-center justify-center mb-2">
                  <div className="w-12 h-12 rounded-lg bg-pink-100 flex items-center justify-center shadow-sm">
                    <Brain className="w-6 h-6 text-pink-600" />
                  </div>
                  {getStateIcon(componentStates.aiEngine, "w-4 h-4 ml-2")}
                </div>
                <h3 className="text-xs font-semibold text-center text-gray-800">
                  AI Processing Engine
                </h3>
                <p className="text-xs text-center text-gray-600">
                  NLP • ML Models • Risk Analysis
                </p>
                {componentStates.aiEngine === "loading" && (
                  <p className="text-xs text-center text-red-600 mt-1">
                    Processing with AI...
                  </p>
                )}
              </div>
            </div>

            {/* Manual Test Cases */}
            <div className="flex flex-col items-center">
              <div
                ref={manualTestCasesRef}
                className={`p-4 rounded-lg border-2 transition-all duration-500 ${
                  componentStates.manualTestCases === "loading"
                    ? `${stageColors.green.border} ${stageColors.green.bg} shadow-lg scale-105`
                    : componentStates.manualTestCases === "success"
                    ? `border-green-300 bg-green-50 shadow-lg scale-105`
                    : `${stageColors.green.border} ${stageColors.green.bg}`
                }`}
              >
                <div className="flex items-center justify-center mb-2">
                  <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center shadow-sm">
                    <FileText className="w-6 h-6 text-green-600" />
                  </div>
                  {getStateIcon(
                    componentStates.manualTestCases,
                    "w-4 h-4 ml-2"
                  )}
                </div>
                <h3 className="text-xs font-semibold text-center text-gray-800">
                  Azure DevOps
                </h3>
                <p className="text-xs text-center text-gray-600">
                  Manual Test Cases
                </p>
                {componentStates.manualTestCases === "loading" && (
                  <p className="text-xs text-center text-red-600 mt-1">
                    Creating test cases...
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Azure DevOps MCP */}
            <div className="flex flex-col items-center">
              <div
                ref={azureDevOpsMCPRef}
                className={`p-4 rounded-lg border-2 transition-all duration-500 ${
                  componentStates.azureDevOpsMCP === "loading"
                    ? `${stageColors.blue.border} ${stageColors.blue.bg} shadow-lg scale-105`
                    : componentStates.azureDevOpsMCP === "success"
                    ? `border-green-300 bg-green-50 shadow-lg scale-105`
                    : `${stageColors.blue.border} ${stageColors.blue.bg}`
                }`}
              >
                <div className="flex items-center justify-center mb-2">
                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center shadow-sm">
                    <Settings className="w-6 h-6 text-blue-600" />
                  </div>
                  {getStateIcon(componentStates.azureDevOpsMCP, "w-4 h-4 ml-2")}
                </div>
                <h3 className="text-xs font-semibold text-center text-gray-800">
                  Azure DevOps MCP
                </h3>
                <p className="text-xs text-center text-gray-600">
                  Test Cases Integration
                </p>
                {componentStates.azureDevOpsMCP === "loading" && (
                  <p className="text-xs text-center text-red-600 mt-1">
                    Pulling test cases...
                  </p>
                )}
              </div>
            </div>

            {/* Test Configuration */}
            <div className="flex flex-col items-center">
              <div
                ref={testConfigRef}
                className={`p-4 rounded-lg border-2 transition-all duration-500 ${
                  componentStates.testConfig === "loading"
                    ? `${stageColors.green.border} ${stageColors.green.bg} shadow-lg scale-105`
                    : componentStates.testConfig === "success"
                    ? `border-green-300 bg-green-50 shadow-lg scale-105`
                    : `${stageColors.green.border} ${stageColors.green.bg}`
                }`}
              >
                <div className="flex items-center justify-center mb-2">
                  <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center shadow-sm">
                    <Database className="w-6 h-6 text-orange-600" />
                  </div>
                  {getStateIcon(componentStates.testConfig, "w-4 h-4 ml-2")}
                </div>
                <h3 className="text-xs font-semibold text-center text-gray-800">
                  Test Configuration
                </h3>
                <p className="text-xs text-center text-gray-600">
                  URL, Browser, Env, Tags
                </p>
                {componentStates.testConfig === "loading" && (
                  <p className="text-xs text-center text-red-600 mt-1">
                    Pulling configuration...
                  </p>
                )}
              </div>
            </div>

            {/* Playwright MCP */}
            <div className="flex flex-col items-center">
              <div
                ref={playwrightMCPRef}
                className={`p-4 rounded-lg border-2 transition-all duration-500 ${
                  componentStates.playwrightMCP === "loading"
                    ? `${stageColors.blue.border} ${stageColors.blue.bg} shadow-lg scale-105`
                    : componentStates.playwrightMCP === "success"
                    ? `border-green-300 bg-green-50 shadow-lg scale-105`
                    : `${stageColors.blue.border} ${stageColors.blue.bg}`
                }`}
              >
                <div className="flex items-center justify-center mb-2">
                  <div className="w-12 h-12 rounded-lg bg-indigo-100 flex items-center justify-center shadow-sm">
                    <Code className="w-6 h-6 text-indigo-600" />
                  </div>
                  {getStateIcon(componentStates.playwrightMCP, "w-4 h-4 ml-2")}
                </div>
                <h3 className="text-xs font-semibold text-center text-gray-800">
                  Playwright MCP
                </h3>
                <p className="text-xs text-center text-gray-600">
                  Automates tests from NL
                </p>
                {componentStates.playwrightMCP === "loading" && (
                  <p className="text-xs text-center text-red-600 mt-1">
                    Generating tests...
                  </p>
                )}
              </div>
            </div>

            {/* Test Execution */}
            <div className="flex flex-col items-center">
              <div
                ref={testExecutionRef}
                className={`p-4 rounded-lg border-2 transition-all duration-500 ${
                  componentStates.testExecution === "loading"
                    ? `${stageColors.pink.border} ${stageColors.pink.bg} shadow-lg scale-105`
                    : componentStates.testExecution === "success"
                    ? `border-green-300 bg-green-50 shadow-lg scale-105`
                    : `${stageColors.pink.border} ${stageColors.pink.bg}`
                }`}
              >
                <div className="flex items-center justify-center mb-2">
                  <div className="w-12 h-12 rounded-lg bg-pink-100 flex items-center justify-center shadow-sm">
                    <Play className="w-6 h-6 text-pink-600" />
                  </div>
                  {getStateIcon(componentStates.testExecution, "w-4 h-4 ml-2")}
                </div>
                <h3 className="text-xs font-semibold text-center text-gray-800">
                  Playwright Tests Execution
                </h3>
                <p className="text-xs text-center text-gray-600">
                  Using Build Pipeline
                </p>
                {componentStates.testExecution === "loading" && (
                  <p className="text-xs text-center text-red-600 mt-1">
                    Running tests...
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Animated Beams */}
          <AnimatedBeam
            containerRef={diagramRef}
            fromRef={userInterfaceRef}
            toRef={dataConnectorsRef}
            isActive={animationStep >= 1}
            color={stageColors.purple.beam}
          />

          <AnimatedBeam
            containerRef={diagramRef}
            fromRef={dataConnectorsRef}
            toRef={aiEngineRef}
            isActive={animationStep >= 2}
            color={stageColors.blue.beam}
          />

          <AnimatedBeam
            containerRef={diagramRef}
            fromRef={aiEngineRef}
            toRef={manualTestCasesRef}
            isActive={animationStep >= 3}
            color={stageColors.pink.beam}
          />

          <AnimatedBeam
            containerRef={diagramRef}
            fromRef={manualTestCasesRef}
            toRef={azureDevOpsMCPRef}
            isActive={animationStep >= 4}
            color={stageColors.green.beam}
          />

          <AnimatedBeam
            containerRef={diagramRef}
            fromRef={testConfigRef}
            toRef={playwrightMCPRef}
            isActive={animationStep >= 5}
            color={stageColors.green.beam}
          />

          <AnimatedBeam
            containerRef={diagramRef}
            fromRef={azureDevOpsMCPRef}
            toRef={playwrightMCPRef}
            isActive={animationStep >= 6}
            color={stageColors.blue.beam}
          />

          <AnimatedBeam
            containerRef={diagramRef}
            fromRef={playwrightMCPRef}
            toRef={testExecutionRef}
            isActive={animationStep >= 7}
            color={stageColors.blue.beam}
          />
        </div>

        {/* Progress Indicator */}
        <div className="mt-6 flex justify-center">
          <div className="flex space-x-2">
            {Array.from({ length: totalSteps }, (_, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i < animationStep
                    ? "bg-green-500"
                    : i === animationStep
                    ? "bg-blue-500 animate-pulse"
                    : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Status Display */}
        <div className="mt-4 text-center">
          {currentProcessing && (
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-200 rounded-lg">
              <div className="w-5 h-5 animate-spin border-2 border-blue-500 border-t-transparent rounded-full mr-2" />
              <span className="text-sm font-medium text-blue-700">
                {currentProcessing === "dataConnectors" &&
                  "Collecting data from various sources..."}
                {currentProcessing === "aiEngine" &&
                  "Processing with AI engine..."}
                {currentProcessing === "manualTestCases" &&
                  "Creating manual test cases..."}
                {currentProcessing === "azureDevOpsMCP" &&
                  "Retrieving test case descriptions..."}
                {currentProcessing === "playwrightMCP" &&
                  "Generating Playwright tests..."}
                {currentProcessing === "testExecution" &&
                  "Executing Playwright tests..."}
              </span>
            </div>
          )}
          {animationStep === totalSteps && !isAnimating && (
            <div className="inline-flex items-center px-4 py-2 bg-green-50 border border-green-200 rounded-lg">
              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-2">
                <div className="w-2 h-2 bg-white rounded-full" />
              </div>
              <span className="text-sm font-medium text-green-700">
                TestWise workflow complete! Tests generated and executed.
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Legacy export for backwards compatibility
export { WorkflowTestWisePipeline as WorkflowAvatarPipeline };
