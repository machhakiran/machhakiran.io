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
    <div className="min-h-screen bg-[#FAFAFD] text-slate-900 font-sans">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 bg-white/85 backdrop-blur-xl border-b border-slate-200/80 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
          <a href="/" className="font-serif font-bold text-lg text-slate-900 tracking-tight">{site.name}</a>
          <nav className="flex items-center gap-4 text-xs font-mono text-slate-600">
            <a href="/" className="hover:text-indigo-600 transition-colors">Home</a>
            <a href="/blog" className="hover:text-indigo-600 transition-colors">Blog</a>
          </nav>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 pt-32 pb-24">
        <a
          href="/blog"
          className="inline-flex items-center gap-2 font-mono text-xs text-indigo-600 hover:text-indigo-800 font-semibold mb-8"
        >
          <span>←</span> All Writing
        </a>

        <article className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50">
          <header className="mb-8 border-b border-slate-100 pb-8">
            <p className="font-mono text-xs text-indigo-600 font-semibold mb-2">
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
            <h1 className="font-serif font-bold text-3xl sm:text-5xl text-slate-900 leading-tight">
              {post.title}
            </h1>
          </header>

          <div
            className="prose-post"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </article>

        {(prev || next) && (
          <nav className="grid grid-cols-2 gap-4 mt-8">
            {prev ? (
              <a
                href={`/blog/${prev.slug}`}
                className="group p-5 rounded-2xl bg-white border border-slate-200 hover:border-indigo-400 transition-all shadow-sm"
              >
                <p className="font-mono text-[10px] uppercase text-indigo-600 font-bold mb-1">← Older Post</p>
                <p className="text-sm font-semibold text-slate-800 group-hover:text-indigo-600 transition-colors">
                  {prev.title}
                </p>
              </a>
            ) : (
              <div />
            )}
            {next ? (
              <a
                href={`/blog/${next.slug}`}
                className="group p-5 rounded-2xl bg-white border border-slate-200 hover:border-indigo-400 transition-all shadow-sm text-right"
              >
                <p className="font-mono text-[10px] uppercase text-indigo-600 font-bold mb-1">Newer Post →</p>
                <p className="text-sm font-semibold text-slate-800 group-hover:text-indigo-600 transition-colors">
                  {next.title}
                </p>
              </a>
            ) : (
              <div />
            )}
          </nav>
        )}
      </main>

      <footer className="border-t border-slate-200 py-8 px-6 bg-white text-xs font-mono text-slate-500">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <span>© {new Date().getFullYear()} {site.name}</span>
          <a href="/blog" className="hover:text-indigo-600 transition-colors">← Back to blog</a>
        </div>
      </footer>
    </div>
  );
}
