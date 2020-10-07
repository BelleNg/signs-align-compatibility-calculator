import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});



export default function AnimalMediaCard(props) {
  const classes = useStyles();

  const animal = props.animalName || "zodiac";
  const animalImage = `./animals/${animal}.jpg`;
  
  return (
    <CardContent className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="zodiac"
          height="160"
          image={animalImage}
          title="Zodiac"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Chinese Zodiac
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur consequat sed libero vitae lacinia.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </CardContent>
  );
}