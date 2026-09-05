import { getPostBySlug, getAdjacentPosts, getAllPosts } from '@/lib/posts';
import { site } from '@/lib/data/site';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { MermaidScript } from '@/components/MermaidScript';

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

  const { prev, next } = getAdjacentPosts(slug);

  return (
    <div className="min-h-screen bg-[#090D16] text-slate-100 font-sans selection:bg-indigo-500/30 selection:text-indigo-300">
      {/* ===== GLASSMORPHIC HEADER ===== */}
      <header className="fixed top-0 inset-x-0 z-50 bg-[#0B1120]/80 backdrop-blur-xl border-b border-slate-800/80 shadow-2xl">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
          <a href="/blog" className="flex items-center gap-2 text-xs font-mono font-bold text-slate-400 hover:text-cyan-400 transition-colors group">
            <span className="group-hover:-translate-x-0.5 transition-transform inline-block">←</span>
            <span>All Field Notes</span>
          </a>

          <div className="flex items-center gap-4 text-xs font-mono font-bold">
            <a href="/" className="text-slate-400 hover:text-white transition-colors hidden sm:inline">
              Portfolio
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
        <article className="bg-[#0B1120] rounded-3xl border border-slate-800 shadow-2xl overflow-hidden">
          {/* Gradient Accent Bar */}
          <div className="h-1 w-full bg-gradient-to-r from-indigo-600 via-cyan-400 to-emerald-400" />

          <div className="p-8 sm:p-14">
            {/* Article Header */}
            <header className="mb-10 pb-8 border-b border-slate-800/80">
              {/* Tags + Reading Time Row */}
              <div className="flex flex-wrap items-center gap-2 mb-5">
                {post.tags?.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 text-xs font-mono font-bold bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 rounded-lg"
                  >
                    {t}
                  </span>
                ))}
                <span className="px-3 py-1 text-xs font-mono text-slate-400 bg-slate-800/80 border border-slate-700/50 rounded-lg">
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
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-500 to-cyan-400 flex items-center justify-center font-mono text-xs font-extrabold text-slate-950">
                  KM
                </div>
                <div>
                  <p className="text-sm font-bold text-white">{post.author || site.name}</p>
                  <p className="text-[11px] text-cyan-400 font-mono tracking-wide">Forward Deployed AI Solutions Architect · Singapore</p>
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

        {/* ===== PREVIOUS & NEXT NAVIGATION ===== */}
        {(prev || next) && (
          <nav className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            {prev ? (
              <a
                href={`/blog/${prev.slug}`}
                className="group p-6 rounded-2xl bg-[#0B1120] border border-slate-800 hover:border-indigo-500/60 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-200"
              >
                <span className="font-mono text-[10px] uppercase text-cyan-400 font-bold block mb-2">
                  ← Older Article
                </span>
                <p className="text-sm font-bold text-slate-200 group-hover:text-indigo-400 transition-colors line-clamp-2">
                  {prev.title}
                </p>
                <span className="text-[11px] font-mono text-slate-500 mt-2 block">{prev.date}</span>
              </a>
            ) : (
              <div />
            )}

            {next ? (
              <a
                href={`/blog/${next.slug}`}
                className="group p-6 rounded-2xl bg-[#0B1120] border border-slate-800 hover:border-indigo-500/60 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-200 text-right sm:col-start-2"
              >
                <span className="font-mono text-[10px] uppercase text-cyan-400 font-bold block mb-2">
                  Newer Article →
                </span>
                <p className="text-sm font-bold text-slate-200 group-hover:text-indigo-400 transition-colors line-clamp-2">
                  {next.title}
                </p>
                <span className="text-[11px] font-mono text-slate-500 mt-2 block">{next.date}</span>
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
            <span>© {new Date().getFullYear()} {site.name} · Forward Deployed AI Engineer</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="/blog" className="hover:text-white transition-colors">
              ← All Field Notes
            </a>
            <a href="https://github.com/machhakiran/ai-engineering-master-projects" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              GitHub Roadmap ↗
            </a>
            <a href="/api/mcp" className="hover:text-indigo-400 transition-colors">
              MCP API
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
