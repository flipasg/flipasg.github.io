export type Project = {
  title: string
  role: string
  company: string
  period?: string
  description: string
  tech: string[]
  href?: string
  image?: string
}

export const PROJECTS: Project[] = [
  {
    title: 'Frenetic Simulator & AI',
    role: 'Full Stack Engineer',
    company: 'Frenetic',
    period: 'Sep 2023 – Sep 2025',
    description: `At Frenetic, I designed and built AI-powered features for the Simulator and AI platform, while also mentoring junior developers to help them grow and feel confident in their work. I enjoyed leading rapid prototyping and experimentation to bring fresh product ideas to life, and focused on making sure our simulation tools stayed scalable and robust as we integrated advanced AI models.`,
    tech: [
      'Node.js',
      'TypeScript',
      'Express.js',
      'Domain-Driven Design (DDD)',
      'Prisma ORM',
      'Vitest',
      'Astro',
      'Vue.js',
      'Tailwind CSS',
      'UX',
      'Anthropic Claude',
      'Open AI',
      'GitHub Copilot',
    ],
    href: 'https://www.frenetic.ai/',
    image: 'frenetic',
  },
  {
    title: 'CARTO',
    role: 'Frontend Engineer',
    company: 'CARTO',
    period: 'Dec 2021 – May 2023',
    description:
      'At Carto, I scaled and maintained geospatial web applications to improve performance across devices, implemented responsive architectures that boosted product adoption, and collaborated closely with UX and backend teams to ensure reliable and meaningful data visualizations. I also delivered high-quality solutions tailored for enterprise-level GIS projects, helping the platform grow in both impact and usability.',
    tech: [
      'React',
      'TypeScript',
      'D3.js',
      'SQL',
      'JavaScript',
      'Angular',
      'GIS Applications',
      'TypeScript',
      'Material-UI',
      'JavaScript',
      'UX',
      'Data Visualization',
      'Performance',
      'Jest',
    ],
    href: 'https://carto.com/',
    image: 'carto',
  },
  {
    title: 'Landbot - AI Chatbot Generator',
    role: 'Product Engineer',
    company: 'Landbot',
    period: 'Apr 2021 - Dec 2021',
    description:
      'At Landbot, I built and optimized conversational UI features that boosted user engagement, carried out UX research and turned feedback into tangible improvements, and maintained the core applications with a strong focus on accessibility. I also prototyped and tested new product ideas, helping the team identify and validate opportunities for growth.',
    tech: [
      'JavaScript',
      'Product Development',
      'Figma',
      'TypeScript',
      'Material-UI',
      'Programming',
      'JavaScript',
      'CSS',
      'Web Performance',
      'React.js',
      'React Query',
      'Jest',
      'UX',
    ],
    href: 'https://landbot.io/',
    image: 'landbot',
  },
  {
    title: 'Geograma Public Sector GIS',
    role: 'Software Engineer',
    company: 'Geograma',
    period: 'Jun 2015 – Apr 2021',
    description:
      'At Geograma, I developed GIS web solutions for both government and private clients, designed technical architectures for scalable multi-device applications, and improved geospatial visualization tools to make them more usable and impactful. Working in cross-functional teams, I consistently delivered projects that created real value for clients.',
    tech: [
      'Angular',
      'React.js',
      'React Query',
      'Leaflet',
      'OpenLayers',
      'GIS Applications',
      'TypeScript',
      'JavaScript',
      'UX',
      'Data Visualization',
      'Web Performance',
    ],
    href: 'https://geograma.com/',
    image: 'geograma',
  },
]
