import { render, screen } from '@testing-library/react'
import ActionButtons from '../src/components/ActionButtons'

describe('ActionButtons', () => {
  test('should render both download and email buttons with correct attributes', () => {
    render(<ActionButtons />)

    const download = screen.getByRole('link', { name: /download cv/i })
    const email = screen.getByRole('link', { name: /email me/i })

    expect(download).toBeInTheDocument()
    expect(download).toHaveAttribute('target', '_blank')
    expect(download.getAttribute('href')).toMatch(/\.pdf$/i)

    expect(email).toBeInTheDocument()
    expect(email).toHaveAttribute('href', expect.stringMatching(/^mailto:/))
  })
})
