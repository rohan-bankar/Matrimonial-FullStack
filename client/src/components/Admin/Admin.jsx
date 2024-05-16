import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Admin = () => {
  const [email,setEmail] = useState()
  const [password,setPassword] = useState()
  const navigate = useNavigate()

  const handleSubmit = (e)=>{
    e.preventDefault()
    axios.post('api/v1/users/admin-login',{email,password})
    .then((result)=>{
      const {accessToken,refreshToken} =result.data.data
      localStorage.clear()
      localStorage.setItem('accessToken',accessToken)
      localStorage.setItem('refreshToken',refreshToken)
      navigate('/dash-board')
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
            <h1>Admin Login</h1>
            <div>
            <label htmlFor="">
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
            <button className='p-3 mt-5 border-none w-11/12 rounded bg-orange-600'>Login</button>
            <div id="message"></div>
        </form>
    </div>
   </div>
  )
}

export default Admin