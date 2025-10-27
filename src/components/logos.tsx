// Logo components for TestWise workflow
import React from "react";

export const MicrosoftCopilotLogo = ({
  className = "w-6 h-6",
}: {
  className?: string;
}) => (
  <svg
    className={className}
    viewBox="0 0 512 512"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M228 0L383 155L383 357L228 512L73 357L73 155L228 0Z"
      fill="#0078D4"
    />
    <path
      d="M228 0L337 109L337 248L228 357L119 248L119 109L228 0Z"
      fill="#106EBE"
    />
    <path d="M64 164L356 164L356 348L64 348L64 164Z" fill="white" />
  </svg>
);

export const AzureDevOpsLogo = ({
  className = "w-6 h-6",
}: {
  className?: string;
}) => (
  <svg
    className={className}
    viewBox="0 0 512 512"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="256" cy="256" r="256" fill="#0078D4" />
    <path d="M164 160L348 160L348 352L164 352L164 160Z" fill="white" />
    <path d="M200 200L200 312L312 312L312 200L200 200Z" fill="#0078D4" />
  </svg>
);

export const PlaywrightLogo = ({
  className = "w-6 h-6",
}: {
  className?: string;
}) => (
  <svg
    className={className}
    viewBox="0 0 512 512"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="512" height="512" rx="64" fill="#2D8A3E" />
    <path d="M156 128L256 128L256 228L156 228L156 128Z" fill="white" />
    <path d="M256 128L356 128L356 228L256 228L256 128Z" fill="#E74C3C" />
    <path d="M156 284L256 284L256 384L156 384L156 284Z" fill="white" />
    <path d="M256 284L356 284L356 384L256 384L256 284Z" fill="white" />
  </svg>
);

export const TeamsLogo = ({
  className = "w-6 h-6",
}: {
  className?: string;
}) => (
  <svg
    className={className}
    viewBox="0 0 512 512"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="512" height="512" rx="64" fill="#6264A7" />
    <circle cx="200" cy="180" r="60" fill="white" />
    <circle cx="312" cy="180" r="48" fill="white" />
    <rect x="120" y="240" width="160" height="120" rx="20" fill="white" />
    <rect x="280" y="260" width="120" height="100" rx="16" fill="white" />
  </svg>
);

export const AIProcessingLogo = ({
  className = "w-6 h-6",
}: {
  className?: string;
}) => (
  <svg
    className={className}
    viewBox="0 0 512 512"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="512" height="512" rx="64" fill="#C063FF" />
    <circle cx="256" cy="256" r="120" fill="white" />
    <circle cx="256" cy="256" r="80" fill="#C063FF" />
    <circle cx="256" cy="256" r="40" fill="white" />
    <circle cx="180" cy="180" r="20" fill="white" />
    <circle cx="332" cy="180" r="20" fill="white" />
    <circle cx="180" cy="332" r="20" fill="white" />
    <circle cx="332" cy="332" r="20" fill="white" />
  </svg>
);

export const ConfigurationLogo = ({
  className = "w-6 h-6",
}: {
  className?: string;
}) => (
  <svg
    className={className}
    viewBox="0 0 512 512"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="512" height="512" rx="64" fill="#3DBE29" />
    <circle cx="256" cy="256" r="80" fill="white" />
    <rect x="236" y="80" width="40" height="120" fill="white" />
    <rect x="236" y="312" width="40" height="120" fill="white" />
    <rect x="80" y="236" width="120" height="40" fill="white" />
    <rect x="312" y="236" width="120" height="40" fill="white" />
  </svg>
);
