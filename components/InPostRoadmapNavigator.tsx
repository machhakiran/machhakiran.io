'use client';

import { useState } from 'react';
import type { PostMeta } from '@/lib/posts';
import { PHASES, STAGES } from '@/lib/roadmap';

interface Props {
  currentSlug: string;
  allPosts: PostMeta[];
}

export function InPostRoadmapNavigator({ currentSlug, allPosts }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const currentPost = allPosts.find((p) => p.slug === currentSlug);
  const currentStage = currentPost?.stageInfo.stage;
  const stageColor = currentStage?.color || '#38BDF8';

  // Group roadmap posts by stageId
  const postsByStage: Record<string, PostMeta[]> = {};
  allPosts.forEach((post) => {
    if (post.stageInfo.isRoadmap && post.stageInfo.stageId) {
      if (!postsByStage[post.stageInfo.stageId]) postsByStage[post.stageInfo.stageId] = [];
      postsByStage[post.stageInfo.stageId].push(post);
    }
  });

  return (
    <>
      {/* ===== IN-ARTICLE QUICK TREE BAR ===== */}
      <div
        className="mb-8 p-4 rounded-2xl bg-[#0B1120] border flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-lg"
        style={{ borderColor: `${stageColor}40` }}
      >
        <div className="flex items-center gap-3">
          <span
            className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-mono font-bold"
            style={{ backgroundColor: `${stageColor}25`, color: stageColor }}
          >
            {currentStage ? currentStage.icon : '📑'}
          </span>
          <div>
            <div className="flex items-center gap-2">
              <span
                className="text-xs font-mono font-bold"
                style={{ color: stageColor }}
              >
                {currentStage ? `Stage ${currentStage.id} · ${currentStage.name}` : 'Special Architecture Whitepaper'}
              </span>
              {currentPost?.stageInfo.projectNum && (
                <span className="text-[10px] px-1.5 py-0.2 rounded bg-white/10 font-mono text-slate-300">
                  Project #{currentPost.stageInfo.projectNum} of 4
                </span>
              )}
            </div>
            <p className="text-[11px] font-mono text-slate-400">
              {currentStage?.phaseRoman ? `${currentStage.phaseRoman}: ${currentStage.phaseName}` : 'Production Engineering Case Study'}
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="px-3.5 py-2 rounded-xl text-xs font-mono font-bold text-white transition-all flex items-center justify-center gap-1.5 hover:brightness-110 shadow-md"
          style={{ backgroundColor: stageColor }}
        >
          <span>🌳 Jump Across 15 Stages</span>
          <span className="text-[10px] bg-black/20 px-1.5 py-0.5 rounded">60 Projects</span>
        </button>
      </div>

      {/* ===== FULL ROADMAP TREE MODAL ===== */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-modal">
          <div className="bg-[#0B1120] border border-slate-700 rounded-3xl max-w-3xl w-full max-h-[85vh] flex flex-col shadow-2xl overflow-hidden">
            {/* Modal Header */}
            <div className="p-5 border-b border-slate-800 flex items-center justify-between bg-slate-900/50">
              <div>
                <h3 className="text-sm font-mono font-bold text-white uppercase tracking-wider flex items-center gap-2">
                  <span>🌳</span> Master Roadmap Tree Navigator
                </h3>
                <p className="text-xs font-mono text-slate-400 mt-0.5">
                  Select any stage or project to jump directly without leaving the reading flow
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center font-mono font-bold transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Tree Content */}
            <div className="p-6 overflow-y-auto space-y-6">
              {PHASES.map((phase) => (
                <div key={phase.id} className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-cyan-400 pb-1 border-b border-slate-800">
                    <span className="px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800">
                      {phase.roman}
                    </span>
                    <span>{phase.title}</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-2">
                    {phase.stageIds.map((stageId) => {
                      const stg = STAGES[stageId];
                      if (!stg) return null;
                      const stageProjects = postsByStage[stageId] || [];
                      const isCurrentStage = currentStage?.id === stageId;

                      return (
                        <div
                          key={stageId}
                          className="p-3.5 rounded-2xl bg-slate-900/70 border transition-all"
                          style={{
                            borderColor: isCurrentStage ? stg.color : 'rgba(51, 65, 85, 0.4)',
                            backgroundColor: isCurrentStage ? `${stg.color}10` : undefined,
                          }}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <span>{stg.icon}</span>
                              <span
                                className="text-xs font-mono font-bold truncate"
                                style={{ color: stg.color }}
                              >
                                Stage {stg.id}: {stg.shortTitle}
                              </span>
                            </div>
                            {isCurrentStage && (
                              <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-cyan-400 text-slate-950 font-bold">
                                Current
                              </span>
                            )}
                          </div>

                          <div className="space-y-1">
                            {stageProjects.map((p) => {
                              const isThisPost = p.slug === currentSlug;
                              return (
                                <a
                                  key={p.slug}
                                  href={`/blog/${p.slug}`}
                                  onClick={() => setIsOpen(false)}
                                  className={`block text-[11px] font-mono truncate px-2 py-1 rounded transition-colors ${
                                    isThisPost
                                      ? 'bg-cyan-500/20 text-cyan-300 font-bold'
                                      : 'text-slate-400 hover:text-white hover:bg-slate-800'
                                  }`}
                                >
                                  #{p.stageInfo.projectNum} · {p.title}
                                </a>
                              );
                            })}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-slate-800 bg-slate-900/50 flex items-center justify-between text-xs font-mono text-slate-500">
              <span>60 Production Customer Case Studies</span>
              <a href="/blog" className="text-cyan-400 hover:underline">
                View Full Field Notes Index →
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
