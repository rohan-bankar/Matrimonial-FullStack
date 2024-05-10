import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Login = () => {
  const [email,setEmail] = useState()
  const [password,setPassword] = useState()
  const navigate = useNavigate()

  const handleSubmit = (e)=>{
    e.preventDefault()
    axios.post('/api/v1/users/login',{email,password})
    .then((result)=>{
      console.log(result);
      const {accessToken,refreshToken} = result.data.data;
      localStorage.clear()
      localStorage.setItem('accessToken',accessToken)
      console.log(accessToken);
      localStorage.setItem('refreshToken',refreshToken)
      console.log(refreshToken);
      navigate('/home')
    })
    .catch(error=>{console.log(error);
      showMessage("email or password is incorrect")
    })
  }

  function showMessage(message){
    const messageDiv = document.getElementById('message')
    messageDiv.textContent = message
  }
  return (
    <div>
        <div className='w-1/4 mx-auto p-5 rounded border'>
          <form onSubmit={handleSubmit}>
            <h1 className='text-center'>Login</h1>
            <div>
              <label htmlFor='email'>
                  <strong>Email</strong>
              </label><br />
              <input 
                type="text"
                placeholder='Enter Email'
                name='email'
                className='border rounded p-2 w-full'
                onChange={(e)=> setEmail(e.target.value)}
              />
            </div>

            <div>
                <label htmlFor='password'>
                  <strong>Password</strong>
              </label><br />
              <input 
                type="password"
                placeholder='Enter password'
                name='password'
                className='border rounded p-2 w-full'
                onChange={(e)=> setPassword(e.target.value)}
              />
            </div>
            <button type='submit' className='p-3 my-5 border-none w-11/12 rounded bg-orange-600'>Login</button>
              <div id='message'></div>
          </form>
        </div>
    </div>
  )
}

export default Login