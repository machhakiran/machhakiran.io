import { getAllPosts } from '@/lib/posts';
import { site } from '@/lib/data/site';
import type { Metadata } from 'next';
import { BlogTreeExplorer } from '@/components/BlogTreeExplorer';
import { STAGES } from '@/lib/roadmap';

export const metadata: Metadata = {
  title: `AI Engineering Field Notes & Production Systems — ${site.name}`,
  description: '60+ Production-Grade Solutions: Sovereign AI, Autonomous Multi-Agents, vLLM Clusters, LangGraph, and Kubernetes AI Platform Engineering.',
};

export default function BlogPage() {
  const posts = getAllPosts();
  const featuredPost = posts.find((p) => p.slug.includes('14-ai-agents-core-01')) || posts[0];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-indigo-500/20 selection:text-indigo-700">
      {/* ===== HEADER NAVIGATION (MATCHING MAIN SITE) ===== */}
      <header className="fixed top-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-2 lg:gap-4">
          <a href="/" className="flex items-center gap-3 group shrink-0">
            <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center font-bold text-white text-base shadow-sm group-hover:bg-indigo-700 transition-colors shrink-0">
              KM
            </div>
            <div className="flex flex-col text-left">
              <span className="font-bold text-base tracking-tight text-slate-900 group-hover:text-indigo-600 transition-colors whitespace-nowrap">
                {site.name}
              </span>
              <span className="text-[11px] font-mono text-slate-500 font-medium -mt-0.5 whitespace-nowrap">
                Forward Deployed AI Engineer
              </span>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-1.5 shrink-0">
            {[
              { label: 'Overview', href: '/#profile' },
              { label: '11 Systems', href: '/#projects' },
              { label: 'Pipeline', href: '/#pipeline' },
              { label: 'Capabilities', href: '/#capabilities' },
              { label: 'Tech Stack', href: '/#stack' },
              { label: 'Experience', href: '/#experience' },
              { label: 'FDE Guide', href: '/fde' },
              { label: 'Blog', href: '/blog' },
            ].map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`px-3 py-1.5 text-xs font-mono tracking-wide rounded-lg transition-colors font-semibold whitespace-nowrap ${
                  l.href === '/blog'
                    ? 'text-indigo-600 bg-indigo-50'
                    : 'text-slate-600 hover:text-indigo-600 hover:bg-slate-100'
                }`}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="https://github.com/machhakiran/ai-engineering-master-projects"
              target="_blank"
              rel="noreferrer"
              className="text-slate-600 hover:text-indigo-600 text-xs font-mono font-semibold hidden sm:inline"
            >
              GitHub Repo ↗
            </a>
            <a
              href="/blog/create"
              className="btn-primary px-3.5 xl:px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider font-bold shadow-xs whitespace-nowrap"
              style={{ color: '#ffffff' }}
            >
              + New Note
            </a>
          </div>
        </div>
      </header>

      {/* ===== HERO SECTION (MATCHING MAIN SITE LIGHT THEME) ===== */}
      <section className="pt-28 pb-16 px-6 bg-gradient-to-b from-indigo-50/70 via-slate-50 to-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          {/* Status pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-200 bg-white shadow-xs text-xs text-indigo-700 font-mono font-semibold mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 dot-pulse" />
            <span>Singapore · Sovereign AI & Production Engineering Field Notes</span>
          </div>

          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12] mb-6">
              AI Engineering <br />
              <span className="text-indigo-600">Field Notes & Blueprints</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl mb-8 font-normal">
              A comprehensive technical library of 60 production customer case studies covering bare-metal Python concurrency, DuckDB statistical engines, deep PyTorch models, autonomous multi-agents (LangGraph & FastMCP), high-throughput vLLM clusters, and Kubernetes platform engineering.
            </p>

            {/* Quick Metrics Matrix matching home page */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono mb-8 max-w-2xl">
              <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                <span className="text-2xl font-extrabold text-slate-900 block">15</span>
                <span className="text-[11px] text-slate-500 uppercase tracking-wider font-semibold">Stages (00–14)</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                <span className="text-2xl font-extrabold text-indigo-600 block">60+</span>
                <span className="text-[11px] text-slate-500 uppercase tracking-wider font-semibold">Live Solutions</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                <span className="text-2xl font-extrabold text-emerald-600 block">100%</span>
                <span className="text-[11px] text-slate-500 uppercase tracking-wider font-semibold">Free Tier Ready</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                <span className="text-2xl font-extrabold text-purple-600 block">MCP</span>
                <span className="text-[11px] text-slate-500 uppercase tracking-wider font-semibold">Direct Publish</span>
              </div>
            </div>

            {/* Stage Color Ribbon */}
            <div className="pt-4 border-t border-slate-200">
              <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block mb-2 font-bold">
                15-Stage Engineering Progression
              </span>
              <div className="flex flex-wrap items-center gap-1.5 font-mono text-[10px]">
                {Object.values(STAGES).map((stg) => (
                  <span
                    key={stg.id}
                    className={`px-2.5 py-1 rounded-lg font-bold border transition-transform hover:scale-105 ${stg.lightBadge}`}
                    title={`${stg.name} (${stg.tech})`}
                  >
                    {stg.id} {stg.shortTitle}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        {/* ===== FEATURED FLAGSHIP ARCHITECTURE CARD ===== */}
        {featuredPost && (
          <section className="mb-14">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono uppercase tracking-widest text-indigo-600 font-bold flex items-center gap-2">
                <span>⭐</span> Flagship Architecture Spotlight
              </span>
              <span className="text-xs font-mono text-slate-500">
                Stage {featuredPost.stageInfo.stageId || '14'} · Project #{featuredPost.stageInfo.projectNum || '01'}
              </span>
            </div>

            <div className="group relative rounded-3xl p-8 sm:p-10 bg-white border border-slate-200 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-blue-500 via-indigo-600 to-cyan-400" />

              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span
                  className={`px-3 py-1 text-xs font-mono font-bold rounded-lg border ${
                    featuredPost.stageInfo.stage?.lightBadge || 'bg-indigo-50 text-indigo-700 border-indigo-200'
                  }`}
                >
                  {featuredPost.stageInfo.stage?.icon} Stage {featuredPost.stageInfo.stageId}: {featuredPost.stageInfo.stage?.name}
                </span>

                <span className="px-3 py-1 text-xs font-mono font-bold bg-purple-50 text-purple-700 border border-purple-200 rounded-lg">
                  {featuredPost.stageInfo.domain || 'Autonomous Agents'}
                </span>

                <span className="px-2.5 py-1 text-xs font-mono text-slate-500 bg-slate-100 rounded-lg font-medium">
                  {featuredPost.readingTime}
                </span>
              </div>

              <a href={`/blog/${featuredPost.slug}`} className="block">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 group-hover:text-indigo-600 transition-colors tracking-tight leading-snug mb-4">
                  {featuredPost.title}
                </h2>
              </a>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-normal line-clamp-3">
                {featuredPost.excerpt}
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white font-mono text-xs flex items-center justify-center font-extrabold shadow-sm">
                    KM
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900">{featuredPost.author || site.name}</p>
                    <p className="text-[11px] text-slate-500 font-mono">Forward Deployed AI Solutions Architect · Singapore</p>
                  </div>
                </div>

                <a
                  href={`/blog/${featuredPost.slug}`}
                  className="btn-primary inline-flex items-center justify-center gap-2 px-6 py-3 text-white rounded-xl text-xs font-mono font-bold uppercase tracking-wider shadow-sm transition-all"
                  style={{ color: '#ffffff' }}
                >
                  <span>Explore Architecture Blueprint</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          </section>
        )}

        {/* ===== TREE-WISE ARCHIVE EXPLORER ===== */}
        <section>
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
              <span>📚</span>
              <span>Interactive Architecture Library & Tree Explorer</span>
            </h3>
            <p className="text-xs font-mono text-slate-500 mt-1">
              Browse projects hierarchically by Phase and Stage or search in real-time across all 60 customer engineering case studies.
            </p>
          </div>

          <BlogTreeExplorer posts={posts} />
        </section>
      </main>

      {/* ===== FOOTER (MATCHING MAIN SITE) ===== */}
      <footer className="border-t border-slate-200 py-10 px-6 bg-white text-xs font-mono text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 dot-pulse" />
            <span>© {new Date().getFullYear()} {site.name} · Forward Deployed AI Solutions Architect</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="/" className="hover:text-indigo-600 transition-colors">
              Portfolio
            </a>
            <a
              href="https://github.com/machhakiran/ai-engineering-master-projects"
              target="_blank"
              rel="noreferrer"
              className="hover:text-indigo-600 transition-colors"
            >
              Master GitHub Roadmap
            </a>
            <a href="https://machhakiran.pro/api/mcp" className="hover:text-indigo-600 transition-colors">
              MCP API Schema
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
