export type SkillCategory = {
  title: string
  items: string[]
}

export type Project = {
  title: string
  period: string
  summary: string
  highlights: string[]
  tech: string[]
}

export type LeadershipRole = {
  role: string
  organization: string
  period: string
  details: string[]
}

export type Competition = {
  title: string
  status: string
  description: string
}

export const heroData = {
  name: 'Yusuf Aziez',
  tagline:
    'Software engineering undergraduate focused on Software Engineering, DevOps, and QA',
  intro:
    'Strong in Java and Python, building practical software for real-world use cases.',
}

export const aboutParagraphs = [
  'My current path is centered on strong software engineering fundamentals and applying them to useful products. I am especially interested in AI-enabled systems, cloud-native workflows, and data-informed applications that solve real user problems.',
  'Recent work includes React and TypeScript interfaces, Firebase-backed application flows, and Python analytics tasks. I prioritize maintainable architecture, clear code, and dependable delivery over unnecessary complexity.',
  'Beyond coding, IEEE leadership responsibilities have strengthened my collaboration, ownership, and execution under deadlines. I am open to internships where I can contribute early and keep growing in high-quality engineering teams.',
]

export const whatIBring = [
  'Java and Python foundations reinforced through coursework and project delivery',
  'React and TypeScript experience for clean, maintainable interfaces',
  'Hands-on Firebase use across Authentication, Firestore, and Hosting',
  'Comfort working across implementation, testing, and deployment workflows',
  'Leadership discipline from IEEE RAS Treasurer responsibilities',
  'Strong communication and team collaboration in technical settings',
  'Curiosity-driven mindset toward AI, cloud, and ML-oriented systems',
]

export const skills: SkillCategory[] = [
  {
    title: 'Languages',
    items: [
      'Python',
      'Java',
      'TypeScript',
      'JavaScript',
      'SQL',
      'HTML',
      'CSS',
    ],
  },
  {
    title: 'Frameworks',
    items: [
      'React',
      'React Three Fiber',
      'Three.js',
      'Tailwind CSS',
      'Framer Motion',
      'JavaFX',
    ],
  },
  {
    title: 'Tools',
    items: [
      'Git',
      'GitHub',
      'Vite',
      'Expo',
      'Firebase',
      'Cloudflare',
      'Figma',
    ],
  },
  {
    title: 'Concepts',
    items: [
      'Object-Oriented Programming',
      'Data Structures and Algorithms',
      'System Design',
    ],
  },
]

export const projects: Project[] = [
  {
    title: 'BlokC - Modular Smart Play Analytics Platform',
    period: 'Sep 2025 - Present',
    summary:
      'A modular smart cube system that captures child play interactions and converts them into session-based behavioral insights using a connected analytics platform.',
    highlights: [
      'Implemented React Native authentication flows for login, registration, and secure session handling',
      'Built and deployed the app and analytics stack with Firebase services',
      'Worked across multiple Firebase features including Authentication and Firestore',
      'Developed analytics processing flows to compute play-pattern indicators',
      'Built the landing page using React, TypeScript, Vite, Tailwind CSS, and React Three Fiber',
      'Deployed the landing page on Cloudflare',
    ],
    tech: [
      'React',
      'React Native',
      'TypeScript',
      'React Three Fiber',
      'Tailwind CSS',
      'Firebase',
      'Firestore',
      'Python',
      'Cloudflare',
    ],
  },
  {
    title: 'Three.js Interactive Web Applications',
    period: 'Oct 2025 - Dec 2025',
    summary:
      'A collection of browser-based 3D web applications focused on immersive interaction, structured data mapping, and dynamic scene generation.',
    highlights: [
      'Built interactive 3D scenes using JavaScript and Three.js',
      'Implemented JSON-driven object generation and transformations',
      'Designed dynamic camera movement and scroll-coupled animations',
      'Optimized user interactions for smooth browser experiences',
    ],
    tech: ['JavaScript', 'Three.js', 'Vite', 'HTML', 'CSS'],
  },
  {
    title: 'Python Traffic Analytics System',
    period: 'Dec 2024',
    summary:
      'A desktop analytics application for reading traffic datasets, validating CSV input, and presenting congestion trends visually.',
    highlights: [
      'Developed a Python and Tkinter desktop interface',
      'Implemented CSV ingestion and validation logic',
      'Built visual summaries to identify traffic patterns',
    ],
    tech: ['Python', 'Tkinter', 'CSV'],
  },
]

export const leadership: LeadershipRole[] = [
  {
    role: 'Treasurer',
    organization: 'IEEE Robotics and Automation Society (IEEE RAS) of IIT',
    period: '2026 - Present',
    details: [
      'Budget planning and financial allocation support for society activities',
      'Expense tracking with accountability and transparent reporting',
    ],
  },
  {
    role: 'Vice Chair Contributions',
    organization: 'IEEE Event Leadership Roles',
    period: '2025 - 2026',
    details: [
      "Industry Outreach: CodeSprint 11, TechTrek II, Vertex '25",
      "Delegate Handling: HackSphere '25",
      'Coordinated partner communication and participant operations for technical events',
    ],
  },
  {
    role: 'Volunteer Contributions',
    organization: 'IEEE Event Operations and Outreach',
    period: '2024 - 2026',
    details: [
      'Outreach: WebSpire 2.0, IndustPro 4.0, MicroMaze 2.0',
      'Delegate Handling: Tracktion, CodeRally 6.0',
      'Supported onboarding, confirmations, and event execution workflows',
    ],
  },
]

export const competitions: Competition[] = [
  {
    title: 'SLIoT Challenge 2026',
    status: 'Preliminary Round Qualifier',
    description:
      'A national IoT innovation competition organized by the University of Moratuwa, with our team progressing through the preliminary stage.',
  },
  {
    title: 'CodeSprint 11',
    status: 'Competing Team',
    description:
      'A major inter-university startup and tech talent initiative focused on venture ideation, prototyping, and pitching.',
  },
  {
    title: 'Hult Prize (IIT Chapter)',
    status: 'Participant',
    description:
      'Worked on business-oriented social innovation concepts in the IIT chapter of the global Hult Prize competition.',
  },
  {
    title: 'IEEE Xtreme 18 and 19',
    status: 'Participant',
    description:
      'Participated in IEEE global 24-hour programming competitions, strengthening algorithmic endurance and team strategy.',
  },
]

export const contact = {
  email: 'yusufaziez2@gmail.com',
  phone: '+94 77 979 9813',
  linkedIn: 'https://linkedin.com/in/yusuf-aziez',
  github: 'https://github.com/Steamables',
  location: 'Colombo 05, Sri Lanka',
  cvView:
    'https://drive.google.com/file/d/1PI-tv38_8h2eyuWYWWY6yuEPuJoeU0hn/view?usp=sharing',
  cvDownload:
    'https://drive.google.com/uc?export=download&id=1PI-tv38_8h2eyuWYWWY6yuEPuJoeU0hn',
}




