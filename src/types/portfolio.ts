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
    github: string;
    linkedin: string;
    twitter?: string;
    resumeUrl: string; // configurable, hides or opens fallback if missing
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
  caseStudy: ProjectCaseStudy;
  visible: boolean;
  previewType: 'mobile-scanner' | 'streaming-player' | 'design-system' | 'creative-lab';
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  type: string; // "Full-time" | "Contract" | "Selected Engagement"
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
    level: string; // e.g. "Primary", "Advanced", "Production Core"
    note?: string;
  }>;
}

export type PlaygroundTab = 'kinetic-type' | 'wave-grid' | 'micro-ui' | 'audio-spectrum';
