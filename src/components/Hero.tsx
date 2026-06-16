import Logo from '@/assets/logo-primary.png'
import LogoWhite from '@/assets/logo-white.png'
import { Box, Chip, Stack, Typography, useTheme } from '@mui/material'
import Grid from '@mui/material/Grid'
import ActionButtons from './ActionButtons'
import SocialLinks from './SocialLinks'

export default function Hero() {
  const theme = useTheme()

  return (
    <Grid
      container
      component='section'
      sx={{
        background: (theme) =>
          theme.palette.mode === 'dark'
            ? 'linear-gradient(135deg, #07111f 0%, #10243a 58%, #17332d 100%)'
            : 'linear-gradient(135deg, #dce8ff 0%, #f7f4ef 58%, #edf5ef 100%)',
        px: { xs: 2, sm: 4, md: 6, lg: 8 },
        py: { xs: 6, sm: 8, md: 10, lg: 11 },
        minHeight: { xs: 'auto', md: '88vh' },
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
        sx={{ flexDirection: { xs: 'column', md: 'row' } }}
      >
        <Grid size={{ xs: 12, md: 7, lg: 7 }}>
          <Stack
            component='header'
            spacing={{ xs: 2, sm: 2.5 }}
            alignItems={{ xs: 'center', md: 'flex-start' }}
            textAlign={{ xs: 'center', md: 'left' }}
            sx={{
              '@keyframes heroFadeUp': {
                from: { opacity: 0, transform: 'translateY(16px)' },
                to: { opacity: 1, transform: 'translateY(0)' },
              },
              animation: 'heroFadeUp 520ms ease both',
            }}
          >
            <Chip
              label='Engineer by trade. Writer by instinct.'
              color='secondary'
              variant='outlined'
              sx={{
                borderWidth: 2,
                bgcolor: (theme) =>
                  theme.palette.mode === 'dark'
                    ? 'rgba(220, 232, 255, 0.94)'
                    : 'rgba(251, 250, 247, 0.72)',
                borderColor: (theme) =>
                  theme.palette.mode === 'dark'
                    ? 'rgba(220, 232, 255, 0.94)'
                    : 'secondary.main',
                color: (theme) =>
                  theme.palette.mode === 'dark' ? '#07111f' : 'primary.main',
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
              sx={{ fontWeight: 800 }}
            >
              Frontend · AI · Writing
            </Typography>
            <Typography
              variant='h1'
              sx={{
                color: 'primary.main',
                fontSize: { xs: 34, sm: 54, md: 58, lg: 64 },
                maxWidth: '100%',
                whiteSpace: 'nowrap',
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
              Frontend Engineer building useful, accessible web products.
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
              people use them across devices. My creative writing practice keeps
              that work grounded in rhythm, clarity, and human context.
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
            alt='Iker Garcia personal mark'
            src={theme.palette.mode === 'dark' ? LogoWhite : Logo}
            sx={{
              width: { xs: 142, sm: 190, md: 320, lg: 380 },
              maxWidth: '100%',
              height: 'auto',
              display: 'block',
              filter: (theme) =>
                theme.palette.mode === 'dark'
                  ? 'drop-shadow(0 24px 50px rgba(0, 0, 0, 0.28))'
                  : 'drop-shadow(0 24px 50px rgba(0, 34, 78, 0.12))',
              opacity: { xs: 0.86, md: 1 },
            }}
          />
        </Grid>
      </Grid>
    </Grid>
  )
}
