import React from "react";
import axios from "axios";
import StarMediaCard from "./StarMediaCard.jsx";
import AnimalMediaCard from "./AnimalMediaCard.jsx";
const zodiacSign = require("get-zodiac-sign");
import styles from "./style.css";

import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";

const cardStyles = theme => ({
  card: {
    margin: 16,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  }
});

class Person1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: null,
      animal: null,
      animalPic: null,
      starZodiac: null,
    };
    this.dateInput1 = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getZodiac = this.getZodiac.bind(this);
    this.getStarZodiac = this.getStarZodiac.bind(this);
  }

  componentDidUpdate(_, prevState) {
    if (this.state.date !== prevState.date) {
      let month = this.state.date.slice(5, 7);
      let day = this.state.date.slice(8, 10);
      this.getStarZodiac(month, day);
      this.getZodiac();
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("clicked submit");
    this.setState({ date: this.dateInput1.current.value });
  }

  getStarZodiac(month, day) {
    month = parseInt(month) || null;
    day = parseInt(day) || null;
    if (day === null) {
      return;
    }
    let starSign = zodiacSign(month, day);
    this.setState({ starZodiac: starSign });
  }

  getZodiac() {
    let year = this.state.date.slice(0, 4);
    axios
      .get(`/api/zodiac/${year}`)
      .then((response) => {
        this.setState({ animal: response.data.animal || "INVALID" });
      })
      .then(() => {
        this.props.setZodiac(this.state.animal);
        this.props.setStar(this.state.starZodiac);
      })
      .catch((error) => {
        console.log(error);
        this.setState({ animal: null });
      });
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <p className={styles.header}>Participant</p>
        <Divider variant="middle" />
        <br></br>
        <form onSubmit={this.handleSubmit}>
          <label className={styles.text} htmlFor="birthday">
            Birthday:
          </label>
          <input
            type="date"
            ref={this.dateInput1}
            id="birthday"
            name="birthday"
          ></input>
          <input type="submit" value="Submit"></input>
        </form>
        <br></br>
        <span className={styles.text}>Star zodiac:</span>{" "}
        <span className={styles.text2}>{this.state.starZodiac} </span>
        <br></br>
        <br></br>
        <br></br>
        <span className={styles.text}>Chinese zodiac:</span>{" "}
        <span className={styles.text2}>{this.state.animal} </span>
        <br></br>
        <br></br>
        <Divider variant="middle" />
        <br></br>
        <Grid container>
          <Grid item xs className={classes.card}>
            <AnimalMediaCard />
          </Grid>
          <Grid item xs className={classes.card}>
            <StarMediaCard />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(cardStyles)(Person1);
