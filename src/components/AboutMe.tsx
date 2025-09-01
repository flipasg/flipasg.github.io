import { Button, Typography, Divider } from '@mui/material'
import Pdf from '@/assets/IkerGarcia_CV.pdf'
import Grid from '@mui/material/Grid2'

export default function AboutMe() {
  return (
    <Grid
      container
      direction='column'
      component='section'
      justifyContent='center'
      alignItems='center'
      sx={{
        backgroundColor: 'common.white',
        px: { xs: 0 },
        py: { xs: 4, sm: 6 }
      }}
      mt={6}
      width='100%'
    >
      <Grid
        container
        direction='column'
        maxWidth='md'
        mb={2}
        alignItems='center'
      >
        <Typography variant='h2' fontSize={36} mb={2} textAlign='center'>
          About me
        </Typography>
        <Divider
          sx={{
            width: '100%',
            maxWidth: 'md',
            mx: 'auto',
            height: 2,
            bgcolor: 'primary.main',
            borderRadius: 1,
            mb: 3,
          }}
        />
        <Grid container px={{ xs: 2, md: 0 }}>
          <Typography variant='body1' color='primary'>
            I love challenges, technology and learning. I like to be part of the
            process of creating and evolving a project.
          </Typography>
          <Typography variant='body1' color='primary'>
            I deal with situations proactively and adapt to changes. I like to
            receive different stimuli, creative, logical or functional, and take
            advantage of and learn from them in my day to day.
          </Typography>
          <Typography variant='body1' color='primary'>
            I have worked as a software/product engineer creating and evolving
            projects and products in different technologies.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}
