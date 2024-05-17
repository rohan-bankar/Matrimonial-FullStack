import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const EmailVerify = () => {
  const { userId } = useParams();
  const [verificationStatus, setVerificationStatus] = useState();
  const navigate = useNavigate()

  const verifyEmail = () => {
    axios.get(`/api/v1/users/verify-email/${userId}`)
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

  const backgroundImage = 'url("/bg-2.jpg")'
  
  return (
    <div style={{backgroundImage,backgroundRepeat:'no-repeat', backgroundSize:'cover',height:'85vh'}}>
      {/* <h1>Email Verification</h1>
      {verificationStatus === 'Email verified successfully' ? (
        <p>Your email has been successfully verified.</p>
      ) : (
        <p>{verificationStatus}</p>
      )} */}
      <div className='mx-auto shadow-lg rounded-3xl overflow-hidden relative top-24 p-4 bg-yellow-100 bg-opacity-30' style={{width:'32%'}}>
        <p className='text-center font-bold text-xl'>Email is verify successfully</p><br />
        <button onClick={()=>navigate('/login')} className='p-3 my-3 border-none w-full rounded bg-orange-200 text-white font-bold'>Login</button>
      </div>
    </div>
  );
};

export default EmailVerify;
