import React from 'react';
import { UserCheck, Shield, HeartHandshake, Eye, Briefcase, Award } from 'lucide-react';
import mentorDialogueImg from '../assets/images/fellowship_mentorship_dialogue_1791195863474.jpg';

export const WhatFellowsReceiveSection: React.FC = () => {
  const benefits = [
    {
      title: 'MENTORSHIP',
      icon: UserCheck,
      kicker: '1-on-1 Senior Practitioner Pairing',
      description:
        'Each fellow is paired with a practising advocate, prosecutor, judge, academic or legal practitioner. Your mentor is not an occasional guest speaker; they walk with you through chamber files, ethical dilemmas, and career milestones that textbooks cannot teach.',
      features: [
        'Direct access to senior advocates from Rwanda Bar Association',
        'Appellate bench mentorship with judges of the High Court & Supreme Court',
        'Prosecutorial trial strategy guidance with NPPA state attorneys',
      ],
    },
    {
      title: 'PRACTICAL TRAINING',
      icon: Award,
      kicker: 'Mooting, Research & Memorial Writing',
      description:
        'Intensive workshops in competitive mooting, oral advocacy, advanced legal research, and memorial drafting. Fellows train under the strict guidelines of international arbitrations and appellate courts.',
      features: [
        'Weekly oral simulations with timed judicial interruptions',
        'Mastery of IRAC/CRAC structural pleading architecture',
        'Fluency in the Integrated Electronic Case Management System (IECMS)',
      ],
    },
    {
      title: 'LEGAL CLINICS',
      icon: HeartHandshake,
      kicker: 'Supervised Pro Bono Service',
      description:
        'Supervised exposure to real community legal aid and citizen education. Fellows draft complaints, assist indigent litigants, and facilitate dispute resolution under the guidance of licensed counsel.',
      features: [
        'Minimum 60 hours of direct public interest legal aid clinic work',
        'Community legal education on land rights, succession, and family law',
        'Hands-on experience conducting real client intake and initial fact investigations',
      ],
    },
    {
      title: 'COURTROOM EXPOSURE',
      icon: Eye,
      kicker: 'Privileged Judicial Shadowing',
      description:
        'Structured observation of commercial, criminal, and constitutional proceedings. Fellows sit inside judicial chambers, analyze real-time cross-examinations, and debrief trial strategies with sitting jurists.',
      features: [
        'Dedicated observation seats in the Supreme Court and Commercial High Court',
        'Post-hearing analytical debriefs with presiding trial judges',
        'Immersion in judicial deliberation ethics and reasoning behind verdicts',
      ],
    },
    {
      title: 'CAREER ACCESS',
      icon: Briefcase,
      kicker: 'Direct Pathways into the Profession',
      description:
        'Direct connections to competitive internships, pupillage, and career placement in leading law firms, government legal directorates, international development agencies, and corporate legal departments.',
      features: [
        'Guaranteed interview fast-tracking with partner commercial law firms',
        'Dedicated preparation for ILPD (Institute of Legal Practice and Development)',
        'Recommendation letters from senior bar councilors and jurists',
      ],
    },
    {
      title: 'COHORT COMMUNITY',
      icon: Shield,
      kicker: 'An Elite Circle of Accountability',
      description:
        'A small, disciplined cohort of only ten ambitious law students across Rwanda who train, debate, push, and hold each other accountable through intense intellectual camaraderie.',
      features: [
        'Lifelong fraternal network spanning all major Rwandan law schools',
        'Peer memorial critiques and joint moot competition delegations',
        'Shared commitment to the rule of law as the bedrock of Rwanda’s future',
      ],
    },
  ];

  return (
    <section className="py-24 bg-[#0A121F] text-white border-b border-[#1C2A3E] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Curatorial Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center space-x-3 mb-3">
            <span className="w-8 h-[1px] bg-[#C59B27]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#E8C568] font-semibold">
              The Fellowship Endowment
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-white tracking-tight">
            What Fellows Receive
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-300 font-light leading-relaxed">
            These are not generic extracurricular club activities. They are the institutional privileges and professional training advantages of belonging to Rwanda’s most selective legal fellowship.
          </p>
        </div>

        {/* Feature Visual Spotlight Strip */}
        <div className="mb-14 rounded-xl overflow-hidden border border-[#22334D] bg-[#101C2E] grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-7 p-8 sm:p-12">
            <span className="text-xs uppercase tracking-widest text-[#E8C568] font-mono font-semibold block mb-2">
              The Apprenticeship Heritage
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-4">
              Restoring the Ancient Tradition of Legal Apprenticeship in Rwanda
            </h3>
            <p className="text-sm text-stone-300 leading-relaxed font-light mb-6">
              Historically, the law was never mastered in an ivory tower; it was learned at the elbow of master advocates in the Inns of Court and judicial chambers. Indahiro brings that rigorous standard of personal mentorship to Kigali.
            </p>
            <div className="flex items-center space-x-6 text-xs text-stone-400">
              <div>
                <span className="block font-mono text-lg text-white font-bold">1 : 1</span>
                <span>Mentor-to-Fellow Ratio</span>
              </div>
              <div className="w-[1px] h-8 bg-stone-700" />
              <div>
                <span className="block font-mono text-lg text-[#E8C568] font-bold">100%</span>
                <span>Fully Funded Fellowship</span>
              </div>
              <div className="w-[1px] h-8 bg-stone-700" />
              <div>
                <span className="block font-mono text-lg text-white font-bold">12 Months</span>
                <span>Practice Immersion</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 h-72 lg:h-full relative min-h-[260px]">
            <img
              src={mentorDialogueImg}
              alt="Indahiro Senior Advocate mentoring a young fellow in Kigali"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-l from-transparent via-transparent to-[#101C2E]/60" />
          </div>
        </div>

        {/* The 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((card) => {
            const IconComponent = card.icon;
            return (
              <div
                key={card.title}
                className="p-8 bg-[#101C2E]/90 rounded-xl border border-[#22334D] hover:border-[#C59B27]/50 transition-all shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold tracking-widest text-[#E8C568]">
                      {card.title}
                    </span>
                    <div className="p-2 rounded bg-[#C59B27]/10 text-[#C59B27]">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  <p className="text-xs text-stone-400 uppercase tracking-wider font-medium mb-3">
                    {card.kicker}
                  </p>

                  <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-light mb-6">
                    {card.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-800 space-y-2">
                  {card.features.map((feat, i) => (
                    <div key={i} className="flex items-start space-x-2 text-xs text-stone-400">
                      <span className="text-[#C59B27] font-bold">·</span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
