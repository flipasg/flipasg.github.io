export type Project = {
  title: string
  period?: string
  description: string
  tech: string[]
  href?: string
}

export const PROJECTS: Project[] = [
  {
    title: 'Frenetic Simulator + AI features',
    period: '2023–2025',
    description:
      'Prototyped and delivered AI-driven features for a power electronics simulator; mentored onboarding; ensured scalable architecture.',
    tech: ['TypeScript', 'React', 'AI tooling', 'Node'],
  },
  {
    title: 'CARTO Geospatial Dashboards',
    period: '2021–2023',
    description:
      'Enterprise GIS web apps with responsive performance and reliable data viz across devices.',
    tech: ['React', 'OpenLayers', 'Deck.gl', 'D3', 'GIS'],
  },
  {
    title: 'Landbot Conversational UI',
    period: '2021',
    description:
      'Built and optimized chat UI features, improved accessibility, ran UX research to guide product decisions.',
    tech: ['React', 'Accessibility', 'Testing'],
  },
  {
    title: 'Geograma Public Sector GIS',
    period: '2015–2021',
    description:
      'Government/private GIS portals with scalable multi-device architectures and improved usability.',
    tech: ['Java (Spring)', 'Leaflet', 'Three.js', 'D3'],
  },
]