import React, { Component} from 'react';
import './App.css';
import Persons from '../Components/Persons/Persons'

class App extends Component {
  state = {
    persons: [
      {id: 1, name: 'Filbert', age: 28},
      {id: 2, name: 'Brian', age: 26},
      {id: 3, name: 'Angel', age: 19}
    ],
    showPerson: false
  }

  // switchNameHandler = (newName) => {
  //   //console.log('clicked');
  //   // dont do this this.state.persons[0].name = 'Filbert lemasani'
  //   this.setState( {persons: [
  //     {name: newName, age: 28},
  //     {name: 'Brian lemasani', age: 26},
  //     {name: 'Angel', age: 20}
  //   ] })
  // }

deletePersonHandler = (personIndex) => {
  // const persons = this.state.persons.slice()
  const persons = [...this.state.persons]
  persons.splice(personIndex, 1)
  this.setState({
    persons: persons
  })
}

nameChangeHandler = (event, id) => {
  const personIndex = this.state.persons.findIndex(p => {
    return p.id === id;
  })
  const person = { ...this.state.persons[personIndex] };
  person.name = event.target.value;
  const persons = [...this.state.persons]
  persons[personIndex] = person;

  this.setState( {persons: persons })

}

togglePersonHandler = () =>{
  const show = this.state.showPerson
  this.setState({
    showPerson: !show
  })
}


  render(){
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      borderRadius: '4px',
      padding: '10px',
      cursor: 'pointer'
    }

    let persons = null
    if(this.state.showPerson){
      persons = (
        <div>
         <Persons
            persons ={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler}
         />
        </div> 
      )
      style.backgroundColor = 'red'
     
    }

    

  return (
    
    
    <div className='App'>
      
    
        {persons}       
    </div>
    
  );
  }
}

export default App;
