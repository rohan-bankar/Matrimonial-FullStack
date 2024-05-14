import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Profile from '../Profile/Profile.jsx';

const ProfilePage = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const accessToken = localStorage.getItem('accessToken');
                const response = await axios.get('/api/v1/form/profile', {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                });
                setData(response.data.data[0]); 
                console.log(response.data.data);
            } catch (error) {
                console.error('Error fetching user profile:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            {data ? <Profile data={data} /> : <p>Loading...</p>}
        </div>
    );
};

export default ProfilePage;
