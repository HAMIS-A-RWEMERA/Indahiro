import React, { useState } from 'react';
import { Sparkles, Target, Users2, Shield, HeartHandshake, Flame, BookCheck, Eye, Compass, Trophy } from 'lucide-react';

interface WhoWeSelectProps {
  onOpenApplication: () => void;
}

export const WhoWeSelectSection: React.FC<WhoWeSelectProps> = ({ onOpenApplication }) => {
  const [selectedPillar, setSelectedPillar] = useState<number>(0);

  const pillars = [
    {
      name: 'Passion',
      icon: Flame,
      summary: 'A palpable fire for the law as a living instrument of justice and national progress.',
      detail:
        'We do not seek students who view law merely as a credential or a title. We look for those who read judgments late into the night because they genuinely care about how legal principles govern human affairs.',
    },
    {
      name: 'Competence',
      icon: BookCheck,
      summary: 'Sound doctrinal foundations and instinctive analytical clarity.',
      detail:
        'While grades alone do not define potential, candidates must demonstrate disciplined mastery of legal fundamentals and the ability to parse intricate statutory provisions without getting lost.',
    },
    {
      name: 'Potential',
      icon: Sparkles,
      summary: 'Raw intellectual trajectory and capacity for rapid professional evolution.',
      detail:
        'We evaluate where you can be in five years under rigorous coaching, not merely what you have accomplished so far. We value steep growth curves over polished complacency.',
    },
    {
      name: 'Commitment',
      icon: Target,
      summary: 'Unyielding dedication to complete intensive fellowship deliverables alongside university degrees.',
      detail:
        'Indahiro requires 12 to 15 hours every week of rigorous research, memorial drafting, and courtroom simulations. Fellows never make excuses; they meet their obligations with honor.',
    },
    {
      name: 'Curiosity',
      icon: Eye,
      summary: 'Relentless drive to question assumptions and dig beneath the surface of legal doctrines.',
      detail:
        'The best advocates are insatiably inquisitive. They ask why a rule was formulated, what socioeconomic reality it serves, and how comparative jurisdictions have resolved identical friction.',
    },
    {
      name: 'Discipline',
      icon: Shield,
      summary: 'The monastic rigor to cite accurately, meet filing deadlines, and verify every authority.',
      detail:
        'In the legal profession, a missing citation or a missed deadline is fatal to a client’s cause. We cultivate an uncompromising standard of meticulous execution.',
    },
    {
      name: 'Competitive Spirit',
      icon: Trophy,
      summary: 'The appetite to test arguments against the sharpest minds domestically and globally.',
      detail:
        'Fellows relish the adversarial tension of moot courts and courtroom cross-examinations. They do not shrink from intellectual confrontation; they thrive in it.',
    },
    {
      name: 'Integrity',
      icon: Compass,
      summary: 'Unshakeable ethical spine that never bends to expediency or shortcuts.',
      detail:
        'A brilliant lawyer without integrity is a danger to the republic. Indahiro fellows understand that their personal reputation and the integrity of the justice system are indivisible.',
    },
    {
      name: 'Willingness to Learn',
      icon: Users2,
      summary: 'Humility to absorb harsh judicial critique and dismantle flawed reasoning without ego.',
      detail:
        'When a Supreme Court judge shreds your legal memorial during a simulation, defensiveness is failure. Fellows absorb critique as invaluable fuel for refinement.',
    },
    {
      name: 'Willingness to Serve',
      icon: HeartHandshake,
      summary: 'A deep conviction that legal privilege carries a sacred duty to the public interest.',
      detail:
        'Excellence without social conscience is hollow. Every Indahiro fellow commits structured hours to pro bono legal aid clinics, protecting the rights of the indigent and vulnerable.',
    },
  ];

  return (
    <section id="selection" className="py-24 bg-[#FAF8F4] text-[#1A1A1A] border-b border-[#E2DDD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Curatorial Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center space-x-3 mb-3">
            <span className="w-8 h-[1.5px] bg-[#C59B27]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#8F6E15] font-semibold">
              Admissions & Selection
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#0B1320] font-semibold tracking-tight">
            Who We Select
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 font-light leading-relaxed">
            The fellowship is intentionally not an ordinary academic scholarship. We do not evaluate applicants through a narrow mechanical GPA formula.
          </p>
        </div>

        {/* The Core Manifesto Statement Banner */}
        <div className="bg-[#0B1320] text-white p-8 sm:p-12 rounded-xl border border-stone-800 shadow-xl mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#C59B27]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-4xl relative z-10">
            <div className="flex items-center space-x-2 text-[#E8C568] text-xs uppercase tracking-widest font-mono mb-4">
              <span>The Indahiro Selection Philosophy</span>
            </div>
            <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-serif italic text-white leading-relaxed font-light">
              &ldquo;We are not looking for the student with the longest transcript. 
              We are looking for the student with the strongest potential to become an exceptional legal professional.&rdquo;
            </blockquote>

            <div className="mt-8 pt-6 border-t border-stone-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center space-x-3">
                <span className="text-xs text-stone-400">Inaugural Cohort Allocation:</span>
                <span className="text-xs font-mono font-bold text-[#E8C568] px-2.5 py-1 bg-[#1A2638] rounded border border-[#2B3E5E]">
                  Strictly 10 Fellows Nationwide
                </span>
              </div>
              <button
                onClick={onOpenApplication}
                className="text-xs font-semibold uppercase tracking-wider text-[#0B1320] bg-[#C59B27] hover:bg-[#E8C568] px-5 py-2.5 rounded transition-colors self-start sm:self-auto cursor-pointer"
              >
                Submit Application
              </button>
            </div>
          </div>
        </div>

        {/* The 10 Selection Pillars Interactive Matrix */}
        <div>
          <div className="mb-8">
            <h3 className="text-xs uppercase tracking-widest text-[#8F6E15] font-semibold mb-1">
              The Ten Foundations of Evaluation
            </h3>
            <p className="text-2xl font-serif font-semibold text-[#0B1320]">
              What We Test and Value in Every Candidate
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left 7 Columns: Grid of 10 Pillars */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {pillars.map((pillar, idx) => {
                const IconComponent = pillar.icon;
                const isSelected = selectedPillar === idx;
                return (
                  <button
                    key={pillar.name}
                    onClick={() => setSelectedPillar(idx)}
                    className={`p-4 text-left rounded-lg border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#0B1320] text-white border-[#C59B27] shadow-md ring-1 ring-[#C59B27]/40'
                        : 'bg-white text-stone-900 border-[#E2DDD3] hover:border-stone-400 hover:bg-[#FAF8F5]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <IconComponent className={`w-4 h-4 ${isSelected ? 'text-[#E8C568]' : 'text-[#8F6E15]'}`} />
                        <span className="text-sm font-semibold tracking-tight">{pillar.name}</span>
                      </div>
                      <span className={`text-[10px] font-mono ${isSelected ? 'text-stone-400' : 'text-stone-400'}`}>
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <p className={`text-xs leading-relaxed line-clamp-2 ${isSelected ? 'text-stone-300' : 'text-stone-600'}`}>
                      {pillar.summary}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Right 5 Columns: Active Pillar Deep Dive Card */}
            <div className="lg:col-span-5 bg-white rounded-xl border border-[#E2DDD3] p-8 shadow-sm">
              <div className="flex items-center space-x-2 text-xs font-mono text-[#8F6E15] uppercase tracking-wider mb-2">
                <span>Evaluation Criterion · {String(selectedPillar + 1).padStart(2, '0')} / 10</span>
              </div>

              <h4 className="text-2xl font-serif font-bold text-[#0B1320] mb-3 flex items-center gap-2">
                {pillars[selectedPillar].name}
              </h4>

              <div className="p-4 bg-[#F8F6F0] rounded-lg border border-[#EAE5DB] mb-6">
                <p className="text-xs font-serif italic text-stone-700 leading-relaxed">
                  &ldquo;{pillars[selectedPillar].summary}&rdquo;
                </p>
              </div>

              <div className="space-y-4 text-xs text-stone-700 leading-relaxed">
                <p>{pillars[selectedPillar].detail}</p>
                <div className="pt-4 border-t border-stone-200">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-stone-500 block mb-1">
                    How This Is Assessed
                  </span>
                  <p className="text-stone-600">
                    Evaluated through your written practical legal assessment, personal statement, references, and rigorous oral interview cross-examination with our selection committee.
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-stone-200">
                <div className="p-3 bg-[#0B1320] text-stone-200 rounded-lg text-[11px] flex items-center justify-between">
                  <span className="text-stone-400">First Cohort Target:</span>
                  <span className="text-[#E8C568] font-bold">10 Rwandan Law Fellows</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
