import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Scale,
  Users,
  Award,
  BookOpen,
  Compass,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Building,
} from 'lucide-react';
import heroImage from '../assets/images/hero_rwanda_legal_chamber_1791195818978.jpg';
import { Logo } from '../components/Logo';

export const HomePage: React.FC = () => {
  const pillars = [
    {
      title: 'About Indahiro',
      subtitle: 'Mission, Vision & 7 Objectives',
      description:
        'Bridging the chasm between classroom theory and elite courtroom advocacy across Rwanda. Investing in human potential to build lawyers capable of competing anywhere.',
      link: '/about',
      linkText: 'Explore Mission & Objectives',
      icon: Scale,
      tag: 'Foundational Charter',
    },
    {
      title: 'The Fellowship Journey',
      subtitle: 'The Three-Stage Crucible',
      description:
        'A year-long, intensive journey: Stage 01 Orientation & Foundations, Stage 02 The Practice Year, and Stage 03 The Culmination with appellate moots and legal aid clinics.',
      link: '/journey',
      linkText: 'View Curriculum & Stages',
      icon: Compass,
      tag: 'Practice Curriculum',
    },
    {
      title: 'Who We Select',
      subtitle: '8 Criteria & Level Playing Field',
      description:
        'Strictly 10 fellows nationwide for the inaugural cohort. Standardized 100% rubric evaluating potential, reasoning, and ethics—without penalizing lack of prior international exposure.',
      link: '/selection',
      linkText: 'Inspect Selection Rubric',
      icon: Award,
      tag: '100% Rubric & Scope',
    },
    {
      title: 'Mentors & Jurists',
      subtitle: 'Ecosystem Across Bar & Bench',
      description:
        '1-on-1 mentorship pairings with senior advocates from Rwanda Bar Association, appellate judges, state prosecutors (NPPA), and renowned legal academics.',
      link: '/mentors',
      linkText: 'Meet Our Mentors',
      icon: Users,
      tag: '1:1 Practitioner Pairing',
    },
    {
      title: 'Cohort I Fellows',
      subtitle: 'Directory & Alumni Vision',
      description:
        'Meet the law students shaping the inaugural fellowship across Rwandan universities, and learn about the 10-year vision to place 100 leaders in Rwanda’s justice sector.',
      link: '/fellows',
      linkText: 'Explore Fellow Profiles',
      icon: Building,
      tag: 'Inaugural Directory',
    },
    {
      title: 'Legal Gazette',
      subtitle: 'Research, Moots & Reflections',
      description:
        'Scholarly commentaries, appellate moot court briefs, courtroom observation accounts, and practical insights published by fellows and mentors.',
      link: '/journal',
      linkText: 'Read Legal Gazette',
      icon: BookOpen,
      tag: 'Publications & Insights',
    },
  ];

  return (
    <div className="bg-[#FAF8F5] text-[#1A1A1A]">
      
      {/* 1. Concise, Atmospheric Hero Section */}
      <section className="relative bg-[#0B0D11] text-white overflow-hidden">
        {/* Background Scrim */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Supreme Court chamber in Kigali Rwanda"
            className="w-full h-full object-cover object-center opacity-25 mix-blend-luminosity scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D11] via-[#0B0D11]/85 to-[#0B0D11]/50" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#E2B742]/15 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 md:pt-24 md:pb-28">
          
          {/* Institutional Pre-heading */}
          <div className="flex items-center space-x-3 mb-6">
            <span className="w-8 h-[2px] bg-gradient-to-r from-[#F7D875] to-[#E2B742]" />
            <p className="text-xs uppercase tracking-[0.28em] text-[#F7D875] font-semibold font-mono">
              Republic of Rwanda · National Legal Excellence Initiative
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 max-w-3xl">
              <h1 className="tracking-tight text-white leading-none">
                <span className="block font-sans font-black text-white text-5xl sm:text-7xl lg:text-8xl tracking-[0.12em] mb-2 uppercase">
                  INDAHIRO
                </span>
                <span className="block font-sans text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-[0.2em] text-[#E2B742] mb-3">
                  Fellowship
                </span>
                <span className="text-xl sm:text-2xl lg:text-3xl font-light text-stone-200 block font-serif">
                  A National Fellowship for Rwanda&apos;s Law Students
                </span>
              </h1>

              {/* Core Philosophy Quote */}
              <p className="mt-5 text-xl sm:text-2xl text-[#F7D875] font-serif italic max-w-2xl font-light leading-relaxed">
                &ldquo;From understanding the law to knowing how to use it.&rdquo;
              </p>

              <p className="mt-4 text-sm sm:text-base text-stone-300 max-w-2xl leading-relaxed font-light">
                To build a generation of exceptional legal professionals who uphold justice, lead with integrity, and can compete anywhere in the world. 
                Selecting <strong className="text-white font-medium">strictly 10 fellows</strong> for Rwanda&apos;s inaugural cohort.
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  to="/apply"
                  className="px-8 py-3.5 text-xs font-bold tracking-widest uppercase text-[#0B0D11] bg-gradient-to-r from-[#F7D875] via-[#E2B742] to-[#D5A52A] hover:brightness-105 rounded shadow-lg transition-all flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <span>Apply for Fellowship</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/about"
                  className="px-8 py-3.5 text-xs font-semibold tracking-wider uppercase text-stone-200 hover:text-white bg-[#141720]/90 hover:bg-[#1E2330] border border-[#2D3344] rounded transition-all text-center flex items-center justify-center gap-2"
                >
                  <span>Explore Indahiro</span>
                </Link>
              </div>
            </div>

            {/* Monogram Badge */}
            <div className="hidden lg:flex lg:col-span-4 justify-center items-center">
              <div className="p-8 rounded-2xl bg-gradient-to-b from-[#151821] to-[#0E1015] border border-[#2C3140] shadow-2xl relative">
                <div className="absolute inset-0 bg-[#E2B742]/5 rounded-2xl blur-xl" />
                <div className="relative z-10 flex flex-col items-center text-center">
                  <Logo variant="dark" mode="mark" size="xl" className="w-32 h-32" />
                  <div className="mt-4 pt-3 border-t border-stone-800 w-full">
                    <span className="text-white font-sans font-black tracking-[0.16em] uppercase text-sm block">
                      INDAHIRO
                    </span>
                    <span className="text-[#E2B742] font-sans tracking-[0.24em] uppercase text-[10px] font-semibold block">
                      Fellowship
                    </span>
                    <p className="text-[10px] text-stone-400 font-mono mt-1">
                      KIGALI, RWANDA
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Key Facts Strip */}
          <div className="mt-14 pt-8 border-t border-stone-800/80 grid grid-cols-2 md:grid-cols-4 gap-4 text-xs font-mono">
            <div className="p-4 bg-[#11141B]/80 rounded-lg border border-[#202532]">
              <span className="text-xl sm:text-2xl font-bold text-[#E8C568] block">10</span>
              <span className="text-stone-400">Fellows In First Cohort</span>
            </div>
            <div className="p-4 bg-[#11141B]/80 rounded-lg border border-[#202532]">
              <span className="text-xl sm:text-2xl font-bold text-white block">1 : 1</span>
              <span className="text-stone-400">Senior Mentor Pairing</span>
            </div>
            <div className="p-4 bg-[#11141B]/80 rounded-lg border border-[#202532]">
              <span className="text-xl sm:text-2xl font-bold text-[#E8C568] block">100%</span>
              <span className="text-stone-400">Fully Funded Fellowship</span>
            </div>
            <div className="p-4 bg-[#11141B]/80 rounded-lg border border-[#202532]">
              <span className="text-xl sm:text-2xl font-bold text-white block">12 Mo</span>
              <span className="text-stone-400">Intensive Practice Crucible</span>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Official Vision Statement Banner */}
      <section className="bg-[#08090C] border-b border-[#1E2330] py-10 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center space-y-3">
          <span className="text-xs uppercase font-mono tracking-widest text-[#E8C568]">
            The Official Vision of Indahiro Fellowship
          </span>
          <blockquote className="text-xl sm:text-2xl md:text-3xl text-white font-serif italic leading-relaxed font-light">
            &ldquo;To build a generation of exceptional legal professionals who uphold justice, lead with integrity, and can compete anywhere in the world.&rdquo;
          </blockquote>
          <p className="text-xs text-stone-400 font-light">
            Mandated to develop Rwanda&apos;s legal talent for domestic courtrooms, regional tribunals, and international arbitral forums.
          </p>
        </div>
      </section>

      {/* 3. Fellowship Pillars & Multi-Page Hub (Mandela Washington Fellowship Style) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="flex items-center justify-center space-x-3 mb-3">
            <span className="w-8 h-[1.5px] bg-[#C59B27]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#8F6E15] font-semibold">
              The Fellowship Architecture
            </span>
            <span className="w-8 h-[1.5px] bg-[#C59B27]" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#0B1320] font-semibold tracking-tight">
            Explore the Fellowship by Subject
          </h2>
          <p className="mt-3 text-sm text-stone-600 font-light max-w-2xl mx-auto">
            Review detailed information across our dedicated pages—from official objectives and curriculum stages to criteria rubrics and mentor profiles.
          </p>
        </div>

        {/* 6 Clean Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar) => {
            const IconComp = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="bg-white rounded-xl border border-[#E2DDD3] p-7 shadow-xs hover:border-[#C59B27] hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#8F6E15] bg-[#F7F4EC] px-2.5 py-1 rounded">
                      {pillar.tag}
                    </span>
                    <div className="p-2 rounded bg-[#FAF6EE] text-[#8F6E15] group-hover:bg-[#0B1320] group-hover:text-[#E8C568] transition-colors">
                      <IconComp className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-xl font-serif font-bold text-[#0B1320] mb-1">
                    {pillar.title}
                  </h3>
                  <span className="text-xs font-mono text-[#8F6E15] block mb-3 font-semibold">
                    {pillar.subtitle}
                  </span>
                  <p className="text-xs text-stone-600 leading-relaxed font-light mb-6">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-100">
                  <Link
                    to={pillar.link}
                    className="text-xs font-semibold text-[#0B1320] hover:text-[#8F6E15] flex items-center justify-between group/link"
                  >
                    <span>{pillar.linkText}</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Quick Level Playing Field Callout */}
      <section className="bg-[#F2EDE2] border-t border-b border-[#DFD6C5] py-14 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center space-x-2 text-xs font-mono text-[#8F6E15] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Admissions Philosophy</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#0B1320]">
            An Investment in Human Potential Across Rwanda
          </h3>
          <p className="text-sm text-stone-700 max-w-2xl mx-auto leading-relaxed font-light">
            Indahiro is intentionally designed to identify potential, not simply reward students who already had the greatest exposure or internship privileges. Open to enrolled law students across UR, University of Kigali, Mount Kigali University, ULK, UNILAK, and INES Ruhengeri.
          </p>
          <div className="pt-2">
            <Link
              to="/selection"
              className="text-xs font-semibold uppercase tracking-wider text-[#0B1320] hover:text-[#8F6E15] underline decoration-[#8F6E15]/50 underline-offset-4"
            >
              Review the 8 Official Selection Criteria (100% Total) →
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Clean Action Banner Leading Directly to Dedicated Application Page */}
      <section className="py-20 px-4 sm:px-6 bg-[#0B0D11] text-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="text-xs uppercase font-mono tracking-widest text-[#E8C568] block">
            Cohort I Admissions Open
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight text-white">
            Ready to Bridge the Gap to Elite Legal Practice?
          </h2>
          <p className="text-sm sm:text-base text-stone-300 max-w-2xl mx-auto font-light leading-relaxed">
            The admissions portal is now accepting candidate dossiers for the inaugural cohort of 10 fellows. Complete your submission online or review full eligibility requirements.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              to="/apply"
              className="px-8 py-4 text-xs font-bold tracking-widest uppercase text-[#0B0D11] bg-gradient-to-r from-[#F7D875] via-[#E2B742] to-[#D5A52A] hover:brightness-105 rounded shadow-xl transition-all flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Go to Application Portal</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/selection"
              className="px-8 py-4 text-xs font-semibold tracking-wider uppercase text-stone-300 hover:text-white bg-[#141824] hover:bg-[#1C2234] border border-[#2B3448] rounded transition-all"
            >
              <span>View Eligibility & Dates</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
