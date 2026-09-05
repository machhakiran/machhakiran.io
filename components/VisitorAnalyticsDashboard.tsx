'use client';

import { useState, useEffect } from 'react';
import { AnalyticsData } from '@/lib/analytics';

export function VisitorAnalyticsDashboard() {
  const [data, setData] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [lastRefreshed, setLastRefreshed] = useState<string>('');
  const [showSetupGuide, setShowSetupGuide] = useState(false);

  async function fetchAnalytics() {
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/analytics/stats', { cache: 'no-store' });
      const json = await res.json();
      if (json.success && json.data) {
        setData(json.data);
        setLastRefreshed(new Date().toLocaleTimeString());
      } else {
        setError(json.error || 'Failed to load visitor reports.');
      }
    } catch {
      setError('Network error loading visitor analytics.');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchAnalytics();
  }, []);

  if (loading && !data) {
    return (
      <div className="bg-white p-12 rounded-3xl border border-slate-200 shadow-md flex flex-col items-center justify-center text-center">
        <div className="w-10 h-10 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mb-4" />
        <p className="font-mono text-xs uppercase tracking-wider text-slate-500 font-bold">
          Aggregating Vercel Edge Geolocation & Visitor Metrics…
        </p>
      </div>
    );
  }

  if (error && !data) {
    return (
      <div className="bg-white p-8 rounded-3xl border border-rose-200 shadow-md text-center">
        <p className="text-sm font-mono text-rose-600 font-bold mb-3">⚠️ {error}</p>
        <button
          onClick={fetchAnalytics}
          className="px-4 py-2 bg-indigo-600 text-white rounded-xl text-xs font-mono font-bold"
        >
          Try Again
        </button>
      </div>
    );
  }

  if (!data) return null;

  return (
    <div className="space-y-8">
      {/* HEADER BAR */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-widest text-indigo-600 font-bold">
              Edge Telemetry Reports
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Visitor Geographic & Traffic Analytics
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Powered by Vercel Edge Geolocation headers with zero heavy database overhead.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {/* Storage Mode Badge */}
          <div
            onClick={() => setShowSetupGuide(!showSetupGuide)}
            className="cursor-pointer px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-indigo-300 text-xs font-mono text-slate-700 flex items-center gap-2 transition-colors shadow-2xs"
            title="Click to view storage architecture details"
          >
            <span className={`w-2 h-2 rounded-full ${data.storageInfo.isPersistent ? 'bg-emerald-500' : 'bg-indigo-500'}`} />
            <span className="font-semibold">{data.storageInfo.provider}</span>
            <span className="text-slate-400">ⓘ</span>
          </div>

          <button
            onClick={fetchAnalytics}
            disabled={loading}
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-mono font-bold transition-all flex items-center gap-2 shadow-xs disabled:opacity-50"
          >
            <span>🔄</span>
            <span>{loading ? 'Refreshing…' : 'Refresh'}</span>
            {lastRefreshed && <span className="text-[10px] opacity-75 hidden sm:inline">({lastRefreshed})</span>}
          </button>
        </div>
      </div>

      {/* STORAGE ARCHITECTURE EXPLANATION ACCORDION */}
      {showSetupGuide && (
        <div className="p-6 rounded-3xl bg-indigo-950 text-white border border-indigo-900 shadow-xl space-y-4 animate-fadeIn">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="text-xl">🗄️</span>
              <h3 className="font-bold text-base font-mono text-indigo-200">
                Zero-Main-DB Storage Architecture
              </h3>
            </div>
            <button
              onClick={() => setShowSetupGuide(false)}
              className="text-xs font-mono text-slate-400 hover:text-white px-2 py-1 rounded"
            >
              ✕ Close
            </button>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed">
            Your site is hosted on Vercel. Every inbound HTTP request carries verified geolocation data:
            <code className="text-indigo-300 bg-indigo-900/60 px-1.5 py-0.5 rounded mx-1">x-vercel-ip-country</code>,
            <code className="text-indigo-300 bg-indigo-900/60 px-1.5 py-0.5 rounded mx-1">x-vercel-ip-city</code>, and
            <code className="text-indigo-300 bg-indigo-900/60 px-1.5 py-0.5 rounded mx-1">x-vercel-ip-region</code>.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-indigo-900/40 border border-indigo-800/80 space-y-2">
              <p className="text-xs font-mono font-bold text-emerald-300 flex items-center gap-1.5">
                <span>✓</span> Current Active Mode: Edge + Serverless Ephemeral
              </p>
              <p className="text-xs text-slate-300 leading-relaxed">
                Records live visitor hits directly through Vercel Edge headers into serverless memory. Works instantly out-of-the-box with zero configuration or cost.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-indigo-900/40 border border-indigo-800/80 space-y-2">
              <p className="text-xs font-mono font-bold text-amber-300 flex items-center gap-1.5">
                <span>⚡</span> Optional: 1-Click Multi-Month Cloud Persistence
              </p>
              <p className="text-xs text-slate-300 leading-relaxed">
                For perpetual multi-month history across new deployments, add a free <strong>Upstash Redis</strong> database (free 10,000 requests/day). Add these 2 environment variables in Vercel:
              </p>
              <div className="bg-slate-950 p-2 rounded-lg font-mono text-[11px] text-slate-300 select-all space-y-0.5">
                <p>UPSTASH_REDIS_REST_URL=https://...</p>
                <p>UPSTASH_REDIS_REST_TOKEN=...</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 4 TOP KPI METRIC CARDS */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-xs">
          <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider font-bold block mb-1">
            Total Page Views
          </span>
          <div className="flex items-baseline gap-2">
            <span className="font-serif font-extrabold text-3xl sm:text-4xl text-slate-900">
              {data.summary.totalViews.toLocaleString()}
            </span>
            <span className="text-xs font-mono text-emerald-600 font-bold bg-emerald-50 border border-emerald-200 px-1.5 py-0.5 rounded">
              +{data.summary.todayViews} 24h
            </span>
          </div>
        </div>

        <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-xs">
          <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider font-bold block mb-1">
            Unique Visitors
          </span>
          <div className="flex items-baseline gap-2">
            <span className="font-serif font-extrabold text-3xl sm:text-4xl text-indigo-600">
              {data.summary.uniqueVisitors.toLocaleString()}
            </span>
            <span className="text-xs font-mono text-indigo-600 font-bold bg-indigo-50 border border-indigo-200 px-1.5 py-0.5 rounded">
              +{data.summary.todayVisitors} 24h
            </span>
          </div>
        </div>

        <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-xs">
          <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider font-bold block mb-1">
            Countries Reached
          </span>
          <div className="flex items-baseline gap-2">
            <span className="font-serif font-extrabold text-3xl sm:text-4xl text-slate-900">
              {data.summary.countriesCount}
            </span>
            <span className="text-xs font-mono text-slate-500 font-medium">Jurisdictions</span>
          </div>
        </div>

        <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-xs">
          <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider font-bold block mb-1">
            Primary Device
          </span>
          <div className="flex items-baseline gap-2">
            <span className="font-serif font-extrabold text-2xl sm:text-3xl text-slate-900">
              {data.devices[0]?.type || 'Desktop'}
            </span>
            <span className="text-xs font-mono text-indigo-600 font-bold">
              {data.devices[0]?.percentage || 80}%
            </span>
          </div>
        </div>
      </div>

      {/* 2-COLUMN MAIN REPORT: GEOGRAPHIC LOCATIONS + 14-DAY TRAFFIC TREND */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* LEFT COLUMN: VISITOR LOCATIONS BY COUNTRY (7 cols) */}
        <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div>
              <h3 className="text-lg font-bold text-slate-900 font-serif flex items-center gap-2">
                <span>📍</span> Visitor Geographic Distribution
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Identified via Vercel Edge IP geolocation headers.
              </p>
            </div>
            <span className="px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-mono font-bold border border-indigo-200">
              {data.countries.length} Regions
            </span>
          </div>

          <div className="space-y-4">
            {data.countries.map((c, idx) => (
              <div key={idx} className="space-y-1.5 p-3 rounded-xl hover:bg-slate-50 transition-colors">
                <div className="flex items-center justify-between text-xs sm:text-sm font-medium">
                  <div className="flex items-center gap-2.5">
                    <span className="text-lg leading-none">{c.flag}</span>
                    <span className="font-bold text-slate-900">{c.name}</span>
                    {c.topCities && c.topCities.length > 0 && (
                      <span className="text-slate-400 text-xs font-mono hidden sm:inline">
                        ({c.topCities.join(', ')})
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-3 font-mono text-xs">
                    <span className="text-slate-500">{c.visitors} visitors</span>
                    <span className="font-bold text-slate-900 w-12 text-right">{c.views} views</span>
                  </div>
                </div>

                {/* Percentage Bar */}
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-indigo-600 rounded-full transition-all duration-500"
                    style={{ width: `${Math.max(c.percentage, 4)}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN: 14-DAY ACTIVITY + TRAFFIC SOURCES (5 cols) */}
        <div className="lg:col-span-5 space-y-8">
          {/* 14-Day Timeline */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-5">
            <h3 className="text-lg font-bold text-slate-900 font-serif flex items-center gap-2">
              <span>📈</span> 14-Day Traffic Velocity
            </h3>

            {/* Visual Bar Graph */}
            <div className="h-36 flex items-end justify-between gap-1.5 pt-4 border-b border-slate-100 pb-2">
              {data.timeline.map((day, idx) => {
                const maxViews = Math.max(...data.timeline.map((d) => d.views), 20);
                const heightPct = Math.max(Math.round((day.views / maxViews) * 100), 12);

                return (
                  <div key={idx} className="flex-1 flex flex-col items-center gap-1 group relative">
                    {/* Tooltip on hover */}
                    <div className="absolute -top-10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none bg-slate-900 text-white text-[10px] font-mono px-2 py-1 rounded shadow-lg whitespace-nowrap z-20">
                      {day.date}: {day.views} views ({day.visitors} unique)
                    </div>

                    <div
                      className="w-full bg-indigo-500 group-hover:bg-indigo-600 rounded-t transition-all"
                      style={{ height: `${heightPct}%` }}
                    />
                    <span className="text-[9px] font-mono text-slate-400 group-hover:text-indigo-600">
                      {day.date.slice(-2)}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="flex items-center justify-between text-xs font-mono text-slate-500 pt-1">
              <span>Past 14 Days</span>
              <span className="text-indigo-600 font-bold">Updated Live</span>
            </div>
          </div>

          {/* Traffic Referrers & Devices */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-5">
            <h3 className="text-lg font-bold text-slate-900 font-serif flex items-center gap-2">
              <span>🔗</span> Inbound Traffic Referrers
            </h3>

            <div className="space-y-3">
              {data.referrers.map((r, idx) => (
                <div key={idx} className="flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-700 font-semibold">{r.source}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-slate-500">{r.views} views</span>
                    <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-bold text-[10px]">
                      {r.percentage}%
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-100">
              <span className="text-xs font-mono text-slate-500 uppercase tracking-wider font-bold block mb-2">
                Device Matrix
              </span>
              <div className="flex items-center gap-2">
                {data.devices.map((d, idx) => (
                  <div
                    key={idx}
                    className="flex-1 p-2 rounded-xl bg-slate-50 border border-slate-200 text-center"
                  >
                    <p className="text-[10px] font-mono text-slate-500 uppercase font-bold">{d.type}</p>
                    <p className="text-sm font-bold text-slate-900 mt-0.5">{d.percentage}%</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2ND ROW: TOP PAGES + REAL-TIME VISITOR STREAM */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* TOP PAGES TABLE (6 cols) */}
        <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-5">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <h3 className="text-lg font-bold text-slate-900 font-serif flex items-center gap-2">
              <span>📄</span> Top Visited Pages & Articles
            </h3>
            <span className="text-xs font-mono text-slate-400">Most Active</span>
          </div>

          <div className="space-y-3">
            {data.topPages.map((p, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs font-mono hover:border-indigo-200 transition-colors"
              >
                <a
                  href={p.path}
                  target="_blank"
                  rel="noopener"
                  className="font-bold text-slate-900 hover:text-indigo-600 truncate max-w-[240px] sm:max-w-xs"
                >
                  {p.path === '/' ? '/ (Portfolio Homepage)' : p.path}
                </a>
                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-slate-500">{p.visitors} visitors</span>
                  <span className="font-bold text-indigo-600 bg-white px-2 py-0.5 rounded border border-slate-200">
                    {p.views}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* REAL-TIME VISITOR STREAM (6 cols) */}
        <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-5">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
              <h3 className="text-lg font-bold text-slate-900 font-serif">
                Live Real-Time Visitor Stream
              </h3>
            </div>
            <span className="text-xs font-mono text-slate-400">Latest Hits</span>
          </div>

          <div className="space-y-2.5 max-h-[380px] overflow-y-auto pr-1">
            {data.recentVisitors.map((v) => {
              const timeStr = new Date(v.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

              return (
                <div
                  key={v.id}
                  className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs flex items-center justify-between hover:bg-slate-100/70 transition-colors"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className="text-base leading-none shrink-0">{v.flag}</span>
                    <div className="min-w-0">
                      <p className="font-bold text-slate-900 truncate">
                        {v.city !== 'Unknown City' ? `${v.city}, ` : ''}{v.countryName}
                      </p>
                      <p className="font-mono text-[11px] text-indigo-600 truncate">{v.path}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0 text-[11px] font-mono text-slate-500">
                    <span className="px-1.5 py-0.5 rounded bg-white border border-slate-200 text-slate-600">
                      {v.device}
                    </span>
                    <span>{timeStr}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
