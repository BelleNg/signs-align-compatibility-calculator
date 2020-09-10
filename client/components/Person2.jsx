import React from "react";
import axios from "axios";

class Person2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animal: null,
      animalPic: null,
      date: null,
    };
    this.dateInput2 = React.createRef();
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
    console.log("clicked submit");
    this.setState({ date: this.dateInput2.current.value });
  }

  getZodiac() {
    let year = this.state.date.slice(0, 4);
    axios
      .get(`/api/zodiac/${year}`)
      .then((response) => {
        this.setState({ animal: response.data.animal || "INVALID" });
      })
      .then( ()=>{
        this.props.setZodiac(this.state.animal);
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
          <label htmlFor="birthday">Birthday:</label>
          <input
            type="date"
            ref={this.dateInput2}
            id="birthday"
            name="birthday"
          ></input>
          <input type="submit" value="Submit"></input>
        </form>
        <div>
          <span>Chinese zodiac:</span> {this.state.animal}
        </div>
      </div>
    );
  }
}

export default Person2;
