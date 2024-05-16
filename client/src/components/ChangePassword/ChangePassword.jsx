import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
const ChangePassword = () => {
    const [oldPassword,setOldPassword] = useState()
    const [newPassword,setNewPassword] = useState()
    const navigation = useNavigate() 
    const handleSubmit = async(e)=>{
        e.preventDefault()
        try {
            const accessToken = localStorage.getItem('accessToken');
            if(!accessToken){
                throw new error('Access token not found')
            }
            const response = await axios.post('/api/v1/users/change-password',{oldPassword,newPassword},
            {
                headers:{
                    Authorization:`Bearer ${accessToken}`
                }
            }
            )

            showMessage(response.data.message)
            localStorage.removeItem('accessToken')
            navigation('/login')     
        } catch (error) {
            console.error(error);
            showMessage(error.response?.data?.error || 'please try again');
        }
    }

    function showMessage(message){
        const messageDiv = document.getElementById('message');
        messageDiv.textContent = message;
    }

  return (
    <div>
        <div className='w-1/4 mx-auto p-5 rounded border'>
            <form onSubmit={handleSubmit}>
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
                        onChange={(e)=> setOldPassword(e.target.value)}
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
                        onChange={(e)=>setNewPassword(e.target.value)}
                    />
                </div>
                <button type='submit' className='p-3 mt-5 border-none w-11/12 rounded bg-orange-600'>Change Password</button>
                <div id='message'></div>
            </form>
        </div>
    </div>
  )
}

export default ChangePassword