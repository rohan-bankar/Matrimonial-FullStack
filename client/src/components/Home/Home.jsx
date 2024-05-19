import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core' 
import {faUserPlus} from '@fortawesome/free-solid-svg-icons'
import Search from '../Search/Search.jsx'
import Footer from '../Footer/Footer.jsx'
library.add(faUserPlus)
const Home = () => {
    const navigate = useNavigate()
    const getAccessToken = ()=>{
        return localStorage.getItem('accessToken');
      }
    
      const handleLogout = (e) =>{
        e.preventDefault()
        const accessToken = getAccessToken();
        console.log(`accessToken:${accessToken}`);
        axios.post('/api/v1/users/logout', {}, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })
    
        .then(result =>{
          console.log(result);
          localStorage.removeItem('accessToken')
          navigate('/login')
        })
        .catch(error =>{
          console.log(error,"logout task failed");
        })
      }

      const backgroundImage = 'url("")'

  return (
    <div className='h-screen bg-orange-200 relative' style={{backgroundImage,backgroundRepeat:'no-repeat', backgroundSize:'cover'}}>
        <button className='border-2 border-orange-300 p-2 rounded-full absolute top-10 left-10' style={{color:'orange'}} onClick={()=>navigate('/form')}><FontAwesomeIcon icon="fa-solid fa-user-plus" size="2xl" /></button><br />
        {/* <button onClick={()=>navigate('/profile')}>Profile</button><br />
        <button className='border rounded bg-orange-600' onClick={handleLogout}>Logout</button><br /> */}
        {/* <button onClick={()=>navigate('/change-password')}>Change Password</button> */}
        <div className=''>
        <Search/>
        </div>
    </div>
    
  )
}

export default Home