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

  const backgroundImage = 'url("/bg-2.jpg")'

  return (
   <div style={{backgroundImage,backgroundRepeat:'no-repeat', backgroundSize:'cover',height:'85vh'}}>
    <div className='mx-auto shadow-lg rounded-3xl overflow-hidden relative top-24 p-4 bg-yellow-100 bg-opacity-30' style={{width:'32%'}}>
        <form onSubmit={handleSubmit}>
            <h1 className='text-center font-bold text-xl text-white'>Admin Login</h1>
            <div>
            <label htmlFor="email" className='text-white font-bold'>
                <strong>Email</strong>
            </label><br />
            <input 
                type="text"
                placeholder='Enter Email'
                name='email'
                className='border-none  rounded p-3 w-full mb-3'
                onChange={(e)=> setEmail(e.target.value)}
              />
            </div>

            <div>
                <label htmlFor='password' className='text-white font-bold'>
                  <strong>Password</strong>
              </label><br />
              <input 
                type="password"
                placeholder='Enter password'
                name='password'
                className='border-none  rounded p-3 w-full mb-3'
                onChange={(e)=> setPassword(e.target.value)}
              />
            </div>
            <button className='p-3 my-3 border-none w-full rounded bg-orange-200 text-white font-bold'>Login</button>
            <div className=' mx-2 text-justify text-md font-bold text-black' id="message"></div>
        </form>
    </div>
   </div>
  )
}

export default Admin