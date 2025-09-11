import { render, screen } from '@testing-library/react'
import { vi } from 'vitest'

describe('Blog', () => {
  test('should render blog section and all posts as cards', async () => {
    const [{ default: Blog }, postsMod] = await Promise.all([
      import('../src/components/Blog'),
      import('../src/data/posts'),
    ])

    render(<Blog />)

    expect(screen.getByText(/Silencio en la Sala/i)).toBeInTheDocument()

    const cards = screen.getAllByRole('link')
    expect(cards.length).toBeGreaterThanOrEqual(postsMod.posts.length)

    postsMod.posts.forEach((p: any) => {
      const link = screen
        .getAllByRole('link')
        .find((a) => (a as HTMLElement).getAttribute('href') === p.href)
      expect(link).toBeTruthy()
    })
  })

  test('corner case: when posts list is empty, the section still renders without cards', async () => {
    vi.resetModules()
    vi.doMock('../src/data/posts', () => ({ posts: [] }))
    const { default: BlogEmpty } = await import('../src/components/Blog')
    const { queryAllByRole } = render(<BlogEmpty />)
    expect(queryAllByRole('img').length).toBe(0)
    vi.resetModules()
  })
})
