import { clauses, commercialVsTechnical, methodBeats, currentStateSteps, aiNativeSteps, automationOptions, evalCases, evalStats, evalRules, deploySteps, deployLoop, deployItems, milestones, timelinePhases } from '@/lib/data/workflow';
import { site } from '@/lib/data/site';

export default function WorkflowPage() {
  return (
    <div className="min-h-screen bg-[#12110E] text-[#F1ECE1] font-text">
      <header className="fixed top-0 inset-x-0 z-50 bg-[#12110E]/90 backdrop-blur-md border-b border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
          <a href="/" className="text-xs text-white/40 hover:text-white/80 transition-colors font-mono tracking-[0.06em]">← Home</a>
          <span className="font-serif font-semibold">{site.name}</span>
          <span className="text-xs text-white/20 font-mono">/workflow</span>
        </div>
      </header>

      <main className="pt-20 pb-24 px-6 max-w-4xl mx-auto">
        <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-white/25 mb-3">How I run an engagement</p>
        <h1 className="font-serif font-bold text-3xl sm:text-4xl text-white mb-2 tracking-[-0.02em]">The FDE Workflow</h1>
        <p className="text-white/40 mb-16">Method · Twelve weeks, four gates</p>

        {/* Thesis */}
        <section className="mb-20">
          <p className="font-serif font-medium text-xl text-white/80 leading-relaxed mb-6 max-w-[30ch]">
            Every company can now buy intelligence. If everyone can access it, intelligence alone cannot be the moat. So the advantage moves into <span className="border-b border-white/30">deployment</span>.
          </p>
          <div className="flex flex-wrap items-center gap-2 mb-6">
            {['Business reality', 'FDE judgment', 'Deployed AI system'].map((item, i) => (
              <span key={i} className="flex items-center gap-2">
                {i > 0 && <span className="text-white/[0.1]">→</span>}
                <span className="px-3 py-1.5 text-[11px] font-mono tracking-[0.05em] rounded-md border border-white/[0.06] text-white/40 bg-white/[0.01]">{item}</span>
              </span>
            ))}
          </div>
          <div className="space-y-0 border-t border-white/[0.06]">
            {clauses.map((c) => (
              <div key={c.term} className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-3 md:gap-6 py-3 border-b border-white/[0.04]">
                <dt className="font-semibold text-white/80">{c.term}</dt>
                <dd className="text-sm text-white/45">{c.definition}</dd>
              </div>
            ))}
          </div>
        </section>

        {/* Job */}
        <section className="mb-20">
          <h2 className="font-serif font-bold text-2xl text-white mb-6">Each stage earns the right to the next.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {methodBeats.map((beat) => (
              <div key={beat.number} className="p-5 rounded-xl border border-white/[0.04] bg-white/[0.01]">
                <span className="font-mono text-[10px] tracking-[0.1em] uppercase text-white/20 block mb-3">{beat.number}</span>
                <h3 className="font-bold text-white mb-2">{beat.title}</h3>
                <p className="text-sm text-white/45 leading-relaxed">{beat.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Workflow */}
        <section className="mb-20">
          <h2 className="font-serif font-bold text-2xl text-white mb-6">First understand how the work is really being done.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-white mb-4">Current state</h3>
              <div className="space-y-0">
                {currentStateSteps.map((step, i) => (
                  <div key={i} className="grid grid-cols-[28px_1fr] gap-3 py-3 border-b border-white/[0.04]">
                    <span className="font-mono text-[10px] text-white/20 pt-0.5">{String(i + 1).padStart(2, '0')}</span>
                    <div>
                      <span className="font-semibold text-white/80 text-sm block mb-0.5">{step.title}</span>
                      <span className="text-xs text-white/35">{step.description}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-bold text-white mb-4">AI-native</h3>
              <div className="space-y-0">
                {aiNativeSteps.map((step, i) => (
                  <div key={i} className="grid grid-cols-[28px_1fr] gap-3 py-3 border-b border-white/[0.04]">
                    <span className={`font-mono text-[10px] pt-0.5 ${step.human ? 'text-red-400' : 'text-white/20'}`}>{String(i + 1).padStart(2, '0')}</span>
                    <div>
                      <span className="font-semibold text-white/80 text-sm block mb-0.5">{step.title}</span>
                      <span className="text-xs text-white/35">{step.description}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Evals */}
        <section className="mb-20">
          <h2 className="font-serif font-bold text-2xl text-white mb-6">Five cases, four questions, one grade.</h2>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[560px] text-sm">
              <thead>
                <tr>
                  {['Case', 'Right data', 'Required steps', 'Matches expert', 'Safe to act'].map((h) => (
                    <th key={h} className="font-mono text-[10px] font-medium tracking-[0.1em] uppercase text-white/20 text-left pb-2 pr-4 border-b border-white/[0.06]">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {evalCases.map((row, i) => (
                  <tr key={i}>
                    <td className="py-3 pr-4 border-b border-white/[0.04] text-white/70">{row.case}</td>
                    <td className={`py-3 pr-4 border-b border-white/[0.04] ${row.rightData === '✓' ? 'text-white/80 font-semibold' : row.rightData === '✗' ? 'text-red-400 font-semibold' : 'text-white/20'}`}>{row.rightData}</td>
                    <td className={`py-3 pr-4 border-b border-white/[0.04] ${row.requiredSteps === '✓' ? 'text-white/80 font-semibold' : row.requiredSteps === '✗' ? 'text-red-400 font-semibold' : 'text-white/20'}`}>{row.requiredSteps}</td>
                    <td className={`py-3 pr-4 border-b border-white/[0.04] ${row.matchesExpert === '✓' ? 'text-white/80 font-semibold' : row.matchesExpert === '✗' ? 'text-red-400 font-semibold' : 'text-white/20'}`}>{row.matchesExpert}</td>
                    <td className={`py-3 border-b border-white/[0.04] ${row.safeToAct.startsWith('→') ? 'text-red-400 text-xs font-mono font-medium' : ''}`}>{row.safeToAct}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-8">
            {evalStats.map((s) => (
              <div key={s.label} className="p-5 rounded-xl border border-white/[0.04] bg-white/[0.01]">
                <span className="font-serif font-bold text-3xl text-white block mb-2">{s.figure}</span>
                <span className="text-xs text-white/35 leading-relaxed whitespace-pre-line">{s.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Deploy */}
        <section className="mb-20">
          <h2 className="font-serif font-bold text-2xl text-white mb-6">Where software begins carrying operational responsibility.</h2>
          <div className="space-y-0">
            {deploySteps.map((step, i) => (
              <div key={i} className="grid grid-cols-[28px_1fr] gap-3 py-3 border-b border-white/[0.04]">
                <span className="font-mono text-[10px] text-white/20 pt-0.5">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <span className="font-semibold text-white/80 text-sm block mb-0.5">{step.title}</span>
                  <span className="text-xs text-white/35">{step.description}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section>
          <h2 className="font-serif font-bold text-2xl text-white mb-6">Four gates. Nothing starts until the last one closes.</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-10">
            {milestones.map((m) => (
              <div key={m.gate} className="p-4 rounded-xl border border-white/[0.04] bg-white/[0.01]">
                <span className="font-mono text-[10px] tracking-[0.1em] uppercase text-red-400 block mb-2">{m.gate}</span>
                <span className="font-bold text-white/80 text-sm">{m.title}</span>
              </div>
            ))}
          </div>
          {timelinePhases.map((phase, pi) => (
            <div key={pi} className="mb-10">
              <p className="font-mono text-[10px] tracking-[0.1em] uppercase text-white/20 mb-3">{phase.kicker}</p>
              <h3 className="font-serif font-bold text-xl text-white mb-3">{phase.heading}</h3>
              <p className="text-white/40 max-w-[58ch] mb-6">{phase.goal}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {phase.deliverables.map((d, di) => (
                  <div key={di} className={`p-4 rounded-xl border ${d.mark ? 'border-red-400/15 bg-red-400/[0.02]' : 'border-white/[0.04] bg-white/[0.01]'}`}>
                    <span className={`font-mono text-[10px] tracking-[0.1em] uppercase inline-block mb-1.5 ${d.mark ? 'text-red-400' : 'text-white/20'}`}>{d.label}</span>
                    <h4 className={`text-sm mb-1 ${d.mark ? 'font-bold text-white' : 'font-semibold text-white/60'}`}>{d.title}</h4>
                    <p className={`text-xs leading-relaxed ${d.mark ? 'text-white/40' : 'text-white/25'}`}>{d.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
