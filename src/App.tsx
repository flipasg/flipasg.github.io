import Home from '@/components/home/Home'
import { createTheme, CssBaseline, Grid, ThemeProvider } from '@mui/material'
import Footer from './components/footer/Footer'
import AboutMe from './components/about-me/AboutMe'
const theme = createTheme({
  palette: {
    primary: {
      main: '#2A2E44',
    },
    secondary: {
      main: '#DCA780',
    },
    text: {
      primary: '#DCA780',
      secondary: '#BC8381',
    },
    common: {
      white: '#FBFBFB',
    },
  },
  typography: {
    fontFamily: ['Old Standard TT', 'serif'].join(','),
    h1: {
      fontWeight: 700,
      fontSize: 32,
    },
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 700,
    },
    h4: {
      fontWeight: 700,
    },
    h5: {
      fontWeight: 700,
    },
    h6: {
      fontWeight: 600,
    },
    subtitle1: {
      fontWeight: 600,
    },
    body1: {
      fontSize: 18,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1024,
      lg: 1280,
      xl: 1920,
    },
  },
})
export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid container component={'main'}>
        <Home />
        <AboutMe />
        <Footer />
      </Grid>
    </ThemeProvider>
  )
}
