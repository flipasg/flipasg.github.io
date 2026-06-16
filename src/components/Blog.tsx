import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Stack,
  Typography,
} from '@mui/material'
import Grid from '@mui/material/Grid'
import { posts } from '../data/posts'
import SectionHeading from './SectionHeading'

export default function Blog() {
  return (
    <Grid
      container
      component='section'
      direction='column'
      alignItems='center'
      sx={{
        background: (theme) =>
          theme.palette.mode === 'dark'
            ? 'linear-gradient(180deg, #07111f 0%, #241b18 100%)'
            : 'linear-gradient(180deg, #f7f4ef 0%, #f1e7dc 100%)',
        px: { xs: 2, sm: 4, md: 6, lg: 8 },
        py: { xs: 5, sm: 7, md: 9 },
      }}
      gap={{ xs: 3.5, md: 5 }}
      width='100%'
    >
      <SectionHeading
        eyebrow='Creative writing'
        title='Silencio en la Sala'
        tone='editorial'
        description='A personal space where poems, haikus, micro-stories, and literary experiments are stripped down to their essence and given room to resonate.'
      />

      <Grid
        container
        spacing={3}
        justifyContent='center'
        alignItems='stretch'
        sx={{ maxWidth: 'xl', width: '100%' }}
      >
        {posts.map((post) => (
          <Grid key={post.id} size={{ xs: 12, sm: 6, lg: 3 }}>
            <Card
              elevation={0}
              sx={{
                height: '100%',
                backgroundColor: 'background.paper',
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: 1,
                boxShadow: '0 16px 36px rgba(76, 46, 31, 0.14)',
                overflow: 'hidden',
                transition:
                  'transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease',
                '&:hover': {
                  borderColor: 'warning.main',
                  boxShadow: '0 22px 52px rgba(76, 46, 31, 0.2)',
                  transform: 'translateY(-4px)',
                },
              }}
            >
              <CardActionArea
                component='a'
                href={post.href}
                target='_blank'
                rel='noreferrer'
                sx={{ p: 1.5, height: '100%' }}
              >
                <CardMedia
                  component='img'
                  image={post.image}
                  alt={post.title}
                  loading='eager'
                  sx={{
                    aspectRatio: '4 / 3',
                    borderRadius: 0.75,
                    filter: 'saturate(0.88) contrast(0.98)',
                    objectFit: 'cover',
                    width: '100%',
                  }}
                />
                <CardContent sx={{ px: 1, pb: 1, pt: 2 }}>
                  <Stack spacing={1} alignItems='center'>
                    <Chip
                      label='Read collection'
                      size='small'
                      color='warning'
                      variant='outlined'
                    />
                    <Typography
                      variant='h6'
                      component='h3'
                      sx={{ color: 'primary.main', lineHeight: 1.2 }}
                      textAlign='center'
                    >
                      {post.title}
                    </Typography>
                  </Stack>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Grid>
  )
}
