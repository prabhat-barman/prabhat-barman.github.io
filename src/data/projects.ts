import type { ProjectData } from '../types/portfolio';

export const projectsData: ProjectData[] = [
  {
    id: 'wellvalet',
    title: 'WellValet',
    category: 'Mobile & Web Application',
    year: '2024 — Present',
    featured: true,
    tagline: 'Intelligent ingredient scanning and dietary transparency engine.',
    summary: 'A high-performance grocery scanning application built for rapid barcode recognition, real-time dietary ingredient analysis, allergen warnings, and nutritional breakdown.',
    role: 'Lead Frontend & Mobile Engineer — UI Architecture, Camera Stream Integration, Offline Barcode Caching',
    techStack: ['React Native', 'React.js', 'TypeScript', 'Redux Toolkit', 'Vision Camera', 'Tailwind CSS', 'REST APIs'],
    accentColor: '#CCFF00',
    demoUrl: 'https://wellvalet.com', // configurable
    repoUrl: '', // omitted if private enterprise repo
    visible: true,
    previewType: 'mobile-scanner',
    caseStudy: {
      overview: 'WellValet empowers consumers to instantly decipher complex grocery product labels by scanning barcodes or ingredients lists in grocery store environments with variable lighting and intermittent connectivity.',
      problem: 'Consumers with allergies or specific dietary restrictions (e.g. celiac, vegan, diabetic) spend minutes deciphering fine-print ingredient labels in supermarket aisles. Existing barcode scanners either required heavy internet bandwidth or suffered from sluggish camera preview render loops.',
      goals: [
        'Deliver sub-200ms barcode detection and ingredient classification on mobile devices.',
        'Engineer an offline-first cache strategy for frequently scanned food items.',
        'Create a clear, high-contrast visual alert hierarchy for critical allergen matches.',
        'Maintain 60fps scrolling across extensive ingredient and additive breakdown lists.'
      ],
      role: [
        'Architected the cross-platform React Native client and companion web inspection portal.',
        'Integrated low-latency device camera frame processors with native barcode recognition.',
        'Built deterministic dietary rule-matching UI states with Redux Toolkit.',
        'Implemented accessible ingredient badges with color-blind friendly iconography and WCAG AA contrast.'
      ],
      technicalApproach: [
        'Utilized native vision camera frame processors to decouple scanning computations from the JavaScript event loop.',
        'Employed normalized Redux state slices with indexed key-value lookup for instant offline matching.',
        'Engineered responsive nutritional sheet modals with gesture-driven sheet spring physics.',
        'Separated scanner viewports into lightweight decoupled components to prevent unnecessary camera feed remounts.'
      ],
      keyDecisions: [
        {
          decision: 'Decoupled Frame Processor from Main JS Thread',
          rationale: 'Scanning high-density QR and EAN-13 barcodes on low-end Android devices was causing UI freezes. Native frame processing eliminated thread contention.'
        },
        {
          decision: 'Optimistic Ingredient Categorization UI',
          rationale: 'Displayed instant cached hazard badges (e.g., "Contains Gluten") before downloading full manufacturer nutritional breakdowns.'
        }
      ],
      challengesAndSolutions: [
        {
          challenge: 'Handling low-light camera glare on glossy packaging wrappers.',
          solution: 'Implemented dynamic torch toggle alongside automatic bounding-box visual guides that coach the user on optimal scanning distance.'
        },
        {
          challenge: 'Rendering hundreds of microscopic additive codes (E-numbers) without layout shifts.',
          solution: 'Built a virtualized expandable list view with pre-computed item heights and search indexing.'
        }
      ],
      verifiedHighlights: [
        'Real-time barcode detection and dietary risk categorization.',
        'Offline-first synchronized SQLite/AsyncStorage local caching.',
        'WCAG AA accessible color palettes with distinct allergen iconography.',
        'Cross-platform codebase sharing business logic between web and mobile.'
      ]
    }
  },
  {
    id: 'playdrama',
    title: 'PlayDrama & PlayCinema',
    category: 'Entertainment & Streaming Platform',
    year: '2023 — 2024',
    featured: true,
    tagline: 'Low-latency digital entertainment client with seamless playback transitions.',
    summary: 'A modern video streaming and entertainment frontend engineered for cinema-grade playback, instant episode switching, interactive subtitles, and intuitive media catalogues.',
    role: 'Frontend Engineer — Video Player Integration, Media Catalog UI, State Management & Responsive Layouts',
    techStack: ['React.js', 'React Native', 'TypeScript', 'HLS.js / Video.js', 'Tailwind CSS', 'Redux Toolkit', 'REST APIs'],
    accentColor: '#8C52FF',
    demoUrl: '',
    repoUrl: '',
    visible: true,
    previewType: 'streaming-player',
    caseStudy: {
      overview: 'PlayDrama / PlayCinema provides thousands of hours of high-definition drama and cinema content through a responsive web and mobile application designed for frictionless binge-watching.',
      problem: 'Video streaming users demand immediate start times, zero layout shifts when toggling between windowed and fullscreen modes, and effortless episode transitions without losing track of audio preferences or subtitle states.',
      goals: [
        'Build custom video player controls with smooth keyboard shortcuts and touch gestures.',
        'Ensure zero memory leaks during continuous multi-hour episode switching.',
        'Develop responsive media carousels with fluid hover previews and bookmarking.',
        'Provide localized subtitle rendering with custom font size and styling controls.'
      ],
      role: [
        'Engineered the core custom video playback overlay with custom scrubbers, volume gestures, and speed controls.',
        'Built the catalog exploration screens featuring horizontal thumbnail carousels and genre filters.',
        'Managed playback telemetry and watch-history synchronization across sessions.',
        'Implemented resilient reconnection and buffer-starvation recovery handlers.'
      ],
      technicalApproach: [
        'Created an abstraction layer over native HTML5 video and mobile media engines to unify keyboard and touch events.',
        'Utilized CSS container queries and fluid typography for consistent video HUD scaling across phones, tablets, and ultra-wide desktop monitors.',
        'Implemented virtualized horizontal scroll containers with eager pre-fetching of next-episode thumbnails.'
      ],
      keyDecisions: [
        {
          decision: 'Custom HUD Overlay Architecture',
          rationale: 'Default browser player controls vary wildly across Safari, Chrome, and mobile browsers. A custom HUD guaranteed uniform design and accessible keyboard shortcuts.'
        },
        {
          decision: 'Debounced Playback Progress Sync',
          rationale: 'Throttled playback time update events to avoid flooding the user state API while maintaining accurate resume points.'
        }
      ],
      challengesAndSolutions: [
        {
          challenge: 'Safari iOS fullscreen video taking over native UI and ignoring custom overlays.',
          solution: 'Implemented custom playsinline container orchestration with fallback controls optimized for Safari webkit restrictions.'
        },
        {
          challenge: 'Jitter during rapid scrubbing across heavy 4K video timelines.',
          solution: 'Implemented preview thumbnail sprites that render during drag scrub before committing the player seek command.'
        }
      ],
      verifiedHighlights: [
        'Custom accessible video player with full keyboard control.',
        'Adaptive bitrate playback and buffering state indicators.',
        'Responsive media grids optimized for desktop, tablet, and mobile.',
        'Reliable cross-session watch history and episode bookmarking.'
      ]
    }
  },
  {
    id: 'floq-ui',
    title: 'floq_ui',
    category: 'Enterprise UI System & Application',
    year: '2022 — 2023',
    featured: true,
    tagline: 'Production design system, schema-driven form engine, and high-density data tables.',
    summary: 'A unified enterprise web frontend suite and reusable component library featuring complex data workflows, schema-driven forms, virtualized tables, and strict accessibility compliance.',
    role: 'UI Architect & Frontend Engineer — Component Library Architecture, Form Engine, Table Virtualization',
    techStack: ['React.js', 'TypeScript', 'Tailwind CSS', 'Redux Toolkit', 'React Hook Form', 'Zod', 'Vite', 'Storybook'],
    accentColor: '#00C2FF',
    demoUrl: '',
    repoUrl: '',
    visible: true,
    previewType: 'design-system',
    caseStudy: {
      overview: 'floq_ui was created to solve fragmentation across multi-team enterprise web workflows by providing a battle-tested, accessible component foundation and schema-driven data screens.',
      problem: 'Enterprise teams were constantly rewriting complex multi-step forms, data tables with 50+ columns, and filtering modals, resulting in conflicting UI patterns, visual inconsistency, and poor keyboard accessibility.',
      goals: [
        'Deliver a shared UI foundation of 40+ accessible components with strict TypeScript types.',
        'Support high-density data tables rendering 10,000+ records with column sorting, filtering, and row selection.',
        'Implement dynamic form generation driven by Zod validation schemas.',
        'Achieve full WCAG AA compliance with automated accessibility linting.'
      ],
      role: [
        'Defined the design token architecture (spacing, typography, color semantics, and elevation).',
        'Implemented the virtualized data grid with multi-column sorting and frozen header rows.',
        'Engineered the reusable form abstraction supporting async validation and complex conditional fields.',
        'Authored component documentation and comprehensive usage guidelines.'
      ],
      technicalApproach: [
        'Used headless component primitives (Radix UI patterns) paired with Tailwind CSS for customizable styling.',
        'Adopted row virtualization (TanStack Virtual / custom virtualizers) to render only visible DOM nodes.',
        'Created composable compound components (e.g. Table.Root, Table.Header, Table.Row, Table.Cell) for maximum flexibility.'
      ],
      keyDecisions: [
        {
          decision: 'Compound Component Pattern',
          rationale: 'Avoided bloated configuration props on giant monolithic components, giving consuming teams full JSX composition control.'
        },
        {
          decision: 'Strict Schema-First Form Validation',
          rationale: 'Coupled React Hook Form with Zod to ensure compile-time type safety from backend API contracts to form fields.'
        }
      ],
      challengesAndSolutions: [
        {
          challenge: 'Rendering wide data tables with 40+ editable inputs without UI lag.',
          solution: 'Isolated cell-level render state using uncontrolled input hooks and debounced batch updates.'
        },
        {
          challenge: 'Keyboard accessibility across nested dropdowns and modal drawers.',
          solution: 'Enforced automatic focus trapping, escape-key restoration, and explicit ARIA live regions for async state announcements.'
        }
      ],
      verifiedHighlights: [
        'Standardized 40+ production components across multiple enterprise applications.',
        'Sub-16ms frame rates on 10,000+ row virtualized data grids.',
        '100% WCAG AA compliance verified via automated axe testing.',
        'Comprehensive TypeScript autocompletion and prop validation.'
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
    accentColor: '#FF6B00',
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
