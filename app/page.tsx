'use client';

import { useState } from 'react';
import { site, heroData, lifecycleStages, productionPipeline } from '@/lib/data/site';
import { profile, expertiseAreas, integrationAreas } from '@/lib/data/profile';
import { stackCategories } from '@/lib/data/stack';
import { jobs } from '@/lib/data/experience';
import { Reveal } from '@/components/ui/Reveal';
import { ProjectArchitectureModal, DetailedProject } from '@/components/ProjectArchitectureModal';
import { detailedProjectsList } from '@/lib/data/detailedProjects';

export default function HomePage() {
  const [selectedProject, setSelectedProject] = useState<DetailedProject | null>(null);

  return (
    <div className="min-h-screen bg-[#FAFAFD] text-slate-900 font-sans selection:bg-indigo-500/20 selection:text-indigo-700">
      {/* ARCHITECTURE MODAL */}
      <ProjectArchitectureModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* ===== NAV ===== */}
      <header className="fixed top-0 inset-x-0 z-40 bg-white/85 backdrop-blur-xl border-b border-slate-200/80 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-600 via-purple-600 to-cyan-500 flex items-center justify-center font-serif font-bold text-white text-lg shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
              K
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-base tracking-tight text-slate-900 group-hover:text-indigo-600 transition-colors">
                {site.name}
              </span>
              <span className="text-[10px] font-mono text-slate-500 font-medium -mt-0.5">Senior AI & FDE Engineer</span>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {[
              { label: 'Overview', href: '#profile' },
              { label: '11 Projects', href: '#projects' },
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
                className="px-3.5 py-1.5 text-xs font-mono tracking-wide text-slate-600 hover:text-indigo-600 transition-colors rounded-lg hover:bg-slate-100/80 font-medium"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="px-4 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl text-xs font-mono tracking-wider uppercase font-semibold hover:opacity-95 transition-opacity shadow-md shadow-indigo-500/25"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </header>

      {/* ===== HERO SECTION WITH PHOTO ===== */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-gradient-to-b from-indigo-50/70 via-purple-50/30 to-[#FAFAFD]">
        {/* Glow ambient background circles */}
        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-tr from-indigo-300/20 to-purple-300/20 blur-[120px] pointer-events-none rounded-full" />
        <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-cyan-200/20 blur-[100px] pointer-events-none rounded-full" />

        <div className="max-w-6xl mx-auto relative">
          <Reveal className="flex flex-col items-center text-center max-w-4xl mx-auto">
            {/* Status dot */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-indigo-200 bg-white/90 shadow-sm text-xs text-indigo-700 font-mono tracking-wider mb-8">
              <span className="w-2 h-2 rounded-full bg-emerald-500 dot-pulse" />
              <span>Singapore · Sovereign AI & Private LLM Specialist · Open to Opportunities</span>
            </div>

            {/* Profile Photo & Headline Layout */}
            <div className="flex flex-col items-center mb-8">
              <div className="relative mb-6 group">
                <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 opacity-70 blur-md group-hover:opacity-100 transition-opacity" />
                <img
                  src={profile.portrait}
                  width={190}
                  height={190}
                  alt={profile.name}
                  className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-3xl object-cover ring-4 ring-white shadow-2xl group-hover:scale-105 transition-transform"
                />
                <div className="absolute -bottom-2 -right-2 px-3 py-1 bg-slate-900 text-white text-[11px] font-mono font-semibold rounded-full shadow-lg border border-slate-700">
                  Senior FDE
                </div>
              </div>

              <h1 className="font-serif font-extrabold text-4xl sm:text-6xl md:text-7xl text-slate-900 tracking-tight leading-[1.05] mb-6">
                Senior AI Engineer <br />
                <span className="text-gradient-primary">Forward Deployed Engineer</span>
              </h1>

              <p className="text-slate-600 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed font-text">
                Taking AI solutions from business problems to production-grade systems inside client VPCs, air-gapped networks, and Kubernetes GPU clusters.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-sm font-semibold transition-all shadow-lg shadow-indigo-600/25 hover:scale-[1.02]"
              >
                <span>🚀 Browse 11 Real Projects</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 1v12M1 7l6 6 6-6" /></svg>
              </a>
              <a
                href="/fde"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 rounded-xl text-sm font-semibold transition-all shadow-sm"
              >
                <span>📑 Read FDE Playbook</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 7h12M9 3l4 4-4 4" /></svg>
              </a>
            </div>

            {/* Metric Banner */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xl shadow-slate-200/50">
              <div className="text-center p-2">
                <p className="font-serif font-extrabold text-2xl sm:text-3xl text-indigo-600">11 Real Systems</p>
                <p className="font-mono text-xs text-slate-500 mt-1 uppercase tracking-wider font-medium">Local Codebase Repos</p>
              </div>
              <div className="text-center p-2">
                <p className="font-serif font-extrabold text-2xl sm:text-3xl text-purple-600">100% Private</p>
                <p className="font-mono text-xs text-slate-500 mt-1 uppercase tracking-wider font-medium">Air-Gapped & On-Prem</p>
              </div>
              <div className="text-center p-2">
                <p className="font-serif font-extrabold text-2xl sm:text-3xl text-cyan-600">vLLM & Rust</p>
                <p className="font-mono text-xs text-slate-500 mt-1 uppercase tracking-wider font-medium">GPU Inference Engine</p>
              </div>
              <div className="text-center p-2">
                <p className="font-serif font-extrabold text-2xl sm:text-3xl text-emerald-600">Full Lifecycle</p>
                <p className="font-mono text-xs text-slate-500 mt-1 uppercase tracking-wider font-medium">Problem → Cost Opt</p>
              </div>
            </div>
          </Reveal>

          {/* ===== PRODUCTION PIPELINE FLOW ===== */}
          <Reveal delay={200} className="mt-12 p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-2xl relative overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-2">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-indigo-400 font-semibold">End-To-End Architecture Flow</span>
                <h3 className="font-serif font-bold text-2xl text-white mt-1">The Complete Enterprise AI Pipeline</h3>
              </div>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-xs font-mono text-emerald-400 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 dot-pulse" /> Production Pipeline Nodes
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-5 md:grid-cols-10 gap-2">
              {productionPipeline.map((node, i) => (
                <div
                  key={i}
                  className="group p-3 rounded-xl border border-slate-800 bg-slate-950/80 hover:border-indigo-500 hover:bg-indigo-950/40 transition-all flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-[10px] text-indigo-400 font-bold">{String(i + 1).padStart(2, '0')}</span>
                    {i < productionPipeline.length - 1 && (
                      <span className="hidden md:inline text-slate-600 text-xs">→</span>
                    )}
                  </div>
                  <p className="text-xs font-semibold text-white group-hover:text-indigo-300 leading-tight mb-1">{node.name}</p>
                  <p className="text-[10px] text-slate-400 leading-snug line-clamp-2">{node.detail}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== OVERVIEW & POSITIONING ===== */}
      <section id="profile" className="py-24 px-6 border-t border-slate-200">
        <Reveal className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-12 lg:gap-16 items-start">
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xl shadow-slate-200/50 flex flex-col items-center lg:items-start text-center lg:text-left">
              <img
                src={profile.portrait}
                width={140}
                height={140}
                alt={profile.name}
                className="w-32 h-32 rounded-2xl object-cover ring-4 ring-indigo-100 shadow-lg mb-4"
              />
              <h2 className="font-serif font-bold text-2xl text-slate-900 mb-1">{profile.name}</h2>
              <p className="text-xs font-mono text-indigo-600 font-semibold mb-2">{profile.role}</p>
              <p className="text-xs text-slate-500 mb-6">{profile.location} · Founder @ KaviAI</p>

              <div className="flex flex-col gap-2.5 w-full">
                <a
                  href={`mailto:${profile.email}`}
                  className="w-full py-2.5 bg-slate-900 text-white rounded-xl text-xs font-mono uppercase tracking-wider font-semibold text-center hover:bg-slate-800 transition-colors shadow-md"
                >
                  Direct Email
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener"
                  className="w-full py-2.5 border border-slate-200 bg-slate-50 text-slate-700 rounded-xl text-xs font-mono tracking-wider text-center hover:bg-slate-100 transition-colors font-medium"
                >
                  GitHub (70+ Repos)
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener"
                  className="w-full py-2.5 border border-slate-200 bg-slate-50 text-slate-700 rounded-xl text-xs font-mono tracking-wider text-center hover:bg-slate-100 transition-colors font-medium"
                >
                  LinkedIn Profile
                </a>
              </div>
            </div>

            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-indigo-600 font-bold mb-3 block">Forward Deployed Engineering</span>
              <h3 className="font-serif font-bold text-3xl sm:text-4xl text-slate-900 leading-tight mb-6 tracking-tight">
                Embedding inside customer teams to ship Sovereign AI that works inside their walls.
              </h3>

              <div className="space-y-4 text-slate-600 leading-relaxed text-base mb-8">
                <p>
                  As a <strong className="text-slate-900">Senior AI Engineer & Forward Deployed Engineer (FDE)</strong>, I sit inside customer engineering repos, infrastructure clusters, and compliance reviews to build, deploy, and scale AI systems.
                </p>
                <p>
                  My specialism is <strong className="text-indigo-600">Sovereign AI & Private On-Premises Infrastructure</strong> — tuning and serving open-weight models (Llama 3, Qwen2, DeepSeek, Mistral) in private VPCs, air-gapped data centers, or local GPU nodes for banks, healthcare systems, and regulated enterprises.
                </p>
                <p>
                  From fine-tuning open weights to containerized vLLM serving, hybrid vector retrieval, agent tool calling, and Kubernetes GPU scaling — I deliver fully operational AI systems with complete cost optimization and self-hosted observability.
                </p>
              </div>

              <span className="font-mono text-xs uppercase tracking-widest text-slate-400 font-bold mb-4 block">Core Expertise</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {expertiseAreas.map((area) => (
                  <div key={area} className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-slate-200/90 text-xs font-mono text-slate-800 shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-indigo-600 shrink-0" />
                    <span className="font-medium">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ===== FEATURED 11 REAL PROJECTS SHOWCASE ===== */}
      <section id="projects" className="py-24 px-6 border-t border-slate-200 bg-slate-100/50">
        <Reveal className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-indigo-600 font-bold mb-2 block">Real System Repositories</span>
              <h2 className="font-serif font-bold text-3xl sm:text-5xl text-slate-900 tracking-tight">
                11 Featured Production Systems
              </h2>
              <p className="text-slate-500 text-base mt-2 max-w-xl">
                Click any project card to open an interactive deep dive into its architecture flow, API endpoints, performance metrics, and tech stack.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {detailedProjectsList.map((p) => (
              <div
                key={p.id}
                onClick={() => setSelectedProject(p)}
                className="group card-light p-7 sm:p-8 rounded-3xl cursor-pointer flex flex-col justify-between border border-slate-200/90 hover:border-indigo-400 transition-all card-glow-primary"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-serif font-extrabold text-3xl text-slate-300 group-hover:text-indigo-600 transition-colors">
                      {p.number}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-mono font-semibold">
                      {p.badge}
                    </span>
                  </div>

                  <h3 className="font-serif font-bold text-2xl text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-xs font-mono text-indigo-600 font-medium mb-3">{p.tagline}</p>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6 line-clamp-3">{p.description}</p>

                  {/* Highlights */}
                  <div className="space-y-2 border-t border-slate-100 pt-4 mb-6">
                    {p.features.slice(0, 3).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {p.techStack.slice(0, 5).map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 text-[11px] rounded-lg bg-slate-100 border border-slate-200 text-slate-600 font-mono"
                      >
                        {tech.name}
                      </span>
                    ))}
                    {p.techStack.length > 5 && (
                      <span className="px-2 py-1 text-[11px] font-mono text-slate-400">+{p.techStack.length - 5}</span>
                    )}
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(p);
                    }}
                    className="w-full py-3 bg-slate-900 hover:bg-indigo-600 text-white rounded-xl text-xs font-mono uppercase tracking-wider font-semibold transition-colors flex items-center justify-center gap-2 shadow-sm"
                  >
                    <span>View Architecture & System Design</span>
                    <span>→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ===== THE COMPLETE PRODUCTION LIFECYCLE ===== */}
      <section id="lifecycle" className="py-24 px-6 border-t border-slate-200 bg-white">
        <Reveal className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-indigo-600 font-bold mb-3 block">Complete Engineering Lifecycle</span>
            <h2 className="font-serif font-bold text-3xl sm:text-5xl text-slate-900 mb-4 tracking-tight">
              Business Problem → Production AI
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Not just an AI developer. An FDE who owns the full lifecycle from initial business discovery to GPU cost optimization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {lifecycleStages.map((stage) => (
              <div
                key={stage.step}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-indigo-400 hover:bg-white transition-all shadow-sm"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-serif font-extrabold text-2xl text-indigo-600">{stage.step}</span>
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                </div>
                <h3 className="font-serif font-bold text-lg text-slate-900 mb-2">{stage.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{stage.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ===== BUSINESS INTEGRATION CAPABILITIES ===== */}
      <section id="capabilities" className="py-24 px-6 border-t border-slate-200 bg-slate-50">
        <Reveal className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-indigo-600 font-bold mb-2 block">Integration Capabilities</span>
            <h2 className="font-serif font-bold text-3xl sm:text-5xl text-slate-900 tracking-tight mb-4">
              Integrating AI Into Operational Systems
            </h2>
            <p className="text-slate-600 text-base">
              Models add value when integrated cleanly into business workflows, databases, and core APIs.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {integrationAreas.map((area) => (
              <div
                key={area}
                className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-indigo-400 hover:shadow-md transition-all text-center group"
              >
                <div className="w-11 h-11 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center mx-auto mb-3 text-indigo-600 font-mono text-base group-hover:scale-110 transition-transform">
                  ⚡
                </div>
                <h4 className="font-serif font-bold text-base text-slate-900 mb-1">{area}</h4>
                <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider block font-medium">Integrated</span>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ===== OPEN SOURCE TECH STACK GRID ===== */}
      <section id="stack" className="py-24 px-6 border-t border-slate-200 bg-white">
        <Reveal className="max-w-6xl mx-auto">
          <div className="mb-16 max-w-3xl">
            <span className="font-mono text-xs uppercase tracking-widest text-indigo-600 font-bold mb-3 block">Technology Stack</span>
            <h2 className="font-serif font-bold text-3xl sm:text-5xl text-slate-900 mb-4 tracking-tight">
              Open-Source & Self-Hosted Stack
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Proven technology choices enabling enterprises to run AI models on-premises or in private clouds without third-party API dependencies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {stackCategories.map((cat) => (
              <div
                key={cat.name}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-indigo-300 transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-mono text-xs font-bold tracking-wider uppercase text-indigo-600">{cat.name}</h3>
                  <span className="text-slate-400 text-xs font-mono">{cat.tools.length} Tools</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.tools.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1.5 text-xs rounded-lg bg-white border border-slate-200/90 text-slate-700 font-mono font-medium hover:border-indigo-400 hover:text-indigo-600 transition-colors"
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

      {/* ===== EXPERIENCE TIMELINE ===== */}
      <section id="experience" className="py-24 px-6 border-t border-slate-200 bg-slate-50">
        <Reveal className="max-w-5xl mx-auto">
          <div className="mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-indigo-600 font-bold mb-3 block">Career Track Record</span>
            <h2 className="font-serif font-bold text-3xl sm:text-5xl text-slate-900 mb-4 tracking-tight">
              Enterprise Delivery Experience
            </h2>
            <p className="text-slate-600 text-base max-w-2xl">
              From regulated banking change control to SaaS GPU platforms and forward-deployed client engagements.
            </p>
          </div>

          <div className="space-y-8">
            {jobs.map((job, i) => (
              <div
                key={i}
                className="timeline-item-light p-7 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="font-serif font-bold text-xl text-slate-900">{job.title}</h3>
                    <p className="text-sm font-mono text-indigo-600 font-semibold mt-0.5">{job.org}</p>
                  </div>
                  <div className="flex items-center gap-3 text-xs font-mono text-slate-500 font-medium">
                    <span className="px-3 py-1 rounded-md bg-slate-100 border border-slate-200">{job.when}</span>
                    <span>{job.location}</span>
                  </div>
                </div>

                <ul className="space-y-2.5 pt-2">
                  {job.bullets.map((b, j) => (
                    <li key={j} className="text-sm text-slate-600 leading-relaxed pl-4 relative before:content-['▹'] before:absolute before:left-0 before:text-indigo-600 font-normal">
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
      <section id="contact" className="py-24 px-6 border-t border-slate-200 bg-white relative">
        <Reveal className="max-w-4xl mx-auto text-center">
          <span className="font-mono text-xs uppercase tracking-widest text-indigo-600 font-bold mb-3 block">Get In Touch</span>
          <h2 className="font-serif font-bold text-3xl sm:text-5xl text-slate-900 mb-6 tracking-tight">
            Need a Senior AI Engineer or FDE?
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-10 text-base leading-relaxed font-text">
            Available for Senior AI Engineer, Forward Deployed Engineer (FDE), or Sovereign AI Infrastructure contracts and permanent roles across Singapore, APAC, and EMEA.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-sm font-semibold transition-all shadow-lg shadow-indigo-600/25 hover:scale-[1.02]"
            >
              Email {profile.email}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M1 7h12M9 3l4 4-4 4" /></svg>
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2.5 px-8 py-4 border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 rounded-xl text-sm font-semibold transition-all shadow-sm"
            >
              LinkedIn Profile
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2.5 px-8 py-4 border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 rounded-xl text-sm font-semibold transition-all shadow-sm"
            >
              GitHub (70+ Repos)
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
            {[
              { title: 'Direct Email', link: `mailto:${profile.email}`, label: profile.email, note: 'Primary contact method.' },
              { title: 'LinkedIn', link: profile.linkedin, label: '/in/machhakiran', note: 'Full career history.' },
              { title: 'GitHub', link: profile.github, label: 'machhakiran', note: 'Agents, RAG & GPU infra.' },
              { title: 'Company', link: profile.companyUrl, label: 'KaviAI →', note: 'Agentic workshops & platform.' },
            ].map((c) => (
              <div key={c.title} className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <p className="font-mono text-[10px] tracking-wider uppercase text-slate-400 font-semibold mb-2">{c.title}</p>
                <a href={c.link} target={c.link.startsWith('mailto') ? undefined : '_blank'} rel="noopener" className="text-sm font-bold text-slate-900 hover:text-indigo-600 transition-colors block mb-1">
                  {c.label}
                </a>
                <p className="text-xs text-slate-500">{c.note}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="border-t border-slate-200 py-10 px-6 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
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
