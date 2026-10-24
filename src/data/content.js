export const profile = {
  name: 'Harsh Vardhan Gupta',
  shortName: 'Harsh',
  title: 'Software Engineer',
  tagline:
    'Software Engineer with 3 years of experience shipping production MERN and Next.js platforms: 60+ REST APIs, queue-driven microservices, Elasticsearch-backed search, payment integrations, and AI-assisted development.',
  location: 'Noida, India',
  email: 'harsh872000@gmail.com',
  phone: '+91 7905775453',
  linkedin: 'https://linkedin.com/in/harsh-vardhan-g-684701134',
  github: 'https://github.com/harshvgupta1',
  portfolio: 'https://portfolio-fy9a.onrender.com/',
  resumeUrl: '/resume.pdf',
  about: [
    'Software Engineer with 3 years of experience shipping production MERN and Next.js platforms: 60+ REST APIs, queue-driven microservices, Elasticsearch-backed search, and payment integrations.',
    'At Bridgeness Technologies (Reelax), I architect responsive dashboards and backend systems for creator discovery, campaign lifecycles, tier-based pricing, multi-step approval workflows, and automated payouts.',
    'Integrated payment gateways including Razorpay and Cashfree with JWT authentication, financial and CRM pipelines with Giddh and Zoho, and Instagram Graph API Comment-to-DM automation.',
    'Champion of AI-assisted engineering — leveraging Cursor, ChatGPT, prompt engineering, and OpenAI/LLM APIs to scaffold APIs, debug production systems, and accelerate feature delivery.',
  ],
}

export const experience = [
  {
    role: 'Software Engineer',
    company: 'Bridgeness Technologies Pvt. Ltd. (Reelax)',
    period: 'Jan 2024 – Present',
    location: 'Noida, India',
    summary: 'Influencer-marketing platform: discovery, campaigns, contracts and payouts',
    bullets: [
      'Spotlyt Campaign Platform: Architected responsive Next.js dashboards and shipped 60+ Node.js/Express REST APIs covering the end-to-end campaign lifecycle, tier-based pricing and AI creator matching.',
      'Reelax Platform: Build and maintain the React.js/Redux frontend and Node.js/Express backend for creator discovery, campaigns, contracts and payouts, resulting in 25% more engagements.',
      'Backend & Search: Designed microservices on MongoDB and MySQL for campaign processing and payouts, deployed on GCP and Azure; built BullMQ/Redis background-job pipelines and Elasticsearch-backed creator discovery.',
      'Payments & Integrations: Integrated Razorpay and Cashfree with JWT-based authentication; built Instagram Graph API Comment-to-DM automation and integrations with Giddh and Zoho.',
      'Approval Workflow: Built a multi-step submit → review → approve/reject → rework flow with WhatsApp and email notifications.',
      'AI-Assisted Engineering: Use Cursor and ChatGPT to scaffold APIs, refactor, debug and speed up feature delivery, and integrate OpenAI/LLM APIs into product features.',
      'Reliability: Debug production issues and tune performance across the frontend, APIs and data layer.',
    ],
  },
  {
    role: 'Frontend Developer Intern',
    company: 'Bridgeness Technologies Pvt. Ltd. (Reelax)',
    period: 'Jul 2023 – Dec 2023',
    location: 'Noida, India',
    summary: 'Modular UI components & brand discovery dashboards',
    bullets: [
      'Developed modular, responsive UI components with React.js, Redux and CSS3 for brand-discovery and creator dashboards.',
      'Integrated RESTful APIs with frontend views and managed asynchronous state with Redux Toolkit.',
      'Collaborated with senior engineers on code reviews, bug fixes and cross-browser performance optimization.',
    ],
  },
]

export const education = [
  {
    school: 'Lakshmi Narain College of Technology & Science, Bhopal',
    degree: 'B.Tech, Electronics & Communication Engineering',
    period: '2019 – 2023',
    detail: 'CGPA 8.33 / 10',
  },
]

