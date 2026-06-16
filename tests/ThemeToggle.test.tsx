import { fireEvent, render, screen } from '@testing-library/react'
import { vi } from 'vitest'
import ThemeToggle from '../src/components/ThemeToggle'

describe('ThemeToggle', () => {
  test('should render dark theme action and call toggle', () => {
    const onToggle = vi.fn()

    render(<ThemeToggle mode='light' onToggle={onToggle} />)

    const toggle = screen.getByRole('button', {
      name: 'Switch to dark theme',
    })
    fireEvent.click(toggle)

    expect(onToggle).toHaveBeenCalledTimes(1)
  })

  test('should render light theme action for dark mode', () => {
    render(<ThemeToggle mode='dark' onToggle={() => undefined} />)

    expect(
      screen.getByRole('button', { name: 'Switch to light theme' }),
    ).toBeInTheDocument()
  })
})
