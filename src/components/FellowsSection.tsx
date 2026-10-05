import React, { useState } from 'react';
import { INAUGURAL_FELLOWS } from '../data/mockData';
import { Fellow } from '../types';
import { X, Award, BookOpen, User, GraduationCap, Quote, Search } from 'lucide-react';

export const FellowsSection: React.FC = () => {
  const [selectedFellow, setSelectedFellow] = useState<Fellow | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedUni, setSelectedUni] = useState<string>('All');

  const universities = ['All', 'University of Rwanda', 'ULK', 'UNILAK', 'INES Ruhengeri'];

  const filteredFellows = INAUGURAL_FELLOWS.filter((fellow) => {
    const matchesSearch =
      fellow.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      fellow.areaOfInterest.toLowerCase().includes(searchQuery.toLowerCase()) ||
      fellow.university.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesUni =
      selectedUni === 'All' ||
      fellow.university.toLowerCase().includes(selectedUni.toLowerCase().replace('university of rwanda', 'ur'));
    return matchesSearch && matchesUni;
  });

  return (
    <section id="fellows" className="py-24 bg-[#FAF8F5] text-[#1A1A1A] border-b border-[#E2DDD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Curatorial Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center space-x-3 mb-3">
            <span className="w-8 h-[1.5px] bg-[#C59B27]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#8F6E15] font-semibold">
              The Inaugural Cohort
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#0B1320] font-semibold tracking-tight">
            Cohort I Fellows
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 font-light leading-relaxed">
            Ten outstanding Rwandan law students selected nationwide through an uncompromising evaluation of analytical rigor, oral advocacy potential, and public integrity.
          </p>
        </div>

        {/* Search and University Filter Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-10">
          
          {/* Segmented Controls for Universities */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#EAE5DA] rounded-lg">
            {universities.map((uni) => (
              <button
                key={uni}
                onClick={() => setSelectedUni(uni)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                  selectedUni === uni
                    ? 'bg-white text-[#0B1320] shadow-xs font-semibold'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                {uni}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search fellow by name, focus..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs bg-white border border-[#D5CEC0] rounded-lg focus:outline-none focus:border-[#0B1320]"
            />
          </div>

        </div>

        {/* Fellows Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFellows.map((fellow) => (
            <div
              key={fellow.id}
              className="bg-white rounded-xl border border-[#E2DDD3] p-6 hover:border-[#C59B27] transition-all shadow-xs flex flex-col justify-between group"
            >
              <div>
                {/* Clean unboxed metadata with dot separators */}
                <div className="flex items-center space-x-2 text-[11px] text-[#8F6E15] font-mono mb-2">
                  <span>{fellow.yearOfStudy}</span>
                  <span aria-hidden="true">·</span>
                  <span className="truncate">{fellow.university.split('(')[0]}</span>
                </div>

                <h3 className="text-xl font-serif font-bold text-[#0B1320] group-hover:text-[#8F6E15] transition-colors mb-1">
                  {fellow.name}
                </h3>

                <p className="text-xs text-stone-500 font-medium mb-3">
                  {fellow.areaOfInterest}
                </p>

                <p className="text-xs text-stone-600 font-light line-clamp-3 leading-relaxed mb-4">
                  {fellow.bio}
                </p>

                <div className="p-3 bg-[#FBF9F5] rounded border border-stone-200/80 mb-4 text-[11px] text-stone-700 space-y-1">
                  <div className="flex items-center gap-1.5 font-medium text-stone-900">
                    <User className="w-3.5 h-3.5 text-[#8F6E15]" />
                    <span>Mentor: {fellow.mentorName}</span>
                  </div>
                  <p className="text-[10px] text-stone-500 pl-5 truncate">
                    {fellow.mentorTitle}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                <span className="text-[11px] text-stone-500">
                  {fellow.achievements.length} Verified Milestones
                </span>
                <button
                  onClick={() => setSelectedFellow(fellow)}
                  className="text-xs font-semibold text-[#0B1320] hover:text-[#C59B27] transition-colors cursor-pointer"
                >
                  View Profile →
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Fellow Profile Modal */}
      {selectedFellow && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs">
          <div className="bg-white w-full max-w-2xl rounded-xl border border-[#D5CEC0] shadow-2xl overflow-hidden relative max-h-[90vh] flex flex-col">
            
            {/* Modal Header */}
            <div className="p-6 bg-[#0B1320] text-white flex items-center justify-between border-b border-stone-800">
              <div>
                <span className="text-[10px] font-mono text-[#E8C568] uppercase tracking-widest block">
                  Cohort I Fellow Profile
                </span>
                <h3 className="text-2xl font-serif font-bold text-white">
                  {selectedFellow.name}
                </h3>
                <p className="text-xs text-stone-300 font-light">
                  {selectedFellow.university} · {selectedFellow.yearOfStudy}
                </p>
              </div>
              <button
                onClick={() => setSelectedFellow(null)}
                className="p-1.5 rounded text-stone-400 hover:text-white hover:bg-stone-800 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-xs text-stone-800">
              
              {/* Quote */}
              <div className="p-4 bg-[#F8F6F0] rounded-lg border-l-3 border-[#C59B27]">
                <Quote className="w-4 h-4 text-[#C59B27] mb-1" />
                <p className="font-serif italic text-sm text-[#0B1320] leading-relaxed">
                  &ldquo;{selectedFellow.quote}&rdquo;
                </p>
              </div>

              {/* Bio */}
              <div>
                <h4 className="text-[11px] font-semibold uppercase tracking-wider text-stone-500 mb-1">
                  Biography & Background
                </h4>
                <p className="text-stone-700 leading-relaxed text-xs sm:text-sm">
                  {selectedFellow.bio}
                </p>
              </div>

              {/* Moot & Research */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-stone-50 rounded-lg border border-stone-200">
                  <div className="flex items-center space-x-2 text-[#8F6E15] font-semibold mb-1">
                    <Award className="w-4 h-4" />
                    <span>Moot & Debate Track</span>
                  </div>
                  <p className="text-stone-700 leading-relaxed text-xs">
                    {selectedFellow.mootExperience}
                  </p>
                </div>

                <div className="p-4 bg-stone-50 rounded-lg border border-stone-200">
                  <div className="flex items-center space-x-2 text-[#8F6E15] font-semibold mb-1">
                    <BookOpen className="w-4 h-4" />
                    <span>Research Interests</span>
                  </div>
                  <p className="text-stone-700 leading-relaxed text-xs">
                    {selectedFellow.researchInterests}
                  </p>
                </div>
              </div>

              {/* Mentor Pairing */}
              <div className="p-4 bg-[#0B1320] text-white rounded-lg">
                <span className="text-[10px] font-mono text-[#E8C568] uppercase tracking-wider block mb-1">
                  Assigned Practice Mentor
                </span>
                <p className="text-sm font-serif font-bold text-white">
                  {selectedFellow.mentorName}
                </p>
                <p className="text-xs text-stone-300 font-light">
                  {selectedFellow.mentorTitle}
                </p>
              </div>

              {/* Achievements */}
              <div>
                <h4 className="text-[11px] font-semibold uppercase tracking-wider text-stone-500 mb-2">
                  Key Honors & Academic Standing
                </h4>
                <div className="space-y-1.5">
                  {selectedFellow.achievements.map((ach, i) => (
                    <div key={i} className="flex items-center space-x-2 text-stone-700 text-xs">
                      <span className="text-[#C59B27] font-bold">✓</span>
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-stone-100 border-t border-stone-200 flex justify-end">
              <button
                onClick={() => setSelectedFellow(null)}
                className="px-5 py-2 text-xs font-semibold text-[#0B1320] bg-white border border-stone-300 rounded hover:bg-stone-50 transition-colors cursor-pointer"
              >
                Close Profile
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
