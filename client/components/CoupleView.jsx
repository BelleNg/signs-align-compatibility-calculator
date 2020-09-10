import React from "react";
import axios from "axios";
import Person1 from './Person1.jsx';
import Person2 from './Person2.jsx';

class CoupleView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
        <p>Couple View</p>
        <Person1 />
        <Person2 />
      </div>
    );
  }
}

export default CoupleView;
