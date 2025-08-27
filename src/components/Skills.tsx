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
import BuildIcon from '@mui/icons-material/Build'
import ArchitectureIcon from '@mui/icons-material/Architecture'
import { SKILLS, type SkillIconKey } from '@/data/skills'

const ICONS: Record<
  SkillIconKey | 'infrastructure' | 'architecture',
  React.ReactNode
> = {
  ai: <PsychologyIcon />,
  frontend: <PublicIcon />,
  backend: <CodeIcon />,
  integrations: <IntegrationInstructionsIcon />,
  cloud: <CloudIcon />,
  tools: <DesignServicesIcon />,
  infrastructure: <BuildIcon />,
  architecture: <ArchitectureIcon />,
}

export default function Skills() {
  return (
    <Grid
      container
      component='section'
      direction='column'
      sx={{
        px: { xs: 2, sm: 4 },
        py: { xs: 6, sm: 8 },
        backgroundColor: 'background.main',
      }}
      rowGap={4}
      justifyContent={'center'}
      width={'100%'}
      aria-labelledby='skills-heading'
    >
      <Box sx={{ maxWidth: 'md', mx: 'auto', width: '100%' }}>
        <Typography variant='h2' fontSize={36}>
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
                backgroundColor: 'background.paper',
                borderRadius: 2,
                boxShadow: '0 10px 18px rgba(0,0,0,.35)',
                transition: 'transform .18s ease, box-shadow .18s ease',
              }}
            >
              <CardContent sx={{ p: { xs: 2.5, sm: 3 } }}>
                <Stack direction='row' alignItems='center' spacing={2} mb={1.5}>
                  <Avatar
                    variant='rounded'
                    sx={{
                      bgcolor: 'transparent',
                      color: 'primary.main',
                      border: '2px solid',
                      borderColor: 'primary.main',
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
                      fontSize: { xs: 18, sm: 20 },
                      color: 'text.primary',
                    }}
                  >
                    {cat.title}
                  </Typography>
                </Stack>

                <Divider
                  sx={{
                    borderColor: 'background.main',
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
                        borderColor: 'background.main',
                        bgcolor: 'background.paper',
                        cursor: 'default',
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
