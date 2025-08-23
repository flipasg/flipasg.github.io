import { Card, CardContent, CardActions, Typography, Button } from '@mui/material'
import Grid from '@mui/material/Grid2'

type Project = {
  title: string
  description: string
  href: string
}

const PROJECTS: Project[] = [
  {
    title: 'Personal Site',
    description: 'This very site — Vite + React + MUI themed.',
    href: 'https://flipasg.github.io/',
  },
  {
    title: 'Silencio en la sala',
    description: 'Film poster / visual design exploration.',
    href: 'https://silencioenlasala.com/',
  },
]

export default function Projects() {
  return (
    <Grid
      container
      component="section"
      direction="column"
      alignItems="center"
      sx={{ backgroundColor: 'background.paper' }}
      p={6}
      gap={3}
      width={'100%'}
    >
      <Grid>
        <Typography variant="h4" color="primary.contrastText" sx={{ bgcolor: 'primary.main', px: 2, py: 1, borderRadius: 1 }}>
          Projects
        </Typography>
      </Grid>

      <Grid container spacing={3} maxWidth={1000}>
        {PROJECTS.map((p) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={p.title}>
            <Card sx={{ height: '100%', bgcolor: 'common.white' }}>
              <CardContent>
                <Typography variant="h6" color="primary" fontWeight={700}>{p.title}</Typography>
                <Typography variant="body2" color="text.secondary">{p.description}</Typography>
              </CardContent>
              <CardActions>
                <Button size="small" variant="outlined" color="secondary" href={p.href} target="_blank" rel="noreferrer">
                  View
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Grid>
  )
}