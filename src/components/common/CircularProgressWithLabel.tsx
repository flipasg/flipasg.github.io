import * as React from 'react'
import CircularProgress, {
  CircularProgressProps,
} from '@mui/material/CircularProgress'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

export function CircularProgressWithLabel(
  props: CircularProgressProps & { value: number; title?: string },
) {
  return (
    <Box display={'flex'} justifyContent={'center'} flexDirection={'column'}>
      <Box
        sx={{ position: 'relative', display: 'inline-flex', margin: '0 auto' }}
      >
        <CircularProgress variant='determinate' {...props} />
        <Box
          sx={{
            top: 2,
            left: 0,
            bottom: 0,
            right: 0,
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography
            variant='body2'
            component='div'
            color='text.secondary'
          >{`${Math.round(props.value)}%`}</Typography>
        </Box>
      </Box>
      <Box sx={{ textAlign: 'center' }}>
        <Typography
          variant='body1'
          component='h2'
          color='primary'
          fontWeight={600}
        >
          {props.title}
        </Typography>
      </Box>
    </Box>
  )
}
