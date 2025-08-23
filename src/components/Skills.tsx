import {
  Card, CardContent, CardHeader, Typography, Chip, Stack, Avatar, Divider,
} from '@mui/material'
import Grid from '@mui/material/Grid2'
import PsychologyIcon from '@mui/icons-material/Psychology'
import PublicIcon from '@mui/icons-material/Public'
import CodeIcon from '@mui/icons-material/Code'
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions'
import CloudIcon from '@mui/icons-material/Cloud'
import DesignServicesIcon from '@mui/icons-material/DesignServices'

import { SKILLS, type SkillIconKey } from '@/data/skills'

const ICONS: Record<SkillIconKey, React.ReactNode> = {
  ai: <PsychologyIcon />,
  frontend: <PublicIcon />,
  backend: <CodeIcon />,
  integrations: <IntegrationInstructionsIcon />,
  cloud: <CloudIcon />,
  tools: <DesignServicesIcon />,
}

export default function Skills() {
  return (
    <Grid
      container
      component="section"
      direction="column"
      alignItems="center"
      sx={{
        backgroundColor: 'background.paper',
        px: { xs: 2, sm: 3 },
        py: { xs: 6, sm: 8 },
      }}
      rowGap={3}
      columnGap={3}
      width="100%"
      aria-labelledby="skills-heading"
    >
      <Grid container direction="column" maxWidth="md" mb={2}>
        <Typography
          id="skills-heading"
          variant="h2"
          color="primary"
          fontSize={{ xs: 32, sm: 40 }}
          fontWeight={800}
          mb={3}
          textAlign="center"
        >
          Skills
        </Typography>

        <Grid container spacing={3} sx={{ width: '100%' }}>
          {SKILLS.map((cat) => (
            <Grid key={cat.title} size={{ xs: 12, sm: 6, md: 4 }}>
              <Card
                sx={{
                  height: '100%',
                  backgroundColor: 'primary.main',
                  color: 'primary.contrastText',
                  borderRadius: 2,
                  overflow: 'hidden',
                  transition: 'transform 160ms ease, box-shadow 160ms ease',
                  '&:hover': { transform: { md: 'translateY(-3px)' }, boxShadow: 6 },
                }}
              >
                <Divider
                  sx={{
                    height: 5,
                    background:
                      'linear-gradient(90deg, rgba(114,124,202,1) 0%, rgba(255,255,255,0.85) 100%)',
                  }}
                />

                <CardHeader
                  avatar={
                    <Avatar
                      sx={{
                        bgcolor: 'secondary.main',
                        color: 'secondary.contrastText',
                        width: 48,
                        height: 48,
                      }}
                      variant="rounded"
                    >
                      {ICONS[cat.icon]}
                    </Avatar>
                  }
                  title={
                    <Typography variant="h6" fontWeight={800} fontSize={{ xs: 18, sm: 20 }}>
                      {cat.title}
                    </Typography>
                  }
                  sx={{ pb: 0.5 }}
                />

                <CardContent sx={{ pt: 1.5 }}>
                  <Stack direction="row" useFlexGap flexWrap="wrap" gap={1}>
                    {cat.items.map((s) => (
                      <Chip
                        key={s}
                        label={s}
                        size="medium"
                        sx={{
                          fontSize: { xs: 13, sm: 14 },
                          fontWeight: 600,
                          color: 'primary.contrastText',
                          borderColor: 'secondary.main',
                          '&:hover': { bgcolor: 'secondary.main', color: 'secondary.contrastText' },
                        }}
                        variant="outlined"
                      />
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  )
}