import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import banner from './img/banner.jpg'

const useStyles = makeStyles((theme) => ({
  root: {

   display:'flex',
   flexDirection: 'column',
   color: 'white',
   backgroundImage: `url(${banner})`,
   padding: 150,
   backgroundSize: 'cover',
   textShadow:' 1px 1px 5px black',
   [theme.breakpoints.down('xs')]: {
      backgroundPosition: 'bottom',
      padding: 0,
      minHeight: 350,
    },
    [theme.breakpoints.up('lg')]: {
      padding: 300,
    },
  },
  title: {
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h3" className={classes.title}>
       Filipe de Souza
      </Typography>
      <Typography variant="h6" className={classes.title}>
        Personal Trainer
      </Typography>
    </div>
  );
}
