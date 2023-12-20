import React, { useEffect, useState } from 'react';
import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import awsExports from '../aws-exports'
import '@aws-amplify/ui-react/styles.css'
import TopBar from '../components/TopBar';
import { BACKEND_PORT, CLUSTER_IP } from '../constants/apiRoutes';

Amplify.configure(awsExports)

const HomePage = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(`http://${CLUSTER_IP}:${BACKEND_PORT}/`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.text();
      setMessage(data);
    } catch (error) {
      console.error('Error:', error);
      setMessage('Error fetching data');
    }
  };

  return (
    <Authenticator
      variation="modal"
      hideSignUp={true}
    >
      {({ signOut, user }) => (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100vh'
        }}>
          <TopBar />
          {/* Rest of the page*/}
          <div style={{
            display: 'flex',
            flex: 1,
            backgroundColor: 'white',
            flexDirection: 'column',
            alignItems: 'center',
            paddingTop: 200
          }}>
              <h1>👋 Hello {user.username}!</h1>
              <p>(userId: {user.userId})!</p>
              <p>{message}</p>
          </div>
        </div>
      )}
    </Authenticator>
  );
};

export default HomePage;