export const languages = [
  { name: 'English', proficiency: 'Full professional' },
  { name: 'Hindi', proficiency: 'Native' },
]

export const projects = [
  {
    title: 'Spotlyt Campaign Platform',
    role: 'Full Stack · Next.js · Node.js',
    description:
      'Architected responsive Next.js dashboards and shipped 60+ Node.js/Express REST APIs covering the end-to-end campaign lifecycle, tier-based pricing, and AI creator matching.',
    tech: ['Next.js', 'Node.js', 'Express.js', 'TypeScript', 'REST APIs', 'AI Matching'],
    liveUrl: 'https://spotlyt.in/',
    image: '/projects/spotlyt.png',
  },
  {
    title: 'Swiggy Web Clone',
    role: 'React.js · Reverse Proxy · Live API',
    description:
      'Responsive food-ordering app integrating Swiggy’s live public API through a Node/Vite reverse proxy (bypassing CORS), featuring debounced search, diet/rating filters, category carousels, cart steppers, coupons, and live order tracking.',
    tech: ['React.js', 'Vite', 'Node Reverse Proxy', 'Swiggy API', 'Cloudinary CDN', 'Redux'],
    liveUrl: 'https://github.com/harshvgupta1/React',
    githubUrl: 'https://github.com/harshvgupta1/React',
    image: null,
  },
  {
    title: 'Reelax AI Search & Creator Discovery',
    role: 'AI & Search · Elasticsearch',
    description:
      'Conversational AI chat for influencer discovery with Elasticsearch-backed search — natural-language queries update filters, tags, and a live discovery table for Instagram and YouTube creators in real time.',
    tech: ['Elasticsearch', 'Prompt Engineering', 'OpenAI API', 'React.js', 'Node.js', 'Redis'],
    liveUrl: 'https://brands.getreelax.com',
    image: '/projects/ai-search.png',
  },
  {
    title: 'Reelax Core Platform & Payments',
    role: 'Full Stack & Integrations',
    description:
      'React/Redux frontend and Node.js/Express backend for creator discovery, campaigns, contracts, and payouts. Integrated Razorpay & Cashfree with JWT authentication, and Giddh & Zoho financial workflows.',
    tech: ['React.js', 'Redux', 'Node.js', 'Express', 'Razorpay', 'Cashfree', 'Zoho API'],
    liveUrl: 'https://brands.getreelax.com',
    image: null,
  },
  {
    title: 'Queue-Driven Microservices on GCP & Azure',
    role: 'Backend Microservices & Cloud',
    description:
      'Microservices on MongoDB and MySQL deployed on GCP and Azure; built BullMQ/Redis background-job pipelines, Instagram Graph API Comment-to-DM automation, and multi-step approval workflows.',
    tech: ['Node.js', 'BullMQ', 'Redis', 'MongoDB', 'MySQL', 'GCP', 'Azure'],
    liveUrl: 'https://getreelax.com',
    image: null,
  },
]

export const skills = {
  Frontend: [
    'React.js',
    'Next.js',
    'TypeScript',
    'JavaScript (ES6+)',
    'Redux Toolkit',
    'HTML5',
    'CSS3',
  ],
  'Backend & APIs': [
    'Node.js',
    'Express.js',
    'REST APIs (60+ shipped)',
    'Microservices',
    'JWT Authentication',
    'BullMQ',
  ],
  'Databases & Search': ['MongoDB', 'MySQL', 'Redis', 'Elasticsearch'],
  'Cloud & DevOps': ['GCP', 'Azure', 'Git / GitHub'],
  'AI & Tools': [
    'Cursor',
    'ChatGPT',
    'OpenAI / LLM APIs',
    'Prompt Engineering',
    'Postman',
    'Figma',
    'Agile / Scrum',
  ],
  Integrations: [
    'Razorpay',
    'Cashfree',
    'Instagram Graph API',
    'Giddh',
    'Zoho',
  ],
}

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]
