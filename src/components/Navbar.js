import React from 'react';
import { makeStyles, AppBar, Toolbar, Link} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,

  },
  title: {
    color: '#5B5B5B',
    flexGrow: 1,
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color='transparent'>
        <Toolbar>
          <Link href={'#home'} className={classes.title}>
            Home
          </Link>
          <Link href={'#aboutMe'} className={classes.title}>
            About Me
          </Link>
          <Link href={'#certifications'} className={classes.title}>
            Certifications
          </Link>
          <Link href={'#contact'} className={classes.title}>
            Contact
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
