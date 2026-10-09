import type { ProfileData } from '../types/portfolio';

export const profileData: ProfileData = {
  brandName: 'Prabhat.dev',
  fullName: 'Prabhat',
  role: 'Software Engineer | React.js & React Native Developer',
  shortBio: 'Software engineer focused on thoughtful, performant web and mobile applications with 4+ years of hands-on frontend architecture.',
  editorialBio: [
    'I architect and build user interfaces that merge strict technical rigor with deliberate aesthetic restraint. Over the past 4+ years, my work has centered on React.js web ecosystems and React Native mobile applications—turning demanding product specs into performant, production-ready experiences.',
    'I believe great software engineering lives in the nuance: predictable state machines, zero-jank frame rates, accessible interaction patterns, and modular design systems that teams can build upon for years without technical debt.',
    'Whether engineering complex enterprise data grids, real-time ingredient analysis engines, or low-latency media playback flows, I treat the browser and the mobile runtime with deep architectural respect.'
  ],
  experienceYears: '4+ Years',
  location: 'Bengaluru, India',
  timezone: 'IST (UTC+5:30)',
  availability: {
    status: true,
    label: 'Available for Select Projects & Senior Roles',
    description: 'Open to high-impact software engineering roles, technical advisory, and bespoke frontend contracts.'
  },
  contact: {
    email: 'prabhat.developer@gmail.com', // user can update anytime in this config file
    github: 'https://github.com/prabhatbarman',
    linkedin: 'https://linkedin.com/in/prabhat-barman',
    twitter: 'https://x.com/prabhat_dev',
    resumeUrl: '/resume.pdf',
    hasResumeFile: false // toggle to true when real resume PDF is placed in /public/resume.pdf
  },
  metrics: [
    {
      label: 'Production Experience',
      value: '4+ YOE',
      detail: 'Specialized in React.js & React Native ecosystem'
    },
    {
      label: 'Core Focus',
      value: 'Web & Mobile',
      detail: 'Clean architecture, performance, accessibility'
    },
    {
      label: 'Quality Standards',
      value: 'WCAG AA',
      detail: 'Sub-100ms interactions, semantic foundation'
    }
  ],
  corePrinciples: [
    {
      title: 'Architectural Predictability',
      description: 'Interfaces are state machines. Clean boundaries between presentation, server cache, and UI state prevent regressions and make refactoring effortless.',
      tag: 'Architecture'
    },
    {
      title: 'Performance as Respect',
      description: 'Frame drops and sluggish load times waste human attention. I profile render trees, trim bundle weight, and build buttery 60fps interactions.',
      tag: 'Performance'
    },
    {
      title: 'Accessibility by Default',
      description: 'An interface that cannot be navigated by keyboard or assistive tech is an unfinished interface. Semantic HTML and ARIA standards are non-negotiable.',
      tag: 'Inclusion'
    },
    {
      title: 'Cross-Functional Empathy',
      description: 'I speak design language with product designers and API contracts with backend engineers, closing the gap between Figma mockups and production reality.',
      tag: 'Collaboration'
    }
  ]
};
