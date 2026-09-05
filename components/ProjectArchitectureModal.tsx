"use client";

import { useState, useEffect } from "react";

export interface ArchitectureNode {
  title: string;
  subtitle?: string;
  tag?: string;
  color?: "indigo" | "emerald" | "amber" | "blue" | "purple" | "rose" | "cyan" | "slate";
  description?: string;
}

export interface ArchitectureLayer {
  name: string;
  role: string;
  color: "indigo" | "emerald" | "amber" | "blue" | "purple" | "rose" | "cyan" | "slate";
  connectionLabel?: string;
  nodes: ArchitectureNode[];
}

export interface DetailedProject {
  id: string;
  number: string;
  title: string;
  tagline: string;
  badge: string;
  badgeColor?: string;
  description: string;
  architectureDiagram: string;
  architectureLayers?: ArchitectureLayer[];
  problemStatement: string;
  solution: string;
  features: string[];
  techStack: { name: string; category: string }[];
  apiEndpoints?: { endpoint: string; method: string; desc: string }[];
  metrics?: { label: string; value: string }[];
  githubUrl?: string;
  localPath?: string;
}

interface ModalProps {
  project: DetailedProject | null;
  onClose: () => void;
}

const LAYER_THEMES: Record<
  string,
  {
    headerBg: string;
    border: string;
    badgeBg: string;
    badgeText: string;
    badgeBorder: string;
    nodeBg: string;
    nodeBorder: string;
    tagBg: string;
    tagText: string;
    tagBorder: string;
    connectorLine: string;
    connectorBadge: string;
    pulseColor: string;
  }
> = {
  indigo: {
    headerBg: "bg-indigo-600",
    border: "border-indigo-200",
    badgeBg: "bg-indigo-50",
    badgeText: "text-indigo-700",
    badgeBorder: "border-indigo-200",
    nodeBg: "bg-white hover:bg-indigo-50/30",
    nodeBorder: "border-indigo-100 hover:border-indigo-300",
    tagBg: "bg-indigo-50",
    tagText: "text-indigo-700",
    tagBorder: "border-indigo-200",
    connectorLine: "bg-indigo-300",
    connectorBadge: "bg-indigo-50 text-indigo-700 border-indigo-200",
    pulseColor: "bg-indigo-500",
  },
  blue: {
    headerBg: "bg-blue-600",
    border: "border-blue-200",
    badgeBg: "bg-blue-50",
    badgeText: "text-blue-700",
    badgeBorder: "border-blue-200",
    nodeBg: "bg-white hover:bg-blue-50/30",
    nodeBorder: "border-blue-100 hover:border-blue-300",
    tagBg: "bg-blue-50",
    tagText: "text-blue-700",
    tagBorder: "border-blue-200",
    connectorLine: "bg-blue-300",
    connectorBadge: "bg-blue-50 text-blue-700 border-blue-200",
    pulseColor: "bg-blue-500",
  },
  purple: {
    headerBg: "bg-purple-600",
    border: "border-purple-200",
    badgeBg: "bg-purple-50",
    badgeText: "text-purple-700",
    badgeBorder: "border-purple-200",
    nodeBg: "bg-white hover:bg-purple-50/30",
    nodeBorder: "border-purple-100 hover:border-purple-300",
    tagBg: "bg-purple-50",
    tagText: "text-purple-700",
    tagBorder: "border-purple-200",
    connectorLine: "bg-purple-300",
    connectorBadge: "bg-purple-50 text-purple-700 border-purple-200",
    pulseColor: "bg-purple-500",
  },
  emerald: {
    headerBg: "bg-emerald-600",
    border: "border-emerald-200",
    badgeBg: "bg-emerald-50",
    badgeText: "text-emerald-700",
    badgeBorder: "border-emerald-200",
    nodeBg: "bg-white hover:bg-emerald-50/30",
    nodeBorder: "border-emerald-100 hover:border-emerald-300",
    tagBg: "bg-emerald-50",
    tagText: "text-emerald-700",
    tagBorder: "border-emerald-200",
    connectorLine: "bg-emerald-300",
    connectorBadge: "bg-emerald-50 text-emerald-700 border-emerald-200",
    pulseColor: "bg-emerald-500",
  },
  amber: {
    headerBg: "bg-amber-500",
    border: "border-amber-200",
    badgeBg: "bg-amber-50",
    badgeText: "text-amber-800",
    badgeBorder: "border-amber-200",
    nodeBg: "bg-white hover:bg-amber-50/30",
    nodeBorder: "border-amber-100 hover:border-amber-300",
    tagBg: "bg-amber-50",
    tagText: "text-amber-800",
    tagBorder: "border-amber-200",
    connectorLine: "bg-amber-300",
    connectorBadge: "bg-amber-50 text-amber-800 border-amber-200",
    pulseColor: "bg-amber-500",
  },
  cyan: {
    headerBg: "bg-cyan-600",
    border: "border-cyan-200",
    badgeBg: "bg-cyan-50",
    badgeText: "text-cyan-800",
    badgeBorder: "border-cyan-200",
    nodeBg: "bg-white hover:bg-cyan-50/30",
    nodeBorder: "border-cyan-100 hover:border-cyan-300",
    tagBg: "bg-cyan-50",
    tagText: "text-cyan-800",
    tagBorder: "border-cyan-200",
    connectorLine: "bg-cyan-300",
    connectorBadge: "bg-cyan-50 text-cyan-800 border-cyan-200",
    pulseColor: "bg-cyan-500",
  },
  rose: {
    headerBg: "bg-rose-600",
    border: "border-rose-200",
    badgeBg: "bg-rose-50",
    badgeText: "text-rose-700",
    badgeBorder: "border-rose-200",
    nodeBg: "bg-white hover:bg-rose-50/30",
    nodeBorder: "border-rose-100 hover:border-rose-300",
    tagBg: "bg-rose-50",
    tagText: "text-rose-700",
    tagBorder: "border-rose-200",
    connectorLine: "bg-rose-300",
    connectorBadge: "bg-rose-50 text-rose-700 border-rose-200",
    pulseColor: "bg-rose-500",
  },
  slate: {
    headerBg: "bg-slate-700",
    border: "border-slate-200",
    badgeBg: "bg-slate-100",
    badgeText: "text-slate-800",
    badgeBorder: "border-slate-300",
    nodeBg: "bg-white hover:bg-slate-50",
    nodeBorder: "border-slate-200 hover:border-slate-400",
    tagBg: "bg-slate-100",
    tagText: "text-slate-700",
    tagBorder: "border-slate-200",
    connectorLine: "bg-slate-300",
    connectorBadge: "bg-slate-100 text-slate-700 border-slate-200",
    pulseColor: "bg-slate-500",
  },
};

