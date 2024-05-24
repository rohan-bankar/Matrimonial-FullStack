import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Profile from '../Profile/Profile.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faCircleUser } from '@fortawesome/free-regular-svg-icons'
library.add(faMagnifyingGlass,faCircleUser)
function AdminDashBoard() {
  // const [name,setName] = useState('')
  const [viewUser,setViewUser] = useState([])
  const [error,setError] = useState('')
  const [profiles,setProfiles] = useState([])
  const [selectedProfile,setSelectedProfile] = useState(null)
  const [isModalOpen,setIsModalOpen] = useState(false)
  const navigate = useNavigate()
  const [isMenuOpen,setIsMenuOpen] = useState(false)
  const [showNote,setShowNote] = useState(false)

  const toggleMenu = ()=>{
    setIsMenuOpen(!isMenuOpen)
  }

  const handleMouseEnter = ()=>{
    setShowNote(true)
  }

  const handleMouseExit = ()=>{
    setShowNote(false)
  }

  const getAccessToken = ()=>{
    return localStorage.getItem('accessToken')
  }

  const handleLogout = (e)=>{
    e.preventDefault()
    const accessToken = getAccessToken()
    axios.post('https://matrimonial-server.onrender.com/api/v1/users/admin-logout',{},{
      headers:{
        Authorization:`Bearer ${accessToken}`
      }
    })
    .then(result =>{
      localStorage.removeItem('accessToken')
      navigate('/admin-login')
    })
    .catch(error =>{
      console.log(error,"logout task failed");
    })
  }

  const handleViewProfile = async (userId) => {
    try {
        const accessToken = getAccessToken();
        const response = await axios.get(`https://matrimonial-server.onrender.com/api/v1/form/users-profile/${userId}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });
        // console.log("Profile data:",response.data.data);
        setSelectedProfile(response.data.data);
        setIsModalOpen(true);
    } catch (error) {
        setError('Error fetching profile data');
        console.error('Error fetching profile data:', error);
    }
};

const handleDeleteInfo = async (userId)=>{
  try {
    setError('')
    const accessToken = getAccessToken();
    await axios.delete(`https://matrimonial-server.onrender.com/api/v1/admin/delete-data/${userId}`,{
      headers:{
        Authorization:`Bearer ${accessToken}`
      }
    })
    setProfiles(profiles.filter(profile => profile._id !== userId));
  } catch (error) {
    setError('Error to delete data')
    console.error('Error deleting profile:',error);
  }
}

const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProfile(null);
};

useEffect(()=>{
  const fetchProfiles = async () =>{
    try {
      const accessToken = getAccessToken()
      const response = await axios.get('https://matrimonial-server.onrender.com/api/v1/admin/view-profile',{
        headers:{
          Authorization:`Bearer ${accessToken}`
        }
      })
      setViewUser(response.data.data)
    } catch (error) {
      setError('Failed to fetch profiles')
      console.error('Error fetching profiles:',error);
    }
  }
  fetchProfiles()
},[])

  return (
    <div className='bg-orange-200 h-screen relative'>
      <div className='w-44 text-center absolute top-5 right-5'>
      <FontAwesomeIcon className='cursor-pointer' icon="fa-regular fa-circle-user" size="2xl" onClick={toggleMenu} />
        <div className={`w-44 p-3 border-2 border-black rounded-md font-bold bg-white mt-1 ${isMenuOpen ? 'block' : 'hidden'}`}>
        <button onClick={handleLogout}>Logout</button><br />
        <button onClick={()=>navigate('/change-password')}>Change Password</button>
        </div>
      </div>
      <div onMouseEnter={handleMouseEnter} 
           onMouseLeave={handleMouseExit}>
        <button className=' border-2  border-orange-300 p-2 rounded-full absolute left-10 top-5 ' style={{color:'orange'}}  onClick={()=>navigate('/search')}><FontAwesomeIcon icon="fa-solid fa-magnifying-glass" size="2xl" /></button>
        {showNote && <div className='absolute top-20 left-8 border border-black bg-white font-bold p-1 rounded-md'>Search</div>}
      </div>
        {error && <p>{error}</p>}

            {viewUser.length > 0 && (
                <div className='w-9/12 mx-auto absolute top-20 left-36 bg-white rounded-md '>
                  <div className='grid grid-cols-6 mx-5 p-3 text-center font-bold'>
                    <div>Name</div>
                    <div>Religion</div>
                    <div>Cast</div>
                    <div>Marital Status</div>
                    <div>Profile</div>
                    <div>Delete</div>
                  </div>
                    <ul>
                        {viewUser.map((profile, index) => (
                            <li className='border border-b-black' key={profile._id}>
                              <div className='grid grid-cols-6 mx-5 p-3 text-center'>
                                <div>
                                <p>{profile.personalInformation.firstName} {profile.personalInformation.lastName}</p>
                                </div>

                                <div>
                                <p>{profile.personalInformation.religion}</p>
                                </div>
                                
                                <div>
                                <p>{profile.personalInformation.cast}</p>
                                </div>
                                
                                <div>
                                <p>{profile.personalInformation.maritalStatus}</p>
                                </div>
                                
                                <div>
                                <button onClick={() => handleViewProfile(profile._id)}>View Profile</button>
                                </div>
                                
                                <div>
                                <button onClick={()=> handleDeleteInfo(profile._id)}>Delete Profile</button>
                                </div>
                              </div>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {isModalOpen && selectedProfile && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-orange-100  p-5 rounded-lg shadow-lg relative  max-h-full overflow-y-auto w-3/4">
                    <span className="absolute top-2 right-2 text-black cursor-pointer" onClick={closeModal}>&times;</span>
                    <Profile data={selectedProfile} />
                </div>
            </div>
            )}
    </div>
  )
}

export default AdminDashBoard