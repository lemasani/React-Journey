import React, { Component} from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import ValidationComponet from './ValidationComponet/ValidationComponet';
import Char from './Char/Char';

class App extends Component{
  state = {
    username: 'SuperMax',
    userInput: ''
  }

  usernameChange = (event) =>{
    const inputValue = event.target.value
    this.setState({
      username: inputValue
    })
  }

  onChangeHandler = (event) =>{
    this.setState({
      userInput: event.target.value
    })
  }

  deleteCharHandler = (index) =>{
    const text = this.state.userInput.split('')
    text.splice(index, 1)
    const updatedText = text.join('')
    this.setState({
      userInput: updatedText
    })
  }
  render(){

    let charList = this.state.userInput.split('').map((ch, index) => {
      return <Char  
        character={ch}
        key={index}
        clicked={() => this.deleteCharHandler(index)}
       /> 
    })
    return (
      <div className="App">
        <h1>Hello world</h1>
        <UserInput 
          onChange={this.usernameChange} 
          currentname={this.state.username} />
        <UserOutput userName= {this.state.username} />
        <UserOutput userName='fred' />
        <UserOutput userName='mendy' />

        <input 
          type='text' 
          onChange={this.onChangeHandler} 
          value={this.state.userInput}
        />
        <p>{this.state.userInput}</p>

        <ValidationComponet 
         length= {this.state.userInput.length } 
        />
        {charList}
      </div>
    );
  }
}

export default App;
