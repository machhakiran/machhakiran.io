'use client';

import { useState } from 'react';
import { site } from '@/lib/data/site';

export default function CreatePostPage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [status, setStatus] = useState<'idle' | 'saving' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [savedSlug, setSavedSlug] = useState('');

  async function handleLogout() {
    await fetch('/api/auth/logout', { method: 'POST' });
    window.location.href = '/blog/login';
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('saving');
    setErrorMsg('');

    try {
      const res = await fetch('/api/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, content }),
      });

      if (res.ok) {
        const data = await res.json();
        setSavedSlug(data.slug);
        setStatus('success');
        setTitle('');
        setContent('');
      } else {
        const data = await res.json();
        setErrorMsg(data.error || 'Failed to save post.');
        setStatus('error');
      }
    } catch {
      setErrorMsg('Network error. Please try again.');
      setStatus('error');
    }
  }

  return (
    <div className="min-h-screen bg-[#12110E] text-[#F1ECE1]">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 bg-[#12110E]/90 backdrop-blur-md border-b border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between gap-4">
          <a href="/" className="font-serif font-semibold text-lg tracking-tight">{site.name}</a>
          <nav className="flex items-center gap-4 text-xs text-white/40">
            <a href="/blog" className="hover:text-white/80 transition-colors">Blog</a>
            <button
              onClick={handleLogout}
              className="hover:text-white/80 transition-colors font-mono tracking-[0.06em]"
            >
              Sign out
            </button>
          </nav>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 pt-28 pb-24">
        <div className="mb-10">
          <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-white/25 mb-2">Admin</p>
          <h1 className="font-serif font-bold text-3xl text-white tracking-[-0.02em]">New Post</h1>
        </div>

        {status === 'success' && (
          <div className="mb-8 p-4 rounded-xl border border-white/[0.06] bg-white/[0.02]">
            <p className="text-sm text-white/60 mb-2">Post published successfully.</p>
            <a
              href={`/blog/${savedSlug}`}
              className="font-mono text-xs text-white/40 hover:text-white/70 transition-colors underline underline-offset-2"
            >
              View post →
            </a>
          </div>
        )}

        {status === 'error' && (
          <div className="mb-8 p-4 rounded-xl border border-red-500/20 bg-red-500/[0.04]">
            <p className="text-sm text-red-400/80">{errorMsg}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="post-title" className="block font-mono text-[10px] tracking-[0.12em] uppercase text-white/30 mb-2">
              Title
            </label>
            <input
              id="post-title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              placeholder="Post title…"
              className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.07] rounded-lg text-white/80 placeholder-white/20 focus:outline-none focus:border-white/20 transition-colors font-serif text-lg"
            />
          </div>

          <div>
            <label htmlFor="post-content" className="block font-mono text-[10px] tracking-[0.12em] uppercase text-white/30 mb-2">
              Content <span className="text-white/15 normal-case tracking-normal ml-1">(Markdown)</span>
            </label>
            <textarea
              id="post-content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
              rows={20}
              placeholder="Write your post in Markdown…"
              className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.07] rounded-lg text-white/70 placeholder-white/15 focus:outline-none focus:border-white/20 transition-colors font-mono text-sm leading-relaxed resize-y"
            />
          </div>

          <div className="flex items-center gap-3 pt-2">
            <button
              type="submit"
              id="create-post-submit"
              disabled={status === 'saving'}
              className="px-6 py-2.5 bg-white text-[#12110E] rounded-lg text-sm font-medium hover:bg-white/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'saving' ? 'Publishing…' : 'Publish post'}
            </button>
            <a
              href="/blog"
              className="px-6 py-2.5 border border-white/[0.08] rounded-lg text-sm text-white/40 hover:text-white/70 hover:border-white/15 transition-colors"
            >
              Cancel
            </a>
          </div>
        </form>
      </main>
    </div>
  );
}
