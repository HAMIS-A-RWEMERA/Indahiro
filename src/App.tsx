/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { FellowshipJourneySection } from './components/FellowshipJourneySection';
import { WhoWeSelectSection } from './components/WhoWeSelectSection';
import { WhatFellowsReceiveSection } from './components/WhatFellowsReceiveSection';
import { IndahiroStandardSection } from './components/IndahiroStandardSection';
import { MentorsSection } from './components/MentorsSection';
import { FellowsSection } from './components/FellowsSection';
import { PartnersSection } from './components/PartnersSection';
import { JournalSection } from './components/JournalSection';
import { AlumniVisionSection } from './components/AlumniVisionSection';
import { Footer } from './components/Footer';
import { ApplicationModal } from './components/ApplicationModal';
import { SelectionDashboardModal } from './components/SelectionDashboardModal';
import { SuggestionBoxModal } from './components/SuggestionBoxModal';
import { INITIAL_APPLICATIONS } from './data/mockData';
import { ApplicationSubmission } from './types';
import { ArrowRight, Sparkles, MessageSquare } from 'lucide-react';

const SUBMITTED_APPS_STORAGE_KEY = 'indahiro_submitted_applications_v1';

export default function App() {
  const [isApplicationModalOpen, setIsApplicationModalOpen] = useState(false);
  const [isDashboardModalOpen, setIsDashboardModalOpen] = useState(false);
  const [isSuggestionModalOpen, setIsSuggestionModalOpen] = useState(false);
  const [applications, setApplications] = useState<ApplicationSubmission[]>(() => {
    const saved = localStorage.getItem(SUBMITTED_APPS_STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      } catch (e) {
        console.error('Error loading applications from storage', e);
      }
    }
    return INITIAL_APPLICATIONS;
  });

  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Sync applications to localStorage
  useEffect(() => {
    localStorage.setItem(SUBMITTED_APPS_STORAGE_KEY, JSON.stringify(applications));
  }, [applications]);

  const handleApplicationSubmit = (newApp: ApplicationSubmission) => {
    setApplications((prev) => [newApp, ...prev]);
    setToastMessage(`Application ${newApp.id} lodged successfully & sent to Admissions Desk.`);
    setTimeout(() => setToastMessage(null), 6000);
  };

  const handleUpdateApplication = (updatedApp: ApplicationSubmission) => {
    setApplications((prev) =>
      prev.map((app) => (app.id === updatedApp.id ? updatedApp : app))
    );
  };

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-[#171717] selection:bg-[#0B1528] selection:text-[#E8C568]">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-24 right-4 z-50 bg-[#0B1320] text-white px-4 py-3 rounded-lg shadow-xl border border-[#C59B27] flex items-center space-x-3 text-xs animate-in slide-in-from-top duration-300">
          <Sparkles className="w-4 h-4 text-[#C59B27] shrink-0" />
          <span>{toastMessage}</span>
          <button
            onClick={() => setToastMessage(null)}
            className="text-stone-400 hover:text-white"
          >
            ✕
          </button>
        </div>
      )}

      {/* 1. Header (Sticky Top Bar Contract) */}
      <Header
        onOpenApplication={() => setIsApplicationModalOpen(true)}
        onOpenDashboard={() => setIsDashboardModalOpen(true)}
        onOpenSuggestionBox={() => setIsSuggestionModalOpen(true)}
      />

      {/* 2. Hero Section */}
      <HeroSection onOpenApplication={() => setIsApplicationModalOpen(true)} />

      {/* 3. About Section (The Problem & The Gap) */}
      <AboutSection />

      {/* 4. The Fellowship Journey (Interactive 3-Stage Timeline) */}
      <FellowshipJourneySection />

      {/* 5. Who We Select (10 Selection Pillars & Cohort 10 Limit) */}
      <WhoWeSelectSection onOpenApplication={() => setIsApplicationModalOpen(true)} />

      {/* 6. What Fellows Receive (The 6 Pillars) */}
      <WhatFellowsReceiveSection />

      {/* 7. The Indahiro Standard (Competency Framework) */}
      <IndahiroStandardSection />

      {/* 8. Mentors (Ecosystem across Bar, Bench, NPPA, Academics) */}
      <MentorsSection />

      {/* 9. Fellows (Cohort I Profiles Directory) */}
      <FellowsSection />

      {/* 10. Partners (MINIJUST, RBA, ILPD, Courts, Law Firms) */}
      <PartnersSection />

      {/* 11. Journal / Gazette (Stories, Research, Reflections) */}
      <JournalSection />

      {/* 12. Alumni Vision ("The first generation is coming") */}
      <AlumniVisionSection />

      {/* 13. Footer */}
      <Footer
        onOpenApplication={() => setIsApplicationModalOpen(true)}
        onOpenDashboard={() => setIsDashboardModalOpen(true)}
        onOpenSuggestionBox={() => setIsSuggestionModalOpen(true)}
      />

      {/* Persistent Floating Application & Feedback Actions */}
      <div className="fixed bottom-6 right-6 z-30 flex flex-col items-end gap-2.5">
        <button
          onClick={() => setIsSuggestionModalOpen(true)}
          className="px-3.5 py-2 rounded-full text-[11px] font-medium text-stone-200 bg-[#12141A]/90 hover:bg-[#1A1D26] hover:text-white shadow-md border border-[#2B3040] transition-all flex items-center space-x-1.5 cursor-pointer backdrop-blur-xs"
          aria-label="Submit a suggestion to rwemera30@gmail.com"
        >
          <MessageSquare className="w-3.5 h-3.5 text-[#F7D875]" />
          <span>Suggestion Box</span>
        </button>
        <button
          onClick={() => setIsApplicationModalOpen(true)}
          className="px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-[#0B0D11] bg-gradient-to-r from-[#F7D875] via-[#E2B742] to-[#D5A52A] hover:brightness-105 shadow-xl hover:shadow-2xl transition-all flex items-center space-x-2 group cursor-pointer border border-[#F7D875]/60"
          aria-label="Apply for Indahiro Fellowship"
        >
          <span>Apply for Fellowship</span>
          <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>

      {/* Application Portal Modal */}
      <ApplicationModal
        isOpen={isApplicationModalOpen}
        onClose={() => setIsApplicationModalOpen(false)}
        onSubmitSuccess={handleApplicationSubmit}
      />

      {/* Suggestion Box Modal */}
      <SuggestionBoxModal
        isOpen={isSuggestionModalOpen}
        onClose={() => setIsSuggestionModalOpen(false)}
      />

      {/* Selection Committee Portal Modal */}
      <SelectionDashboardModal
        isOpen={isDashboardModalOpen}
        onClose={() => setIsDashboardModalOpen(false)}
        applications={applications}
        onUpdateApplication={handleUpdateApplication}
      />

    </div>
  );
}
