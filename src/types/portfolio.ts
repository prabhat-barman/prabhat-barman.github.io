export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  location: string;
  description: string;
}

export interface CertificationItem {
  name: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
}

export interface ProfileData {
  brandName: string;
  fullName: string;
  role: string;
  shortBio: string;
  editorialBio: string[];
  experienceYears: string;
  location: string;
  timezone: string;
  availability: {
    status: boolean;
    label: string;
    description: string;
  };
  contact: {
    email: string;
    phone: string;
    github: string;
    linkedin: string;
    instagram?: string;
    twitter?: string;
    resumeUrl: string;
    hasResumeFile: boolean;
  };
  metrics: Array<{
    label: string;
    value: string;
    detail: string;
  }>;
  corePrinciples: Array<{
    title: string;
    description: string;
    tag: string;
  }>;
  education: EducationItem[];
  certifications: CertificationItem[];
}

export interface ProjectCaseStudy {
  overview: string;
  problem: string;
  goals: string[];
  role: string[];
  technicalApproach: string[];
  keyDecisions: Array<{
    decision: string;
    rationale: string;
  }>;
  challengesAndSolutions: Array<{
    challenge: string;
    solution: string;
  }>;
  verifiedHighlights: string[];
}

export interface ProjectData {
  id: string;
  title: string;
  category: string;
  year: string;
  featured: boolean;
  tagline: string;
  summary: string;
  role: string;
  techStack: string[];
  accentColor?: string;
  demoUrl?: string;
  repoUrl?: string;
  appStoreUrl?: string;
  playStoreUrl?: string;
  caseStudy: ProjectCaseStudy;
  visible: boolean;
  previewType: 'automotive-telemetry' | 'healthcare-hipaa' | 'design-system' | 'education-exam' | 'creative-lab' | 'mobile-simulator' | 'wellvalet-scanner';
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  highlight?: string;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: Array<{
    name: string;
    level: string;
    note?: string;
  }>;
}

export type PlaygroundTab = 'kinetic-type' | 'wave-grid' | 'micro-ui' | 'audio-spectrum';
