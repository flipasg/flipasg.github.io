import Image from '@/assets/stars.png'
import Portrait from '@/assets/skeched-portrait.jpg'
import { Avatar, Button, Typography, Divider } from '@mui/material'
import { Box } from '@mui/system'
import Grid from '@mui/material/Grid2'
import SocialLinks from './SocialLinks'

export default function Hero() {
  return (
    <Grid
      container
      sx={{
        height: 'auto',
        backgroundColor: 'background.paper',
        padding: { xs: 2, sm: 6 }, // Adjust padding for mobile
      }}
      component='section'
      width='100%'
      justifyContent='center'
      alignItems='center'
    >
      <Grid
        container
        direction={{ xs: 'column', md: 'row' }}
        alignItems='center'
        width='100%'
        maxWidth='md'
      >
        <Grid direction='column' p={{ xs: 0, md: 0 }}>
          <Grid>
            <Box>
              <Typography variant='h1' fontSize={60} >
                Iker Garcia{' '}
                <Typography
                  variant='h1'
                  fontSize={60}
                  component='span'
                  sx={{ display: { xs: 'none', sm: 'inline-block' } }}
                >
                  Ramirez
                </Typography>
              </Typography>
              <Typography variant='body1' fontSize={40} >
                Frontend Engineer
              </Typography>
            </Box>
          </Grid>
          <SocialLinks ml={-1.5} />
        </Grid>
        <Grid sx={{ display: { xs: 'none', md: 'block' } }}>
          <Avatar
            alt='Iker Garcia'
            src={Portrait}
            sx={{ width: 200, height: 200 }}
          />
        </Grid>
      </Grid>
    </Grid>
  )
}
