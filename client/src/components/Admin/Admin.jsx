import React from 'react'

const Admin = () => {
  return (
   <div>
    <div className='w-1/4 mx-auto p-5 rounded border'>
        <form>
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
              />
            </div>
            <button className='p-3 mt-5 border-none w-11/12 rounded bg-orange-600'>Login</button>
        </form>
    </div>
   </div>
  )
}

export default Admin