import Image from '@/assets/home.svg'
import { Grid, Typography } from '@mui/material'

import { Box } from '@mui/system'
import SocialLinks from '../social-links/SocialLinks'

export default function Home() {
  return (
    <Grid
      container
      direction='column'
      justifyContent={'center'}
      style={{
        height: '450px',
        background: `url(${Image}) no-repeat`,
        backgroundSize: 'cover',
      }}
      component={'section'}
    >
      <Box px={4}>
        <Grid item>
          <Box pl={2}>
            <Typography variant='h1' color={'secondary'} fontSize={60}>
              Iker Garcia Ramirez
            </Typography>
            <Typography variant='body1' color={'gray'} fontSize={40}>
              Frontend Engineer
            </Typography>
          </Box>
        </Grid>
        <SocialLinks />
      </Box>
    </Grid>
  )
}
