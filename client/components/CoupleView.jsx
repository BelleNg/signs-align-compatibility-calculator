import React from "react";
import axios from "axios";
import styles from "./style.css";

import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

class CoupleView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coupleAnimal: null,
      zodiacScore: null,
      starCouple: null,
      starScore: null,
    };
    this.clickHandler = this.clickHandler.bind(this);
    this.getScore = this.getScore.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.zodiacCouple !== prevProps.zodiacCouple) {
      this.setState({ coupleAnimal: this.props.zodiacCouple });
    }
    if (this.props.starCouple !== prevProps.starCouple) {
      this.setState({ starCouple: this.props.starCouple });
    }
  }

  clickHandler() {
    this.getScore();
  }

  getScore() {
    let coupleAnimal = this.state.coupleAnimal;
    let starCouple = this.state.starCouple;
    axios
      .get(`/api/score/${coupleAnimal}`)
      .then((response) => {
        this.setState({ zodiacScore: response.data.score || "INVALID" });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ zodiacScore: null });
      });
    axios
      .get(`/api/starscore/${starCouple}`)
      .then((response) => {
        this.setState({ starScore: response.data.star_score || "INVALID" });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ starScore: null });
      });
  }

  render() {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
        <div className={styles.centered}>
          <p className={styles.header}>
            Compatibility Score:{" "}
            <span className={styles.header2}>
              {Math.ceil((this.state.zodiacScore + this.state.starScore) / 2)}
            </span>
          </p>
        </div>
          <div className={styles.centered}>
            <Button
              onClick={this.clickHandler}
              variant="contained"
              color="primary"
            >
              CALCULATE YOUR SCORE
            </Button>
          </div>
      </Box>
    );
  }
}

export default CoupleView;
