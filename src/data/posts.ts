import enredoImage from '@/assets/blog-enredo.jpg'
import haikuImage from '@/assets/blog-haiku.jpg'
import poemaImage from '@/assets/blog-poema.jpg'
import relatoImage from '@/assets/blog-relato.jpg'

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
    image: enredoImage,
  },
  {
    id: 'haikus',
    title: 'Haikus',
    href: 'https://www.silencioenlasala.com/haikus',
    image: haikuImage,
  },
  {
    id: 'poemas',
    title: 'Poemas',
    href: 'https://www.silencioenlasala.com/poemas',
    image: poemaImage,
  },
  {
    id: 'relatos',
    title: 'Relatos',
    href: 'https://www.silencioenlasala.com/relatos',
    image: relatoImage,
  },
]
