import { Box, Typography } from '@mui/material';
import SocialLinks from './SocialLinks';
import Grid from '@mui/material/Grid2';

export default function Footer() {
  return (
    <Grid
      container
      direction='column'
      justifyContent='center'
      alignItems='center'
      textAlign='center'
      sx={{
        height: '200px',
        backgroundColor: 'primary.main',
        color: 'secondary.main',
        backgroundSize: '150px',
        padding: { xs: 0, sm: 2 }, // Adjust padding for mobile
      }}
      width='100%'
    >
      <Box px={4}>
        <SocialLinks justifyButtons='center' color='secondary' />
        <Grid>
          <Box pl={2}>
            <Typography variant='body1' fontSize='medium' color='secondary'>
              @flipasg
            </Typography>
          </Box>
        </Grid>
      </Box>
    </Grid>
  );
}
