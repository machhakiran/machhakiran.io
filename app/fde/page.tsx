import { daySchedule, dayRules, weekDays, cadence, deliverables, fdeSourceNote } from '@/lib/data/fde';
import { site } from '@/lib/data/site';
import { Reveal } from '@/components/ui/Reveal';

const phaseColors: Record<string, string> = {
  Check: 'bg-sky-50 text-sky-700 border-sky-200',
  Observe: 'bg-indigo-50 text-indigo-700 border-indigo-200',
  Model: 'bg-purple-50 text-purple-700 border-purple-200',
  Build: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  Evaluate: 'bg-amber-50 text-amber-800 border-amber-200',
  Show: 'bg-teal-50 text-teal-700 border-teal-200',
  Iterate: 'bg-fuchsia-50 text-fuchsia-700 border-fuchsia-200',
  Record: 'bg-slate-100 text-slate-700 border-slate-300',
  Discover: 'bg-blue-50 text-blue-700 border-blue-200',
  Plumb: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  Prototype: 'bg-purple-50 text-purple-700 border-purple-200',
};

export default function FdePage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-indigo-500/20 selection:text-indigo-700">
      {/* ===== HEADER NAVIGATION ===== */}
      <header className="fixed top-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <a href="/" className="text-xs text-slate-600 hover:text-indigo-600 transition-colors font-mono font-bold flex items-center gap-2">
            <span>←</span> Back to Portfolio
          </a>
          <span className="font-bold text-base text-slate-900 hidden sm:inline">{site.name}</span>
          <div className="flex items-center gap-2">
            <a
              href="/blog"
              className="text-xs text-slate-600 hover:text-indigo-600 font-mono font-semibold px-2.5 py-1 rounded-lg hover:bg-slate-100 transition-colors"
            >
              Field Notes
            </a>
            <span className="text-xs text-indigo-700 font-mono font-bold px-2.5 py-1 rounded-lg bg-indigo-50 border border-indigo-200">
              FDE Playbook
            </span>
          </div>
        </div>
      </header>

      <main className="pt-22 pb-20 px-4 sm:px-6 max-w-6xl mx-auto">
        {/* ===== HERO BANNER ===== */}
        <Reveal className="mb-10 pt-4">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-slate-200">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-indigo-600 font-bold mb-2 block">
                Forward Deployment Playbook
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-3 tracking-tight">
                A Day in the Life of a Forward Deployed AI Engineer
              </h1>
              <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl font-normal">
                How I embed inside customer engineering repositories, security reviews, and production clusters to deliver operational Sovereign AI and Autonomous Multi-Agent systems.
              </p>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-3 shrink-0 lg:w-72">
              <div className="p-3 bg-white border border-slate-200 rounded-xl shadow-2xs">
                <p className="text-xl font-extrabold text-slate-900">7 Deliverables</p>
                <p className="text-[10px] font-mono text-slate-500 uppercase">Production Artifacts</p>
              </div>
              <div className="p-3 bg-white border border-slate-200 rounded-xl shadow-2xs">
                <p className="text-xl font-extrabold text-indigo-600">100% On-Prem</p>
                <p className="text-[10px] font-mono text-slate-500 uppercase">Air-Gapped &amp; VPC</p>
              </div>
              <div className="p-3 bg-white border border-slate-200 rounded-xl shadow-2xs">
                <p className="text-xl font-extrabold text-emerald-600">Daily Ship</p>
                <p className="text-[10px] font-mono text-slate-500 uppercase">Rapid Feedback</p>
              </div>
              <div className="p-3 bg-white border border-slate-200 rounded-xl shadow-2xs">
                <p className="text-xl font-extrabold text-purple-600">Eval Gates</p>
                <p className="text-[10px] font-mono text-slate-500 uppercase">Zero Guesswork</p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* ===== HOUR BY HOUR SCHEDULE ===== */}
        <Reveal delay={100} className="mb-14">
          <div className="flex items-center justify-between mb-5">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-indigo-600 font-bold block mb-1">
                Daily Cadence
              </span>
              <h2 className="text-2xl font-bold text-slate-900">A Deployment Day, Hour by Hour</h2>
            </div>
            <span className="text-xs font-mono text-slate-500 hidden sm:inline">
              Operator-first field engineering
            </span>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 divide-y divide-slate-100 shadow-xs overflow-hidden">
            {daySchedule.map((slot, i) => {
              const badgeClass = phaseColors[slot.phase] || 'bg-slate-100 text-slate-700 border-slate-200';
              return (
                <div
                  key={i}
                  className="grid grid-cols-1 md:grid-cols-[100px_1fr_120px] gap-3 items-center py-3.5 px-5 hover:bg-slate-50/80 transition-colors"
                >
                  <span className="font-mono font-extrabold text-base text-indigo-600">{slot.time}</span>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">{slot.description}</p>
                  <div className="md:text-right">
                    <span className={`inline-block px-2.5 py-1 text-[11px] font-mono font-bold rounded-lg border ${badgeClass}`}>
                      {slot.phase}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>

        {/* ===== OPERATING RULES ===== */}
        <Reveal delay={200} className="mb-14">
          <div className="mb-5">
            <span className="text-xs font-mono uppercase tracking-widest text-indigo-600 font-bold block mb-1">
              Field Principles
            </span>
            <h2 className="text-2xl font-bold text-slate-900">Operating Rules I Work By</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {dayRules.map((rule, i) => (
              <div key={i} className="p-5 rounded-2xl border border-slate-200 bg-white hover:border-indigo-300 transition-all shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-indigo-600 shrink-0" />
                    <p className="font-mono text-xs tracking-wider uppercase text-indigo-600 font-bold">{rule.title}</p>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">{rule.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* ===== WEEKLY ITERATION CYCLE (5-DAY SPRINT GRID) ===== */}
        <Reveal delay={300} className="mb-14">
          <div className="mb-5">
            <span className="text-xs font-mono uppercase tracking-widest text-indigo-600 font-bold block mb-1">
              Sprint Model
            </span>
            <h2 className="text-2xl font-bold text-slate-900">Discover, Prototype, Show &amp; Iterate</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 mb-5">
            {weekDays.map((day, i) => {
              const badgeClass = phaseColors[day.phase] || 'bg-slate-100 text-slate-700 border-slate-200';
              return (
                <div
                  key={i}
                  className="p-4 rounded-xl border border-slate-200 bg-white shadow-2xs hover:border-indigo-300 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-sm text-slate-900">{day.day}</span>
                      <span className={`px-2 py-0.5 text-[10px] font-mono font-bold rounded-md border ${badgeClass}`}>
                        {day.phase}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">{day.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex flex-wrap items-center gap-2 p-3.5 rounded-xl border border-slate-200 bg-white shadow-2xs">
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

        {/* ===== SEVEN CONCRETE DELIVERABLES ===== */}
        <Reveal delay={400} className="mb-14">
          <div className="mb-5">
            <span className="text-xs font-mono uppercase tracking-widest text-indigo-600 font-bold block mb-1">
              Measurable Outcomes
            </span>
            <h2 className="text-2xl font-bold text-slate-900">Seven Concrete Tangibles Produced</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5">
            {deliverables.map((item, i) => (
              <div key={i} className="p-4 rounded-xl border border-slate-200 bg-white shadow-2xs flex items-start gap-3 hover:border-indigo-300 transition-all">
                <span className="font-mono font-bold text-base text-indigo-600 shrink-0">{String(i + 1).padStart(2, '0')}</span>
                <span className="text-xs sm:text-sm text-slate-800 font-medium leading-snug">{item.label}</span>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Author Methodology Sign-Off Card */}
        <Reveal delay={500}>
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-6">
            <div className="w-12 h-12 rounded-xl bg-indigo-600 flex items-center justify-center font-bold text-white text-base shadow-sm shrink-0">
              KM
            </div>
            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="font-bold text-sm text-slate-900">Battle-Tested Field Methodology</h3>
                <span className="px-2 py-0.5 text-[10px] font-mono font-bold rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200">
                  Authored by Kiran Machha
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                {fdeSourceNote.text}
              </p>
            </div>
          </div>
        </Reveal>
      </main>

      {/* ===== FOOTER ===== */}
      <footer className="border-t border-slate-200 py-8 px-6 bg-white text-xs font-mono text-slate-500">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <span>© {new Date().getFullYear()} {site.name} · Forward Deployed AI Engineer</span>
          <a href="/" className="hover:text-indigo-600 transition-colors font-bold">
            ← Back to Portfolio
          </a>
        </div>
      </footer>
    </div>
  );
}
