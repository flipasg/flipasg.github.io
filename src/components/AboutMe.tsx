import { Divider, Typography } from '@mui/material'
import Grid from '@mui/material/Grid'

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
        px: { xs: 2, sm: 4 },
        py: { xs: 5, sm: 7, md: 9 },
      }}
      width='100%'
    >
      <Grid
        container
        direction='column'
        maxWidth='md'
        width='100%'
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
        <Grid container direction='column' gap={2}>
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
            I have more than 10 years of experience building scalable web
            applications, GIS platforms, and AI-powered products for public and
            private organizations.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}
