import { Box, Typography } from '@mui/material'
import Grid from '@mui/material/Grid'
import ActionButtons from './ActionButtons'
import SocialLinks from './SocialLinks'

export default function Footer() {
  return (
    <Grid
      container
      direction='column'
      justifyContent='center'
      alignItems='center'
      textAlign='center'
      sx={{
        minHeight: 220,
        backgroundColor: 'primary.main',
        color: 'secondary.main',
        px: { xs: 2, sm: 4, md: 6, lg: 8 },
        py: { xs: 4, sm: 5 },
      }}
      width='100%'
    >
      <Grid
        container
        direction='column'
        px={{ xs: 0, sm: 4 }}
        maxWidth='xl'
        width='100%'
        alignItems={'center'}
        justifyContent={'center'}
      >
        <SocialLinks color='secondary' justifyContent='center' />
        <ActionButtons color='secondary' justifyContent='center' />
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
