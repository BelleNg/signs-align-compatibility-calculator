import React from "react";
import axios from "axios";

class CoupleView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coupleAnimal: null,
      score: null
    };
    this.clickHandler = this.clickHandler.bind(this);
    this.getScore = this.getScore.bind(this);
  }

  //   componentDidMount() {
  //   }

  componentDidUpdate(prevProps) {
    if (this.props.couple !== prevProps.couple) {
      this.setState({ coupleAnimal: this.props.couple });
    }
  }

  clickHandler() {
    this.getScore()
  }

  getScore() {
    let coupleAnimal = this.state.coupleAnimal;
    axios
      .get(`/api/score/${coupleAnimal}`)
      .then((response) => {
        this.setState({ score: response.data.score || "INVALID" });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ score: null });
      });
  }

  render() {
    return (
      <div>
        <p>Couple View</p>
        <button onClick={this.clickHandler}>CALCULATE OUR SHIPPING</button>

        <div>
          <span>this is your score:</span> {this.state.score}
        </div>
      </div>

    );
  }
}

export default CoupleView;