export function ProjectArchitectureModal({ project, onClose }: ModalProps) {
  const [viewMode, setViewMode] = useState<"visual" | "ascii">("visual");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  const handleCopyAscii = async () => {
    if (!project) return;
    try {
      await navigator.clipboard.writeText(project.architectureDiagram.trim());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8 overflow-y-auto bg-slate-900/60 backdrop-blur-md transition-opacity">
      {/* Click outside backdrop */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative w-full max-w-5xl bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden z-10 animate-modal max-h-[92vh] flex flex-col">
        {/* Header Bar */}
        <div className="sticky top-0 z-20 bg-slate-900 text-white px-6 py-4 sm:py-5 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs px-2.5 py-1 rounded-full bg-indigo-500/20 text-indigo-300 font-medium border border-indigo-500/30">
              {project.badge}
            </span>
            <span className="font-mono text-xs text-slate-400">Project #{project.number}</span>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors text-sm font-mono"
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 divide-y divide-slate-100">
          {/* Title & Overview */}
          <div>
            <h2 className="font-serif font-bold text-2xl sm:text-3xl lg:text-4xl text-slate-900 mb-2">
              {project.title}
            </h2>
            <p className="text-xs sm:text-sm font-mono text-indigo-600 font-semibold mb-3 leading-snug">{project.tagline}</p>
            <p className="text-slate-600 leading-relaxed text-xs sm:text-sm font-normal">{project.description}</p>
          </div>

          {/* Architecture Flow Diagram */}
          <div className="pt-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-3">
              <div>
                <h3 className="font-serif font-bold text-xl text-slate-900 flex items-center gap-2">
                  <span>📐</span> Production System Architecture
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Detailed pipeline data flow, interconnect protocols, and container runtimes.
                </p>
              </div>

              {/* View Mode Toggle */}
              <div className="inline-flex p-1 rounded-xl bg-slate-100 border border-slate-200 self-start sm:self-auto shadow-2xs">
                <button
                  onClick={() => setViewMode("visual")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all flex items-center gap-1.5 ${
                    viewMode === "visual"
                      ? "bg-white text-indigo-600 shadow-xs border border-slate-200 font-bold"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <span>✨</span> Visual Topology Map
                </button>
                <button
                  onClick={() => setViewMode("ascii")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all flex items-center gap-1.5 ${
                    viewMode === "ascii"
                      ? "bg-white text-indigo-600 shadow-xs border border-slate-200 font-bold"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <span>📟</span> Terminal Blueprint
                </button>
              </div>
            </div>

            {/* VISUAL TOPOLOGY VIEW */}
            {viewMode === "visual" && (
              <div className="space-y-4">
                {project.architectureLayers && project.architectureLayers.length > 0 ? (
                  <div className="p-4 sm:p-6 bg-slate-50/70 border border-slate-200 rounded-2xl space-y-4">
                    {project.architectureLayers.map((layer, lIdx) => {
                      const theme = LAYER_THEMES[layer.color] || LAYER_THEMES.indigo;
                      const isLast = lIdx === project.architectureLayers!.length - 1;

                      return (
                        <div key={lIdx} className="space-y-3">
                          {/* Layer Container */}
                          <div className={`p-4 sm:p-5 rounded-2xl bg-white border ${theme.border} shadow-xs transition-all hover:shadow-md`}>
                            {/* Layer Header */}
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 mb-3 border-b border-slate-100 gap-2">
                              <div className="flex items-center gap-2.5">
                                <span className={`w-2.5 h-2.5 rounded-full ${theme.headerBg} ring-4 ring-slate-100`} />
                                <h4 className="font-bold text-sm sm:text-base text-slate-900 tracking-tight">
                                  {layer.name}
                                </h4>
                              </div>
                              <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold border ${theme.badgeBg} ${theme.badgeText} ${theme.badgeBorder} self-start sm:self-auto`}>
                                {layer.role}
                              </span>
                            </div>

                            {/* Node Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                              {layer.nodes.map((node, nIdx) => {
                                const nodeTheme = node.color ? LAYER_THEMES[node.color] : theme;
                                return (
                                  <div
                                    key={nIdx}
                                    className={`p-3.5 rounded-xl border ${nodeTheme.nodeBorder} ${nodeTheme.nodeBg} shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between group`}
                                  >
                                    <div>
                                      <div className="flex items-center justify-between gap-2 mb-1.5">
                                        <h5 className="font-bold text-xs text-slate-900 tracking-tight group-hover:text-indigo-600 transition-colors">
                                          {node.title}
                                        </h5>
                                        {node.tag && (
                                          <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold shrink-0 border ${nodeTheme.tagBg} ${nodeTheme.tagText} ${nodeTheme.tagBorder}`}>
                                            {node.tag}
                                          </span>
                                        )}
                                      </div>
                                      {node.subtitle && (
                                        <p className="text-[11px] font-mono text-indigo-600 font-semibold mb-1">
                                          {node.subtitle}
                                        </p>
                                      )}
                                      {node.description && (
                                        <p className="text-[11px] text-slate-600 leading-relaxed">
                                          {node.description}
                                        </p>
                                      )}
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </div>

                          {/* Interconnect Connector */}
                          {!isLast && (
                            <div className="flex flex-col items-center justify-center py-1">
                              <div className={`h-3.5 w-0.5 ${theme.connectorLine}`} />
                              <div className={`px-3 py-1 rounded-full border text-[11px] font-mono font-semibold shadow-2xs flex items-center gap-1.5 ${theme.connectorBadge}`}>
                                <span className={`w-1.5 h-1.5 rounded-full ${theme.pulseColor} animate-pulse`} />
                                <span>{layer.connectionLabel || "Data & Control Flow"}</span>
                                <span>↓</span>
                              </div>
                              <div className={`h-3.5 w-0.5 ${theme.connectorLine}`} />
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  /* Fallback to terminal view if layers not provided */
                  <div className="bg-slate-950 text-emerald-400 p-5 rounded-2xl border border-slate-800 font-mono text-xs overflow-x-auto shadow-inner leading-relaxed whitespace-pre">
                    {project.architectureDiagram}
                  </div>
                )}
              </div>
            )}

            {/* TERMINAL ASCII BLUEPRINT VIEW */}
            {viewMode === "ascii" && (
              <div className="rounded-2xl border border-slate-800 bg-slate-950 overflow-hidden shadow-xl">
                {/* Terminal Window Header */}
                <div className="px-4 py-3 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                    <span className="text-xs font-mono text-slate-400 ml-2">
                      {project.id}-architecture.blueprint
                    </span>
                  </div>

                  <button
                    onClick={handleCopyAscii}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-mono transition-colors"
                    title="Copy ASCII schematic"
                  >
                    {copied ? (
                      <>
                        <span className="text-emerald-400">✓</span>
                        <span className="text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <span>📋</span>
                        <span>Copy Blueprint</span>
                      </>
                    )}
                  </button>
                </div>

                {/* ASCII Box */}
                <div className="p-5 overflow-x-auto text-emerald-300 font-mono text-xs sm:text-[12.5px] leading-relaxed whitespace-pre select-all">
                  {project.architectureDiagram.trim()}
                </div>
              </div>
            )}
          </div>

          {/* Problem vs Solution */}
          <div className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200/80">
              <h4 className="font-serif font-bold text-base text-amber-900 mb-2 flex items-center gap-2">
                <span>⚠️</span> Business Problem & Challenge
              </h4>
              <p className="text-xs sm:text-sm text-amber-900/80 leading-relaxed">{project.problemStatement}</p>
            </div>

            <div className="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200/80">
              <h4 className="font-serif font-bold text-base text-emerald-900 mb-2 flex items-center gap-2">
                <span>✅</span> Engineering Solution Delivered
              </h4>
              <p className="text-xs sm:text-sm text-emerald-900/80 leading-relaxed">{project.solution}</p>
            </div>
          </div>

          {/* Key Metrics if available */}
          {project.metrics && (
            <div className="pt-6">
              <h3 className="font-serif font-bold text-lg text-slate-900 mb-4">Performance Metrics</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {project.metrics.map((m, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center">
                    <p className="font-serif font-extrabold text-2xl text-indigo-600">{m.value}</p>
                    <p className="font-mono text-xs text-slate-500 mt-1 uppercase tracking-wider">{m.label}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Features */}
          <div className="pt-6">
            <h3 className="font-serif font-bold text-lg text-slate-900 mb-4">Architectural Highlights & Capabilities</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700">
                  <span className="w-2 h-2 rounded-full bg-indigo-600 mt-1.5 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Breakdown */}
          <div className="pt-6">
            <h3 className="font-serif font-bold text-lg text-slate-900 mb-4">Technology Stack Component Breakdown</h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-50 border border-indigo-200 text-indigo-900 text-xs font-mono"
                >
                  <span className="text-indigo-500 font-semibold">{tech.category}:</span>
                  <span>{tech.name}</span>
                </span>
              ))}
            </div>
          </div>

          {/* API Endpoints if present */}
          {project.apiEndpoints && project.apiEndpoints.length > 0 && (
            <div className="pt-6">
              <h3 className="font-serif font-bold text-lg text-slate-900 mb-4">Key API Endpoints & Interfaces</h3>
              <div className="space-y-2">
                {project.apiEndpoints.map((api, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 rounded-xl bg-slate-900 text-white font-mono text-xs">
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${api.method === "POST" ? "bg-emerald-500 text-slate-950" : api.method === "WS" ? "bg-purple-500 text-white" : "bg-blue-500 text-white"}`}>
                        {api.method}
                      </span>
                      <span className="text-slate-200">{api.endpoint}</span>
                    </div>
                    <span className="text-slate-400 text-[11px]">{api.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer Action Bar */}
        <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs font-mono text-slate-500">
            Source repo: <code className="text-slate-800 bg-slate-200 px-1.5 py-0.5 rounded">{project.localPath || project.title}</code>
          </span>

          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2 bg-slate-900 text-white rounded-xl text-xs font-mono uppercase tracking-wider font-semibold hover:bg-slate-800 transition-colors"
          >
            Close Architectural Breakdown
          </button>
        </div>
      </div>
    </div>
  );
}
