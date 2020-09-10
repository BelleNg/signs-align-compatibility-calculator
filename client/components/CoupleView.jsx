import React from "react";
import axios from "axios";

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
      <div>
        <p>Couple View</p>
        <button onClick={this.clickHandler}>CALCULATE OUR SHIPPING</button>

        <div>
          <span>this is your score:</span>{" "}
          {Math.ceil((this.state.zodiacScore + this.state.starScore) / 2)}
        </div>
      </div>
    );
  }
}

export default CoupleView;
