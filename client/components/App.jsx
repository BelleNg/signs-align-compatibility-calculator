import React from "react";
import CoupleView from "./CoupleView.jsx";
import Person from "./Person.jsx";



import DenseAppBar from "./AppBar.jsx";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";

const style = {
  Paper: { padding: 15, marginTop: 5, marginBottom: 10 },
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person1zodiac: null,
      person2zodiac: null,
      person1Star: null,
      person2Star: null,
    };

    this.setPerson1Zodiac = this.setPerson1Zodiac.bind(this);
    this.setPerson2Zodiac = this.setPerson2Zodiac.bind(this);
    this.setPerson1Star = this.setPerson1Star.bind(this);
    this.setPerson2Star = this.setPerson2Star.bind(this);
  }

  setPerson1Zodiac(zodiac) {
    this.setState({ person1zodiac: zodiac });
  }

  setPerson2Zodiac(zodiac) {
    this.setState({ person2zodiac: zodiac });
  }

  setPerson1Star(starSign) {
    this.setState({ person1Star: starSign });
  }

  setPerson2Star(starSign) {
    this.setState({ person2Star: starSign });
  }

  render() {
    let coupleAnimal = this.state.person1zodiac + this.state.person2zodiac;
    let coupleStar = this.state.person1Star + this.state.person2Star;
    return (
      <div>
        <DenseAppBar />

        <Grid container>
          <Grid item xs>
            <Paper style={style.Paper}>
              <Person
                setZodiac={this.setPerson1Zodiac}
                setStar={this.setPerson1Star}
              />
            </Paper>
          </Grid>
          <Grid item xs>
            <Paper style={style.Paper}>
              <Person
                setZodiac={this.setPerson2Zodiac}
                setStar={this.setPerson2Star}
              />
            </Paper>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs>
            <Paper style={style.Paper}>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <CoupleView
                  zodiacCouple={coupleAnimal}
                  starCouple={coupleStar}
                />
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default App;
