import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

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

  return (
    <div>
        <div>Welcome to home page</div>
        <button className='border rounded bg-orange-600' onClick={handleLogout}>Logout</button><br />
        <button onClick={()=>navigate('/form')}>Form</button><br />
        <button onClick={()=>navigate('/profile')}>Profile</button><br />
        <button onClick={()=>navigate('/search')}>Search</button>
    </div>
    
  )
}

export default Home