import React, { useState } from 'react';
import { Check, Clock, ChevronRight, Award, Compass, Scale, ShieldAlert } from 'lucide-react';
import mootImage from '../assets/images/moot_court_advocacy_1791195835560.jpg';
import libraryImage from '../assets/images/legal_library_archive_1791195853228.jpg';

export const FellowshipJourneySection: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number>(1);

  const stages = [
    {
      stageNumber: '01',
      title: 'ORIENTATION & FOUNDATIONS',
      timeline: 'Months 1 – 3',
      tagline: 'Deconstructing academic theory and instilling institutional discipline.',
      description:
        'Fellows enter an intensive immersion where bad habits of passive memorization are stripped away. Through seminars with bar leaders and judicial officers, fellows internalize legal ethics and the unwritten culture of the Rwandan legal fraternity.',
      image: libraryImage,
      modules: [
        { name: 'Fellowship Orientation & Cohort Covenant', desc: 'Setting the rigorous code of honor, peer accountability, and cohort commitments.' },
        { name: 'Legal Ethics & Professional Philosophy', desc: 'Confidentiality, client duties, conflict of interest, and the Rwanda Bar Association Code.' },
        { name: 'Fundamentals of Legal Practice', desc: 'Case theory construction, client interview psychology, and court registry procedural mechanics.' },
        { name: 'Mentor Matching & Career Blueprint', desc: 'Formal 1-on-1 pairing with a senior advocate, judge, or prosecutor for personalized trajectory guidance.' },
      ],
      milestone: 'Inaugural Pledge Ceremony & Mentor Induction in Kigali',
    },
    {
      stageNumber: '02',
      title: 'THE PRACTICE YEAR',
      timeline: 'Months 4 – 10',
      tagline: 'The forge of trial preparation, written memorials, and supervised legal aid.',
      description:
        'The core engine of the fellowship. Fellows balance their university coursework with 15+ hours weekly of rigorous practice modules. Memorials are drafted under severe deadlines, cross-examinations are rehearsed before tough benches, and real citizens receive legal guidance.',
      image: mootImage,
      modules: [
        { name: 'Moot Court & Appellate Oral Advocacy', desc: 'Weekly simulated bench rounds with timed judicial questioning and rebuttals.' },
        { name: 'Legal Research & Memorial Writing', desc: 'Drafting high-stakes briefs adhering to international and domestic court standards.' },
        { name: 'Legal Clinics & Pro Bono Outreach', desc: 'Supervised community aid clinics delivering dispute advice to agrarian cooperatives and citizens.' },
        { name: 'Policy Analysis & Legislative Drafting', desc: 'Reviewing draft gazettes and ministerial orders with MINIJUST policy specialists.' },
        { name: 'Courtroom Shadowing & Judicial Visits', desc: 'Observing proceedings inside the Commercial High Court and Supreme Court chambers.' },
        { name: 'Summits & Professional Exposure', desc: 'Exclusive access to the Rwanda Justice Sector Symposium and KIAC arbitration roundtables.' },
      ],
      milestone: 'Mid-Year Judicial Bench Trial & Memorial Submission Review',
    },
    {
      stageNumber: '03',
      title: 'THE CULMINATION',
      timeline: 'Months 11 – 12',
      tagline: 'Testing under competitive fire, public recognition, and induction into the elite network.',
      description:
        'The culmination of a transformative year. Fellows compete in Rwanda’s most prestigious inter-fellow moot and debate championships, presenting oral arguments before panels of sitting appellate judges.',
      image: libraryImage,
      modules: [
        { name: 'National Moot Court Championship', desc: 'High-intensity championship rounds judged by Supreme Court justices and Bar Councilors.' },
        { name: 'Legal Debate Championship', desc: 'Public interest policy debates testing spontaneous statutory interpretation and persuasive delivery.' },
        { name: 'Professional Readiness Certification', desc: 'Final portfolio assessment, chamber interview simulations, and verified competency sign-off.' },
        { name: 'Induction into the Indahiro Alumni Network', desc: 'Lifelong affiliation with the national network across Rwanda’s judicial and corporate landscape.' },
      ],
      milestone: 'Grand Gala of the Bench & Bar · Cohort I Graduation',
    },
  ];

  const currentStage = stages[activeStage];

  return (
    <section id="journey" className="py-24 bg-[#0A121E] text-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C59B27]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Curatorial Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center space-x-3 mb-3">
            <span className="w-8 h-[1px] bg-[#C59B27]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#E8C568] font-semibold">
              The Fellowship Journey
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-white tracking-tight">
            An Uncompromising Three-Stage Crucible
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-300 font-light leading-relaxed">
            The fellowship is not a weekend workshop or a series of passive webinars. It is a demanding, year-long journey engineered to turn academic legal knowledge into instinctive professional mastery.
          </p>
        </div>

        {/* Interactive Stage Journey Timeline Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {stages.map((stg, idx) => {
            const isActive = activeStage === idx;
            return (
              <button
                key={stg.stageNumber}
                onClick={() => setActiveStage(idx)}
                className={`p-6 text-left rounded-lg transition-all border relative flex flex-col justify-between cursor-pointer ${
                  isActive
                    ? 'bg-[#152338] border-[#C59B27] shadow-lg ring-1 ring-[#C59B27]/30'
                    : 'bg-[#0E1826] border-stone-800 hover:border-stone-700 hover:bg-[#121E30]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold tracking-widest text-[#E8C568]">
                      STAGE {stg.stageNumber}
                    </span>
                    <span className="text-[11px] text-stone-400 font-medium flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#C59B27]" />
                      <span>{stg.timeline}</span>
                    </span>
                  </div>
                  <h3 className="text-lg font-serif font-semibold text-white mb-1">
                    {stg.title}
                  </h3>
                  <p className="text-xs text-stone-400 line-clamp-2 mt-1">
                    {stg.tagline}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-stone-800/80 flex items-center justify-between text-xs">
                  <span className={isActive ? 'text-[#E8C568] font-medium' : 'text-stone-500'}>
                    {isActive ? 'Currently Viewing' : 'Click to Explore'}
                  </span>
                  <ChevronRight className={`w-4 h-4 transition-transform ${isActive ? 'text-[#E8C568] translate-x-1' : 'text-stone-600'}`} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Stage Detailed Breakdown Panel */}
        <div className="bg-[#101B2B] rounded-xl border border-[#22334D] p-6 sm:p-10 lg:p-12 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left 7 Columns: Curriculum & Modules */}
            <div className="lg:col-span-7">
              <div className="flex items-center space-x-3 mb-2">
                <span className="px-2.5 py-0.5 rounded bg-[#C59B27]/20 text-[#E8C568] text-xs font-mono font-semibold">
                  STAGE {currentStage.stageNumber} ARCHITECTURE
                </span>
                <span className="text-stone-400 text-xs font-medium">· {currentStage.timeline}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-4">
                {currentStage.title}
              </h3>

              <p className="text-stone-300 text-sm sm:text-base leading-relaxed mb-8 font-light">
                {currentStage.description}
              </p>

              {/* Modules list */}
              <div className="space-y-4">
                <h4 className="text-xs uppercase tracking-widest text-[#E8C568] font-semibold">
                  Core Immersion Deliverables
                </h4>

                <div className="grid grid-cols-1 gap-3">
                  {currentStage.modules.map((mod, i) => (
                    <div
                      key={i}
                      className="p-4 bg-[#0A121E]/90 border border-stone-800/90 rounded-md hover:border-[#C59B27]/40 transition-colors"
                    >
                      <div className="flex items-start space-x-3">
                        <div className="p-1 rounded bg-[#C59B27]/10 text-[#C59B27] mt-0.5 shrink-0">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-white">
                            {mod.name}
                          </p>
                          <p className="text-xs text-stone-400 mt-0.5 leading-relaxed">
                            {mod.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Milestone Indicator */}
              <div className="mt-8 p-4 bg-[#152338] border border-[#2B3E5C] rounded-lg flex items-center space-x-3">
                <Award className="w-5 h-5 text-[#E8C568] shrink-0" />
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[#E8C568] font-semibold block">
                    Key Stage Gateway Milestone
                  </span>
                  <span className="text-xs sm:text-sm text-white font-medium">
                    {currentStage.milestone}
                  </span>
                </div>
              </div>
            </div>

            {/* Right 5 Columns: Visual Asset & Immersion Proof */}
            <div className="lg:col-span-5 flex flex-col space-y-6">
              <div className="relative rounded-lg overflow-hidden border border-stone-700/80 shadow-lg group">
                <img
                  src={currentStage.image}
                  alt={`Stage ${currentStage.stageNumber} Immersion`}
                  className="w-full h-80 object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A121E] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4 text-xs text-stone-200 bg-[#0A121E]/80 backdrop-blur-sm p-3 rounded border border-stone-700/60">
                  <p className="font-serif italic text-[#E8C568]">
                    &ldquo;In legal practice, your credibility is formed in the first thirty seconds before the bench.&rdquo;
                  </p>
                  <p className="text-[10px] text-stone-400 uppercase tracking-widest mt-1">
                    Indahiro Advocacy Bench Simulation
                  </p>
                </div>
              </div>

              {/* Weekly Rigor Stats */}
              <div className="p-6 bg-[#0B1422] rounded-lg border border-stone-800 text-xs text-stone-300 space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-stone-800">
                  <span className="text-stone-400">Time Commitment</span>
                  <span className="font-mono text-white font-semibold">12-15 hrs / week</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-stone-800">
                  <span className="text-stone-400">Advocacy Exercises</span>
                  <span className="font-mono text-white font-semibold">30+ Bench Rounds</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-stone-800">
                  <span className="text-stone-400">Pro Bono Clinic Target</span>
                  <span className="font-mono text-white font-semibold">60 Supervised Hours</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-stone-400">Cohort Size Limit</span>
                  <span className="font-mono text-[#E8C568] font-bold">Strictly 10 Fellows</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
