import React, { Component} from 'react';
import './App.css';
import Person from './Person/Person'

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
          {this.state.persons.map((person, index) =>{
            return (
              <Person 
                click={()=> this.deletePersonHandler(index)}
                name={person.name} 
                age={person.age}
                key={person.id}
                changed={(event) => this.nameChangeHandler(event, person.id)}
               />
            )
          })}
       

      </div> 
      )
      style.backgroundColor = 'red'
     
    }

    let classes = []
    if(this.state.persons.length <= 2){
      classes.push('red') // classes = ['red']
    }
    if(this.state.persons.length <= 1){
      classes.push('bold') // classes = ['red' ,'bold']
    }

  return (
    
    
    <div className='App'>
      <h1>Hi, I am a React app</h1>
      <p className={classes.join(' ')}>This is really working</p>
      <button 
        style={style}
        onClick={this.togglePersonHandler}>Toggle Persons
        </button>
    
        {persons}       
    </div>
    
  );
  }
}

export default App;
