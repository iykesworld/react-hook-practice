import React, { useState } from 'react'
import './Form.css'
import { Login } from '../Login/Login'

export const Form = (props) => {
    const [name, setName] = useState("")
    const [headingText, setHeading] = useState("");

    const handleChange = (event)=>{
        
        setName(event.target.value);
    }
    const handleClick =()=>{
        setHeading(name);
    }

  return (
    <div className='form-wrap'>
        <h1>{headingText}</h1>
        <Login onChange = {handleChange} type = 'text' placeholder = 'First Name' value = {name} />  
        <button onClick={handleClick} >Submit</button>
    </div>
  )
}
