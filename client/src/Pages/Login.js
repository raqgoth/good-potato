import React, { useState } from 'react'
import TextInput from '../Components/TextInput'
import { __LoginUser} from '../Services/LoginServices'

const Login = (props)  => {
  
  const [ email,setEmail]=useState('')
  const [ password,setPassword]=useState('') 

const handleChangeE =({target})=>{
  setEmail(target.value)
}
const handleChangeP =({target})=>{
  setPassword(target.value)
}

const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const userInf = {email, password}
      const loginData = await __LoginUser(userInf)
      //console.log(loginData)
        props.history.push('/home')
        return
      } catch (error) {
      
    }
  }
    return (
      <div className="signin flex-col">
        <form className="flex-col" onSubmit={handleSubmit}>
      
          <TextInput
            placeholder="Your Email"
            name="email"
            type="email"
            value={email}
            onChange={handleChangeE}
          />
          <TextInput
            placeholder="Password"
            name="password"
            type="password"
            value={password}
            onChange={handleChangeP}
          />
          <button onClick = {handleSubmit}>
              Sign In
          </button>
        </form>
      </div>
    )
  }
export default Login