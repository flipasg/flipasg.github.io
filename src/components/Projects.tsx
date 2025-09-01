import Grid from '@mui/material/Grid2'
import { Box, Typography, Chip, Stack } from '@mui/material'
import { PROJECTS, type Project } from '@/data/projects'

function Tile({ p }: { p: Project }) {
  return (
    <Box
      component='article'
      sx={{
        position: 'relative',
        height: 'auto', // Adjust height to fit content
        borderRadius: 2,
        overflow: 'hidden',
        boxShadow: '0 12px 36px rgba(0,0,0,.45)',
        bgcolor: 'primary.main',
        '&:hover': {
          boxShadow: '0 16px 48px rgba(0,0,0,.6)',
        },
      }}
    >
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          p: 3,
        }}
      >
        <Box>
          <Typography
            variant='h4'
            sx={{ fontWeight: 800, mt: 1 }}
            color='text.secondary'
          >
            {p.role}
          </Typography>
          <Typography
            variant='subtitle1'
            sx={{ display: 'block', opacity: 0.9, mt: 0.5 }}
            color='secondary'
          >
            {p.company}
          </Typography>
          <Typography
            variant='subtitle2'
            sx={{ display: 'block', opacity: 0.7, mt: 0.5 }}
            color='text.secondary'
          >
            {p.period}
          </Typography>
        </Box>
        <Box sx={{ borderBottom: '0.5px solid', borderColor: 'background.paper', my: 1 }} />

        <Box>
          <Typography
            variant='body2'
            sx={{ lineHeight: 1.5, color: 'text.secondary' }}
          >
            {p.description}
          </Typography>
        </Box>

        <Box>
          <Stack direction='row' flexWrap='wrap' gap={1} sx={{ mt: 2 }}>
            {p.tech.map((t) => (
              <Chip
                key={t}
                label={t}
                size='small'
                sx={{
                  bgcolor: 'rgba(255,255,255,.15)',
                  color: 'secondary.main',
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
      sx={{ backgroundColor: 'background.main', py: { xs: 4, sm: 6 } }}
      gap={3}
      width='100%'
    >
      <Typography variant='h4' sx={{ px: 2 }}>
        Work Experience
      </Typography>
      <Box
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
        spacing={2}
        sx={{ px: 2, maxWidth: 'xl', width: '100%' }}
      >
        {PROJECTS.map((p) => (
          <Grid key={p.title} size={{ xs: 12, sm: 6, md: 6 }}>
            <Tile p={p} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  )
}
