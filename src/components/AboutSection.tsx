import React from 'react';
import { ArrowRight, CheckCircle2, AlertTriangle, ShieldCheck, Compass, GraduationCap, Briefcase } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#F8F6F0] text-[#1A1A1A] border-b border-[#E5E0D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Curatorial Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center space-x-3 mb-3">
            <span className="w-6 h-[1.5px] bg-[#C59B27]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#8F6E15] font-semibold">
              The Institutional Problem
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#0F172A] font-semibold tracking-tight">
            Bridging the Chasm Between the Classroom and the Courtroom
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed font-light">
            Every year, Rwanda’s law faculties graduate exceptionally gifted students with high marks in constitutional law, jurisprudence, and civil obligations. Yet on their first day in practice, they confront an uncomfortable truth: academic mastery is not practical competence.
          </p>
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
