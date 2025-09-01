import { Box, Typography } from '@mui/material'
import SocialLinks from './SocialLinks'
import Grid from '@mui/material/Grid2'
import ActionButtons from './ActionButtons'

export default function Footer() {
  return (
    <Grid
      container
      direction='column'
      justifyContent='center'
      alignItems='center'
      textAlign='center'
      sx={{
        height: '200px',
        backgroundColor: 'primary.main',
        color: 'secondary.main',
        padding: { xs: 0, sm: 2 },
      }}
      width='100%'
    >
      <Grid
        container
        direction='column'
        px={4}
        width={'fit-content'}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <SocialLinks color='secondary' justifyContent='center' />
        <ActionButtons  color='secondary' justifyContent='center' />
        <Grid>
          <Box>
            <Typography variant='body1' fontSize='medium' color='secondary'>
              @flipasg
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  )
}
