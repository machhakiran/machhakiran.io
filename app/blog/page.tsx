import { getAllPosts } from '@/lib/posts';
import { site } from '@/lib/data/site';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Blog — ${site.name}`,
  description: 'Thoughts on AI engineering, private AI, LLMs, and deploying AI in enterprise environments.',
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-[#12110E] text-[#F1ECE1] font-text">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 bg-[#12110E]/90 backdrop-blur-md border-b border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between gap-4">
          <a href="/" className="font-serif font-semibold text-lg tracking-tight">{site.name}</a>
          <nav className="flex items-center gap-4 text-xs text-white/40">
            <a href="/" className="hover:text-white/80 transition-colors">Home</a>
            <a href="/blog" className="text-white/70">Blog</a>
            <a href="/blog/login" className="hover:text-white/80 transition-colors">Admin</a>
          </nav>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 pt-32 pb-24">
        <div className="mb-16">
          <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-white/25 mb-3">Writing</p>
          <h1 className="font-serif font-bold text-3xl sm:text-4xl text-white mb-4 tracking-[-0.02em]">
            AI Engineering in the Wild
          </h1>
          <p className="text-white/40 leading-relaxed max-w-2xl">
            Field notes on private AI, LLM deployment, enterprise integration, and what actually works in production.
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="py-24 text-center">
            <p className="font-mono text-xs text-white/20 tracking-[0.1em] uppercase mb-3">No posts yet</p>
            <p className="text-white/30 text-sm">The first post is coming soon.</p>
          </div>
        ) : (
          <div className="divide-y divide-white/[0.04]">
            {posts.map((post) => (
              <article key={post.slug} className="py-8 group">
                <a href={`/blog/${post.slug}`} className="block">
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex-1 min-w-0">
                      <h2 className="font-serif font-semibold text-xl text-white/80 group-hover:text-white transition-colors mb-2 tracking-[-0.01em]">
                        {post.title}
                      </h2>
                      {post.excerpt && (
                        <p className="text-sm text-white/35 leading-relaxed line-clamp-2 mb-3">
                          {post.excerpt}
                        </p>
                      )}
                      <span className="font-mono text-[10px] tracking-[0.1em] text-white/20">
                        {new Date(post.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </span>
                    </div>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="text-white/10 group-hover:text-white/30 transition-colors shrink-0 mt-1"
                    >
                      <path d="M3 8h10M9 4l4 4-4 4" />
                    </svg>
                  </div>
                </a>
              </article>
            ))}
          </div>
        )}
      </main>

      <footer className="border-t border-white/[0.04] py-8 px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between text-xs text-white/20 font-mono tracking-[0.04em]">
          <span>© {new Date().getFullYear()} {site.name}</span>
          <a href="/" className="hover:text-white/40 transition-colors">← Back to site</a>
        </div>
      </footer>
    </div>
  );
}
