export type MentorCategory =
  | 'All'
  | 'Advocates'
  | 'Judges'
  | 'Prosecutors'
  | 'Academics'
  | 'Legal Practitioners'
  | 'Policy Professionals';

export interface Mentor {
  id: string;
  name: string;
  title: string;
  institution: string;
  category: Exclude<MentorCategory, 'All'>;
  bio: string;
  expertise: string[];
  yearsExperience: number;
}

export interface Fellow {
  id: string;
  name: string;
  university: string;
  yearOfStudy: string;
  areaOfInterest: string;
  bio: string;
  mootExperience: string;
  researchInterests: string;
  mentorName: string;
  mentorTitle: string;
  achievements: string[];
  quote: string;
}

export type PartnerCategory =
  | 'Government'
  | 'Legal Profession'
  | 'Judiciary'
  | 'Universities'
  | 'Law Firms'
  | 'Civil Society'
  | 'International Partners';

export interface Partner {
  id: string;
  name: string;
  category: PartnerCategory;
  acronym?: string;
  roleDescription: string;
}

export type ApplicationStatus =
  | 'submitted'
  | 'under_review'
  | 'shortlisted'
  | 'interviewed'
  | 'selected'
  | 'declined';

export interface ApplicationScore {
  analyticalReasoning: number; // 0 - 25
  advocacyPotential: number; // 0 - 25
  publicServiceIntegrity: number; // 0 - 20
  commitmentDiscipline: number; // 0 - 15
  practicalScore: number; // 0 - 15
}

export interface ApplicationSubmission {
  id: string;
  submittedAt: string;
  status: ApplicationStatus;
  personal: {
    fullName: string;
    email: string;
    phone: string;
    university: string;
    yearOfStudy: string;
    nationalId: string;
    location: string;
  };
  academic: {
    programme: string;
    gpaOrClass: string;
    relevantCourses: string;
    honors: string;
  };
  experience: {
    mootCourt: string;
    debate: string;
    legalResearch: string;
    leadership: string;
    volunteering: string;
    internships: string;
    publications: string;
  };
  motivation: {
    whyIndahiro: string;
    whyLegalPractice: string;
    legalProblemCareAbout: string;
    stepsTaken: string;
  };
  practicalAssessment: {
    answer: string;
    wordCount: number;
  };
  references: {
    refereeName: string;
    refereeTitle: string;
    refereeInstitution: string;
    refereeEmail: string;
    refereePhone: string;
    relationship: string;
  };
  scores: ApplicationScore;
  committeeNotes: string[];
  interviewSlot?: string;
  interviewScore?: number;
}

export interface JournalArticle {
  id: string;
  title: string;
  subtitle: string;
  category:
    | 'Fellow Story'
    | 'Legal Article'
    | 'Moot Achievement'
    | 'Mentor Reflection'
    | 'Courtroom Experience'
    | 'Policy Discussion'
    | 'Indahiro Event';
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: string[];
  keyQuote?: string;
}

export interface CompetencyStandard {
  id: string;
  capability: string;
  rationale: string;
  indicators: string[];
  practiceBenchmark: string;
}
