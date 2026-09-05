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
    <div className="min-h-screen bg-[#090D16] text-slate-100 font-sans selection:bg-indigo-500/30 selection:text-indigo-300">
      {/* ===== MODERN GLASS HEADER ===== */}
      <header className="fixed top-0 inset-x-0 z-50 bg-[#0B1120]/85 backdrop-blur-xl border-b border-slate-800/80 shadow-2xl">
        <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between gap-4">
          <a href="/" className="flex items-center gap-3.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-400 p-[1px] shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-all">
              <div className="w-full h-full bg-[#0B1120] rounded-[11px] flex items-center justify-center font-mono font-extrabold text-sm text-white">
                KM
              </div>
            </div>
            <div className="flex flex-col text-left">
              <span className="font-bold text-base tracking-tight text-white group-hover:text-indigo-400 transition-colors">
                {site.name}
              </span>
              <span className="text-[11px] font-mono text-cyan-400 font-semibold -mt-0.5 tracking-wide">
                Production AI Systems Architecture
              </span>
            </div>
          </a>

          <nav className="flex items-center gap-3 sm:gap-5 text-xs font-mono font-bold">
            <a href="/" className="text-slate-400 hover:text-white transition-colors">
              ← Portfolio
            </a>
            <a
              href="https://github.com/machhakiran/ai-engineering-master-projects"
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-white transition-colors hidden sm:inline"
            >
              Master GitHub Roadmap ↗
            </a>
            <a
              href="/blog/create"
              className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white rounded-xl transition-all shadow-md shadow-indigo-600/30 flex items-center gap-1.5"
            >
              <span>+ New Note</span>
            </a>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 pt-28 pb-28">
        {/* ===== HERO SECTION WITH STAGE COLOR RIBBON ===== */}
        <div className="relative rounded-3xl p-8 sm:p-12 mb-12 bg-gradient-to-br from-[#0F172A] via-[#111827] to-[#0A0E1A] border border-slate-800 shadow-2xl overflow-hidden">
          {/* Subtle glow backgrounds */}
          <div className="absolute top-0 right-0 -mt-16 -mr-16 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/3 -mb-16 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-mono font-bold uppercase tracking-wider mb-4">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              Complete 15-Stage AI Systems Architecture Blueprint
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] mb-5">
              Field Notes & Architecture Blueprints <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-300 to-emerald-400">
                from 60 Production Customer Solutions
              </span>
            </h1>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal mb-8 max-w-3xl">
              A comprehensive technical archive covering bare-metal Python concurrency, DuckDB quantitative analytics, deep PyTorch models, autonomous multi-agents (LangGraph & FastMCP), high-throughput vLLM clusters, and Kubernetes AI platform engineering.
            </p>

            {/* Quick Metrics Matrix */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono mb-8">
              <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800">
                <span className="text-2xl font-extrabold text-white block">15</span>
                <span className="text-[11px] text-slate-400 uppercase tracking-wider">Stages (00–14)</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800">
                <span className="text-2xl font-extrabold text-cyan-400 block">60+</span>
                <span className="text-[11px] text-slate-400 uppercase tracking-wider">Live Solutions</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800">
                <span className="text-2xl font-extrabold text-emerald-400 block">100%</span>
                <span className="text-[11px] text-slate-400 uppercase tracking-wider">Free Tier Ready</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800">
                <span className="text-2xl font-extrabold text-fuchsia-400 block">MCP</span>
                <span className="text-[11px] text-slate-400 uppercase tracking-wider">Direct Publish</span>
              </div>
            </div>

            {/* Stage Color Codes Ribbon (Matches Master Roadmap exactly) */}
            <div className="pt-4 border-t border-slate-800/80">
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-2 font-bold">
                Roadmap Stage Color Spectrum
              </span>
              <div className="flex flex-wrap items-center gap-1.5 font-mono text-[10px]">
                {Object.values(STAGES).map((stg) => (
                  <span
                    key={stg.id}
                    className="px-2 py-0.5 rounded-md font-bold text-white transition-transform hover:scale-105"
                    style={{ backgroundColor: stg.color }}
                    title={`${stg.name} (${stg.tech})`}
                  >
                    {stg.id} {stg.shortTitle}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ===== FEATURED FLAGSHIP ARCHITECTURE ===== */}
        {featuredPost && (
          <section className="mb-14">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold flex items-center gap-2">
                <span>⭐</span> Flagship Architecture Spotlight
              </span>
              <span className="text-xs font-mono text-slate-500">
                Stage {featuredPost.stageInfo.stageId || '14'} · Project #{featuredPost.stageInfo.projectNum || '01'}
              </span>
            </div>

            <div
              className="group relative rounded-3xl p-8 sm:p-10 bg-[#0B1120] border hover:shadow-2xl transition-all duration-300 overflow-hidden"
              style={{
                borderColor: featuredPost.stageInfo.stage?.color || '#6366F1',
                boxShadow: `0 8px 30px -4px ${(featuredPost.stageInfo.stage?.color || '#6366F1')}20`,
              }}
            >
              <div
                className="absolute top-0 inset-x-0 h-1.5"
                style={{ backgroundColor: featuredPost.stageInfo.stage?.color || '#6366F1' }}
              />

              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span
                  className="px-3 py-1 text-xs font-mono font-bold rounded-lg border"
                  style={{
                    backgroundColor: `${featuredPost.stageInfo.stage?.color}20`,
                    borderColor: featuredPost.stageInfo.stage?.color,
                    color: featuredPost.stageInfo.stage?.color,
                  }}
                >
                  {featuredPost.stageInfo.stage?.icon} Stage {featuredPost.stageInfo.stageId}: {featuredPost.stageInfo.stage?.name}
                </span>

                <span className="px-3 py-1 text-xs font-mono font-bold bg-pink-500/10 border border-pink-500/30 text-pink-400 rounded-lg">
                  {featuredPost.stageInfo.domain || 'Autonomous Agents'}
                </span>

                <span className="px-2.5 py-1 text-xs font-mono text-slate-400 bg-slate-800/80 rounded-lg">
                  {featuredPost.readingTime}
                </span>
              </div>

              <a href={`/blog/${featuredPost.slug}`} className="block">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-cyan-300 transition-colors tracking-tight leading-snug mb-4">
                  {featuredPost.title}
                </h2>
              </a>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-normal line-clamp-3">
                {featuredPost.excerpt}
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-slate-800/80">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-500 to-cyan-400 text-slate-950 font-mono text-xs flex items-center justify-center font-extrabold">
                    KM
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">{featuredPost.author || site.name}</p>
                    <p className="text-[11px] text-cyan-400 font-mono">Forward Deployed AI Solutions Architect · Singapore</p>
                  </div>
                </div>

                <a
                  href={`/blog/${featuredPost.slug}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-white rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all shadow-lg hover:brightness-110"
                  style={{
                    backgroundColor: featuredPost.stageInfo.stage?.color || '#4F46E5',
                  }}
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
            <h3 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
              <span>📚</span>
              <span>Interactive Architecture Library & Tree Explorer</span>
            </h3>
            <p className="text-xs font-mono text-slate-400 mt-1">
              Browse projects hierarchically by Phase and Stage or filter in real-time across all 60 customer engineering case studies.
            </p>
          </div>

          <BlogTreeExplorer posts={posts} />
        </section>
      </main>

      {/* ===== MODERN FOOTER ===== */}
      <footer className="border-t border-slate-800/80 py-10 px-6 bg-[#0B1120] text-xs font-mono text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>© {new Date().getFullYear()} {site.name} · Forward Deployed AI Solutions Architect</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="/" className="hover:text-white transition-colors">
              Portfolio
            </a>
            <a
              href="https://github.com/machhakiran/ai-engineering-master-projects"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              Master GitHub Roadmap
            </a>
            <a href="https://machhakiran.pro/api/mcp" className="hover:text-cyan-400 transition-colors">
              MCP API Schema
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
