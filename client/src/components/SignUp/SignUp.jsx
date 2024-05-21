import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [avatar, setAvatar] = useState(null)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = new FormData()
    formData.append('firstName', firstName)
    formData.append('lastName', lastName)
    formData.append('email', email)
    formData.append('password', password)
    formData.append('avatar', avatar)

    axios.post('/api/v1/users/register', formData)
      .then(result => {
        console.log(result)
        showMessage(result.data.message)
        // Navigate to another page or take another action after successful registration
      })
      .catch(error => {
        console.error(error)
        showMessage("Registration failed. Please try again.")
      })
  }

  const showMessage = (message) => {
    const messageDiv = document.getElementById('message')
    messageDiv.textContent = message
  }

  const backgroundImage = 'url("/bg-2.jpg")'

  return (
    <div style={{ backgroundImage, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '85vh' }}>
      <div className='mx-auto shadow-lg rounded-3xl overflow-hidden relative top-10' style={{ width: '32%' }}>
        <div className='text-center bg-orange-200 rounded-t-3xl'>
          <p className='py-4 text-white text-xl font-bold'>Create a Matrimonial Profile</p>
        </div>
        <div className='p-4 bg-yellow-100 bg-opacity-30'>
          <p className='text-center py-4 text-xl font-bold text-white'>Find your perfect match</p>
          <form onSubmit={handleSubmit}>
            <div className='flex w-11/12'>
              <div>
                <label htmlFor="firstName" className='text-white'>
                  <strong>First Name <span className='text-red-600'>*</span></strong>
                </label><br />
                <input
                  type="text"
                  placeholder='Enter First Name'
                  name='firstName'
                  className='border-none rounded p-3 w-full'
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className='ml-5'>
                <label htmlFor="lastName" className='text-white'>
                  <strong>Last Name <span className='text-red-600'>*</span></strong>
                </label><br />
                <input
                  type="text"
                  placeholder='Enter Last Name'
                  name='lastName'
                  className='border-none rounded p-3 w-full'
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className='text-white'>
                <strong>Email <span className='text-red-600'>*</span></strong>
              </label><br />
              <input
                type="text"
                placeholder='Enter Email'
                name='email'
                className='border-none rounded p-3 w-full'
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className='text-white'>
                <strong>Password <span className='text-red-600'>*</span></strong>
              </label><br />
              <input
                type="password"
                placeholder='Enter Password'
                name='password'
                className='border-none rounded p-3 w-full'
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="avatar" className='text-white'>
                <strong>Profile <span className='text-red-600'>*</span></strong>
              </label><br />
              <input
                type="file"
                name='avatar'
                onChange={(e) => setAvatar(e.target.files[0])}
              />
            </div>
            <button type='submit' className='p-3 my-3 border-none w-full rounded bg-orange-200 text-white font-bold'>Register</button><br />
            <button type='button' onClick={() => navigate('/login')} className='p-3 my-3 border-none w-full rounded bg-orange-200 text-white font-bold'>Login</button>
            <div className='py-2 mx-2 text-justify text-md font-bold text-black' id='message'></div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp
