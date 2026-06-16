import Logo from '@/assets/logo-primary.png'
import { Avatar, Box, Stack, Typography } from '@mui/material'
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
          'linear-gradient(135deg, #c6d9ff 0%, #eef4ff 55%, #fbfbfb 100%)',
        px: { xs: 2, sm: 4, md: 6 },
        py: { xs: 6, sm: 8, md: 10 },
        minHeight: { xs: 'auto', md: '78vh' },
      }}
      width='100%'
      justifyContent='center'
      alignItems='center'
    >
      <Grid
        container
        alignItems='center'
        width='100%'
        maxWidth='lg'
        spacing={{ xs: 4, md: 8 }}
        sx={{ flexDirection: { xs: 'column-reverse', md: 'row' } }}
      >
        <Grid size={{ xs: 12, md: 7 }}>
          <Stack
            component='header'
            spacing={2}
            alignItems={{ xs: 'center', md: 'flex-start' }}
            textAlign={{ xs: 'center', md: 'left' }}
          >
            <Typography
              variant='overline'
              color='primary'
              sx={{ fontWeight: 800, letterSpacing: 2 }}
            >
              Portfolio · Frontend · AI products
            </Typography>
            <Box>
              <Typography variant='h1'>Iker Garcia</Typography>
              <Typography
                variant='h1'
                component='span'
                sx={{ display: { xs: 'none', sm: 'block' } }}
              >
                Ramirez
              </Typography>
            </Box>
            <Typography
              variant='h2'
              color='primary'
              sx={{
                fontSize: { xs: 28, sm: 36, md: 44 },
                lineHeight: 1.15,
                maxWidth: 640,
              }}
            >
              Frontend Engineer building responsive, accessible web products.
            </Typography>
            <SocialLinks />
            <ActionButtons />
          </Stack>
        </Grid>
        <Grid
          size={{ xs: 12, md: 5 }}
          sx={{ display: 'flex', justifyContent: 'center' }}
        >
          <Avatar
            alt='Iker Garcia'
            src={Logo}
            sx={{
              width: { xs: 144, sm: 180, md: 240 },
              height: { xs: 144, sm: 180, md: 240 },
              bgcolor: 'common.white',
              boxShadow: '0 24px 60px rgba(0, 34, 78, 0.25)',
              p: { xs: 2, md: 3 },
            }}
            slotProps={{ img: { sx: { objectFit: 'contain' } } }}
          />
        </Grid>
      </Grid>
    </Grid>
  )
}
