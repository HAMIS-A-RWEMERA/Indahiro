import React from 'react';
import { Link } from 'react-router-dom';
import { WhoWeSelectSection } from '../components/WhoWeSelectSection';
import { ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';

export const SelectionPage: React.FC = () => {
  return (
    <div className="bg-[#FAF8F4]">
      {/* Page Hero Header */}
      <div className="bg-[#0B0D11] text-white pt-16 pb-20 border-b border-[#1E2330]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3 mb-4">
            <span className="w-8 h-[2px] bg-[#E2B742]" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#F7D875]">
              Admissions Charter
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight max-w-3xl">
            Who We Select
          </h1>
          <p className="mt-4 text-base sm:text-lg text-stone-300 max-w-2xl font-light leading-relaxed">
            A standardized, merit-driven evaluation designed to identify human potential across Rwanda—not merely rewarding past privilege or exposure.
          </p>
          <div className="mt-6 flex items-center space-x-4 text-xs font-mono text-stone-400">
            <span className="text-[#E2B742] font-semibold">Strictly 10 Fellows</span>
            <span>·</span>
            <span>8 Official Evaluation Criteria · 100% Total Rubric</span>
          </div>
        </div>
      </div>

      {/* Main Who We Select Section */}
      <WhoWeSelectSection onOpenApplication={() => {}} />

      {/* Eligibility & University Scope Strip */}
      <section className="py-16 bg-white border-b border-[#E2DDD3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-[#8F6E15] font-semibold block mb-1">
              Eligibility Verification
            </span>
            <h3 className="text-2xl font-serif font-bold text-[#0B1320]">
              Candidate Qualifications & Universities
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-stone-700">
            <div className="p-6 bg-[#FAF8F5] rounded-xl border border-[#E2DDD3] space-y-3">
              <span className="font-serif font-bold text-base text-[#0B1320] block">
                Basic Requirements
              </span>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#8F6E15] shrink-0 mt-0.5" />
                  <span>Enrolled as an undergraduate law student (LL.B) in good academic standing.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#8F6E15] shrink-0 mt-0.5" />
                  <span>Demonstrated commitment to pursue active legal practice (advocacy, prosecution, judiciary, arbitration).</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#8F6E15] shrink-0 mt-0.5" />
                  <span>Ability to dedicate 12 to 15 hours weekly for fellowship deliverables alongside university courses.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#8F6E15] shrink-0 mt-0.5" />
                  <span>Commitment to complete pro bono legal aid clinics and community justice initiatives.</span>
                </li>
              </ul>
            </div>

            <div className="p-6 bg-[#FAF8F5] rounded-xl border border-[#E2DDD3] space-y-3">
              <span className="font-serif font-bold text-base text-[#0B1320] block">
                Eligible Rwandan Institutions
              </span>
              <p className="text-stone-600 font-light leading-relaxed">
                Applications are warmly welcomed from law faculties across all recognized institutions:
              </p>
              <div className="grid grid-cols-2 gap-2 font-mono text-[11px] pt-1">
                <span className="p-2 bg-white rounded border border-stone-200">• University of Rwanda (UR)</span>
                <span className="p-2 bg-white rounded border border-stone-200">• University of Kigali (UoK)</span>
                <span className="p-2 bg-white rounded border border-stone-200">• Mount Kigali University (MKU)</span>
                <span className="p-2 bg-white rounded border border-stone-200">• Kigali Ind. Univ. (ULK)</span>
                <span className="p-2 bg-white rounded border border-stone-200">• UNILAK Law School</span>
                <span className="p-2 bg-white rounded border border-stone-200">• INES Ruhengeri (Musanze)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Page Bottom CTA */}
      <div className="bg-[#10141D] text-white py-14">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
          <span className="text-xs uppercase font-mono tracking-widest text-[#E8C568]">
            Admissions Process
          </span>
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
            Take Your Place in Rwanda&apos;s First Cohort
          </h3>
          <p className="text-xs sm:text-sm text-stone-300 max-w-xl mx-auto font-light">
            Submit your dossier, case reasoning memorandum, and referee contact details through our application portal.
          </p>
          <div className="pt-2">
            <Link
              to="/apply"
              className="px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-[#0B0D11] bg-gradient-to-r from-[#F7D875] to-[#E2B742] hover:brightness-105 rounded shadow-lg transition-all inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Begin Application Process</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
