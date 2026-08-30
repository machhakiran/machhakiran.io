'use client';

import { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { site } from '@/lib/data/site';

function LoginForm() {
  const searchParams = useSearchParams();
  const redirect = searchParams.get('redirect') || '/blog/create';

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      if (res.ok) {
        window.location.href = redirect;
      } else {
        const data = await res.json();
        setError(data.error || 'Invalid credentials');
      }
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#12110E] text-[#F1ECE1] flex items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <div className="mb-10 text-center">
          <a href="/" className="font-serif font-semibold text-lg tracking-tight text-white/80 hover:text-white transition-colors">
            {site.name}
          </a>
          <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-white/20 mt-3">Admin Access</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label htmlFor="username" className="block font-mono text-[10px] tracking-[0.12em] uppercase text-white/30 mb-2">
              Username
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              autoComplete="username"
              className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.07] rounded-lg text-sm text-white/80 placeholder-white/20 focus:outline-none focus:border-white/20 transition-colors"
              placeholder="username"
            />
          </div>

          <div>
            <label htmlFor="password" className="block font-mono text-[10px] tracking-[0.12em] uppercase text-white/30 mb-2">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
              className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.07] rounded-lg text-sm text-white/80 placeholder-white/20 focus:outline-none focus:border-white/20 transition-colors"
              placeholder="••••••••"
            />
          </div>

          {error && (
            <p className="text-xs text-red-400/80 font-mono tracking-[0.04em]">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            id="login-submit"
            className="w-full py-3 bg-white text-[#12110E] rounded-lg text-sm font-medium hover:bg-white/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed mt-2"
          >
            {loading ? 'Signing in…' : 'Sign in'}
          </button>
        </form>

        <div className="mt-8 text-center">
          <a href="/blog" className="font-mono text-[10px] tracking-[0.1em] uppercase text-white/20 hover:text-white/40 transition-colors">
            ← Back to blog
          </a>
        </div>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#12110E] flex items-center justify-center">
        <span className="font-mono text-xs text-white/20">Loading…</span>
      </div>
    }>
      <LoginForm />
    </Suspense>
  );
}
