'use client';

import { useEffect } from 'react';

export interface DetailedProject {
  id: string;
  number: string;
  title: string;
  tagline: string;
  badge: string;
  badgeColor?: string;
  description: string;
  architectureDiagram: string;
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

export function ProjectArchitectureModal({ project, onClose }: ModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto bg-slate-900/60 backdrop-blur-md transition-opacity">
      {/* Click outside backdrop */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden z-10 animate-modal max-h-[90vh] flex flex-col">
        {/* Header Bar */}
        <div className="sticky top-0 z-20 bg-slate-900 text-white px-6 py-5 flex items-center justify-between border-b border-slate-800">
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
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-slate-900 mb-2">
              {project.title}
            </h2>
            <p className="text-base font-mono text-indigo-600 font-medium mb-4">{project.tagline}</p>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">{project.description}</p>
          </div>

          {/* Architecture Flow Diagram */}
          <div className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-serif font-bold text-xl text-slate-900 flex items-center gap-2">
                <span>📐</span> System Architecture & Data Flow
              </h3>
              <span className="text-xs font-mono text-slate-400">Production Infrastructure</span>
            </div>

            <div className="bg-slate-950 text-emerald-400 p-5 rounded-2xl border border-slate-800 font-mono text-xs sm:text-sm overflow-x-auto shadow-inner leading-relaxed whitespace-pre">
              {project.architectureDiagram}
            </div>
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
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
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
              <h3 className="font-serif font-bold text-lg text-slate-900 mb-4">Key API Endpoints</h3>
              <div className="space-y-2">
                {project.apiEndpoints.map((api, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 rounded-xl bg-slate-900 text-white font-mono text-xs">
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${api.method === 'POST' ? 'bg-emerald-500 text-slate-950' : 'bg-blue-500 text-white'}`}>
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
        <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex items-center justify-between">
          <span className="text-xs font-mono text-slate-500">
            Source repo: <code className="text-slate-800 bg-slate-200 px-1.5 py-0.5 rounded">{project.localPath || project.title}</code>
          </span>

          <button
            onClick={onClose}
            className="px-5 py-2 bg-slate-900 text-white rounded-xl text-xs font-mono uppercase tracking-wider font-semibold hover:bg-slate-800 transition-colors"
          >
            Close Architectural Breakdown
          </button>
        </div>
      </div>
    </div>
  );
}
