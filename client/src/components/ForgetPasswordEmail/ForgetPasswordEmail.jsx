// src/ForgetPasswordForm.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const ForgetPasswordForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://matrimonial-server.onrender.com/api/v1/users/forget-password', { email });
      setMessage(response.data.message);
      setError('');
    } catch (err) {
      if (err.response) {
        setError(err.response.data.message);
      } else {
        setError('Something went wrong. Please try again later.');
      }
      setMessage('');
    }
  };

  const backgroundImage = 'url("/bg-2.jpg")'

  return (
    <div style={{backgroundImage,backgroundRepeat:'no-repeat', backgroundSize:'cover',height:'85vh'}}>
      <div className='mx-auto shadow-lg rounded-3xl overflow-hidden relative top-24 p-4 bg-yellow-100 bg-opacity-30' style={{width:'32%'}}>
      <h2 className='text-center font-bold text-xl text-white'>Forget Password</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email" className='text-white font-bold'>Email</label><br />
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='border-none  rounded p-3 w-full mb-3'
            required
          />
        </div>
        <button type="submit" className='p-3 my-3 border-none w-full rounded bg-orange-200 text-white font-bold'>Submit</button><br />
        <button onClick={()=>navigate('/login')} className='p-3 my-3 border-none w-full rounded bg-orange-200 text-white font-bold'>Login</button>
      </form>
      {message && <p className='font-bold'>{message}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
    </div>
  );
};

export default ForgetPasswordForm;
