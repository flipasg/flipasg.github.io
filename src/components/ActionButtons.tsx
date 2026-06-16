import Pdf from '@/assets/IkerGarcia_CV.pdf'
import { Button } from '@mui/material'
import Grid from '@mui/material/Grid'

export default function ActionButtons({
  justifyContent = 'flex-start',
  color = 'primary',
}: Partial<{ justifyContent: string; color: 'primary' | 'secondary' }>) {
  return (
    <Grid
      container
      direction={{ xs: 'column', sm: 'row' }}
      width={{ xs: '100%', sm: 'fit-content' }}
      my={2}
      gap={2}
      justifyContent={{ xs: 'center', sm: justifyContent }}
    >
      <Button
        component='a'
        color={color}
        href={Pdf}
        target='_blank'
        variant='outlined'
        sx={{ minHeight: 44 }}
      >
        Download CV
      </Button>
      <Button
        component='a'
        color={color}
        variant='outlined'
        href='mailto:ikergarciadev@gmail.com'
        target='_blank'
        rel='noreferrer'
        sx={{ minHeight: 44 }}
      >
        Email me
      </Button>
    </Grid>
  )
}
