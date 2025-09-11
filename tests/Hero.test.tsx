import { render, screen } from '@testing-library/react'

import Hero from '../src/components/Hero'

describe('Hero', () => {
  test('should render hero section with name and avatar', () => {
    render(<Hero />)

    expect(screen.getByText(/Iker Garcia/i)).toBeInTheDocument()

    const avatar = screen.getByAltText(/Iker Garcia/i)
    expect(avatar).toBeInTheDocument()

    expect(screen.getAllByRole('link').length).toBeGreaterThanOrEqual(2)
  })
})
