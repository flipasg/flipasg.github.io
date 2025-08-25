import {
  Box,
  Card,
  CardContent,
  Typography,
  Chip,
  Stack,
  Avatar,
  Divider,
} from '@mui/material'
import Grid from '@mui/material/Grid2'
import PsychologyIcon from '@mui/icons-material/Psychology'
import PublicIcon from '@mui/icons-material/Public'
import CodeIcon from '@mui/icons-material/Code'
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions'
import CloudIcon from '@mui/icons-material/Cloud'
import DesignServicesIcon from '@mui/icons-material/DesignServices'
import { useTheme, alpha } from '@mui/material/styles'

import { SKILLS, type SkillIconKey } from '@/data/skills'

const ICONS: Record<SkillIconKey, React.ReactNode> = {
  ai: <PsychologyIcon />,
  frontend: <PublicIcon />,
  backend: <CodeIcon />,
  integrations: <IntegrationInstructionsIcon />,
  cloud: <CloudIcon />,
  tools: <DesignServicesIcon />,
}

const DESC: Record<string, string> = {
  'AI & Dev Productivity':
    'AI features and developer tooling that speed delivery.',
  Frontend: 'Responsive, accessible UIs and geospatial data-viz.',
  Backend: 'APIs and services focused on robustness and performance.',
  'Integrations & Analytics':
    'Product analytics, feature flags, and 3rd-party APIs.',
  'Cloud & DevOps': 'CI/CD pipelines, containers, and cloud deployments.',
  'Design & Tools': 'Prototyping and toolchains for fast iteration.',
}

export default function Skills() {
  const theme = useTheme()
  const accent = theme.palette.secondary.main
  const cardBg = alpha(theme.palette.background.default, 0.06)
  const cardBorder = alpha(theme.palette.background.default, 0.1)
  const chipBorder = alpha(theme.palette.background.default, 0.18)
  const chipHover = alpha(theme.palette.secondary.main, 0.14)

  return (
    <Grid
      container
      component='section'
      direction='column'
      sx={{
        backgroundColor: theme.palette.common.white,
        px: { xs: 2, sm: 4 },
        py: { xs: 6, sm: 8 },
      }}
      rowGap={4}
      justifyContent={'center'}
      width={'100%'}
      aria-labelledby='skills-heading'
    >
      <Box sx={{ maxWidth: 'md', mx: 'auto', width: '100%' }}>
        <Typography variant='h2' color={'secondary'} fontSize={36} >
          Skills
        </Typography>
      </Box>

      <Grid
        container
        spacing={3}
        sx={{ maxWidth: 'md', mx: 'auto', width: '100%' }}
      >
        {SKILLS.map((cat) => (
          <Grid key={cat.title} size={{ xs: 12, sm: 6 }}>
            <Card
              elevation={0}
              sx={{
                height: '100%',
                backgroundColor: theme.palette.background.default,
                border: `1px solid ${cardBorder}`,
                borderRadius: 2,
                boxShadow: '0 10px 18px rgba(0,0,0,.35)',
                transition: 'transform .18s ease, box-shadow .18s ease',
                '&:hover': {
                  transform: { sm: 'translateY(-4px)' },
                  boxShadow: '0 14px 26px rgba(0,0,0,.45)',
                },
              }}
            >
              <CardContent sx={{ p: { xs: 2.5, sm: 3 } }}>
                <Stack direction='row' alignItems='center' spacing={2} mb={1.5}>
                  <Avatar
                    variant='rounded'
                    sx={{
                      bgcolor: 'transparent',
                      color: accent,
                      border: `2px solid ${accent}`,
                      width: 48,
                      height: 48,
                    }}
                  >
                    {ICONS[cat.icon]}
                  </Avatar>
                  <Typography
                    variant='h6'
                    sx={{
                      fontWeight: 800,
                      color: theme.palette.secondary.main,
                      fontSize: { xs: 18, sm: 20 },
                    }}
                  >
                    {cat.title}
                  </Typography>
                </Stack>

                <Typography
                  variant='body1'
                  sx={{
                    color: theme.palette.text.secondary,
                    opacity: 0.85,
                    mb: 2,
                    lineHeight: 1.65,
                    fontSize: { xs: 14, sm: 16 },
                  }}
                >
                  {DESC[cat.title] ?? 'Practical skills used in real projects.'}
                </Typography>

                <Divider
                  sx={{
                    borderColor: alpha(theme.palette.text.secondary, 0.08),
                    mb: 2,
                  }}
                />

                <Stack direction='row' useFlexGap flexWrap='wrap' gap={1}>
                  {cat.items.map((s) => (
                    <Chip
                      key={s}
                      label={s}
                      size='medium'
                      sx={{
                        fontSize: { xs: 13, sm: 14 },
                        fontWeight: 600,
                        color: theme.palette.common.white,
                        borderColor: chipBorder,
                        bgcolor: alpha(theme.palette.common.white, 0.04),
                        cursor: 'default',
                        '&:hover': {
                          borderColor: theme.palette.background.paper,
                          bgcolor: theme.palette.background.paper,
                        },
                      }}
                      variant='outlined'
                    />
                  ))}
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Grid>
  )
}
