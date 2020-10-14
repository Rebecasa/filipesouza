
import React from 'react';
import { makeStyles, Link, Typography} from '@material-ui/core';
import filipe from '../img/filipe.jpg'


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: '#3d3e3a',
    justifyContent: 'space-around',
    padding: theme.spacing(3,1),
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    },
  },
  img: {
    width: '45vw',
    [theme.breakpoints.down('sm')]: {
      width:'100%',
      marginTop: theme.spacing(1),
    },
  },
  body:{
    color: 'white'
  },
  links:{
    display: 'flex',
    flexDirection: 'column',
  },

  link: {
    color: 'white',
  },

}));

export default function Contact() {
  const classes = useStyles();

  return (
    <div id='contact' className={classes.root}>
      <div className={classes.body}>
       <img className={classes.img} src={filipe} alt='filipe' />
        <Typography variant="h6">
        Book your class Now
        </Typography>
          <div className={classes.links}>
            <Link href='tel:+49 177 169 0204' className={classes.link}>
              Phone/Whatsapp: +49 177 169 0204
            </Link>
             <Link href='mailto:filipedesouzapersonaltrainer@gmail.com' className={classes.link}>
               E-mail: filipedesouzapersonaltrainer@gmail.com
            </Link>
          </div>

      </div>

    </div>
  );
}
