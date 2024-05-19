import React, { useState } from 'react';
import axios from 'axios';
import Profile from '../Profile/Profile.jsx';

const SearchProfile = () => {
    const [name, setName] = useState('');
    const [profiles, setProfiles] = useState([]);
    const [error, setError] = useState('');
    const [cast, setCast] = useState('');
    const [gender, setGender] = useState('');
    const [maritalStatus,setMaritalStatus] = useState('');
    const [selectedProfile, setSelectedProfile] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const getAccessToken = () => {
        return localStorage.getItem('accessToken');
    };

    const handleSearch = async (e) => {
        e.preventDefault();
        setError('');
        setProfiles([]);

        try {
            const accessToken = getAccessToken();
            let response;
            
            if (name) {
                
                response = await axios.post('/api/v1/form/searchBar', {
                    name
                }, {
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    },
                    params: {
                        page: 1,
                        limit: 10
                    }
                });
            } else {
                
                response = await axios.post('/api/v1/form/filter-profiles', {
                    personalInformation: { cast, gender, maritalStatus }
                }, {
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    }
                });
            }

            setProfiles(response.data.data);
        } catch (error) {
            setError('No profiles found or an error occurred');
            console.error('Error searching profiles:', error);
        }
    };

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

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProfile(null);
    };

    return (
    <div className='relative'>
        <form onSubmit={handleSearch}>
            <div className=''>
            <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className='border-2 border-black w-3/6 p-3 rounded-full absolute top-36 right-1/4 bg-orange-200'
                placeholder='Search'
            />
            </div>

            <div className='grid grid-cols-3 absolute top-16 right-80 text-white w-3/6  '>
            <div className=''>
                <label className='font-bold text-xl' htmlFor="gender">Gender</label><br />
                <select
                id="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className='text-black p-1 rounded-md'
                >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
                </select>
            </div>

            <div className=''>
                <label className='font-bold text-xl' htmlFor="maritalStatus">Marital Status</label><br />
                <select
                id="maritalStatus"
                value={maritalStatus}
                onChange={(e) => setMaritalStatus(e.target.value)}
                className='text-black p-1 rounded-md'
                >
                <option value="">Select Status</option>
                <option value="Single">Single</option>
                <option value="Widow">Widow</option>
                <option value="Widower">Widower</option>
                <option value="Divorce">Divorce</option>
                </select>
            </div>

            <div className=''>
                <label className='font-bold text-xl' htmlFor="cast">Cast</label><br />
                <input
                type="text"
                id="cast"
                value={cast}
                onChange={(e) => setCast(e.target.value)}
                className='text-black p-1 rounded-md'
                />
            </div>
            </div>

            <button className='absolute top-36 right-64 p-3 bg-orange-300 rounded-md text-white font-bold' type="submit">Search</button>
        </form>

        {error && <p>{error}</p>}

        {profiles.length > 0 && (
            <div className='w-3/6 mx-auto absolute right-1/4 top-52 bg-white rounded-md '>
            <ul>
                {profiles.map((profile, index) => (
                <li className='border border-b-black' key={index}>
                    <div className='flex mx-5 p-3 space-x-2'>
                    <div>
                        <p>{profile.personalInformation.firstName} {profile.personalInformation.lastName}</p>
                    </div>
                    <div>
                        <button onClick={() => handleViewProfile(profile._id)}>View Profile</button>
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

    );
};

export default SearchProfile;
