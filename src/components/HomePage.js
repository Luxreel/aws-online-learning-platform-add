import React from 'react';
import { Amplify } from 'aws-amplify';
import { Authenticator, Button } from '@aws-amplify/ui-react';
import awsExports from '../aws-exports'
import '@aws-amplify/ui-react/styles.css'

Amplify.configure(awsExports)

const HomePage = () => {
  return (
    <Authenticator
      variation="modal"
      hideSignUp={true}
    >
      {({ signOut, user }) => (
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
          <h1 style={{marginTop: 200}}>Hello {user.username} (userId: {user.userId})!</h1>
          <Button onClick={signOut}style={{ backgroundColor: 'rgb(13, 123, 148)', color: 'white' }}>👋 Sign out</Button>
        </div>
      )}
    </Authenticator>
  );
};

export default HomePage;