import { Button } from '@mui/material'
import Pdf from '@/assets/IkerGarcia_CV.pdf'
import Grid from '@mui/material/Grid2'

export default function ActionButtons({
  justifyContent = 'flex-start',
}: Partial<{ justifyContent: string }>) {
  return (
    <Grid
      container
      direction={'row'}
      maxWidth={'md'}
      my={2}
      gap={2}
      ml={2}
      justifyContent={justifyContent}
    >
      <Button
        component='a'
        href={Pdf}
        target='_blank'
        variant='outlined'
      >
        Download CV
      </Button>
      <Button
        component='a'
        variant='outlined'
        href='mailto:ikergarciadev@gmail.com'
        target='_blank'
        rel='noreferrer'
      >
        Email me
      </Button>
    </Grid>
  )
}
