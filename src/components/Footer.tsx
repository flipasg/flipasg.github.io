import { Box, Typography } from '@mui/material'
import SocialLinks from './SocialLinks'
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
        height: '200px',
        backgroundColor: 'background.paper',
        backgroundSize: '150px',
      }}
      width={'100%'}
    >
      <Box px={4}>
        <SocialLinks justifyButtons='center' />
        <Grid>
          <Box pl={2}>
            <Typography variant='body1'  fontSize={'medium'}>
              @flipasg
            </Typography>
          </Box>
        </Grid>
      </Box>
    </Grid>
  )
}
