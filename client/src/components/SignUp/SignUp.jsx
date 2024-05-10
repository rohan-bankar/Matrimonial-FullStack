import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const SignUp = () => {
  const[firstName,setFirstName] = useState()
  const[lastName,setLastName] = useState()
  const[email,setEmail] = useState()
  const[password,setPassword] = useState() 
  const navigate = useNavigate()

  const handleSubmit = (e)=>{
    e.preventDefault()
    axios.post('/api/v1/users/register',{firstName,lastName,email,password})
    .then(result => {console.log(result)
      showMessage(result.data.message)
    })
    .catch(error => {console.log(error);})
     showMessage("Registration failed. please try again")
  }
  
  function showMessage(message){
    const messageDiv = document.getElementById('message')
    messageDiv.textContent = message
  }
  
  return (
    <div className=''>
      <div className='w-3/12 mx-auto'>
        <div className='text-center'>
        <p>Create a Matrimonial Profile</p>
        </div>
          <div className='p-4'>
            <p className='text-center'>Find your perfect match</p>
              <form onSubmit={handleSubmit} className=''>
                  <div className='flex'>
                      <div>
                        <label htmlFor="firstName">
                          <strong>First Name</strong>
                        </label><br />
                        <input 
                          type="text"
                          placeholder='Enter First Name'
                          name='firstName'
                          className='border rounded p-2 w-10/12'
                          onChange={(e)=>setFirstName(e.target.value)}
                        />
                      </div>

                      <div>
                        <label htmlFor="lastName">
                          <strong>Last Name</strong>
                        </label><br />
                        <input 
                          type="text"
                          placeholder='Enter Last Name'
                          name='lastName'
                          className='border rounded p-2 w-10/12'
                          onChange={(e)=>setLastName(e.target.value)}
                        />
                      </div>
                  </div>
                      
                      <div>
                        <label htmlFor="email">
                          <strong>Email</strong>
                        </label><br />
                        <input 
                          type="text"
                          placeholder='Enter Email'
                          name='email'
                          className='border rounded p-2 w-11/12'
                          onChange={(e)=>setEmail(e.target.value)}
                        /> 
                      </div>

                      <div>
                        <label htmlFor="password">
                          <strong>Password</strong>
                        </label><br />
                        <input 
                          type="password"
                          placeholder='Enter Password'
                          name='password'
                          className='border rounded p-2 w-11/12'
                          onChange={(e)=>setPassword(e.target.value)}
                        /> 
                      </div>
                        <button  type='submit' className='p-3 my-5 border-none w-11/12 rounded bg-orange-600'>Register</button>
                        <div id='message'></div>
              </form>
          </div>
      </div>
    </div>
  )
}

export default SignUp