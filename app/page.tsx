import { site, heroData, lifecycleStages, productionPipeline } from '@/lib/data/site';
import { profile, expertiseAreas, integrationAreas } from '@/lib/data/profile';
import { projects } from '@/lib/data/projects';
import { stackCategories } from '@/lib/data/stack';
import { jobs } from '@/lib/data/experience';
import { Reveal } from '@/components/ui/Reveal';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#060606] text-[#EAE6DF] font-text selection:bg-[#7B6FFF]/30">
      {/* ===== NAV ===== */}
      <header className="fixed top-0 inset-x-0 z-50 bg-[#060606]/85 backdrop-blur-xl border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#7B6FFF] to-[#5546FF] flex items-center justify-center font-serif font-bold text-white text-base shadow-lg shadow-[#7B6FFF]/20 group-hover:scale-105 transition-transform">
              K
            </div>
            <span className="font-serif font-bold text-base tracking-tight text-white group-hover:text-[#9D94FF] transition-colors">
              {site.name}
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {[
              { label: 'Profile', href: '#profile' },
              { label: 'Lifecycle', href: '#lifecycle' },
              { label: 'Capabilities', href: '#capabilities' },
              { label: 'Stack', href: '#stack' },
              { label: 'Projects', href: '#projects' },
              { label: 'Experience', href: '#experience' },
              { label: 'FDE Guide', href: '/fde' },
              { label: 'Blog', href: '/blog' },
            ].map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-3.5 py-1.5 text-xs font-mono tracking-wide text-white/50 hover:text-white transition-colors rounded-md hover:bg-white/[0.04]"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="px-4 py-2 bg-gradient-to-r from-[#7B6FFF] to-[#5546FF] text-white rounded-lg text-xs font-mono tracking-wider uppercase font-medium hover:opacity-90 transition-opacity shadow-md shadow-[#7B6FFF]/20"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </header>

      {/* ===== HERO ===== */}
      <section className="relative pt-36 pb-24 px-6 overflow-hidden">
        {/* Glow ambient background */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#7B6FFF]/10 blur-[130px] pointer-events-none rounded-full" />
        <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-[#F0A060]/5 blur-[100px] pointer-events-none rounded-full" />

        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center max-w-4xl mx-auto mb-16">
            {/* Status dot */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#7B6FFF]/30 bg-[#7B6FFF]/10 text-xs text-[#9D94FF] mb-8 font-mono tracking-wider shadow-inner">
              <span className="w-2 h-2 rounded-full bg-emerald-400 dot-pulse" />
              <span>Singapore · Sovereign & Private AI Specialist · Available for FDE & Engineering Roles</span>
            </div>

            <h1 className="font-serif font-extrabold text-[clamp(44px,6.5vw,82px)] leading-[1.02] tracking-[-0.03em] text-white mb-8">
              Senior AI Engineer <span className="text-[#9D94FF] font-light">|</span> Forward Deployed Engineer
            </h1>

            <p className="text-lg sm:text-2xl text-white/70 max-w-3xl mx-auto mb-10 leading-relaxed font-text">
              {heroData.tagline}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
              <a
                href={heroData.primaryHref}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-white text-[#060606] rounded-xl text-sm font-semibold hover:bg-white/90 transition-all shadow-xl shadow-white/5 hover:scale-[1.02]"
              >
                {heroData.primaryCta}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 1v12M1 7l6 6 6-6" /></svg>
              </a>
              <a
                href={heroData.secondaryHref}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 border border-white/15 bg-white/[0.02] rounded-xl text-sm text-white/80 font-medium hover:text-white hover:border-white/30 hover:bg-white/[0.05] transition-all"
              >
                {heroData.secondaryCta}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 7h12M9 3l4 4-4 4" /></svg>
              </a>
            </div>

            {/* Quick metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-md">
              <div>
                <p className="font-serif font-bold text-2xl text-white">Private & On-Prem</p>
                <p className="font-mono text-xs text-white/40 mt-1 uppercase tracking-wider">Air-Gapped / VPC</p>
              </div>
              <div>
                <p className="font-serif font-bold text-2xl text-[#9D94FF]">Open-Source Stack</p>
                <p className="font-mono text-xs text-white/40 mt-1 uppercase tracking-wider">vLLM, Triton, K8s</p>
              </div>
              <div>
                <p className="font-serif font-bold text-2xl text-white">Full Lifecycle</p>
                <p className="font-mono text-xs text-white/40 mt-1 uppercase tracking-wider">Problem → Cost Opt</p>
              </div>
              <div>
                <p className="font-serif font-bold text-2xl text-emerald-400">70+ Repos</p>
                <p className="font-mono text-xs text-white/40 mt-1 uppercase tracking-wider">Agents, RAG & Infra</p>
              </div>
            </div>
          </Reveal>

          {/* ===== PRODUCTION PIPELINE GRAPH VISUALIZER ===== */}
          <Reveal delay={200} className="mt-8 p-8 rounded-3xl border border-[#7B6FFF]/20 bg-[#7B6FFF]/[0.02] backdrop-blur-xl relative overflow-hidden">
            <div className="flex items-center justify-between mb-6">
              <div>
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#9D94FF]">End-to-End Architecture Flow</span>
                <h3 className="font-serif font-bold text-xl text-white mt-1">The Complete Enterprise AI Pipeline</h3>
              </div>
              <span className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-[11px] font-mono text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 dot-pulse" /> Production Ready
              </span>
            </div>

            {/* Pipeline sequence */}
            <div className="grid grid-cols-2 sm:grid-cols-5 md:grid-cols-10 gap-2">
              {productionPipeline.map((node, i) => (
                <div
                  key={i}
                  className="group p-3 rounded-xl border border-white/[0.07] bg-[#060606]/80 hover:border-[#7B6FFF]/50 hover:bg-[#7B6FFF]/10 transition-all flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-[10px] text-[#9D94FF] font-medium">{String(i + 1).padStart(2, '0')}</span>
                    {i < productionPipeline.length - 1 && (
                      <span className="hidden md:inline text-white/20 text-xs">→</span>
                    )}
                  </div>
                  <p className="text-xs font-semibold text-white/90 group-hover:text-white leading-tight mb-1">{node.name}</p>
                  <p className="text-[10px] text-white/40 leading-snug line-clamp-2">{node.detail}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== PROFILE & POSITIONING ===== */}
      <section id="profile" className="py-28 px-6 border-t border-white/[0.08] relative">
        <Reveal className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-12 lg:gap-16">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="relative mb-6 group">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#7B6FFF] to-[#F0A060] opacity-40 blur group-hover:opacity-70 transition-opacity" />
                <img
                  src={profile.portrait}
                  width={180}
                  height={180}
                  alt={profile.name}
                  className="relative w-44 h-44 rounded-2xl object-cover ring-2 ring-white/10 shadow-2xl"
                />
              </div>
              <h2 className="font-serif font-bold text-3xl text-white mb-1.5">{profile.name}</h2>
              <p className="text-sm text-[#9D94FF] font-mono mb-2">{profile.role}</p>
              <p className="text-xs text-white/40 mb-6">{profile.location} · {profile.company}</p>

              <div className="flex flex-wrap gap-2 justify-center lg:justify-start w-full">
                <a
                  href={`mailto:${profile.email}`}
                  className="flex-1 px-4 py-2.5 bg-white text-[#060606] rounded-xl text-xs font-semibold hover:bg-white/90 transition-colors text-center shadow-lg"
                >
                  Contact Direct
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener"
                  className="px-4 py-2.5 border border-white/15 rounded-xl text-xs text-white/70 hover:text-white hover:border-white/30 transition-colors"
                >
                  GitHub
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener"
                  className="px-4 py-2.5 border border-white/15 rounded-xl text-xs text-white/70 hover:text-white hover:border-white/30 transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            <div>
              <span className="label mb-3 block">Forward Deployed Engineering</span>
              <h3 className="font-serif font-bold text-3xl sm:text-4xl text-white leading-tight mb-6 tracking-[-0.02em]">
                Embedding inside customer teams to ship Private, Sovereign AI that works inside their walls.
              </h3>

              <div className="space-y-4 text-white/70 leading-relaxed text-base mb-8">
                <p>
                  As a <strong className="text-white">Senior AI Engineer & Forward Deployed Engineer (FDE)</strong>, I sit directly inside customer codebases, clusters, and security reviews. I bridge the gap between executive business goals and deep technical implementation.
                </p>
                <p>
                  My core specialization is <strong className="text-[#9D94FF]">Sovereign AI & Private On-Premises Infrastructure</strong> — deploying open-weight models (Llama, Qwen, DeepSeek, Mistral) into private VPCs, air-gapped data centers, or local GPU nodes for banks, healthcare providers, and regulated enterprises who cannot share data with third-party APIs.
                </p>
                <p>
                  From fine-tuning open weights with LoRA to containerized vLLM serving, vector retrieval, multi-agent orchestration, and Kubernetes GPU scaling — I deliver fully operational AI systems with complete cost optimization and self-hosted observability.
                </p>
              </div>

              <span className="label mb-4 block">Core Expertise</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {expertiseAreas.map((area) => (
                  <div key={area} className="flex items-center gap-3 p-3 rounded-xl border border-white/[0.06] bg-white/[0.01] text-xs font-mono text-white/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#7B6FFF] shrink-0" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ===== THE COMPLETE PRODUCTION LIFECYCLE ===== */}
      <section id="lifecycle" className="py-28 px-6 border-t border-white/[0.08] bg-white/[0.005]">
        <Reveal className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="label mb-3 block">End-To-End Delivery</span>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-white mb-4 tracking-[-0.02em]">
              Business Problem → Production AI
            </h2>
            <p className="text-white/50 text-base leading-relaxed">
              Not just an AI developer. An FDE who owns the complete lifecycle from initial business discovery to long-term GPU cost optimization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {lifecycleStages.map((stage) => (
              <div
                key={stage.step}
                className="group p-6 rounded-2xl border border-white/[0.08] bg-[#060606] hover:border-[#7B6FFF]/40 hover:bg-[#7B6FFF]/[0.03] transition-all card-glow"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-serif font-extrabold text-2xl text-[#9D94FF]">{stage.step}</span>
                  <span className="w-2 h-2 rounded-full bg-white/20 group-hover:bg-[#7B6FFF] transition-colors" />
                </div>
                <h3 className="font-serif font-bold text-lg text-white mb-2 tracking-tight">{stage.title}</h3>
                <p className="text-xs text-white/50 leading-relaxed">{stage.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ===== BUSINESS INTEGRATION CAPABILITIES ===== */}
      <section id="capabilities" className="py-28 px-6 border-t border-white/[0.08]">
        <Reveal className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="label mb-3 block">Business-Focused AI Engineering</span>
              <h2 className="font-serif font-bold text-3xl sm:text-4xl text-white tracking-[-0.02em]">
                How I Integrate AI into Real Business Systems
              </h2>
            </div>
            <p className="text-white/50 max-w-md text-sm leading-relaxed">
              Models only add value when integrated cleanly into operational workflows, databases, and core business APIs.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {integrationAreas.map((area) => (
              <div
                key={area}
                className="p-5 rounded-xl border border-white/[0.08] bg-white/[0.02] hover:border-[#7B6FFF]/40 hover:bg-[#7B6FFF]/10 transition-all text-center group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#7B6FFF]/10 border border-[#7B6FFF]/20 flex items-center justify-center mx-auto mb-3 text-[#9D94FF] font-mono text-sm group-hover:scale-110 transition-transform">
                  ⚡
                </div>
                <h4 className="font-serif font-bold text-sm text-white mb-1">{area}</h4>
                <span className="font-mono text-[10px] text-white/40 uppercase tracking-wider block">Integrated</span>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ===== OPEN SOURCE & INFRASTRUCTURE TECH STACK ===== */}
      <section id="stack" className="py-28 px-6 border-t border-white/[0.08] bg-white/[0.005]">
        <Reveal className="max-w-6xl mx-auto">
          <div className="mb-16 max-w-3xl">
            <span className="label mb-3 block">Technology Stack</span>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-white mb-4 tracking-[-0.02em]">
              Open-Source, Self-Hosted & Production-Grade Stack
            </h2>
            <p className="text-white/50 text-base leading-relaxed">
              Curated technologies enabling enterprises to run AI models on-premises or in private cloud without third-party API dependencies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {stackCategories.map((cat) => (
              <div
                key={cat.name}
                className="p-6 rounded-2xl border border-white/[0.08] bg-[#060606] hover:border-white/20 transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-mono text-xs font-semibold tracking-wider uppercase text-[#9D94FF]">{cat.name}</h3>
                  <span className="text-white/20 text-xs font-mono">{cat.tools.length} Technologies</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.tools.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1.5 text-xs rounded-lg border border-white/[0.08] bg-white/[0.02] text-white/70 font-mono hover:text-white hover:border-[#7B6FFF]/40 transition-colors"
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

      {/* ===== FEATURED PROJECTS ===== */}
      <section id="projects" className="py-28 px-6 border-t border-white/[0.08]">
        <Reveal className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="label mb-3 block">Featured Systems</span>
              <h2 className="font-serif font-bold text-3xl sm:text-4xl text-white tracking-[-0.02em]">
                Production AI Systems & Open-Source Infrastructure
              </h2>
            </div>
            <p className="text-white/50 max-w-md text-sm leading-relaxed">
              Six production-grade systems built for private deployment, high concurrency, and strict enterprise compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((p) => (
              <div
                key={p.number}
                className="group p-8 rounded-3xl border border-white/[0.08] bg-[#060606] hover:border-[#7B6FFF]/40 hover:bg-[#7B6FFF]/[0.02] transition-all card-glow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-serif font-extrabold text-4xl text-white/15 group-hover:text-[#9D94FF] transition-colors">{p.number}</span>
                    <span className="px-3 py-1 rounded-full border border-[#7B6FFF]/30 bg-[#7B6FFF]/10 text-[11px] font-mono text-[#9D94FF]">
                      {p.badge}
                    </span>
                  </div>

                  <h3 className="font-serif font-bold text-2xl text-white mb-2 tracking-tight group-hover:text-[#9D94FF] transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-xs font-mono text-white/60 mb-4">{p.tagline}</p>
                  <p className="text-sm text-white/50 leading-relaxed mb-6">{p.description}</p>

                  {/* Highlights */}
                  <div className="mb-6 space-y-2 border-t border-b border-white/[0.06] py-4">
                    {p.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2.5 text-xs text-white/70">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {p.stack.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-[11px] rounded-md border border-white/[0.06] bg-white/[0.02] text-white/50 font-mono"
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

      {/* ===== ENTERPRISE EXPERIENCE TIMELINE ===== */}
      <section id="experience" className="py-28 px-6 border-t border-white/[0.08] bg-white/[0.005]">
        <Reveal className="max-w-5xl mx-auto">
          <div className="mb-16">
            <span className="label mb-3 block">Track Record</span>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-white mb-4 tracking-[-0.02em]">
              Enterprise Delivery & Engineering History
            </h2>
            <p className="text-white/50 text-base leading-relaxed max-w-2xl">
              From regulated banking change control to SaaS GPU platforms and forward-deployed client engagements.
            </p>
          </div>

          <div className="space-y-8">
            {jobs.map((job, i) => (
              <div
                key={i}
                className="timeline-item p-6 sm:p-8 rounded-2xl border border-white/[0.08] bg-[#060606] hover:border-white/20 transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="font-serif font-bold text-xl text-white">{job.title}</h3>
                    <p className="text-sm font-mono text-[#9D94FF] mt-0.5">{job.org}</p>
                  </div>
                  <div className="flex items-center gap-3 text-xs font-mono text-white/40">
                    <span className="px-3 py-1 rounded-md border border-white/[0.08] bg-white/[0.03]">{job.when}</span>
                    <span>{job.location}</span>
                  </div>
                </div>

                <ul className="space-y-2.5 pt-2">
                  {job.bullets.map((b, j) => (
                    <li key={j} className="text-sm text-white/60 leading-relaxed pl-4 relative before:content-['▹'] before:absolute before:left-0 before:text-[#7B6FFF]">
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
      <section id="contact" className="py-28 px-6 border-t border-white/[0.08] relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(123,111,255,0.1),transparent_70%)] pointer-events-none" />

        <Reveal className="max-w-4xl mx-auto text-center relative">
          <span className="label mb-3 block">Get In Touch</span>
          <h2 className="font-serif font-bold text-3xl sm:text-5xl text-white mb-6 tracking-[-0.02em]">
            Need an FDE or Sovereign AI Engineer?
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto mb-10 text-base leading-relaxed font-text">
            Available for Senior AI Engineer, Forward Deployed Engineer (FDE), or AI Infrastructure contracts and permanent roles across Singapore, APAC, and EMEA.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-white text-[#060606] rounded-xl text-sm font-semibold hover:bg-white/90 transition-all shadow-xl shadow-white/10 hover:scale-[1.02]"
            >
              Email {profile.email}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M1 7h12M9 3l4 4-4 4" /></svg>
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2.5 px-8 py-4 border border-white/15 bg-white/[0.02] rounded-xl text-sm text-white/80 font-medium hover:text-white hover:border-white/30 transition-all"
            >
              LinkedIn Profile
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2.5 px-8 py-4 border border-white/15 bg-white/[0.02] rounded-xl text-sm text-white/80 font-medium hover:text-white hover:border-white/30 transition-all"
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
              <div key={c.title} className="p-5 rounded-xl border border-white/[0.08] bg-[#060606]">
                <p className="font-mono text-[10px] tracking-wider uppercase text-white/30 mb-2">{c.title}</p>
                <a href={c.link} target={c.link.startsWith('mailto') ? undefined : '_blank'} rel="noopener" className="text-sm font-semibold text-white/80 hover:text-[#9D94FF] transition-colors block mb-1">
                  {c.label}
                </a>
                <p className="text-xs text-white/40">{c.note}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="border-t border-white/[0.08] py-10 px-6 bg-[#060606]">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/30">
          <span>© {new Date().getFullYear()} {site.name} · {site.location}</span>
          <span className="hidden sm:inline text-white/20">&ldquo;The future isn&rsquo;t just AI that talks. It&rsquo;s AI that acts.&rdquo;</span>
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
