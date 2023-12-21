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

  switchNameHandler = (newName) => {
    //console.log('clicked');
    // dont do this this.state.persons[0].name = 'Filbert lemasani'
    this.setState( {persons: [
      {name: newName, age: 28},
      {name: 'Brian lemasani', age: 26},
      {name: 'Angel', age: 20}
    ] })
  }

nameChangeHandler = (event) => {
  this.setState( {persons: [
    {name: 'Filbert', age: 28},
    {name: event.target.value, age: 26},
    {name: 'Angel', age: 20}
  ] })

}


  render(){
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      borderRadius: '4px',
      padding: '5px',
      cursor: 'pointer'
    }

  return (
    <div className='App'>
      <h1>Hi, I am a React app</h1>
      <p>This is really working</p>
      <button 
        style={style}
        onClick={() =>this.switchNameHandler('Macha')}>Switch Name
        </button>
      <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age}
        />
      <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age} 
        click={this.switchNameHandler.bind(this, 'Maz')} 
      changed={this.nameChangeHandler}> My Hobbies: Drawing </ Person>
      <Person 
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age} />
    </div>
  );
  }
}

export default App;
