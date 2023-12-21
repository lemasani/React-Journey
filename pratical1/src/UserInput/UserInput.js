import React from "react";


const userInput = (props) => {
    const inputSytle = {
        border: '2px solid red',
        padding: '10px',
        borderRadius: '5px'
    }
    return (
        <div className="userInput">
            <input type="text" 
            style={inputSytle}
            onChange={props.onChange} 
            value={props.currentname}/> 
        </div>
    )
}


export default userInput;