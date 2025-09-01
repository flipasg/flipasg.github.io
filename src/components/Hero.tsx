import Image from '@/assets/stars.png'
import Portrait from '@/assets/skeched-portrait.jpg'
import { Avatar, Button, Typography, Divider } from '@mui/material'
import { Box } from '@mui/system'
import Grid from '@mui/material/Grid2'
import SocialLinks from './SocialLinks'
import ActionButtons from './ActionButtons'

export default function Hero() {
  return (
    <Grid
      container
      sx={{
        height: 'auto',
        backgroundColor: 'background.paper',
        padding: { xs: 2, sm: 6 },
      }}
      component='section'
      width='100%'
      justifyContent='center'
      alignItems='center'
    >
      <Grid
        container
        alignItems='center'
        width='100%'
        maxWidth='md'
        justifyContent={'space-between'}
        sx={{ flexDirection: { xs: 'column', sm: 'row' } }}
      >
        <Grid direction='column' p={{ xs: 0, sm: 0 }}>
          <Grid>
            <Box>
              <Typography
                variant='h1'
                fontSize={60}
                sx={{ textAlign: { xs: 'center', sm: 'start' } }}
              >
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
              <Typography
                variant='body1'
                fontSize={40}
                sx={{ textAlign: { xs: 'center', sm: 'start' } }}
              >
                Frontend Engineer
              </Typography>
            </Box>
          </Grid>
          <SocialLinks />
          <ActionButtons />
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
