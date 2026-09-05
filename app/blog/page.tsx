import { getAllPosts } from '@/lib/posts';
import { site } from '@/lib/data/site';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `AI Engineering Field Notes & Production Systems — ${site.name}`,
  description: '60+ Production-Grade Solutions: Sovereign AI, Autonomous Multi-Agents, vLLM Clusters, LangGraph, and Kubernetes AI Platform Engineering.',
};

export default function BlogPage() {
  const posts = getAllPosts();
  const featuredPost = posts.length > 0 ? posts[0] : null;
  const archivePosts = posts.length > 1 ? posts.slice(1) : [];

  // Group archive posts by category tag
  const allTags = Array.from(new Set(posts.flatMap((p) => p.tags || [])));
  
  // Categorize posts into Domain Buckets for quick scanning
  const categories = [
    { name: 'All Topics', count: posts.length, color: 'bg-slate-900 text-white' },
    { name: 'AI Agents', count: posts.filter(p => p.tags?.some(t => t.toLowerCase().includes('agent'))).length, color: 'bg-fuchsia-600 text-white' },
    { name: 'FinTech', count: posts.filter(p => p.tags?.some(t => t.toLowerCase().includes('fintech') || t.toLowerCase().includes('bank'))).length, color: 'bg-blue-600 text-white' },
    { name: 'RAG Systems', count: posts.filter(p => p.tags?.some(t => t.toLowerCase().includes('rag'))).length, color: 'bg-emerald-600 text-white' },
    { name: 'Kubernetes & Platform', count: posts.filter(p => p.tags?.some(t => t.toLowerCase().includes('kubernetes') || t.toLowerCase().includes('platform') || t.toLowerCase().includes('infrastructure'))).length, color: 'bg-indigo-600 text-white' },
    { name: 'Telecom', count: posts.filter(p => p.tags?.some(t => t.toLowerCase().includes('telecom'))).length, color: 'bg-cyan-600 text-white' },
    { name: 'Public Sector', count: posts.filter(p => p.tags?.some(t => t.toLowerCase().includes('public') || t.toLowerCase().includes('government'))).length, color: 'bg-amber-600 text-white' },
  ];

  return (
    <div className="min-h-screen bg-[#090D16] text-slate-100 font-sans selection:bg-indigo-500/30 selection:text-indigo-300">
      {/* ===== MODERN GLASS HEADER ===== */}
      <header className="fixed top-0 inset-x-0 z-50 bg-[#0B1120]/80 backdrop-blur-xl border-b border-slate-800/80 shadow-2xl">
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
                Production AI Architecture
              </span>
            </div>
          </a>

          <nav className="flex items-center gap-3 sm:gap-5 text-xs font-mono font-bold">
            <a href="/" className="text-slate-400 hover:text-white transition-colors">
              ← Portfolio
            </a>
            <a href="https://github.com/machhakiran/ai-engineering-master-projects" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors hidden sm:inline">
              GitHub Repo ↗
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

      <main className="max-w-7xl mx-auto px-6 pt-32 pb-28">
        {/* ===== HERO SECTION WITH METRIC BADGES ===== */}
        <div className="relative rounded-3xl p-8 sm:p-12 mb-16 bg-gradient-to-br from-[#0F172A] via-[#111827] to-[#0A0E1A] border border-slate-800 shadow-2xl overflow-hidden">
          {/* Subtle glow background */}
          <div className="absolute top-0 right-0 -mt-16 -mr-16 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/3 -mb-16 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-mono font-bold uppercase tracking-wider mb-4">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              60 Production Case Studies & Architecture Notes
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-5">
              Engineering AI Systems <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-300 to-emerald-400">
                in Mission-Critical Environments
              </span>
            </h1>

            <p className="text-slate-400 text-base sm:text-lg leading-relaxed font-normal mb-8">
              End-to-end architectures, high-contrast directional data flows, and code benchmarks covering bare-metal Python algorithms, autonomous multi-agents (LangGraph & FastMCP), vLLM serving, and Kubernetes platform engineering.
            </p>

            {/* Quick Metrics Matrix */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono">
              <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800">
                <span className="text-2xl font-extrabold text-white block">15</span>
                <span className="text-[11px] text-slate-400 uppercase tracking-wider">Stages (00–14)</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800">
                <span className="text-2xl font-extrabold text-cyan-400 block">60</span>
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
          </div>
        </div>

        {/* ===== TOPIC FILTER PILLS ===== */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-bold whitespace-nowrap cursor-pointer transition-all ${
                idx === 0 
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 ring-1 ring-indigo-400' 
                  : 'bg-slate-900/90 text-slate-300 border border-slate-800 hover:border-indigo-500 hover:text-white'
              }`}
            >
              <span>{cat.name}</span>
              <span className="ml-2 px-1.5 py-0.5 rounded-md bg-white/10 text-[10px]">
                {cat.count}
              </span>
            </div>
          ))}
        </div>

        {/* ===== FEATURED HERO ARTICLE ===== */}
        {featuredPost && (
          <section className="mb-16">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold flex items-center gap-2">
                <span>⭐</span> Flagship Architecture Showcase
              </span>
              <span className="text-xs font-mono text-slate-500">Updated {featuredPost.date}</span>
            </div>

            <div className="group relative rounded-3xl p-8 sm:p-12 bg-gradient-to-b from-[#0F172A] to-[#0B1120] border border-slate-800 hover:border-indigo-500/60 shadow-2xl transition-all duration-300">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                {featuredPost.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-mono font-bold bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 rounded-lg"
                  >
                    {tag}
                  </span>
                ))}
                <span className="px-2.5 py-1 text-xs font-mono text-slate-400 bg-slate-800/80 rounded-lg">
                  {featuredPost.readingTime}
                </span>
              </div>

              <a href={`/blog/${featuredPost.slug}`} className="block">
                <h2 className="text-2xl sm:text-4xl font-extrabold text-white group-hover:text-cyan-300 transition-colors tracking-tight leading-snug mb-4">
                  {featuredPost.title}
                </h2>
              </a>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8 font-normal line-clamp-3">
                {featuredPost.excerpt}
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-slate-800/80">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-500 to-cyan-400 text-slate-950 font-mono text-xs flex items-center justify-center font-extrabold">
                    KM
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">{featuredPost.author || site.name}</p>
                    <p className="text-[11px] text-slate-400 font-mono">Lead AI Architect & FDE</p>
                  </div>
                </div>

                <a
                  href={`/blog/${featuredPost.slug}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all shadow-lg shadow-indigo-600/20"
                >
                  <span>Read Full Architecture Note</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          </section>
        )}

        {/* ===== 2-COLUMN GRID OF RECENT CASE STUDIES ===== */}
        <section>
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-800">
            <div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                All Field Notes & Case Studies
              </h3>
              <p className="text-xs font-mono text-slate-400 mt-1">
                Displaying {archivePosts.length} production articles with verified Mermaid architecture flows
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {archivePosts.map((post) => (
              <article
                key={post.slug}
                className="group flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-[#0B1120] border border-slate-800 hover:border-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-mono text-cyan-400 font-semibold">
                      {post.tags?.[0] || 'AI Engineering'}
                    </span>
                    <span className="text-[11px] font-mono text-slate-500">{post.readingTime}</span>
                  </div>

                  <a href={`/blog/${post.slug}`} className="block mb-3">
                    <h4 className="text-lg font-bold text-white group-hover:text-indigo-400 transition-colors line-clamp-2 leading-snug">
                      {post.title}
                    </h4>
                  </a>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed line-clamp-3 mb-6 font-normal">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {post.tags?.slice(1, 3).map((t) => (
                      <span key={t} className="px-2 py-0.5 text-[10px] rounded-md bg-slate-900 border border-slate-800 text-slate-400 font-mono">
                        {t}
                      </span>
                    ))}
                  </div>

                  <a
                    href={`/blog/${post.slug}`}
                    className="text-xs font-mono font-bold text-indigo-400 group-hover:text-cyan-300 transition-colors flex items-center gap-1"
                  >
                    <span>View Note</span>
                    <span>→</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      {/* ===== MODERN FOOTER ===== */}
      <footer className="border-t border-slate-800/80 py-10 px-6 bg-[#0B1120] text-xs font-mono text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>© {new Date().getFullYear()} {site.name} · Forward Deployed AI Engineer</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="/" className="hover:text-white transition-colors">
              Portfolio
            </a>
            <a href="https://github.com/machhakiran/ai-engineering-master-projects" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              Master GitHub Roadmap
            </a>
            <a href="https://machhakiran.pro/api/mcp" className="hover:text-indigo-400 transition-colors">
              MCP API Schema
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
