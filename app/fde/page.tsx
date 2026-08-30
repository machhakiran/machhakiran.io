import { daySchedule, dayRules, weekDays, cadence, deliverables } from '@/lib/data/fde';
import { site } from '@/lib/data/site';

export default function FdePage() {
  return (
    <div className="min-h-screen bg-[#12110E] text-[#F1ECE1] font-text">
      <header className="fixed top-0 inset-x-0 z-50 bg-[#12110E]/90 backdrop-blur-md border-b border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
          <a href="/" className="text-xs text-white/40 hover:text-white/80 transition-colors font-mono tracking-[0.06em]">← Home</a>
          <span className="font-serif font-semibold">{site.name}</span>
          <span className="text-xs text-white/20 font-mono">/fde</span>
        </div>
      </header>

      <main className="pt-20 pb-24 px-6 max-w-4xl mx-auto">
        <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-white/25 mb-3">How I work on site</p>
        <h1 className="font-serif font-bold text-3xl sm:text-4xl text-white mb-2 tracking-[-0.02em]">A Day in the FDE</h1>
        <p className="text-white/40 mb-16">Forward deployment · In practice</p>

        {/* Day */}
        <section className="mb-20">
          <h2 className="font-serif font-bold text-2xl text-white mb-6">A deployment day, hour by hour.</h2>
          <div className="space-y-0 border-t border-white/[0.06]">
            {daySchedule.map((slot, i) => (
              <div key={i} className="grid grid-cols-1 md:grid-cols-[110px_1fr_80px] gap-3 md:gap-6 items-baseline py-4 border-b border-white/[0.04]">
                <span className="font-serif font-bold text-xl text-white">{slot.time}</span>
                <p className="text-sm text-white/45 leading-relaxed">{slot.description}</p>
                <span className="font-mono text-[10px] tracking-[0.1em] uppercase text-white/20">{slot.phase}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Rules */}
        <section className="mb-20">
          <h2 className="font-serif font-bold text-2xl text-white mb-6">Rules I work by</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {dayRules.map((rule, i) => (
              <div key={i} className="p-5 rounded-xl border border-white/[0.04] bg-white/[0.01]">
                <p className="font-mono text-[10px] tracking-[0.1em] uppercase text-white/20 mb-2">{rule.title}</p>
                <p className="text-sm text-white/45 leading-relaxed">{rule.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Week */}
        <section className="mb-20">
          <h2 className="font-serif font-bold text-2xl text-white mb-6">Discover, prototype, show, iterate.</h2>
          <div className="space-y-0 border-t border-white/[0.06]">
            {weekDays.map((day, i) => (
              <div key={i} className="grid grid-cols-1 md:grid-cols-[110px_1fr_80px] gap-3 md:gap-6 items-baseline py-4 border-b border-white/[0.04]">
                <span className="font-serif font-bold text-xl text-white">{day.day}</span>
                <p className="text-sm text-white/45 leading-relaxed">{day.description}</p>
                <span className="font-mono text-[10px] tracking-[0.1em] uppercase text-white/20">{day.phase}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-2 mt-6">
            {cadence.map((item, i) => (
              <span key={i} className="flex items-center gap-2">
                {i > 0 && <span className="text-white/[0.1]">→</span>}
                <span className="px-3 py-1.5 text-[11px] font-mono tracking-[0.05em] rounded-md border border-white/[0.06] text-white/40 bg-white/[0.01]">{item}</span>
              </span>
            ))}
          </div>
        </section>

        {/* Outputs */}
        <section>
          <h2 className="font-serif font-bold text-2xl text-white mb-8">Seven things that exist at the end.</h2>
          <div className="columns-1 md:columns-2 gap-8">
            {deliverables.map((item, i) => (
              <div key={i} className="break-inside-avoid flex gap-3 mb-3 text-sm text-white/45">
                <span className="font-mono text-[10px] text-white/20 pt-0.5 shrink-0">{String(i + 1).padStart(2, '0')}</span>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
