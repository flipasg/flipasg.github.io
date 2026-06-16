import Hero from '@/components/Hero'
import { Box, createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import type { PaletteMode } from '@mui/material'
import { useMemo, useState } from 'react'
import AboutMe from './components/AboutMe'
import Blog from './components/Blog'
import Footer from './components/Footer'
import Projects from './components/Projects'
import Skills from './components/Skills'
import ThemeToggle from './components/ThemeToggle'

function buildTheme(mode: PaletteMode) {
  const isDark = mode === 'dark'

  return createTheme({
    palette: {
      mode,
      background: {
        default: isDark ? '#07111f' : '#f7f4ef',
        paper: isDark ? '#10243a' : '#fbfaf7',
      },
      primary: {
        main: isDark ? '#dce8ff' : '#00224e',
        dark: isDark ? '#a7c3f5' : '#001936',
        light: isDark ? '#f4f7ff' : '#2c527f',
      },
      secondary: {
        main: isDark ? '#9db8aa' : '#557768',
        dark: isDark ? '#6d8f80' : '#36594c',
        light: isDark ? '#c4d8ce' : '#7e9d90',
      },
      warning: {
        main: isDark ? '#f0b47a' : '#c96f3d',
        dark: isDark ? '#d6965f' : '#9f4f28',
        light: isDark ? '#f8d3ad' : '#e2a06e',
      },
      info: {
        main: isDark ? '#b9bed8' : '#747f9f',
      },
      text: {
        primary: isDark ? '#edf4ff' : '#00224e',
        secondary: isDark ? '#b6c7df' : '#536579',
      },
      divider: isDark ? 'rgba(220, 232, 255, 0.18)' : 'rgba(0, 34, 78, 0.14)',
      common: {
        white: '#fbfbfb',
      },
    },
    shape: {
      borderRadius: 8,
    },
    typography: {
      fontFamily: ['Mukta Mahee', 'sans-serif'].join(','),
      h1: {
        fontWeight: 800,
        fontSize: '4.75rem',
        lineHeight: 0.95,
        letterSpacing: 0,
      },
      h2: {
        fontWeight: 800,
        fontSize: '2.25rem',
        lineHeight: 1.12,
        letterSpacing: 0,
      },
      h3: {
        fontWeight: 800,
        letterSpacing: 0,
      },
      h4: {
        fontWeight: 800,
        letterSpacing: 0,
      },
      h5: {
        fontWeight: 700,
        letterSpacing: 0,
      },
      h6: {
        fontWeight: 700,
        letterSpacing: 0,
      },
      overline: {
        fontFamily: ['IBM Plex Mono', 'monospace'].join(','),
        fontWeight: 700,
        letterSpacing: 0,
      },
      subtitle1: {
        fontWeight: 700,
      },
      body1: {
        fontSize: 18,
        lineHeight: 1.7,
      },
      body2: {
        lineHeight: 1.65,
      },
      button: {
        fontWeight: 800,
        letterSpacing: 0,
        textTransform: 'none',
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
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          html: {
            minHeight: '100%',
            scrollBehavior: 'smooth',
          },
          body: {
            minHeight: '100%',
            width: '100%',
            overflowX: 'clip',
          },
          '#root': {
            minHeight: '100vh',
          },
          '::selection': {
            backgroundColor: isDark ? '#36594c' : '#d9eadf',
          },
          '@media (prefers-reduced-motion: reduce)': {
            '*, *::before, *::after': {
              animationDuration: '0.01ms !important',
              animationIterationCount: '1 !important',
              scrollBehavior: 'auto !important',
              transitionDuration: '0.01ms !important',
            },
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            minHeight: 44,
            paddingInline: 18,
            transition:
              'transform 180ms ease, box-shadow 180ms ease, background-color 180ms ease',
            '&:hover': {
              transform: 'translateY(-2px)',
            },
            '&.Mui-focusVisible': {
              outline: `3px solid ${isDark ? '#f0b47a' : '#c96f3d'}`,
              outlineOffset: 3,
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 8,
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: 999,
            fontWeight: 700,
          },
        },
      },
    },
  })
}

export default function App() {
  const [selectedMode, setSelectedMode] = useState<PaletteMode>('light')
  const mode = selectedMode
  const theme = useMemo(() => buildTheme(mode), [mode])

  const handleThemeToggle = () => {
    setSelectedMode((currentMode) =>
      currentMode === 'dark' ? 'light' : 'dark',
    )
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        component='main'
        sx={{
          backgroundColor: 'background.default',
          color: 'text.primary',
          minHeight: '100vh',
          width: '100%',
          maxWidth: '100%',
          overflowX: 'clip',
        }}
      >
        <ThemeToggle mode={mode} onToggle={handleThemeToggle} />
        <Hero />
        <AboutMe />
        <Projects />
        <Skills />
        <Blog />
        <Footer />
      </Box>
    </ThemeProvider>
  )
}
