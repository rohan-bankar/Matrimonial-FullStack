import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
library.add(faXmark)
const FriendRequests = () => {
    const [requests, setRequests] = useState([]);
    const [error, setError] = useState('');

    const getAccessToken = () => {
        return localStorage.getItem('accessToken');
    };

    useEffect(() => {
        const fetchRequests = async () => {
            try {
                const accessToken = getAccessToken();
                const response = await axios.get('/api/v1/request/requests', {
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    }
                });
                setRequests(response.data.data);
            } catch (error) {
                setError('Error fetching friend requests');
                console.error('Error fetching friend requests:', error);
            }
        };
        fetchRequests();
    }, []);

    const handleUpdateRequest = async (requestId, status) => {
        try {
            const accessToken = getAccessToken();
            const response = await axios.patch('/api/v1/request/update', {
                requestId,
                status
            }, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            });
            alert(response.data.message);
            setRequests((prevRequests) =>
                prevRequests.map((req) =>
                    req._id === requestId ? { ...req, status } : req
                )
            );
        } catch (error) {
            setError('Error updating friend request');
            console.error('Error updating friend request:', error);
        }
    };

    const handleRemoveProfile = (requestId) => {
        setRequests((prevRequests) => prevRequests.filter((req) => req._id !== requestId));
    };

    return (
        <div className='bg-orange-200 h-screen'>
                <h2 className='text-center font-bold text-white text-2xl relative top-20'>Friend Requests</h2>
            <div className='w-3/6 mx-auto absolute right-1/4 top-48 bg-white rounded-md '>
                {error && <p>{error}</p>}
                <ul>
                    {requests && requests.length > 0 ? (
                        requests.map((request) => (
                            <li className='border border-b-black' key={request._id}>
                                <div className='grid grid-cols-3 p-3 space-x-1'>
                                <p>{request.from.firstName} {request.from.lastName}</p>
                                {request.status !== 'accepted' && (
                                    <button className='bg-green-500 w-24 rounded-sm  text-white font-bold' onClick={() => handleUpdateRequest(request._id, 'accepted')}>Accept</button>
                                )}
                                {request.status !== 'declined' && (
                                    <button className='bg-red-500 w-24 rounded-sm  text-white font-bold' onClick={() => handleUpdateRequest(request._id, 'declined')}>Decline</button>
                                )}
                                <div>
                                    <FontAwesomeIcon onClick={() => handleRemoveProfile(request._id)} className=' cursor-pointer hover:bg-gray-200 rounded-full p-1' icon="fa-solid fa-xmark" size="xl" />
                                </div>
                                </div>
                            </li>
                        ))
                    ) : (
                        <p>No friend requests</p>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default FriendRequests;
