import { getAllPosts } from '@/lib/posts';
import { site } from '@/lib/data/site';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Blog — ${site.name}`,
  description: 'Field notes on AI engineering, private AI, LLM deployment, and open-source infrastructure.',
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-[#FAFAFD] text-slate-900 font-sans">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 bg-white/85 backdrop-blur-xl border-b border-slate-200/80 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
          <a href="/" className="font-serif font-bold text-lg text-slate-900 tracking-tight">{site.name}</a>
          <nav className="flex items-center gap-4 text-xs font-mono text-slate-600">
            <a href="/" className="hover:text-indigo-600 transition-colors">Home</a>
            <a href="/blog" className="text-indigo-600 font-semibold">Blog</a>
            <a href="/blog/login" className="hover:text-indigo-600 transition-colors">Admin</a>
          </nav>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 pt-32 pb-24">
        <div className="mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-indigo-600 font-bold mb-3 block">Engineering Writings</span>
          <h1 className="font-serif font-bold text-4xl sm:text-5xl text-slate-900 mb-4 tracking-tight">
            AI Engineering in Production
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed max-w-2xl">
            Field notes on private AI, LLM deployment, enterprise integration, and open-source infrastructure.
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="py-20 text-center bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
            <p className="font-mono text-xs text-slate-400 uppercase tracking-widest mb-2 font-semibold">No Published Posts</p>
            <p className="text-slate-600 text-sm">Articles and case studies are currently being finalized.</p>
          </div>
        ) : (
          <div className="divide-y divide-slate-200 bg-white rounded-3xl border border-slate-200 px-8 shadow-sm">
            {posts.map((post) => (
              <article key={post.slug} className="py-8 group">
                <a href={`/blog/${post.slug}`} className="block">
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex-1 min-w-0">
                      <h2 className="font-serif font-bold text-2xl text-slate-900 group-hover:text-indigo-600 transition-colors mb-2">
                        {post.title}
                      </h2>
                      {post.excerpt && (
                        <p className="text-sm text-slate-600 leading-relaxed line-clamp-2 mb-3">
                          {post.excerpt}
                        </p>
                      )}
                      <span className="font-mono text-xs text-slate-400">
                        {new Date(post.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </span>
                    </div>
                    <span className="text-slate-400 group-hover:text-indigo-600 transition-colors font-mono text-lg font-bold">
                      →
                    </span>
                  </div>
                </a>
              </article>
            ))}
          </div>
        )}
      </main>

      <footer className="border-t border-slate-200 py-8 px-6 bg-white text-xs font-mono text-slate-500">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <span>© {new Date().getFullYear()} {site.name}</span>
          <a href="/" className="hover:text-indigo-600 transition-colors">← Back to portfolio</a>
        </div>
      </footer>
    </div>
  );
}
