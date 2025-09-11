import { render, screen } from '@testing-library/react'
import { vi } from 'vitest'

describe('Skills', () => {
  test('should render skills categories and chips from data', async () => {
    const [{ default: Skills }, skillsMod] = await Promise.all([
      import('../src/components/Skills'),
      import('../src/data/skills'),
    ])

    render(<Skills />)

    expect(screen.getByRole('heading', { name: /Skills/i })).toBeInTheDocument()

    skillsMod.SKILLS.forEach((c: any) => {
      expect(screen.getByText(c.title)).toBeInTheDocument()
      if (c.items && c.items.length > 0) {
        expect(screen.getByText(c.items[0])).toBeInTheDocument()
      }
    })
  })

  test('corner case: category with no items renders without chips', async () => {
    vi.resetModules()
    vi.doMock('../src/data/skills', () => ({
      SKILLS: [{ title: 'EmptyCat', icon: 'ai', items: [] }],
    }))
    const { default: SkillsEmpty } = await import('../src/components/Skills')
    const { queryByText, queryAllByRole } = render(<SkillsEmpty />)
    expect(queryByText('EmptyCat')).toBeInTheDocument()
    // no chips rendered
    expect(queryAllByRole('button').length).toBe(0)
    vi.resetModules()
  })
})
