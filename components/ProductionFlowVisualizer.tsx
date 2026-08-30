'use client';

import { useState } from 'react';
import { productionFlowStages, FlowStage } from '@/lib/data/productionFlow';

export function ProductionFlowVisualizer() {
  const [selectedStageId, setSelectedStageId] = useState<string>(productionFlowStages[0].id);
  const [copied, setCopied] = useState<boolean>(false);

  const currentStage = productionFlowStages.find((s) => s.id === selectedStageId) || productionFlowStages[0];

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full space-y-8">
      {/* Top Architecture Flow Pipeline (Interactive Multi-Node Wire) */}
      <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-indigo-600 font-bold block mb-1">
              Live Topology Blueprint
            </span>
            <h4 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Enterprise End-to-End Inference & Training Flow
            </h4>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-slate-500 font-medium hidden md:inline">
              Click any stage to inspect production specs:
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-mono font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 dot-pulse" /> Live SLA Verified
            </span>
          </div>
        </div>

        {/* Horizontal Node Flow Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 relative">
          {productionFlowStages.map((stage, idx) => {
            const isSelected = stage.id === selectedStageId;
            return (
              <button
                key={stage.id}
                onClick={() => setSelectedStageId(stage.id)}
                className={`relative text-left p-3.5 rounded-2xl border transition-all flex flex-col justify-between group cursor-pointer ${
                  isSelected
                    ? 'bg-white border-indigo-600 shadow-md ring-2 ring-indigo-500/20 scale-[1.02]'
                    : 'bg-white border-slate-200 hover:border-indigo-300 hover:bg-indigo-50/40'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`font-mono text-xs font-extrabold ${
                        isSelected ? 'text-indigo-600' : 'text-slate-400 group-hover:text-indigo-600'
                      }`}
                    >
                      {stage.step}
                    </span>
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 font-semibold">
                      {stage.latencySLA.split(' ')[0]}
                    </span>
                  </div>
                  <p className="text-xs font-bold text-slate-900 leading-tight mb-1">{stage.name}</p>
                </div>
                
                <div className="mt-2 pt-2 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[9px] font-mono uppercase tracking-wider text-slate-400 font-bold truncate">
                    {stage.category}
                  </span>
                  {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 shrink-0" />}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Stage Detail Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Col: Specs, Rules, Tech Stack */}
        <div className="lg:col-span-6 bg-white border border-slate-200 rounded-3xl p-7 shadow-xs space-y-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="font-mono text-xs font-extrabold text-indigo-600 px-2.5 py-1 rounded-lg bg-indigo-50 border border-indigo-200">
                  STAGE {currentStage.step}
                </span>
                <span className={`text-xs font-mono font-bold px-2.5 py-1 rounded-lg border ${currentStage.badgeColor}`}>
                  {currentStage.category}
                </span>
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">{currentStage.name}</h3>
            </div>
            <div className="text-right">
              <span className="text-[10px] font-mono uppercase text-slate-400 block font-semibold">Target SLA</span>
              <span className="text-sm font-mono font-bold text-emerald-600">{currentStage.latencySLA}</span>
            </div>
          </div>

          <p className="text-sm text-slate-600 leading-relaxed font-normal">{currentStage.shortDesc}</p>

          {/* Key Components */}
          <div>
            <h5 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-3">
              Core Architectural Pillars
            </h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {currentStage.keyComponents.map((comp, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-800"
                >
                  <span className="w-2 h-2 rounded-full bg-indigo-600 shrink-0" />
                  <span>{comp}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Production Hardened Rules */}
          <div>
            <h5 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-3">
              Production Operational Guardrails
            </h5>
            <ul className="space-y-2">
              {currentStage.productionRules.map((rule, i) => (
                <li
                  key={i}
                  className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-5 relative before:content-['✓'] before:absolute before:left-0 before:text-emerald-600 before:font-bold font-normal"
                >
                  {rule}
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack Chips */}
          <div>
            <h5 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-2.5">
              Implemented Tech & Libraries
            </h5>
            <div className="flex flex-wrap gap-1.5">
              {currentStage.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-mono bg-slate-100 text-slate-800 rounded-lg border border-slate-200 font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Col: Production Code & Config Harness */}
        <div className="lg:col-span-6 bg-slate-900 border border-slate-800 rounded-3xl p-6 text-white shadow-lg space-y-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
              <div className="flex items-center gap-2 font-mono text-xs text-indigo-400 font-bold">
                <span className="w-3 h-3 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                </span>
                {currentStage.codeSnippet.title}
              </div>
              <button
                onClick={() => handleCopy(currentStage.codeSnippet.code)}
                className="px-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-mono text-slate-300 font-medium transition-colors cursor-pointer"
              >
                {copied ? '✓ Copied' : 'Copy Code'}
              </button>
            </div>

            <pre className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 overflow-x-auto text-xs font-mono text-indigo-200 leading-relaxed">
              <code>{currentStage.codeSnippet.code}</code>
            </pre>
          </div>

          <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 font-mono">
            <span>Sovereign VPC · Zero External Phone-Home</span>
            <span className="text-emerald-400 font-semibold">100% On-Prem Verified</span>
          </div>
        </div>
      </div>

      {/* Strategic Efficiency Spotlight: Small LLMs (SLMs) vs Frontier LLMs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-2">
        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-lg">⚡</span>
            <h4 className="font-bold text-sm text-slate-900 font-mono">Small LLMs (SLMs) Fast Path</h4>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed mb-3">
            Fine-tuned Llama 3.2 3B, Qwen 2.5 7B, & Phi-4 for 80% of routine workflows (classification, extraction, structured JSON).
          </p>
          <div className="flex items-center justify-between text-xs font-mono text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200 font-bold">
            <span>Latency: &lt; 25ms</span>
            <span>Cost: $0.00 / query</span>
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-lg">🧠</span>
            <h4 className="font-bold text-sm text-slate-900 font-mono">Frontier Deep Reasoning</h4>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed mb-3">
            Private DeepSeek-R1 & Llama 3.3 70B reserved for high-stakes audits, multi-step planning, and complex edge-case reconciliation.
          </p>
          <div className="flex items-center justify-between text-xs font-mono text-indigo-700 bg-indigo-50 px-3 py-1.5 rounded-lg border border-indigo-200 font-bold">
            <span>Accuracy: 99.4%</span>
            <span>Speculative Decoded</span>
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-lg">🔁</span>
            <h4 className="font-bold text-sm text-slate-900 font-mono">Continuous LoRA Pipeline</h4>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed mb-3">
            Nightly Unsloth QLoRA distillation on high-confidence production traces, with automated benchmark gates before rollout.
          </p>
          <div className="flex items-center justify-between text-xs font-mono text-amber-800 bg-amber-50 px-3 py-1.5 rounded-lg border border-amber-200 font-bold">
            <span>Training: 5x Faster</span>
            <span>CI/CD Eval Gated</span>
          </div>
        </div>
      </div>
    </div>
  );
}
