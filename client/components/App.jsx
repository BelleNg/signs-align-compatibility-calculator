
import React from 'react';
import CoupleView from './CoupleView.jsx';
import Person1 from './Person1.jsx';
import Person2 from './Person2.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person1zodiac: null,
      person2zodiac: null,
    };

    this.setPerson1Zodiac = this.setPerson1Zodiac.bind(this);
    this.setPerson2Zodiac = this.setPerson2Zodiac.bind(this);
 
  }

  setPerson1Zodiac(zodiac) {
    this.setState({person1zodiac: zodiac})
  }

  setPerson2Zodiac(zodiac) {
    this.setState({person2zodiac: zodiac})
  }

 render() {
   return (
     <div>
       <h1>Hello World</h1>
       <Person1 setZodiac={this.setPerson1Zodiac}/>
        <Person2 setZodiac={this.setPerson2Zodiac}/>
       <CoupleView/>
     </div>
   )
 }
}
export default App;