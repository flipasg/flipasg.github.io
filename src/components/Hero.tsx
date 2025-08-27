import Image from '@/assets/stars.png'
import Portrait from '@/assets/skeched-portrait.jpg'
import { Avatar, Button, Typography } from '@mui/material'
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
      }}
      component={'section'}
      width={'100%'}
      p={6}
      justifyContent={'center'}
    >
      <Grid
        container
        direction={{ xs: 'column', md: 'row' }}
        alignItems={'center'}
        justifyContent={'space-between'}
        width={'100%'}
        maxWidth={'md'}
      >
        <Grid direction='column' p={{ xs: 0, md: 0 }}>
          <Grid>
            <Box>
              <Typography variant='h1' fontSize={60}>
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
              <Typography variant='body1'  fontSize={40}>
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
