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
      <div className="mb-8 p-4 rounded-2xl bg-white border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xs">
        <div className="flex items-center gap-3">
          <span className="w-9 h-9 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-sm font-mono font-bold text-indigo-700 shadow-2xs">
            {currentStage ? currentStage.icon : '📑'}
          </span>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-slate-900">
                {currentStage ? `Stage ${currentStage.id} · ${currentStage.name}` : 'Special Architecture Whitepaper'}
              </span>
              {currentPost?.stageInfo.projectNum && (
                <span className="text-[10px] px-2 py-0.5 rounded-md bg-slate-100 border border-slate-200 font-mono text-slate-700 font-semibold">
                  Project #{currentPost.stageInfo.projectNum} of 4
                </span>
              )}
            </div>
            <p className="text-[11px] font-mono text-slate-500">
              {currentStage?.phaseRoman ? `${currentStage.phaseRoman}: ${currentStage.phaseName}` : 'Production Engineering Case Study'}
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="btn-primary px-4 py-2.5 rounded-xl text-xs font-mono font-bold text-white shadow-xs transition-all flex items-center justify-center gap-2"
          style={{ color: '#ffffff' }}
        >
          <span>🌳 Jump Across 15 Stages</span>
          <span className="text-[10px] bg-white/20 px-1.5 py-0.5 rounded font-mono">60 Projects</span>
        </button>
      </div>

      {/* ===== FULL ROADMAP TREE MODAL ===== */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 animate-modal">
          <div className="bg-white border border-slate-200 rounded-3xl max-w-3xl w-full max-h-[85vh] flex flex-col shadow-2xl overflow-hidden">
            {/* Modal Header */}
            <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/80">
              <div>
                <h3 className="text-sm font-mono font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                  <span>🌳</span> Master Roadmap Tree Navigator
                </h3>
                <p className="text-xs font-mono text-slate-500 mt-0.5">
                  Select any stage or project to jump directly without leaving the reading flow
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-700 flex items-center justify-center font-mono font-bold transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Tree Content */}
            <div className="p-6 overflow-y-auto space-y-6">
              {PHASES.map((phase) => (
                <div key={phase.id} className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-900 pb-1 border-b border-slate-100">
                    <span className="px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 border border-indigo-200">
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
                          className={`p-3.5 rounded-2xl border transition-all ${
                            isCurrentStage
                              ? 'bg-indigo-50/70 border-indigo-300 shadow-xs'
                              : 'bg-slate-50/50 border-slate-200'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2 truncate">
                              <span>{stg.icon}</span>
                              <span className="text-xs font-mono font-bold text-slate-900 truncate">
                                Stage {stg.id}: {stg.shortTitle}
                              </span>
                            </div>
                            {isCurrentStage && (
                              <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-indigo-600 text-white font-bold shrink-0">
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
                                      ? 'bg-indigo-600 text-white font-bold'
                                      : 'text-slate-600 hover:text-indigo-600 hover:bg-slate-100'
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
            <div className="p-4 border-t border-slate-100 bg-slate-50 flex items-center justify-between text-xs font-mono text-slate-500">
              <span>60 Production Customer Case Studies</span>
              <a href="/blog" className="text-indigo-600 hover:underline font-bold">
                View Full Field Notes Index →
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
