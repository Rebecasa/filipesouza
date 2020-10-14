
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import squats from '../img/squats.jpg'


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: '#3d3e3a',
    padding: theme.spacing(3,1),
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse'
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

}));

export default function AboutMe() {
  const classes = useStyles();

  return (
    <div id='aboutMe' className={classes.root}>
      <img className={classes.img} src={squats} alt='squats' />
      <div className={classes.body}>
        <Typography variant="h6">
        About Me
        </Typography>
        <Typography variant="body1" >
          {"When I was 13 years old, I injured my knee. My doctor advised me to start weight lifting for healing and protecting my injured bone. Since then I have acquired a love for training. Beginning in the gym with Bodybuilding style of training, I became more confident in my body by losing body fat (let's say I was overweight, to not say fat) and gaining lean mass."}
        </Typography>
      </div>
    </div>
  );
}
