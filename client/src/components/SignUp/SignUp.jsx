import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const SignUp = () => {
  return (
    <div className=''>
      <div className='w-3/12 mx-auto'>
        <div className='text-center'>
        <p>Create a Matrimonial Profile</p>
        </div>
          <div className='p-4'>
            <p className='text-center'>Find your perfect match</p>
              <form>
                  <div className='flex'>
                      <div>
                        <label htmlFor="">
                          <strong>First Name</strong>
                        </label><br />
                        <input 
                          type="text"
                          placeholder='Enter First Name'
                          name='firstName'
                          className='border rounded p-2 w-11/12 '
                        />
                      </div>

                      <div>
                        <label htmlFor="">
                          <strong>Last Name</strong>
                        </label><br />
                        <input 
                          type="text"
                          placeholder='Enter Last Name'
                          name='lastName'
                          className='border rounded p-2 w-11/12'
                        />
                      </div>
                  </div>
                        <label htmlFor="">
                          <strong>Email</strong>
                        </label><br />
                        <input 
                          type="text"
                          placeholder='Enter Email'
                          name='email'
                          className='border rounded p-2 w-11/12'
                        /> <br />

                        <label htmlFor="">
                          <strong>Password</strong>
                        </label><br />
                        <input 
                          type="password"
                          placeholder='Enter Password'
                          name='password'
                          className='border rounded p-2 w-11/12'
                        /> <br />

                        <button type='submit' className='p-3 mt-5 border-none w-11/12 rounded bg-orange-600'>Register</button>
              </form>
          </div>
      </div>
    </div>
  )
}

export default SignUp