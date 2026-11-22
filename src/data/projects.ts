import type { ProjectData } from '../types/portfolio';

export const projectsData: ProjectData[] = [
  {
    id: 'netlink-design-system',
    title: 'FLOQ',
    category: 'Enterprise Design System & UI Architecture',
    year: '2023 — Present',
    featured: true,
    tagline: 'Standardized enterprise component framework and design tokens deployed across 6+ production modules.',
    summary: 'A unified enterprise UI system and modular component architecture developed at Netlink Software. Standardized typography scales, accessible data grids, token variables, and form primitives across 6+ distinct engineering squads—reducing duplicate code by 30%, cutting initial load times by 35–40% through strict tree-shaking and route-level code splitting, and accelerating feature delivery by ~20%.',
    role: 'Lead UI Systems Engineer — Design Tokens, Component Architecture, Storybook & Rollup Bundler',
    techStack: ['React 19', 'TypeScript', 'Tailwind CSS', 'Redux Toolkit', 'Design Tokens', 'Storybook 8', 'Radix UI Primitives', 'Rollup Bundler', 'WCAG 2.1 AA'],
    accentColor: '#8C52FF',
    demoUrl: '',
    repoUrl: '',
    visible: true,
    previewType: 'design-system',
    caseStudy: {
      overview: 'FLOQ is an enterprise-grade component framework and design token system developed at Netlink Software to eliminate UI fragmentation, enforce brand consistency, and accelerate frontend velocity across distributed engineering squads.',
      problem: 'Engineering teams across multiple enterprise modules were writing redundant button variants, modal layers, date pickers, and data tables from scratch. This led to a 40%+ code duplication rate, divergent user experiences, and substantial maintenance overhead across releases.',
      goals: [
        'Design and deploy reusable component abstractions for 6+ enterprise modules, cutting duplicate code by 30%.',
        'Achieve a 35–40% reduction in initial load time via selective memoization, tree-shaking, and lazy loading.',
        'Accelerate sprint release timelines by approximately 20% across distributed engineering squads.',
        'Establish automated Storybook documentation, visual regression tests, and zero-runtime design tokens.'
      ],
      role: [
        'Architected the atomic token hierarchy (colors, spacing, elevation, typography) using CSS custom properties.',
        'Developed 40+ production-grade accessible React & TypeScript components built on headless Radix UI primitives.',
        'Implemented compound component patterns for virtualized data grids, filter bars, and modal sheets.',
        'Configured side-effects-free ESM & CJS package compilation with Rollup for optimal consumer bundle tree-shaking.',
        'Led internal architecture reviews and authored comprehensive Storybook documentation for adoption across squads.'
      ],
      technicalApproach: [
        'Paired headless Radix UI accessibility logic with strict Tailwind CSS variant mapping for uncompromised ARIA support.',
        'Implemented zero-runtime CSS token variables allowing instantaneous runtime theme swapping without re-rendering.',
        'Configured bundle size tracking in CI to alert and prevent regression in consumer bundle footprints.',
        'Applied route-level code splitting and granular React.memo isolation across high-density table views.'
      ],
      keyDecisions: [
        {
          decision: 'Headless Primitives with Atomic Token Styling',
          rationale: 'Decoupled accessible keyboard behavior from presentation so consumer teams could style custom views without breaking ARIA compliance.'
        },
        {
          decision: 'Strict ESM Tree-Shaking Architecture',
          rationale: 'Configured side-effects-free package exports with Rollup so consumer applications only bundle components they explicitly import.'
        }
      ],
      challengesAndSolutions: [
        {
          challenge: 'Supporting backward compatibility across legacy enterprise modules during migration.',
          solution: 'Engineered an incremental adoption shim and automated codemods to migrate legacy component calls with zero breaking downtime.'
        },
        {
          challenge: 'Maintaining consistent 60fps rendering in high-density data grids with 500+ records.',
          solution: 'Built windowed virtual scrolling rendering only visible rows, reducing active DOM nodes by 80%.'
        }
      ],
      verifiedHighlights: [
        'Reduced duplicate code by 30% across 6+ production enterprise modules.',
        'Slashing initial load time by 35–40% via memoization and modular code splitting.',
        'Accelerated sprint feature delivery timelines by ~20% across squads.',
        'Adopted by distributed engineering squads in production enterprise environments.'
      ]
    }
  },
  {
    id: 'demand-management-system',
    title: 'Demand Management System — B2B Vendor & Resource Portal',
    category: 'Enterprise B2B SaaS · Workflow Automation · Resource Management',
    year: '2023 — 2024',
    featured: true,
    tagline: 'High-throughput enterprise B2B platform connecting corporate resource demands with multi-vendor fulfillment pipelines.',
    summary: 'A mission-critical enterprise SaaS platform streamlining vendor subcontracting, requirement allocation, candidate pipeline screening, and interview scheduling across enterprise procurement ecosystems. Features fine-grained Role-Based Access Control (RBAC), real-time SLA metrics, dynamic form builders, and virtualized candidate allocation grids.',
    role: 'Senior Frontend Engineer — Enterprise React Architecture, Workflow State Machines & Role-Based Security',
    techStack: ['React.js', 'TypeScript', 'Redux Toolkit', 'Tailwind CSS', 'REST APIs', 'RBAC Security', 'Virtual Tables', 'Formik / Zod Validation', 'SLA Analytics'],
    accentColor: '#8B5CF6',
    demoUrl: '',
    repoUrl: '',
    visible: true,
    previewType: 'demand-portal',
    caseStudy: {
      overview: 'An enterprise B2B resource management platform streamlining vendor subcontracting, requirement allocation, candidate pipeline screening, and interview scheduling across enterprise procurement ecosystems.',
      problem: 'Enterprises working with dozens of staffing vendors struggled with slow email threads, mismatched candidate formats, manual spreadsheet tracking, and zero visibility into vendor fulfillment SLAs and margin compliance.',
      goals: [
        'Digitize the end-to-end talent demand lifecycle: requirement creation, vendor broadcasting, candidate submission, and automated screening.',
        'Implement fine-grained Role-Based Access Control (RBAC) ensuring enterprise hiring managers and external vendors see strictly partitioned data.',
        'Build virtualized high-density data tables handling thousands of candidate profiles with sub-50ms filtering.',
        'Automate SLA compliance tracking with visual countdown indicators and audit-logged candidate progression.'
      ],
      role: [
        'Architected the frontend application structure using React.js, TypeScript, and normalized Redux Toolkit slices.',
        'Built dynamic demand wizard supporting multi-step approval workflows and custom validation rules.',
        'Implemented high-performance virtualized candidate grid with batch review actions and inline status updates.',
        'Integrated JWT-based RBAC authorization guards across route and component levels.',
        'Engineered real-time SLA tracking dashboard displaying vendor response times and fulfillment conversion rates.'
      ],
      technicalApproach: [
        'Utilized Redux Toolkit Entity Adapter for normalized state storage and lightning-fast client lookups.',
        'Built reusable workflow state machines managing candidate states (Submitted → Screened → Interview → Offer → Onboarded).',
        'Integrated visual SLA threshold alerts with dynamic progress rings and automated warning triggers.',
        'Implemented client-side CSV and Excel batch data parsing for high-volume candidate profile imports.'
      ],
      keyDecisions: [
        {
          decision: 'Normalized State Architecture with Entity Adapter',
          rationale: 'Prevented nested re-renders when updating individual candidate statuses in lists of 500+ applicants.'
        },
        {
          decision: 'Client-Side Permission Directives',
          rationale: 'Centralized RBAC logic in custom hooks to ensure secure, clean conditional rendering of pricing, margins, and contact info.'
        }
      ],
      challengesAndSolutions: [
        {
          challenge: 'Handling complex multi-level approval hierarchies that varied per enterprise client.',
          solution: 'Engineered a configuration-driven workflow engine that dynamically renders approval stages based on role schemas.'
        },
        {
          challenge: 'Maintaining instant UI feedback during bulk candidate pipeline operations.',
          solution: 'Implemented optimistic UI updates with automated rollback triggers in case of backend validation errors.'
        }
      ],
      verifiedHighlights: [
        'Eliminated manual email and spreadsheet tracking across talent procurement.',
        'Sub-50ms instant client-side search and filtering across 1,000+ candidate records.',
        'Fine-grained RBAC protecting enterprise commercial rates and sensitive candidate PII.',
        'Real-time SLA tracking dashboard reducing requirement-to-fill turnaround by 25%.'
      ]
    }
  },
  {
    id: 'irisinsights-healthcare',
    title: 'IrisInsights.us',
    category: 'Regulated Healthcare Platform · HIPAA Compliant · Clinical Telehealth',
    year: '2023 — 2024',
    featured: true,
    tagline: 'HIPAA-compliant healthcare data platform with secure clinician workflows and accessible patient management.',
    summary: 'A secure, cloud-based clinical therapy management and EMR platform designed for healthcare providers, clinicians, and patients. Built with zero-leak state architectures, encrypted Protected Health Information (PHI) handling, 100% WCAG 2.1 AA accessibility, and automated idle session timeouts in full compliance with federal HIPAA standards.',
    role: 'Frontend Healthcare Systems Engineer — HIPAA Architecture, Clinician Dashboards & WCAG Accessibility',
    techStack: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux Toolkit', 'HIPAA Secure Vault', 'WCAG 2.1 AA', 'OAuth 2.0 / JWT', 'REST APIs'],
    accentColor: '#00C2FF',
    demoUrl: 'https://irisinsights.us',
    repoUrl: '',
    visible: true,
    previewType: 'healthcare-hipaa',
    caseStudy: {
      overview: 'IrisInsights.us delivers modern, HIPAA-compliant patient management interfaces for healthcare providers, clinical administrators, and patient engagement workflows across specialized therapy disciplines.',
      problem: 'Healthcare applications must balance strict federal data privacy mandates (HIPAA) with effortless usability for doctors and medical staff under time-critical conditions, requiring flawless accessibility across all assistive technologies.',
      goals: [
        'Develop HIPAA-compliant frontend modules supporting secure patient workflows and zero-leak session handling.',
        'Ensure 100% compliance with WCAG 2.1 AA accessibility standards for screen readers and keyboard navigation.',
        'Design intuitive patient records view with masked PII and audit-logged data disclosure triggers.',
        'Provide real-time scheduling, therapy session documentation, and billing status tracking.'
      ],
      role: [
        'Constructed ephemeral state management patterns to ensure Protected Health Information (PHI) is purged on tab close or session expiration.',
        'Implemented accessible keyboard-navigable forms and ARIA live regions for assistive medical technologies.',
        'Engineered patient intake workflows with client-side field-level encryption before payload transmission.',
        'Built clinician scheduling calendar with timezone-aware appointment booking.',
        'Conducted end-to-end automated accessibility audits verifying zero WCAG violations.'
      ],
      technicalApproach: [
        'Configured automated idle timers disconnecting authenticated sessions after inactivity to satisfy HIPAA audit requirements.',
        'Used semantic HTML5 elements with strict ARIA attribute mapping, achieving a verified 100% score on Lighthouse Accessibility.',
        'Integrated token refresh interceptors handling expired OAuth tokens without losing in-progress clinical notes.',
        'Designed high-contrast, dyslexia-friendly typography and focus indicator tokens for medical clinic environments.'
      ],
      keyDecisions: [
        {
          decision: 'Zero-Persistence PHI Cache in LocalStorage',
          rationale: 'Kept clinical records strictly in memory with automatic session clearance to eliminate shared-workstation data breaches.'
        },
        {
          decision: 'Masked-by-Default Field Architecture',
          rationale: 'Protected patient identifiers with click-to-unmask triggers logged to the compliance audit trail.'
        }
      ],
      challengesAndSolutions: [
        {
          challenge: 'Preventing data loss during detailed clinical documentation when network drops occur in hospital basements.',
          solution: 'Engineered an encrypted, in-memory draft autosave mechanism that syncs immediately when connectivity resumes.'
        },
        {
          challenge: 'Complex therapy billing code entry with hundreds of ICD-10 and CPT codes.',
          solution: 'Built an asynchronous typeahead search component with fuzzy matching and code descriptions, cutting entry time by 50%.'
        }
      ],
      verifiedHighlights: [
        'Production healthcare platform live at https://irisinsights.us/.',
        '100% WCAG 2.1 AA compliance verified across all patient-facing modules.',
        'Zero-leak ephemeral state architecture satisfying federal HIPAA compliance audits.',
        'Accelerated clinical note documentation speed for therapists by ~30%.'
      ]
    }
  },
  {
    id: 'siriusxm-mobile-drive',
    title: 'SiriusXM Drive Mobile Companion',
    category: 'Mobile Engineering · React Native · Connected Automotive IoT',
    year: '2023 — Present',
    featured: true,
    tagline: 'Cross-platform React Native companion app with Bluetooth LE vehicle pairing and real-time remote telematics.',
    summary: 'A high-performance React Native mobile application for connected vehicle drivers. Features Bluetooth Low Energy (BLE) key fob proximity authentication, remote lock/unlock, engine start/stop, tire pressure telemetry, real-time GPS vehicle tracking with Apple/Google Maps, and fluid 60 FPS gesture animations powered by Reanimated 3 worklets.',
    role: 'Lead Mobile Systems Engineer — React Native Architecture, Bluetooth LE Bridges & UI Thread Animations',
    techStack: ['React Native', 'TypeScript', 'Reanimated 3', 'Redux Toolkit', 'Bluetooth LE', 'iOS & Android', 'MMKV Fast Caching', 'Gesture Handler', 'JSI Native Bridge'],
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
        'Design offline-first telemetry caching with ultra-fast MMKV key-value storage.'
      ],
      role: [
        'Architected core React Native component tree with strict separation of presentation and business logic.',
        'Implemented Reanimated 3 gesture handlers and interactive physics-based controls for remote start and climate dials.',
        'Constructed native JSI bridge wrappers for Bluetooth Low Energy peripheral scanning and RSSI signal calibration.',
        'Integrated encrypted offline storage with MMKV for instantaneous app launch without cold network stalls.',
        'Optimized bundle size and execution using Hermes engine bytecode precompilation.'
      ],
      technicalApproach: [
        'Offloaded high-frequency gesture animations and physics springs to the native UI thread via Reanimated 3 worklets.',
        'Abstracted platform differences between iOS CoreBluetooth and Android BLE into a unified TypeScript manager.',
        'Configured Hermes JavaScript engine with bytecode precompilation, achieving ~45% faster cold startup times.',
        'Constructed modular state management architecture using Redux Toolkit slices.'
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
  }
];
