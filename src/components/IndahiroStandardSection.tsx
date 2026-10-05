import React, { useState } from 'react';
import { COMPETENCY_STANDARDS } from '../data/mockData';
import { CheckCircle2, ChevronDown, ChevronUp, Scale, Sparkles, BookOpen } from 'lucide-react';

export const IndahiroStandardSection: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(COMPETENCY_STANDARDS[0].id);

  return (
    <section id="standard" className="py-24 bg-[#FBF9F5] text-[#1A1A1A] border-b border-[#E2DDD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Curatorial Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center space-x-3 mb-3">
            <span className="w-8 h-[1.5px] bg-[#C59B27]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#8F6E15] font-semibold">
              The Competency Framework
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#0B1320] font-semibold tracking-tight">
            The Indahiro Standard
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 font-light leading-relaxed">
            What distinguishes an Indahiro Fellow from any other law graduate in the East African region? 
            This competency charter defines the verified capabilities every fellow must demonstrate prior to graduation.
          </p>
        </div>

        {/* The Benchmark Headline Banner */}
        <div className="p-8 bg-[#0B1320] text-white rounded-xl border border-stone-800 shadow-md mb-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase tracking-widest text-[#E8C568]">
              Verified Outcome Covenant
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-wide">
              AN INDAHIRO FELLOW CAN...
            </h3>
            <p className="text-xs text-stone-300 font-light">
              Nine non-negotiable professional benchmarks rigorously tested in chamber files and courtroom benches.
            </p>
          </div>
          <div className="flex items-center space-x-2 text-xs font-mono text-stone-300 bg-[#162337] px-4 py-2 rounded border border-[#2B3E5E]">
            <Scale className="w-4 h-4 text-[#C59B27]" />
            <span>9 Core Competencies</span>
          </div>
        </div>

        {/* The 9 Competencies Interactive List */}
        <div className="space-y-4">
          {COMPETENCY_STANDARDS.map((comp, idx) => {
            const isExpanded = expandedId === comp.id;
            return (
              <div
                key={comp.id}
                className={`bg-white rounded-lg border transition-all duration-200 overflow-hidden ${
                  isExpanded
                    ? 'border-[#C59B27] shadow-md ring-1 ring-[#C59B27]/20'
                    : 'border-[#E2DDD3] hover:border-stone-400'
                }`}
              >
                {/* Header Row */}
                <button
                  onClick={() => setExpandedId(isExpanded ? null : comp.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <div className="flex items-center space-x-4">
                    <span className="text-xs font-mono font-bold text-[#8F6E15] w-6 shrink-0">
                      {String(idx + 1).padStart(2, '0')}.
                    </span>
                    <h4 className="text-base sm:text-lg font-serif font-semibold text-[#0B1320]">
                      {comp.capability}
                    </h4>
                  </div>
                  <div className="flex items-center space-x-3 shrink-0">
                    <span className="hidden sm:inline text-[11px] text-stone-500 font-mono uppercase tracking-wider">
                      {isExpanded ? 'Hide Rubric' : 'Inspect Rubric'}
                    </span>
                    <div className="p-1.5 rounded-full bg-stone-100 text-stone-600">
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </div>
                </button>

                {/* Expanded Content Drawer */}
                {isExpanded && (
                  <div className="px-6 pb-6 pt-2 border-t border-stone-100 bg-[#FBF9F6]">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                      
                      {/* Left: Rationale */}
                      <div className="lg:col-span-7">
                        <span className="text-[11px] uppercase tracking-wider font-semibold text-stone-500 block mb-1">
                          Institutional Rationale
                        </span>
                        <p className="text-xs sm:text-sm text-stone-700 leading-relaxed mb-4">
                          {comp.rationale}
                        </p>

                        <span className="text-[11px] uppercase tracking-wider font-semibold text-stone-500 block mb-2">
                          Concrete Observable Indicators
                        </span>
                        <div className="space-y-1.5">
                          {comp.indicators.map((ind, i) => (
                            <div key={i} className="flex items-start space-x-2 text-xs text-stone-700">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#8F6E15] mt-0.5 shrink-0" />
                              <span>{ind}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Right: Practice Benchmark Box */}
                      <div className="lg:col-span-5 bg-[#F2EDE2] p-5 rounded-lg border border-[#E0D8C8] flex flex-col justify-between">
                        <div>
                          <div className="flex items-center space-x-2 text-xs font-mono font-semibold text-[#8F6E15] uppercase tracking-wider mb-2">
                            <Sparkles className="w-3.5 h-3.5" />
                            <span>Graduation Mastery Benchmark</span>
                          </div>
                          <p className="text-xs text-[#0B1320] leading-relaxed font-serif italic">
                            &ldquo;{comp.practiceBenchmark}&rdquo;
                          </p>
                        </div>
                        <div className="mt-4 pt-3 border-t border-[#DFD6C3] text-[11px] text-stone-600 font-mono">
                          STATUS: MANDATORY FOR COHORT I CERTIFICATION
                        </div>
                      </div>

                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
