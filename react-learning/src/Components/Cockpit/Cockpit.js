import React from "react";


const cockpit = (props) =>{

    let classes = []
    if(props.persons.length <= 2){
      classes.push('red') // classes = ['red']
    }
    if(props.persons.length <= 1){
      classes.push('bold') // classes = ['red' ,'bold']
    }
    return(
        <div>
            <h1>Hi, I am a React app</h1>
            <p className={classes.join(' ')}>This is really working</p>
            <button 
                style={style}
                onClick={this.togglePersonHandler}>Toggle Persons
            </button>

        </div>
    )
}

export default cockpit