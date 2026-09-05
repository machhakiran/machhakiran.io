import { getAllPosts } from '@/lib/posts';
import { site } from '@/lib/data/site';
import type { Metadata } from 'next';
import { BlogTreeExplorer } from '@/components/BlogTreeExplorer';

export const metadata: Metadata = {
  title: `AI Engineering Field Notes & Production Systems — ${site.name}`,
  description: '60+ Production-Grade Solutions: Sovereign AI, Autonomous Multi-Agents, vLLM Clusters, LangGraph, and Kubernetes AI Platform Engineering.',
};

export default function BlogPage() {
  const posts = getAllPosts();

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

      {/* ===== MAIN CONTENT: COMPACT TITLE BAR + ARCHIVAL TREE EXPLORER ===== */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 pt-22 pb-20">
        {/* Compact Breadcrumb & Page Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 mb-6 border-b border-slate-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-700 text-base font-bold shadow-2xs shrink-0">
              📚
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Architecture Field Notes & Roadmap
                </h1>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200 font-mono font-bold">
                  60 Projects
                </span>
              </div>
              <p className="text-xs font-mono text-slate-500 mt-0.5">
                Full-stack production customer solutions: bare-metal Python concurrency to autonomous multi-agents & vLLM Kubernetes platforms.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0 font-mono text-xs">
            <span className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-700 shadow-2xs font-semibold">
              15 Stages (00–14)
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-700 font-semibold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 dot-pulse" />
              100% Free Tier
            </span>
          </div>
        </div>

        {/* The Archival Tree Explorer */}
        <BlogTreeExplorer posts={posts} />
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
