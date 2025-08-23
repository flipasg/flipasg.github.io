import BookIcon from '@mui/icons-material/Book'
import FacebookIcon from '@mui/icons-material/Facebook'
import GitHubIcon from '@mui/icons-material/GitHub'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import PinterestIcon from '@mui/icons-material/Pinterest'
import TwitterIcon from '@mui/icons-material/Twitter'
import {
  List,
  ListItem,
  ListItemIcon,
  Stack,
  SvgIcon,
} from '@mui/material'
import Grid from '@mui/material/Grid2'
import ActionButtons from './ActionButtons'

const SOCIAL_LINKS = [
  {
    key: 'linkedin',
    href: 'https://linkedin.com/in/iker-garcia',
    icon: LinkedInIcon,
  },
  {
    key: 'blog',
    href: 'https://silencioenlasala.com',
    icon: BookIcon,
  },
  {
    key: 'twitter',
    href: 'https://twitter.com/flipasg',
    icon: TwitterIcon,
  },
  {
    key: 'github',
    href: 'https://github.com/flipasg',
    icon: GitHubIcon,
  },
  {
    key: 'instagram',
    href: 'https://instagram.com/flipasg',
    icon: InstagramIcon,
  },
  {
    key: 'pinterest',
    href: 'https://pinterest.com/flipasgarcia',
    icon: PinterestIcon,
  },
  {
    key: 'facebook',
    href: 'https://facebook.com/ik3003',
    icon: FacebookIcon,
  },
]
export default function SocialLinks({
  color = 'secondary',
  ml = 0,
  justifyButtons = 'flex-start',
}: Partial<{ color: any; ml: number; justifyButtons: string }>) {
  return (
    <Grid ml={ml}>
      <List component={Stack} direction='row' sx={{ width: 'fit-content' }}>
        {SOCIAL_LINKS.map(({ key, href, icon }) => (
          <ListItem key={key} component='a' target='_blank' href={href}>
            <ListItemIcon sx={{ minWidth: 'auto' }}>
              <SvgIcon component={icon} color={color} />
            </ListItemIcon>
          </ListItem>
        ))}
      </List>
      <ActionButtons justifyContent={justifyButtons} />
    </Grid>
  )
}
