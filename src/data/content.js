export const profile = {
  name: 'Harsh Vardhan Gupta',
  shortName: 'Harsh',
  title: 'Full Stack Developer',
  tagline:
    'I design, build, and ship scalable MERN applications — combining React, Node APIs, background queues, and AI-assisted engineering with Prompt Engineering, Cursor, and ChatGPT.',
  location: 'Noida, Uttar Pradesh, India',
  email: 'harsh872000@gmail.com',
  phone: '7905775453',
  linkedin: 'https://www.linkedin.com/in/harsh-vardhan-g-684701134',
  github: 'https://github.com/harshvgupta1',
  resumeUrl: '/resume.pdf',
  about: [
    'Full Stack Developer with 2+ years of experience building and scaling production web applications across the MERN stack (MongoDB, Express.js, React.js, Node.js).',
    'Expert in AI-assisted development — leveraging Prompt Engineering, Cursor, and ChatGPT to accelerate full-stack feature delivery, code quality, test coverage, and rapid prototyping.',
    'At Bridgeness Technologies I work on Reelax — an influencer marketing platform — across brands web, admin tools, core APIs, background microservices, and AI-powered discovery.',
    'I care about clean REST integrations, responsive UX, and scalable architecture that stays maintainable as products grow.',
  ],
}

export const experience = [
  {
    role: 'Full Stack Developer',
    company: 'Bridgeness Technologies Pvt. Ltd.',
    period: 'Jan 2024 – Present',
    bullets: [
      'Build and maintain responsive full-stack apps with React.js, Node.js, Express.js, and MongoDB for the Reelax platform.',
      'Built Reelax AI Search / AI Chat using Prompt Engineering and conversational LLM workflows to convert natural-language queries into real-time creator filters, tags, and discovery table results across Instagram and YouTube.',
      'Championed AI-assisted development across the team using Cursor and ChatGPT for rapid prototyping, complex refactoring, test case generation, and API schema design.',
      'Engineered structured prompt templates and AI automation to generate dynamic scripts and task-specific workflows.',
      'Integrated Giddh Accounting API and Zoho APIs for invoicing, purchase orders, CRM, and financial automation.',
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
    title: 'Reelax AI Search',
    role: 'Full Stack · AI',
    description:
      'Conversational AI chat for influencer discovery — natural-language queries update filters, tags, and a live discovery table for Instagram and YouTube creators in real time.',
    tech: ['React', 'Node.js', 'Prompt Engineering', 'AI Chat', 'Elasticsearch', 'REST API'],
    liveUrl: 'https://brands.getreelax.com',
    image: '/projects/ai-search.png',
  },
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
      'Express API powering campaigns, payments (Razorpay/Cashfree), messaging, KYC, credits, Zoho API integrations, and AI features — with MongoDB, MySQL, Redis, and Elasticsearch.',
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
  Frontend: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Redux'],
  Backend: ['Node.js', 'Express.js', 'REST APIs', 'BullMQ', 'Docker'],
  Database: ['MongoDB', 'MySQL', 'Redis', 'Elasticsearch'],
  'APIs & Integrations': [
    'OpenAI / LLM APIs',
    'Giddh API',
    'Instagram Graph API',
    'Zoho API',
    'Razorpay',
    'Cashfree',
  ],
  'AI & Tooling': [
    'Prompt Engineering',
    'Cursor',
    'ChatGPT',
    'LLM Integrations',
    'AI-Assisted Coding',
  ],
  Tools: ['Cursor', 'VS Code', 'GitHub', 'Postman', 'Figma'],
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
