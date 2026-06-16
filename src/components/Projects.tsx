import { PROJECTS, type Project } from '@/data/projects'
import { Box, Chip, Stack, Typography } from '@mui/material'
import Grid from '@mui/material/Grid'

function Tile({ p }: { p: Project }) {
  return (
    <Box
      component='article'
      sx={{
        position: 'relative',
        height: 'auto',
        borderRadius: 2,
        overflow: 'hidden',
        boxShadow: '0 10px 28px rgba(0, 34, 78, 0.2)',
        bgcolor: 'primary.main',
        '&:hover': {
          boxShadow: '0 16px 44px rgba(0, 34, 78, 0.32)',
        },
      }}
    >
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          p: { xs: 2.5, sm: 3 },
        }}
      >
        <Box>
          <Typography
            variant='h4'
            sx={{
              fontWeight: 800,
              mt: 1,
              fontSize: { xs: 24, sm: 28, md: 32 },
            }}
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
        <Box
          sx={{
            borderBottom: '0.5px solid',
            borderColor: 'background.paper',
            my: 1,
          }}
        />

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
            {p.tech.map((t, i) => (
              <Chip
                key={`${p.title}-${t}-${i}`}
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
      sx={{
        backgroundColor: 'background.default',
        px: { xs: 2, sm: 4 },
        py: { xs: 5, sm: 7, md: 9 },
      }}
      gap={3}
      width='100%'
    >
      <Typography variant='h2' fontSize={36} textAlign='center'>
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

      <Grid container spacing={2.5} sx={{ maxWidth: 'lg', width: '100%' }}>
        {PROJECTS.map((p) => (
          <Grid key={p.title} size={{ xs: 12, sm: 6, md: 6 }}>
            <Tile p={p} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  )
}
