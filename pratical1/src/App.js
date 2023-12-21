import React, { Component} from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component{
  state = {
    username: 'SuperMax'
  }

  usernameChange = (event) =>{
    const inputValue = event.target.value
    this.setState({
      username: inputValue
    })
  }

  render(){

    return (
      <div className="App">
        <h1>Hello world</h1>
        <UserInput 
          onChange={this.usernameChange} 
          currentname={this.state.username} />
        <UserOutput userName= {this.state.username} />
        <UserOutput userName='fred' />
        <UserOutput userName='mendy' />
      </div>
    );
  }
}

export default App;
