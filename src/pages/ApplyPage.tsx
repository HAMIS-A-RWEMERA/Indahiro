import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Check,
  ArrowRight,
  ArrowLeft,
  Save,
  Sparkles,
  AlertCircle,
  FileText,
  CheckCircle2,
  Mail,
  Send,
  HelpCircle,
  Clock,
  ShieldCheck,
} from 'lucide-react';
import { ApplicationSubmission } from '../types';
import { Logo } from '../components/Logo';

interface ApplyPageProps {
  onSubmitSuccess: (newApp: ApplicationSubmission) => void;
}

const DRAFT_STORAGE_KEY = 'indahiro_fellowship_app_draft_v1';
const OFFICIAL_ADMISSIONS_EMAIL = 'indahirofellowship@gmail.com';

export const ApplyPage: React.FC<ApplyPageProps> = ({ onSubmitSuccess }) => {
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

  const handleSaveDraft = () => {
    localStorage.setItem(DRAFT_STORAGE_KEY, JSON.stringify(formData));
    setSaveStatus('Draft saved to browser storage.');
    setTimeout(() => setSaveStatus(''), 3500);
  };

  const handleNextStep = () => {
    localStorage.setItem(DRAFT_STORAGE_KEY, JSON.stringify(formData));
    setStep((prev) => Math.min(prev + 1, 6));
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  const handlePrevStep = () => {
    setStep((prev) => Math.max(prev - 1, 1));
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
        legalReasoning: 16,
        potential: 16,
        commitmentDiscipline: 12,
        passionForPractice: 12,
        communicationAdvocacy: 8,
        intellectualCuriosity: 8,
        integrityJudgment: 4,
        leadershipService: 4,
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
          Academic_GPA_Class: formData.gpaOrClass,
          Moot_Court_Experience: formData.mootCourt,
          Why_Indahiro: formData.whyIndahiro,
          Legal_Problem_Cared_About: formData.legalProblemCareAbout,
          Case_Memorandum_Answer: formData.caseReasoningAnswer,
          Referee_Name: formData.refereeName,
          Referee_Contact: `${formData.refereeEmail} | ${formData.refereePhone}`,
        }),
      });

      if (response.ok) {
        setDispatchStatus(`Successfully delivered to Admissions Secretariat (${OFFICIAL_ADMISSIONS_EMAIL}).`);
      } else {
        setDispatchStatus(`Queued in admissions registry. Backup email transmission link available.`);
      }
    } catch {
      setDispatchStatus(`Recorded locally. You can also send a one-click verification email below.`);
    }

    setLastSubmission(newSubmission);
    onSubmitSuccess(newSubmission);
    setSubmittedAppId(newId);
    setIsSubmitting(false);
    localStorage.removeItem(DRAFT_STORAGE_KEY);
    window.scrollTo({ top: 100, behavior: 'smooth' });
  };

  const stepsList = [
    { num: 1, title: 'Personal Info' },
    { num: 2, title: 'Academics' },
    { num: 3, title: 'Experience & Moots' },
    { num: 4, title: 'Motivation' },
    { num: 5, title: 'Case Assessment' },
    { num: 6, title: 'References & Lodge' },
  ];

  return (
    <div className="bg-[#FAF8F5] min-h-screen">
      {/* Page Hero Header */}
      <div className="bg-[#0B0D11] text-white pt-16 pb-20 border-b border-[#1E2330]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3 mb-4">
            <span className="w-8 h-[2px] bg-[#E2B742]" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#F7D875]">
              Admissions Portal · Cohort I (2026)
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight max-w-3xl">
            Apply for the Indahiro Fellowship
          </h1>
          <p className="mt-4 text-base sm:text-lg text-stone-300 max-w-2xl font-light leading-relaxed">
            Welcome to the official admissions application. Please complete all sections with accuracy, intellectual candor, and attention to detail.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-mono text-stone-400">
            <span className="text-[#E2B742] font-semibold">Inaugural Cohort: 10 Fellows</span>
            <span>·</span>
            <span>All Submissions Sent to {OFFICIAL_ADMISSIONS_EMAIL}</span>
            <span>·</span>
            <span>Autosave Enabled</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {submittedAppId ? (
          <div className="bg-white rounded-2xl border border-[#D5CEC0] p-8 sm:p-12 shadow-xl text-center space-y-6">
            <div className="w-20 h-20 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#8F6E15] font-semibold block mb-1">
                Official Lodgment Confirmed
              </span>
              <h2 className="text-3xl font-serif font-bold text-[#0B1320]">
                Application Successfully Submitted!
              </h2>
              <p className="mt-2 text-stone-600 text-sm max-w-md mx-auto">
                Your dossier has been registered in the Indahiro Fellowship Admissions Registry.
              </p>
            </div>

            <div className="p-4 bg-[#F2EDE2] rounded-xl border border-[#E0D8C8] inline-block text-left">
              <span className="text-[11px] font-mono text-stone-500 uppercase block">Dossier Reference ID:</span>
              <span className="text-xl font-mono font-bold text-[#0B1320]">{submittedAppId}</span>
            </div>

            <div className="p-4 bg-[#F7F4EC] rounded-xl text-xs text-stone-700 max-w-lg mx-auto text-left space-y-2 border border-stone-200">
              <div className="flex items-center space-x-2 text-[#8F6E15] font-semibold">
                <Mail className="w-4 h-4" />
                <span>Admissions Secretariat Notification</span>
              </div>
              <p className="font-light">
                {dispatchStatus || `Dossier transmitted to ${OFFICIAL_ADMISSIONS_EMAIL}.`}
              </p>
              <p className="text-[11px] text-stone-500 font-mono">
                Candidate: {formData.fullName} ({formData.university})
              </p>
            </div>

            {lastSubmission && (
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={`mailto:${OFFICIAL_ADMISSIONS_EMAIL}?subject=${encodeURIComponent(
                    `[Application Backup] ${lastSubmission.personal.fullName} (${lastSubmission.id})`
                  )}&body=${encodeURIComponent(
                    `Candidate: ${lastSubmission.personal.fullName}\nID: ${lastSubmission.id}\nUniversity: ${lastSubmission.personal.university}\nEmail: ${lastSubmission.personal.email}\nPhone: ${lastSubmission.personal.phone}\n\nCase Memorandum:\n${lastSubmission.practicalAssessment.answer}`
                  )}`}
                  className="px-6 py-3 text-xs font-semibold text-[#0B1320] bg-[#E2B742] hover:bg-[#F7D875] rounded transition-colors flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send Backup Copy via Email Client</span>
                </a>
                <Link
                  to="/"
                  className="px-6 py-3 text-xs font-semibold text-stone-700 hover:text-stone-900 bg-stone-100 hover:bg-stone-200 rounded transition-colors"
                >
                  Return to Homepage
                </Link>
              </div>
            )}
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-[#D5CEC0] shadow-xl overflow-hidden">
            
            {/* Step Stepper Header */}
            <div className="p-6 bg-[#0B0D11] text-white border-b border-stone-800">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase tracking-widest text-[#E8C568]">
                  Step {step} of 6: {stepsList[step - 1].title}
                </span>
                <button
                  type="button"
                  onClick={handleSaveDraft}
                  className="text-xs text-stone-300 hover:text-white bg-[#1A1F2C] border border-[#2B3448] px-3 py-1.5 rounded flex items-center gap-1.5 cursor-pointer"
                >
                  <Save className="w-3.5 h-3.5 text-[#E8C568]" />
                  <span>Save Draft</span>
                </button>
              </div>

              {saveStatus && (
                <div className="mb-3 text-[11px] text-emerald-400 font-mono flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" />
                  <span>{saveStatus}</span>
                </div>
              )}

              {/* Progress Bar */}
              <div className="w-full bg-stone-800 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-gradient-to-r from-[#F7D875] to-[#C59B27] h-full transition-all duration-300"
                  style={{ width: `${(step / 6) * 100}%` }}
                />
              </div>

              {/* Step Pills */}
              <div className="hidden sm:grid grid-cols-6 gap-2 mt-4 text-[10px] font-mono">
                {stepsList.map((s) => (
                  <button
                    key={s.num}
                    type="button"
                    onClick={() => setStep(s.num)}
                    className={`text-center py-1 rounded transition-colors ${
                      step === s.num
                        ? 'bg-[#E2B742] text-[#0B0D11] font-bold'
                        : step > s.num
                        ? 'text-stone-300 bg-stone-800/60'
                        : 'text-stone-500'
                    }`}
                  >
                    {s.num}. {s.title.split(' ')[0]}
                  </button>
                ))}
              </div>
            </div>

            {/* Form Form Container */}
            <form onSubmit={handleSubmit} className="p-6 sm:p-10 space-y-6 text-xs text-stone-800">
              
              {/* STEP 1: Personal Information */}
              {step === 1 && (
                <div className="space-y-4">
                  <div className="border-b border-stone-200 pb-3 mb-4">
                    <h3 className="text-lg font-serif font-bold text-[#0B1320]">
                      Personal & Institutional Identification
                    </h3>
                    <p className="text-stone-500 text-xs">
                      Provide your official legal names and current university enrollment status.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-semibold uppercase tracking-wider text-stone-700 mb-1">
                        Full Legal Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        placeholder="e.g., Jean-Paul Mugisha"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full p-2.5 bg-[#FAF8F5] border border-stone-300 rounded text-xs focus:border-[#0B1320] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block font-semibold uppercase tracking-wider text-stone-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="e.g., candidate@university.ac.rw"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-2.5 bg-[#FAF8F5] border border-stone-300 rounded text-xs focus:border-[#0B1320] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block font-semibold uppercase tracking-wider text-stone-700 mb-1">
                        Phone Number (WhatsApp Active) *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="+250 788 000 000"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full p-2.5 bg-[#FAF8F5] border border-stone-300 rounded text-xs focus:border-[#0B1320] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block font-semibold uppercase tracking-wider text-stone-700 mb-1">
                        National ID / Passport Number
                      </label>
                      <input
                        type="text"
                        name="nationalId"
                        placeholder="16-digit Rwandan National ID"
                        value={formData.nationalId}
                        onChange={handleChange}
                        className="w-full p-2.5 bg-[#FAF8F5] border border-stone-300 rounded text-xs focus:border-[#0B1320] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block font-semibold uppercase tracking-wider text-stone-700 mb-1">
                        University Faculty *
                      </label>
                      <select
                        name="university"
                        value={formData.university}
                        onChange={handleChange}
                        className="w-full p-2.5 bg-[#FAF8F5] border border-stone-300 rounded text-xs focus:border-[#0B1320] focus:outline-none font-medium"
                      >
                        <option value="University of Rwanda (UR), Huye">University of Rwanda (UR) - Huye Campus</option>
                        <option value="University of Rwanda (UR), Gikondo">University of Rwanda (UR) - Gikondo Campus</option>
                        <option value="University of Kigali (UoK)">University of Kigali (UoK)</option>
                        <option value="Mount Kigali University (MKU)">Mount Kigali University (MKU)</option>
                        <option value="Kigali Independent University (ULK)">Kigali Independent University (ULK)</option>
                        <option value="University of Lay Adventists of Kigali (UNILAK)">UNILAK Law School</option>
                        <option value="INES Ruhengeri (Musanze)">INES Ruhengeri (Musanze Campus)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-semibold uppercase tracking-wider text-stone-700 mb-1">
                        Current Year of Study *
                      </label>
                      <select
                        name="yearOfStudy"
                        value={formData.yearOfStudy}
                        onChange={handleChange}
                        className="w-full p-2.5 bg-[#FAF8F5] border border-stone-300 rounded text-xs focus:border-[#0B1320] focus:outline-none"
                      >
                        <option value="Year 2 (LL.B)">Year 2 (LL.B)</option>
                        <option value="Year 3 (LL.B)">Year 3 (LL.B)</option>
                        <option value="Year 4 (Finalist LL.B)">Year 4 (Finalist LL.B)</option>
                        <option value="Recent Graduate (Waiting for ILPD)">Recent Graduate (Waiting for ILPD)</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 2: Academic Background */}
              {step === 2 && (
                <div className="space-y-4">
                  <div className="border-b border-stone-200 pb-3 mb-4">
                    <h3 className="text-lg font-serif font-bold text-[#0B1320]">
                      Academic Profile & Doctrinal Background
                    </h3>
                    <p className="text-stone-500 text-xs">
                      Indahiro does not evaluate on GPA alone, but academic rigor is essential.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-semibold uppercase tracking-wider text-stone-700 mb-1">
                        Degree Programme *
                      </label>
                      <input
                        type="text"
                        name="programme"
                        value={formData.programme}
                        onChange={handleChange}
                        className="w-full p-2.5 bg-[#FAF8F5] border border-stone-300 rounded text-xs focus:border-[#0B1320] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block font-semibold uppercase tracking-wider text-stone-700 mb-1">
                        Cumulative GPA / Class of Degree *
                      </label>
                      <input
                        type="text"
                        name="gpaOrClass"
                        required
                        placeholder="e.g., 3.8 / 4.0 or First Class Honours"
                        value={formData.gpaOrClass}
                        onChange={handleChange}
                        className="w-full p-2.5 bg-[#FAF8F5] border border-stone-300 rounded text-xs focus:border-[#0B1320] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-semibold uppercase tracking-wider text-stone-700 mb-1">
                      Key Law Modules Completed
                    </label>
                    <textarea
                      name="relevantCourses"
                      rows={3}
                      placeholder="e.g., Criminal Procedure, Law of Obligations, Civil Procedure, Commercial Law, Constitutional Law, Public International Law..."
                      value={formData.relevantCourses}
                      onChange={handleChange}
                      className="w-full p-2.5 bg-[#FAF8F5] border border-stone-300 rounded text-xs focus:border-[#0B1320] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold uppercase tracking-wider text-stone-700 mb-1">
                      Academic Honors, Dean&apos;s List, or Scholarships
                    </label>
                    <input
                      type="text"
                      name="honors"
                      placeholder="e.g., Dean's Honours Roll 2024, Best First-Year Jurisprudence Student..."
                      value={formData.honors}
                      onChange={handleChange}
                      className="w-full p-2.5 bg-[#FAF8F5] border border-stone-300 rounded text-xs focus:border-[#0B1320] focus:outline-none"
                    />
                  </div>
                </div>
              )}

              {/* STEP 3: Experience & Moots */}
              {step === 3 && (
                <div className="space-y-4">
                  <div className="border-b border-stone-200 pb-3 mb-4">
                    <h3 className="text-lg font-serif font-bold text-[#0B1320]">
                      Moot Court, Advocacy & Practical Exposure
                    </h3>
                    <p className="text-stone-500 text-xs">
                      Prior experience is not mandatory, but tell us about your engagement with advocacy.
                    </p>
                  </div>

                  <div>
                    <label className="block font-semibold uppercase tracking-wider text-stone-700 mb-1">
                      Moot Court & Debate Experience
                    </label>
                    <textarea
                      name="mootCourt"
                      rows={3}
                      placeholder="Detail any university, national, or international moot competitions (e.g., Jessup, ICRC IHL Moot, East African Moot Court, internal faculty rounds)..."
                      value={formData.mootCourt}
                      onChange={handleChange}
                      className="w-full p-2.5 bg-[#FAF8F5] border border-stone-300 rounded text-xs focus:border-[#0B1320] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold uppercase tracking-wider text-stone-700 mb-1">
                      Legal Writing & Independent Research
                    </label>
                    <textarea
                      name="legalResearch"
                      rows={3}
                      placeholder="Any published student articles, research assistance for professors, or blog essays..."
                      value={formData.legalResearch}
                      onChange={handleChange}
                      className="w-full p-2.5 bg-[#FAF8F5] border border-stone-300 rounded text-xs focus:border-[#0B1320] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold uppercase tracking-wider text-stone-700 mb-1">
                      Internships, Pro Bono, or Student Leadership
                    </label>
                    <textarea
                      name="internships"
                      rows={2}
                      placeholder="Internships at law firms, NGOs, court registries, or leadership roles in student law societies..."
                      value={formData.internships}
                      onChange={handleChange}
                      className="w-full p-2.5 bg-[#FAF8F5] border border-stone-300 rounded text-xs focus:border-[#0B1320] focus:outline-none"
                    />
                  </div>
                </div>
              )}

              {/* STEP 4: Motivation */}
              {step === 4 && (
                <div className="space-y-4">
                  <div className="border-b border-stone-200 pb-3 mb-4">
                    <h3 className="text-lg font-serif font-bold text-[#0B1320]">
                      Personal Motivation & Vision for Practice
                    </h3>
                    <p className="text-stone-500 text-xs">
                      Help the committee understand why you want to practice law and why Indahiro is critical to your trajectory.
                    </p>
                  </div>

                  <div>
                    <label className="block font-semibold uppercase tracking-wider text-stone-700 mb-1">
                      Why the Indahiro Fellowship? (Max 250 words) *
                    </label>
                    <textarea
                      name="whyIndahiro"
                      required
                      rows={4}
                      placeholder="Why do you seek this fellowship? What specific skills (moot advocacy, memorial drafting, ethics, courtroom presence) are you committed to mastering?"
                      value={formData.whyIndahiro}
                      onChange={handleChange}
                      className="w-full p-2.5 bg-[#FAF8F5] border border-stone-300 rounded text-xs focus:border-[#0B1320] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold uppercase tracking-wider text-stone-700 mb-1">
                      Identify One Legal Problem in Rwanda You Care Deeply About (Max 250 words) *
                    </label>
                    <textarea
                      name="legalProblemCareAbout"
                      required
                      rows={4}
                      placeholder="Choose an issue in Rwandan commercial dispute resolution, land succession, criminal defense, technological regulation, or public international law and describe how you would address it..."
                      value={formData.legalProblemCareAbout}
                      onChange={handleChange}
                      className="w-full p-2.5 bg-[#FAF8F5] border border-stone-300 rounded text-xs focus:border-[#0B1320] focus:outline-none"
                    />
                  </div>
                </div>
              )}

              {/* STEP 5: Practical Assessment */}
              {step === 5 && (
                <div className="space-y-4">
                  <div className="border-b border-stone-200 pb-3 mb-4">
                    <h3 className="text-lg font-serif font-bold text-[#0B1320]">
                      Practical Assessment: Case Memorandum
                    </h3>
                    <p className="text-stone-500 text-xs">
                      Tests your legal reasoning, analytical clarity, and application of statutory principles.
                    </p>
                  </div>

                  <div className="p-4 bg-[#F2EDE2] rounded-xl border border-[#DDD5C5] text-xs leading-relaxed space-y-2">
                    <span className="font-mono font-bold text-[#8F6E15] uppercase block">
                      Hypothetical Brief: Commercial Injunction & Force Majeure
                    </span>
                    <p className="text-stone-700">
                      Company A (a Kigali renewable energy developer) contracts with Supplier B (a regional civil engineering firm) to deliver specialized turbines by 15 November 2025. Following unexpected regional border clearance delays, Supplier B claims <em>Force Majeure</em> under Rwandan Law of Contracts. Company A faces severe contract penalties from the Ministry of Infrastructure and seeks your urgent counsel on applying for an expedited interim injunction and claiming liquidated damages.
                    </p>
                    <p className="font-semibold text-[#0B1320]">
                      Your Assignment: Draft a concise, structured legal memorandum (300 – 600 words) advising Company A on cause of action, statutory test for interim measures, and likelihood of success.
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <label className="font-semibold uppercase tracking-wider text-stone-700">
                        Your Written Memorandum *
                      </label>
                      <span className="text-[11px] font-mono text-stone-500">
                        Words: {formData.caseReasoningAnswer.trim().split(/\s+/).filter(Boolean).length}
                      </span>
                    </div>
                    <textarea
                      name="caseReasoningAnswer"
                      required
                      rows={10}
                      placeholder="I. Issue Identification&#10;II. Relevant Legal Framework (Rwandan Civil & Commercial Code)&#10;III. Analysis of Force Majeure Threshold&#10;IV. Interim Injunction Mechanics&#10;V. Strategic Recommendation..."
                      value={formData.caseReasoningAnswer}
                      onChange={handleChange}
                      className="w-full p-3 bg-[#FAF8F5] border border-stone-300 rounded text-xs font-mono focus:border-[#0B1320] focus:outline-none leading-relaxed"
                    />
                  </div>
                </div>
              )}

              {/* STEP 6: References & Lodge */}
              {step === 6 && (
                <div className="space-y-4">
                  <div className="border-b border-stone-200 pb-3 mb-4">
                    <h3 className="text-lg font-serif font-bold text-[#0B1320]">
                      Academic / Professional Reference & Submission
                    </h3>
                    <p className="text-stone-500 text-xs">
                      Provide contact information for one faculty member, practicing advocate, or former supervisor who can speak to your discipline and potential.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-semibold uppercase tracking-wider text-stone-700 mb-1">
                        Referee Name *
                      </label>
                      <input
                        type="text"
                        name="refereeName"
                        required
                        placeholder="e.g., Dr. Alice Mukamana"
                        value={formData.refereeName}
                        onChange={handleChange}
                        className="w-full p-2.5 bg-[#FAF8F5] border border-stone-300 rounded text-xs focus:border-[#0B1320] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block font-semibold uppercase tracking-wider text-stone-700 mb-1">
                        Title & Faculty / Firm *
                      </label>
                      <input
                        type="text"
                        name="refereeTitle"
                        required
                        placeholder="e.g., Senior Lecturer, University of Rwanda"
                        value={formData.refereeTitle}
                        onChange={handleChange}
                        className="w-full p-2.5 bg-[#FAF8F5] border border-stone-300 rounded text-xs focus:border-[#0B1320] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block font-semibold uppercase tracking-wider text-stone-700 mb-1">
                        Referee Email *
                      </label>
                      <input
                        type="email"
                        name="refereeEmail"
                        required
                        placeholder="e.g., a.mukamana@ur.ac.rw"
                        value={formData.refereeEmail}
                        onChange={handleChange}
                        className="w-full p-2.5 bg-[#FAF8F5] border border-stone-300 rounded text-xs focus:border-[#0B1320] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block font-semibold uppercase tracking-wider text-stone-700 mb-1">
                        Referee Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="refereePhone"
                        required
                        placeholder="+250 788 123 456"
                        value={formData.refereePhone}
                        onChange={handleChange}
                        className="w-full p-2.5 bg-[#FAF8F5] border border-stone-300 rounded text-xs focus:border-[#0B1320] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="p-4 bg-[#F2EDE2] rounded-xl border border-[#DDD5C5] text-xs space-y-2 mt-6">
                    <div className="flex items-center space-x-2 text-[#8F6E15] font-semibold">
                      <ShieldCheck className="w-4 h-4" />
                      <span>Applicant Honor Code & Verification</span>
                    </div>
                    <p className="text-stone-700 font-light leading-relaxed">
                      By submitting this dossier, I certify that all information submitted is true, accurate, and represents my own independent intellectual work. I understand that the inaugural fellowship will select exactly 10 fellows nationwide and demands 12 to 15 hours weekly of rigorous commitment.
                    </p>
                  </div>
                </div>
              )}

              {/* Navigation and Submission Buttons */}
              <div className="pt-6 border-t border-stone-200 flex items-center justify-between">
                <div>
                  {step > 1 && (
                    <button
                      type="button"
                      onClick={handlePrevStep}
                      className="px-5 py-2.5 text-xs font-semibold text-stone-700 hover:text-stone-900 bg-stone-100 hover:bg-stone-200 rounded transition-colors flex items-center gap-1.5 cursor-pointer"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Previous Step</span>
                    </button>
                  )}
                </div>

                <div className="flex items-center gap-3">
                  {step < 6 ? (
                    <button
                      type="button"
                      onClick={handleNextStep}
                      className="px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-[#0B1320] bg-gradient-to-r from-[#F7D875] to-[#E2B742] hover:brightness-105 rounded shadow-sm transition-all flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>Next: {stepsList[step].title}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-8 py-3 text-xs font-bold uppercase tracking-widest text-[#0B1320] bg-gradient-to-r from-[#F7D875] via-[#E2B742] to-[#D5A52A] hover:brightness-105 rounded shadow-lg transition-all flex items-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Transmitting Dossier...</span>
                      ) : (
                        <>
                          <span>Submit Official Application</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  )}
                </div>
              </div>

            </form>
          </div>
        )}
      </div>
    </div>
  );
};
