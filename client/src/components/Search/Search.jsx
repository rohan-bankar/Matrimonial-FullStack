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
        <div>
            <h1>Search Profiles</h1>
            <form onSubmit={handleSearch}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="cast">Cast:</label>
                    <input
                        type="text"
                        id="cast"
                        value={cast}
                        onChange={(e) => setCast(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="gender">Gender:</label>
                    <select
                        id="gender"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                    >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="maritalStatus">Marital Status:</label>
                    <select 
                        id="maritalStatus"
                        value={maritalStatus}
                        onChange={(e)=> setMaritalStatus(e.target.value)}
                        >
                        <option value="">Select Status</option>
                        <option value="Single">Single</option>
                        <option value="Widow">Widow</option>
                        <option value="Widower">Widower</option>
                        <option value="Divorce">Divorce</option>
                    </select>
                </div>
                <button type="submit">Search</button>
            </form>

            {error && <p>{error}</p>}

            {profiles.length > 0 && (
                <div>
                    <h2>Search Results:</h2>
                    <ul>
                        {profiles.map((profile, index) => (
                            <li key={index}>
                                <p>Name: {profile.personalInformation.firstName} {profile.personalInformation.lastName}</p>
                                <p>Gender: {profile.personalInformation.gender}</p>
                                <p>Cast: {profile.personalInformation.cast}</p>
                                <p>Birthday: {new Date(profile.personalInformation.birthday).toLocaleDateString()}</p>
                                <button onClick={() => handleViewProfile(profile._id)}>View Profile</button>
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
    );
};

export default SearchProfile;
