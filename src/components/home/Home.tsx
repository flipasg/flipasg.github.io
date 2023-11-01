import Image from '@/assets/stars.png'
import Portrait from '@/assets/skeched-portrait.jpg'
import { Avatar, Grid, Typography } from '@mui/material'

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
        direction='row'
        alignItems={'center'}
        justifyContent={'space-between'}
        maxWidth={'md'}
        mx={'auto'}
      >
        <Grid item direction='column'>
          <Grid item>
            <Box>
              <Typography variant='h1' color={'secondary'} fontSize={60}>
                Iker Garcia Ramirez
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
