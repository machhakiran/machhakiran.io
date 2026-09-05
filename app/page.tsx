'use client';

import { useState } from 'react';
import { site, heroData, lifecycleStages, productionPipeline } from '@/lib/data/site';
import { profile, expertiseAreas, integrationAreas } from '@/lib/data/profile';
import { stackCategories } from '@/lib/data/stack';
import { jobs } from '@/lib/data/experience';
import { Reveal } from '@/components/ui/Reveal';
import { ProjectArchitectureModal, DetailedProject } from '@/components/ProjectArchitectureModal';
import { ProductionFlowVisualizer } from '@/components/ProductionFlowVisualizer';
import { detailedProjectsList } from '@/lib/data/detailedProjects';

const marqueeRow1 = [
  { text: 'Sovereign AI Stack', color: 'bg-emerald-50 text-emerald-700 border-emerald-200', dot: 'bg-emerald-500' },
  { text: '100% On-Prem & VPC', color: 'bg-blue-50 text-blue-700 border-blue-200', dot: 'bg-blue-500' },
  { text: 'Autonomous Agents', color: 'bg-purple-50 text-purple-700 border-purple-200', dot: 'bg-purple-500' },
  { text: 'Kubernetes GPU Ops', color: 'bg-sky-50 text-sky-700 border-sky-200', dot: 'bg-sky-500' },
  { text: 'vLLM & SGLang Clusters', color: 'bg-indigo-50 text-indigo-700 border-indigo-200', dot: 'bg-indigo-500' },
  { text: 'Self-Hosted Observability', color: 'bg-rose-50 text-rose-700 border-rose-200', dot: 'bg-rose-500' },
];

const marqueeRow2 = [
  { text: 'LangGraph Workflows', color: 'bg-amber-50 text-amber-800 border-amber-200', dot: 'bg-amber-500' },
  { text: 'DeepSeek / Llama 3 / Qwen', color: 'bg-indigo-50 text-indigo-700 border-indigo-200', dot: 'bg-indigo-500' },
  { text: 'Hybrid RAG & Vector Search', color: 'bg-teal-50 text-teal-700 border-teal-200', dot: 'bg-teal-500' },
  { text: 'Model Fine-Tuning (LoRA)', color: 'bg-fuchsia-50 text-fuchsia-700 border-fuchsia-200', dot: 'bg-fuchsia-500' },
  { text: 'Guardrails & SLAs', color: 'bg-emerald-50 text-emerald-700 border-emerald-200', dot: 'bg-emerald-500' },
];

