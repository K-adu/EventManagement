import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { useSelector } from 'react-redux';

import NavBarMethods from './NavBarMethods';
import NavBarUserDetails from './NavBarUserDetails';

export default function NavBar() {
  const userData = useSelector((state) => state.loggedIn);
  const isLoggedIn = userData.loggedIn;

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Evento
          </Typography>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Evento
          </Typography>

          {isLoggedIn ? <NavBarMethods /> : <></>}
          {isLoggedIn ? <NavBarUserDetails /> : <></>}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
