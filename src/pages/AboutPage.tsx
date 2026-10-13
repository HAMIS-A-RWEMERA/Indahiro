import React from 'react';
import { Link } from 'react-router-dom';
import { AboutSection } from '../components/AboutSection';
import { ArrowRight, Sparkles } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="bg-[#FAF8F5]">
      {/* Page Hero Header */}
      <div className="bg-[#0B0D11] text-white pt-16 pb-20 border-b border-[#1E2330]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3 mb-4">
            <span className="w-8 h-[2px] bg-[#E2B742]" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#F7D875]">
              Institutional Charter
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight max-w-3xl">
            About the Indahiro Fellowship
          </h1>
          <p className="mt-4 text-base sm:text-lg text-stone-300 max-w-2xl font-light leading-relaxed">
            Rwanda&apos;s national initiative dedicated to closing the gap between university legal doctrine and practical courtroom competence.
          </p>
          <div className="mt-6 flex items-center space-x-4 text-xs font-mono text-stone-400">
            <span className="text-[#E2B742] font-semibold">Vision · Mission · 7 Official Objectives</span>
            <span>·</span>
            <span>Kigali, Rwanda</span>
          </div>
        </div>
      </div>

      {/* Main Full Section Content */}
      <AboutSection />

      {/* Page Bottom CTA */}
      <div className="bg-[#10141D] text-white py-14 border-t border-[#1F2636]">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
          <span className="text-xs uppercase font-mono tracking-widest text-[#E8C568]">
            Next Step
          </span>
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
            Ready to Explore the Practice Crucible?
          </h3>
          <p className="text-xs sm:text-sm text-stone-300 max-w-xl mx-auto font-light">
            Review the three-stage curriculum fellows undergo, from cohort covenant to appellate courtroom moots.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/journey"
              className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#0B0D11] bg-[#E2B742] hover:bg-[#F7D875] rounded transition-colors flex items-center gap-2"
            >
              <span>Explore The Journey</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              to="/apply"
              className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-stone-300 hover:text-white bg-[#181D2A] border border-[#2D364A] rounded transition-colors"
            >
              <span>Apply for Cohort I</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
