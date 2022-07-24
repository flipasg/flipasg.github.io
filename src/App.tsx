import Home from '@/components/home/Home'
import { createTheme, CssBaseline, Grid, ThemeProvider } from '@mui/material'
const theme = createTheme({
  palette: {
    primary: {
      main: '#000C24',
    },
    secondary: {
      main: '#FBFBFB',
    },
    text: {
      primary: '#000C24',
      secondary: '#F44336',
    },
    common: {
      white: '#FBFBFB',
    },
  },
  typography: {
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
      fontSize: 24,
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
      <Grid container>
        <Home />
      </Grid>
    </ThemeProvider>
  )
}
