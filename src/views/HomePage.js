import React from 'react';
import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import awsExports from '../aws-exports'
import '@aws-amplify/ui-react/styles.css'
import TopBar from '../components/TopBar';

Amplify.configure(awsExports)

const HomePage = () => {
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
            gap: 50,
          }}>
              <div style={{marginTop: 200, justifyContent: 'center'}}>Hello {user.username} (userId: {user.userId})!</div>
          </div>
        </div>
      )}
    </Authenticator>
  );
};

export default HomePage;