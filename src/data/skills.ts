import type { SkillCategory } from '../types/portfolio';

export const skillCategories: SkillCategory[] = [
  {
    category: 'Frontend Engineering',
    description: 'Modern, component-driven web architectures built for scale, responsiveness, and resilience.',
    skills: [
      { name: 'React.js (v18 & v19)', level: 'Core Expertise', note: 'Hooks, Suspense, Error Boundaries, Render Optimization' },
      { name: 'TypeScript', level: 'Production Core', note: 'Strict typing, Generics, Utility Types, Interface Contracts' },
      { name: 'JavaScript (ES6+)', level: 'Deep Foundation', note: 'Closures, Event Loop, Async/Await, DOM APIs' },
      { name: 'Tailwind CSS', level: 'Design Systems', note: 'Custom tokens, fluid clamp utilities, minimal bundle overhead' },
      { name: 'HTML5 Semantic Architecture', level: 'Standard', note: 'Accessible landmarks, screen reader optimization' },
      { name: 'CSS3 & Modern Layouts', level: 'Standard', note: 'CSS Grid, Flexbox, Container Queries, CSS Math' }
    ]
  },
  {
    category: 'Mobile Development',
    description: 'Cross-platform native mobile engineering with seamless native bridge integration.',
    skills: [
      { name: 'React Native', level: 'Core Expertise', note: 'Cross-platform iOS & Android, Metro Bundler, Native Modules' },
      { name: 'Vision Camera & Frame Processors', level: 'Specialized', note: 'Real-time camera feed processing & barcode recognition' },
      { name: 'Mobile Navigation', level: 'Production Core', note: 'React Navigation, deep linking, native gesture sheets' },
      { name: 'Offline Storage', level: 'Production Core', note: 'AsyncStorage, SQLite, persistent cache strategies' }
    ]
  },
  {
    category: 'State Management & Data Architecture',
    description: 'Predictable, deterministic state containers and server-state caching.',
    skills: [
      { name: 'Redux Toolkit (RTK)', level: 'Production Core', note: 'Slices, createAsyncThunk, normalized entity adapters' },
      { name: 'React Context & Custom Hooks', level: 'Standard', note: 'Encapsulated domain logic, reactive subscriptions' },
      { name: 'Form State & Validation', level: 'Production Core', note: 'React Hook Form, Zod schema validation' }
    ]
  },
  {
    category: 'Integration & Networking',
    description: 'Reliable network layers, optimistic updates, and resilient error recovery.',
    skills: [
      { name: 'REST APIs & HTTP Protocols', level: 'Production Core', note: 'Axios, Fetch API, interceptors, retry policies, rate-limiting' },
      { name: 'Backend Integration Contracts', level: 'Production Core', note: 'DTO mapping, schema synchronization, status code handling' },
      { name: 'WebSockets & Real-Time Streams', level: 'Practical', note: 'Event-driven real-time feeds and live telemetry' }
    ]
  },
  {
    category: 'Tooling & Developer Experience',
    description: 'High-speed build tools, version control, and profiling instrumentation.',
    skills: [
      { name: 'Vite & Modern Bundlers', level: 'Primary Tooling', note: 'Fast HMR, rollup plugins, code splitting, asset pipelines' },
      { name: 'Git & Version Control', level: 'Standard', note: 'Branching strategies, rebase workflows, atomic commits' },
      { name: 'Browser Developer Tools', level: 'Profiling', note: 'Performance panel, memory leak profiling, network throttling' },
      { name: 'Storybook & Component Isolation', level: 'Design Systems', note: 'Visual testing, interactive component catalogs' }
    ]
  },
  {
    category: 'Engineering Practices & Quality',
    description: 'The disciplines that ensure software remains fast, accessible, and maintainable over years.',
    skills: [
      { name: 'Reusable Component Architecture', level: 'Discipline', note: 'Atomic design, compound components, headless separation' },
      { name: 'Performance Optimization', level: 'Discipline', note: 'Virtualization, lazy-loading, memoization, tree-shaking' },
      { name: 'Accessibility (WCAG AA)', level: 'Discipline', note: 'Keyboard focus management, ARIA roles, color contrast' },
      { name: 'Debugging & Production Triage', level: 'Discipline', note: 'Systematic root-cause analysis, defensive error handling' }
    ]
  }
];
