import { daySchedule, dayRules, weekDays, cadence, deliverables } from '@/lib/data/fde';
import { site } from '@/lib/data/site';
import { Reveal } from '@/components/ui/Reveal';

export default function FdePage() {
  return (
    <div className="min-h-screen bg-[#060606] text-[#EAE6DF] font-text">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 bg-[#060606]/85 backdrop-blur-xl border-b border-white/[0.08]">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" className="text-xs text-white/50 hover:text-white transition-colors font-mono tracking-wider flex items-center gap-2">
            <span>←</span> Home
          </a>
          <span className="font-serif font-bold text-base text-white">{site.name}</span>
          <span className="text-xs text-[#9D94FF] font-mono px-2.5 py-1 rounded-md bg-[#7B6FFF]/10 border border-[#7B6FFF]/20">/fde-playbook</span>
        </div>
      </header>

      <main className="pt-32 pb-28 px-6 max-w-4xl mx-auto">
        <Reveal className="mb-16">
          <span className="label mb-3 block">Forward Deployment Playbook</span>
          <h1 className="font-serif font-bold text-4xl sm:text-5xl text-white mb-4 tracking-[-0.02em]">
            A Day in the Forward Deployed AI Engineer Life
          </h1>
          <p className="text-white/60 text-lg leading-relaxed max-w-2xl">
            How I operate inside customer engineering teams, security reviews, and production clusters to deliver working AI systems.
          </p>
        </Reveal>

        {/* Hour by hour */}
        <Reveal delay={100} className="mb-20">
          <h2 className="font-serif font-bold text-2xl text-white mb-8">A deployment day, hour by hour</h2>
          <div className="space-y-0 border-t border-white/[0.08]">
            {daySchedule.map((slot, i) => (
              <div key={i} className="grid grid-cols-1 md:grid-cols-[130px_1fr_100px] gap-4 items-baseline py-5 border-b border-white/[0.06] hover:bg-white/[0.01] transition-colors px-3 rounded-lg">
                <span className="font-serif font-bold text-xl text-[#9D94FF]">{slot.time}</span>
                <p className="text-sm text-white/70 leading-relaxed">{slot.description}</p>
                <span className="font-mono text-[10px] tracking-wider uppercase text-white/30">{slot.phase}</span>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Operating Principles */}
        <Reveal delay={200} className="mb-20">
          <h2 className="font-serif font-bold text-2xl text-white mb-8">Operating Rules I Work By</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {dayRules.map((rule, i) => (
              <div key={i} className="p-6 rounded-2xl border border-white/[0.08] bg-[#060606] hover:border-[#7B6FFF]/40 transition-all">
                <p className="font-mono text-xs tracking-wider uppercase text-[#9D94FF] mb-2">{rule.title}</p>
                <p className="text-sm text-white/60 leading-relaxed">{rule.description}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Weekly iteration cycle */}
        <Reveal delay={300} className="mb-20">
          <h2 className="font-serif font-bold text-2xl text-white mb-8">Discover, Prototype, Show & Iterate</h2>
          <div className="space-y-0 border-t border-white/[0.08] mb-8">
            {weekDays.map((day, i) => (
              <div key={i} className="grid grid-cols-1 md:grid-cols-[130px_1fr_100px] gap-4 items-baseline py-5 border-b border-white/[0.06] hover:bg-white/[0.01] transition-colors px-3 rounded-lg">
                <span className="font-serif font-bold text-xl text-white">{day.day}</span>
                <p className="text-sm text-white/70 leading-relaxed">{day.description}</p>
                <span className="font-mono text-[10px] tracking-wider uppercase text-[#9D94FF]">{day.phase}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-2 p-4 rounded-xl border border-white/[0.08] bg-white/[0.02]">
            <span className="font-mono text-xs text-white/40 mr-2">Cadence:</span>
            {cadence.map((item, i) => (
              <span key={i} className="flex items-center gap-2">
                {i > 0 && <span className="text-white/20 text-xs">→</span>}
                <span className="px-3 py-1.5 text-xs font-mono rounded-md border border-white/[0.08] text-white/70 bg-white/[0.02]">{item}</span>
              </span>
            ))}
          </div>
        </Reveal>

        {/* Deliverables */}
        <Reveal delay={400}>
          <h2 className="font-serif font-bold text-2xl text-white mb-8">Seven Concrete Tangibles Produced</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {deliverables.map((item, i) => (
              <div key={i} className="p-4 rounded-xl border border-white/[0.08] bg-white/[0.01] flex items-center gap-4">
                <span className="font-serif font-bold text-xl text-[#9D94FF]">{String(i + 1).padStart(2, '0')}</span>
                <span className="text-sm text-white/80">{item.label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </main>
    </div>
  );
}
