export type Post = {
  id: string
  title: string
  href: string
  image: string
  category?: string
  author?: string
  date?: string
  readingTime?: string
}

export const posts: Post[] = [
  {
    id: 'enredos',
    title: 'Enredos',
    href: 'https://www.silencioenlasala.com/enredos',
    image: 'https://silencioenlasala.com/images/light/enredos.png',
  },
  {
    id: 'haikus',
    title: 'Haikus',
    href: 'https://www.silencioenlasala.com/haikus',
    image: 'https://silencioenlasala.com/images/light/haikus.png',
  },
  {
    id: 'poemas',
    title: 'Poemas',
    href: 'https://www.silencioenlasala.com/poemas',
    image: 'https://silencioenlasala.com/images/light/poemas.png',
  },
  {
    id: 'relatos',
    title: 'Relatos',
    href: 'https://www.silencioenlasala.com/relatos',
    image: 'https://silencioenlasala.com/images/light/relatos.png',
  },
]
