/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { SelectionDashboardModal } from './components/SelectionDashboardModal';
import { SuggestionBoxModal } from './components/SuggestionBoxModal';
import { ScrollToTop } from './components/ScrollToTop';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { JourneyPage } from './pages/JourneyPage';
import { SelectionPage } from './pages/SelectionPage';
import { MentorsPage } from './pages/MentorsPage';
import { FellowsPage } from './pages/FellowsPage';
import { JournalPage } from './pages/JournalPage';
import { ApplyPage } from './pages/ApplyPage';
import { INITIAL_APPLICATIONS } from './data/mockData';
import { ApplicationSubmission } from './types';
import { ArrowRight, Sparkles, MessageSquare } from 'lucide-react';

const SUBMITTED_APPS_STORAGE_KEY = 'indahiro_submitted_applications_v1';

// Secret committee route handler that triggers selector modal
function CommitteeTrigger({ onOpen }: { onOpen: () => void }) {
  const location = useLocation();
  useEffect(() => {
    onOpen();
  }, [location, onOpen]);
  return <HomePage />;
}

export default function App() {
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

  // Stealth trigger: Keyboard shortcut (Ctrl + Shift + C) & URL query (?committee=auth)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'C' || e.key === 'c')) {
        e.preventDefault();
        setIsDashboardModalOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    // Check if query string includes committee trigger
    if (typeof window !== 'undefined') {
      const searchParams = new URLSearchParams(window.location.search);
      if (searchParams.has('committee')) {
        setIsDashboardModalOpen(true);
      }
    }

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

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
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-[#FBF9F5] text-[#171717] selection:bg-[#0B1528] selection:text-[#E8C568] flex flex-col justify-between">
        
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

        {/* Global Multi-Page Header */}
        <Header onOpenSuggestionBox={() => setIsSuggestionModalOpen(true)} />

        {/* Multi-Page Route Switcher */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/journey" element={<JourneyPage />} />
            <Route path="/selection" element={<SelectionPage />} />
            <Route path="/mentors" element={<MentorsPage />} />
            <Route path="/fellows" element={<FellowsPage />} />
            <Route path="/journal" element={<JournalPage />} />
            <Route
              path="/apply"
              element={<ApplyPage onSubmitSuccess={handleApplicationSubmit} />}
            />
            {/* Secret URL route for committee members */}
            <Route
              path="/committee"
              element={<CommitteeTrigger onOpen={() => setIsDashboardModalOpen(true)} />}
            />
            {/* Fallback to Home */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>

        {/* Global Multi-Page Footer with Steganography */}
        <Footer
          onOpenDashboard={() => setIsDashboardModalOpen(true)}
          onOpenSuggestionBox={() => setIsSuggestionModalOpen(true)}
        />

        {/* Persistent Floating Application & Feedback Actions */}
        <div className="fixed bottom-6 right-6 z-30 flex flex-col items-end gap-2.5">
          <button
            onClick={() => setIsSuggestionModalOpen(true)}
            className="px-3.5 py-2 rounded-full text-[11px] font-medium text-stone-200 bg-[#12141A]/90 hover:bg-[#1A1D26] hover:text-white shadow-md border border-[#2B3040] transition-all flex items-center space-x-1.5 cursor-pointer backdrop-blur-xs"
            aria-label="Submit a recommendation or idea to the Secretariat"
          >
            <MessageSquare className="w-3.5 h-3.5 text-[#F7D875]" />
            <span>Suggestion Box</span>
          </button>
          <Link
            to="/apply"
            className="px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-[#0B0D11] bg-gradient-to-r from-[#F7D875] via-[#E2B742] to-[#D5A52A] hover:brightness-105 shadow-xl hover:shadow-2xl transition-all flex items-center space-x-2 group cursor-pointer border border-[#F7D875]/60"
            aria-label="Apply for Indahiro Fellowship"
          >
            <span>Apply for Fellowship</span>
            <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* Suggestion Box Modal */}
        <SuggestionBoxModal
          isOpen={isSuggestionModalOpen}
          onClose={() => setIsSuggestionModalOpen(false)}
        />

        {/* Selection Committee Portal Modal (Pure Stealth Access) */}
        <SelectionDashboardModal
          isOpen={isDashboardModalOpen}
          onClose={() => setIsDashboardModalOpen(false)}
          applications={applications}
          onUpdateApplication={handleUpdateApplication}
        />

      </div>
    </BrowserRouter>
  );
}
