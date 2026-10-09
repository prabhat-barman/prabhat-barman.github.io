import type { ProfileData } from '../types/portfolio';

export const profileData: ProfileData = {
  brandName: 'Prabhat.dev',
  fullName: 'Prabhat Barman',
  role: 'Software Engineer | React.js & React Native Developer',
  shortBio: 'Software Engineer with 4+ years of experience building scalable, high-performance web applications across automotive, healthcare, and enterprise domains with React.js, React Native, and real-time WebSockets.',
  editorialBio: [
    'I architect and build user interfaces that merge strict technical rigor with deliberate aesthetic restraint. Over the past 4+ years at Netlink Software Group, my work has centered on React.js web ecosystems and real-time systems—turning demanding product specs into performant, production-ready experiences across automotive telemetry, HIPAA-compliant healthcare, and enterprise platforms.',
    'I believe great software engineering lives in the nuance: predictable state machines, zero-jank frame rates, accessible interaction patterns, and modular design systems that teams can build upon for years without technical debt.',
    'Whether engineering WebSocket-driven vehicle telemetry dashboards, designing HIPAA-compliant clinical workflows, or optimizing render pipelines for 35–40% faster initial load times, I treat the browser runtime with deep architectural respect.'
  ],
  experienceYears: '4+ Years',
  location: 'Bhopal, Madhya Pradesh, India',
  timezone: 'IST (UTC+5:30)',
  availability: {
    status: true,
    label: 'Available for Senior Engineering Roles & Select Contracts',
    description: 'Open to high-impact frontend architecture positions, real-time web engineering, and bespoke React/React Native engagements.'
  },
  contact: {
    email: 'prabhatbarman98@gmail.com',
    phone: '+91 78790 29044',
    github: 'https://github.com/prabhatbarman',
    linkedin: 'https://linkedin.com/in/prabhat-barman',
    twitter: 'https://x.com/prabhat_dev',
    resumeUrl: '/resume.pdf',
    hasResumeFile: false // toggle to true when file placed in /public/resume.pdf
  },
  metrics: [
    {
      label: 'Performance Optimization',
      value: '35–40%',
      detail: 'Initial load time reduction via code-splitting & memoization'
    },
    {
      label: 'Reusable Architecture',
      value: '30% Less Code',
      detail: 'Reduced duplicate code across 6+ production enterprise modules'
    },
    {
      label: 'Production Background',
      value: '4+ YOE',
      detail: 'Automotive IoT, HIPAA healthcare & enterprise portals'
    }
  ],
  corePrinciples: [
    {
      title: 'Real-Time State & Telemetry',
      description: 'Interfaces streaming high-frequency WebSocket data must isolate render cycles. Optimizing memoization and event throttling preserves 60fps responsiveness.',
      tag: 'WebSockets & IoT'
    },
    {
      title: 'Architectural Reusability',
      description: 'Designing modular component abstractions that scale across 6+ enterprise modules, eliminating duplicate code and enforcing design consistency.',
      tag: 'Design Systems'
    },
    {
      title: 'Strict Regulatory Compliance & A11y',
      description: 'Translating complex HIPAA regulations and WCAG AA accessibility standards into secure, compliant, and accessible patient workflows.',
      tag: 'HIPAA & WCAG'
    },
    {
      title: 'Performance as Respect',
      description: 'Every byte and frame matters. Systematic profiling with browser tools, route-level lazy loading, and tree-shaking ensure snappy load times.',
      tag: 'Optimization'
    }
  ],
  education: [
    {
      degree: 'Bachelor of Engineering in Information Technology',
      institution: 'Sagar Group of Institutions (SIRT Bhopal) / RGPV',
      period: '2016 — 2020',
      location: 'Bhopal, Madhya Pradesh, India',
      description: 'Comprehensive study of software engineering, data structures, algorithms, and web technologies. Hands-on projects in frontend engineering and database architecture.'
    }
  ],
  certifications: [
    {
      name: 'React JS Certification',
      issuer: 'Newton School',
      date: 'Issued Dec 2025',
      credentialUrl: 'https://drive.google.com/file/d/16dT8JIeEuLniLasSphKcNmcOWk1rb293/view?usp=drive_link'
    },
    {
      name: 'Figma UI/UX Design Training',
      issuer: 'Netlink Software Group America Inc',
      date: 'Professional Certificate'
    },
    {
      name: 'JavaScript Certification',
      issuer: 'GeeksforGeeks',
      date: 'Professional Certificate',
      credentialUrl: 'https://drive.google.com/file/d/1u06n9kS8HjqeyFbo1kZ7MFmcBCbkMIxq/view?usp=drivesdk'
    },
    {
      name: 'Git Version Control',
      issuer: 'GeeksforGeeks',
      date: 'Professional Certificate',
      credentialUrl: 'https://drive.google.com/file/d/1he9nspf41p1wjdatg7fD_62Hmm7OUKJt/view?usp=drivesdk'
    }
  ]
};
