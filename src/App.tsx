import Hero from '@/components/Hero'
import { Box, createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import Footer from './components/Footer'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Grid from '@mui/material/Grid2'
import Projects from './components/Projects'

const theme = createTheme({
  palette: {
    background: {
      default: '#FBFBFB',
      paper: '#c6d9ff',
    },
    primary: {
      main: '#00224e',
    },
    secondary: {
      main: '#c6d9ff',
    },
    text: {
      primary: '#00224e',
      secondary: '#c6d9ff',
    },
    common: {
      white: '#FBFBFB',
    },
  },
  typography: {
    fontFamily: ["Mukta Mahee", 'sans-serif'].join(','),
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
      sm: 700,
      md: 850,
      lg: 1024,
      xl: 1280,
    },
  },
})

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid
        container
        component={'main'}
        sx={{ backgroundColor: theme.palette.common.white }}
      >
        <Hero />
        <AboutMe />
        <Projects />
        <Skills />
        <Footer />
      </Grid>
    </ThemeProvider>
  )
}
