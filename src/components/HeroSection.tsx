import React from 'react';
import { ArrowRight, BookOpen, Scale, Users } from 'lucide-react';
import heroImage from '../assets/images/hero_rwanda_legal_chamber_1791195818978.jpg';
import { Logo } from './Logo';

interface HeroSectionProps {
  onOpenApplication: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenApplication }) => {
  return (
    <section className="relative bg-[#0B0D11] text-white overflow-hidden">
      {/* Visual Background with Curatorial Contrast Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Supreme Court chamber in Kigali Rwanda"
          className="w-full h-full object-cover object-center opacity-25 mix-blend-luminosity scale-105 transform motion-safe:transition-transform motion-safe:duration-1000"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D11] via-[#0B0D11]/85 to-[#0B0D11]/50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#E2B742]/15 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 md:pt-24 md:pb-32">
        
        {/* Institutional Pre-heading */}
        <div className="flex items-center space-x-3 mb-6">
          <span className="w-8 h-[2px] bg-gradient-to-r from-[#F7D875] to-[#E2B742]" />
          <p className="text-xs uppercase tracking-[0.28em] text-[#F7D875] font-semibold font-mono">
            Republic of Rwanda · National Legal Excellence Initiative
          </p>
        </div>

        {/* Hero Title Lockup with Emblem Accent */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-8 max-w-3xl">
            <h1 className="tracking-tight text-white leading-none">
              <span className="block font-sans font-black text-white text-5xl sm:text-7xl lg:text-8xl tracking-[0.12em] mb-2 uppercase">
                INDAHIRO
              </span>
              <span className="block font-sans text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-[0.2em] text-[#E2B742] mb-4">
                Fellowship
              </span>
              <span className="text-xl sm:text-3xl lg:text-4xl font-light text-stone-200 block font-serif-heading">
                A National Fellowship for Rwanda&apos;s Law Students
              </span>
            </h1>

            {/* Core Philosophy Quote */}
            <p className="mt-6 text-xl sm:text-2xl text-[#F7D875] font-serif italic max-w-2xl font-light leading-relaxed">
              &ldquo;From understanding the law to knowing how to use it.&rdquo;
            </p>

            <p className="mt-5 text-base sm:text-lg text-stone-300 max-w-2xl leading-relaxed font-light">
              Indahiro bridges the gap between doctrinal legal education and elite practical readiness. 
              An intensive, merit-based fellowship preparing Rwanda&apos;s most promising legal minds for 
              courtrooms, chambers, prosecution desks, and international arbitration.
            </p>

            {/* Two Prominent Action Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenApplication}
                className="px-8 py-4 text-xs font-bold tracking-widest uppercase text-[#0B0D11] bg-gradient-to-r from-[#F7D875] via-[#E2B742] to-[#D5A52A] hover:brightness-105 rounded shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Apply for the Fellowship</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="#about"
                className="px-8 py-4 text-xs font-semibold tracking-wider uppercase text-stone-200 hover:text-white bg-[#141720]/90 hover:bg-[#1E2330] border border-[#2D3344] rounded transition-all text-center flex items-center justify-center gap-2"
              >
                <span>Explore Indahiro</span>
              </a>
            </div>
          </div>

          {/* Right Column: Hero Visual Monogram Badge */}
          <div className="hidden lg:flex lg:col-span-4 justify-center items-center">
            <div className="p-8 rounded-2xl bg-gradient-to-b from-[#151821] to-[#0E1015] border border-[#2C3140] shadow-2xl relative group">
              <div className="absolute inset-0 bg-[#E2B742]/5 rounded-2xl blur-xl" />
              <div className="relative z-10 flex flex-col items-center text-center">
                <Logo variant="dark" mode="mark" size="xl" className="w-36 h-36" />
                <div className="mt-4 pt-3 border-t border-stone-800 w-full">
                  <span className="text-white font-sans font-black tracking-[0.16em] uppercase text-sm block">
                    INDAHIRO
                  </span>
                  <span className="text-[#E2B742] font-sans tracking-[0.24em] uppercase text-[10px] font-semibold block">
                    Fellowship
                  </span>
                  <p className="text-[10px] text-stone-400 font-mono mt-1.5">
                    EST. KIGALI, RWANDA
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* The 3 Immediate Questions Section */}
        <div className="mt-20 pt-12 border-t border-stone-800/80 grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="p-6 bg-[#11141B]/90 rounded-lg border border-[#202532] hover:border-[#E2B742]/40 transition-colors">
            <div className="flex items-center space-x-3 mb-3">
              <span className="p-2 bg-[#E2B742]/10 text-[#E2B742] rounded">
                <Scale className="w-5 h-5" />
              </span>
              <h2 className="text-lg font-serif text-white font-medium">1. What is Indahiro?</h2>
            </div>
            <p className="text-sm text-stone-300 leading-relaxed font-light">
              Rwanda&apos;s premier practical legal fellowship. A year-long, fully immersive program providing selected law students with intensive moot court advocacy, senior practitioner mentorship, courtroom shadowing, and real-world legal clinics.
            </p>
          </div>

          <div className="p-6 bg-[#11141B]/90 rounded-lg border border-[#202532] hover:border-[#E2B742]/40 transition-colors">
            <div className="flex items-center space-x-3 mb-3">
              <span className="p-2 bg-[#E2B742]/10 text-[#E2B742] rounded">
                <Users className="w-5 h-5" />
              </span>
              <h2 className="text-lg font-serif text-white font-medium">2. Who is it for?</h2>
            </div>
            <p className="text-sm text-stone-300 leading-relaxed font-light">
              Ambitious law students enrolled in Rwandan universities (UR, ULK, UNILAK, INES) who possess disciplined intellectual curiosity, competitive grit, integrity, and the drive to excel at the highest echelons of the legal profession.
            </p>
          </div>

          <div className="p-6 bg-[#11141B]/90 rounded-lg border border-[#202532] hover:border-[#E2B742]/40 transition-colors">
            <div className="flex items-center space-x-3 mb-3">
              <span className="p-2 bg-[#E2B742]/10 text-[#E2B742] rounded">
                <BookOpen className="w-5 h-5" />
              </span>
              <h2 className="text-lg font-serif text-white font-medium">3. Why should a law student care?</h2>
            </div>
            <p className="text-sm text-stone-300 leading-relaxed font-light">
              Because a high GPA alone does not teach you how to survive an aggressive judicial bench or draft client-ready pleadings. Indahiro provides the verified practical credibility and network that guarantees day-one professional readiness.
            </p>
          </div>

        </div>

      </div>

      {/* The Foundational Philosophy Bar */}
      <div className="bg-[#07090C] border-t border-b border-[#1A1E27] py-8 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="space-y-1">
            <p className="text-stone-400 text-sm sm:text-base tracking-wide font-light">
              &ldquo;Law school teaches you what the law says.&rdquo;
            </p>
            <p className="text-xl sm:text-2xl text-[#F7D875] font-serif font-medium tracking-wide">
              &ldquo;Indahiro prepares you to use it.&rdquo;
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

