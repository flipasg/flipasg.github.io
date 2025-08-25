import { Box, Typography } from '@mui/material'

export default function Spotify() {
  return (
    <Box
      component='section'
      sx={{
        py: { xs: 4, sm: 6 },
        px: { xs: 2, sm: 4 },
        borderRadius: 2,
        width: '100%',
        textAlign: 'center',
      }}
    >
      <Typography variant='h4' color='secondary' sx={{ mb: 1 }}>
        My Current Mood
      </Typography>
      <Box
        sx={{
          width: '100%',
          maxWidth: 'md',
          mx: 'auto',
          height: 2,
          bgcolor: 'secondary.main',
          borderRadius: 1,
          mb: 3,
        }}
      />

      <iframe
        data-testid='embed-iframe'
        style={{ borderRadius: '12px' }}
        src='https://open.spotify.com/embed/playlist/3tHeZgkSaMptwKobLEkhDw?utm_source=generator&theme=0'
        width='100%'
        height='500'
        frameBorder='0'
        allowFullScreen
        allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
        loading='lazy'
      ></iframe>
    </Box>
  )
}
