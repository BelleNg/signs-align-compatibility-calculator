import React from "react";
import axios from "axios";
import StarMediaCard from "./CardPerson1.jsx"
import AnimalMediaCard from "./CardPerson2.jsx"
import "./style.css";

const zodiacSign = require("get-zodiac-sign");
import Grid from "@material-ui/core/Grid";

class Person2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animal: null,
      animalPic: null,
      date: null,
      starZodiac: null,
    };
    this.dateInput2 = React.createRef();
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
    this.setState({ date: this.dateInput2.current.value });
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
    return (
      <div>
        <p>Person2</p>
        <form onSubmit={this.handleSubmit}>
          <label className="text" htmlFor="birthday">Birthday:</label>
          <input 
            type="date"
            ref={this.dateInput2}
            id="birthday"
            name="birthday"
          ></input>
          <input type="submit" value="Submit"></input>
        </form>
        <br></br>
        <span className="text">Star zodiac:</span> {this.state.starZodiac}
        <br></br>
        <br></br>
        <span className="text">Chinese zodiac:</span> {this.state.animal}
        <br></br>
        <Grid container>
          <Grid item xs>
            <AnimalMediaCard />
          </Grid>
          <Grid item xs>
            <StarMediaCard />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Person2;
