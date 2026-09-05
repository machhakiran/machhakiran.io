'use client';

import { useState, useMemo } from 'react';
import type { Post } from '@/lib/posts';
import { PHASES, STAGES, getDomainBadgeClasses } from '@/lib/roadmap';

interface Props {
  posts: Post[];
}

export function BlogTreeExplorer({ posts }: Props) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPhase, setSelectedPhase] = useState<string>('all');
  const [selectedStage, setSelectedStage] = useState<string>('all');
  const [selectedDomain, setSelectedDomain] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'compact'>('grid');
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

  const expandAll = () => {
    const all: Record<string, boolean> = {};
    Object.keys(STAGES).forEach((k) => (all[k] = true));
    setExpandedStages(all);
  };

  const collapseAll = () => {
    setExpandedStages({});
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
        const domainMatch =
          post.stageInfo.domain?.toLowerCase().includes(selectedDomain.toLowerCase()) ||
          post.tags?.some((t) => t.toLowerCase().includes(selectedDomain.toLowerCase()));
        if (!domainMatch) return false;
      }

      return true;
    });
  }, [posts, searchQuery, selectedStage, selectedPhase, selectedDomain]);

  // Domain badge options matching main site palette
  const domainOptions = [
    { label: 'All Domains', id: 'all', count: posts.length, badge: 'bg-slate-900 text-white border-slate-900', dot: 'bg-white' },
    { label: 'Banking & FinTech', id: 'fintech', count: posts.filter((p) => p.stageInfo.domain?.toLowerCase().includes('fintech') || p.tags?.some((t) => t.toLowerCase().includes('fintech') || t.toLowerCase().includes('bank'))).length, badge: 'bg-emerald-50 text-emerald-700 border-emerald-200', activeBadge: 'bg-emerald-600 text-white border-emerald-600', dot: 'bg-emerald-500' },
    { label: 'Telecom', id: 'telecom', count: posts.filter((p) => p.stageInfo.domain?.toLowerCase().includes('telecom') || p.tags?.some((t) => t.toLowerCase().includes('telecom'))).length, badge: 'bg-sky-50 text-sky-700 border-sky-200', activeBadge: 'bg-sky-600 text-white border-sky-600', dot: 'bg-sky-500' },
    { label: 'E-Commerce & Retail', id: 'ecommerce', count: posts.filter((p) => p.stageInfo.domain?.toLowerCase().includes('ecommerce') || p.tags?.some((t) => t.toLowerCase().includes('ecommerce') || t.toLowerCase().includes('retail'))).length, badge: 'bg-amber-50 text-amber-800 border-amber-200', activeBadge: 'bg-amber-600 text-white border-amber-600', dot: 'bg-amber-500' },
    { label: 'Government & Civic', id: 'government', count: posts.filter((p) => p.stageInfo.domain?.toLowerCase().includes('government') || p.tags?.some((t) => t.toLowerCase().includes('government') || t.toLowerCase().includes('public'))).length, badge: 'bg-purple-50 text-purple-700 border-purple-200', activeBadge: 'bg-purple-600 text-white border-purple-600', dot: 'bg-purple-500' },
    { label: 'AI Agents Core', id: 'agent', count: posts.filter((p) => p.stageInfo.stageId === '14' || p.stageInfo.domain?.toLowerCase().includes('agent') || p.tags?.some((t) => t.toLowerCase().includes('agent'))).length, badge: 'bg-fuchsia-50 text-fuchsia-700 border-fuchsia-200', activeBadge: 'bg-fuchsia-600 text-white border-fuchsia-600', dot: 'bg-fuchsia-500' },
  ];

  const activeStage = selectedStage !== 'all' ? STAGES[selectedStage] : null;

  return (
    <div className="relative">
      {/* Mobile Drawer Button */}
      <div className="lg:hidden mb-4">
        <button
          type="button"
          onClick={() => setMobileTreeOpen(!mobileTreeOpen)}
          className="w-full py-2.5 px-4 bg-white border border-slate-200 rounded-xl text-xs font-mono font-bold text-slate-800 flex items-center justify-between shadow-xs"
        >
          <span className="flex items-center gap-2">
            <span>🌳</span>
            <span>{mobileTreeOpen ? 'Hide Roadmap Tree' : 'Open Roadmap Tree Navigator'}</span>
          </span>
          <span className="px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 border border-indigo-200 text-[10px]">
            15 Stages
          </span>
        </button>
      </div>

      {/* ===== 2-COLUMN FIT LAYOUT ===== */}
      <div className="flex flex-col lg:flex-row gap-6 items-start">
        {/* ========================================================
            LEFT COLUMN: COMPACT, SLEEK ARCHIVAL TREE (STICKY)
           ======================================================== */}
        <aside
          className={`w-full lg:w-[300px] xl:w-[320px] shrink-0 lg:sticky lg:top-20 max-h-[calc(100vh-6rem)] overflow-y-auto pr-1 no-scrollbar space-y-3 ${
            mobileTreeOpen ? 'block' : 'hidden lg:block'
          }`}
        >
          <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-xs">
            {/* Tree Top Controls */}
            <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <span className="text-sm">🌳</span>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900">
                  Roadmap Tree
                </span>
                <span className="text-[10px] px-1.5 py-0.2 rounded bg-slate-100 font-mono text-slate-600 font-semibold">
                  15 Stg
                </span>
              </div>

              <div className="flex items-center gap-1.5 text-[10px] font-mono">
                <button
                  type="button"
                  onClick={expandAll}
                  className="px-1.5 py-0.5 rounded hover:bg-slate-100 text-slate-500 hover:text-slate-900 transition-colors"
                  title="Expand all stages"
                >
                  Expand
                </button>
                <span className="text-slate-300">·</span>
                <button
                  type="button"
                  onClick={collapseAll}
                  className="px-1.5 py-0.5 rounded hover:bg-slate-100 text-slate-500 hover:text-slate-900 transition-colors"
                  title="Collapse all stages"
                >
                  Collapse
                </button>
              </div>
            </div>

            {/* Tree Nodes List */}
            <div className="space-y-2 text-xs font-mono">
              {PHASES.map((phase) => {
                const isPhaseSelected = selectedPhase === phase.id;
                return (
                  <div key={phase.id} className="space-y-1 pt-1 first:pt-0">
                    {/* Phase Header - High Visibility & Bold */}
                    <div
                      onClick={() => {
                        setSelectedPhase(isPhaseSelected ? 'all' : phase.id);
                        setSelectedStage('all');
                      }}
                      className={`px-2.5 py-1.5 rounded-lg cursor-pointer flex items-center justify-between transition-colors border ${
                        isPhaseSelected
                          ? 'bg-indigo-600 text-white border-indigo-600 shadow-2xs font-bold'
                          : 'bg-slate-100/90 hover:bg-slate-200/80 text-slate-800 border-slate-200/80'
                      }`}
                    >
                      <div className="flex items-center gap-1.5 truncate">
                        <span
                          className={`px-1.5 py-0.2 rounded text-[9px] font-mono font-extrabold ${
                            isPhaseSelected
                              ? 'bg-white/20 text-white'
                              : 'bg-indigo-50 text-indigo-700 border border-indigo-200'
                          }`}
                        >
                          {phase.roman}
                        </span>
                        <span className="text-xs font-extrabold tracking-tight truncate">
                          {phase.title}
                        </span>
                      </div>
                      <span
                        className={`text-[9px] font-mono font-semibold px-1.5 py-0.2 rounded-full border shrink-0 ${
                          isPhaseSelected
                            ? 'bg-white/20 text-white border-white/30'
                            : 'bg-white text-slate-600 border-slate-200'
                        }`}
                      >
                        {phase.stageIds.length} stg
                      </span>
                    </div>

                    {/* Stage Nodes in this Phase */}
                    <div className="space-y-0.5 pl-1">
                      {phase.stageIds.map((stageId) => {
                        const stage = STAGES[stageId];
                        if (!stage) return null;
                        const isStageSelected = selectedStage === stageId;
                        const isExpanded = !!expandedStages[stageId];
                        const stageProjects = postsByStage[stageId] || [];

                        return (
                          <div key={stageId} className="group">
                            {/* Stage Item Row */}
                            <div
                              onClick={() => {
                                setSelectedStage(isStageSelected ? 'all' : stageId);
                                setSelectedPhase(stage.phaseId);
                                if (!isExpanded) {
                                  setExpandedStages((p) => ({ ...p, [stageId]: true }));
                                }
                              }}
                              className={`px-2 py-1.5 rounded-lg cursor-pointer flex items-center justify-between transition-all border ${
                                isStageSelected
                                  ? 'bg-indigo-600 text-white font-bold border-indigo-600 shadow-2xs'
                                  : 'border-transparent text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                              }`}
                            >
                              <div className="flex items-center gap-1.5 truncate">
                                <button
                                  type="button"
                                  onClick={(e) => toggleStageExpand(stageId, e)}
                                  className={`w-4 h-4 flex items-center justify-center rounded text-[10px] transition-colors shrink-0 ${
                                    isStageSelected
                                      ? 'text-white/80 hover:bg-indigo-700'
                                      : 'text-slate-400 hover:text-slate-800'
                                  }`}
                                >
                                  {isExpanded ? '▾' : '▸'}
                                </button>
                                <span className="shrink-0">{stage.icon}</span>
                                <span className="truncate font-semibold text-[11px]">
                                  {stage.shortTitle}
                                </span>
                              </div>

                              <span
                                className={`px-1.5 py-0.2 rounded text-[9px] font-bold shrink-0 border ${
                                  isStageSelected
                                    ? 'bg-white/20 text-white border-white/30'
                                    : stage.lightBadge
                                }`}
                              >
                                {stage.id}
                              </span>
                            </div>

                            {/* Connected Tree Leaf Nodes (Projects) */}
                            {isExpanded && stageProjects.length > 0 && (
                              <div className="border-l-2 border-slate-100 ml-3.5 pl-2.5 py-1 space-y-0.5">
                                {stageProjects.map((p) => {
                                  const domainClasses = getDomainBadgeClasses(p.stageInfo.domain || 'AI');
                                  return (
                                    <a
                                      key={p.slug}
                                      href={`/blog/${p.slug}`}
                                      className="flex items-center justify-between gap-1.5 px-1.5 py-0.5 rounded text-[11px] text-slate-600 hover:text-indigo-600 hover:bg-indigo-50/50 transition-colors group/item"
                                    >
                                      <div className="flex items-center gap-1 truncate">
                                        <span className="text-[10px] text-slate-400 group-hover/item:text-indigo-600 font-semibold">
                                          #{p.stageInfo.projectNum}
                                        </span>
                                        <span className="truncate font-medium group-hover/item:text-slate-900">
                                          {p.title}
                                        </span>
                                      </div>
                                      <span
                                        className={`text-[8px] px-1 py-0.2 rounded border shrink-0 font-bold ${domainClasses.bg} ${domainClasses.text} ${domainClasses.border}`}
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
                <div className="pt-2 border-t border-slate-100">
                  <span className="px-2 py-0.5 text-[9px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                    Whitepapers
                  </span>
                  <div className="space-y-0.5 pl-1">
                    {whitepapers.map((p) => (
                      <a
                        key={p.slug}
                        href={`/blog/${p.slug}`}
                        className="flex items-center justify-between gap-1.5 px-2 py-1 rounded-md text-[11px] text-slate-600 hover:text-indigo-600 hover:bg-indigo-50/60 transition-colors"
                      >
                        <span className="truncate font-medium">{p.title}</span>
                        <span className="text-[8px] px-1.5 py-0.2 rounded bg-blue-50 text-blue-700 border border-blue-200 shrink-0 font-bold">
                          WP
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
            RIGHT COLUMN: CONTROLS & SMART CARD SHOWCASE
           ======================================================== */}
        <div className="flex-1 min-w-0 space-y-4 w-full">
          {/* Top Controls: Search + Domain Filter Tabs + View Mode Toggle */}
          <div className="space-y-2.5">
            {/* Search and View Toggle Bar */}
            <div className="flex items-center gap-2">
              <div className="relative flex-1">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 font-mono text-xs">🔍</span>
                <input
                  type="text"
                  placeholder="Search 60 projects by keyword, tech stack (e.g. LangGraph, vLLM, DuckDB)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-16 py-2 bg-white border border-slate-200 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10 transition-all font-sans shadow-2xs"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-800 text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-100 border border-slate-200"
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* View Mode Toggle (Grid vs Compact List) */}
              <div className="flex items-center p-1 bg-white border border-slate-200 rounded-xl shadow-2xs shrink-0">
                <button
                  type="button"
                  onClick={() => setViewMode('grid')}
                  className={`px-2 py-1 rounded-lg text-xs font-mono font-semibold transition-colors flex items-center gap-1 ${
                    viewMode === 'grid'
                      ? 'bg-indigo-50 text-indigo-700'
                      : 'text-slate-500 hover:text-slate-900'
                  }`}
                  title="Card View"
                >
                  <span>⊞</span>
                  <span className="hidden sm:inline text-[11px]">Cards</span>
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode('compact')}
                  className={`px-2 py-1 rounded-lg text-xs font-mono font-semibold transition-colors flex items-center gap-1 ${
                    viewMode === 'compact'
                      ? 'bg-indigo-50 text-indigo-700'
                      : 'text-slate-500 hover:text-slate-900'
                  }`}
                  title="Compact List View"
                >
                  <span>☰</span>
                  <span className="hidden sm:inline text-[11px]">List</span>
                </button>
              </div>
            </div>

            {/* Domain Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
              {domainOptions.map((domain) => {
                const isSelected = selectedDomain === domain.id;
                return (
                  <button
                    key={domain.id}
                    onClick={() => {
                      setSelectedDomain(domain.id);
                      if (domain.id !== 'all') setSelectedStage('all');
                    }}
                    className={`px-2.5 py-1.5 rounded-lg text-xs font-mono font-bold whitespace-nowrap transition-all flex items-center gap-1.5 border shadow-2xs ${
                      isSelected
                        ? domain.activeBadge || 'bg-indigo-600 text-white border-indigo-600 shadow-xs'
                        : `${domain.badge} hover:shadow-2xs`
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        isSelected ? 'bg-white' : domain.dot
                      }`}
                    />
                    <span>{domain.label}</span>
                    <span
                      className={`px-1 py-0.2 rounded text-[9px] font-mono ${
                        isSelected ? 'bg-white/20 text-white' : 'bg-white/60 text-slate-600'
                      }`}
                    >
                      {domain.count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Stage Banner (When a stage is selected) */}
          {activeStage && (
            <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-200 flex items-center justify-center text-sm shrink-0">
                  {activeStage.icon}
                </span>
                <div>
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-0.2 rounded text-[9px] font-mono font-bold border ${activeStage.lightBadge}`}>
                      Stage {activeStage.id}
                    </span>
                    <h2 className="text-xs sm:text-sm font-bold text-slate-900 truncate">
                      {activeStage.name}
                    </h2>
                  </div>
                  <p className="text-[10px] font-mono text-slate-500 mt-0.5">
                    Stack: {activeStage.tech}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => {
                  setSelectedStage('all');
                  setSelectedPhase('all');
                }}
                className="text-xs font-mono font-bold text-indigo-600 hover:text-indigo-800 shrink-0 self-start sm:self-center"
              >
                View all 15 stages ↗
              </button>
            </div>
          )}

          {/* Results Summary Bar */}
          <div className="flex items-center justify-between text-xs font-mono text-slate-500 pb-1 border-b border-slate-200">
            <span>
              Showing <strong className="text-slate-900">{filteredPosts.length}</strong> of {posts.length} case studies
            </span>
            <span className="text-[10px] text-indigo-600 font-semibold hidden sm:inline">
              Sequence: Stage 00 → Stage 14
            </span>
          </div>

          {/* Empty State */}
          {filteredPosts.length === 0 && (
            <div className="p-8 text-center rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
              <span className="text-2xl">🔍</span>
              <h3 className="text-sm font-bold text-slate-900">No Matching Case Studies</h3>
              <p className="text-xs font-mono text-slate-500 max-w-sm mx-auto">
                Try clearing your search query or clicking a stage on the roadmap tree.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSelectedStage('all');
                  setSelectedPhase('all');
                  setSelectedDomain('all');
                  setSearchQuery('');
                }}
                className="btn-primary mt-2 px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold text-white shadow-xs"
              >
                Reset All Filters
              </button>
            </div>
          )}

          {/* ========================================================
              SMART CARD VIEW (CLEAN, POLISHED & MINIMALIST)
             ======================================================== */}
          {viewMode === 'grid' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredPosts.map((post) => {
                const stage = post.stageInfo.stage;
                const domainClasses = getDomainBadgeClasses(post.stageInfo.domain || 'AI');

                return (
                  <a
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group bg-white p-5 rounded-2xl border border-slate-200 hover:border-indigo-400 hover:shadow-md transition-all flex flex-col justify-between shadow-xs relative"
                  >
                    <div>
                      {/* Top Row: Large Clean Number + Stage & Domain Badges */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <div className="flex items-center gap-2">
                          <span className="font-serif font-extrabold text-xl text-slate-300 group-hover:text-indigo-600 transition-colors leading-none">
                            {post.stageInfo.projectNum || '01'}
                          </span>
                          {stage ? (
                            <span
                              className={`px-2 py-0.5 rounded-md text-[10px] font-mono font-bold border ${stage.lightBadge}`}
                            >
                              {stage.icon} Stage {stage.id}
                            </span>
                          ) : (
                            <span className="px-2 py-0.5 rounded-md text-[10px] font-mono font-bold bg-blue-50 text-blue-700 border border-blue-200">
                              ⭐ Note
                            </span>
                          )}
                        </div>

                        <span
                          className={`px-2 py-0.5 rounded-md text-[9px] font-mono font-bold border ${domainClasses.bg} ${domainClasses.text} ${domainClasses.border}`}
                        >
                          {post.stageInfo.domain}
                        </span>
                      </div>

                      {/* Project Title */}
                      <h3 className="text-[15px] font-bold text-slate-900 group-hover:text-indigo-600 transition-colors line-clamp-2 leading-snug mb-2">
                        {post.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-xs text-slate-600 leading-relaxed line-clamp-2 font-normal mb-4">
                        {post.excerpt}
                      </p>
                    </div>

                    {/* Bottom Row: Tech Tags + Arrow */}
                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-mono">
                      <div className="flex flex-wrap items-center gap-1">
                        {post.tags?.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="px-1.5 py-0.2 text-[9px] rounded bg-slate-100 border border-slate-200 text-slate-600 font-mono font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                        <span className="text-[10px] text-slate-400 ml-1">
                          · {post.readingTime}
                        </span>
                      </div>

                      <span className="font-bold text-indigo-600 group-hover:translate-x-1 transition-transform inline-flex items-center text-xs">
                        →
                      </span>
                    </div>
                  </a>
                );
              })}
            </div>
          )}

          {/* ========================================================
              COMPACT LIST VIEW (FOR DENSE FAST SCANNING)
             ======================================================== */}
          {viewMode === 'compact' && (
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xs divide-y divide-slate-100 overflow-hidden">
              {filteredPosts.map((post) => {
                const stage = post.stageInfo.stage;
                const domainClasses = getDomainBadgeClasses(post.stageInfo.domain || 'AI');

                return (
                  <a
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group px-4 py-3 flex items-center justify-between gap-3 hover:bg-indigo-50/40 transition-colors"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span className="font-mono text-xs font-extrabold text-slate-400 group-hover:text-indigo-600 shrink-0 w-8">
                        {stage ? `${stage.id}.${post.stageInfo.projectNum}` : 'WP'}
                      </span>
                      <span className="text-xs font-bold text-slate-900 group-hover:text-indigo-600 truncate">
                        {post.title}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 shrink-0 font-mono text-[10px]">
                      <span
                        className={`hidden sm:inline px-1.5 py-0.5 rounded border font-semibold ${domainClasses.bg} ${domainClasses.text} ${domainClasses.border}`}
                      >
                        {post.stageInfo.domain}
                      </span>
                      <span className="text-slate-400 hidden md:inline">
                        {post.readingTime}
                      </span>
                      <span className="text-indigo-600 group-hover:translate-x-0.5 transition-transform font-bold">
                        →
                      </span>
                    </div>
                  </a>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
