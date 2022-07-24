import Image from '@/assets/home.svg'
import BookIcon from '@mui/icons-material/Book'
import FacebookIcon from '@mui/icons-material/Facebook'
import GitHubIcon from '@mui/icons-material/GitHub'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import PinterestIcon from '@mui/icons-material/Pinterest'
import TwitterIcon from '@mui/icons-material/Twitter'
import {
  Grid,
  List,
  ListItem,
  ListItemIcon,
  Stack,
  Typography,
} from '@mui/material'

import { Box } from '@mui/system'

export default function Home() {
  return (
    <Grid
      container
      direction='column'
      justifyContent={'center'}
      style={{
        height: '100vh',
        background: `url(${Image}) no-repeat`,
        backgroundSize: 'contain',
      }}
    >
      <Box px={4}>
        <Grid item>
          <Box pl={2}>
            <Typography variant='h1' color={'secondary'} fontSize={60}>
              Iker Garcia Ramirez
            </Typography>
            <Typography variant='h2' color={'gray'} fontSize={40}>
              Frontend Engineer
            </Typography>
          </Box>
        </Grid>
        <Grid item width={120}>
          <List
            component={Stack}
            direction='row'
            justifyContent={'space-between'}
          >
            <ListItem
              component='a'
              target='_blank'
              href='https://linkedin.com/in/iker-garcia'
            >
              <ListItemIcon>
                <LinkedInIcon color='secondary' />
              </ListItemIcon>
            </ListItem>
            <ListItem
              component='a'
              target='_blank'
              href='https://silencioenlasala.com'
            >
              <ListItemIcon>
                <BookIcon color='secondary' />
              </ListItemIcon>
            </ListItem>
            <ListItem
              component='a'
              target='_blank'
              href='https://twitter.com/flipasg'
            >
              <ListItemIcon>
                <TwitterIcon color='secondary' />
              </ListItemIcon>
            </ListItem>
            <ListItem
              component='a'
              target='_blank'
              href='https://github.com/flipasg'
            >
              <ListItemIcon>
                <GitHubIcon color='secondary' />
              </ListItemIcon>
            </ListItem>
            <ListItem
              component='a'
              target='_blank'
              href='https://instagram.com/flipasg'
            >
              <ListItemIcon>
                <InstagramIcon color='secondary' />
              </ListItemIcon>
            </ListItem>
            <ListItem
              component='a'
              target='_blank'
              href='https://pinterest.com/flipasgarcia'
            >
              <ListItemIcon>
                <PinterestIcon color='secondary' />
              </ListItemIcon>
            </ListItem>
            <ListItem
              component='a'
              target='_blank'
              href='https://facebook.com/ik3003'
            >
              <ListItemIcon>
                <FacebookIcon color='secondary' />
              </ListItemIcon>
            </ListItem>
          </List>
        </Grid>
      </Box>
    </Grid>
  )
}
