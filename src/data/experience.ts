import type { ExperienceItem } from '../types/portfolio';

export const experienceData: ExperienceItem[] = [
  {
    id: 'exp-1',
    company: 'Product & Engineering Practice',
    role: 'Senior Software Engineer (Frontend & Mobile)',
    period: '2023 — Present',
    location: 'Bengaluru, India / Hybrid',
    type: 'Full-time & Project Delivery',
    description: 'Leading frontend architecture for multi-platform products across React.js web and React Native mobile ecosystems.',
    responsibilities: [
      'Architect modular, scalable component libraries with strict TypeScript typings and design token synchronization.',
      'Direct mobile application engineering on React Native, integrating camera frame processors, offline persistence, and biometric auth.',
      'Conduct rigorous code reviews focused on runtime performance, bundle-size budgets, accessibility (WCAG AA), and code reusability.',
      'Partner closely with product management and UX design to transform intricate user flows into seamless, testable production features.'
    ],
    technologies: ['React.js', 'React Native', 'TypeScript', 'Redux Toolkit', 'Tailwind CSS', 'Vite', 'REST APIs'],
    highlight: 'Drove frontend standards and design systems used across consumer mobile apps and enterprise portals.'
  },
  {
    id: 'exp-2',
    company: 'Enterprise Software & Digital Platforms',
    role: 'Software Engineer (Frontend)',
    period: '2021 — 2023',
    location: 'Bengaluru, India',
    type: 'Full-time',
    description: 'Developed high-density enterprise interfaces, data visualization dashboards, and reusable form validation engines.',
    responsibilities: [
      'Built and maintained reusable enterprise design systems (floq_ui) adopted across distributed product engineering squads.',
      'Engineered virtualized data tables capable of rendering 10k+ rows with smooth 60fps sorting and inline editing.',
      'Optimized Core Web Vitals, reducing First Contentful Paint (FCP) and Cumulative Layout Shift (CLS) through asset optimization and route-level code splitting.',
      'Collaborated with backend teams to establish clean RESTful API contracts, data normalization, and optimistic mutation patterns.'
    ],
    technologies: ['React.js', 'JavaScript (ES6+)', 'TypeScript', 'Redux Toolkit', 'HTML5', 'CSS3', 'Git', 'Webpack'],
    highlight: 'Architected schema-driven form generation pipelines, cutting new form implementation time significantly.'
  },
  {
    id: 'exp-3',
    company: 'Creative Technology & Digital Solutions',
    role: 'Associate Frontend Developer',
    period: '2020 — 2021',
    location: 'India',
    type: 'Full-time',
    description: 'Implemented responsive web applications, modern landing experiences, and client-facing interfaces.',
    responsibilities: [
      'Translated wireframes and high-fidelity Figma designs into pixel-accurate, cross-browser responsive web pages.',
      'Implemented clean CSS layouts using modern Flexbox, CSS Grid, and custom animations without heavy script dependencies.',
      'Integrated third-party REST APIs and managed component lifecycle states with modern React hooks.',
      'Maintained version control workflows with Git and participated in agile sprints and daily standups.'
    ],
    technologies: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'REST APIs', 'Git'],
    highlight: 'Established a reputation for detail-oriented UI fidelity and zero visual regression in QA passes.'
  }
];
