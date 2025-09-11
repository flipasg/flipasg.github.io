import { render, screen } from '@testing-library/react'

import SocialLinks from '../src/components/SocialLinks'

describe('SocialLinks', () => {
  test('should render all configured social links with correct hrefs', () => {
    render(<SocialLinks />)

    const links = screen.getAllByRole('link')
    expect(links.length).toBeGreaterThanOrEqual(4)

    expect(
      links.some((l) => l.getAttribute('href')?.includes('github.com')),
    ).toBeTruthy()
  })
})
