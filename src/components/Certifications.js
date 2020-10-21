
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import deadlift from '../img/deadlift.jpg'


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
    color: 'white',
    [theme.breakpoints.up('sm')]: {
     padding: theme.spacing(8,6),
    },
  },
  certificate: {
    fontWeight: 700,
  },
  certifications: {
    margin: theme.spacing(2,0)
  },
}));

export default function Certifications() {
  const classes = useStyles();

  return (
    <div id='certifications' className={classes.root}>
      <div className={classes.body}>
        <Typography variant="h6">
        Personal Trainer Education
        </Typography>
        <Typography variant="body1">
        After 12 years of training as a hobby, I decided to take the next step and make it a bigger part of my life, making it my profession.
        </Typography>
        <div className={classes.certifications}>
          <Typography variant="body1" className={classes.certificate}>
          National Personal Trainer Institute - 2014
          </Typography>
           <Typography variant="body1" className={classes.certificate}>
           National Academy of Sports Medicine - 2014
          </Typography>
           <Typography variant="body1" className={classes.certificate}>
            Crossfit Trainer - 2016
          </Typography>
        </div>
      </div>
       <img className={classes.img} src={deadlift} alt='deadlift' />
    </div>
  );
}
