
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import squats from '../img/squats.jpg'


const useStyles = makeStyles((theme) => ({

}));

export default function AboutMe() {
  const classes = useStyles();

  return (
    <div id='aboutMe' className={classes.root}>
      <img src={squats} />
      <Typography>
      When I was 13 years old, I injured my knee.
      My doctor advised me to start weight lifting for healing and protecting my injured bone.
      Since then I have acquired a love for training.
      Beginning in the gym with Bodybuilding style of training, I became more confident in my body by losing body fat (let's say I was overweight, to not say fat) and gaining lean mass.)
        </Typography>
    </div>
  );
}
