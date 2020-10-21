
import React from 'react';
import { makeStyles, Link, Typography} from '@material-ui/core';
import filipe from '../img/filipe.jpg'


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: '#3d3e3a',
    justifyContent: 'space-around',
    padding: theme.spacing(14,1,3),
     color: 'white',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    },
  },
  img: {
    width: '45vw',
    margin: theme.spacing(7,0),
    [theme.breakpoints.down('sm')]: {
      width:'100%',
      margin: theme.spacing(3,0),
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
    display: 'flex',
    color: 'white',
    justifyContent:'center',
  },
  liknkKey:{
    marginRight: theme.spacing(1.5),
  },

}));

export default function Contact() {
  const classes = useStyles();

  return (
    <div id='contact' className={classes.root}>
      <div className={classes.body}>
      <Typography variant="h6">
        Personal Trainner Location:
        </Typography>
        <Typography> John Reed Fitness, Kreuzberg, Berlin</Typography>
        <Typography> Kottbusser Damm 1, 10967, Berlin</Typography>
       <img className={classes.img} src={filipe} alt='filipe' />
        <Typography variant="h6">
        Book your class Now
        </Typography>
          <div className={classes.links}>
            <Link href='tel:+49 177 169 0204' className={classes.link}>
              <Typography className={classes.liknkKey}> Phone/Whatsapp:</Typography>
              <Typography> +49 177 169 0204</Typography>
            </Link>
             <Link href='mailto:filipedesouzapersonaltrainer@gmail.com' className={classes.link}>
               <Typography className={classes.liknkKey}> E-mail: </Typography>
               <Typography> filipedesouzapersonaltrainer@gmail.com </Typography>
            </Link>
          </div>

      </div>

    </div>
  );
}
