export type SkillIconKey =
  | 'ai'
  | 'frontend'
  | 'backend'
  | 'integrations'
  | 'cloud'
  | 'tools'
  | 'infrastructure'
  | 'architecture'

export type SkillCategory = {
  title: string
  icon: SkillIconKey
  items: string[]
}

export const SKILLS: SkillCategory[] = [
  {
    title: 'AI & Dev Productivity',
    icon: 'ai',
    items: ['Prompt engineering', 'Langfuse', 'GitHub Copilot', 'ChatGPT', 'Claude'],
  },
  {
    title: 'Frontend',
    icon: 'frontend',
    items: [
      'TypeScript', 'React', 'Vue', 'Angular', 'Astro',
      'OpenLayers', 'Leaflet', 'Deck.gl', 'Three.js', 'D3',
      'Tailwind (v2/v3)', 'Storybook', 'Jest', 'Vitest',
    ],
  },
  {
    title: 'Backend',
    icon: 'backend',
    items: ['Node', 'Java (Spring Boot)', 'PHP', 'SQL', 'Prisma', 'Redis'],
  },
  {
    title: 'Integrations & Analytics',
    icon: 'integrations',
    items: ['SendGrid', 'HubSpot', 'PostHog', 'LaunchDarkly', 'Stripe'],
  },
  {
    title: 'Cloud & DevOps',
    icon: 'cloud',
    items: ['Git', 'Docker', 'AWS', 'Google Cloud', 'Semantic Release', 'Npm/Nvm/Yarn'],
  },
  {
    title: 'Design & Tools',
    icon: 'tools',
    items: ['Figma', 'Canva', 'VS Code'],
  },
  {
    title: 'Infrastructure Patterns',
    icon: 'infrastructure',
    items: [
      'Containerization',
      'Database Management',
      'CI/CD',
      'Testing',
      'Logging',
      'Configuration Management',
    ],
  },
  {
    title: 'Architecture Patterns',
    icon: 'architecture',
    items: [
      'Layered Architecture',
      'Hexagonal Architecture',
      'Microservices/Modular Monolith',
      'Domain-Driven Design (DDD)',
      'RESTful API',
      '12-Factor App',
    ],
  },
]