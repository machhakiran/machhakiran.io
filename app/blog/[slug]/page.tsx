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
    <div className="min-h-screen bg-[#12110E] text-[#F1ECE1] font-text">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 bg-[#12110E]/90 backdrop-blur-md border-b border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between gap-4">
          <a href="/" className="font-serif font-semibold text-lg tracking-tight">{site.name}</a>
          <nav className="flex items-center gap-4 text-xs text-white/40">
            <a href="/" className="hover:text-white/80 transition-colors">Home</a>
            <a href="/blog" className="hover:text-white/80 transition-colors">Blog</a>
          </nav>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-6 pt-28 pb-24">
        {/* Back */}
        <a
          href="/blog"
          className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.12em] uppercase text-white/25 hover:text-white/50 transition-colors mb-10"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M9 6H3M5 2L1 6l4 4" />
          </svg>
          All posts
        </a>

        {/* Header */}
        <header className="mb-10">
          <p className="font-mono text-[10px] tracking-[0.1em] text-white/20 mb-4">
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
          <h1 className="font-serif font-bold text-3xl sm:text-4xl text-white leading-tight tracking-[-0.02em]">
            {post.title}
          </h1>
        </header>

        <hr className="border-white/[0.06] mb-10" />

        {/* Content */}
        <article
          className="prose-post"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />

        <hr className="border-white/[0.06] mt-16 mb-10" />

        {/* Adjacent posts */}
        {(prev || next) && (
          <nav className="grid grid-cols-2 gap-4">
            {prev ? (
              <a
                href={`/blog/${prev.slug}`}
                className="group p-4 rounded-xl border border-white/[0.04] hover:border-white/[0.08] hover:bg-white/[0.02] transition-all"
              >
                <p className="font-mono text-[9px] tracking-[0.12em] uppercase text-white/20 mb-2">← Older</p>
                <p className="text-sm text-white/50 group-hover:text-white/80 transition-colors leading-snug">
                  {prev.title}
                </p>
              </a>
            ) : (
              <div />
            )}
            {next ? (
              <a
                href={`/blog/${next.slug}`}
                className="group p-4 rounded-xl border border-white/[0.04] hover:border-white/[0.08] hover:bg-white/[0.02] transition-all text-right"
              >
                <p className="font-mono text-[9px] tracking-[0.12em] uppercase text-white/20 mb-2">Newer →</p>
                <p className="text-sm text-white/50 group-hover:text-white/80 transition-colors leading-snug">
                  {next.title}
                </p>
              </a>
            ) : (
              <div />
            )}
          </nav>
        )}
      </main>

      <footer className="border-t border-white/[0.04] py-8 px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between text-xs text-white/20 font-mono tracking-[0.04em]">
          <span>© {new Date().getFullYear()} {site.name}</span>
          <a href="/blog" className="hover:text-white/40 transition-colors">← Blog</a>
        </div>
      </footer>

      <style>{`
        .prose-post { color: rgba(241,236,225,0.6); line-height: 1.8; }
        .prose-post h1, .prose-post h2, .prose-post h3, .prose-post h4 {
          font-family: 'Fraunces', 'Iowan Old Style', Georgia, serif;
          color: rgba(255,255,255,0.85);
          font-weight: 700;
          letter-spacing: -0.01em;
          margin-top: 2.5rem;
          margin-bottom: 0.75rem;
          line-height: 1.25;
        }
        .prose-post h1 { font-size: 1.75rem; }
        .prose-post h2 { font-size: 1.375rem; }
        .prose-post h3 { font-size: 1.125rem; }
        .prose-post p { margin-bottom: 1.5rem; }
        .prose-post a { color: rgba(255,255,255,0.7); text-decoration: underline; text-underline-offset: 3px; text-decoration-color: rgba(255,255,255,0.2); }
        .prose-post a:hover { color: rgba(255,255,255,0.9); }
        .prose-post strong { color: rgba(255,255,255,0.8); font-weight: 600; }
        .prose-post em { font-style: italic; }
        .prose-post code {
          font-family: 'IBM Plex Mono', ui-monospace, monospace;
          font-size: 0.8125rem;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 4px;
          padding: 0.1em 0.4em;
          color: rgba(241,236,225,0.7);
        }
        .prose-post pre {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 10px;
          padding: 1.25rem;
          overflow-x: auto;
          margin-bottom: 1.5rem;
        }
        .prose-post pre code { background: none; border: none; padding: 0; font-size: 0.8125rem; }
        .prose-post blockquote {
          border-left: 2px solid rgba(255,255,255,0.1);
          padding-left: 1.25rem;
          margin-left: 0;
          color: rgba(241,236,225,0.4);
          font-style: italic;
          margin-bottom: 1.5rem;
        }
        .prose-post ul, .prose-post ol { padding-left: 1.5rem; margin-bottom: 1.5rem; }
        .prose-post li { margin-bottom: 0.5rem; }
        .prose-post ul li { list-style-type: disc; }
        .prose-post ul li::marker { color: rgba(255,255,255,0.15); }
        .prose-post ol li { list-style-type: decimal; }
        .prose-post ol li::marker { color: rgba(255,255,255,0.25); font-family: 'IBM Plex Mono', monospace; font-size: 0.75rem; }
        .prose-post hr { border-color: rgba(255,255,255,0.06); margin: 2rem 0; }
        .prose-post img { border-radius: 10px; width: 100%; margin: 1.5rem 0; }
      `}</style>
    </div>
  );
}
