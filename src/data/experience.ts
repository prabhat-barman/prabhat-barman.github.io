import type { ExperienceItem } from '../types/portfolio';

export const experienceData: ExperienceItem[] = [
  {
    id: 'netlink-se',
    company: 'Netlink Software Pvt Ltd',
    role: 'Software Engineer',
    period: 'Mar 2023 — Present',
    location: 'Bhopal, Madhya Pradesh, India',
    type: 'Full-time',
    description: 'Leading frontend component architecture, performance optimization, and real-time UI integrations across automotive IoT and healthcare enterprise client products.',
    responsibilities: [
      'Designed reusable component abstractions adopted across 6+ modules, reducing duplicate code by 30% and improving long-term maintainability.',
      'Led frontend performance optimization initiatives by profiling rendering bottlenecks and applying memoization, code-splitting, and lazy loading, reducing initial load time by 35–40%.',
      'Implemented responsive, production-ready UI systems from design specifications, ensuring cross-browser compatibility and consistent user experience across devices.',
      'Collaborated within Agile/Scrum cross-functional teams with backend engineers, designers, and QA to deliver scalable, mission-critical product features.'
    ],
    technologies: ['React.js', 'React Native', 'JavaScript (ES6+)', 'TypeScript', 'Redux Toolkit', 'WebSockets', 'Tailwind CSS', 'Git', 'Agile/Scrum'],
    highlight: 'Reduced duplicate code by 30% across 6+ modules and cut initial load times by 35–40%.'
  },
  {
    id: 'netlink-ase',
    company: 'Netlink Software Pvt Ltd',
    role: 'Associate Software Engineer',
    period: 'Jun 2022 — Feb 2023',
    location: 'Bhopal, Madhya Pradesh, India',
    type: 'Full-time',
    description: 'Developed scalable, responsive UI components and owned frontend delivery across enterprise client web applications.',
    responsibilities: [
      'Developed scalable, responsive UI components that improved design consistency and usability across multiple enterprise applications.',
      'Integrated third-party libraries and backend REST APIs to streamline feature development, accelerating delivery timelines by approximately 20%.',
      'Owned end-to-end frontend implementation for assigned features, coordinating with backend and QA teams to ensure on-time, production-ready releases.',
      'Identified and resolved UI defects, improving cross-browser compatibility across Chrome, Firefox, Safari, and Edge.'
    ],
    technologies: ['React.js', 'JavaScript', 'HTML5', 'CSS3/SCSS', 'REST APIs', 'Git', 'JIRA'],
    highlight: 'Accelerated feature delivery timelines by ~20% through reusable component integration.'
  },
  {
    id: 'netlink-tc',
    company: 'Netlink Software Pvt Ltd',
    role: 'Trainee Consultant',
    period: 'Dec 2021 — May 2022',
    location: 'Bhopal, Madhya Pradesh, India',
    type: 'Full-time',
    description: 'Built foundational UI components and dynamic REST API integrations during initial enterprise training and project onboarding.',
    responsibilities: [
      'Built reusable frontend components to accelerate UI development and promote consistency across application screens.',
      'Implemented REST API integrations to enable dynamic, data-driven user interfaces and real-time data rendering.',
      'Collaborated with cross-functional teams to ensure seamless integration of frontend components with backend services.',
      'Participated in code reviews, daily standups, and technical training in modern JavaScript and React paradigms.'
    ],
    technologies: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'REST APIs', 'Git'],
    highlight: 'Successfully transitioned from trainee to core associate engineer with high UI quality ratings.'
  }
];
