import React from 'react';
import {
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  ShieldCheck,
  Compass,
  GraduationCap,
  Briefcase,
  Target,
  Globe,
  Award,
  Scale,
  Users2,
  HeartHandshake,
  Sparkles,
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  const officialObjectives = [
    {
      num: '01',
      title: 'Bridge the gap between legal education and legal practice',
      desc: 'Equip law students with practical competencies that complement academic legal education, including legal research, drafting, advocacy, negotiation, professional ethics, and client engagement.',
      icon: Scale,
    },
    {
      num: '02',
      title: 'Develop exceptional legal practitioners',
      desc: 'Identify students with strong potential and provide them with intensive training designed to develop the competence, discipline, judgment, and confidence required for legal practice.',
      icon: Award,
    },
    {
      num: '03',
      title: 'Provide meaningful professional exposure',
      desc: 'Connect fellows with practising advocates, prosecutors, judges, academics, and other legal professionals through mentorship, courtroom visits, legal clinics, internships, and professional events.',
      icon: Briefcase,
    },
    {
      num: '04',
      title: 'Build a culture of excellence and healthy competition',
      desc: 'Prepare fellows to compete at national, regional, and international levels through moot court, debate, advocacy, and other professional challenges.',
      icon: Target,
    },
    {
      num: '05',
      title: 'Strengthen access to justice and public service',
      desc: 'Give fellows opportunities to contribute through supervised pro bono work, legal clinics, community legal education, and other initiatives that connect legal training to real societal needs.',
      icon: HeartHandshake,
    },
    {
      num: '06',
      title: 'Create an international network of emerging legal professionals',
      desc: 'Build a strong alumni community that continues to provide mentorship, collaboration, opportunities, and professional connections beyond the fellowship and the nation.',
      icon: Globe,
    },
    {
      num: '07',
      title: 'Promote integrity in the next generation of legal professionals',
      desc: 'Instill professional ethics, responsibility, discipline, and sound judgment as fundamental components of legal excellence.',
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="about" className="py-24 bg-[#F8F6F0] text-[#1A1A1A] border-b border-[#E5E0D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Curatorial Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center space-x-3 mb-3">
            <span className="w-6 h-[1.5px] bg-[#C59B27]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#8F6E15] font-semibold">
              The Institutional Foundation
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#0F172A] font-semibold tracking-tight">
            Bridging the Chasm Between the Classroom and the Courtroom
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed font-light">
            Every year, Rwanda’s law faculties graduate exceptionally gifted students with high marks in constitutional law, jurisprudence, and civil obligations. Yet on their first day in practice, they confront an uncomfortable truth: academic mastery is not practical competence. Indahiro invests in human potential to build a generation capable of competing at the highest levels.
          </p>
        </div>

        {/* Official Vision & Mission Mandate Card (Word-for-Word) */}
        <div className="mb-20 bg-[#0B1320] text-white rounded-2xl border border-stone-800 shadow-xl overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C59B27]/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="p-8 sm:p-12 lg:p-14 relative z-10">
            <div className="flex items-center space-x-2 text-[#E8C568] text-xs uppercase tracking-widest font-mono mb-6">
              <Sparkles className="w-4 h-4 text-[#C59B27]" />
              <span>Official Institutional Charter</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
              
              {/* Official Vision */}
              <div className="space-y-4 border-b lg:border-b-0 lg:border-r border-stone-800 pb-8 lg:pb-0 lg:pr-10">
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#C59B27] block font-semibold">
                  OUR OFFICIAL VISION
                </span>
                <blockquote className="text-xl sm:text-2xl font-serif italic text-white leading-relaxed font-normal">
                  &ldquo;To build a generation of exceptional legal professionals who uphold justice, lead with integrity, and can compete anywhere in the world.&rdquo;
                </blockquote>
                <p className="text-xs text-stone-400 font-light leading-relaxed pt-2">
                  Preparing Rwandan legal practitioners to command respects in national courts, regional tribunals (EACJ), and international arbitral forums.
                </p>
              </div>

              {/* Official Mission */}
              <div className="space-y-4">
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#C59B27] block font-semibold">
                  OUR OFFICIAL MISSION
                </span>
                <blockquote className="text-xl sm:text-2xl font-serif italic text-white leading-relaxed font-normal">
                  &ldquo;To identify, develop, and connect Rwanda’s most exceptional promising law students through rigorous practical training, mentorship, professional exposure, and a culture of excellence and service.&rdquo;
                </blockquote>
                <p className="text-xs text-stone-400 font-light leading-relaxed pt-2">
                  A high-intensity, year-long incubator that translates raw academic aptitude into verified forensic, drafting, and advocacy acumen.
                </p>
              </div>

            </div>

            {/* Core Scope & Level Playing Field Banner */}
            <div className="mt-10 pt-8 border-t border-stone-800 grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-stone-300">
              <div className="bg-[#121B29] p-4 rounded-lg border border-[#1E2E44]">
                <span className="text-[#E8C568] font-mono uppercase tracking-wider block font-semibold mb-1">
                  Target Audience
                </span>
                <p className="text-stone-300 font-light leading-relaxed">
                  Rwanda&apos;s most exceptional and promising law students across all recognized law faculties in the country.
                </p>
              </div>

              <div className="bg-[#121B29] p-4 rounded-lg border border-[#1E2E44]">
                <span className="text-[#E8C568] font-mono uppercase tracking-wider block font-semibold mb-1">
                  Inaugural Cohort Limit
                </span>
                <p className="text-stone-300 font-light leading-relaxed">
                  Exactly <strong className="text-white font-medium">10 fellows</strong> for the first cohort—a highly selective, high-touch investment in transformative human capital.
                </p>
              </div>

              <div className="bg-[#121B29] p-4 rounded-lg border border-[#1E2E44]">
                <span className="text-[#E8C568] font-mono uppercase tracking-wider block font-semibold mb-1">
                  Level Playing Field
                </span>
                <p className="text-stone-300 font-light leading-relaxed">
                  Designed to produce talent capable of competing globally without penalizing students who lacked prior international exposure or privileged access.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* The 7 Official Objectives */}
        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h3 className="text-xs uppercase tracking-widest text-[#8F6E15] font-semibold mb-2">
              Strategic Pillars of Impact
            </h3>
            <p className="text-2xl sm:text-3xl font-serif text-[#0F172A] font-semibold">
              The Seven Official Objectives of Indahiro Fellowship
            </p>
            <p className="mt-3 text-sm text-stone-600 font-light max-w-2xl mx-auto">
              Mandated by leadership to establish an enduring, merit-based standard of legal excellence across Rwanda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {officialObjectives.slice(0, 6).map((obj) => {
              const IconComponent = obj.icon;
              return (
                <div
                  key={obj.num}
                  className="bg-white p-7 rounded-xl border border-[#E2DDD3] hover:border-[#C59B27]/70 transition-all shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono font-bold text-[#8F6E15] bg-[#F4EFE6] px-2.5 py-1 rounded">
                        OBJECTIVE {obj.num}
                      </span>
                      <div className="p-2 rounded bg-[#FAF6EE] text-[#8F6E15]">
                        <IconComponent className="w-4 h-4" />
                      </div>
                    </div>
                    <h4 className="text-base font-serif font-semibold text-[#0B1320] mb-2 leading-snug">
                      {obj.title}
                    </h4>
                    <p className="text-xs text-stone-600 font-light leading-relaxed">
                      {obj.desc}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* Objective 7 - Full width banner card */}
            <div className="md:col-span-2 lg:col-span-3 bg-gradient-to-r from-[#0B1320] to-[#121B2A] text-white p-7 sm:p-8 rounded-xl border border-stone-800 shadow-md flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-2 max-w-3xl">
                <div className="flex items-center space-x-3">
                  <span className="text-xs font-mono font-bold text-[#E8C568] bg-[#1E2E44] px-2.5 py-1 rounded border border-[#2B3E5E]">
                    OBJECTIVE 07
                  </span>
                  <span className="text-xs font-mono uppercase tracking-widest text-stone-400">
                    The Ethical Core
                  </span>
                </div>
                <h4 className="text-lg font-serif font-semibold text-white">
                  {officialObjectives[6].title}
                </h4>
                <p className="text-xs text-stone-300 font-light leading-relaxed">
                  {officialObjectives[6].desc}
                </p>
              </div>
              <div className="shrink-0 p-3 bg-[#1C283B] rounded-xl text-[#E8C568] border border-[#2C3E5A]">
                <ShieldCheck className="w-8 h-8 text-[#C59B27]" />
              </div>
            </div>

          </div>
        </div>

        {/* The Visual Gap Comparison */}
        <div className="mb-20 bg-white p-8 sm:p-12 rounded-xl border border-[#E2DDD3] shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-xs uppercase tracking-widest text-stone-500 font-semibold mb-2">
              The Educational Trajectory Comparison
            </h3>
            <p className="text-2xl font-serif text-[#0B1320] font-semibold">
              The Structural Paradigm Shift
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            
            {/* Traditional Path */}
            <div className="p-8 bg-[#FBF9F6] border border-stone-200 rounded-lg relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 left-0 right-0 h-1 bg-stone-300" />
              <div>
                <div className="flex items-center space-x-2 text-stone-600 text-xs font-semibold uppercase tracking-wider mb-4">
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                  <span>The Traditional University Pipeline</span>
                </div>
                
                <div className="py-6 flex items-center justify-between text-xs sm:text-sm font-medium text-stone-700">
                  <div className="text-center flex-1">
                    <span className="block font-semibold text-stone-900 text-sm sm:text-base">LAW SCHOOL</span>
                    <span className="text-[11px] text-stone-500">Doctrinal Lectures</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-stone-400 mx-2 shrink-0" />
                  <div className="text-center flex-1">
                    <span className="block font-semibold text-stone-900 text-sm sm:text-base">THEORY</span>
                    <span className="text-[11px] text-stone-500">Memorization</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-stone-400 mx-2 shrink-0" />
                  <div className="text-center flex-1">
                    <span className="block font-semibold text-stone-900 text-sm sm:text-base">GRADUATION</span>
                    <span className="text-[11px] text-stone-500">Practical Deficit</span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-stone-200 text-xs text-stone-600 space-y-2">
                  <p>• Heavy reliance on lecture dictation and static examinations</p>
                  <p>• Zero mandatory hours inside real courtroom chambers</p>
                  <p>• Pleading drafting taught in the abstract without judicial critique</p>
                  <p>• Graduates left to navigate pupillage and ILPD admissions alone</p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-200/80 text-[11px] text-stone-500 font-mono">
                OUTCOME: HIGH THEORETICAL LITERACY · UNPREPARED FOR ADVERSARIAL REALITY
              </div>
            </div>

            {/* The Indahiro Path */}
            <div className="p-8 bg-[#0B1320] text-white rounded-lg relative overflow-hidden flex flex-col justify-between shadow-md">
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#C59B27]" />
              <div>
                <div className="flex items-center space-x-2 text-[#E8C568] text-xs font-semibold uppercase tracking-wider mb-4">
                  <ShieldCheck className="w-4 h-4 text-[#C59B27]" />
                  <span>The Indahiro Fellowship Pipeline</span>
                </div>
                
                <div className="py-6 flex items-center justify-between text-xs sm:text-sm font-medium text-stone-200">
                  <div className="text-center flex-1">
                    <span className="block font-semibold text-white text-sm sm:text-base">INDAHIRO</span>
                    <span className="text-[11px] text-[#C59B27]">Rigorous Immersion</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#C59B27] mx-2 shrink-0" />
                  <div className="text-center flex-1">
                    <span className="block font-semibold text-white text-sm sm:text-base">PRACTICE</span>
                    <span className="text-[11px] text-[#C59B27]">Moots & Clinics</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#C59B27] mx-2 shrink-0" />
                  <div className="text-center flex-1">
                    <span className="block font-semibold text-white text-sm sm:text-base">READINESS</span>
                    <span className="text-[11px] text-[#C59B27]">Day-One Impact</span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-stone-800 text-xs text-stone-300 space-y-2">
                  <p className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C59B27] shrink-0" />
                    <span>30+ oral moot rounds judged by sitting jurists and senior advocates</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C59B27] shrink-0" />
                    <span>1-on-1 mentorship with recognized leaders of the Rwandan Bar & Bench</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C59B27] shrink-0" />
                    <span>Supervised legal aid clinic hours serving rural citizens & cooperatives</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C59B27] shrink-0" />
                    <span>Direct bridge to top law firm internships, ILPD, and judicial clerkships</span>
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-800 text-[11px] text-[#E8C568] font-mono">
                OUTCOME: COURTROOM POISE · ADVOCACY EXCELLENCE · UNCOMPROMISING INTEGRITY
              </div>
            </div>

          </div>
        </div>

        {/* The 4 Core Gaps Addressed by Indahiro */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-xs uppercase tracking-widest text-[#8F6E15] font-semibold mb-2">
              The Diagnostic Analysis
            </h3>
            <p className="text-2xl sm:text-3xl font-serif text-[#0F172A] font-semibold">
              The Four Gaps That Indahiro Resolves
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="p-6 bg-white rounded-lg border border-[#E2DDD3] hover:border-[#C59B27]/60 transition-all shadow-xs">
              <div className="w-10 h-10 rounded bg-[#F4EFE6] flex items-center justify-center text-[#8F6E15] mb-4">
                <Compass className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-serif font-semibold text-[#0B1320] mb-2">
                1. Moot Court Experience
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                Most students complete four years without writing a single competitive legal memorial or presenting oral submissions under judicial time limits. Indahiro embeds competition-grade mooting from week one.
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg border border-[#E2DDD3] hover:border-[#C59B27]/60 transition-all shadow-xs">
              <div className="w-10 h-10 rounded bg-[#F4EFE6] flex items-center justify-center text-[#8F6E15] mb-4">
                <Briefcase className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-serif font-semibold text-[#0B1320] mb-2">
                2. Practising Mentorship
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                Textbooks cannot teach how to manage an aggressive counterparty, handle client anxiety, or structure unwritten chamber etiquette. Each fellow is paired with an advocate, judge, or prosecutor who walks with them.
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg border border-[#E2DDD3] hover:border-[#C59B27]/60 transition-all shadow-xs">
              <div className="w-10 h-10 rounded bg-[#F4EFE6] flex items-center justify-center text-[#8F6E15] mb-4">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-serif font-semibold text-[#0B1320] mb-2">
                3. Courtroom Exposure
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                Entering a courtroom for the first time after graduation is an overwhelming shock. Indahiro facilitates structured observation inside the Supreme Court, Commercial High Court, and prosecution hearings.
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg border border-[#E2DDD3] hover:border-[#C59B27]/60 transition-all shadow-xs">
              <div className="w-10 h-10 rounded bg-[#F4EFE6] flex items-center justify-center text-[#8F6E15] mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-serif font-semibold text-[#0B1320] mb-2">
                4. Pathways to the Profession
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                Access to prestigious law firms, international arbitral institutions, and public justice roles shouldn’t depend solely on personal connections. Indahiro establishes a transparent merit pipeline for Rwanda’s top talent.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
