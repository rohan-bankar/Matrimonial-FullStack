import React from 'react'

function ResetPassword() {
  return (
    <div>
      <div className='w-1/4 mx-auto p-5 rounded border'>
        <form>
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
            <button className='p-3 mt-5 border-none w-full rounded bg-orange-600'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default ResetPassword