import React from 'react'

const forgetPasswordEmail = () => {
  return (
    <div>
        <div className='w-1/4 mx-auto p-5 rounded border'>
            <form>
                <div>
                    <label htmlFor='email'>
                        <strong>Email</strong>
                    </label><br />
                    <input 
                        type="text"
                        placeholder='Enter Email'
                        name='email'
                        className='border rounded p-2 w-full'
                    />
                </div>
                <button className='p-3 mt-5 border-none w-11/12 rounded bg-orange-600'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default forgetPasswordEmail