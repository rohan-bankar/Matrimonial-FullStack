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

    const backgroundImage = 'url("/bg-2.jpg")'

  return (
    <div style={{backgroundImage,backgroundRepeat:'no-repeat', backgroundSize:'cover',height:'85vh'}}>
        <div className='mx-auto shadow-lg rounded-3xl overflow-hidden relative top-24 p-4 bg-yellow-100 bg-opacity-30' style={{width:'32%'}}>
            <form onSubmit={handleSubmit}>
                <h1 className='text-center font-bold text-xl text-white'>Change Password</h1>
                <div>
                    <label htmlFor="oldPassword" className='text-white font-bold'>
                    <strong>Old Password</strong>
                    </label><br />
                    <input 
                        type="password"
                        placeholder='Enter Old Password'
                        name='oldPassword'
                        className='border-none  rounded p-3 w-full mb-3'
                        onChange={(e)=> setOldPassword(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="newPassword" className='text-white font-bold'>
                    <strong>New Password</strong>
                    </label><br />
                    <input 
                        type="password"
                        placeholder='Enter New Password'
                        name='newPassword'
                        className='border-none  rounded p-3 w-full mb-3'
                        onChange={(e)=>setNewPassword(e.target.value)}
                    />
                </div>
                <button type='submit' className='p-3 my-3 border-none w-full rounded bg-orange-200 text-white font-bold'>Change Password</button>
                <div className=' mx-2 text-justify text-md font-bold text-black' id='message'></div>
            </form>
        </div>
    </div>
  )
}

export default ChangePassword