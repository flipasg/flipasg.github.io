import BookIcon from '@mui/icons-material/Book'
import GitHubIcon from '@mui/icons-material/GitHub'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import PinterestIcon from '@mui/icons-material/Pinterest'
import TwitterIcon from '@mui/icons-material/Twitter'
import { IconButton, Stack, SvgIcon, Tooltip } from '@mui/material'
import type { IconButtonProps } from '@mui/material'

const SOCIAL_LINKS = [
  {
    key: 'linkedin',
    label: 'LinkedIn profile',
    href: 'https://linkedin.com/in/iker-garcia',
    icon: LinkedInIcon,
  },
  {
    key: 'blog',
    label: 'Silencio en la Sala blog',
    href: 'https://silencioenlasala.com',
    icon: BookIcon,
  },
  {
    key: 'twitter',
    label: 'Twitter profile',
    href: 'https://twitter.com/flipasg',
    icon: TwitterIcon,
  },
  {
    key: 'github',
    label: 'GitHub profile',
    href: 'https://github.com/flipasg',
    icon: GitHubIcon,
  },
  {
    key: 'instagram',
    label: 'Instagram profile',
    href: 'https://instagram.com/flipasg',
    icon: InstagramIcon,
  },
  {
    key: 'pinterest',
    label: 'Pinterest profile',
    href: 'https://pinterest.com/flipasgarcia',
    icon: PinterestIcon,
  },
]

export default function SocialLinks({
  color = 'primary',
  justifyContent = 'flex-start',
}: Partial<{ color: IconButtonProps['color']; justifyContent: string }>) {
  return (
    <Stack
      component='nav'
      aria-label='Social links'
      direction='row'
      useFlexGap
      flexWrap='wrap'
      gap={0.5}
      sx={{
        width: { xs: '100%', sm: 'fit-content' },
        justifyContent: { xs: 'center', sm: justifyContent },
        alignItems: 'center',
      }}
    >
      {SOCIAL_LINKS.map(({ key, label, href, icon }) => (
        <Tooltip key={key} title={label} arrow>
          <IconButton
            component='a'
            aria-label={label}
            target='_blank'
            rel='noreferrer'
            href={href}
            color={color}
            sx={{
              border: '1px solid',
              borderColor:
                color === 'secondary' ? 'secondary.main' : 'primary.main',
              height: 44,
              transition:
                'transform 180ms ease, background-color 180ms ease, border-color 180ms ease',
              width: 44,
              '&:hover': {
                bgcolor:
                  color === 'secondary'
                    ? 'rgba(198, 217, 255, 0.12)'
                    : 'rgba(85, 119, 104, 0.12)',
                transform: 'translateY(-2px)',
              },
              '&.Mui-focusVisible': {
                outline: '3px solid',
                outlineColor: 'warning.main',
                outlineOffset: 3,
              },
            }}
          >
            <SvgIcon component={icon} fontSize='small' />
          </IconButton>
        </Tooltip>
      ))}
    </Stack>
  )
}
