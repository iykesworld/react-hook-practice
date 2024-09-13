import React from 'react'
import { Form } from './assets/Components/Form/Form'

const App = () => {
  const userRegister = true;
  return (
    <div>
      <Form 
      isRegistered ={userRegister}
      />
    </div>
  )
}

export default App