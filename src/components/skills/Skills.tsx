import { Button, Grid, Typography } from '@mui/material'
import Pdf from '@/assets/IkerGarcia_CV.pdf'
import { CircularProgressWithLabel } from '../common/CircularProgressWithLabel'

export default function Skills() {
  return (
    <Grid
      container
      direction='column'
      component={'section'}
      justifyContent={'center'}
      alignItems={'center'}
      sx={{
        backgroundColor: '#e8e8e8',
      }}
      p={6}
    >
      <Grid container direction={'column'} maxWidth={'md'} mb={2}>
        <Typography variant='h2' color={'secondary'} fontSize={36} mb={2}>
          Skills
        </Typography>
        <Grid
          container
          direction='row'
          justifyContent={'space-between'}
          alignItems={'center'}
          gap={2}
        >
          <CircularProgressWithLabel
            thickness={5}
            size='60px'
            value={100}
            title='JavaScript'
          />
          <CircularProgressWithLabel
            thickness={5}
            size='60px'
            value={95}
            title='React'
          />
          <CircularProgressWithLabel
            thickness={5}
            size='60px'
            value={85}
            title='Vue'
          />
          <CircularProgressWithLabel
            thickness={5}
            size='60px'
            value={85}
            title='Angular'
          />
          <CircularProgressWithLabel
            thickness={5}
            size='60px'
            value={90}
            title='Git'
          />
          <CircularProgressWithLabel
            thickness={5}
            size='60px'
            value={50}
            title='UX'
          />
        </Grid>
      </Grid>
    </Grid>
  )
}
