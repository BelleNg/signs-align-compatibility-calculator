import React from "react";
import axios from "axios";

class Person1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        year: null,
      animal: null,
      animalPic: null,
      date: null
    };
    this.dateInput1 = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getZodiac = this.getZodiac.bind(this);
  }

  //   componentDidMount() {
  //   }

  componentDidUpdate(_, prevState) {
    if (this.state.date !== prevState.date) {
      this.getZodiac();
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('clicked submit');
    this.setState({date: this.dateInput1.current.value });
  }

  getZodiac() {
    let year = this.state.date.slice(0, 4);
    axios
      .get(`/api/zodiac/${year}`)
      .then((response) => {
        this.setState({ animal: response.data.animal || "INVALID" });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ animal: null });
      });
  }

  render() {
    return (
      <div>
        <p>Person1</p>
        <form onSubmit={this.handleSubmit}>
          <label for="birthday">Birthday:</label>
          <input type="date" ref={this.dateInput1} id="birthday" name="birthday"></input>
          <input type="submit" value="Submit"></input>
        </form>
        <span>Chinese zodiac:</span> {this.state.animal}
      </div>
    );
  }
}

export default Person1;
