import { render, screen } from '@testing-library/react'
import AboutMe from '../src/components/AboutMe'

describe('AboutMe', () => {
  test('should render about me section and text blocks', () => {
    const { container } = render(<AboutMe />)

    expect(
      screen.getByRole('heading', { name: /About me/i }),
    ).toBeInTheDocument()

    const paragraphs = container.querySelectorAll('p')
    expect(paragraphs.length).toBeGreaterThanOrEqual(3)
  })
})
