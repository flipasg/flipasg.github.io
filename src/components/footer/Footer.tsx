import { Box, Typography } from '@mui/material'
import SocialLinks from '../social-links/SocialLinks'
import Grid from '@mui/material/Grid2'
export default function Footer() {
  return (
    <Grid
      container
      direction='column'
      justifyContent={'center'}
      alignItems={'center'}
      textAlign={'center'}
      sx={{
        height: '100px',
        backgroundColor: 'primary.main',
        backgroundSize: '150px',
      }}
      width={'100%'}
    >
      <Box px={4}>
        <Grid>
          <Box pl={2}>
            <Typography variant='body1' color={'secondary'} fontSize={'medium'}>
              @flipasg
            </Typography>
          </Box>
        </Grid>
        <SocialLinks />
      </Box>
    </Grid>
  )
}
