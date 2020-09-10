import React from "react";
import axios from "axios";

class Person1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        year: null,
      animal: 'mantis shrimp' || null,
      animalPic: null,
      date: null
    };
    this.dateInput1 = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //   componentDidMount() {
  //   }

  //   componentDidUpdate(_, prevState) {
  //     }
  //   }
  handleSubmit(event) {
    event.preventDefault();
    console.log('clicked submit');
    this.setState({date: this.dateInput1.current.value });
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
        <span>zodiac:</span> {this.state.animal}
      </div>
    );
  }
}

export default Person1;
