import type { ProjectData } from '../types/portfolio';

export const projectsData: ProjectData[] = [
  {
    id: 'cruise-car-tracker',
    title: 'CruisE — Vehicle Expense & Fleet Telematics',
    category: 'React Native · Expo · Mobile & Web · Fleet Telematics',
    year: '2024 — Present',
    featured: true,
    tagline: 'Cross-platform Canadian vehicle expense, fuel economy, and enterprise fleet telematics platform.',
    summary: 'A mission-critical automotive expense, trip intelligence, and fleet management ecosystem built with React Native (Expo) and React 19. Tracks live fuel consumption, scheduled maintenance intervals, insurance depreciation, and tax-deductible business mileage with CAN bus telemetry, real-time financial analytics, and bilingual Canadian English & French support.',
    role: 'Lead Mobile & Frontend Architect — React Native (Expo), Redux Toolkit, Real-Time Expense Analytics & Bilingual Architecture',
    techStack: ['React Native', 'Expo', 'React 19', 'TypeScript', 'Tailwind CSS', 'Redux Toolkit', 'Automotive IoT', 'Bilingual (EN/FR)', 'Telemetry'],
    accentColor: '#38BDF8',
    demoUrl: 'https://www.cruise-mu.com/',
    repoUrl: '',
    visible: true,
    previewType: 'automotive-telemetry',
    caseStudy: {
      overview: 'CruisE is a production mobile and web application (live at https://www.cruise-mu.com/) engineered to provide drivers and fleet operators complete transparency over vehicle operating costs, fuel economy, and preventive maintenance.',
      problem: 'Vehicle owners and commercial fleets struggle with fragmented expense tracking, volatile fuel costs, missed maintenance schedules, and complex tax mileage logging, leading to unexpected repair costs and compliance headaches.',
      goals: [
        'Build a high-performance cross-platform mobile application using React Native (Expo) and React 19.',
        'Develop an offline-first expense entry system for gas fill-ups and maintenance logs with instant local caching.',
        'Implement automated mileage and fuel efficiency computation with CAD/USD and L/100km vs MPG unit conversions.',
        'Deploy a bilingual Canadian English and French web platform live at cruise-mu.com.'
      ],
      role: [
        'Engineered the complete React Native mobile app architecture with modular state management using Redux Toolkit.',
        'Built interactive fuel economy visualizers, odometer trackers, and maintenance reminder push notifications.',
        'Developed and deployed the production web discovery portal at cruise-mu.com.'
      ],
      technicalApproach: [
        'Leveraged Expo SDK with modern React 19 architecture for native performance and rapid iteration.',
        'Engineered local SQLite caching for instant offline receipt logging with background cloud synchronization.',
        'Integrated an automated metric/imperial conversion engine tailored for North American cross-border travel.'
      ],
      keyDecisions: [
        {
          decision: 'Offline-First Entry Architecture',
          rationale: 'Guarantees zero data loss when logging fill-ups in remote low-connectivity highway corridors.'
        },
        {
          decision: 'Bilingual Architecture (EN/FR)',
          rationale: 'Essential for Canadian nationwide enterprise compliance, covering Quebec provincial standards.'
        }
      ],
      challengesAndSolutions: [
        {
          challenge: 'Accurate fuel consumption calculation across irregular fill-up intervals.',
          solution: 'Engineered a rolling-average algorithm accounting for partial fills and missed odometer entries.'
        }
      ],
      verifiedHighlights: [
        'Production web portal live at https://www.cruise-mu.com/.',
        'Full React Native & Expo production architecture supporting React 19.',
        'Bilingual English & French support with automated unit conversion.'
      ]
    }
  },
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
    id: 'netlink-design-system',
    title: 'FLOQ',
    category: 'Enterprise Design System & UI Architecture',
    year: '2023 — 2024',
    featured: true,
    tagline: 'Enterprise multi-brand design system and tokenized component architecture powering scalable web suites.',
    summary: 'A centralized enterprise UI architecture and component library designed to eliminate UI fragmentation, enforce WCAG 2.1 AA accessibility standards, and accelerate frontend delivery across distributed engineering squads. Includes 50+ tokenized accessible components, automated theme token pipelines, zero runtime CSS overhead, and comprehensive Storybook documentation.',
    role: 'Lead Design System Engineer — Component Architecture, Token Pipeline, Accessibility (WCAG 2.1 AA) & Storybook Documentation',
    techStack: ['React 19', 'TypeScript', 'Storybook 8', 'Radix UI', 'Tailwind CSS', 'WCAG 2.1 AA', 'Rollup', 'Design Tokens'],
    accentColor: '#CCFF00',
    demoUrl: '',
    repoUrl: '',
    visible: true,
    previewType: 'design-system',
    caseStudy: {
      overview: 'FLOQ is an enterprise design system created to unify fragmented brand components across multiple enterprise applications into a single, cohesive, token-driven architecture.',
      problem: 'Engineering teams across 6+ business modules were building redundant UI elements, resulting in visual inconsistency, 30%+ code duplication, and inconsistent accessibility compliance.',
      goals: [
        'Develop 50+ reusable UI components with strict TypeScript types and comprehensive Storybook documentation.',
        'Reduce duplicate code by 30% across multiple enterprise applications.',
        'Improve initial page load times by 35–40% through tree-shaking, lazy loading, and memoized renders.',
        'Enforce WCAG 2.1 AA accessibility standards across keyboard navigation, screen reader ARIA labels, and contrast.'
      ],
      role: [
        'Architected core design tokens covering color palettes, typography scale, elevation, and spacing.',
        'Built accessible headless primitives using Radix UI with custom high-performance styling.',
        'Implemented Storybook 8 interactive component explorer with visual regression testing.',
        'Created automated token export pipelines distributing design tokens to web and mobile clients.'
      ],
      technicalApproach: [
        'Adopted CSS custom properties mapped to semantic token names for seamless runtime theme switching.',
        'Employed Rollup with aggressive tree-shaking ensuring consuming apps only bundle components they import.',
        'Wrote automated accessibility test suites using axe-core in CI to catch regression before merge.'
      ],
      keyDecisions: [
        {
          decision: 'Headless Primitives + Token Layer',
          rationale: 'Decoupling accessibility logic from styling enabled squads to customize themes without breaking keyboard navigation.'
        },
        {
          decision: 'Zero-Runtime CSS Strategy',
          rationale: 'Avoided runtime CSS-in-JS overhead, yielding faster hydration and lower CPU overhead on low-end devices.'
        }
      ],
      challengesAndSolutions: [
        {
          challenge: 'Migrating legacy enterprise modules to FLOQ without breaking existing production features.',
          solution: 'Created an incremental adoption adapter allowing FLOQ components to coexist alongside legacy UI during transition.'
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
    id: 'demand-management-system',
    title: 'Demand Management System — B2B Vendor & Resource Portal',
    category: 'React.js · TypeScript · Enterprise B2B · Workflow Engine',
    year: '2023 — 2024',
    featured: true,
    tagline: 'Enterprise B2B SaaS platform connecting corporate resource demands with vendor fulfillment pipelines.',
    summary: 'A mission-critical enterprise B2B resource management platform orchestrating resource requests, candidate submissions, multi-stage approval workflows, and automated vendor SLA compliance. Engineered with virtualized data tables handling 10,000+ candidate rows, granular role-based access control (RBAC), and responsive real-time analytics.',
    role: 'Senior Frontend Engineer — Enterprise React Architecture, Dynamic Approval Workflows & Virtualized Data Tables',
    techStack: ['React.js', 'TypeScript', 'Redux Toolkit', 'Tailwind CSS', 'REST APIs', 'RBAC Security', 'Virtual Tables', 'SLA Analytics'],
    accentColor: '#8B5CF6',
    demoUrl: '',
    repoUrl: '',
    visible: true,
    previewType: 'b2b-workflow',
    caseStudy: {
      overview: 'The Demand Management System (DMS) is an enterprise B2B SaaS portal designed to automate talent demand requisition, vendor submission pipelines, and hiring approvals at enterprise scale.',
      problem: 'Enterprise resource acquisition relied on manual spreadsheets and uncoordinated email threads, causing 40%+ delays in role fulfillment, lack of vendor accountability, and zero audit trails for compliance.',
      goals: [
        'Build a centralized B2B platform with role-based dashboards for Enterprise Admins, Hiring Managers, and Vendors.',
        'Implement virtualized candidate review tables supporting 10,000+ entries with sub-50ms instant filtering.',
        'Automate multi-stage approval workflows with SLA countdown timers and email/webhook notifications.',
        'Provide real-time vendor performance analytics and talent requisition fulfillment metrics.'
      ],
      role: [
        'Architected frontend state architecture using Redux Toolkit with normalized entity adapters.',
        'Built high-performance virtualized candidate tables with sticky columns, inline status edits, and multi-sort.',
        'Developed role-based routing and granular permission gates protecting sensitive financial rate cards.',
        'Created interactive demand pipeline Kanban boards with drag-and-drop status transitions.'
      ],
      technicalApproach: [
        'Implemented windowed table rendering (TanStack Virtual) maintaining steady 60fps scrolling across massive datasets.',
        'Used optimistic UI updates for candidate status progressions with background server synchronization.',
        'Designed modular form wizards with complex dynamic validations based on role and hiring budget constraints.'
      ],
      keyDecisions: [
        {
          decision: 'Normalized Redux Entity State',
          rationale: 'Prevented deep object traversal and redundant re-renders when updating individual candidate statuses across multiple dashboard views.'
        },
        {
          decision: 'Client-Side Virtualization',
          rationale: 'Ensured instant responsiveness even when loading large vendor rosters containing thousands of candidates.'
        }
      ],
      challengesAndSolutions: [
        {
          challenge: 'Handling multi-tier approval chains with diverging conditional rules per corporate division.',
          solution: 'Engineered a dynamic workflow state machine rendering custom approval steps based on department policy.'
        }
      ],
      verifiedHighlights: [
        'Automated talent requisition lifecycle reducing fulfillment cycle time by ~35%.',
        'High-throughput virtualized data tables effortlessly handling 10,000+ records at 60fps.',
        'Granular RBAC security protecting confidential compensation rate cards across vendor tiers.',
        'Real-time vendor SLA tracking and requisition fulfillment analytics.'
      ]
    }
  },
  {
    id: 'irisinsights-healthcare',
    title: 'IrisInsights.us',
    category: 'Regulated Healthcare Platform (HIPAA Compliant)',
    year: '2023 — Present',
    featured: true,
    tagline: 'HIPAA-compliant healthcare intelligence platform with automated PHI masking and zero-leak state architecture.',
    summary: 'An enterprise clinical intelligence platform built for healthcare networks. Incorporates automated Protected Health Information (PHI) masking, biometric and role-gated access control, end-to-end encrypted clinical audit logging, and strict WCAG 2.1 AA accessibility compliance across all clinical workflows.',
    role: 'Lead Frontend Security Engineer — HIPAA Compliance UI, PHI Masking Engine, WCAG AA Accessibility & Secure Audit Streams',
    techStack: ['Next.js 15', 'TypeScript', 'HIPAA Secure Vault', 'Tailwind CSS', 'WCAG 2.1 AA', 'Web Crypto API', 'React 19', 'Audit Stream'],
    accentColor: '#00C2FF',
    demoUrl: 'https://irisinsights.us',
    repoUrl: '',
    visible: true,
    previewType: 'healthcare-hipaa',
    caseStudy: {
      overview: 'IrisInsights.us is a specialized healthcare intelligence and clinical workflow application adhering to federal HIPAA and HITECH privacy standards for hospitals and clinical research organizations.',
      problem: 'Clinical software frequently leaks sensitive patient health data (PHI) through unmasked UI displays, unencrypted browser memory caching, and inaccessible interfaces that fail compliance audits.',
      goals: [
        'Build a zero-leak UI architecture that auto-masks PHI upon inactivity or window defocus.',
        'Implement tamper-evident client-side audit logging tracking every record inspection.',
        'Achieve 100% WCAG 2.1 AA accessibility compliance for diverse clinical healthcare workers.',
        'Deploy a production-ready web platform live at https://irisinsights.us.'
      ],
      role: [
        'Engineered automated PHI masking wrappers that blur patient records during idle timeouts.',
        'Implemented real-time compliance audit event streaming via Web Crypto API.',
        'Conducted comprehensive WCAG 2.1 AA audits ensuring keyboard navigation and high contrast support.'
      ],
      technicalApproach: [
        'Utilized React 19 server components and zero-client-cache strategies to eliminate lingering PHI in DOM storage.',
        'Engineered idle detection timers that lock clinical views after 15 minutes of inactivity.',
        'Applied deterministic ARIA landmark roles and semantic HTML across all diagnostic dashboards.'
      ],
      keyDecisions: [
        {
          decision: 'Ephemeral In-Memory State',
          rationale: 'Banned localStorage for PHI storage, ensuring sensitive health records never persist in unencrypted browser storage.'
        },
        {
          decision: 'Proactive PHI Blur Filters',
          rationale: 'Protected patient privacy from over-the-shoulder viewing in busy hospital hallway environments.'
        }
      ],
      challengesAndSolutions: [
        {
          challenge: 'Strict HIPAA compliance without compromising clinical staff speed during emergencies.',
          solution: 'Created quick-unmask audit triggers requiring biometric confirmation with instant logging.'
        }
      ],
      verifiedHighlights: [
        'Production healthcare platform live at https://irisinsights.us.',
        'Automated PHI masking engine with 15-minute idle security guard.',
        '100% WCAG 2.1 AA accessibility compliance verified across clinical dashboards.',
        'Tamper-evident client-side audit logging with zero-leak state architecture.'
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
    role: 'Lead Mobile Engineer — React Native Cross-Platform Architecture, Bluetooth LE Bridges & Gesture Animations',
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
  }
];
