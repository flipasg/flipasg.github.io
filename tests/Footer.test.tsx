import { render, screen } from '@testing-library/react'
import Footer from '../src/components/Footer'

describe('Footer', () => {
  test('should render footer with social links and action buttons', () => {
    render(<Footer />)

    expect(screen.getAllByRole('link').length).toBeGreaterThanOrEqual(4)

    expect(screen.getByText(/@flipasg/i)).toBeInTheDocument()
  })
})
