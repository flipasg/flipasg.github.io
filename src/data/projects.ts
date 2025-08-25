export type Project = {
  title: string
  period?: string
  description: string
  tech: string[]
  href?: string
  image?: string
  role?: string // Add role field
}

export const PROJECTS: Project[] = [
  {
    title: 'Frenetic Simulator & AI',
    period: '2023–2025',
    description:
      'Prototyped and delivered AI-driven features for a power electronics simulator; mentored onboarding; ensured scalable architecture.',
    tech: ['TypeScript', 'React', 'AI tooling', 'Node'],
  href: 'https://www.frenetic.ai/',
  image: 'frenetic',
  role: 'Frontend Engineer',
  },
  {
    title: 'CARTO - GIS Applications',
    period: '2021–2023',
    description:
      'Enterprise GIS web apps with responsive performance and reliable data viz across devices.',
    tech: ['React', 'OpenLayers', 'Deck.gl', 'D3', 'GIS'],
  href: 'https://example.com/carto',
  image: 'portrait.jpg',
  role: 'GIS Developer',
  },
  {
    title: 'Landbot - AI Chatbot Generator',
    period: '2021',
    description:
      "Marketing, Sales, and Customer Service teams turn conversational experiences into revenue-driving outcomes with Landbot's AI Chatbot Generator.",
    tech: ['React', 'Accessibility', 'Testing', 'UX'],
  href: 'https://landbot.io/',
  image: 'landbot',
  role: 'UI/UX Engineer',
  },
  {
    title: 'Geograma Public Sector GIS',
    period: '2015–2021',
    description:
      'Government/private GIS portals with scalable multi-device architectures and improved usability.',
    tech: ['Java (Spring)', 'Leaflet', 'Three.js', 'D3'],
  href: 'https://example.com/geograma',
  image: 'skeched-portrait.jpg',
  role: 'Full Stack Developer',
  },
]