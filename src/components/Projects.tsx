import Grid from '@mui/material/Grid2'
import { Box, Typography, Button, Chip, Stack, IconButton } from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { PROJECTS, type Project } from '@/data/projects'
import Stars from '@/assets/stars.png'
import Portrait from '@/assets/portrait.jpg'
import Silence from '@/assets/silencio-en-la-sala.jpg'
import Sketched from '@/assets/skeched-portrait.jpg'
import Landbot from '@/assets/landbot.svg'
import Frenetic from '@/assets/frenetic.svg'

function Tile({ p }: { p: Project }) {
  return (
    <Box
      component={'article'}
      sx={{
        position: 'relative',
        height: { xs: 220, sm: 300, md: 360 },
        borderRadius: 2,
        overflow: 'hidden',
        boxShadow: '0 12px 36px rgba(0,0,0,.45)',
        bgcolor: 'primary.main', // Updated to match current styles
        cursor: 'pointer', // Add pointer cursor on hover
        '&:hover .detail': {
          opacity: 1,
          transform: 'translateY(0)',
        },
        '&:hover': {
          boxShadow: '0 16px 48px rgba(0,0,0,.6)', // Slightly stronger shadow on hover
        },
      }}
    >
      {/* content: title + role + period */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          p: 3,
        }}
      >
        <Box>
          {/* role chip */}
          {p.role && (
            <Chip
              label={p.role}
              size='small'
              sx={{
                bgcolor: 'background.paper',
                color: 'common.white',
                fontWeight: 700,
                mb: 1,
              }}
            />
          )}
          <Typography
            variant='h4'
            sx={{ fontWeight: 800, mt: 1 }}
            color='text.primary'
          >
            {p.title}
          </Typography>
          {p.period && (
            <Typography
              variant='caption'
              sx={{ display: 'block', opacity: 0.9, mt: 0.5 }}
              color='secondary'
            >
              {p.period}
            </Typography>
          )}
        </Box>

        <Box>
          <Stack direction='row' useFlexGap flexWrap='wrap' gap={1}>
            {p.tech.slice(0, 5).map((t) => (
              <Chip
                key={t}
                label={t}
                size='small'
                sx={{
                  bgcolor: 'rgba(255,255,255,.15)',
                  color: 'common.white',
                  fontWeight: 600,
                }}
              />
            ))}
          </Stack>
        </Box>
      </Box>

      {/* hover detail overlay: description + arrow */}
      <Box
        className='detail'
        sx={{
          position: 'absolute',
          inset: 0,
          bgcolor: 'rgba(0,0,0,.56)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          px: 3,
          py: 2,
          color: 'common.white',
          opacity: 0,
          transform: 'translateY(12px)',
          transition: 'opacity .22s ease, transform .22s ease',
        }}
      >
        <Box sx={{ maxWidth: '70%' }}>
          <Typography variant='body1' sx={{ lineHeight: 1.5 }}>
            {p.description}
          </Typography>
        </Box>
        <Box>
          <IconButton
            href={p.href ?? '#'}
            target='_blank'
            rel='noreferrer'
            aria-label={`Open ${p.title}`}
            sx={{ color: 'common.white' }}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  )
}

export default function Projects() {
  return (
    <Grid
      container
      sx={{ backgroundColor: 'background.paper' }}
      width={'100%'}
      justifyContent='center'
    >
      <Grid
        container
        component='section'
        direction='column'
        alignItems='center'
        sx={{ backgroundColor: 'background.paper', py: { xs: 4, sm: 6 } }}
        gap={3}
        width={'100%'}
      >
        <Grid>
          <Typography variant='h4' color='secondary' sx={{ px: 2 }}>
            Selected Work
          </Typography>
        </Grid>

        <Grid
          container
          spacing={2}
          maxWidth={'xl'}
          sx={{ px: 2 }}
          width={'100%'}
        >
          {PROJECTS.map((p) => (
            <Grid key={p.title} size={{ xs: 12, sm: 6, md: 6 }}>
              <Tile p={p} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  )
}
