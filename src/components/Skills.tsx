import { SKILLS, type SkillIconKey } from '@/data/skills'
import ArchitectureIcon from '@mui/icons-material/Architecture'
import BuildIcon from '@mui/icons-material/Build'
import CloudIcon from '@mui/icons-material/Cloud'
import CodeIcon from '@mui/icons-material/Code'
import DesignServicesIcon from '@mui/icons-material/DesignServices'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions'
import PsychologyIcon from '@mui/icons-material/Psychology'
import PublicIcon from '@mui/icons-material/Public'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Card,
  CardContent,
  Chip,
  Divider,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import Grid from '@mui/material/Grid'
import type { ReactNode } from 'react'
import SectionHeading from './SectionHeading'

const ICONS: Record<SkillIconKey, ReactNode> = {
  ai: <PsychologyIcon />,
  frontend: <PublicIcon />,
  backend: <CodeIcon />,
  integrations: <IntegrationInstructionsIcon />,
  cloud: <CloudIcon />,
  tools: <DesignServicesIcon />,
  infrastructure: <BuildIcon />,
  architecture: <ArchitectureIcon />,
}

function SkillChips({
  categoryTitle,
  items,
}: {
  categoryTitle: string
  items: string[]
}) {
  return (
    <Stack direction='row' useFlexGap flexWrap='wrap' gap={1}>
      {items.map((s) => (
        <Chip
          key={`${categoryTitle}-${s}`}
          label={s}
          size='medium'
          sx={{
            bgcolor: 'transparent',
            borderColor: 'primary.main',
            color: 'primary.main',
            fontSize: { xs: 13, sm: 14 },
            fontWeight: 700,
          }}
          variant='outlined'
        />
      ))}
    </Stack>
  )
}

function CategoryHeading({
  icon,
  title,
}: {
  icon: SkillIconKey
  title: string
}) {
  return (
    <Stack direction='row' alignItems='center' spacing={2}>
      <Avatar
        variant='rounded'
        sx={{
          bgcolor: 'rgba(85, 119, 104, 0.12)',
          color: 'primary.main',
          border: '2px solid',
          borderColor: 'primary.main',
          width: 48,
          height: 48,
        }}
      >
        {ICONS[icon]}
      </Avatar>
      <Typography
        variant='h6'
        sx={{
          fontWeight: 800,
          fontSize: { xs: 18, sm: 20 },
          color: 'text.primary',
        }}
      >
        {title}
      </Typography>
    </Stack>
  )
}

export default function Skills() {
  const theme = useTheme()
  const isCompact = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Grid
      container
      component='section'
      direction='column'
      alignItems='center'
      justifyContent={'center'}
      sx={{
        backgroundColor: 'background.paper',
        px: { xs: 2, sm: 4, md: 6, lg: 8 },
        py: { xs: 5, sm: 7, md: 9 },
      }}
      width={'100%'}
      gap={{ xs: 3.5, md: 5 }}
    >
      <SectionHeading
        eyebrow='Toolkit'
        title='Skills'
        description='A practical mix of frontend systems, AI workflows, geospatial products, architecture, and delivery tooling.'
      />

      {isCompact ? (
        <Stack spacing={1.5} sx={{ maxWidth: 'xl', mx: 'auto', width: '100%' }}>
          {SKILLS.map((cat) => (
            <Accordion
              key={cat.title}
              disableGutters
              elevation={0}
              sx={{
                bgcolor: 'rgba(220, 232, 255, 0.42)',
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: 1,
                boxShadow: 'none',
                overflow: 'hidden',
                '&::before': { display: 'none' },
              }}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <CategoryHeading icon={cat.icon} title={cat.title} />
              </AccordionSummary>
              <AccordionDetails sx={{ pt: 0 }}>
                <SkillChips categoryTitle={cat.title} items={cat.items} />
              </AccordionDetails>
            </Accordion>
          ))}
        </Stack>
      ) : (
        <Grid
          container
          spacing={3}
          sx={{ maxWidth: 'xl', mx: 'auto', width: '100%' }}
        >
          {SKILLS.map((cat) => (
            <Grid key={cat.title} size={{ xs: 12, sm: 6, md: 4 }}>
              <Card
                elevation={0}
                component='article'
                sx={{
                  height: '100%',
                  backgroundColor: 'rgba(220, 232, 255, 0.46)',
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 1,
                  boxShadow: '0 16px 38px rgba(0, 34, 78, 0.1)',
                  transition: 'transform .18s ease, box-shadow .18s ease',
                  '&:hover': {
                    boxShadow: '0 22px 52px rgba(0, 34, 78, 0.16)',
                    transform: 'translateY(-3px)',
                  },
                }}
              >
                <CardContent sx={{ p: { xs: 2.5, sm: 3 } }}>
                  <Stack spacing={2}>
                    <CategoryHeading icon={cat.icon} title={cat.title} />

                    <Divider sx={{ borderColor: 'divider' }} />

                    <SkillChips categoryTitle={cat.title} items={cat.items} />
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Grid>
  )
}
