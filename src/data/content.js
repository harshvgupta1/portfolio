export const profile = {
  name: 'Harsh Vardhan Gupta',
  shortName: 'Harsh',
  title: 'Full Stack Developer',
  tagline:
    'I design, build, and ship scalable MERN applications — from React interfaces to Node APIs, queues, and AI automations.',
  location: 'Noida, Uttar Pradesh, India',
  email: 'harsh872000@gmail.com',
  phone: '7905775453',
  linkedin: 'https://www.linkedin.com/in/harsh-vardhan-g-684701134',
  github: 'https://github.com/harshvgupta1',
  resumeUrl: '/resume.pdf',
  about: [
    'Full Stack Developer with 2+ years of experience building production web apps on the MERN stack (MongoDB, Express.js, React.js, Node.js).',
    'At Bridgeness Technologies I work on Reelax — an influencer marketing platform — across brands web, admin tools, core APIs, and background microservices.',
    'I care about clean REST integrations, responsive UX, and architecture that stays maintainable as products scale.',
  ],
}

export const experience = [
  {
    role: 'Full Stack Developer',
    company: 'Bridgeness Technologies Pvt. Ltd.',
    period: 'Jan 2024 – Present',
    bullets: [
      'Build and maintain responsive full-stack apps with React.js, Node.js, Express.js, and MongoDB for the Reelax platform.',
      'Implemented Prompt AI to generate automated scripts and task-specific instructions.',
      'Integrated Giddh Accounting API for invoicing, purchase orders, and financial automation.',
      'Built Instagram Graph API Comment-to-DM automation to improve influencer engagement.',
      'Designed RESTful APIs for seamless frontend–backend communication and optimized load performance.',
      'Collaborated with designers and engineers on pixel-perfect responsive UI and scalable Git workflows.',
    ],
  },
]

export const education = [
  {
    school: 'Lakshmi Narain College of Technology & Science, Bhopal',
    degree: 'B.Tech in Electronics & Communication Engineering',
    period: '2019 – 2023',
    detail: '8.33 CGPA',
  },
]

export const projects = [
  {
    title: 'Reelax Brands Platform',
    role: 'Frontend',
    description:
      'Brand-facing React SPA for influencer discovery, campaigns, marketplace, analytics, contracts, and subscriptions on India’s influencer marketing platform.',
    tech: ['React', 'Redux', 'JavaScript', 'Axios', 'Charts'],
    liveUrl: 'https://brands.getreelax.com',
    image: null,
  },
  {
    title: 'Reelax Core API',
    role: 'Backend',
    description:
      'Express API powering campaigns, payments (Razorpay/Cashfree), messaging, KYC, credits, and AI features — with MongoDB, MySQL, Redis, and Elasticsearch.',
    tech: ['Node.js', 'Express', 'MongoDB', 'MySQL', 'Redis', 'JWT'],
    liveUrl: 'https://getreelax.com',
    image: null,
  },
  {
    title: 'Reelax Microservices',
    role: 'Backend / Workers',
    description:
      'Async workers for Instagram & YouTube sync, enrichment, notifications, and queue processing with BullMQ, Puppeteer, and Cloud Run deployments.',
    tech: ['Node.js', 'BullMQ', 'Redis', 'Elasticsearch', 'Docker'],
    liveUrl: 'https://getreelax.com',
    image: null,
  },
  {
    title: 'Reelax Admin Console',
    role: 'Frontend',
    description:
      'Internal ops console for KYC review, organisations, payouts, contracts, and campaign administration used by the Reelax team day-to-day.',
    tech: ['React', 'Redux', 'MUI', 'AG Grid'],
    liveUrl: 'https://getreelax.com',
    image: null,
  },
]

export const skills = {
  Frontend: ['HTML', 'CSS', 'JavaScript', 'React.js'],
  Backend: ['Node.js', 'Express.js'],
  Database: ['MongoDB', 'MySQL'],
  'APIs & Tools': [
    'REST API',
    'Giddh API',
    'Instagram Graph API',
    'Prompt AI',
    'Postman',
    'GitHub',
    'Figma',
  ],
  Practices: [
    'Responsive Design',
    'Agile Development',
    'API Integration',
    'Performance Optimization',
  ],
}

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]
