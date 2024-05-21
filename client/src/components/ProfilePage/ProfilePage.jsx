import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Profile from '../Profile/Profile.jsx';
import { useNavigate } from 'react-router-dom';
const ProfilePage = () => {
    const [data, setData] = useState(null);
    const navigate = useNavigate()
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
        <div className='h-screen'>
            {data ? <Profile data={data} /> : <p>Fill Form.....</p>}
            <button type='button' onClick={()=>navigate('/form')}>Click here</button>
        </div>
    );
};

export default ProfilePage;
