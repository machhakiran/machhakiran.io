import { getAllPosts } from '@/lib/posts';
import { site } from '@/lib/data/site';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Engineering Blog & Field Notes — ${site.name}`,
  description: 'Production notes on Sovereign AI, Private LLMs, Computer Vision, and AI Infrastructure in Enterprise.',
};

export default function BlogPage() {
  const posts = getAllPosts();
  const featuredPost = posts.length > 0 ? posts[0] : null;
  const archivePosts = posts.length > 1 ? posts.slice(1) : [];

  // Group archive posts by year
  const postsByYear = archivePosts.reduce((acc, post) => {
    const year = new Date(post.date).getFullYear().toString();
    if (!acc[year]) acc[year] = [];
    acc[year].push(post);
    return acc;
  }, {} as Record<string, typeof archivePosts>);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-indigo-500/20 selection:text-indigo-700">
      {/* ===== HEADER NAVIGATION ===== */}
      <header className="fixed top-0 inset-x-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
          <a href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center font-bold text-white text-base shadow-sm group-hover:bg-indigo-700 transition-colors">
              KM
            </div>
            <div className="flex flex-col text-left">
              <span className="font-bold text-base tracking-tight text-slate-900 group-hover:text-indigo-600 transition-colors">
                {site.name}
              </span>
              <span className="text-[11px] font-mono text-slate-500 font-medium -mt-0.5">Engineering Notes</span>
            </div>
          </a>

          <nav className="flex items-center gap-4 text-xs font-mono font-bold">
            <a href="/" className="text-slate-600 hover:text-indigo-600 transition-colors">
              ← Home
            </a>
            <a href="/fde" className="text-slate-600 hover:text-indigo-600 transition-colors hidden sm:inline">
              FDE Playbook
            </a>
            <a
              href="/blog/create"
              className="px-3.5 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors flex items-center gap-1.5 shadow-xs"
            >
              <span>+ New Post</span>
            </a>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 pt-28 pb-24">
        {/* Title Header & MCP Agent Callout */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-slate-200 pb-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-indigo-600 font-bold mb-2 block">
              Field Notes & System Design
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              AI Engineering in Production
            </h1>
            <p className="text-slate-600 text-base mt-2 max-w-2xl font-normal">
              Technical field notes on private AI, on-premises LLM deployment, agentic workflows, and enterprise compliance.
            </p>
          </div>

          {/* MCP Agent Badge */}
          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col items-start gap-1 max-w-sm">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 dot-pulse" />
              <span className="text-xs font-mono font-bold text-slate-900">MCP Agent Direct Publishing</span>
            </div>
            <p className="text-[11px] text-slate-500 leading-snug">
              AI agents (Cursor, Claude, MCP) can publish directly via <code className="text-indigo-600 font-mono font-semibold">POST /api/posts</code> with Bearer auth.
            </p>
          </div>
        </div>

        {posts.length === 0 ? (
          <div className="py-20 text-center bg-white rounded-3xl border border-slate-200 p-8 shadow-xs">
            <p className="font-mono text-xs text-slate-400 uppercase tracking-widest mb-2 font-bold">No Posts Found</p>
            <p className="text-slate-600 text-sm">Create the first post via the admin button above or through the MCP API.</p>
          </div>
        ) : (
          <div className="space-y-16">
            {/* ===== FEATURED LATEST MAIN POST ===== */}
            {featuredPost && (
              <section>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono uppercase tracking-widest text-indigo-600 font-bold flex items-center gap-2">
                    <span>⭐</span> Latest Featured Article
                  </span>
                  <span className="text-xs font-mono text-slate-400 font-medium">Published on {featuredPost.date}</span>
                </div>

                <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-md hover:border-indigo-300 transition-all group">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {featuredPost.tags?.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs font-mono font-bold bg-indigo-50 border border-indigo-200 text-indigo-700 rounded-lg"
                      >
                        {tag}
                      </span>
                    ))}
                    <span className="px-2.5 py-1 text-xs font-mono text-slate-500 bg-slate-100 rounded-lg font-medium">
                      {featuredPost.readingTime}
                    </span>
                  </div>

                  <a href={`/blog/${featuredPost.slug}`} className="block group">
                    <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 group-hover:text-indigo-600 transition-colors tracking-tight leading-tight mb-4">
                      {featuredPost.title}
                    </h2>
                  </a>

                  <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8 font-normal line-clamp-3">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex items-center justify-between border-t border-slate-100 pt-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-slate-900 text-white font-mono text-xs flex items-center justify-center font-bold">
                        KM
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-900">{featuredPost.author || site.name}</p>
                        <p className="text-[11px] text-slate-400 font-mono">Senior AI Engineer</p>
                      </div>
                    </div>

                    <a
                      href={`/blog/${featuredPost.slug}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-colors shadow-xs"
                    >
                      <span>Read Full Article</span>
                      <span>→</span>
                    </a>
                  </div>
                </div>
              </section>
            )}

            {/* ===== ARCHIVE TREE & POST LIST ===== */}
            {archivePosts.length > 0 && (
              <section className="border-t border-slate-200 pt-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                  {/* Left Column: Archive Tree Sidebar */}
                  <div className="lg:col-span-4 space-y-6">
                    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs sticky top-24">
                      <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-4 font-mono flex items-center gap-2">
                        <span>📂</span> Archive Directory Tree
                      </h3>

                      <div className="space-y-4">
                        {Object.entries(postsByYear).map(([year, yearPosts]) => (
                          <div key={year} className="space-y-2">
                            <div className="flex items-center justify-between text-xs font-mono font-bold text-indigo-600 border-b border-slate-100 pb-1">
                              <span>📁 Year {year}</span>
                              <span className="text-slate-400">{yearPosts.length} posts</span>
                            </div>
                            <ul className="space-y-1.5 pl-2 text-xs font-mono">
                              {yearPosts.map((p) => (
                                <li key={p.slug}>
                                  <a
                                    href={`/blog/${p.slug}`}
                                    className="text-slate-600 hover:text-indigo-600 transition-colors truncate block hover:translate-x-1 duration-150"
                                  >
                                    ├─ {p.title}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>

                      {/* Filter by tags */}
                      <div className="mt-8 pt-6 border-t border-slate-100">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 font-mono">
                          Topic Categories
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {Array.from(new Set(posts.flatMap((p) => p.tags || []))).map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-1 text-[11px] font-mono bg-slate-100 hover:bg-indigo-50 hover:text-indigo-700 text-slate-700 rounded-md transition-colors font-medium"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Archive Posts Grid */}
                  <div className="lg:col-span-8 space-y-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-slate-900">Previous Articles & Case Studies</h3>
                      <span className="text-xs font-mono text-slate-500">{archivePosts.length} Archive Articles</span>
                    </div>

                    <div className="space-y-4">
                      {archivePosts.map((post) => (
                        <article
                          key={post.slug}
                          className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all group"
                        >
                          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-3">
                            <div>
                              <div className="flex items-center gap-2 mb-2">
                                <span className="text-xs font-mono text-slate-400 font-medium">{post.date}</span>
                                <span className="text-slate-300">·</span>
                                <span className="text-xs font-mono text-indigo-600 font-semibold">{post.readingTime}</span>
                              </div>
                              <a href={`/blog/${post.slug}`} className="block group">
                                <h4 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                                  {post.title}
                                </h4>
                              </a>
                            </div>

                            <a
                              href={`/blog/${post.slug}`}
                              className="px-3.5 py-1.5 rounded-lg bg-slate-100 hover:bg-indigo-600 hover:text-white text-slate-700 text-xs font-mono font-bold transition-colors shrink-0 self-start"
                            >
                              Read →
                            </a>
                          </div>

                          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-2 mb-4 font-normal">
                            {post.excerpt}
                          </p>

                          <div className="flex flex-wrap gap-1.5">
                            {post.tags?.map((t) => (
                              <span key={t} className="px-2 py-0.5 text-[10px] rounded-md bg-slate-50 border border-slate-200 text-slate-600 font-mono">
                                {t}
                              </span>
                            ))}
                          </div>
                        </article>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            )}
          </div>
        )}
      </main>

      {/* ===== FOOTER ===== */}
      <footer className="border-t border-slate-200 py-8 px-6 bg-white text-xs font-mono text-slate-500">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <span>© {new Date().getFullYear()} {site.name} · {site.location}</span>
          <a href="/" className="hover:text-indigo-600 transition-colors font-bold">
            ← Return to Portfolio
          </a>
        </div>
      </footer>
    </div>
  );
}
