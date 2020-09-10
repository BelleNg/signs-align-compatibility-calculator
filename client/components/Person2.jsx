import React from "react";
import axios from "axios";

class Person2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      year: null,
      animal: null,
      animalPic: null,
    };
  }

  //   componentDidMount() {
  //   }

  //   componentDidUpdate(_, prevState) {
  //     }
  //   }

  render() {
    return (
      <div>
        <p>Person2</p>
        <form>
          <label for="birthday">Birthday:</label>
          <input type="date" id="birthday" name="birthday"></input>
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    );
  }
}

export default Person2;
