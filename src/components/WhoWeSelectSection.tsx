import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  Target,
  Shield,
  HeartHandshake,
  Flame,
  BookCheck,
  Eye,
  Compass,
  Scale,
  Award,
  Users2,
  CheckCircle2,
} from 'lucide-react';

interface WhoWeSelectProps {
  onOpenApplication?: () => void;
}

export const WhoWeSelectSection: React.FC<WhoWeSelectProps> = ({ onOpenApplication }) => {
  const [selectedPillar, setSelectedPillar] = useState<number>(0);

  const officialCriteria = [
    {
      name: 'Legal Reasoning & Competence',
      weight: '20%',
      weightNum: 20,
      icon: BookCheck,
      question: 'Can they understand, analyse, and apply law?',
      summary: 'Moving beyond memorisation to critical analysis and structured legal application.',
      detail:
        'We test whether candidates can deconstruct statutory texts, synthesize judicial precedents, spot dispositive legal issues, and construct persuasive arguments under scrutiny rather than simply reciting lecture notes.',
      assessmentMethod: 'Evaluated through the Practical Assessment Case Memorandum and legal problem diagnostic in the admissions portal.',
    },
    {
      name: 'Potential',
      weight: '20%',
      weightNum: 20,
      icon: Sparkles,
      question: 'Could this person become an exceptional lawyer?',
      summary: 'Investing in future excellence rather than simply measuring past opportunities or pedigree.',
      detail:
        'Indahiro identifies raw intellectual capability, cognitive plasticity, and steep growth curves. We ask who this person will become after a year of intense mentorship and moot court simulations, not who had the most polished starting advantages.',
      assessmentMethod: 'Assessed through academic trajectory, letters of recommendation, and oral interview panel evaluation.',
    },
    {
      name: 'Commitment & Discipline',
      weight: '15%',
      weightNum: 15,
      icon: Target,
      question: 'Will they actually do the demanding work?',
      summary: 'Reliability for sustained training, tight filing deadlines, and practical assignments.',
      detail:
        'The fellowship demands 12 to 15 hours each week of research, oral simulations, judicial visits, and clinic work alongside demanding degree studies. Candidates must demonstrate ironclad reliability and grit.',
      assessmentMethod: 'Evaluated through past performance, referee verification, and verified extracurricular follow-through.',
    },
    {
      name: 'Passion for Legal Practice',
      weight: '15%',
      weightNum: 15,
      icon: Flame,
      question: 'Do they genuinely want to practise, not just collect a certificate?',
      summary: 'A deep, palpable hunger to stand in courtrooms, advise clients, and serve justice.',
      detail:
        'Indahiro is not for resume collectors or passive credentials. We seek aspiring advocates, prosecutors, and corporate counsel whose heart beats for the adversarial courtroom, negotiations, and client advocacy.',
      assessmentMethod: 'Gauged through the personal statement (“Why Indahiro & Why Legal Practice”) and admissions interview.',
    },
    {
      name: 'Communication & Advocacy',
      weight: '10%',
      weightNum: 10,
      icon: Scale,
      question: 'Can they express and defend an argument in moot courts and oral advocacy?',
      summary: 'Clarity of spoken and written prose, judicial responsiveness, and composure under pressure.',
      detail:
        'Lawyers win or lose on their ability to persuade. We assess oral articulation, ability to handle aggressive judicial questioning with poise, and precision in written briefs.',
      assessmentMethod: 'Assessed through moot court experience records, written submissions, and live selection panel questioning.',
    },
    {
      name: 'Intellectual Curiosity',
      weight: '10%',
      weightNum: 10,
      icon: Eye,
      question: 'Do they question, research, and learn independently beyond what is taught in class?',
      summary: 'Independent exploration of legal questions, comparative systems, and emerging jurisprudence.',
      detail:
        'Exceptional lawyers read beyond the syllabus. They investigate why a statutory provision exists, examine how international arbitration resolves disputes, and actively study legal developments in Rwanda and the EAC.',
      assessmentMethod: 'Evaluated through candidate essay on a specific Rwandan legal challenge and self-directed reading interests.',
    },
    {
      name: 'Integrity & Professional Judgment',
      weight: '5%',
      weightNum: 5,
      icon: Compass,
      question: 'Can they be trusted with ethical responsibility?',
      summary: 'An unshakeable ethical spine, confidentiality, and sound moral judgment.',
      detail:
        'Legal brilliance without integrity is hazardous to clients and the republic. We look for candidates who honor confidentiality, respect truth, and cannot be swayed by expediency or shortcuts.',
      assessmentMethod: 'Assessed through situational ethics questioning during interviews and confidential academic references.',
    },
    {
      name: 'Leadership & Service Mindset',
      weight: '5%',
      weightNum: 5,
      icon: HeartHandshake,
      question: 'Will they contribute to clients, communities, and the legal profession?',
      summary: 'A conviction that legal training carries a duty of service to society.',
      detail:
        'Indahiro Fellows lead by serving. Every fellow participates in supervised pro bono clinics, community legal education, and peer mentorship, contributing to Rwanda’s socioeconomic progress.',
      assessmentMethod: 'Demonstrated through community service, university leadership, and pro bono motivation.',
    },
  ];

  const currentCriterion = officialCriteria[selectedPillar];

  return (
    <section id="selection" className="py-24 bg-[#FAF8F4] text-[#1A1A1A] border-b border-[#E2DDD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Curatorial Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center space-x-3 mb-3">
            <span className="w-8 h-[1.5px] bg-[#C59B27]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#8F6E15] font-semibold">
              Official Admissions & Selection
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#0B1320] font-semibold tracking-tight">
            Who We Select
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 font-light leading-relaxed">
            The Indahiro Fellowship is an investment in human potential across Rwanda. We evaluate candidates through a standardized, transparent 8-dimension rubric totaling 100%.
          </p>
        </div>

        {/* The Core Level Playing Field Manifesto Banner */}
        <div className="bg-[#0B1320] text-white p-8 sm:p-12 rounded-2xl border border-stone-800 shadow-xl mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#C59B27]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-4xl relative z-10">
            <div className="flex items-center space-x-2 text-[#E8C568] text-xs uppercase tracking-widest font-mono mb-4">
              <span>The Indahiro Selection Philosophy · Level Playing Field</span>
            </div>
            <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-serif italic text-white leading-relaxed font-light">
              &ldquo;Indahiro is designed to identify potential, not simply reward the highest test scores or students who already had the greatest exposure or internship privileges.&rdquo;
            </blockquote>

            <div className="mt-8 pt-6 border-t border-stone-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xs text-stone-400">Inaugural Cohort Allocation:</span>
                <span className="text-xs font-mono font-bold text-[#E8C568] px-3 py-1 bg-[#1A2638] rounded border border-[#2B3E5E]">
                  Strictly 10 Fellows Nationwide (Highly Selective)
                </span>
                <span className="text-xs font-mono text-stone-400">
                  · Total Rubric: 100%
                </span>
              </div>
              <Link
                to="/apply"
                className="text-xs font-semibold uppercase tracking-wider text-[#0B1320] bg-gradient-to-r from-[#F7D875] to-[#C59B27] hover:brightness-105 px-6 py-2.5 rounded shadow-sm transition-all self-start sm:self-auto cursor-pointer inline-block"
              >
                Submit Application
              </Link>
            </div>
          </div>
        </div>

        {/* The 8 Official Selection Criteria (100% Total) */}
        <div>
          <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h3 className="text-xs uppercase tracking-widest text-[#8F6E15] font-semibold mb-1">
                Official Selection Criteria & Weights (100% Total)
              </h3>
              <p className="text-2xl font-serif font-semibold text-[#0B1320]">
                Eight Dimensions of Comprehensive Evaluation
              </p>
            </div>
            <div className="text-xs font-mono text-stone-600 bg-white px-3.5 py-1.5 rounded-full border border-stone-300 shadow-2xs self-start md:self-auto">
              Sum of Weights = <span className="font-bold text-[#8F6E15]">100%</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left 7 Columns: Grid of 8 Criteria */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {officialCriteria.map((crit, idx) => {
                const IconComponent = crit.icon;
                const isSelected = selectedPillar === idx;
                return (
                  <button
                    key={crit.name}
                    onClick={() => setSelectedPillar(idx)}
                    className={`p-4 text-left rounded-xl border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#0B1320] text-white border-[#C59B27] shadow-md ring-1 ring-[#C59B27]/40'
                        : 'bg-white text-stone-900 border-[#E2DDD3] hover:border-stone-400 hover:bg-[#FAF8F5]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <IconComponent className={`w-4 h-4 ${isSelected ? 'text-[#E8C568]' : 'text-[#8F6E15]'}`} />
                        <span className="text-xs font-bold tracking-tight">{crit.name}</span>
                      </div>
                      <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                        isSelected ? 'bg-[#E2B742] text-[#0B1320]' : 'bg-[#F2EDE2] text-[#8F6E15]'
                      }`}>
                        {crit.weight}
                      </span>
                    </div>
                    <p className={`text-[11px] font-medium italic mb-1.5 ${isSelected ? 'text-[#F7D875]' : 'text-stone-700'}`}>
                      &ldquo;{crit.question}&rdquo;
                    </p>
                    <p className={`text-xs leading-relaxed line-clamp-2 ${isSelected ? 'text-stone-300' : 'text-stone-600'}`}>
                      {crit.summary}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Right 5 Columns: Active Criterion Deep Dive Card */}
            <div className="lg:col-span-5 bg-white rounded-xl border border-[#E2DDD3] p-8 shadow-sm">
              <div className="flex items-center justify-between text-xs font-mono text-[#8F6E15] uppercase tracking-wider mb-2">
                <span>Criterion · {String(selectedPillar + 1).padStart(2, '0')} of 08</span>
                <span className="font-bold bg-[#FAF6EE] text-[#8F6E15] px-2.5 py-0.5 rounded border border-[#EAE5DB]">
                  Weight: {currentCriterion.weight}
                </span>
              </div>

              <h4 className="text-2xl font-serif font-bold text-[#0B1320] mb-2 flex items-center gap-2">
                {currentCriterion.name}
              </h4>

              <div className="p-4 bg-[#F8F6F0] rounded-lg border border-[#EAE5DB] mb-5">
                <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 block mb-1">
                  Core Evaluation Question
                </span>
                <p className="text-sm font-serif italic font-medium text-[#0B1320] leading-relaxed">
                  &ldquo;{currentCriterion.question}&rdquo;
                </p>
              </div>

              <div className="space-y-4 text-xs text-stone-700 leading-relaxed">
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-stone-500 block mb-1">
                    What Indahiro Looks For
                  </span>
                  <p>{currentCriterion.detail}</p>
                </div>

                <div className="pt-3 border-t border-stone-200">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-stone-500 block mb-1">
                    How This Is Assessed
                  </span>
                  <p className="text-stone-600">
                    {currentCriterion.assessmentMethod}
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-stone-200">
                <div className="p-3.5 bg-[#0B1320] text-stone-200 rounded-lg text-[11px] flex items-center justify-between">
                  <span className="text-stone-400">Cohort I Commitment:</span>
                  <span className="text-[#E8C568] font-bold">10 Fellows · Fully Supported</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
