import type { ProjectData } from '../types/portfolio';

export const projectsData: ProjectData[] = [
  {
    id: 'siriusxm-telemetry',
    title: 'SiriusXM Connected Vehicles',
    category: 'Automotive IoT & Real-Time Telemetry',
    year: '2023 — Present',
    featured: true,
    tagline: 'Real-time vehicle monitoring dashboard streaming low-latency WebSocket telemetry.',
    summary: 'A high-performance automotive intelligence dashboard displaying live vehicle speed, GPS positioning, battery health, and diagnostic alerts with optimized sub-100ms render cycles.',
    role: 'Software Engineer — Real-Time WebSocket Architecture, UI Memoization & Diagnostic Map Components',
    techStack: ['React.js', 'TypeScript', 'WebSockets', 'Redux Toolkit', 'Tailwind CSS', 'Render Optimization', 'REST APIs'],
    accentColor: '#CCFF00',
    demoUrl: '',
    repoUrl: '',
    visible: true,
    previewType: 'automotive-telemetry',
    caseStudy: {
      overview: 'SiriusXM Connected Vehicles platform aggregates streaming vehicular diagnostic telemetry across connected fleets, delivering immediate health metrics, GPS geofencing, and proactive critical alert triggers.',
      problem: 'High-frequency telemetry data streams (10+ packet updates per second) were overwhelming the React component tree, causing UI stutters, CPU spikes, and delayed map coordinate updates.',
      goals: [
        'Stream real-time vehicle speed, battery state-of-charge, and GPS telemetry via persistent WebSockets.',
        'Improve UI rendering performance by 40% through strict memoization and code-splitting.',
        'Develop modular UI components for telemetry gauges, diagnostic alert banners, and live fleet maps.',
        'Increase user operational engagement by 20% through responsive, data-driven interfaces.'
      ],
      role: [
        'Engineered the real-time WebSocket communication layer with automated reconnect and heartbeat protocols.',
        'Implemented selective memoization using useMemo, useCallback, and React.memo to isolate high-frequency telemetry updates from unaffected UI panels.',
        'Created modular, reusable UI components for telemetry speedometers, diagnostic alert feeds, and battery gauges.',
        'Applied route-level code splitting and lazy loading to drastically cut initial bundle payload.'
      ],
      technicalApproach: [
        'Decoupled incoming raw socket telemetry packets from the main render cycle using buffered frame batching.',
        'Employed normalized Redux state slices with indexed key-value lookup for instant vehicle retrieval.',
        'Rendered SVG circular gauges with hardware-accelerated CSS transforms rather than continuous canvas repaints.'
      ],
      keyDecisions: [
        {
          decision: 'Frame-Throttled Socket Data Ingestion',
          rationale: 'Batching WebSocket messages to match requestAnimationFrame intervals prevented redundant intermediate React re-renders while keeping gauges visually instantaneous.'
        },
        {
          decision: 'Isolated Telemetry Widget State',
          rationale: 'Separated speed and battery gauges into independent leaf components so parent dashboards never re-render during real-time speed fluctuations.'
        }
      ],
      challengesAndSolutions: [
        {
          challenge: 'Intermittent vehicular connectivity causing missed alert packets and socket disconnects.',
          solution: 'Engineered an exponential backoff reconnect handler with an indexed client-side event replay queue.'
        },
        {
          challenge: 'Heavy memory footprint during prolonged multi-hour live telemetry sessions.',
          solution: 'Implemented capped circular buffers for historical time-series chart data, capping DOM memory usage.'
        }
      ],
      verifiedHighlights: [
        '40% improvement in UI performance through memoization and code splitting.',
        'Live low-latency WebSocket telemetry streaming for speed, GPS, and diagnostics.',
        '20% increase in user engagement through responsive, data-driven interfaces.',
        'Standardized reusable automotive UI components for fleet diagnostics and maps.'
      ]
    }
  },
  {
    id: 'irisinsights-healthcare',
    title: 'IrisInsights.us',
    category: 'Regulated Healthcare Platform',
    year: '2023 — 2024',
    featured: true,
    tagline: 'HIPAA-compliant patient workflow architecture and accessible clinical interfaces.',
    summary: 'A secure, HIPAA-compliant healthcare web application engineered for sensitive patient records, clinical workflows, and WCAG AA accessibility standards.',
    role: 'Software Engineer — HIPAA-Compliant Frontend Modules, WCAG Accessibility & Cross-Browser Consistency',
    techStack: ['React.js', 'TypeScript', 'Tailwind CSS', 'Redux Toolkit', 'WCAG AA', 'OAuth 2.0 / JWT', 'REST APIs'],
    accentColor: '#00C2FF',
    demoUrl: 'https://irisinsights.us',
    repoUrl: '',
    visible: true,
    previewType: 'healthcare-hipaa',
    caseStudy: {
      overview: 'IrisInsights.us delivers modern, HIPAA-compliant patient management interfaces for healthcare providers, clinical administrators, and patient engagement workflows.',
      problem: 'Healthcare applications must balance strict federal data privacy mandates (HIPAA) with effortless usability for doctors and medical staff under time-critical conditions, requiring flawless accessibility across all assistive technologies.',
      goals: [
        'Develop HIPAA-compliant frontend modules supporting secure patient workflows and zero-leak session handling.',
        'Translate complex medical and healthcare regulations into scalable, maintainable React UI architecture.',
        'Ensure full WCAG AA accessibility compliance and cross-browser consistency across all enterprise environments.',
        'Maintain rock-solid security with encrypted session tokens and automatic idle timeouts.'
      ],
      role: [
        'Architected HIPAA-compliant React components adhering strictly to healthcare data masking rules.',
        'Implemented WCAG AA keyboard navigation, high-contrast visual tokens, and screen-reader ARIA live regions.',
        'Integrated secure REST APIs with OAuth 2.0 token expiration interceptors and secure in-memory caching.',
        'Conducted rigorous cross-browser testing across Chrome, Safari, Firefox, and Edge to guarantee zero UI regressions.'
      ],
      technicalApproach: [
        'Enforced strict TypeScript interfaces mirroring compliant healthcare data transfer objects (DTOs).',
        'Implemented sensitive patient data masking filters that obscure Protected Health Information (PHI) unless explicitly unmasked by authorized roles.',
        'Created accessible modal dialogs with automated focus trapping and keyboard escape management.'
      ],
      keyDecisions: [
        {
          decision: 'In-Memory PHI State Cache',
          rationale: 'Avoided storing sensitive patient health records in localStorage/sessionStorage, eliminating XSS extraction vectors and ensuring strict HIPAA alignment.'
        },
        {
          decision: 'Automated Idle Session Guard',
          rationale: 'Integrated passive mouse and keyboard activity listeners with a 15-minute HIPAA idle timeout countdown modal.'
        }
      ],
      challengesAndSolutions: [
        {
          challenge: 'Rendering high-density clinical lab charts while adhering to high-contrast WCAG ratios.',
          solution: 'Created an accessible color token palette verified through automated axe-core audits and contrast analyzers.'
        },
        {
          challenge: 'Complex multi-step patient onboarding forms with conditional clinical validation.',
          solution: 'Engineered a schema-driven form state machine with step-level validation and auto-save drafts.'
        }
      ],
      verifiedHighlights: [
        'HIPAA-compliant frontend modules with secure patient data handling.',
        '100% WCAG AA accessibility compliance verified across screen readers and keyboard navigation.',
        'Scalable, maintainable React component architecture for regulated enterprise healthcare.',
        'Cross-browser consistency tested across enterprise browser standards.'
      ]
    }
  },
  {
    id: 'netlink-design-system',
    title: 'floq_ui & Enterprise Architecture',
    category: 'Enterprise UI System & Reusable Framework',
    year: '2022 — Present',
    featured: true,
    tagline: 'Standardized component abstractions across 6+ modules, reducing duplicate code by 30%.',
    summary: 'A unified enterprise design system and reusable component suite built at Netlink Software, powering multiple high-traffic client applications with virtualized data grids and schema-driven forms.',
    role: 'Lead UI Architecture — Reusable Abstractions, Performance Optimization & Cross-Squad Adoption',
    techStack: ['React.js', 'TypeScript', 'Tailwind CSS', 'Redux Toolkit', 'Code Splitting', 'Storybook', 'Agile/Scrum'],
    accentColor: '#8C52FF',
    demoUrl: '',
    repoUrl: '',
    visible: true,
    previewType: 'design-system',
    caseStudy: {
      overview: 'Designed and deployed reusable component abstractions at Netlink Software adopted across 6+ enterprise modules, eliminating UI fragmentation and accelerating feature delivery by ~20%.',
      problem: 'Engineering teams across multiple enterprise modules were building divergent button states, date pickers, and data tables from scratch, resulting in massive code duplication and maintenance overhead.',
      goals: [
        'Design reusable component abstractions for 6+ modules, reducing duplicate code by 30%.',
        'Lead frontend performance optimization initiatives, achieving a 35–40% reduction in initial load time.',
        'Standardize typography, color tokens, and layout guidelines across all enterprise applications.',
        'Enable backend and QA teams to test standardized, accessible UI primitives with high confidence.'
      ],
      role: [
        'Designed modular component primitives (data tables, form inputs, modal dialogs, status badges).',
        'Led the performance optimization drive using bundle analysis, dynamic imports, and memoization.',
        'Authored component usage documentation and collaborated with Agile squads to guide adoption.',
        'Coordinated with backend teams to establish clean API contracts and data normalization patterns.'
      ],
      technicalApproach: [
        'Adopted compound component patterns (e.g. Table.Root, Table.Header, Table.Row) for flexible developer ergonomics.',
        'Employed virtualization for high-density enterprise tables rendering thousands of records at steady 60fps.',
        'Built tree-shakeable ES module packages ensuring consuming applications only bundle imported components.'
      ],
      keyDecisions: [
        {
          decision: '30% Code Duplication Reduction via Shared Abstractions',
          rationale: 'Consolidating form fields and table components into a single shared library eliminated duplicate code across 6+ squads.'
        },
        {
          decision: 'Route-Level Code Splitting',
          rationale: 'Dynamically loading heavier charting and report modules slashed initial bundle size, cutting load times by 35–40%.'
        }
      ],
      challengesAndSolutions: [
        {
          challenge: 'Migrating legacy enterprise modules to new design system without breaking existing business logic.',
          solution: 'Built backward-compatible wrapper adapters that allowed squads to migrate incrementally component-by-component.'
        },
        {
          challenge: 'Ensuring design consistency across varied client brand themes.',
          solution: 'Implemented CSS custom property token overrides for themes while keeping core layout logic immutable.'
        }
      ],
      verifiedHighlights: [
        'Reduced duplicate code by 30% across 6+ enterprise modules.',
        'Achieved a 35–40% reduction in initial load time via memoization and lazy loading.',
        'Accelerated feature delivery timelines by ~20%.',
        'Adopted by distributed engineering squads in production enterprise environments.'
      ]
    }
  },
  {
    id: 'language-academy',
    title: 'Language Academy',
    category: 'EdTech & Exam Simulation Platform',
    year: '2022 — 2023',
    featured: false,
    tagline: 'Modern education platform for language proficiency exams with analytics and mock tests.',
    summary: 'A responsive education platform for students preparing for language certification exams, featuring timed mock test modules, audio playback assessments, score tracking, and performance analytics.',
    role: 'Frontend Engineer — Student Dashboard, Mock Test Engine & Performance Analytics',
    techStack: ['React.js', 'JavaScript (ES6+)', 'Redux Toolkit', 'Tailwind CSS', 'REST APIs', 'Audio API'],
    accentColor: '#FF6B00',
    demoUrl: '',
    repoUrl: '',
    visible: true,
    previewType: 'education-exam',
    caseStudy: {
      overview: 'Language Academy enables language learners to prepare for international proficiency exams through realistic timed testing simulations, automated scoring rubrics, and detailed performance insights.',
      problem: 'Students needed an intuitive interface that mirrored real-world computer-based exam conditions—including strict timers, audio passage playback, and instant performance feedback—without distracting UI clutter.',
      goals: [
        'Build responsive and reusable UI components using React.js and modern frontend architecture.',
        'Implement student dashboard, authentication flow, mock test modules, score tracking, and analytics.',
        'Ensure sub-second question transitions and resilient state persistence during test sessions.',
        'Provide actionable visual score breakdowns across reading, writing, listening, and speaking.'
      ],
      role: [
        'Developed the interactive exam test runner with countdown timer and question navigator.',
        'Built student dashboard visual score cards displaying historical progress and target percentiles.',
        'Integrated audio playback controls for listening comprehension exercises.',
        'Managed exam session state persistence to prevent loss of answers during accidental page refreshes.'
      ],
      technicalApproach: [
        'Created a deterministic Redux exam slice tracking current question index, answers map, and elapsed time.',
        'Implemented auto-save triggers on every answer selection syncing with local storage and backend REST endpoints.',
        'Used fluid responsive layouts ensuring tests could be taken seamlessly on laptops, tablets, or phones.'
      ],
      keyDecisions: [
        {
          decision: 'Offline-Resilient Exam State',
          rationale: 'Saved candidate progress locally on every keystroke/selection so network blips never disrupted a timed test.'
        },
        {
          decision: 'Distraction-Free Exam Mode',
          rationale: 'Engineered a minimalist fullscreen layout mode hiding all non-essential navigation during active tests.'
        }
      ],
      challengesAndSolutions: [
        {
          challenge: 'Synchronizing audio passage playback with question timer restrictions.',
          solution: 'Built custom HTML5 audio controllers with event callbacks that automatically unlocked question fields upon audio completion.'
        }
      ],
      verifiedHighlights: [
        'Interactive student dashboard with comprehensive score analytics.',
        'Timed mock test modules mirroring official exam specifications.',
        'Responsive and reusable UI components built with React.js.',
        'Seamless authentication and student session management.'
      ]
    }
  },
  {
    id: 'creative-experiments',
    title: 'Creative Frontend Experiments',
    category: 'Interaction Lab & Creative Coding',
    year: 'Continuous',
    featured: false,
    tagline: 'Micro-interactions, kinetic typography, and canvas mathematics.',
    summary: 'A curated suite of interaction prototypes exploring modern browser graphics, velocity-based typography physics, 60fps canvas wave simulations, and tactile micro-interactions.',
    role: 'Creative Developer — Interaction Design, Canvas Math, DOM Animation Optimization',
    techStack: ['React 19', 'TypeScript', 'HTML5 Canvas API', 'CSS Math (clamp, trig)', 'Lucide Icons'],
    accentColor: '#CCFF00',
    demoUrl: '#playground',
    repoUrl: 'https://github.com/prabhatbarman',
    visible: true,
    previewType: 'creative-lab',
    caseStudy: {
      overview: 'An open playground where interaction design and software performance meet. These experiments serve as testbeds for UI patterns before bringing them into production applications.',
      problem: 'Modern web applications often feel sterile and repetitive. These experiments explore how restrained, mathematically calculated animations can evoke tactile joy without degrading Core Web Vitals.',
      goals: [
        'Build smooth 60fps physics animations without heavy third-party rendering engines.',
        'Respect prefers-reduced-motion without breaking the core functionality.',
        'Demonstrate deep mastery of the DOM, Canvas 2D context, and gesture math.'
      ],
      role: [
        'Designed and implemented all interaction formulas, spring physics, and canvas rendering loops.'
      ],
      technicalApproach: [
        'Used requestAnimationFrame loops with delta-time calculation to ensure consistent physics across 60Hz, 120Hz, and 144Hz displays.',
        'Employed native CSS custom properties for hardware-accelerated transforms and opacity adjustments.'
      ],
      keyDecisions: [
        {
          decision: 'Vanilla Canvas 2D over Three.js/WebGL',
          rationale: 'Avoided multi-megabyte bundle overhead for 2D wave equations; vanilla Canvas achieved identical visual fidelity under 5kb total footprint.'
        }
      ],
      challengesAndSolutions: [
        {
          challenge: 'Preventing excessive React re-renders during high-frequency mousemove events.',
          solution: 'Directly updated canvas buffers and refs without triggering React reconciliation cycles.'
        }
      ],
      verifiedHighlights: [
        'Interactive real-time kinetic typography distortion.',
        'Damped wave grid canvas simulation at steady 60fps.',
        'Tactile micro-interaction laboratory with instant visual haptics.'
      ]
    }
  }
];
