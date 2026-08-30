import { daySchedule, dayRules, weekDays, cadence, deliverables } from '@/lib/data/fde';
import { site } from '@/lib/data/site';
import { Reveal } from '@/components/ui/Reveal';

export default function FdePage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-indigo-500/20 selection:text-indigo-700">
      {/* ===== HEADER NAVIGATION ===== */}
      <header className="fixed top-0 inset-x-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-xs">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" className="text-xs text-slate-600 hover:text-indigo-600 transition-colors font-mono font-bold flex items-center gap-2">
            <span>←</span> Back to Portfolio
          </a>
          <span className="font-bold text-base text-slate-900">{site.name}</span>
          <span className="text-xs text-indigo-700 font-mono font-bold px-2.5 py-1 rounded-lg bg-indigo-50 border border-indigo-200">
            FDE Playbook
          </span>
        </div>
      </header>

      <main className="pt-28 pb-24 px-6 max-w-4xl mx-auto">
        <Reveal className="mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-indigo-600 font-bold mb-2 block">
            Forward Deployment Playbook
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
            A Day in the Life of a Forward Deployed AI Engineer
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed max-w-2xl font-normal">
            How I operate inside customer engineering teams, security reviews, and production clusters to deliver operational AI systems.
          </p>
        </Reveal>

        {/* Hour by hour schedule */}
        <Reveal delay={100} className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">A deployment day, hour by hour</h2>
          <div className="space-y-0 border-t border-slate-200 bg-white rounded-2xl border p-2 shadow-xs">
            {daySchedule.map((slot, i) => (
              <div
                key={i}
                className="grid grid-cols-1 md:grid-cols-[130px_1fr_110px] gap-4 items-baseline py-4 px-4 border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors rounded-xl"
              >
                <span className="font-mono font-bold text-lg text-indigo-600">{slot.time}</span>
                <p className="text-sm text-slate-700 leading-relaxed font-normal">{slot.description}</p>
                <span className="font-mono text-[11px] tracking-wider uppercase text-slate-400 font-bold">{slot.phase}</span>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Operating Rules */}
        <Reveal delay={200} className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Operating Rules I Work By</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {dayRules.map((rule, i) => (
              <div key={i} className="p-6 rounded-2xl border border-slate-200 bg-white hover:border-indigo-300 transition-all shadow-xs">
                <p className="font-mono text-xs tracking-wider uppercase text-indigo-600 font-bold mb-2">{rule.title}</p>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">{rule.description}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Weekly iteration cycle */}
        <Reveal delay={300} className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Discover, Prototype, Show & Iterate</h2>
          <div className="space-y-0 border-t border-slate-200 bg-white rounded-2xl border p-2 shadow-xs mb-6">
            {weekDays.map((day, i) => (
              <div
                key={i}
                className="grid grid-cols-1 md:grid-cols-[130px_1fr_110px] gap-4 items-baseline py-4 px-4 border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors rounded-xl"
              >
                <span className="font-bold text-base text-slate-900">{day.day}</span>
                <p className="text-sm text-slate-700 leading-relaxed font-normal">{day.description}</p>
                <span className="font-mono text-[11px] tracking-wider uppercase text-indigo-600 font-bold">{day.phase}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-2 p-4 rounded-xl border border-slate-200 bg-white shadow-2xs">
            <span className="font-mono text-xs text-slate-500 font-bold mr-2">Cadence Flow:</span>
            {cadence.map((item, i) => (
              <span key={i} className="flex items-center gap-2">
                {i > 0 && <span className="text-slate-300 text-xs">→</span>}
                <span className="px-3 py-1 text-xs font-mono font-medium rounded-md border border-slate-200 text-slate-700 bg-slate-50">
                  {item}
                </span>
              </span>
            ))}
          </div>
        </Reveal>

        {/* Deliverables */}
        <Reveal delay={400}>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Seven Concrete Tangibles Produced</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {deliverables.map((item, i) => (
              <div key={i} className="p-4 rounded-xl border border-slate-200 bg-white shadow-2xs flex items-center gap-3.5">
                <span className="font-mono font-bold text-base text-indigo-600">{String(i + 1).padStart(2, '0')}</span>
                <span className="text-sm text-slate-800 font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </main>

      {/* ===== FOOTER ===== */}
      <footer className="border-t border-slate-200 py-8 px-6 bg-white text-xs font-mono text-slate-500">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <span>© {new Date().getFullYear()} {site.name}</span>
          <a href="/" className="hover:text-indigo-600 transition-colors font-bold">
            ← Back to Portfolio
          </a>
        </div>
      </footer>
    </div>
  );
}
