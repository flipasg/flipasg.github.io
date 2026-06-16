import { render, screen } from '@testing-library/react'
import SectionHeading from '../src/components/SectionHeading'

describe('SectionHeading', () => {
  test('should render eyebrow title and description', () => {
    render(
      <SectionHeading
        eyebrow='Creative writing'
        title='Silencio en la Sala'
        description='A personal writing space.'
        tone='editorial'
      />,
    )

    expect(screen.getByText('Creative writing')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Silencio en la Sala' }),
    ).toBeInTheDocument()
    expect(screen.getByText('A personal writing space.')).toBeInTheDocument()
  })
})
