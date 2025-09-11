import { render, screen } from '@testing-library/react'
import { vi } from 'vitest'

describe('Projects', () => {
  test('should render projects from data and show tech chips', async () => {
    const [{ default: Projects }, projectsMod] = await Promise.all([
      import('../src/components/Projects'),
      import('../src/data/projects'),
    ])

    const { container } = render(<Projects />)

    expect(screen.getByText(/Work Experience/i)).toBeInTheDocument()

    projectsMod.PROJECTS.forEach((p: any) => {
      expect(screen.getByText(p.role)).toBeInTheDocument()
    })

    const first = projectsMod.PROJECTS[0]
    first.tech.forEach((t: string) => {
      const matches = screen.getAllByText(t)
      expect(matches.length).toBeGreaterThanOrEqual(1)
    })

    expect(container.querySelectorAll('article').length).toBeGreaterThanOrEqual(
      projectsMod.PROJECTS.length,
    )
  })

  test('corner case: no projects -> renders empty grid', async () => {
    // reset module cache so the mock takes effect before importing the component
    vi.resetModules()
    vi.doMock('../src/data/projects', () => ({ PROJECTS: [] }))
    const { default: ProjectsEmpty } = await import(
      '../src/components/Projects'
    )
    const { container } = render(<ProjectsEmpty />)
    // no project tiles -> only structural elements remain
    expect(container.querySelectorAll('article').length).toBe(0)
    // cleanup
    vi.resetModules()
  })
})
