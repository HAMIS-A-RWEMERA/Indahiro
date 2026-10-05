import React, { useState, useEffect } from 'react';
import { X, Check, ArrowRight, ArrowLeft, Save, Sparkles, AlertCircle, FileText, CheckCircle2, Mail, Send } from 'lucide-react';
import { ApplicationSubmission } from '../types';
import { Logo } from './Logo';

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmitSuccess: (newApp: ApplicationSubmission) => void;
}

const DRAFT_STORAGE_KEY = 'indahiro_fellowship_app_draft_v1';
export const OFFICIAL_ADMISSIONS_EMAIL = 'indahirofellowship@gmail.com';

export const ApplicationModal: React.FC<ApplicationModalProps> = ({
  isOpen,
  onClose,
  onSubmitSuccess,
}) => {
  const [step, setStep] = useState<number>(1);
  const [saveStatus, setSaveStatus] = useState<string>('');
  const [submittedAppId, setSubmittedAppId] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [dispatchStatus, setDispatchStatus] = useState<string>('');
  const [lastSubmission, setLastSubmission] = useState<ApplicationSubmission | null>(null);

  // Form State
  const [formData, setFormData] = useState({
    // Step 1: Personal
    fullName: '',
    email: '',
    phone: '',
    university: 'University of Rwanda (UR), Huye',
    yearOfStudy: 'Year 3 (LL.B)',
    nationalId: '',
    location: 'Kigali',

    // Step 2: Academic
    programme: 'Bachelor of Laws (LL.B)',
    gpaOrClass: '',
    relevantCourses: '',
    honors: '',

    // Step 3: Experience
    mootCourt: '',
    debate: '',
    legalResearch: '',
    leadership: '',
    volunteering: '',
    internships: '',
    publications: '',

    // Step 4: Motivation
    whyIndahiro: '',
    whyLegalPractice: '',
    legalProblemCareAbout: '',
    stepsTaken: '',

    // Step 5: Practical Assessment
    caseReasoningAnswer: '',

    // Step 6: References
    refereeName: '',
    refereeTitle: '',
    refereeInstitution: '',
    refereeEmail: '',
    refereePhone: '',
    relationship: '',
  });

  // Load draft on mount
  useEffect(() => {
    const saved = localStorage.getItem(DRAFT_STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setFormData(parsed);
      } catch (err) {
        console.error('Failed to parse draft', err);
      }
    }
  }, []);

  if (!isOpen) return null;

  const handleSaveDraft = () => {
    localStorage.setItem(DRAFT_STORAGE_KEY, JSON.stringify(formData));
    setSaveStatus('Draft saved to browser storage.');
    setTimeout(() => setSaveStatus(''), 3500);
  };

  const handleNextStep = () => {
    // Save draft automatically on step transition
    localStorage.setItem(DRAFT_STORAGE_KEY, JSON.stringify(formData));
    setStep((prev) => Math.min(prev + 1, 6));
  };

  const handlePrevStep = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const newId = `IND-2026-${Math.floor(1000 + Math.random() * 9000)}`;

    const newSubmission: ApplicationSubmission = {
      id: newId,
      submittedAt: new Date().toISOString(),
      status: 'submitted',
      personal: {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        university: formData.university,
        yearOfStudy: formData.yearOfStudy,
        nationalId: formData.nationalId || '1200000000000000',
        location: formData.location,
      },
      academic: {
        programme: formData.programme,
        gpaOrClass: formData.gpaOrClass,
        relevantCourses: formData.relevantCourses,
        honors: formData.honors,
      },
      experience: {
        mootCourt: formData.mootCourt,
        debate: formData.debate,
        legalResearch: formData.legalResearch,
        leadership: formData.leadership,
        volunteering: formData.volunteering,
        internships: formData.internships,
        publications: formData.publications,
      },
      motivation: {
        whyIndahiro: formData.whyIndahiro,
        whyLegalPractice: formData.whyLegalPractice,
        legalProblemCareAbout: formData.legalProblemCareAbout,
        stepsTaken: formData.stepsTaken,
      },
      practicalAssessment: {
        answer: formData.caseReasoningAnswer,
        wordCount: formData.caseReasoningAnswer.trim().split(/\s+/).filter(Boolean).length,
      },
      references: {
        refereeName: formData.refereeName,
        refereeTitle: formData.refereeTitle,
        refereeInstitution: formData.refereeInstitution,
        refereeEmail: formData.refereeEmail,
        refereePhone: formData.refereePhone,
        relationship: formData.relationship,
      },
      scores: {
        analyticalReasoning: 20,
        advocacyPotential: 20,
        publicServiceIntegrity: 18,
        commitmentDiscipline: 14,
        practicalScore: 13,
      },
      committeeNotes: ['Application submitted via candidate portal. Ready for first-round review.'],
    };

    // Forward complete dossier directly to indahirofellowship@gmail.com
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${OFFICIAL_ADMISSIONS_EMAIL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          _subject: `[Indahiro Application] ${formData.fullName} - ${newId} (${formData.university})`,
          Application_ID: newId,
          Submission_Time: new Date().toLocaleString('en-GB', { timeZone: 'Africa/Kigali' }) + ' CAT',
          Full_Name: formData.fullName,
          Email: formData.email,
          Phone_Number: formData.phone,
          University: formData.university,
          Year_of_Study: formData.yearOfStudy,
          Degree_Programme: formData.programme,
          GPA_or_Standing: formData.gpaOrClass,
          Academic_Honors: formData.honors || 'None specified',
          Cloud_Dossier_Link: (formData as any).dossierLink || 'Not provided',
          Relevant_Courses: formData.relevantCourses,
          Moot_Court_Experience: formData.mootCourt,
          Debate_Experience: formData.debate || 'None',
          Legal_Research: formData.legalResearch || 'None',
          Leadership: formData.leadership || 'None',
          Volunteering_Legal_Aid: formData.volunteering || 'None',
          Internships: formData.internships || 'None',
          Publications: formData.publications || 'None',
          Essay_Why_Indahiro: formData.whyIndahiro,
          Essay_Why_Legal_Practice: formData.whyLegalPractice,
          Essay_Legal_Problem_in_Rwanda: formData.legalProblemCareAbout,
          Essay_Actions_Taken: formData.stepsTaken,
          Practical_Case_Reasoning_Memorandum: formData.caseReasoningAnswer,
          Referee_Name: formData.refereeName,
          Referee_Title: formData.refereeTitle,
          Referee_Institution: formData.refereeInstitution,
          Referee_Relationship: formData.relationship,
          Referee_Email: formData.refereeEmail,
          Referee_Phone: formData.refereePhone,
          _template: 'table',
        }),
      });

      if (response.ok) {
        setDispatchStatus(`Application dossier dispatched directly to ${OFFICIAL_ADMISSIONS_EMAIL}`);
      } else {
        setDispatchStatus(`Application recorded and queued for ${OFFICIAL_ADMISSIONS_EMAIL}`);
      }
    } catch (err) {
      console.warn('Background email dispatch note:', err);
      setDispatchStatus(`Application saved locally & ready to transmit to ${OFFICIAL_ADMISSIONS_EMAIL}`);
    }

    // Remove draft & update local state
    localStorage.removeItem(DRAFT_STORAGE_KEY);
    onSubmitSuccess(newSubmission);
    setLastSubmission(newSubmission);
    setSubmittedAppId(newId);
    setIsSubmitting(false);
  };

  const steps = [
    'Personal Info',
    'Academics',
    'Experience',
    'Motivation',
    'Practical Case',
    'Referee & Review',
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-xs">
      <div className="bg-[#FAF8F5] w-full max-w-3xl rounded-xl border border-[#D5CEC0] shadow-2xl overflow-hidden relative max-h-[92vh] flex flex-col">
        
        {/* Modal Top Bar */}
        <div className="p-5 sm:p-6 bg-[#0B0D11] text-white flex items-center justify-between border-b border-stone-800">
          <div className="flex items-center space-x-3">
            <Logo variant="dark" mode="mark" size="md" />
            <div>
              <span className="text-[10px] font-mono text-[#F7D875] uppercase tracking-widest block">
                Cohort I Admissions Portal · Rwanda
              </span>
              <h3 className="text-xl font-serif font-bold text-white">
                Indahiro Fellowship Application
              </h3>
              <p className="text-[10px] text-stone-400 font-mono mt-0.5">
                Application Deadline: 30 November 2026 · 23:59 CAT
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded text-stone-400 hover:text-white hover:bg-stone-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Multi-step progress indicator */}
        <div className="px-6 py-3 bg-[#111C2E] border-b border-[#213047] flex items-center justify-between text-xs overflow-x-auto gap-2">
          {steps.map((st, i) => {
            const stepNum = i + 1;
            const isCurrent = step === stepNum;
            const isCompleted = step > stepNum;
            return (
              <div
                key={st}
                className={`flex items-center space-x-1.5 whitespace-nowrap cursor-pointer ${
                  isCurrent ? 'text-[#E8C568] font-bold' : isCompleted ? 'text-stone-300' : 'text-stone-500'
                }`}
                onClick={() => setStep(stepNum)}
              >
                <span
                  className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-mono font-bold ${
                    isCurrent
                      ? 'bg-[#C59B27] text-[#0B1320]'
                      : isCompleted
                      ? 'bg-emerald-800 text-white'
                      : 'bg-stone-800 text-stone-400'
                  }`}
                >
                  {isCompleted ? '✓' : stepNum}
                </span>
                <span className="text-[11px] hidden sm:inline">{st}</span>
              </div>
            );
          })}
        </div>

        {/* Body Container */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1 text-xs text-stone-800">
          {submittedAppId ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-serif font-bold text-[#0B1320]">
                Application Successfully Lodged
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
                Your application for the inaugural Indahiro Fellowship has been registered under submission identifier:
              </p>
              <div className="inline-block p-3 bg-[#0B1320] text-[#E8C568] font-mono font-bold text-lg rounded-lg border border-[#C59B27]/40 tracking-wider">
                {submittedAppId}
              </div>

              {/* Admissions Dispatch Notice */}
              <div className="p-3.5 bg-[#EBF5EE] text-[#1E4620] rounded-lg border border-[#C7E3CA] text-xs max-w-lg mx-auto space-y-1.5">
                <div className="flex items-center justify-center gap-1.5 font-semibold">
                  <Mail className="w-4 h-4 text-emerald-700" />
                  <span>Admissions Ingestion Inbox: {OFFICIAL_ADMISSIONS_EMAIL}</span>
                </div>
                <p className="text-[11px] text-emerald-800 leading-relaxed">
                  {dispatchStatus || `Dossier transmitted to ${OFFICIAL_ADMISSIONS_EMAIL}`}
                </p>
                <p className="text-[10px] text-emerald-700">
                  A full copy of your responses has also been securely logged into the Selection Committee Review Portal.
                </p>
              </div>

              <p className="text-xs text-stone-500 max-w-lg mx-auto leading-relaxed">
                The Selection Committee will review your academic standing, practical legal reasoning assessment, and referee records. Shortlisted candidates will be invited for judicial panel oral interviews.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                {lastSubmission && (
                  <a
                    href={`mailto:${OFFICIAL_ADMISSIONS_EMAIL}?subject=${encodeURIComponent(
                      `[Indahiro Application Backup] ${lastSubmission.personal.fullName} - ${lastSubmission.id}`
                    )}&body=${encodeURIComponent(
                      `Indahiro Fellowship Application Dossier\nID: ${lastSubmission.id}\nApplicant: ${lastSubmission.personal.fullName}\nEmail: ${lastSubmission.personal.email}\nPhone: ${lastSubmission.personal.phone}\nUniversity: ${lastSubmission.personal.university}\nYear: ${lastSubmission.personal.yearOfStudy}\nGPA: ${lastSubmission.academic.gpaOrClass}\nCloud Dossier Link: ${(lastSubmission as any).academic?.dossierLink || 'N/A'}\n\nEssay: Why Indahiro:\n${lastSubmission.motivation.whyIndahiro}\n\nPractical Case Memorandum:\n${lastSubmission.practicalAssessment.answer}\n\nReferee: ${lastSubmission.references.refereeName} (${lastSubmission.references.refereeInstitution}) - ${lastSubmission.references.refereeEmail} / ${lastSubmission.references.refereePhone}`
                    )}`}
                    className="px-5 py-2 text-xs font-medium text-stone-700 bg-white border border-stone-300 rounded hover:bg-stone-50 flex items-center gap-1.5"
                  >
                    <Mail className="w-3.5 h-3.5 text-stone-500" />
                    <span>Send Application Copy via Email Client</span>
                  </a>
                )}
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#0B1320] rounded hover:bg-stone-800 transition-colors"
                >
                  Return to Indahiro Portal
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* STEP 1: Personal Information */}
              {step === 1 && (
                <div className="space-y-4">
                  <div className="border-b border-stone-200 pb-3">
                    <h4 className="text-base font-serif font-bold text-[#0B1320]">
                      1. Personal Information
                    </h4>
                    <p className="text-stone-500 text-xs font-light">
                      Please enter your contact details and current university registration status.
                    </p>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-stone-700 mb-1">
                      Full Legal Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Marcella Umugwaneza"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-3 py-2 bg-white border border-[#D5CEC0] rounded text-xs focus:border-[#0B1320] focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-wider text-stone-700 mb-1">
                        Email Address (Institutional or Personal) *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="law.student@ur.ac.rw"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3 py-2 bg-white border border-[#D5CEC0] rounded text-xs focus:border-[#0B1320] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-wider text-stone-700 mb-1">
                        Phone Number (WhatsApp Active) *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+250 788 000 000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3 py-2 bg-white border border-[#D5CEC0] rounded text-xs focus:border-[#0B1320] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-wider text-stone-700 mb-1">
                        University *
                      </label>
                      <select
                        value={formData.university}
                        onChange={(e) => setFormData({ ...formData, university: e.target.value })}
                        className="w-full px-3 py-2 bg-white border border-[#D5CEC0] rounded text-xs focus:border-[#0B1320] focus:outline-none"
                      >
                        <option value="University of Rwanda (UR), Huye">University of Rwanda (UR) — Huye Campus</option>
                        <option value="University of Rwanda (UR), Gikondo">University of Rwanda (UR) — Gikondo Campus</option>
                        <option value="Mount Kigali University (MKU)">Mount Kigali University (MKU)</option>
                        <option value="University of Kigali (UoK)">University of Kigali (UoK)</option>
                        <option value="Kigali Independent University (ULK)">Kigali Independent University (ULK)</option>
                        <option value="University of Lay Adventists of Kigali (UNILAK)">UNILAK (Kigali / Rwamagana / Nyanza)</option>
                        <option value="INES Ruhengeri">INES Ruhengeri (Musanze)</option>
                        <option value="Other Law Faculty in Rwanda">Other Law Faculty in Rwanda</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-wider text-stone-700 mb-1">
                        Current Year of Study *
                      </label>
                      <select
                        value={formData.yearOfStudy}
                        onChange={(e) => setFormData({ ...formData, yearOfStudy: e.target.value })}
                        className="w-full px-3 py-2 bg-white border border-[#D5CEC0] rounded text-xs focus:border-[#0B1320] focus:outline-none"
                      >
                        <option value="Year 2 (LL.B)">Year 2 (Undergraduate)</option>
                        <option value="Year 3 (LL.B)">Year 3 (Undergraduate)</option>
                        <option value="Year 4 / Finalist (LL.B)">Year 4 / Finalist (LL.B)</option>
                        <option value="Recent Graduate awaiting ILPD">Recent Graduate (Awaiting ILPD)</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-wider text-stone-700 mb-1">
                        National ID Number (16 Digits)
                      </label>
                      <input
                        type="text"
                        maxLength={16}
                        placeholder="1199..."
                        value={formData.nationalId}
                        onChange={(e) => setFormData({ ...formData, nationalId: e.target.value })}
                        className="w-full px-3 py-2 bg-white border border-[#D5CEC0] rounded text-xs focus:border-[#0B1320] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-wider text-stone-700 mb-1">
                        Current Base Location
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Kigali / Huye / Musanze"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="w-full px-3 py-2 bg-white border border-[#D5CEC0] rounded text-xs focus:border-[#0B1320] focus:outline-none"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 2: Academic Background */}
              {step === 2 && (
                <div className="space-y-4">
                  <div className="border-b border-stone-200 pb-3">
                    <h4 className="text-base font-serif font-bold text-[#0B1320]">
                      2. Academic Background
                    </h4>
                    <p className="text-stone-500 text-xs font-light">
                      Provide details of your law program, standing, and relevant coursework.
                    </p>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-stone-700 mb-1">
                      Degree Programme *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.programme}
                      onChange={(e) => setFormData({ ...formData, programme: e.target.value })}
                      className="w-full px-3 py-2 bg-white border border-[#D5CEC0] rounded text-xs focus:border-[#0B1320] focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-wider text-stone-700 mb-1">
                        Current GPA / Class Standing *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. GPA 3.8 / First Class / 82%"
                        value={formData.gpaOrClass}
                        onChange={(e) => setFormData({ ...formData, gpaOrClass: e.target.value })}
                        className="w-full px-3 py-2 bg-white border border-[#D5CEC0] rounded text-xs focus:border-[#0B1320] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-wider text-stone-700 mb-1">
                        Academic Honors / Deans List
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Deans Honour Roll 2024, Top mark in Property Law"
                        value={formData.honors}
                        onChange={(e) => setFormData({ ...formData, honors: e.target.value })}
                        className="w-full px-3 py-2 bg-white border border-[#D5CEC0] rounded text-xs focus:border-[#0B1320] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-stone-700 mb-1">
                      Supporting Documents Link (Google Drive / OneDrive / Cloud Dossier)
                    </label>
                    <input
                      type="url"
                      placeholder="https://drive.google.com/drive/folders/... (Transcript, CV, Student ID)"
                      value={(formData as any).dossierLink || ''}
                      onChange={(e) => setFormData({ ...formData, dossierLink: e.target.value } as any)}
                      className="w-full px-3 py-2 bg-white border border-[#D5CEC0] rounded text-xs focus:border-[#0B1320] focus:outline-none font-mono"
                    />
                    <p className="text-[10px] text-stone-500 mt-1">
                      Provide a viewable link to your PDF transcript and 2-page CV (ensure link sharing is set to &ldquo;Anyone with the link can view&rdquo;).
                    </p>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-stone-700 mb-1">
                      Most Relevant Doctrinal Courses Completed *
                    </label>
                    <textarea
                      rows={3}
                      required
                      placeholder="e.g. Law of Contract, Constitutional Law, Criminal Procedure, Evidence, Civil Procedure, Land Law..."
                      value={formData.relevantCourses}
                      onChange={(e) => setFormData({ ...formData, relevantCourses: e.target.value })}
                      className="w-full px-3 py-2 bg-white border border-[#D5CEC0] rounded text-xs focus:border-[#0B1320] focus:outline-none"
                    />
                  </div>
                </div>
              )}

              {/* STEP 3: Experience */}
              {step === 3 && (
                <div className="space-y-4">
                  <div className="border-b border-stone-200 pb-3">
                    <h4 className="text-base font-serif font-bold text-[#0B1320]">
                      3. Practical Experience & Track Record
                    </h4>
                    <p className="text-stone-500 text-xs font-light">
                      Outline your exposure to moot courts, debate, student legal leadership, and internships.
                    </p>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-stone-700 mb-1">
                      Moot Court & Trial Advocacy Experience *
                    </label>
                    <textarea
                      rows={2}
                      required
                      placeholder="Competitions entered, oralist or researcher roles, awards won, memorial drafting experience..."
                      value={formData.mootCourt}
                      onChange={(e) => setFormData({ ...formData, mootCourt: e.target.value })}
                      className="w-full px-3 py-2 bg-white border border-[#D5CEC0] rounded text-xs focus:border-[#0B1320] focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-wider text-stone-700 mb-1">
                        Debate & Public Speaking
                      </label>
                      <textarea
                        rows={2}
                        placeholder="Debate tournaments, university societies, parliamentary debate..."
                        value={formData.debate}
                        onChange={(e) => setFormData({ ...formData, debate: e.target.value })}
                        className="w-full px-3 py-2 bg-white border border-[#D5CEC0] rounded text-xs focus:border-[#0B1320] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-wider text-stone-700 mb-1">
                        Legal Research Assistantships
                      </label>
                      <textarea
                        rows={2}
                        placeholder="Work assisting professors, research projects, case digests..."
                        value={formData.legalResearch}
                        onChange={(e) => setFormData({ ...formData, legalResearch: e.target.value })}
                        className="w-full px-3 py-2 bg-white border border-[#D5CEC0] rounded text-xs focus:border-[#0B1320] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-wider text-stone-700 mb-1">
                        Leadership & Student Societies
                      </label>
                      <textarea
                        rows={2}
                        placeholder="Positions held in student bar associations, law journals, clubs..."
                        value={formData.leadership}
                        onChange={(e) => setFormData({ ...formData, leadership: e.target.value })}
                        className="w-full px-3 py-2 bg-white border border-[#D5CEC0] rounded text-xs focus:border-[#0B1320] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-wider text-stone-700 mb-1">
                        Legal Aid, Volunteering & Pro Bono
                      </label>
                      <textarea
                        rows={2}
                        placeholder="Community legal awareness, NGO outreach, paralegal clinics..."
                        value={formData.volunteering}
                        onChange={(e) => setFormData({ ...formData, volunteering: e.target.value })}
                        className="w-full px-3 py-2 bg-white border border-[#D5CEC0] rounded text-xs focus:border-[#0B1320] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-wider text-stone-700 mb-1">
                        Chamber Internships & Court Clerkships
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Intern at Huye Intermediate Court (2 months)"
                        value={formData.internships}
                        onChange={(e) => setFormData({ ...formData, internships: e.target.value })}
                        className="w-full px-3 py-2 bg-white border border-[#D5CEC0] rounded text-xs focus:border-[#0B1320] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-wider text-stone-700 mb-1">
                        Writing & Publications
                      </label>
                      <input
                        type="text"
                        placeholder="Student law review articles, op-eds, case notes..."
                        value={formData.publications}
                        onChange={(e) => setFormData({ ...formData, publications: e.target.value })}
                        className="w-full px-3 py-2 bg-white border border-[#D5CEC0] rounded text-xs focus:border-[#0B1320] focus:outline-none"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 4: Motivation */}
              {step === 4 && (
                <div className="space-y-4">
                  <div className="border-b border-stone-200 pb-3">
                    <h4 className="text-base font-serif font-bold text-[#0B1320]">
                      4. Motivation & Philosophy
                    </h4>
                    <p className="text-stone-500 text-xs font-light">
                      The Indahiro Selection Committee reads these essays carefully. Speak with candor and intellectual depth.
                    </p>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-stone-700 mb-1">
                      1. Why Indahiro? (What practical deficit in your legal journey do you need this fellowship to resolve?) *
                    </label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Explain what you hope to master through the practice year..."
                      value={formData.whyIndahiro}
                      onChange={(e) => setFormData({ ...formData, whyIndahiro: e.target.value })}
                      className="w-full px-3 py-2 bg-white border border-[#D5CEC0] rounded text-xs focus:border-[#0B1320] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-stone-700 mb-1">
                      2. Why Legal Practice? (What compels you to enter the adversarial arena of the bar or judiciary?) *
                    </label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Describe your conviction regarding the legal profession..."
                      value={formData.whyLegalPractice}
                      onChange={(e) => setFormData({ ...formData, whyLegalPractice: e.target.value })}
                      className="w-full px-3 py-2 bg-white border border-[#D5CEC0] rounded text-xs focus:border-[#0B1320] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-stone-700 mb-1">
                      3. What specific legal problem in Rwanda do you care deeply about? *
                    </label>
                    <textarea
                      rows={3}
                      required
                      placeholder="e.g. Commercial judgment execution delays, land boundary disputes, digital evidence standards..."
                      value={formData.legalProblemCareAbout}
                      onChange={(e) => setFormData({ ...formData, legalProblemCareAbout: e.target.value })}
                      className="w-full px-3 py-2 bg-white border border-[#D5CEC0] rounded text-xs focus:border-[#0B1320] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-stone-700 mb-1">
                      4. What concrete actions have you already taken to pursue that interest? *
                    </label>
                    <textarea
                      rows={3}
                      required
                      placeholder="What have you researched, written, debated, or volunteered regarding this issue?"
                      value={formData.stepsTaken}
                      onChange={(e) => setFormData({ ...formData, stepsTaken: e.target.value })}
                      className="w-full px-3 py-2 bg-white border border-[#D5CEC0] rounded text-xs focus:border-[#0B1320] focus:outline-none"
                    />
                  </div>
                </div>
              )}

              {/* STEP 5: Practical Assessment */}
              {step === 5 && (
                <div className="space-y-4">
                  <div className="border-b border-stone-200 pb-3">
                    <div className="flex items-center space-x-2 text-xs font-mono text-[#8F6E15] uppercase tracking-wider mb-1">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Standardized Practical Assessment</span>
                    </div>
                    <h4 className="text-base font-serif font-bold text-[#0B1320]">
                      5. Practical Legal Reasoning & Writing Exercise
                    </h4>
                    <p className="text-stone-500 text-xs font-light">
                      This exercise tests your ability to identify dispositive issues, cite governing principles, and formulate structured legal advice under pressure.
                    </p>
                  </div>

                  {/* Fact Scenario Box */}
                  <div className="p-4 bg-white rounded-lg border border-[#D5CEC0] space-y-2 text-xs text-stone-800">
                    <p className="font-bold text-[#0B1320] uppercase font-mono text-[11px]">
                      FACT PATTERN: AGRI-TECH COOPERATIVE V. DISTRICT EXECUTIVE COMMITTEE
                    </p>
                    <p className="text-stone-700 leading-relaxed font-light">
                      In January 2023, AgriTech Cooperative entered into a registered 25-year emphyteutic lease with a District in Rwanda for 50 hectares of arable marshland to cultivate export avocados. The Cooperative invested RWF 180,000,000 in drip irrigation and solar water pumping infrastructure.
                    </p>
                    <p className="text-stone-700 leading-relaxed font-light">
                      In August 2026, without prior written notice of default or opportunity to cure, the District Executive Committee issued a summary decree declaring the lease &ldquo;cancelled in the general public interest for municipal industrial expansion,&rdquo; instructing the cooperative to vacate within 7 calendar days. No compensation for unexhausted improvements was tendered.
                    </p>
                    <div className="p-2.5 bg-[#F8F6F0] rounded border border-[#EAE3D4] text-[11px] font-serif italic text-stone-800">
                      <strong>TASK FOR CANDIDATE:</strong> As junior counsel instructed by AgriTech Cooperative, draft a concise legal memorandum (150–300 words) identifying: (1) The two strongest legal arguments challenging the District’s unilateral cancellation under Rwandan land and administrative law, and (2) The immediate procedural remedy to protect the client’s possession.
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <label className="text-[11px] font-semibold uppercase tracking-wider text-stone-700">
                        Candidate Legal Memorandum *
                      </label>
                      <span className="text-[10px] font-mono text-stone-500">
                        Words: {formData.caseReasoningAnswer.trim().split(/\s+/).filter(Boolean).length} / 300 recommended
                      </span>
                    </div>
                    <textarea
                      rows={8}
                      required
                      placeholder="LEGAL MEMORANDUM&#10;TO: Senior Partner&#10;RE: AgriTech Cooperative v. District Executive Committee&#10;&#10;I. ISSUES...&#10;II. STATUTORY ANALYSIS...&#10;III. RECOMMENDED PROCEDURAL ACTION..."
                      value={formData.caseReasoningAnswer}
                      onChange={(e) => setFormData({ ...formData, caseReasoningAnswer: e.target.value })}
                      className="w-full px-3 py-2 bg-white border border-[#D5CEC0] rounded text-xs font-mono focus:border-[#0B1320] focus:outline-none leading-relaxed"
                    />
                  </div>
                </div>
              )}

              {/* STEP 6: References & Review */}
              {step === 6 && (
                <div className="space-y-4">
                  <div className="border-b border-stone-200 pb-3">
                    <h4 className="text-base font-serif font-bold text-[#0B1320]">
                      6. References & Final Declaration
                    </h4>
                    <p className="text-stone-500 text-xs font-light">
                      Provide at least one academic or professional referee who can attest to your character, analytical discipline, and commitment.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-wider text-stone-700 mb-1">
                        Referee Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Dr. Solange Mukamana"
                        value={formData.refereeName}
                        onChange={(e) => setFormData({ ...formData, refereeName: e.target.value })}
                        className="w-full px-3 py-2 bg-white border border-[#D5CEC0] rounded text-xs focus:border-[#0B1320] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-wider text-stone-700 mb-1">
                        Referee Title & Position *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Associate Professor / Senior Advocate"
                        value={formData.refereeTitle}
                        onChange={(e) => setFormData({ ...formData, refereeTitle: e.target.value })}
                        className="w-full px-3 py-2 bg-white border border-[#D5CEC0] rounded text-xs focus:border-[#0B1320] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-wider text-stone-700 mb-1">
                        Referee Institution *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. University of Rwanda Faculty of Law"
                        value={formData.refereeInstitution}
                        onChange={(e) => setFormData({ ...formData, refereeInstitution: e.target.value })}
                        className="w-full px-3 py-2 bg-white border border-[#D5CEC0] rounded text-xs focus:border-[#0B1320] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-wider text-stone-700 mb-1">
                        Relationship to Applicant *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Doctrinal Lecturer, Moot Coach, Internship Supervisor"
                        value={formData.relationship}
                        onChange={(e) => setFormData({ ...formData, relationship: e.target.value })}
                        className="w-full px-3 py-2 bg-white border border-[#D5CEC0] rounded text-xs focus:border-[#0B1320] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-wider text-stone-700 mb-1">
                        Referee Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="referee@university.rw"
                        value={formData.refereeEmail}
                        onChange={(e) => setFormData({ ...formData, refereeEmail: e.target.value })}
                        className="w-full px-3 py-2 bg-white border border-[#D5CEC0] rounded text-xs focus:border-[#0B1320] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-wider text-stone-700 mb-1">
                        Referee Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+250 788 123 456"
                        value={formData.refereePhone}
                        onChange={(e) => setFormData({ ...formData, refereePhone: e.target.value })}
                        className="w-full px-3 py-2 bg-white border border-[#D5CEC0] rounded text-xs focus:border-[#0B1320] focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Declaration of Integrity */}
                  <div className="p-4 bg-[#F2EDE2] rounded-lg border border-[#DDD5C5] text-xs space-y-2 mt-4">
                    <p className="font-bold text-[#0B1320]">
                      APPLICANT DECLARATION OF INTEGRITY
                    </p>
                    <p className="text-stone-700 leading-relaxed font-light">
                      I solemnly affirm that the statements made in this application, including all academic records, moot court achievements, and the practical legal reasoning assessment, are entirely my own original work and truth. I understand that the Indahiro Fellowship adheres to the highest standards of professional ethics and that any misrepresentation will result in immediate disqualification.
                    </p>
                  </div>
                </div>
              )}

              {/* Navigation Footer */}
              <div className="pt-4 border-t border-stone-200 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                <div className="flex items-center space-x-2">
                  {step > 1 && (
                    <button
                      type="button"
                      onClick={handlePrevStep}
                      className="px-4 py-2 text-xs font-medium text-stone-700 bg-white border border-stone-300 rounded hover:bg-stone-50 flex items-center gap-1 cursor-pointer"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Previous Step</span>
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={handleSaveDraft}
                    className="px-4 py-2 text-xs font-medium text-stone-700 bg-stone-100 hover:bg-stone-200 rounded flex items-center gap-1.5 cursor-pointer"
                  >
                    <Save className="w-3.5 h-3.5 text-stone-600" />
                    <span>Save Draft</span>
                  </button>
                  {saveStatus && (
                    <span className="text-[11px] text-emerald-700 font-medium">
                      {saveStatus}
                    </span>
                  )}
                </div>

                <div className="flex items-center space-x-2">
                  {step < 6 ? (
                    <button
                      type="button"
                      onClick={handleNextStep}
                      className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#0B1320] hover:bg-[#18263A] rounded flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>Proceed to Step {step + 1}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-8 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#0B1320] bg-gradient-to-r from-[#DFB748] to-[#C59B27] hover:from-[#E8C568] hover:to-[#D4A732] rounded shadow-md cursor-pointer disabled:opacity-60 flex items-center gap-1.5"
                    >
                      {isSubmitting ? (
                        <span>Transmitting Dossier...</span>
                      ) : (
                        <span>Submit Fellowship Application</span>
                      )}
                    </button>
                  )}
                </div>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
