import { SKILLS, type SkillIconKey } from '@/data/skills'
import ArchitectureIcon from '@mui/icons-material/Architecture'
import BuildIcon from '@mui/icons-material/Build'
import CloudIcon from '@mui/icons-material/Cloud'
import CodeIcon from '@mui/icons-material/Code'
import DesignServicesIcon from '@mui/icons-material/DesignServices'
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions'
import PsychologyIcon from '@mui/icons-material/Psychology'
import PublicIcon from '@mui/icons-material/Public'
import {
  Avatar,
  Card,
  CardContent,
  Chip,
  Divider,
  Stack,
  Typography,
} from '@mui/material'
import Grid from '@mui/material/Grid'

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
      alignItems='center'
      justifyContent={'center'}
      sx={{
        py: { xs: 4, sm: 6 },
      }}
      width={'100%'}
    >
      <Typography variant='h2' fontSize={36} mb={2} textAlign='center'>
        Skills
      </Typography>
      <Divider
        sx={{
          width: '100%',
          maxWidth: 'md',
          mx: 'auto',
          height: 2,
          bgcolor: 'primary.main',
          borderRadius: 1,
          mb: 3,
        }}
      />

      <Grid
        container
        spacing={3}
        sx={{ maxWidth: 'md', mx: 'auto', width: '100%', px: { xs: 2 } }}
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
                    borderColor: 'primary.main',
                    mb: 2,
                  }}
                />

                <Stack direction='row' useFlexGap flexWrap='wrap' gap={1}>
                  {cat.items.map((s, i) => (
                    <Chip
                      key={`${cat.title}-${s}-${i}`}
                      label={s}
                      size='medium'
                      sx={{
                        fontSize: { xs: 13, sm: 14 },
                        fontWeight: 600,
                        borderColor: 'primary.main',
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
