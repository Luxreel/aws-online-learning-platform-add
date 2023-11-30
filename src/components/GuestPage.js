import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@aws-amplify/ui-react';


const GuestPage = () => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate('/home');
  };

  return (
    <div
      style={{
        backgroundColor: 'grey',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        alignItems: 'center',
        gap: 50,
      }}
    >
      <h1 style={{marginTop: 200}}>Welcome to the AWS Online Learning Platform!</h1>
      <Button onClick={handleSignIn} style={{ backgroundColor: 'rgb(13, 123, 148)', color: 'white' }}>🚀 Sign In</Button>
    </div>
  );
};

export default GuestPage;