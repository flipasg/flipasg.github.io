import Logo from '@/assets/logo-primary.png'
import { Box, Chip, Stack, Typography } from '@mui/material'
import Grid from '@mui/material/Grid'
import ActionButtons from './ActionButtons'
import SocialLinks from './SocialLinks'

export default function Hero() {
  return (
    <Grid
      container
      component='section'
      sx={{
        background:
          'linear-gradient(145deg, #c6d9ff 0%, #eef4ff 48%, #fbfbfb 100%)',
        px: { xs: 2, sm: 4, md: 6, lg: 8 },
        py: { xs: 6, sm: 8, md: 10, lg: 12 },
        minHeight: { xs: 'auto', md: '82vh' },
      }}
      width='100%'
      justifyContent='center'
      alignItems='center'
    >
      <Grid
        container
        alignItems='center'
        width='100%'
        maxWidth='xl'
        spacing={{ xs: 4, md: 8, lg: 10 }}
        sx={{ flexDirection: { xs: 'column-reverse', md: 'row' } }}
      >
        <Grid size={{ xs: 12, md: 7, lg: 7 }}>
          <Stack
            component='header'
            spacing={{ xs: 2, sm: 2.5 }}
            alignItems={{ xs: 'center', md: 'flex-start' }}
            textAlign={{ xs: 'center', md: 'left' }}
          >
            <Chip
              label='Available for frontend and AI product work'
              color='primary'
              variant='outlined'
              sx={{
                borderWidth: 2,
                bgcolor: 'rgba(251, 251, 251, 0.72)',
                fontWeight: 800,
                maxWidth: '100%',
                height: 'auto',
                '& .MuiChip-label': {
                  display: 'block',
                  overflow: 'visible',
                  py: 0.75,
                  whiteSpace: 'normal',
                },
              }}
            />
            <Typography
              variant='overline'
              color='primary'
              sx={{ fontWeight: 800, letterSpacing: 2 }}
            >
              Portfolio · Frontend · AI products
            </Typography>
            <Typography
              variant='h1'
              sx={{
                color: 'primary.main',
                maxWidth: 980,
                whiteSpace: { xs: 'normal', lg: 'nowrap' },
              }}
            >
              Iker Garcia Ramirez
            </Typography>
            <Typography
              variant='h2'
              color='primary'
              sx={{
                fontSize: { xs: 28, sm: 36, md: 44, lg: 52 },
                lineHeight: 1.15,
                maxWidth: 760,
              }}
            >
              Frontend Engineer building responsive, accessible web products.
            </Typography>
            <Typography
              variant='body1'
              color='primary'
              sx={{
                maxWidth: 680,
                opacity: 0.88,
              }}
            >
              I turn complex product ideas into fast interfaces with clear
              structure, pragmatic engineering, and careful attention to how
              people use them across devices.
            </Typography>
            <SocialLinks />
            <ActionButtons />
          </Stack>
        </Grid>
        <Grid
          size={{ xs: 12, md: 5, lg: 5 }}
          sx={{ display: 'flex', justifyContent: 'center' }}
        >
          <Box
            component='img'
            alt='Iker Garcia'
            src={Logo}
            sx={{
              width: { xs: 190, sm: 240, md: 320, lg: 380 },
              maxWidth: '100%',
              height: 'auto',
              display: 'block',
            }}
          />
        </Grid>
      </Grid>
    </Grid>
  )
}
