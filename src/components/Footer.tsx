import { Box, Stack, Typography } from '@mui/material'
import Grid from '@mui/material/Grid'
import ActionButtons from './ActionButtons'
import SocialLinks from './SocialLinks'

export default function Footer() {
  return (
    <Grid
      container
      direction='column'
      justifyContent='center'
      alignItems='center'
      textAlign='center'
      sx={{
        background: (theme) =>
          theme.palette.mode === 'dark'
            ? 'linear-gradient(180deg, #07111f 0%, #020812 100%)'
            : 'linear-gradient(180deg, #00224e 0%, #001936 100%)',
        color: '#dce8ff',
        minHeight: 280,
        px: { xs: 2, sm: 4, md: 6, lg: 8 },
        py: { xs: 5, sm: 6 },
      }}
      width='100%'
    >
      <Grid
        container
        direction='column'
        px={{ xs: 0, sm: 4 }}
        maxWidth='xl'
        width='100%'
        alignItems={'center'}
        justifyContent={'center'}
        gap={2}
      >
        <Stack spacing={1} alignItems='center'>
          <Typography
            variant='overline'
            sx={{ color: '#9db8aa', lineHeight: 1.4 }}
          >
            Frontend · AI · Writing
          </Typography>
          <Typography
            variant='h2'
            sx={{ color: '#dce8ff', fontSize: { xs: 30, sm: 36 } }}
          >
            Let’s build something clear.
          </Typography>
        </Stack>
        <SocialLinks color='secondary' justifyContent='center' />
        <ActionButtons color='secondary' justifyContent='center' />
        <Box>
          <Typography
            variant='body1'
            fontSize='medium'
            sx={{ color: '#dce8ff' }}
          >
            @flipasg
          </Typography>
        </Box>
      </Grid>
    </Grid>
  )
}
