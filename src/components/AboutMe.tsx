import { Box, Stack, Typography } from '@mui/material'
import Grid from '@mui/material/Grid'
import SectionHeading from './SectionHeading'

const WORKING_PRINCIPLES = [
  {
    title: 'Communicative',
    body: 'Clear, collaborative communication across product, design, backend, and client teams.',
  },
  {
    title: 'Creative',
    body: 'Comfortable prototyping, experimenting, and turning feedback into practical improvements.',
  },
  {
    title: 'Team spirit',
    body: 'Adaptive, collaborative, and focused on consistent impact in cross-functional teams.',
  },
]

export default function AboutMe() {
  return (
    <Grid
      container
      direction='column'
      component='section'
      justifyContent='center'
      alignItems='center'
      sx={{
        backgroundColor: 'background.paper',
        px: { xs: 2, sm: 4, md: 6, lg: 8 },
        py: { xs: 5, sm: 7, md: 9 },
      }}
      width='100%'
    >
      <Grid
        container
        maxWidth='xl'
        width='100%'
        spacing={3}
        alignItems='flex-start'
      >
        <Grid size={12}>
          <SectionHeading
            align='left'
            eyebrow='About'
            title='About me'
            description='Frontend Engineer with 10+ years of experience in scalable web apps, GIS platforms, and AI-powered products.'
          />
        </Grid>

        <Grid size={12}>
          <Grid container spacing={{ xs: 4, md: 7 }} alignItems='flex-start'>
            <Grid size={{ xs: 12, md: 7 }}>
              <Stack spacing={2}>
                <Typography variant='body1' color='text.primary'>
                  I design and build responsive frontend architectures for
                  complex products, with a strong focus on performance,
                  accessibility, and clear user experience across devices.
                </Typography>
                <Typography variant='body1' color='text.primary'>
                  My work spans GIS platforms, AI-driven tools, conversational
                  interfaces, and enterprise applications for public and private
                  clients.
                </Typography>
                <Typography variant='body1' color='text.primary'>
                  I have more than 10 years of experience collaborating in
                  cross-functional teams, mentoring developers, leading
                  prototypes, and turning product ideas into reliable, scalable
                  web applications.
                </Typography>
              </Stack>
            </Grid>

            <Grid size={{ xs: 12, md: 5 }}>
              <Box
                component='aside'
                aria-label='Working principles'
                sx={{
                  borderLeft: { xs: 0, md: '3px solid' },
                  borderTop: { xs: '3px solid', md: 0 },
                  borderColor: 'secondary.main',
                  pl: { xs: 0, md: 3 },
                  pt: { xs: 3, md: 0 },
                }}
              >
                <Stack spacing={2.5}>
                  {WORKING_PRINCIPLES.map((principle) => (
                    <Box key={principle.title}>
                      <Typography
                        variant='overline'
                        color='secondary.main'
                        sx={{ lineHeight: 1.4 }}
                      >
                        {principle.title}
                      </Typography>
                      <Typography variant='body1' color='text.secondary'>
                        {principle.body}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
