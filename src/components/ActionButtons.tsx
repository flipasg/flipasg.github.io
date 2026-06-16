import Pdf from '@/assets/IkerGarcia_CV.pdf'
import DownloadIcon from '@mui/icons-material/Download'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import { Button } from '@mui/material'
import type { ButtonProps } from '@mui/material'
import Grid from '@mui/material/Grid'

export default function ActionButtons({
  justifyContent = 'flex-start',
  color = 'primary',
}: Partial<{ justifyContent: string; color: ButtonProps['color'] }>) {
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
        rel='noreferrer'
        target='_blank'
        variant='contained'
        startIcon={<DownloadIcon />}
        sx={{
          boxShadow: '0 12px 30px rgba(0, 34, 78, 0.18)',
          width: { xs: '100%', sm: 'auto' },
        }}
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
        startIcon={<MailOutlineIcon />}
        sx={{ width: { xs: '100%', sm: 'auto' } }}
      >
        Email me
      </Button>
    </Grid>
  )
}
