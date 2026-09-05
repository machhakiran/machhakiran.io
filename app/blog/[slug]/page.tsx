import { getPostBySlug, getAdjacentPosts, getAllPosts } from '@/lib/posts';
import { site } from '@/lib/data/site';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { MermaidScript } from '@/components/MermaidScript';
import { InPostRoadmapNavigator } from '@/components/InPostRoadmapNavigator';
import { getDomainColor } from '@/lib/roadmap';

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
  const stageColor = stage ? stage.color : '#38BDF8';
  const domainColor = getDomainColor(post.stageInfo.domain || 'AI');

  return (
    <div className="min-h-screen bg-[#090D16] text-slate-100 font-sans selection:bg-indigo-500/30 selection:text-indigo-300">
      {/* ===== GLASSMORPHIC HEADER ===== */}
      <header className="fixed top-0 inset-x-0 z-40 bg-[#0B1120]/85 backdrop-blur-xl border-b border-slate-800/80 shadow-2xl">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
          <a
            href="/blog"
            className="flex items-center gap-2 text-xs font-mono font-bold text-slate-400 hover:text-cyan-400 transition-colors group"
          >
            <span className="group-hover:-translate-x-0.5 transition-transform inline-block">←</span>
            <span>All Field Notes</span>
          </a>

          <div className="flex items-center gap-4 text-xs font-mono font-bold">
            <a href="/" className="text-slate-400 hover:text-white transition-colors hidden sm:inline">
              Portfolio
            </a>
            <a
              href="https://github.com/machhakiran/ai-engineering-master-projects"
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-white transition-colors hidden md:inline"
            >
              Master GitHub Roadmap ↗
            </a>
            <a
              href="/blog/create"
              className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white rounded-xl transition-all shadow-md shadow-indigo-600/30 flex items-center gap-1.5"
            >
              + New Note
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 pt-28 pb-28">
        {/* ===== TREE-WISE ROADMAP QUICK NAVIGATOR BAR ===== */}
        <InPostRoadmapNavigator currentSlug={slug} allPosts={allPosts} />

        {/* ===== ARTICLE CONTAINER ===== */}
        <article
          className="bg-[#0B1120] rounded-3xl border shadow-2xl overflow-hidden relative"
          style={{
            borderColor: `${stageColor}35`,
            boxShadow: `0 10px 40px -10px ${stageColor}15`,
          }}
        >
          {/* Top Accent Bar matching project stage color */}
          <div
            className="h-1.5 w-full"
            style={{ backgroundColor: stageColor }}
          />

          <div className="p-8 sm:p-14">
            {/* Article Header */}
            <header className="mb-10 pb-8 border-b border-slate-800/80">
              {/* Breadcrumbs & Stage Badges */}
              <div className="flex flex-wrap items-center gap-2 mb-5">
                {stage ? (
                  <span
                    className="px-3 py-1 text-xs font-mono font-bold rounded-lg border"
                    style={{
                      backgroundColor: `${stageColor}20`,
                      borderColor: stageColor,
                      color: stageColor,
                    }}
                  >
                    {stage.icon} Stage {stage.id}: {stage.shortTitle}
                  </span>
                ) : (
                  <span className="px-3 py-1 text-xs font-mono font-bold bg-cyan-950 text-cyan-300 border border-cyan-800 rounded-lg">
                    ⭐ Special Architecture Whitepaper
                  </span>
                )}

                {post.stageInfo.projectNum && (
                  <span className="px-2.5 py-1 text-xs font-mono font-bold bg-slate-800 text-slate-300 rounded-lg border border-slate-700">
                    Project #{post.stageInfo.projectNum}
                  </span>
                )}

                <span
                  className="px-2.5 py-1 text-xs font-mono font-bold rounded-lg border"
                  style={{
                    backgroundColor: domainColor.bg,
                    borderColor: domainColor.border,
                    color: domainColor.text,
                  }}
                >
                  {post.stageInfo.domain}
                </span>

                <span className="px-2.5 py-1 text-xs font-mono text-slate-400 bg-slate-900 border border-slate-800 rounded-lg">
                  {post.readingTime}
                </span>

                <span className="text-xs font-mono text-slate-500 font-medium ml-auto">
                  {post.date}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight tracking-tight mb-6">
                {post.title}
              </h1>

              {/* Author Row */}
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-mono text-xs font-extrabold text-slate-950 border-2"
                  style={{
                    backgroundColor: stageColor,
                    borderColor: '#ffffff30',
                  }}
                >
                  KM
                </div>
                <div>
                  <p className="text-sm font-bold text-white">{post.author || site.name}</p>
                  <p className="text-[11px] font-mono text-slate-400">
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
                className="group p-6 rounded-2xl bg-[#0B1120] border hover:shadow-2xl transition-all duration-300 relative overflow-hidden flex flex-col justify-between"
                style={{
                  borderColor: prev.stageInfo.stage?.color ? `${prev.stageInfo.stage.color}40` : '#334155',
                }}
              >
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-mono text-[10px] uppercase font-bold text-slate-400 group-hover:text-white transition-colors">
                      ← Previous Architecture Note
                    </span>
                    {prev.stageInfo.stage && (
                      <span
                        className="px-2 py-0.2 rounded text-[9px] font-mono font-bold"
                        style={{
                          backgroundColor: `${prev.stageInfo.stage.color}20`,
                          color: prev.stageInfo.stage.color,
                        }}
                      >
                        {prev.stageInfo.stage.icon} Stage {prev.stageInfo.stage.id} #{prev.stageInfo.projectNum}
                      </span>
                    )}
                  </div>
                  <p className="text-sm font-bold text-slate-200 group-hover:text-cyan-300 transition-colors line-clamp-2">
                    {prev.title}
                  </p>
                </div>
                <div className="mt-4 flex items-center justify-between text-[11px] font-mono text-slate-500">
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
                className="group p-6 rounded-2xl bg-[#0B1120] border hover:shadow-2xl transition-all duration-300 relative overflow-hidden text-right sm:col-start-2 flex flex-col justify-between"
                style={{
                  borderColor: next.stageInfo.stage?.color ? `${next.stageInfo.stage.color}40` : '#334155',
                }}
              >
                <div>
                  <div className="flex items-center justify-end gap-2 mb-2">
                    {next.stageInfo.stage && (
                      <span
                        className="px-2 py-0.2 rounded text-[9px] font-mono font-bold"
                        style={{
                          backgroundColor: `${next.stageInfo.stage.color}20`,
                          color: next.stageInfo.stage.color,
                        }}
                      >
                        {next.stageInfo.stage.icon} Stage {next.stageInfo.stage.id} #{next.stageInfo.projectNum}
                      </span>
                    )}
                    <span className="font-mono text-[10px] uppercase font-bold text-slate-400 group-hover:text-white transition-colors">
                      Next Architecture Note →
                    </span>
                  </div>
                  <p className="text-sm font-bold text-slate-200 group-hover:text-cyan-300 transition-colors line-clamp-2">
                    {next.title}
                  </p>
                </div>
                <div className="mt-4 flex items-center justify-between text-[11px] font-mono text-slate-500">
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

      {/* ===== DARK FOOTER ===== */}
      <footer className="border-t border-slate-800/80 py-10 px-6 bg-[#0B1120] text-xs font-mono text-slate-500">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>© {new Date().getFullYear()} {site.name} · Forward Deployed AI Solutions Architect</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="/blog" className="hover:text-white transition-colors">
              ← All Field Notes
            </a>
            <a
              href="https://github.com/machhakiran/ai-engineering-master-projects"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              Master GitHub Roadmap
            </a>
            <a href="/api/mcp" className="hover:text-cyan-400 transition-colors">
              MCP API
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
