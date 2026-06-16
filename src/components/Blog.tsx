import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material'
import Grid from '@mui/material/Grid'
import { posts } from '../data/posts'

export default function Blog() {
  return (
    <Grid
      container
      component='section'
      direction='column'
      alignItems='center'
      sx={{
        backgroundColor: 'background.default',
        px: { xs: 2, sm: 4, md: 6, lg: 8 },
        py: { xs: 5, sm: 7, md: 9 },
      }}
      gap={3}
      width='100%'
    >
      <Typography variant='h2' fontSize={36} textAlign='center'>
        Silencio en la Sala
      </Typography>
      <Box
        sx={{
          width: '100%',
          maxWidth: 'xl',
          mx: 'auto',
          height: 2,
          bgcolor: 'primary.main',
          borderRadius: 1,
          mb: 3,
        }}
      />

      <Grid container direction='column' maxWidth='lg'>
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
        alignItems='stretch'
        sx={{ maxWidth: 'xl', width: '100%' }}
      >
        {posts.map((post) => (
          <Grid key={post.id} size={{ xs: 12, sm: 6, lg: 3 }}>
            <Card
              elevation={3}
              sx={{
                height: '100%',
                backgroundColor: 'common.white',
              }}
            >
              <CardActionArea
                component='a'
                href={post.href}
                target='_blank'
                sx={{ p: 2, height: '100%' }}
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
          </Grid>
        ))}
      </Grid>
    </Grid>
  )
}
