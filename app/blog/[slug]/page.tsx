import { getPostBySlug, getAdjacentPosts, getAllPosts } from '@/lib/posts';
import { site } from '@/lib/data/site';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { MermaidScript } from '@/components/MermaidScript';
import { InPostRoadmapNavigator } from '@/components/InPostRoadmapNavigator';
import { getDomainBadgeClasses } from '@/lib/roadmap';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: `${post.title} — ${site.name}`,
    description: post.excerpt || site.description,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const allPosts = getAllPosts();
  const { prev, next } = getAdjacentPosts(slug);
  const stage = post.stageInfo.stage;
  const stageColor = stage ? stage.color : '#4F46E5';
  const domainClasses = getDomainBadgeClasses(post.stageInfo.domain || 'AI');

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-indigo-500/20 selection:text-indigo-700">
      {/* ===== HEADER NAVIGATION (MATCHING MAIN SITE) ===== */}
      <header className="fixed top-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
          <a
            href="/blog"
            className="flex items-center gap-2 text-xs font-mono font-bold text-slate-600 hover:text-indigo-600 transition-colors group"
          >
            <span className="group-hover:-translate-x-0.5 transition-transform inline-block">←</span>
            <span>All Field Notes</span>
          </a>

          <div className="flex items-center gap-4 text-xs font-mono font-bold">
            <a href="/" className="text-slate-600 hover:text-indigo-600 transition-colors hidden sm:inline">
              Portfolio
            </a>
            <a
              href="https://github.com/machhakiran/ai-engineering-master-projects"
              target="_blank"
              rel="noreferrer"
              className="text-slate-600 hover:text-indigo-600 transition-colors hidden md:inline"
            >
              Master GitHub Roadmap ↗
            </a>
            <a
              href="/blog/create"
              className="btn-primary px-3.5 py-2 rounded-xl text-xs font-mono font-bold shadow-xs transition-all"
              style={{ color: '#ffffff' }}
            >
              + New Note
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 pt-28 pb-28">
        {/* ===== TREE-WISE ROADMAP QUICK NAVIGATOR BAR ===== */}
        <InPostRoadmapNavigator currentSlug={slug} allPosts={allPosts} />

        {/* ===== ARTICLE CONTAINER (CLEAN WHITE CARD) ===== */}
        <article className="bg-white rounded-3xl border border-slate-200 shadow-md overflow-hidden relative">
          {/* Top Accent Bar matching project stage color */}
          <div
            className="h-1.5 w-full"
            style={{ backgroundColor: stageColor }}
          />

          <div className="p-8 sm:p-14">
            {/* Article Header */}
            <header className="mb-10 pb-8 border-b border-slate-100">
              {/* Breadcrumbs & Stage Badges */}
              <div className="flex flex-wrap items-center gap-2 mb-5">
                {stage ? (
                  <span
                    className={`px-3 py-1 text-xs font-mono font-bold rounded-lg border ${stage.lightBadge}`}
                  >
                    {stage.icon} Stage {stage.id}: {stage.shortTitle}
                  </span>
                ) : (
                  <span className="px-3 py-1 text-xs font-mono font-bold bg-blue-50 text-blue-700 border border-blue-200 rounded-lg">
                    ⭐ Special Architecture Whitepaper
                  </span>
                )}

                {post.stageInfo.projectNum && (
                  <span className="px-2.5 py-1 text-xs font-mono font-bold bg-slate-100 text-slate-700 rounded-lg border border-slate-200">
                    Project #{post.stageInfo.projectNum}
                  </span>
                )}

                <span
                  className={`px-2.5 py-1 text-xs font-mono font-bold rounded-lg border ${domainClasses.bg} ${domainClasses.text} ${domainClasses.border}`}
                >
                  {post.stageInfo.domain}
                </span>

                <span className="px-2.5 py-1 text-xs font-mono text-slate-500 bg-slate-100 rounded-lg font-medium">
                  {post.readingTime}
                </span>

                <span className="text-xs font-mono text-slate-400 font-medium ml-auto">
                  {post.date}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight mb-6">
                {post.title}
              </h1>

              {/* Author Row */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white font-mono text-xs flex items-center justify-center font-extrabold shadow-sm">
                  KM
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">{post.author || site.name}</p>
                  <p className="text-[11px] font-mono text-slate-500">
                    Forward Deployed AI Solutions Architect · Singapore
                  </p>
                </div>
              </div>
            </header>

            {/* Markdown Content */}
            <div
              className="prose-post"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />

            {/* Dynamic Mermaid Diagram Renderer */}
            <MermaidScript />
          </div>
        </article>

        {/* ===== ENHANCED PREVIOUS & NEXT NAVIGATION ===== */}
        {(prev || next) && (
          <nav className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            {prev ? (
              <a
                href={`/blog/${prev.slug}`}
                className="group p-6 rounded-2xl bg-white border border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all duration-300 relative overflow-hidden flex flex-col justify-between shadow-xs"
              >
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-mono text-[10px] uppercase font-bold text-slate-400 group-hover:text-indigo-600 transition-colors">
                      ← Previous Architecture Note
                    </span>
                    {prev.stageInfo.stage && (
                      <span
                        className={`px-2 py-0.2 rounded text-[9px] font-mono font-bold border ${prev.stageInfo.stage.lightBadge}`}
                      >
                        {prev.stageInfo.stage.icon} Stage {prev.stageInfo.stage.id} #{prev.stageInfo.projectNum}
                      </span>
                    )}
                  </div>
                  <p className="text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors line-clamp-2">
                    {prev.title}
                  </p>
                </div>
                <div className="mt-4 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>{prev.stageInfo.domain || 'AI Engineering'}</span>
                  <span>{prev.readingTime}</span>
                </div>
              </a>
            ) : (
              <div />
            )}

            {next ? (
              <a
                href={`/blog/${next.slug}`}
                className="group p-6 rounded-2xl bg-white border border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all duration-300 relative overflow-hidden text-right sm:col-start-2 flex flex-col justify-between shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-end gap-2 mb-2">
                    {next.stageInfo.stage && (
                      <span
                        className={`px-2 py-0.2 rounded text-[9px] font-mono font-bold border ${next.stageInfo.stage.lightBadge}`}
                      >
                        {next.stageInfo.stage.icon} Stage {next.stageInfo.stage.id} #{next.stageInfo.projectNum}
                      </span>
                    )}
                    <span className="font-mono text-[10px] uppercase font-bold text-slate-400 group-hover:text-indigo-600 transition-colors">
                      Next Architecture Note →
                    </span>
                  </div>
                  <p className="text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors line-clamp-2">
                    {next.title}
                  </p>
                </div>
                <div className="mt-4 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>{next.readingTime}</span>
                  <span>{next.stageInfo.domain || 'AI Engineering'}</span>
                </div>
              </a>
            ) : (
              <div />
            )}
          </nav>
        )}
      </main>

      {/* ===== FOOTER (MATCHING MAIN SITE) ===== */}
      <footer className="border-t border-slate-200 py-10 px-6 bg-white text-xs font-mono text-slate-500">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 dot-pulse" />
            <span>© {new Date().getFullYear()} {site.name} · Forward Deployed AI Solutions Architect</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="/blog" className="hover:text-indigo-600 transition-colors">
              ← All Field Notes
            </a>
            <a
              href="https://github.com/machhakiran/ai-engineering-master-projects"
              target="_blank"
              rel="noreferrer"
              className="hover:text-indigo-600 transition-colors"
            >
              Master GitHub Roadmap
            </a>
            <a href="/api/mcp" className="hover:text-indigo-600 transition-colors">
              MCP API
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
