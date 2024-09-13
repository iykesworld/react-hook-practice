import React from 'react'
import './Login.css'

export const Login = (props) => {
  return (
    <div>
        <input value={props.value} onChange={props.onChange} type={props.type} placeholder={props.placeholder}/>
    </div>
  )
}
