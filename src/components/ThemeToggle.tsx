import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import { IconButton, Tooltip } from '@mui/material'
import type { PaletteMode } from '@mui/material'

type ThemeToggleProps = {
  mode: PaletteMode
  onToggle: () => void
}

export default function ThemeToggle({ mode, onToggle }: ThemeToggleProps) {
  const isDark = mode === 'dark'
  const label = isDark ? 'Switch to light theme' : 'Switch to dark theme'

  return (
    <Tooltip title={label} arrow>
      <IconButton
        aria-label={label}
        color='primary'
        onClick={onToggle}
        sx={{
          position: 'fixed',
          top: { xs: 12, sm: 20 },
          right: { xs: 12, sm: 20 },
          zIndex: (theme) => theme.zIndex.tooltip,
          bgcolor: isDark ? '#dce8ff' : 'background.paper',
          border: '1px solid',
          borderColor: isDark ? '#dce8ff' : 'divider',
          boxShadow: '0 12px 28px rgba(0, 34, 78, 0.16)',
          color: isDark ? '#07111f' : 'primary.main',
          height: 44,
          width: 44,
          '&:hover': {
            bgcolor: isDark ? '#f4f7ff' : 'secondary.light',
          },
          '&.Mui-focusVisible': {
            outline: '3px solid',
            outlineColor: 'warning.main',
            outlineOffset: 3,
          },
        }}
      >
        {isDark ? <LightModeIcon /> : <DarkModeIcon />}
      </IconButton>
    </Tooltip>
  )
}
