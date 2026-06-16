import { Box, Stack, Typography } from '@mui/material'
import type { ReactNode } from 'react'

type SectionHeadingProps = {
  eyebrow?: string
  title: string
  description?: ReactNode
  align?: 'center' | 'left'
  tone?: 'professional' | 'editorial'
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  tone = 'professional',
}: SectionHeadingProps) {
  const isCentered = align === 'center'
  const isEditorial = tone === 'editorial'

  return (
    <Stack
      component='header'
      spacing={1.5}
      alignItems={isCentered ? 'center' : 'flex-start'}
      textAlign={align}
      sx={{ width: '100%', maxWidth: isCentered ? 920 : 760 }}
    >
      {eyebrow ? (
        <Typography
          variant='overline'
          color={isEditorial ? 'warning.main' : 'secondary.main'}
          sx={{ lineHeight: 1.4 }}
        >
          {eyebrow}
        </Typography>
      ) : null}
      <Typography
        variant='h2'
        sx={{
          color: 'primary.main',
          fontSize: { xs: 34, sm: 38, md: 42 },
        }}
      >
        {title}
      </Typography>
      <Box
        aria-hidden='true'
        sx={{
          width: { xs: 72, sm: 96 },
          height: 3,
          borderRadius: 999,
          background: (theme) =>
            isEditorial
              ? `linear-gradient(90deg, ${theme.palette.secondary.main}, ${theme.palette.warning.main})`
              : `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
        }}
      />
      {description ? (
        <Typography
          variant='body1'
          color='text.secondary'
          sx={{ maxWidth: 900 }}
        >
          {description}
        </Typography>
      ) : null}
    </Stack>
  )
}
