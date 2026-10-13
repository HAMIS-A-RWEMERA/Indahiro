import React from 'react';
import { Link } from 'react-router-dom';
import { FellowsSection } from '../components/FellowsSection';
import { AlumniVisionSection } from '../components/AlumniVisionSection';
import { PartnersSection } from '../components/PartnersSection';
import { ArrowRight, Building } from 'lucide-react';

export const FellowsPage: React.FC = () => {
  return (
    <div className="bg-[#FAF8F5]">
      {/* Page Hero Header */}
      <div className="bg-[#0B0D11] text-white pt-16 pb-20 border-b border-[#1E2330]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3 mb-4">
            <span className="w-8 h-[2px] bg-[#E2B742]" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#F7D875]">
              Directory & Alumni Horizon
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight max-w-3xl">
            Cohort I Fellows & Alumni
          </h1>
          <p className="mt-4 text-base sm:text-lg text-stone-300 max-w-2xl font-light leading-relaxed">
            The first generation of Indahiro Fellows—representing universities across Rwanda and building an enduring alumni network of legal excellence.
          </p>
          <div className="mt-6 flex items-center space-x-4 text-xs font-mono text-stone-400">
            <span className="text-[#E2B742] font-semibold">Inaugural Cohort of 10</span>
            <span>·</span>
            <span>100 Alumni Across Rwanda by 2036</span>
          </div>
        </div>
      </div>

      {/* 1. Fellows Directory */}
      <FellowsSection />

      {/* 2. Alumni Vision */}
      <AlumniVisionSection />

      {/* 3. Institutional Partners */}
      <PartnersSection />

      {/* Page Bottom CTA */}
      <div className="bg-[#10141D] text-white py-14 border-t border-[#1F2636]">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
          <span className="text-xs uppercase font-mono tracking-widest text-[#E8C568]">
            Admissions Invitation
          </span>
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
            Will Your Profile Be in the Next Directory?
          </h3>
          <p className="text-xs sm:text-sm text-stone-300 max-w-xl mx-auto font-light">
            If you are a driven law student in Rwanda ready for intensive training, submit your application for the fellowship.
          </p>
          <div className="pt-2">
            <Link
              to="/apply"
              className="px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-[#0B0D11] bg-gradient-to-r from-[#F7D875] to-[#E2B742] hover:brightness-105 rounded shadow-lg transition-all inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Apply for Fellowship</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
