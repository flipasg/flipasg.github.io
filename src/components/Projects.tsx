import { PROJECTS, type Project } from '@/data/projects'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import { Box, Button, Chip, Stack, Typography } from '@mui/material'
import Grid from '@mui/material/Grid'
import SectionHeading from './SectionHeading'

const PROJECT_ACCENTS = ['#c96f3d', '#557768', '#747f9f', '#9f6a5f', '#b58a44']

function Tile({ p, index }: { p: Project; index: number }) {
  const tech = Array.from(new Set(p.tech))
  const accent = PROJECT_ACCENTS[index % PROJECT_ACCENTS.length]

  return (
    <Box
      component='article'
      sx={{
        position: 'relative',
        height: '100%',
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 1,
        overflow: 'hidden',
        boxShadow: '0 18px 46px rgba(0, 34, 78, 0.14)',
        bgcolor: (theme) =>
          theme.palette.mode === 'dark' ? '#0c1d32' : '#00224e',
        transition:
          'transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease',
        '&::before': {
          content: '""',
          position: 'absolute',
          insetBlock: 0,
          left: 0,
          width: 5,
          bgcolor: accent,
        },
        '&:hover': {
          borderColor: accent,
          boxShadow: '0 24px 60px rgba(0, 34, 78, 0.24)',
          transform: 'translateY(-4px)',
        },
      }}
    >
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          p: { xs: 2.5, sm: 3.25 },
          pl: { xs: 3.25, sm: 4 },
          minHeight: '100%',
        }}
      >
        <Stack spacing={1.25}>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={1}
            alignItems={{ xs: 'flex-start', sm: 'center' }}
            justifyContent='space-between'
          >
            <Typography
              variant='overline'
              sx={{ color: 'rgba(220, 232, 255, 0.76)', lineHeight: 1.4 }}
            >
              {p.title}
            </Typography>
            {p.period ? (
              <Chip
                label={p.period}
                size='small'
                sx={{
                  bgcolor: 'rgba(255, 255, 255, 0.12)',
                  color: '#dce8ff',
                }}
              />
            ) : null}
          </Stack>
          <Typography
            variant='h3'
            sx={{
              fontWeight: 800,
              fontSize: { xs: 26, sm: 30, md: 34 },
              lineHeight: 1.08,
            }}
            color='#dce8ff'
          >
            {p.role}
          </Typography>
          {p.href ? (
            <Button
              component='a'
              href={p.href}
              target='_blank'
              rel='noreferrer'
              color='secondary'
              size='small'
              variant='text'
              endIcon={<OpenInNewIcon fontSize='small' />}
              sx={{
                alignSelf: 'flex-start',
                color: '#c4d8ce',
                minHeight: 0,
                px: 0,
                py: 0.25,
                '&:hover': {
                  bgcolor: 'transparent',
                  color: '#f0b47a',
                },
              }}
            >
              {p.company}
            </Button>
          ) : (
            <Typography
              variant='subtitle1'
              sx={{ color: '#c4d8ce', display: 'block' }}
            >
              {p.company}
            </Typography>
          )}
        </Stack>
        <Box
          sx={{
            borderBottom: '0.5px solid',
            borderColor: 'rgba(220, 232, 255, 0.5)',
            my: 2,
          }}
        />

        <Box>
          <Typography
            variant='body2'
            sx={{ color: 'rgba(220, 232, 255, 0.88)', lineHeight: 1.6 }}
          >
            {p.description}
          </Typography>
        </Box>

        <Box>
          <Stack direction='row' flexWrap='wrap' gap={1} sx={{ mt: 2 }}>
            {tech.map((t) => (
              <Chip
                key={`${p.title}-${t}`}
                label={t}
                size='small'
                sx={{
                  bgcolor: 'rgba(255, 255, 255, 0.12)',
                  color: '#dce8ff',
                  fontWeight: 600,
                }}
              />
            ))}
          </Stack>
        </Box>
      </Box>
    </Box>
  )
}

export default function Projects() {
  return (
    <Grid
      container
      component='section'
      direction='column'
      alignItems='center'
      sx={{
        backgroundColor: 'background.default',
        px: { xs: 2, sm: 4, md: 6, lg: 8 },
        py: { xs: 5, sm: 7, md: 9 },
      }}
      gap={{ xs: 3.5, md: 5 }}
      width='100%'
    >
      <SectionHeading
        eyebrow='Selected work'
        title='Work Experience'
        description='A career history across GIS platforms, AI product tooling, data visualization, and accessible frontend systems.'
      />

      <Grid container spacing={3} sx={{ maxWidth: 'xl', width: '100%' }}>
        {PROJECTS.map((p, index) => (
          <Grid key={p.title} size={{ xs: 12, sm: 6, md: 6 }}>
            <Tile p={p} index={index} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  )
}
