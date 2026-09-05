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

    const trimmedUser = username.trim();
    if (!trimmedUser && !password) {
      setError('Please enter both username and password.');
      return;
    }
    if (!trimmedUser) {
      setError('Username is required. Please enter your username.');
      return;
    }
    if (!password) {
      setError('Password is required. Please enter your password.');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: trimmedUser, password }),
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok && data.success) {
        window.location.href = redirect;
      } else {
        setError(data.error || 'Invalid credentials. Please try again.');
      }
    } catch {
      setError('Something went wrong connecting to the server. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-xl">
        <div className="mb-8 text-center">
          <div className="w-12 h-12 rounded-2xl bg-indigo-600 flex items-center justify-center font-bold text-white text-lg mx-auto mb-4 shadow-md shadow-indigo-600/20">
            KM
          </div>
          <h1 className="text-2xl font-bold text-slate-900">{site.name}</h1>
          <p className="font-mono text-xs uppercase tracking-widest text-indigo-600 font-bold mt-1">
            Blog Admin Portal
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="username" className="block font-mono text-xs uppercase tracking-wider text-slate-700 font-bold mb-1.5">
              Username
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                if (error) setError('');
              }}
              autoComplete="username"
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:bg-white transition-all font-sans"
              placeholder="Enter your username"
            />
          </div>

          <div>
            <label htmlFor="password" className="block font-mono text-xs uppercase tracking-wider text-slate-700 font-bold mb-1.5">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                if (error) setError('');
              }}
              autoComplete="current-password"
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:bg-white transition-all font-sans"
              placeholder="Enter your password"
            />
          </div>

          {error && (
            <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-700 font-mono font-medium flex items-center gap-2.5">
              <span className="text-base shrink-0">⚠️</span>
              <span className="leading-snug">{error}</span>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            id="login-submit"
            className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-mono uppercase tracking-wider font-bold transition-all shadow-md shadow-indigo-600/20 disabled:opacity-50 mt-2 cursor-pointer flex items-center justify-center gap-2"
          >
            {loading ? 'Validating credentials…' : 'Sign in to Editor'}
          </button>
        </form>

        <div className="mt-8 text-center border-t border-slate-100 pt-4">
          <a href="/blog" className="font-mono text-xs text-slate-500 hover:text-indigo-600 transition-colors font-semibold">
            ← Back to Blog
          </a>
        </div>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center">
          <span className="font-mono text-xs text-slate-400">Loading admin portal…</span>
        </div>
      }
    >
      <LoginForm />
    </Suspense>
  );
}
