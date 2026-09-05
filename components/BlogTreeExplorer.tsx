'use client';

import { useState, useMemo } from 'react';
import type { Post } from '@/lib/posts';
import { PHASES, STAGES, getDomainColor } from '@/lib/roadmap';

interface Props {
  posts: Post[];
}

export function BlogTreeExplorer({ posts }: Props) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPhase, setSelectedPhase] = useState<string>('all');
  const [selectedStage, setSelectedStage] = useState<string>('all');
  const [selectedDomain, setSelectedDomain] = useState<string>('all');
  const [expandedStages, setExpandedStages] = useState<Record<string, boolean>>({
    '00': true,
    '07': true,
    '14': true,
  });
  const [mobileTreeOpen, setMobileTreeOpen] = useState(false);

  const toggleStageExpand = (stageId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setExpandedStages((prev) => ({ ...prev, [stageId]: !prev[stageId] }));
  };

  // Group roadmap posts by stageId
  const postsByStage = useMemo(() => {
    const map: Record<string, Post[]> = {};
    posts.forEach((post) => {
      if (post.stageInfo.isRoadmap && post.stageInfo.stageId) {
        if (!map[post.stageInfo.stageId]) map[post.stageInfo.stageId] = [];
        map[post.stageInfo.stageId].push(post);
      }
    });
    return map;
  }, [posts]);

  // Standalone whitepapers
  const whitepapers = useMemo(() => {
    return posts.filter((p) => !p.stageInfo.isRoadmap);
  }, [posts]);

  // Filtered posts based on search, selected stage, and domain
  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      // Search filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = post.title.toLowerCase().includes(q);
        const matchesExcerpt = post.excerpt.toLowerCase().includes(q);
        const matchesTags = post.tags?.some((t) => t.toLowerCase().includes(q));
        const matchesStage = post.stageInfo.stage?.name.toLowerCase().includes(q);
        if (!matchesTitle && !matchesExcerpt && !matchesTags && !matchesStage) {
          return false;
        }
      }

      // Stage filter
      if (selectedStage !== 'all') {
        if (post.stageInfo.stageId !== selectedStage) return false;
      }

      // Phase filter
      if (selectedPhase !== 'all' && selectedStage === 'all') {
        const phase = PHASES.find((p) => p.id === selectedPhase);
        if (phase && (!post.stageInfo.stageId || !phase.stageIds.includes(post.stageInfo.stageId))) {
          return false;
        }
      }

      // Domain filter
      if (selectedDomain !== 'all') {
        const domainMatch = post.stageInfo.domain?.toLowerCase().includes(selectedDomain.toLowerCase()) ||
          post.tags?.some((t) => t.toLowerCase().includes(selectedDomain.toLowerCase()));
        if (!domainMatch) return false;
      }

      return true;
    });
  }, [posts, searchQuery, selectedStage, selectedPhase, selectedDomain]);

  // Domain badge options with their dedicated brand colors
  const domainOptions = [
    { label: 'All Domains', id: 'all', count: posts.length, color: '#94A3B8' },
    { label: 'Banking & FinTech', id: 'fintech', count: posts.filter((p) => p.stageInfo.domain?.toLowerCase().includes('fintech') || p.tags?.some((t) => t.toLowerCase().includes('fintech') || t.toLowerCase().includes('bank'))).length, color: '#10B981' },
    { label: 'Telecom', id: 'telecom', count: posts.filter((p) => p.stageInfo.domain?.toLowerCase().includes('telecom') || p.tags?.some((t) => t.toLowerCase().includes('telecom'))).length, color: '#0284C7' },
    { label: 'E-Commerce & Retail', id: 'ecommerce', count: posts.filter((p) => p.stageInfo.domain?.toLowerCase().includes('ecommerce') || p.tags?.some((t) => t.toLowerCase().includes('ecommerce') || t.toLowerCase().includes('retail'))).length, color: '#F59E0B' },
    { label: 'Government & Civic', id: 'government', count: posts.filter((p) => p.stageInfo.domain?.toLowerCase().includes('government') || p.tags?.some((t) => t.toLowerCase().includes('government') || t.toLowerCase().includes('public'))).length, color: '#8B5CF6' },
    { label: 'AI Agents Core', id: 'agent', count: posts.filter((p) => p.stageInfo.stageId === '14' || p.stageInfo.domain?.toLowerCase().includes('agent') || p.tags?.some((t) => t.toLowerCase().includes('agent'))).length, color: '#EC4899' },
  ];

  return (
    <div className="relative">
      {/* ===== SEARCH & DOMAIN FILTER TOOLBAR ===== */}
      <div className="mb-10 space-y-4">
        <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
          {/* Real-time search bar */}
          <div className="relative flex-1 max-w-xl">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-mono text-sm">🔍</span>
            <input
              type="text"
              placeholder="Search by topic, keyword, stack (e.g. LangGraph, vLLM, DuckDB, FinTech)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-[#0B1120] border border-slate-800 rounded-2xl text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/30 transition-all font-sans"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs font-mono px-1.5 py-0.5 rounded bg-slate-800"
              >
                Clear
              </button>
            )}
          </div>

          {/* Mobile Tree Drawer Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setMobileTreeOpen(!mobileTreeOpen)}
              className="flex-1 px-4 py-3 bg-[#0B1120] border border-slate-800 hover:border-indigo-500 text-white rounded-2xl text-xs font-mono font-bold flex items-center justify-center gap-2 shadow-lg"
            >
              <span>📁 {mobileTreeOpen ? 'Hide Tree Navigator' : 'Open Tree Navigator'}</span>
              <span className="px-2 py-0.5 bg-indigo-600/30 text-indigo-400 rounded-md text-[10px]">15 Stages</span>
            </button>
          </div>
        </div>

        {/* Domain Filter Pills with exact brand colors */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
          {domainOptions.map((domain) => {
            const isSelected = selectedDomain === domain.id;
            return (
              <button
                key={domain.id}
                onClick={() => {
                  setSelectedDomain(domain.id);
                  if (domain.id !== 'all') setSelectedStage('all');
                }}
                className={`px-3.5 py-2 rounded-xl text-xs font-mono font-bold whitespace-nowrap transition-all flex items-center gap-2 border ${
                  isSelected
                    ? 'shadow-lg'
                    : 'bg-[#0B1120]/80 text-slate-300 border-slate-800 hover:border-slate-700'
                }`}
                style={
                  isSelected
                    ? {
                        backgroundColor: `${domain.color}15`,
                        borderColor: domain.color,
                        color: domain.color,
                        boxShadow: `0 0 15px ${domain.color}20`,
                      }
                    : undefined
                }
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: domain.color }}
                />
                <span>{domain.label}</span>
                <span className="px-1.5 py-0.5 rounded bg-white/5 text-[10px] text-slate-400 font-mono">
                  {domain.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ===== 2-COLUMN TREE-WISE LAYOUT ===== */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* ========================================================
            LEFT COLUMN: TREE-WISE ARCHIVE NAVIGATOR (STICKY)
           ======================================================== */}
        <aside
          className={`lg:col-span-4 lg:sticky lg:top-24 max-h-[calc(100vh-7rem)] overflow-y-auto pr-1 no-scrollbar space-y-4 ${
            mobileTreeOpen ? 'block' : 'hidden lg:block'
          }`}
        >
          <div className="p-5 rounded-3xl bg-[#0B1120] border border-slate-800 shadow-2xl">
            {/* Tree Header */}
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800/80">
              <div className="flex items-center gap-2">
                <span className="text-base">🌳</span>
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
                  Master Roadmap Tree
                </h3>
              </div>
              <button
                onClick={() => {
                  setSelectedStage('all');
                  setSelectedPhase('all');
                  setSelectedDomain('all');
                  setSearchQuery('');
                }}
                className="text-[11px] font-mono text-cyan-400 hover:underline"
              >
                Reset Filter
              </button>
            </div>

            {/* Tree Phase Nodes */}
            <div className="space-y-4">
              {PHASES.map((phase) => {
                const phaseIsActive = selectedPhase === phase.id;
                return (
                  <div key={phase.id} className="space-y-1">
                    {/* Phase Header Node */}
                    <div
                      onClick={() => {
                        setSelectedPhase(phase.id === selectedPhase ? 'all' : phase.id);
                        setSelectedStage('all');
                      }}
                      className={`px-3 py-1.5 rounded-lg cursor-pointer flex items-center justify-between text-xs font-mono font-bold tracking-tight transition-colors ${
                        phaseIsActive
                          ? 'bg-indigo-600/20 text-indigo-300 border border-indigo-500/30'
                          : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/50'
                      }`}
                    >
                      <div className="flex items-center gap-2 truncate">
                        <span className="text-[10px] text-cyan-400 font-bold">{phase.roman}</span>
                        <span className="truncate">{phase.title}</span>
                      </div>
                      <span className="text-[10px] text-slate-500">{phase.stageIds.length} stg</span>
                    </div>

                    {/* Stages under this phase */}
                    <div className="pl-2 border-l border-slate-800/80 ml-2 space-y-1 mt-1">
                      {phase.stageIds.map((stageId) => {
                        const stage = STAGES[stageId];
                        if (!stage) return null;
                        const isStageSelected = selectedStage === stageId;
                        const isExpanded = !!expandedStages[stageId];
                        const stageProjects = postsByStage[stageId] || [];

                        return (
                          <div key={stageId} className="group">
                            {/* Stage Branch */}
                            <div
                              onClick={() => {
                                setSelectedStage(isStageSelected ? 'all' : stageId);
                                setSelectedPhase(stage.phaseId);
                                if (!isExpanded) {
                                  setExpandedStages((p) => ({ ...p, [stageId]: true }));
                                }
                              }}
                              className={`px-2.5 py-1.5 rounded-xl cursor-pointer flex items-center justify-between text-xs font-mono transition-all border ${
                                isStageSelected
                                  ? 'font-bold'
                                  : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/60'
                              }`}
                              style={
                                isStageSelected
                                  ? {
                                      backgroundColor: `${stage.color}15`,
                                      borderColor: stage.color,
                                      color: stage.color,
                                    }
                                  : undefined
                              }
                            >
                              <div className="flex items-center gap-2 truncate">
                                <span>{stage.icon}</span>
                                <span
                                  className="w-1.5 h-1.5 rounded-full"
                                  style={{ backgroundColor: stage.color }}
                                />
                                <span className="truncate font-semibold">{stage.shortTitle}</span>
                              </div>

                              <div className="flex items-center gap-1.5">
                                <span
                                  className="px-1.5 py-0.2 rounded text-[10px] font-bold"
                                  style={{
                                    backgroundColor: `${stage.color}20`,
                                    color: stage.color,
                                  }}
                                >
                                  {stage.id}
                                </span>
                                <button
                                  type="button"
                                  onClick={(e) => toggleStageExpand(stageId, e)}
                                  className="w-5 h-5 flex items-center justify-center rounded hover:bg-slate-800 text-slate-500 hover:text-white transition-colors"
                                >
                                  {isExpanded ? '▾' : '▸'}
                                </button>
                              </div>
                            </div>

                            {/* Project Leaf Nodes (Tree children) */}
                            {isExpanded && stageProjects.length > 0 && (
                              <div className="pl-4 ml-3 border-l border-dashed border-slate-800 space-y-1 py-1">
                                {stageProjects.map((p) => {
                                  const domainColor = getDomainColor(p.stageInfo.domain || 'AI');
                                  return (
                                    <a
                                      key={p.slug}
                                      href={`/blog/${p.slug}`}
                                      className="group/item flex items-center justify-between gap-2 px-2 py-1 rounded-lg text-[11px] font-mono text-slate-400 hover:text-white hover:bg-slate-900 transition-colors"
                                    >
                                      <div className="flex items-center gap-1.5 truncate">
                                        <span className="text-[10px] text-slate-500 group-hover/item:text-cyan-400">
                                          #{p.stageInfo.projectNum}
                                        </span>
                                        <span className="truncate group-hover/item:text-slate-100">
                                          {p.title}
                                        </span>
                                      </div>
                                      <span
                                        className="text-[9px] px-1.5 py-0.5 rounded shrink-0 font-bold"
                                        style={{
                                          backgroundColor: domainColor.bg,
                                          color: domainColor.text,
                                        }}
                                      >
                                        {p.stageInfo.domain}
                                      </span>
                                    </a>
                                  );
                                })}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}

              {/* Special Architecture Whitepapers Section */}
              {whitepapers.length > 0 && (
                <div className="pt-3 border-t border-slate-800">
                  <div className="px-3 py-1 text-xs font-mono font-bold text-slate-400 flex items-center gap-2 mb-1">
                    <span>📑</span>
                    <span>Production Architecture Whitepapers</span>
                  </div>
                  <div className="space-y-1 pl-2">
                    {whitepapers.map((p) => (
                      <a
                        key={p.slug}
                        href={`/blog/${p.slug}`}
                        className="flex items-center justify-between gap-2 px-2.5 py-1.5 rounded-lg text-xs font-mono text-slate-400 hover:text-cyan-400 hover:bg-slate-900 transition-colors"
                      >
                        <span className="truncate">{p.title}</span>
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-800/60 shrink-0">
                          Whitepaper
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </aside>

        {/* ========================================================
            RIGHT COLUMN: PROJECT SHOWCASE WITH MATCHING COLORS
           ======================================================== */}
        <div className="lg:col-span-8 space-y-8">
          {/* Active Filter Status Bar */}
          {(selectedStage !== 'all' || selectedPhase !== 'all' || selectedDomain !== 'all' || searchQuery) && (
            <div className="p-4 rounded-2xl bg-[#0B1120] border border-slate-800 flex items-center justify-between flex-wrap gap-2 text-xs font-mono">
              <div className="flex items-center gap-2 text-slate-300">
                <span className="text-cyan-400 font-bold">Filtered By:</span>
                {selectedStage !== 'all' && (
                  <span
                    className="px-2.5 py-1 rounded-lg font-bold border"
                    style={{
                      backgroundColor: `${STAGES[selectedStage]?.color}20`,
                      borderColor: STAGES[selectedStage]?.color,
                      color: STAGES[selectedStage]?.color,
                    }}
                  >
                    Stage {selectedStage}: {STAGES[selectedStage]?.name}
                  </span>
                )}
                {selectedDomain !== 'all' && (
                  <span className="px-2.5 py-1 rounded-lg bg-indigo-600/20 text-indigo-300 border border-indigo-500/40 font-bold">
                    Domain: {selectedDomain}
                  </span>
                )}
                {searchQuery && (
                  <span className="px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300">
                    &quot;{searchQuery}&quot;
                  </span>
                )}
              </div>

              <button
                onClick={() => {
                  setSelectedStage('all');
                  setSelectedPhase('all');
                  setSelectedDomain('all');
                  setSearchQuery('');
                }}
                className="text-cyan-400 hover:text-cyan-300 font-bold underline"
              >
                Clear all filters
              </button>
            </div>
          )}

          {/* Results Summary */}
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <span className="text-xs font-mono text-slate-400">
              Showing <span className="text-white font-bold">{filteredPosts.length}</span> architecture case studies
            </span>
            <span className="text-xs font-mono text-cyan-400 font-semibold">
              Roadmap Progression: 00 → 14
            </span>
          </div>

          {/* If No Posts Match */}
          {filteredPosts.length === 0 && (
            <div className="p-12 text-center rounded-3xl bg-[#0B1120] border border-slate-800 space-y-3">
              <span className="text-4xl">🔍</span>
              <h3 className="text-lg font-bold text-white">No Architecture Notes Found</h3>
              <p className="text-xs font-mono text-slate-400 max-w-md mx-auto">
                No solutions matched your search criteria. Try a different keyword, clear the filters, or select a stage in the tree on the left.
              </p>
              <button
                onClick={() => {
                  setSelectedStage('all');
                  setSelectedPhase('all');
                  setSelectedDomain('all');
                  setSearchQuery('');
                }}
                className="mt-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-mono font-bold transition-all"
              >
                Reset All Filters
              </button>
            </div>
          )}

          {/* Post Card Grid with Project-Specific Color Coding */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {filteredPosts.map((post) => {
              const stage = post.stageInfo.stage;
              const stageColor = stage ? stage.color : '#38BDF8';
              const domainColor = getDomainColor(post.stageInfo.domain || 'AI');

              return (
                <article
                  key={post.slug}
                  className="group flex flex-col justify-between p-6 rounded-3xl bg-[#0B1120] border border-slate-800/90 hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
                  style={{
                    boxShadow: '0 4px 20px -2px rgba(0, 0, 0, 0.5)',
                  }}
                >
                  {/* Top Color Accent Line matching project stage */}
                  <div
                    className="absolute top-0 inset-x-0 h-1 transition-all group-hover:h-1.5"
                    style={{ backgroundColor: stageColor }}
                  />

                  <div>
                    {/* Stage & Domain Badges Header */}
                    <div className="flex items-center justify-between gap-2 mb-3 pt-1">
                      <div className="flex items-center gap-1.5">
                        {stage ? (
                          <span
                            className="px-2.5 py-0.5 rounded-lg text-[11px] font-mono font-bold border"
                            style={{
                              backgroundColor: `${stageColor}15`,
                              borderColor: `${stageColor}50`,
                              color: stageColor,
                            }}
                          >
                            {stage.icon} Stage {stage.id} · #{post.stageInfo.projectNum}
                          </span>
                        ) : (
                          <span className="px-2.5 py-0.5 rounded-lg text-[11px] font-mono font-bold bg-cyan-950 text-cyan-400 border border-cyan-800">
                            ⭐ Special Note
                          </span>
                        )}

                        <span
                          className="px-2 py-0.5 rounded-lg text-[10px] font-mono font-bold border"
                          style={{
                            backgroundColor: domainColor.bg,
                            borderColor: domainColor.border,
                            color: domainColor.text,
                          }}
                        >
                          {post.stageInfo.domain}
                        </span>
                      </div>

                      <span className="text-[11px] font-mono text-slate-500 shrink-0">
                        {post.readingTime}
                      </span>
                    </div>

                    {/* Post Title */}
                    <a href={`/blog/${post.slug}`} className="block mb-2.5 group-hover:text-cyan-300">
                      <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-2 leading-snug">
                        {post.title}
                      </h4>
                    </a>

                    {/* Excerpt */}
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed line-clamp-3 mb-5 font-normal">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Card Footer with Tech Stack and Link */}
                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {post.tags?.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 text-[10px] rounded-md bg-slate-900 border border-slate-800 text-slate-400 font-mono"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <a
                      href={`/blog/${post.slug}`}
                      className="text-xs font-mono font-bold flex items-center gap-1.5 transition-all group-hover:translate-x-1"
                      style={{ color: stageColor }}
                    >
                      <span>Read Note</span>
                      <span>→</span>
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
