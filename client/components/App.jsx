import React from "react";
import CoupleView from "./CoupleView.jsx";
import Person1 from "./Person1.jsx";
import Person2 from "./Person2.jsx";

import DenseAppBar from "./AppBar.jsx";

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const style = {
  Paper: {padding: 20, marginTop: 10, marginBottom: 10 }
}

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
        < DenseAppBar />




      <Grid Container>
        <Grid item sm>
          <Paper style={style.Paper}>
        <Person1
          setZodiac={this.setPerson1Zodiac}
          setStar={this.setPerson1Star}
        />
          </Paper>
        </Grid>
      </Grid>

        <h1>Hello World</h1>
        <Person2
          setZodiac={this.setPerson2Zodiac}
          setStar={this.setPerson2Star}
        />
        <CoupleView zodiacCouple={coupleAnimal} starCouple={coupleStar} />
      </div>
    );
  }
}
export default App;
