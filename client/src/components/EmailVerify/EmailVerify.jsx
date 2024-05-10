import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const EmailVerify = () => {
  const { userId } = useParams();
  const [verificationStatus, setVerificationStatus] = useState();

  const verifyEmail = () => {
    axios.get(`/api/v1/verify-email/${userId}`)
      .then(response => {
        setVerificationStatus(response.data.message);
      })
      .catch(error => {
        console.error('Error verifying email:', error);
        setVerificationStatus('Error verifying email');
      });
  };

  // Call the function when the component mounts
  useEffect(() => {
    verifyEmail();
  }, [userId]);

  return (
    <div>
      <h1>Email Verification</h1>
      {verificationStatus === 'Email verified successfully' ? (
        <p>Your email has been successfully verified.</p>
      ) : (
        <p>{verificationStatus}</p>
      )}
    </div>
  );
};

export default EmailVerify;
