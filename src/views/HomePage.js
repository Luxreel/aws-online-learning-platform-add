import React from 'react';
import { Amplify } from 'aws-amplify';
import { Authenticator, Button } from '@aws-amplify/ui-react';
import awsExports from '../aws-exports'
import '@aws-amplify/ui-react/styles.css'
import MenuListComposition from '../components/MenuListComposition';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

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
          {/* Top bar*/}
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            backgroundColor: 'white',
            height: 50,
            paddingLeft: 5,
            paddingRight: 10,
            alignItems: 'center',
            justifyContent: 'space-between',
            position: 'relative',
            zIndex: 1,
            boxShadow: 'rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px'
          }}>
            {/* Top bar - Left box*/}
            <div style={{
              display: 'flex',
              flexDirection: 'row',
              gap: 10,
              alignItems: 'center'
            }}>
              <IconButton color="primary" aria-label="toggle drawer">
                <MenuIcon />
              </IconButton>
              <img
                src='/woodle-logo.png'
                alt='Website logo'
                height='16%'
                width='16%'
              />
            </div>
            {/* Top bar - Right menu*/}
            <MenuListComposition />
          </div>
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
              <Button onClick={signOut}style={{ backgroundColor: 'rgb(13, 123, 148)', color: 'white' }}>👋 Sign out</Button>
          </div>
        </div>
      )}
    </Authenticator>
  );
};

export default HomePage;