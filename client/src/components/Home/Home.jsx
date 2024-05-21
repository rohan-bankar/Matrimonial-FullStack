import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core' 
import {faUserPlus} from '@fortawesome/free-solid-svg-icons'
import { faCircleUser } from '@fortawesome/free-regular-svg-icons'
import Search from '../Search/Search.jsx'
import Footer from '../Footer/Footer.jsx'
library.add(faUserPlus,faCircleUser)
const Home = () => {
    const navigate = useNavigate()
    const [isMenuOpen,setIsMenuOpen] = useState(false)
    const [profile,setProfile] = useState('')
    const getAccessToken = ()=>{
        return localStorage.getItem('accessToken');
      }

      useEffect(() => {
        const fetchProfile = async () => {
            try {
                const token = localStorage.getItem('accessToken');
                const response = await axios.get('/api/v1/users/profile', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setProfile(response.data.data);
            } catch (error) {
                console.error('Error fetching profile:', error);
            }
        };

        fetchProfile();
    }, []);


    const toggleMenu = ()=>{
      setIsMenuOpen(!isMenuOpen)
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
        <button className='border-2 border-orange-300 p-2 rounded-full absolute top-5 left-10 z-50' style={{color:'orange'}} onClick={()=>navigate('/form')}><FontAwesomeIcon icon="fa-solid fa-user-plus" size="2xl" /></button><br />
        <div className='w-44 text-center absolute z-50 right-10'>
                {profile.avatar ? (
                    <img
                        src={profile.avatar}
                        alt="User Avatar"
                        className="rounded-full w-16 h-16 cursor-pointer mx-auto"
                        onClick={toggleMenu}
                    />
                ) : (
                  <FontAwesomeIcon className='cursor-pointer' icon="fa-regular fa-circle-user" size="2xl" onClick={toggleMenu} />
                )}
          <div className={`w-44 p-3 border-2 border-black rounded-md font-bold bg-white mt-1 ${isMenuOpen ? 'block' : 'hidden'}`}>
            <button onClick={handleLogout}>Logout</button><br />
            <button onClick={()=>navigate('/profile')}>Profile</button><br />
            <button onClick={()=>navigate('/change-password')}>Change Password</button><br />
          </div>
        </div>

        <div>
        <Search/>
        </div>
    </div>
    
  )
}

export default Home