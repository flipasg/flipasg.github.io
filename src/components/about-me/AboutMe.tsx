import { Button, Grid, Typography } from '@mui/material'
import Pdf from '@/assets/IkerGarcia_CV.pdf'

export default function AboutMe() {
  return (
    <Grid
      container
      direction='column'
      component={'section'}
      justifyContent={'center'}
      alignItems={'center'}
      sx={{
        backgroundColor: 'common.white',
      }}
      py={6}
    >
      <Grid container direction={'column'} maxWidth={'md'} mb={2}>
        <Typography variant='h2' color={'secondary'} fontSize={36} mb={2}>
          About me
        </Typography>
        <Typography variant='body1' color={'primary'}>
          I love challenges, technology and learning. I like to be part of the
          process of creating and evolving a project.
        </Typography>
        <Typography variant='body1' color={'primary'}>
          I deal with situations proactively and adapt to changes. I like to
          receive different stimuli, creative, logical or functional, and take
          advantage of and learn from them in my day to day.
        </Typography>
        <Typography variant='body1' color={'primary'}>
          I have worked as a software/product engineer creating and evolving
          projects and products in different technologies.
        </Typography>
      </Grid>
      <Button
        component='a'
        href={Pdf}
        target='_blank'
        variant='contained'
        color='primary'
      >
        Download CV
      </Button>
    </Grid>
  )
}
