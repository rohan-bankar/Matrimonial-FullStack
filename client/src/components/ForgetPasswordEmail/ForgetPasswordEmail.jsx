// src/ForgetPasswordForm.js
import React, { useState } from 'react';
import axios from 'axios';

const ForgetPasswordForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/v1/users/forget-password', { email });
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

  return (
    <div>
      <h2>Forget Password</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {message && <p>{message}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default ForgetPasswordForm;
