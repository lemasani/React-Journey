import React, { Component} from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {name: 'Filbert', age: 28},
      {name: 'Brian', age: 26},
      {name: 'Angel', age: 19}
    ]    
  }

  switchNameHandler = () => {
    //console.log('clicked');
    // dont do this this.state.persons[0].name = 'Filbert lemasani'
    this.setState( {persons: [
      {name: 'Filbert lemasani', age: 28},
      {name: 'Brian', age: 26},
      {name: 'Angel', age: 20}
    ] })
  }

  render(){
  return (
    <div className='App'>
      <h1>Hi, I am a React app</h1>
      <p>This is really working</p>
      <button onClick={this.switchNameHandler}>Switch Name</button>
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age} > My Hobbies: Drawing </ Person>
      <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
    </div>
  );
  }
}

export default App;
