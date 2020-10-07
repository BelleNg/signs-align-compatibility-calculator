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

export default function StarMediaCard(props) {
  const classes = useStyles();

  const horoscope = props.horoscopeName || "Horoscope";
  const horoscopeImage = `./astrology/${horoscope}.jpg`;

  return (
    <CardContent className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Horoscopes"
          height="160"
          image={horoscopeImage}
          //image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTfVJJ710QhqKCsuemb_yivSXxqBbbfA4kOhA&usqp=CAU"
          title="Star Sign"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Astrological sign
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Etiam sit amet imperdiet orci, eget ultrices diam. Phasellus vestibulum aliquam massa. Vestibulum quis felis at lacus tincidunt sagittis. 
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