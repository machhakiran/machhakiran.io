import { site, heroData, lifecycle } from '@/lib/data/site';
import { profile, expertiseAreas } from '@/lib/data/profile';
import { projects } from '@/lib/data/projects';
import { stackCategories } from '@/lib/data/stack';
import { jobs } from '@/lib/data/experience';
import { Reveal } from '@/components/ui/Reveal';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#12110E] text-[#F1ECE1] font-text">
      {/* ===== NAV ===== */}
      <header className="fixed top-0 inset-x-0 z-50 bg-[#12110E]/90 backdrop-blur-md border-b border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between gap-4">
          <a href="#" className="font-serif font-semibold text-lg tracking-tight">{site.name}</a>
          <nav className="hidden md:flex items-center gap-1">
            {[
              { label: 'Profile', href: '#profile' },
              { label: 'Expertise', href: '#expertise' },
              { label: 'Stack', href: '#stack' },
              { label: 'Projects', href: '#projects' },
              { label: 'Experience', href: '#experience' },
              { label: 'Contact', href: '#contact' },
            ].map((l) => (
              <a key={l.href} href={l.href} className="px-3 py-1.5 text-xs tracking-[0.06em] text-white/50 hover:text-white/90 transition-colors rounded-md hover:bg-white/[0.04]">
                {l.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3 text-xs text-white/40">
            <a href={profile.github} target="_blank" rel="noopener" className="hover:text-white/80 transition-colors hidden sm:inline">GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noopener" className="hover:text-white/80 transition-colors hidden sm:inline">LinkedIn</a>
          </div>
        </div>
      </header>

      {/* ===== HERO ===== */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.04),transparent_60%)]" />
        <Reveal className="relative max-w-4xl mx-auto text-center">
          {/* Status dot */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-white/[0.08] text-xs text-white/40 mb-10 font-mono tracking-[0.06em]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            {profile.location} · {profile.status}
          </div>

          <h1 className="font-serif font-extrabold text-[clamp(42px,7vw,80px)] leading-[0.96] tracking-[-0.03em] text-white mb-6">
            {heroData.headline}
          </h1>

          <p className="text-lg sm:text-xl text-white/40 max-w-xl mx-auto mb-10 leading-relaxed">
            {heroData.tagline}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-16">
            <a href={heroData.primaryHref} className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#12110E] rounded-lg text-sm font-medium hover:bg-white/90 transition-colors">
              {heroData.primaryCta}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 1v12M1 7l6 6 6-6" /></svg>
            </a>
            <a href={heroData.secondaryHref} className="inline-flex items-center gap-2 px-6 py-3 border border-white/[0.1] rounded-lg text-sm text-white/60 hover:text-white hover:border-white/20 transition-colors">
              {heroData.secondaryCta}
            </a>
          </div>

          {/* Lifecycle */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
            {lifecycle.map((phase, i) => (
              <span key={i} className="flex items-center gap-1.5 sm:gap-2">
                <span className="px-3 py-1.5 text-[10px] font-mono tracking-[0.1em] uppercase rounded-md border border-white/[0.06] text-white/30 bg-white/[0.02] whitespace-nowrap">{phase}</span>
                {i < lifecycle.length - 1 && (
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1" className="text-white/[0.1] shrink-0"><path d="M1 6h10M7 2l4 4-4 4" /></svg>
                )}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ===== PROFILE ===== */}
      <section id="profile" className="py-24 px-6">
        <Reveal className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-12 lg:gap-16">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="mb-5">
                <img src={profile.portrait} width={160} height={160} alt={profile.name}
                  className="w-36 h-36 rounded-2xl object-cover ring-1 ring-white/[0.06]" />
              </div>
              <h2 className="font-serif font-bold text-2xl text-white mb-1">{profile.name}</h2>
              <p className="text-sm text-white/35 mb-4">{profile.location} · {profile.company}</p>
              <div className="flex gap-2.5">
                <a href={`mailto:${profile.email}`} className="px-4 py-2 bg-white text-[#12110E] rounded-lg text-sm font-medium hover:bg-white/90 transition-colors">Get in touch</a>
                <a href={profile.github} target="_blank" rel="noopener" className="px-4 py-2 border border-white/[0.08] rounded-lg text-sm text-white/50 hover:text-white hover:border-white/15 transition-colors">GitHub</a>
              </div>
            </div>
            <div>
              <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-white/25 mb-4">About</p>
              <h3 className="font-serif font-bold text-2xl sm:text-3xl text-white leading-tight mb-5 tracking-[-0.01em]">
                An engineer who takes AI from a business problem to a production system your team can run.
              </h3>
              <p className="text-white/45 leading-relaxed mb-3">
                {profile.name} is a Senior AI Engineer and Forward Deployed Engineer based in Singapore. He sits inside the customer&apos;s team — their repo, their cluster, their compliance review — and delivers AI systems that work inside their walls.
              </p>
              <p className="text-white/45 leading-relaxed mb-3">
                The specialism is <strong className="text-white/80">Private AI</strong> — open-weight models running inside the customer&apos;s own datacentre, VPC or air-gapped network. Banks, hospitals and government suppliers who want the capability but cannot send a single record to a third-party API.
              </p>
              <p className="text-white/45 leading-relaxed mb-8">
                That covers the whole line: tuning open models on the customer&apos;s corpus, serving them on Kubernetes and GPUs at a sustainable cost per request, observing them with self-hosted tracing and evals, and integrating them with the ERP, the core banking API and the ticketing queue they already run on.
              </p>
              <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-white/25 mb-4">Expertise</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5">
                {expertiseAreas.map((area) => (
                  <div key={area} className="flex items-center gap-2.5 text-sm text-white/50 py-1">
                    <span className="w-1 h-1 rounded-full bg-white/15 shrink-0" />
                    {area}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ===== EXPERTISE / LIFECYCLE ===== */}
      <section id="expertise" className="py-24 px-6 border-t border-white/[0.04]">
        <Reveal className="max-w-6xl mx-auto">
          <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-white/25 mb-3 text-center">The Complete Production Lifecycle</p>
          <h2 className="font-serif font-bold text-2xl sm:text-3xl text-white text-center mb-4 tracking-[-0.01em]">Business Problem → Production AI</h2>
          <p className="text-white/35 text-center max-w-2xl mx-auto mb-12 leading-relaxed">
            Not just an AI developer. A Forward Deployed AI Engineer who bridges business requirements, AI/ML, software engineering, infrastructure and production operations.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-12">
            {lifecycle.map((phase, i) => (
              <div key={i} className="group p-5 rounded-xl border border-white/[0.04] bg-white/[0.01] hover:border-white/[0.08] hover:bg-white/[0.02] transition-all">
                <span className="font-mono text-[10px] tracking-[0.1em] text-white/15 mb-2 block">{String(i + 1).padStart(2, '0')}</span>
                <span className="text-sm font-medium text-white/70">{phase}</span>
              </div>
            ))}
          </div>

          <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-white/25 mb-4 text-center">How I integrate AI into business systems</p>
          <div className="flex flex-wrap justify-center gap-1.5">
            {['RAG', 'Vector Search', 'OCR', 'NLP', 'Vision', 'Voice', 'AI Agents', 'Prediction', 'Forecasting', 'Automation'].map((a) => (
              <span key={a} className="px-3 py-1.5 text-xs rounded-lg border border-white/[0.04] bg-white/[0.01] text-white/40 font-mono tracking-[0.03em]">{a}</span>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ===== STACK ===== */}
      <section id="stack" className="py-24 px-6 border-t border-white/[0.04]">
        <Reveal className="max-w-6xl mx-auto">
          <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-white/25 mb-3">Technology Stack</p>
          <h2 className="font-serif font-bold text-2xl sm:text-3xl text-white mb-4 tracking-[-0.01em] max-w-3xl">Open source, self-hosted, production-grade.</h2>
          <p className="text-white/35 max-w-2xl mb-12 leading-relaxed">One stack chosen so a bank, hospital, or government supplier can run it without a third-party API call.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {stackCategories.map((cat) => (
              <div key={cat.name} className="p-5 rounded-xl border border-white/[0.04] bg-white/[0.01]">
                <h3 className="font-mono text-[10px] font-medium tracking-[0.15em] uppercase text-white/60 mb-4">{cat.name}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {cat.tools.map((t) => (
                    <span key={t} className="px-2.5 py-1 text-[11px] rounded-md bg-white/[0.03] text-white/35 font-mono tracking-[0.03em]">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ===== PROJECTS ===== */}
      <section id="projects" className="py-24 px-6 border-t border-white/[0.04]">
        <Reveal className="max-w-6xl mx-auto">
          <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-white/25 mb-3">Featured Projects</p>
          <h2 className="font-serif font-bold text-2xl sm:text-3xl text-white mb-4 tracking-[-0.01em] max-w-3xl">Six systems, one through-line: AI that ships.</h2>
          <p className="text-white/35 max-w-2xl mb-12 leading-relaxed">Every project is open-source and self-hostable. Open weights behind a gateway, agents with typed tools, and an evaluation layer that decides when a human takes over.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {projects.map((p) => (
              <div key={p.number} className="group p-6 sm:p-8 rounded-2xl border border-white/[0.04] bg-white/[0.01] hover:border-white/[0.08] hover:bg-white/[0.02] transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <span className="font-serif font-bold text-3xl text-white/[0.06] group-hover:text-white/[0.12] transition-colors shrink-0 leading-none">{p.number}</span>
                  <div>
                    <h3 className="font-serif font-bold text-xl text-white mb-1.5 tracking-[-0.01em]">{p.title}</h3>
                    <p className="text-sm text-white/40 leading-relaxed">{p.tagline}</p>
                  </div>
                </div>
                <p className="text-sm text-white/35 leading-relaxed mb-5">{p.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.stack.slice(0, 5).map((t) => (
                    <span key={t} className="px-2 py-0.5 text-[10px] rounded-md bg-white/[0.03] text-white/25 font-mono tracking-[0.04em]">{t}</span>
                  ))}
                  {p.stack.length > 5 && <span className="text-[10px] text-white/15 font-mono">+{p.stack.length - 5}</span>}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ===== EXPERIENCE ===== */}
      <section id="experience" className="py-24 px-6 border-t border-white/[0.04]">
        <Reveal className="max-w-6xl mx-auto">
          <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-white/25 mb-3">Experience</p>
          <h2 className="font-serif font-bold text-2xl sm:text-3xl text-white mb-4 tracking-[-0.01em] max-w-3xl">Enterprise delivery, then the AI layer on top.</h2>
          <p className="text-white/35 max-w-2xl mb-12 leading-relaxed">Banking, SaaS, payments — each role added a layer that makes the AI work deployable inside a regulated estate.</p>

          <div className="space-y-3">
            {jobs.map((job, i) => (
              <div key={i} className="p-6 sm:p-8 rounded-2xl border border-white/[0.04] bg-white/[0.01]">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="font-serif font-bold text-lg text-white">{job.title}</h3>
                    <p className="text-sm text-white/30">{job.org}</p>
                  </div>
                  <div className="flex items-center gap-3 text-[11px] text-white/20 font-mono tracking-[0.04em]">
                    <span className="px-2.5 py-1 rounded-md bg-white/[0.03]">{job.when}</span>
                    <span>{job.location}</span>
                  </div>
                </div>
                <ul className="space-y-1.5">
                  {job.bullets.map((b, j) => (
                    <li key={j} className="text-sm text-white/40 leading-relaxed pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-white/[0.1]">{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ===== CONTACT ===== */}
      <section id="contact" className="py-24 px-6 border-t border-white/[0.04]">
        <Reveal className="max-w-4xl mx-auto text-center">
          <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-white/25 mb-3">Contact</p>
          <h2 className="font-serif font-bold text-2xl sm:text-3xl text-white mb-4 tracking-[-0.01em]">Hiring for an FDE or AI engineering role?</h2>
          <p className="text-white/35 max-w-2xl mx-auto mb-10 leading-relaxed">
            Forward deployed engineering, applied AI, AI platform or AI infrastructure — permanent or engagement-based, in Singapore or remote across APAC and EMEA.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-16">
            <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-[#12110E] rounded-lg text-sm font-medium hover:bg-white/90 transition-colors">
              Email me <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 7h12M9 3l4 4-4 4" /></svg>
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener" className="inline-flex items-center gap-2 px-8 py-3.5 border border-white/[0.08] rounded-lg text-sm text-white/50 hover:text-white hover:border-white/15 transition-colors">LinkedIn</a>
            <a href={profile.github} target="_blank" rel="noopener" className="inline-flex items-center gap-2 px-8 py-3.5 border border-white/[0.08] rounded-lg text-sm text-white/50 hover:text-white hover:border-white/15 transition-colors">GitHub</a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-left">
            {[
              { title: 'Direct', link: `mailto:${profile.email}`, label: profile.email, note: 'Fastest route.' },
              { title: 'Professional', link: profile.linkedin, label: '/in/machhakiran', note: 'Full employment history.' },
              { title: 'Code', link: profile.github, label: '70+ repositories', note: 'Agents, infra, RAG, workshops.' },
              { title: 'Teaching', link: 'https://www.kaviagentic.com/', label: 'KaviAI →', note: 'Build-alongs and the company.' },
            ].map((c) => (
              <div key={c.title} className="p-5 rounded-xl border border-white/[0.04] bg-white/[0.01]">
                <p className="font-mono text-[10px] tracking-[0.12em] uppercase text-white/20 mb-2">{c.title}</p>
                <a href={c.link} target={c.link.startsWith('mailto') ? undefined : '_blank'} rel="noopener" className="text-sm text-white/60 hover:text-white transition-colors">{c.label}</a>
                <p className="text-[11px] text-white/20 mt-1.5">{c.note}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="border-t border-white/[0.04] py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/20 font-mono tracking-[0.04em]">
          <span>© {new Date().getFullYear()} {site.name} · {site.location}</span>
          <span className="hidden sm:inline">&ldquo;The future isn&rsquo;t just AI that talks. It&rsquo;s AI that acts.&rdquo;</span>
          <div className="flex gap-4">
            <a href={`mailto:${site.email}`} className="hover:text-white/50 transition-colors">Email</a>
            <a href={site.linkedin} target="_blank" rel="noopener" className="hover:text-white/50 transition-colors">LinkedIn</a>
            <a href={site.github} target="_blank" rel="noopener" className="hover:text-white/50 transition-colors">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
