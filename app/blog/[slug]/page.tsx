import { getPostBySlug, getAdjacentPosts, getAllPosts } from '@/lib/posts';
import { site } from '@/lib/data/site';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

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
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-indigo-500/20 selection:text-indigo-700">
      {/* ===== HEADER NAVIGATION ===== */}
      <header className="fixed top-0 inset-x-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-xs">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
          <a href="/blog" className="flex items-center gap-2 text-xs font-mono font-bold text-slate-600 hover:text-indigo-600 transition-colors">
            <span>←</span> All Field Notes
          </a>

          <div className="flex items-center gap-4 text-xs font-mono font-bold">
            <a href="/" className="text-slate-600 hover:text-indigo-600 transition-colors">
              Portfolio
            </a>
            <a
              href="/blog/create"
              className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors hidden sm:inline shadow-xs"
            >
              + New Post
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 pt-28 pb-24">
        <article className="bg-white p-8 sm:p-14 rounded-3xl border border-slate-200 shadow-md">
          {/* Article Header */}
          <header className="mb-10 border-b border-slate-100 pb-8">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              {post.tags?.map((t) => (
                <span key={t} className="px-2.5 py-1 text-xs font-mono font-bold bg-indigo-50 border border-indigo-200 text-indigo-700 rounded-lg">
                  {t}
                </span>
              ))}
              <span className="px-2.5 py-1 text-xs font-mono text-slate-500 bg-slate-100 rounded-lg font-medium">
                {post.readingTime}
              </span>
              <span className="text-xs font-mono text-slate-400 font-medium ml-auto">
                Published on {post.date}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight mb-4">
              {post.title}
            </h1>

            <div className="flex items-center gap-3 pt-2">
              <div className="w-9 h-9 rounded-full bg-slate-900 text-white font-mono text-xs flex items-center justify-center font-bold">
                KM
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900">{post.author || site.name}</p>
                <p className="text-[11px] text-slate-400 font-mono">Senior AI Engineer & FDE</p>
              </div>
            </div>
          </header>

          {/* Markdown Content */}
          <div
            className="prose-post"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </article>

        {/* Previous & Next Post Navigation Cards */}
        {(prev || next) && (
          <nav className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            {prev ? (
              <a
                href={`/blog/${prev.slug}`}
                className="group p-6 rounded-2xl bg-white border border-slate-200 hover:border-indigo-400 hover:shadow-md transition-all shadow-xs"
              >
                <span className="font-mono text-[10px] uppercase text-indigo-600 font-bold block mb-1">
                  ← Older Article
                </span>
                <p className="text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors line-clamp-2">
                  {prev.title}
                </p>
                <span className="text-[11px] font-mono text-slate-400 mt-2 block">{prev.date}</span>
              </a>
            ) : (
              <div />
            )}

            {next ? (
              <a
                href={`/blog/${next.slug}`}
                className="group p-6 rounded-2xl bg-white border border-slate-200 hover:border-indigo-400 hover:shadow-md transition-all shadow-xs text-right sm:col-start-2"
              >
                <span className="font-mono text-[10px] uppercase text-indigo-600 font-bold block mb-1">
                  Newer Article →
                </span>
                <p className="text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors line-clamp-2">
                  {next.title}
                </p>
                <span className="text-[11px] font-mono text-slate-400 mt-2 block">{next.date}</span>
              </a>
            ) : (
              <div />
            )}
          </nav>
        )}
      </main>

      {/* ===== FOOTER ===== */}
      <footer className="border-t border-slate-200 py-8 px-6 bg-white text-xs font-mono text-slate-500">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <span>© {new Date().getFullYear()} {site.name}</span>
          <a href="/blog" className="hover:text-indigo-600 transition-colors font-bold">
            ← Return to Field Notes Archive
          </a>
        </div>
      </footer>
    </div>
  );
}
