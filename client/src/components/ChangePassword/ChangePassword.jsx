import React from 'react'

const ChangePassword = () => {
  return (
    <div>
        <div className='w-1/4 mx-auto p-5 rounded border'>
            <form>
                <h1>Change Password</h1>
                <div>
                    <label htmlFor="oldPassword">
                    <strong>Old Password</strong>
                    </label><br />
                    <input 
                        type="password"
                        placeholder='Enter Old Password'
                        name='oldPassword'
                        className='border rounded p-2 w-full'
                    />
                </div>

                <div>
                    <label htmlFor="newPassword">
                    <strong>New Password</strong>
                    </label><br />
                    <input 
                        type="password"
                        placeholder='Enter New Password'
                        name='newPassword'
                        className='border rounded p-2 w-full'
                    />
                </div>
                <button type='submit' className='p-3 mt-5 border-none w-11/12 rounded bg-orange-600'>Change Password</button>
            </form>
        </div>
    </div>
  )
}

export default ChangePassword