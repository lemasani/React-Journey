import React from 'react'


const validationComponet = (props) =>{

    let validationMessage = 'Text long enough'
    if(props.length <= 5){
        validationMessage = 'Text too short'
    }
    return (
    <div className='validation'>
        <p>{validationMessage}</p>
    </div>

    )
}



export default validationComponet