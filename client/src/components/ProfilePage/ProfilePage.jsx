import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Profile from '../Profile/Profile.jsx';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
    const [data, setData] = useState(null);
    const [status, setStatus] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const accessToken = localStorage.getItem('accessToken');
                const response = await axios.get('/api/v1/form/profile', {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                });
                const profileData = response.data.data ? response.data.data[0] : null;
                setData(profileData);
                setStatus(profileData ? profileData.status : null); // Assuming status is part of the profile data
            } catch (error) {
                console.error('Error fetching user profile:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            {data ? <Profile data={data} status={status} /> : <p>Fill Form.....</p>}
        </div>
    );
};

export default ProfilePage;
