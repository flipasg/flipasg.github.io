import { render, screen } from '@testing-library/react'

import SocialLinks from '../src/components/SocialLinks'

describe('SocialLinks', () => {
  test('should render all configured social links with correct hrefs', () => {
    render(<SocialLinks />)

    expect(
      screen.getByRole('navigation', { name: /social links/i }),
    ).toBeInTheDocument()

    const links = screen.getAllByRole('link')
    expect(links.length).toBeGreaterThanOrEqual(4)

    expect(
      screen.getByRole('link', { name: /github profile/i }),
    ).toHaveAttribute('href', expect.stringContaining('github.com'))
  })
})
