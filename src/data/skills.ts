import type { SkillCategory } from '../types/portfolio';

export const skillCategories: SkillCategory[] = [
  {
    category: 'Frontend Web & Mobile',
    description: 'Component-driven architectures, responsive engineering, and cross-platform mobile delivery.',
    skills: [
      { name: 'React.js & React 19', level: 'Production Core', note: 'Hooks, Suspense, Custom Hooks, Functional Components' },
      { name: 'React Native', level: 'Mobile Core', note: 'Cross-platform iOS/Android, Native bridges, Metro bundler' },
      { name: 'TypeScript', level: 'Production Core', note: 'Strict typing, Generics, DTO interfaces, compile-time safety' },
      { name: 'JavaScript (ES6+)', level: 'Deep Foundation', note: 'Closures, Event loop, Async/await, DOM manipulation' },
      { name: 'Component-Driven Architecture', level: 'Architecture', note: 'Atomic design, reusable abstractions for 6+ modules' },
      { name: 'Tailwind CSS & SCSS', level: 'Design Systems', note: 'Design tokens, custom fluid utilities, SCSS modules' },
      { name: 'HTML5 & Responsive Layouts', level: 'Standard', note: 'CSS Grid, Flexbox, Mobile-first responsive design' },
      { name: 'Redux & Redux Toolkit (RTK)', level: 'State Core', note: 'Normalized slices, async thunks, predictable store' }
    ]
  },
  {
    category: 'APIs & Real-Time Integration',
    description: 'Low-latency telemetry streaming, real-time event loops, and robust backend contracts.',
    skills: [
      { name: 'WebSockets', level: 'Real-Time Telemetry', note: 'Live automotive telemetry, low-latency state synchronization' },
      { name: 'REST APIs & Fetch/Axios', level: 'Production Core', note: 'HTTP interceptors, dynamic data rendering, error handling' },
      { name: 'Node.js & Express.js', level: 'Backend Context', note: 'API contract definition, mock services, server middleware' }
    ]
  },
  {
    category: 'Performance & Optimization',
    description: 'Disciplines that achieved 35–40% reduction in initial load times and buttery 60fps frame rates.',
    skills: [
      { name: 'Render Optimization', level: 'Specialized', note: 'Eliminating wasted re-renders, profiling render trees' },
      { name: 'Memoization', level: 'Specialized', note: 'useMemo, useCallback, React.memo for high-frequency feeds' },
      { name: 'Code Splitting & Lazy Loading', level: 'Specialized', note: 'Dynamic imports, route-based splitting, minimal chunks' },
      { name: 'Testing & Code Quality', level: 'Testing', note: 'Jest, React Testing Library, SonarQube automated checks' }
    ]
  },
  {
    category: 'Tools & DevOps Workflow',
    description: 'Modern build pipelines, version control workflows, and collaborative Agile tooling.',
    skills: [
      { name: 'Git & Version Control', level: 'Workflow Core', note: 'Certified by GeeksforGeeks, atomic commits, branching' },
      { name: 'GitHub & Bitbucket', level: 'Workflow Core', note: 'PR reviews, CI workflows, repository management' },
      { name: 'Agile & Scrum Delivery', level: 'Methodology', note: 'Sprint planning, daily standups, retrospective continuous delivery' },
      { name: 'JIRA & Azure DevOps', level: 'Management', note: 'Issue tracking, sprint backlogs, feature board management' }
    ]
  },
  {
    category: 'Standards, Security & Accessibility',
    description: 'Regulated workflows, secure authentication, and universal digital access.',
    skills: [
      { name: 'HIPAA-Aware Architecture', level: 'Regulated Domain', note: 'Secure patient workflows, data privacy, regulatory compliance' },
      { name: 'WCAG AA Accessibility', level: 'Inclusion', note: 'Screen reader optimization, keyboard focus rings, semantic tags' },
      { name: 'OAuth 2.0 & JWT Authentication', level: 'Security', note: 'Token lifecycle, session persistence, route guards' }
    ]
  }
];
