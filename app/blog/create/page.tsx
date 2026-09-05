'use client';

import { useState } from 'react';
import { site } from '@/lib/data/site';
import { VisitorAnalyticsDashboard } from '@/components/VisitorAnalyticsDashboard';

export default function CreatePostPage() {
  const [activeTab, setActiveTab] = useState<'editor' | 'mcp' | 'analytics'>('editor');
  const [title, setTitle] = useState('');
  const [tags, setTags] = useState('');
  const [excerpt, setExcerpt] = useState('');
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
      const parsedTags = tags
        .split(',')
        .map((t) => t.trim())
        .filter(Boolean);

      const res = await fetch('/api/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, content, tags: parsedTags, excerpt }),
      });

      if (res.ok) {
        const data = await res.json();
        setSavedSlug(data.post?.slug || data.slug);
        setStatus('success');
        setTitle('');
        setTags('');
        setExcerpt('');
        setContent('');
      } else {
        const data = await res.json();
        setErrorMsg(data.error || 'Failed to publish post.');
        setStatus('error');
      }
    } catch {
      setErrorMsg('Network error. Please try again.');
      setStatus('error');
    }
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans">
      {/* ===== HEADER NAVIGATION ===== */}
      <header className="fixed top-0 inset-x-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-xs">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
          <a href="/blog" className="flex items-center gap-2 text-xs font-mono font-bold text-slate-600 hover:text-indigo-600 transition-colors">
            <span>←</span> Back to Blog
          </a>

          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold text-slate-700 hidden sm:inline">Admin: {site.name}</span>
            <button
              onClick={handleLogout}
              className="px-3 py-1.5 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-xs font-mono font-bold text-slate-600 transition-colors"
            >
              Sign out
            </button>
          </div>
        </div>
      </header>

      <main className={`mx-auto px-6 pt-28 pb-24 transition-all ${activeTab === 'analytics' ? 'max-w-6xl' : 'max-w-4xl'}`}>
        {/* Tab Switcher */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-indigo-600 font-bold block mb-1">
              {activeTab === 'analytics' ? 'Traffic Intelligence' : 'Authoring Hub'}
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              {activeTab === 'analytics' ? 'Visitor Reports & Geolocation' : 'Publish Engineering Article'}
            </h1>
          </div>

          <div className="flex flex-wrap items-center gap-1 bg-white border border-slate-200 p-1 rounded-xl shadow-xs self-start sm:self-auto">
            <button
              onClick={() => setActiveTab('editor')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${activeTab === 'editor' ? 'bg-indigo-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'}`}
            >
              ✏️ Manual Editor
            </button>
            <button
              onClick={() => setActiveTab('mcp')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${activeTab === 'mcp' ? 'bg-indigo-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'}`}
            >
              🤖 MCP & Agent API
            </button>
            <button
              onClick={() => setActiveTab('analytics')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold transition-all flex items-center gap-1.5 ${activeTab === 'analytics' ? 'bg-indigo-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'}`}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>📊 Visitor Analytics</span>
            </button>
          </div>
        </div>

        {/* TAB 1: MANUAL EDITOR */}
        {activeTab === 'editor' && (
          <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-md">
            {status === 'success' && (
              <div className="mb-8 p-5 rounded-2xl border border-emerald-200 bg-emerald-50 text-emerald-800 flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold">✅ Article published successfully!</p>
                  <p className="text-xs font-mono mt-0.5">Slug: {savedSlug}</p>
                </div>
                <a
                  href={`/blog/${savedSlug}`}
                  className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-mono font-bold transition-colors shadow-xs"
                >
                  View Article →
                </a>
              </div>
            )}

            {status === 'error' && (
              <div className="mb-8 p-4 rounded-2xl border border-red-200 bg-red-50 text-red-700 text-xs font-mono font-bold">
                {errorMsg}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="post-title" className="block font-mono text-xs uppercase tracking-wider text-slate-700 font-bold mb-2">
                  Article Title
                </label>
                <input
                  id="post-title"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  placeholder="e.g. Fine-Tuning Llama 3 with LoRA on Kubernetes GPU Pools"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-lg font-bold placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:bg-white transition-all"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="post-tags" className="block font-mono text-xs uppercase tracking-wider text-slate-700 font-bold mb-2">
                    Tags <span className="text-slate-400 font-normal">(comma-separated)</span>
                  </label>
                  <input
                    id="post-tags"
                    type="text"
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                    placeholder="Sovereign AI, vLLM, RAG, Kubernetes"
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:bg-white transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="post-excerpt" className="block font-mono text-xs uppercase tracking-wider text-slate-700 font-bold mb-2">
                    Short Excerpt <span className="text-slate-400 font-normal">(1-2 sentences)</span>
                  </label>
                  <input
                    id="post-excerpt"
                    type="text"
                    value={excerpt}
                    onChange={(e) => setExcerpt(e.target.value)}
                    placeholder="Brief summary for social cards and list view..."
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="post-content" className="block font-mono text-xs uppercase tracking-wider text-slate-700 font-bold mb-2">
                  Markdown Content
                </label>
                <textarea
                  id="post-content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  required
                  rows={16}
                  placeholder="# Introduction&#10;&#10;Write your deep-dive engineering article here in Markdown..."
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 font-mono text-sm leading-relaxed placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:bg-white transition-all resize-y"
                />
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  type="submit"
                  id="create-post-submit"
                  disabled={status === 'saving'}
                  className="px-7 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-mono uppercase tracking-wider font-bold transition-all shadow-md shadow-indigo-600/20 disabled:opacity-50"
                >
                  {status === 'saving' ? 'Publishing Post…' : '🚀 Publish Article'}
                </button>
                <a
                  href="/blog"
                  className="px-6 py-3 border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 rounded-xl text-xs font-mono font-bold transition-colors"
                >
                  Cancel
                </a>
              </div>
            </form>
          </div>
        )}

        {/* TAB 2: AGENT & MCP API INSTRUCTIONS */}
        {activeTab === 'mcp' && (
          <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-md space-y-6">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-emerald-500 dot-pulse" />
              <h2 className="text-xl font-bold text-slate-900 font-mono">
                MCP Agent & API Direct Integration
              </h2>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              Your AI coding agents (Cursor, Claude Desktop, Windsurf, LangChain, or custom autonomous scripts) can directly publish blog posts without needing a browser.
            </p>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <p className="font-mono text-xs font-bold text-slate-800">1. MCP Server Discovery Endpoint</p>
              <code className="text-xs font-mono text-indigo-600 block bg-white p-2.5 rounded-lg border border-slate-200">
                GET https://machhakiran.pro/api/mcp
              </code>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <p className="font-mono text-xs font-bold text-slate-800">2. Agent Post Submission Endpoint</p>
              <code className="text-xs font-mono text-indigo-600 block bg-white p-2.5 rounded-lg border border-slate-200">
                POST https://machhakiran.pro/api/posts
              </code>
            </div>

            <div className="p-5 rounded-2xl bg-slate-950 text-emerald-400 font-mono text-xs overflow-x-auto shadow-inner space-y-2">
              <p className="text-slate-400"># Direct curl example for agents:</p>
              <pre>{`curl -X POST https://machhakiran.pro/api/posts \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer kavi-agent-mcp-key-2026" \\
  -d '{
    "title": "Autonomous Agent Tool Calling with FastRTC",
    "content": "# Realtime Voice Agent Deep-Dive\\n\\nHere is how we wire FastRTC with Moonshine...",
    "tags": ["Voice AI", "FastRTC", "Agents"],
    "excerpt": "Architecting realtime voice loops with sub-second STT and tool-calling models."
  }'`}</pre>
            </div>
          </div>
        )}

        {/* TAB 3: VISITOR GEOGRAPHIC & TRAFFIC REPORTS */}
        {activeTab === 'analytics' && <VisitorAnalyticsDashboard />}
      </main>
    </div>
  );
}
