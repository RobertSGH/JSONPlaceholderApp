import { AppBar, Link, Stack, Toolbar, Typography } from '@mui/material';

const Header = () => {
  return (
    <AppBar position='static' sx={{ backgroundColor: '#4550ed' }}>
      <Toolbar
        sx={{
          '.MuiLink-root': {
            color: 'white',
            '&:hover': {
              color: '#ccc',
            },
          },
        }}
      >
        <Stack
          direction='row'
          spacing={4}
          justifyContent='center'
          sx={{ width: '100%' }}
        >
          <Link href='/' underline='none'>
            <Typography variant='h6'>Posts</Typography>
          </Link>
          <Link href='/users' underline='none'>
            <Typography variant='h6'>Users</Typography>
          </Link>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
