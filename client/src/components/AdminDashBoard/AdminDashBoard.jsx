import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Profile from '../Profile/Profile.jsx'
function AdminDashBoard() {
  const [name,setName] = useState('')
  const [error,setError] = useState('')
  const [profiles,setProfiles] = useState([])
  const [selectedProfile,setSelectedProfile] = useState(null)
  const [isModalOpen,setIsModalOpen] = useState(false)
  const navigate = useNavigate()

  const getAccessToken = ()=>{
    return localStorage.getItem('accessToken')
  }

  const handleLogout = (e)=>{
    e.preventDefault()
    const accessToken = getAccessToken()
    axios.post('/api/v1/users/admin-logout',{},{
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

  const handleSearch =  async (e)=>{
    e.preventDefault()
    setError('')
    setProfiles([])

    try {
      const accessToken = getAccessToken()
      let response
      
      if(name){
        response = await axios.post('/api/v1/form/searchBar',{
          name
        },{
          headers:{
            Authorization:`Bearer ${accessToken}`
          }
        })
      }
      setProfiles(response.data.data)
    } catch (error) {
      setError('No profile found or an error occurred')
      console.error('Error searching profiles:', error)
    }
  }

  const handleViewProfile = async (userId) => {
    try {
        const accessToken = getAccessToken();
        const response = await axios.get(`/api/v1/form/users-profile/${userId}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });
        console.log("Profile data:",response.data.data);
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
    await axios.delete(`api/v1/admin/delete-data/${userId}`,{
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

  return (
    <div>
        <button onClick={handleLogout}>Logout</button><br />
        <button onClick={()=>navigate('/change-password')}>Change Password</button>
        <form onSubmit={handleSearch}>
            <div>
              <input type="text" 
              id='name'
              value={name}
              onChange={(e)=> setName(e.target.value)}
              />
            </div>
            <button type='submit'>Search</button>
        </form>
        {error && <p>{error}</p>}

            {profiles.length > 0 && (
                <div>
                    <h2>Search Results:</h2>
                    <ul>
                        {profiles.map((profile, index) => (
                            <li key={index}>
                                <p>Name: {profile.personalInformation.firstName} {profile.personalInformation.lastName}</p>
                                <button onClick={() => handleViewProfile(profile._id)}>View Profile</button>br
                                <button onClick={()=> handleDeleteInfo(profile._id)}>Delete</button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {isModalOpen && selectedProfile && (
                <div className="modal">
                <div className="modal-content">
                    <span className="close" onClick={closeModal}>&times;</span>
                    <Profile data={selectedProfile} />
                </div>
            </div>
            )}
    </div>
  )
}

export default AdminDashBoard