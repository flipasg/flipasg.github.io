import Image from '@/assets/stars.png'
import Portrait from '@/assets/skeched-portrait.jpg'
import { Avatar, Grid, Hidden, Typography } from '@mui/material'

import { Box } from '@mui/system'
import SocialLinks from '../social-links/SocialLinks'

export default function Home() {
  return (
    <Grid
      container
      sx={{
        height: '450px',
        backgroundImage: `url(${Image})`,
        backgroundSize: '500px',
        backgroundColor: 'primary.main',
      }}
      component={'section'}
    >
      <Grid
        container
        direction={{ xs: 'column', md: 'row' }}
        alignItems={'center'}
        justifyContent={'space-between'}
        maxWidth={'md'}
        mx={'auto'}
      >
        <Grid item direction='column' p={{ xs: 9, md: 0 }}>
          <Grid item>
            <Box>
              <Typography variant='h1' color={'secondary'} fontSize={60}>
                Iker Garcia{' '}
                <Typography
                  variant='h1'
                  color={'secondary'}
                  fontSize={60}
                  component='span'
                  sx={{ display: { xs: 'none', sm: 'inline-block' } }}
                >
                  Ramirez
                </Typography>
              </Typography>
              <Typography variant='body1' color={'textSecondary'} fontSize={40}>
                Frontend Engineer
              </Typography>
            </Box>
          </Grid>
          <SocialLinks ml={-1.5} />
        </Grid>
        <Grid item>
          <Avatar
            alt='Cindy Baker'
            src={Portrait}
            sx={{ width: 200, height: 200 }}
          />
        </Grid>
      </Grid>
    </Grid>
  )
}
