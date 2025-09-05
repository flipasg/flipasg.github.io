import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from '@mui/material'
import { posts } from '../data/posts'
import Grid from '@mui/material/Grid2'

export default function Blog() {
  return (
    <Grid
      container
      component='section'
      direction='column'
      alignItems='center'
      sx={{ backgroundColor: 'background.main', py: { xs: 4, sm: 6 } }}
      gap={3}
      width='100%'
    >
      <Typography variant='h4' sx={{ px: 2 }}>
        Silencio en la Sala
      </Typography>
      <Box
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

      <Grid container direction='column' maxWidth='md' px={{ xs: 2, md: 0 }}>
        <Typography variant='body1' color='primary'>
          A personal space where I publish poems, haikus, micro-stories, and
          literary experiments. It’s a creative playground where words are
          stripped down to their essence and given room to resonate. A living
          collection of writing, always growing and shifting.
        </Typography>
      </Grid>
      <Grid
        container
        spacing={3}
        justifyContent='center'
        alignItems='center'
        sx={{ px: 2, maxWidth: 'xl', width: '100%' }}
      >
        {posts.map((post) => (
          <Card
            elevation={3}
            sx={{ height: '275px', backgroundColor: 'common.white' }}
          >
            <CardActionArea
              component='a'
              href={post.href}
              target='_blank'
              sx={{ p: 2 }}
            >
              <CardMedia
                component='img'
                height='200'
                image={post.image}
                alt={post.title}
                loading='lazy'
                sx={{ objectFit: 'cover' }}
              />
              <CardContent>
                <Typography
                  variant='h6'
                  component='h3'
                  sx={{ lineHeight: 1.2, textAlign: 'center' }}
                  color='#828ca4'
                >
                  {post.title}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Grid>
    </Grid>
  )
}
