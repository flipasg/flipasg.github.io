import { render, screen } from '@testing-library/react'
import App from '../src/App'

describe('App', () => {
  test('should render main sections and role main present', () => {
    render(<App />)

    expect(
      screen.getByText(/I have worked as a software\/product engineer/i),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Work Experience/i }),
    ).toBeInTheDocument()
    expect(screen.getByText(/Silencio en la Sala/i)).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
  })
})