export default function HomePage() {
  const [selectedProject, setSelectedProject] = useState<DetailedProject | null>(null);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-indigo-500/20 selection:text-indigo-700">
      {/* ARCHITECTURE MODAL */}
      <ProjectArchitectureModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* ===== HEADER NAVIGATION ===== */}
      <header className="fixed top-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-2 lg:gap-4">
          <a href="#" className="flex items-center gap-3 group shrink-0">
            <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center font-bold text-white text-base shadow-sm group-hover:bg-indigo-700 transition-colors shrink-0">
              KM
            </div>
            <div className="flex flex-col text-left">
              <span className="font-bold text-base tracking-tight text-slate-900 group-hover:text-indigo-600 transition-colors whitespace-nowrap">
                {site.name}
              </span>
              <span className="text-[11px] font-mono text-slate-500 font-medium -mt-0.5 whitespace-nowrap">Forward Deployed AI Engineer</span>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1.5 shrink-0">
            {[
              { label: 'Overview', href: '#profile' },
              { label: '11 Systems', href: '#projects' },
              { label: 'Pipeline', href: '#pipeline' },
              { label: 'Lifecycle', href: '#lifecycle' },
              { label: 'Capabilities', href: '#capabilities' },
              { label: 'Tech Stack', href: '#stack' },
              { label: 'Experience', href: '#experience' },
              { label: 'FDE Guide', href: '/fde' },
              { label: 'Blog', href: '/blog' },
            ].map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-2 xl:px-3 py-1.5 text-xs font-mono tracking-wide text-slate-600 hover:text-indigo-600 transition-colors rounded-lg hover:bg-slate-100 font-semibold whitespace-nowrap"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="#contact"
              className="btn-primary px-3.5 xl:px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider font-bold shadow-xs whitespace-nowrap"
              style={{ color: '#ffffff' }}
            >
              Get in Touch
            </a>
          </div>
        </div>
      </header>

      {/* ===== HERO SECTION (MODERN 2-COLUMN BENTO - BALANCED DESKTOP FIT) ===== */}
      <section className="pt-20 lg:pt-24 pb-10 lg:pb-12 px-4 sm:px-6 bg-gradient-to-b from-indigo-50/70 via-slate-50 to-[#F8FAFC] border-b border-slate-200 lg:min-h-[calc(100vh-4rem)] flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Headline & Action */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              {/* Status pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-200 bg-white shadow-xs text-xs text-indigo-700 font-mono font-semibold mb-4">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 dot-pulse" />
                <span>Singapore 🇸🇬 · Sovereign AI &amp; Autonomous Multi-Agents</span>
              </div>

              <div className="mb-4">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
                  Forward Deployed <br />
                  <span className="text-indigo-600">AI Engineer</span>
                </h1>
              </div>

              <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed max-w-2xl mb-6 font-normal">
                Taking private LLMs, autonomous agent swarms, and sovereign AI infrastructure from high-level business problems to production-grade deployments inside client VPCs and air-gapped clusters.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 mb-6 w-full sm:w-auto">
                <a
                  href="#projects"
                  className="btn-primary px-5 py-3 rounded-xl text-xs sm:text-sm font-bold shadow-md shadow-indigo-600/20 hover:scale-[1.01] gap-2"
                  style={{ color: '#ffffff' }}
                >
                  <span>🚀 Explore 11 Production Systems</span>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 1v12M1 7l6 6 6-6" /></svg>
                </a>
                <a
                  href="/fde"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-xs"
                >
                  <span>📑 FDE Playbook</span>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 7h12M9 3l4 4-4 4" /></svg>
                </a>
                <a
                  href="/blog"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 rounded-xl text-xs sm:text-sm font-semibold transition-all"
                >
                  <span>📚 60+ Field Notes</span>
                </a>
              </div>

              {/* Quick Metrics - 4-Column Balanced Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full border-t border-slate-200/80 pt-4">
                <div>
                  <p className="text-xl sm:text-2xl font-extrabold text-slate-900">11 Repos</p>
                  <p className="text-[11px] font-mono text-slate-500 font-medium uppercase">Full Systems</p>
                </div>
                <div>
                  <p className="text-xl sm:text-2xl font-extrabold text-indigo-600">100% Private</p>
                  <p className="text-[11px] font-mono text-slate-500 font-medium uppercase">Air-Gap &amp; VPC</p>
                </div>
                <div>
                  <p className="text-xl sm:text-2xl font-extrabold text-emerald-600">vLLM + K8s</p>
                  <p className="text-[11px] font-mono text-slate-500 font-medium uppercase">GPU Clusters</p>
                </div>
                <div>
                  <p className="text-xl sm:text-2xl font-extrabold text-purple-600">60+ Notes</p>
                  <p className="text-[11px] font-mono text-slate-500 font-medium uppercase">Production Specs</p>
                </div>
              </div>
            </div>

            {/* Right Column: Refined Profile Bento Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-sm lg:max-w-md bg-white border border-slate-200 rounded-3xl p-5 sm:p-6 shadow-xl shadow-slate-200/60 flex flex-col items-center text-center relative overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500" />

                <div className="relative mb-3.5 mt-1">
                  <img
                    src={profile.portrait}
                    width={128}
                    height={128}
                    alt={profile.name}
                    className="w-28 h-28 lg:w-32 lg:h-32 rounded-2xl object-cover ring-4 ring-indigo-50 shadow-md"
                  />
                  <span className="absolute bottom-1.5 right-1.5 w-3.5 h-3.5 bg-emerald-500 border-2 border-white rounded-full" />
                </div>

                <h2 className="text-xl lg:text-2xl font-bold text-slate-900 mb-0.5">{profile.name}</h2>
                <p className="text-xs font-mono font-bold text-indigo-600 uppercase tracking-wider mb-0.5">
                  Forward Deployed AI Engineer
                </p>
                <p className="text-[11px] font-mono text-slate-500 mb-3">
                  Technical Lead · Singapore 🇸🇬 · Sovereign AI Systems
                </p>

                {/* Colorful Scrolling Marquee */}
                <div className="w-full relative overflow-hidden py-0.5 mb-3.5 space-y-1.5">
                  {/* Left & right gradient fade masks */}
                  <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-white to-transparent z-10" />
                  <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-white to-transparent z-10" />

                  {/* Row 1 (scrolls left) */}
                  <div className="flex overflow-hidden">
                    <div className="animate-marquee flex items-center gap-1.5">
                      {[...marqueeRow1, ...marqueeRow1].map((item, idx) => (
                        <span
                          key={idx}
                          className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 text-[10px] sm:text-[11px] font-mono border rounded-lg font-semibold whitespace-nowrap shadow-2xs ${item.color}`}
                        >
                          <span className={`w-1.5 h-1.5 rounded-full ${item.dot}`} />
                          {item.text}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Row 2 (scrolls reverse / right) */}
                  <div className="flex overflow-hidden">
                    <div className="animate-marquee-reverse flex items-center gap-1.5">
                      {[...marqueeRow2, ...marqueeRow2].map((item, idx) => (
                        <span
                          key={idx}
                          className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 text-[10px] sm:text-[11px] font-mono border rounded-lg font-semibold whitespace-nowrap shadow-2xs ${item.color}`}
                        >
                          <span className={`w-1.5 h-1.5 rounded-full ${item.dot}`} />
                          {item.text}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Quick actions with High-Contrast White Text */}
                <div className="grid grid-cols-2 gap-2.5 w-full">
                  <a
                    href={`mailto:${profile.email}`}
                    className="btn-primary py-2.5 rounded-xl text-xs font-mono font-bold shadow-xs"
                    style={{ color: '#ffffff' }}
                  >
                    Direct Email
                  </a>
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener"
                    className="py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-mono font-bold transition-colors flex items-center justify-center"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ===== ENTERPRISE PIPELINE VISUALIZER (PURE LIGHT THEME) ===== */}
      <section id="pipeline" className="py-12 lg:py-16 px-4 sm:px-6 bg-white border-b border-slate-200">
        <Reveal className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-600 block mb-1">
                Architecture Blueprint
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                The Complete Enterprise AI Production Pipeline
              </h3>
            </div>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-300 bg-emerald-50 text-xs font-mono text-emerald-800 font-bold self-start sm:self-auto">
              <span className="w-2 h-2 rounded-full bg-emerald-500 dot-pulse" /> Production Ready Flow
            </span>
          </div>

          <ProductionFlowVisualizer />
        </Reveal>
      </section>

      {/* ===== FEATURED 11 REAL PROJECTS SHOWCASE ===== */}
      <section id="projects" className="py-14 lg:py-18 px-4 sm:px-6 bg-[#F8FAFC]">
        <Reveal className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-600 block mb-2">
                Real System Repositories
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
                11 Featured Production Systems
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-2xl font-normal">
                Click any project card to inspect its full architecture flow, problem/solution breakdown, API specs, and tech stack.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {detailedProjectsList.map((p) => (
              <div
                key={p.id}
                onClick={() => setSelectedProject(p)}
                className="group bg-white p-6 rounded-2xl border border-slate-200 hover:border-indigo-400 hover:shadow-lg transition-all cursor-pointer flex flex-col justify-between shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <span className="font-serif font-extrabold text-2xl text-slate-300 group-hover:text-indigo-600 transition-colors">
                      {p.number}
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-mono font-bold">
                      {p.badge}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1 group-hover:text-indigo-600 transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-xs font-mono text-indigo-600 font-semibold mb-2.5 leading-snug">{p.tagline}</p>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-3 font-normal">{p.description}</p>

                  {/* Highlights */}
                  <div className="space-y-1.5 border-t border-slate-100 pt-3 mb-3.5">
                    {p.features.slice(0, 3).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Architecture Topology Badge */}
                  <div className="flex items-center justify-between text-[11px] font-mono text-indigo-700 bg-indigo-50/80 border border-indigo-100/90 px-2.5 py-1 rounded-lg mb-3.5">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span>{p.architectureLayers?.length || 4}-Tier Pipeline</span>
                    </span>
                    <span className="text-slate-400 font-normal">Interactive Diagram</span>
                  </div>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-3.5">
                    {p.techStack.slice(0, 4).map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 text-[10px] rounded-md bg-slate-100 border border-slate-200 text-slate-600 font-mono font-medium"
                      >
                        {tech.name}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(p);
                    }}
                    className="btn-dark w-full py-2.5 rounded-xl text-xs font-mono uppercase tracking-wider font-bold transition-all flex items-center justify-center gap-2 hover:bg-indigo-600 shadow-xs"
                    style={{ color: '#ffffff' }}
                  >
                    <span>📐 Inspect Architecture Topology</span>
                    <span>→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ===== OVERVIEW & FORWARD DEPLOYED POSITIONING ===== */}
      <section id="profile" className="py-14 lg:py-18 px-4 sm:px-6 bg-white border-t border-slate-200">
        <Reveal className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-4 bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-7 flex flex-col items-center text-center">
              <img
                src={profile.portrait}
                width={128}
                height={128}
                alt={profile.name}
                className="w-28 h-28 lg:w-32 lg:h-32 rounded-2xl object-cover ring-4 ring-white shadow-md mb-3"
              />
              <h2 className="text-xl lg:text-2xl font-bold text-slate-900 mb-0.5">{profile.name}</h2>
              <p className="text-xs font-mono text-indigo-600 font-bold uppercase tracking-wide mb-1">{profile.role}</p>
              <p className="text-[11px] font-mono text-slate-600 font-semibold mb-2">Technical Lead Engineer — Enterprise Applications</p>
              <p className="text-xs text-slate-500 mb-5">{profile.location} · Available Globally</p>

              <div className="flex flex-col gap-2 w-full">
                <a
                  href={`mailto:${profile.email}`}
                  className="btn-primary w-full py-2.5 rounded-xl text-xs font-mono uppercase font-bold text-center transition-colors shadow-xs"
                  style={{ color: '#ffffff' }}
                >
                  Direct Email
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener"
                  className="w-full py-2.5 border border-slate-300 bg-white hover:bg-slate-100 text-slate-800 rounded-xl text-xs font-mono font-bold text-center transition-colors"
                >
                  GitHub (70+ Repos)
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener"
                  className="w-full py-2.5 border border-slate-300 bg-white hover:bg-slate-100 text-slate-800 rounded-xl text-xs font-mono font-bold text-center transition-colors"
                >
                  LinkedIn Profile
                </a>
              </div>
            </div>

            <div className="lg:col-span-8">
              <span className="text-xs font-mono uppercase tracking-widest text-indigo-600 font-bold mb-2 block">
                Forward Deployed Engineering &amp; Architecture
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-5">
                Embedding inside customer engineering teams to deliver Sovereign AI &amp; Autonomous Agents that run securely inside enterprise walls.
              </h3>

              <div className="space-y-3.5 text-slate-600 leading-relaxed text-sm sm:text-base mb-6">
                <p>
                  As a <strong className="text-slate-900">Forward Deployed AI Engineer &amp; Technical Lead</strong>, I sit directly inside customer codebases, infrastructure clusters, and strict compliance environments to design, build, and deploy production-grade AI systems.
                </p>
                <p>
                  My core specialization is <strong className="text-indigo-600">Sovereign AI &amp; Private Infrastructure</strong> — serving and fine-tuning open-weight models (DeepSeek, Llama 3, Qwen 2.5, Mistral) inside private VPCs, air-gapped clusters, or local GPU nodes for banks, fintech, and regulated organizations.
                </p>
                <p>
                  Backed by over a decade of regulated enterprise engineering experience (banking change control, distributed microservices, zero-trust security), I bridge the gap between high-level AI ambitions and hardened, containerized vLLM serving, hybrid retrieval pipelines, multi-agent orchestration (LangGraph, CrewAI, MCP), and Kubernetes GPU autoscaling.
                </p>
              </div>

              <span className="text-xs font-mono uppercase tracking-widest text-slate-400 font-bold mb-3 block">Core Expertise</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {expertiseAreas.map((area) => (
                  <div key={area} className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono text-slate-800">
                    <span className="w-2 h-2 rounded-full bg-indigo-600 shrink-0" />
                    <span className="font-semibold">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ===== THE COMPLETE PRODUCTION LIFECYCLE ===== */}
      <section id="lifecycle" className="py-14 lg:py-18 px-4 sm:px-6 bg-[#F8FAFC] border-t border-slate-200">
        <Reveal className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-indigo-600 font-bold mb-2 block">
              Complete Delivery Model
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-2.5">
              Business Problem → Production AI
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              An FDE who owns the full lifecycle from initial discovery to long-term GPU cost optimization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {lifecycleStages.map((stage) => (
              <div
                key={stage.step}
                className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 hover:border-indigo-300 transition-all shadow-xs"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl font-extrabold text-indigo-600 font-mono">{stage.step}</span>
                  <span className="w-2 h-2 rounded-full bg-slate-300" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1.5">{stage.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{stage.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ===== BUSINESS INTEGRATION CAPABILITIES ===== */}
      <section id="capabilities" className="py-14 lg:py-18 px-4 sm:px-6 bg-white border-t border-slate-200">
        <Reveal className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-indigo-600 font-bold mb-2 block">
              Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-2.5">
              Integrating AI Into Operational Systems
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Models create value when integrated cleanly into operational workflows, databases, and core APIs.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3.5 sm:gap-4">
            {integrationAreas.map((area) => (
              <div
                key={area}
                className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 hover:border-indigo-400 hover:bg-white transition-all text-center group shadow-2xs"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-indigo-100 flex items-center justify-center mx-auto mb-2 text-indigo-700 font-mono text-base font-bold group-hover:scale-105 transition-transform">
                  ⚡
                </div>
                <h4 className="font-bold text-xs sm:text-sm text-slate-900 mb-0.5">{area}</h4>
                <span className="font-mono text-[9px] sm:text-[10px] text-slate-400 uppercase tracking-wider block font-semibold">Production</span>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ===== OPEN SOURCE TECH STACK GRID ===== */}
      <section id="stack" className="py-14 lg:py-18 px-4 sm:px-6 bg-[#F8FAFC] border-t border-slate-200">
        <Reveal className="max-w-7xl mx-auto">
          <div className="mb-10 max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-widest text-indigo-600 font-bold mb-2 block">
              Infrastructure &amp; Tooling
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-2.5">
              Open-Source &amp; Self-Hosted Stack
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Proven technology choices enabling enterprises to run AI models on-premises without third-party API dependencies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {stackCategories.map((cat) => (
              <div
                key={cat.name}
                className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 hover:border-indigo-300 transition-all shadow-xs"
              >
                <div className="flex items-center justify-between mb-3.5">
                  <h3 className="font-mono text-xs font-bold tracking-wider uppercase text-indigo-600">{cat.name}</h3>
                  <span className="text-slate-400 text-xs font-mono font-medium">{cat.tools.length} Tools</span>
                </div>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {cat.tools.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-xs rounded-lg bg-slate-50 border border-slate-200 text-slate-700 font-mono font-medium hover:border-indigo-300 hover:text-indigo-600 transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ===== CAREER EXPERIENCE TIMELINE ===== */}
      <section id="experience" className="py-14 lg:py-18 px-4 sm:px-6 bg-white border-t border-slate-200">
        <Reveal className="max-w-5xl mx-auto">
          <div className="mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-indigo-600 font-bold mb-2 block">
              Track Record
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-2.5">
              Enterprise Delivery Experience
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-2xl font-normal">
              From regulated banking change control to SaaS GPU platforms and forward-deployed client engagements.
            </p>
          </div>

          <div className="space-y-5 sm:space-y-6">
            {jobs.map((job, i) => (
              <div
                key={i}
                className="timeline-item-light p-5 sm:p-7 rounded-2xl bg-slate-50 border border-slate-200 hover:border-indigo-300 transition-all shadow-2xs"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900">{job.title}</h3>
                    <p className="text-xs font-mono text-indigo-600 font-bold mt-0.5">{job.org}</p>
                  </div>
                  <div className="flex items-center gap-3 text-xs font-mono text-slate-500 font-medium">
                    <span className="px-2.5 py-1 rounded-md bg-white border border-slate-200">{job.when}</span>
                    <span>{job.location}</span>
                  </div>
                </div>

                <ul className="space-y-1.5 sm:space-y-2 pt-1">
                  {job.bullets.map((b, j) => (
                    <li key={j} className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-4 relative before:content-['▹'] before:absolute before:left-0 before:text-indigo-600 font-normal">
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ===== CONTACT CTA ===== */}
      <section id="contact" className="py-14 lg:py-18 px-4 sm:px-6 bg-slate-900 text-white relative">
        <Reveal className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 font-bold mb-2 block">
            Direct Contact
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Let&apos;s Connect
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-8 text-sm sm:text-base leading-relaxed font-normal">
            Available for Forward Deployed AI Engineer and Sovereign AI Infrastructure roles across Singapore, APAC, and EMEA.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3.5 mb-10 sm:mb-12">
            <a
              href={`mailto:${profile.email}`}
              className="btn-primary px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl text-xs sm:text-sm font-bold shadow-lg gap-2"
              style={{ color: '#ffffff' }}
            >
              Email {profile.email}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M1 7h12M9 3l4 4-4 4" /></svg>
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 border border-slate-700 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-xs sm:text-sm font-bold transition-all"
            >
              LinkedIn Profile
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 border border-slate-700 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-xs sm:text-sm font-bold transition-all"
            >
              GitHub (70+ Repos)
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 text-left">
            {[
              { title: 'Direct Email', link: `mailto:${profile.email}`, label: profile.email, note: 'Fastest response route.' },
              { title: 'LinkedIn', link: profile.linkedin, label: '/in/machhakiran', note: 'Career history.' },
              { title: 'GitHub', link: profile.github, label: 'machhakiran', note: '70+ repositories.' },
              { title: 'Company', link: profile.companyUrl, label: 'KaviAI →', note: 'AI agent platform.' },
            ].map((c) => (
              <div key={c.title} className="p-4 rounded-xl bg-slate-800/80 border border-slate-700">
                <p className="font-mono text-[10px] tracking-wider uppercase text-slate-400 font-bold mb-1">{c.title}</p>
                <a href={c.link} target={c.link.startsWith('mailto') ? undefined : '_blank'} rel="noopener" className="text-sm font-bold text-white hover:text-indigo-400 transition-colors block mb-1">
                  {c.label}
                </a>
                <p className="text-xs text-slate-400">{c.note}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="border-t border-slate-800 py-8 px-6 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <span>© {new Date().getFullYear()} {site.name} · {site.location}</span>
          <span className="hidden sm:inline text-slate-500">&ldquo;The future isn&rsquo;t just AI that talks. It&rsquo;s AI that acts.&rdquo;</span>
          <div className="flex gap-4">
            <a href={`mailto:${site.email}`} className="hover:text-white transition-colors">Email</a>
            <a href={site.linkedin} target="_blank" rel="noopener" className="hover:text-white transition-colors">LinkedIn</a>
            <a href={site.github} target="_blank" rel="noopener" className="hover:text-white transition-colors">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
