import type { SkillCategory } from '../types/portfolio';

export const skillCategories: SkillCategory[] = [
  {
    category: 'React & Component Architecture',
    description: 'Modern component systems, advanced hook patterns, and robust SPA navigation.',
    skills: [
      { name: 'React.js & React 19', level: 'Production Core', note: 'Functional components, Suspense, Concurrent rendering' },
      { name: 'React Hooks & Custom Hooks', level: 'Core Paradigm', note: 'Reusable UI logic, lifecycle management, reactive effects' },
      { name: 'Component Architecture', level: 'Design Systems', note: 'Atomic component design, abstractions adopted across 6+ modules' },
      { name: 'React Router', level: 'Navigation Core', note: 'Dynamic routing, nested layouts, protected route guards' },
      { name: 'TypeScript', level: 'Production Core', note: 'Strict typing, Generics, DTO interfaces, compile-time safety' },
      { name: 'JavaScript (ES6+)', level: 'Deep Foundation', note: 'Event loop, Async/await, closures, functional programming' }
    ]
  },
  {
    category: 'State Management',
    description: 'Deterministic, predictable application state architecture for enterprise & real-time systems.',
    skills: [
      { name: 'Redux Toolkit (RTK)', level: 'Production Core', note: 'createSlice, createAsyncThunk, normalized entity adapters' },
      { name: 'Redux', level: 'State Architecture', note: 'Centralized store, custom middleware, action dispatch flows' },
      { name: 'Context API', level: 'Scoped State', note: 'Theme providers, modal contexts, dependency injection' }
    ]
  },
  {
    category: 'Mobile Development',
    description: 'Cross-platform native mobile engineering for iOS and Android with hardware access.',
    skills: [
      { name: 'React Native', level: 'Mobile Core', note: 'Cross-platform iOS & Android, store-published applications' },
      { name: 'API Integration', level: 'Mobile Core', note: 'Offline SQLite/MMKV caching, RESTful synchronization, resilient networking' },
      { name: 'Mobile UI Optimization', level: 'Performance', note: 'Sub-16ms frame targets, Reanimated 3, native driver animations' },
      { name: 'Vision Camera & Hardware', level: 'Hardware APIs', note: 'Hardware-accelerated camera barcodes, ML Kit OCR extraction' }
    ]
  },
  {
    category: 'Performance & Optimization',
    description: 'Methodologies that delivered 35–40% faster initial load times and smooth 60fps frame rates.',
    skills: [
      { name: 'React Profiling', level: 'Diagnostics', note: 'React DevTools Profiler, flamegraphs, wasted render auditing' },
      { name: 'Memoization', level: 'Specialized', note: 'useMemo, useCallback, React.memo for high-frequency data streams' },
      { name: 'Lazy Loading & Code Splitting', level: 'Bundle Optimization', note: 'Dynamic imports, route chunking, minimal initial payloads' }
    ]
  },
  {
    category: 'Testing & Code Quality',
    description: 'Comprehensive test suites ensuring reliability, high test coverage, and regression safety.',
    skills: [
      { name: 'React Testing Library', level: 'UI Testing', note: 'User-centric component testing, accessibility query selectors' },
      { name: 'Vitest', level: 'Test Runner', note: 'Fast ESM unit testing, mock functions, watch mode execution' },
      { name: 'Jest', level: 'Unit & Integration', note: 'Snapshot testing, asynchronous API mocking, test runners' }
    ]
  },
  {
    category: 'Build & Deployment Workflow',
    description: 'Modern developer toolchains, containerization, and continuous delivery pipelines.',
    skills: [
      { name: 'Vite', level: 'Toolchain Core', note: 'Lightning HMR, rollup bundle optimization, modern asset pipelines' },
      { name: 'CI/CD Pipelines', level: 'Automation', note: 'Automated test runners, build gates, GitHub Actions deployments' },
      { name: 'Azure DevOps', level: 'Enterprise CI/CD', note: 'Sprint planning, backlog management, CI pipeline monitoring' },
      { name: 'Docker', level: 'Containerization', note: 'Isolated development environments, multi-stage production builds' },
      { name: 'Git & GitHub', level: 'Version Control', note: 'Certified by GeeksforGeeks, feature branching, PR code reviews' }
    ]
  },
  {
    category: 'APIs, Real-Time & Security',
    description: 'Low-latency telemetry streaming, REST contracts, and healthcare compliance.',
    skills: [
      { name: 'WebSockets', level: 'Real-Time Telemetry', note: '10+ Hz vehicle telemetry streams, buffered frame batching' },
      { name: 'REST APIs & Fetch/Axios', level: 'Data Pipeline', note: 'HTTP interceptors, dynamic data rendering, error handling' },
      { name: 'HIPAA & PIPEDA Compliance', level: 'Regulated Domain', note: 'Privacy manifests, secure client-side storage, zero tracking' },
      { name: 'WCAG AA Accessibility', level: 'Inclusion', note: 'Accessible keyboard navigation, aria attributes, color contrast' }
    ]
  }
];
