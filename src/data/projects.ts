import type { ProjectData } from '../types/portfolio';

export const projectsData: ProjectData[] = [
  {
    id: 'wellvalet-mobile',
    title: 'WellValet — Grocery & Allergen Scanner',
    category: 'React Native · Mobile App · API Integration',
    year: '2024 — Present',
    featured: true,
    tagline: 'Canadian grocery barcode scanner app delivering instant personalized wellness scores, allergen alerts, and OCR ingredient analysis.',
    summary: 'A published cross-platform mobile application and web ecosystem available in Canada on the Apple App Store and Google Play Store. Features instant camera barcode scanning, personalized dietary allergen alerts (Gluten, Dairy, Peanuts, Tree Nuts, Vegan), multi-member family profiles, 0–100 Wellness Scoring, and Canadian PIPEDA-compliant privacy architecture.',
    role: 'Lead Mobile Engineer — React Native Architecture, Camera Barcode Scanner, Family Profiles, Allergen Engine & Store Release',
    techStack: ['React Native', 'Mobile App', 'API Integration', 'Vision Camera', 'OCR / ML Kit', 'Family Profiles', 'PIPEDA Compliant', 'Apple App Store', 'Google Play'],
    accentColor: '#34D399',
    demoUrl: 'https://www.wellvalet.com/',
    appStoreUrl: 'https://apps.apple.com/ca/app/wellvalet/id6778571808',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.cruiseanalytix.wellvalet',
    repoUrl: '',
    visible: true,
    previewType: 'wellvalet-scanner',
    caseStudy: {
      overview: 'WellValet is a live Canadian grocery and beauty barcode scanner app that provides instant personalized wellness scores (0–100), family profile allergen alerts, and OCR ingredient list analysis without ads, available on iOS, Android, and the web.',
      problem: 'Canadian grocery shoppers dealing with food allergies or health restrictions needed an instantaneous, ad-free way to decode complex additive codes and nutrition labels in under one second while standing in grocery aisles.',
      goals: [
        'Engineer a cross-platform React Native app deployed to the Apple App Store and Google Play Store in Canada.',
        'Implement sub-500ms camera barcode detection and offline-capable OCR text recognition for ingredients.',
        'Build a personalized dietary algorithm calculating Wellness Scores (0–100), customized allergen detection, and multi-user family profiles.',
        'Ensure full compliance with Canadian PIPEDA privacy regulations with zero third-party ad tracking.'
      ],
      role: [
        'Architected the React Native mobile codebase with modular separation between camera vision modules and allergen rules.',
        'Built real-time camera scanning viewfinder with hardware-accelerated barcode decoding.',
        'Engineered family profile management allowing separate allergen restrictions per family member.',
        'Designed and implemented the responsive web presence at wellvalet.com.',
        'Orchestrated end-to-end App Store and Google Play Store release submissions, privacy manifests, and review approvals.'
      ],
      technicalApproach: [
        'Coupled React Native Vision Camera with ML Kit barcode scanning for instant multi-format decoding (UPC-A, EAN-13).',
        'Implemented on-device OCR fallback for unbarcoded bulk items and hard-to-read ingredient lists.',
        'Engineered local SQLite/MMKV cache for over 50,000+ Canadian food products, enabling offline aisle scanning.'
      ],
      keyDecisions: [
        {
          decision: 'On-Device Privacy & PIPEDA Compliance',
          rationale: 'User allergen profiles and scan histories are processed locally on-device, satisfying Canadian PIPEDA privacy regulations without selling shopper data.'
        },
        {
          decision: 'Sub-500ms Scan-to-Score Pipeline',
          rationale: 'Pre-indexed local nutrition tables allowed instant score calculation without waiting on cold cloud API roundtrips.'
        }
      ],
      challengesAndSolutions: [
        {
          challenge: 'Recognizing distorted or glossy barcode packages under fluorescent grocery store lighting.',
          solution: 'Implemented multi-frame averaging with automatic torch illumination toggle and auto-focus region locking.'
        },
        {
          challenge: 'Detecting hidden allergen derivatives in bilingual Canadian English/French ingredient lists.',
          solution: 'Constructed an alias-mapping dictionary matching 400+ botanical and chemical terms for common allergens.'
        }
      ],
      verifiedHighlights: [
        'Published & active on the Apple App Store (Canada) and Google Play Store.',
        'Production website live at https://www.wellvalet.com/.',
        'Sub-500ms barcode scanning with camera vision integration.',
        '100% PIPEDA-compliant privacy architecture with zero third-party tracking.'
      ]
    }
  },
  {
    id: 'siriusxm-telemetry',
    title: 'SiriusXM Connected Vehicle (Trip Simulator – CerebrumX)',
    category: 'React · WebSockets · Real-time Dashboard',
    year: '2023 — Present',
    featured: true,
    tagline: 'Real-time vehicle monitoring dashboard streaming low-latency WebSocket telemetry.',
    summary: 'A high-performance automotive intelligence dashboard displaying live vehicle speed, GPS positioning, battery health, and diagnostic alerts with real-time data updates, sub-100ms dashboard responsiveness, and 60fps telemetry handling.',
    role: 'Software Engineer — Real-Time WebSocket Architecture, Dashboard Responsiveness, UI Memoization & Diagnostic Map Components',
    techStack: ['React.js', 'WebSockets', 'Real-time Dashboard', 'TypeScript', 'Redux Toolkit', 'Tailwind CSS', 'Render Optimization', 'REST APIs'],
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
    id: 'siriusxm-mobile-drive',
    title: 'SiriusXM Drive Mobile Companion',
    category: 'Mobile Engineering (React Native • iOS & Android)',
    year: '2023 — Present',
    featured: true,
    tagline: 'Cross-platform React Native telematics companion with Bluetooth LE pairing and remote vehicle controls.',
    summary: 'A high-fidelity React Native mobile application for connected vehicle drivers. Features BLE key fob authentication, remote engine start/stop, door lock toggles, live tire pressure telemetry, GPS locator with Apple/Google Maps integration, and 60fps animations powered by Reanimated 3.',
    role: 'Software Engineer — React Native Cross-Platform Architecture, Bluetooth LE Bridges & Gesture Animations',
    techStack: ['React Native', 'TypeScript', 'Reanimated 3', 'Redux Toolkit', 'Bluetooth LE', 'iOS & Android', 'MMKV Caching', 'Gesture Handler', 'JSI'],
    accentColor: '#CCFF00',
    demoUrl: '',
    repoUrl: '',
    visible: true,
    previewType: 'mobile-simulator',
    caseStudy: {
      overview: 'SiriusXM Drive Mobile Companion gives vehicle drivers immediate control of their connected cars directly from iOS and Android devices, bridging Bluetooth Low Energy proximity pairing with cloud telematics.',
      problem: 'Drivers needed instant, reliable remote vehicle interactions (e.g. unlocking doors or pre-cooling the cabin) even with spotty cellular reception, without draining phone battery or suffering slow native bridge latency.',
      goals: [
        'Engineer a cross-platform React Native mobile app deployed to both Apple App Store and Google Play Store.',
        'Implement sub-50ms native bridge communication for Bluetooth Low Energy (BLE) proximity detection.',
        'Achieve rock-solid 60 FPS gesture and fluid transitions using React Native Reanimated 3 worklets on UI thread.',
        'Design offline-first telemetry caching with fast MMKV key-value storage.'
      ],
      role: [
        'Architected core React Native component tree with strict separation of presentation and business logic.',
        'Implemented Reanimated 3 gesture handlers and interactive physics-based controls for remote start and climate dials.',
        'Constructed native JSI bridge wrappers for Bluetooth Low Energy peripheral scanning and RSSI signal calibration.',
        'Integrated encrypted offline storage with MMKV for instantaneous app launch without cold network stalls.'
      ],
      technicalApproach: [
        'Offloaded high-frequency gesture animations and physics springs to the native UI thread via Reanimated 3 worklets.',
        'Abstracted platform differences between iOS CoreBluetooth and Android BLE into a unified TypeScript manager.',
        'Configured Hermes JavaScript engine with bytecode precompilation, achieving ~45% faster cold startup times.'
      ],
      keyDecisions: [
        {
          decision: 'Reanimated 3 UI Thread Execution',
          rationale: 'Running gestures and spring animations directly on the native thread prevented JS thread bottlenecks during heavy background telemetry sync.'
        },
        {
          decision: 'MMKV Synchronous Storage over AsyncStorage',
          rationale: 'MMKV provided 30x faster read/write speeds, enabling zero-latency hydration of vehicle telemetry state upon app launch.'
        }
      ],
      challengesAndSolutions: [
        {
          challenge: 'Handling varied Android OEM battery saver policies killing background BLE telemetry listeners.',
          solution: 'Engineered a foreground service worker for Android paired with iOS background location and CoreBluetooth state restoration.'
        },
        {
          challenge: 'Rendering high-resolution vehicle 3D perspective wireframes without UI stutters.',
          solution: 'Utilized Skia-backed hardware-accelerated SVG paths with precomputed vector coordinates.'
        }
      ],
      verifiedHighlights: [
        'Seamless cross-platform deployment across iOS and Android with 95%+ shared code.',
        'Sub-50ms BLE signal responsiveness for keyless vehicle entry and proximity unlock.',
        'Zero dropped frames: 60 FPS gesture interactions powered by Reanimated 3 worklets.',
        'Hermes bytecode precompilation yielding ~45% reduction in cold application boot time.'
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
    repoUrl: 'https://github.com/prabhat-barman',
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
