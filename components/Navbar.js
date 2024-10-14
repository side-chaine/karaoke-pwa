import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import Link from 'next/link';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          4ePoeM
        </Typography>
        <Link href="/" passHref>
          <Button color="inherit">Главная</Button>
        </Link>
        <Link href="/queue" passHref>
          <Button color="inherit">Очередь</Button>
        </Link>
        <Link href="/profile" passHref>
          <Button color="inherit">Профиль</Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
