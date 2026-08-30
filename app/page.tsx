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
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-indigo-500/20 selection:text-indigo-700">
      {/* ARCHITECTURE MODAL */}
      <ProjectArchitectureModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* ===== HEADER NAVIGATION ===== */}
      <header className="fixed top-0 inset-x-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center font-bold text-white text-base shadow-sm group-hover:bg-indigo-700 transition-colors">
              KM
            </div>
            <div className="flex flex-col text-left">
              <span className="font-bold text-base tracking-tight text-slate-900 group-hover:text-indigo-600 transition-colors">
                {site.name}
              </span>
              <span className="text-[11px] font-mono text-slate-500 font-medium -mt-0.5">Senior AI & FDE Specialist</span>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-1">
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
                className="px-3.5 py-1.5 text-xs font-mono tracking-wide text-slate-600 hover:text-indigo-600 transition-colors rounded-lg hover:bg-slate-100 font-semibold"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-mono uppercase tracking-wider font-bold transition-all shadow-xs"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </header>

      {/* ===== HERO SECTION (MODERN 2-COLUMN BENTO) ===== */}
      <section className="pt-28 pb-16 px-6 bg-gradient-to-b from-indigo-50/70 via-slate-50 to-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Headline & Action */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              {/* Status pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-200 bg-white shadow-xs text-xs text-indigo-700 font-mono font-semibold mb-6">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 dot-pulse" />
                <span>Singapore · Sovereign AI & FDE Specialist · Open to Roles</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12] mb-5">
                Senior AI Engineer <br />
                <span className="text-indigo-600">Forward Deployed Engineer</span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mb-8 font-normal">
                Taking private LLMs, autonomous agent systems, and sovereign AI infrastructure from high-level business problems to production-grade deployments inside client VPCs and air-gapped clusters.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 mb-10 w-full sm:w-auto">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-sm font-bold transition-all shadow-md shadow-indigo-600/20 hover:scale-[1.01]"
                >
                  <span>🚀 Explore 11 Production Systems</span>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 1v12M1 7l6 6 6-6" /></svg>
                </a>
                <a
                  href="/fde"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 rounded-xl text-sm font-bold transition-all shadow-xs"
                >
                  <span>📑 FDE Playbook</span>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 7h12M9 3l4 4-4 4" /></svg>
                </a>
              </div>

              {/* Quick Metrics */}
              <div className="grid grid-cols-3 gap-4 w-full border-t border-slate-200/80 pt-6">
                <div>
                  <p className="text-2xl font-extrabold text-slate-900">11 Repos</p>
                  <p className="text-xs font-mono text-slate-500 font-medium uppercase">Full Systems Built</p>
                </div>
                <div>
                  <p className="text-2xl font-extrabold text-indigo-600">100% On-Prem</p>
                  <p className="text-xs font-mono text-slate-500 font-medium uppercase">Air-Gapped & VPC</p>
                </div>
                <div>
                  <p className="text-2xl font-extrabold text-emerald-600">vLLM + K8s</p>
                  <p className="text-xs font-mono text-slate-500 font-medium uppercase">GPU Inference</p>
                </div>
              </div>
            </div>

            {/* Right Column: Refined Profile Bento Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-md bg-white border border-slate-200 rounded-3xl p-7 shadow-xl shadow-slate-200/60 flex flex-col items-center text-center relative overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500" />

                <div className="relative mb-5 mt-2">
                  <img
                    src={profile.portrait}
                    width={160}
                    height={160}
                    alt={profile.name}
                    className="w-36 h-36 rounded-2xl object-cover ring-4 ring-indigo-50 shadow-md"
                  />
                  <span className="absolute bottom-2 right-2 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full" />
                </div>

                <h2 className="text-2xl font-bold text-slate-900 mb-1">{profile.name}</h2>
                <p className="text-xs font-mono font-bold text-indigo-600 uppercase tracking-wider mb-2">
                  Senior AI & Forward Deployed Engineer
                </p>
                <p className="text-xs text-slate-500 mb-5">{profile.location} · Founder @ KaviAI</p>

                {/* Tech chips */}
                <div className="flex flex-wrap justify-center gap-1.5 mb-6">
                  {['Private AI', 'RAG & Vectors', 'vLLM', 'AI Agents', 'Kubernetes', 'FastAPI'].map((tag) => (
                    <span key={tag} className="px-2.5 py-1 text-[11px] font-mono bg-slate-100 border border-slate-200 text-slate-700 rounded-lg font-medium">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Quick actions */}
                <div className="grid grid-cols-2 gap-2.5 w-full">
                  <a
                    href={`mailto:${profile.email}`}
                    className="py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-mono font-bold transition-colors"
                  >
                    Direct Email
                  </a>
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener"
                    className="py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-mono font-bold transition-colors"
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
      <section id="pipeline" className="py-16 px-6 bg-white border-b border-slate-200">
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

          {/* Clean 10-node light card grid */}
          <div className="grid grid-cols-2 sm:grid-cols-5 md:grid-cols-10 gap-2.5">
            {productionPipeline.map((node, i) => (
              <div
                key={i}
                className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-indigo-50/60 hover:border-indigo-300 transition-all flex flex-col justify-between group shadow-2xs"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs text-indigo-600 font-extrabold">{String(i + 1).padStart(2, '0')}</span>
                  {i < productionPipeline.length - 1 && (
                    <span className="hidden md:inline text-slate-300 text-xs">→</span>
                  )}
                </div>
                <p className="text-xs font-bold text-slate-900 group-hover:text-indigo-900 leading-tight mb-1">{node.name}</p>
                <p className="text-[10px] text-slate-500 leading-snug">{node.detail}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ===== FEATURED 11 REAL PROJECTS SHOWCASE ===== */}
      <section id="projects" className="py-24 px-6 bg-[#F8FAFC]">
        <Reveal className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-600 block mb-2">
                Real System Repositories
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
                11 Featured Production Systems
              </h2>
              <p className="text-slate-600 text-base mt-2 max-w-2xl font-normal">
                Click any project card to inspect its full architecture flow, problem/solution breakdown, API specs, and tech stack.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {detailedProjectsList.map((p) => (
              <div
                key={p.id}
                onClick={() => setSelectedProject(p)}
                className="group bg-white p-7 rounded-2xl border border-slate-200 hover:border-indigo-400 hover:shadow-lg transition-all cursor-pointer flex flex-col justify-between shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-serif font-extrabold text-2xl text-slate-300 group-hover:text-indigo-600 transition-colors">
                      {p.number}
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-mono font-bold">
                      {p.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-1.5 group-hover:text-indigo-600 transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-xs font-mono text-indigo-600 font-semibold mb-3 leading-snug">{p.tagline}</p>
                  <p className="text-xs text-slate-600 leading-relaxed mb-5 line-clamp-3 font-normal">{p.description}</p>

                  {/* Highlights */}
                  <div className="space-y-1.5 border-t border-slate-100 pt-3.5 mb-5">
                    {p.features.slice(0, 3).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-4">
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
                    className="w-full py-2.5 bg-slate-900 hover:bg-indigo-600 text-white rounded-xl text-xs font-mono uppercase tracking-wider font-bold transition-colors flex items-center justify-center gap-2"
                  >
                    <span>View System Architecture</span>
                    <span>→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ===== OVERVIEW & FORWARD DEPLOYED POSITIONING ===== */}
      <section id="profile" className="py-24 px-6 bg-white border-t border-slate-200">
        <Reveal className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4 bg-slate-50 border border-slate-200 rounded-3xl p-8 flex flex-col items-center text-center">
              <img
                src={profile.portrait}
                width={130}
                height={130}
                alt={profile.name}
                className="w-32 h-32 rounded-2xl object-cover ring-4 ring-white shadow-md mb-4"
              />
              <h2 className="text-2xl font-bold text-slate-900 mb-1">{profile.name}</h2>
              <p className="text-xs font-mono text-indigo-600 font-bold uppercase tracking-wide mb-2">{profile.role}</p>
              <p className="text-xs text-slate-500 mb-6">{profile.location} · Founder @ KaviAI</p>

              <div className="flex flex-col gap-2.5 w-full">
                <a
                  href={`mailto:${profile.email}`}
                  className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-mono uppercase font-bold text-center transition-colors"
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
                Forward Deployed Engineering
              </span>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
                Embedding inside customer teams to ship Sovereign AI that runs securely inside their walls.
              </h3>

              <div className="space-y-4 text-slate-600 leading-relaxed text-base mb-8">
                <p>
                  As a <strong className="text-slate-900">Senior AI Engineer & Forward Deployed Engineer (FDE)</strong>, I sit inside customer engineering repositories, infrastructure clusters, and compliance reviews to design, build, and deploy production-grade AI systems.
                </p>
                <p>
                  My specialization is <strong className="text-indigo-600">Sovereign AI & Private On-Premises Infrastructure</strong> — fine-tuning and serving open-weight models (Llama 3, Qwen2, DeepSeek, Mistral) inside private VPCs, air-gapped data centers, or local GPU nodes for banks, healthcare providers, and regulated enterprises.
                </p>
                <p>
                  From fine-tuning open weights to containerized vLLM serving, hybrid vector retrieval, agent tool calling, and Kubernetes GPU scaling — I deliver fully operational AI systems with complete cost optimization and self-hosted observability.
                </p>
              </div>

              <span className="text-xs font-mono uppercase tracking-widest text-slate-400 font-bold mb-4 block">Core Expertise</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {expertiseAreas.map((area) => (
                  <div key={area} className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono text-slate-800">
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
      <section id="lifecycle" className="py-24 px-6 bg-[#F8FAFC] border-t border-slate-200">
        <Reveal className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-mono uppercase tracking-widest text-indigo-600 font-bold mb-2 block">
              Complete Delivery Model
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
              Business Problem → Production AI
            </h2>
            <p className="text-slate-600 text-base">
              An FDE who owns the full lifecycle from initial discovery to long-term GPU cost optimization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {lifecycleStages.map((stage) => (
              <div
                key={stage.step}
                className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-indigo-300 transition-all shadow-xs"
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
      <section id="capabilities" className="py-24 px-6 bg-white border-t border-slate-200">
        <Reveal className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-mono uppercase tracking-widest text-indigo-600 font-bold mb-2 block">
              Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
              Integrating AI Into Operational Systems
            </h2>
            <p className="text-slate-600 text-base">
              Models create value when integrated cleanly into operational workflows, databases, and core APIs.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {integrationAreas.map((area) => (
              <div
                key={area}
                className="p-5 rounded-xl bg-slate-50 border border-slate-200 hover:border-indigo-400 hover:bg-white transition-all text-center group shadow-2xs"
              >
                <div className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center mx-auto mb-2.5 text-indigo-700 font-mono text-base font-bold group-hover:scale-105 transition-transform">
                  ⚡
                </div>
                <h4 className="font-bold text-sm text-slate-900 mb-0.5">{area}</h4>
                <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider block font-semibold">Production</span>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ===== OPEN SOURCE TECH STACK GRID ===== */}
      <section id="stack" className="py-24 px-6 bg-[#F8FAFC] border-t border-slate-200">
        <Reveal className="max-w-7xl mx-auto">
          <div className="mb-14 max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-widest text-indigo-600 font-bold mb-2 block">
              Infrastructure & Tooling
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
              Open-Source & Self-Hosted Stack
            </h2>
            <p className="text-slate-600 text-base">
              Proven technology choices enabling enterprises to run AI models on-premises without third-party API dependencies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {stackCategories.map((cat) => (
              <div
                key={cat.name}
                className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-indigo-300 transition-all shadow-xs"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-mono text-xs font-bold tracking-wider uppercase text-indigo-600">{cat.name}</h3>
                  <span className="text-slate-400 text-xs font-mono font-medium">{cat.tools.length} Tools</span>
                </div>
                <div className="flex flex-wrap gap-2">
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
      <section id="experience" className="py-24 px-6 bg-white border-t border-slate-200">
        <Reveal className="max-w-5xl mx-auto">
          <div className="mb-14">
            <span className="text-xs font-mono uppercase tracking-widest text-indigo-600 font-bold mb-2 block">
              Track Record
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
              Enterprise Delivery Experience
            </h2>
            <p className="text-slate-600 text-base max-w-2xl font-normal">
              From regulated banking change control to SaaS GPU platforms and forward-deployed client engagements.
            </p>
          </div>

          <div className="space-y-6">
            {jobs.map((job, i) => (
              <div
                key={i}
                className="timeline-item-light p-6 sm:p-7 rounded-2xl bg-slate-50 border border-slate-200 hover:border-indigo-300 transition-all shadow-2xs"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">{job.title}</h3>
                    <p className="text-xs font-mono text-indigo-600 font-bold mt-0.5">{job.org}</p>
                  </div>
                  <div className="flex items-center gap-3 text-xs font-mono text-slate-500 font-medium">
                    <span className="px-2.5 py-1 rounded-md bg-white border border-slate-200">{job.when}</span>
                    <span>{job.location}</span>
                  </div>
                </div>

                <ul className="space-y-2 pt-1">
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
      <section id="contact" className="py-24 px-6 bg-slate-900 text-white relative">
        <Reveal className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 font-bold mb-2 block">
            Direct Contact
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-5 tracking-tight">
            Need a Senior AI Engineer or FDE?
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-10 text-base leading-relaxed font-normal">
            Available for Senior AI Engineer, Forward Deployed Engineer (FDE), or Sovereign AI Infrastructure contracts and permanent roles across Singapore, APAC, and EMEA.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-sm font-bold transition-all shadow-lg"
            >
              Email {profile.email}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M1 7h12M9 3l4 4-4 4" /></svg>
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-slate-700 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-sm font-bold transition-all"
            >
              LinkedIn Profile
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-slate-700 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-sm font-bold transition-all"
            >
              GitHub (70+ Repos)
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
            {[
              { title: 'Direct Email', link: `mailto:${profile.email}`, label: profile.email, note: 'Fastest response route.' },
              { title: 'LinkedIn', link: profile.linkedin, label: '/in/machhakiran', note: 'Career history.' },
              { title: 'GitHub', link: profile.github, label: 'machhakiran', note: '70+ repositories.' },
              { title: 'Company', link: profile.companyUrl, label: 'KaviAI →', note: 'AI agent workshops.' },
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
