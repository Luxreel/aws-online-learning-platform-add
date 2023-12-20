import React from 'react';
import { useNavigate } from 'react-router-dom';
import TemporaryDrawer from './TemporaryDrawer';
import MenuPopupState from './MenuPopupState';
import { useAuthenticator } from '@aws-amplify/ui-react';

export default function TopBar() {
  const { user, signOut } = useAuthenticator((context) => [context.user]);
  let navigate = useNavigate()

  function handleClickOnLogo() {
    navigate('/home');
  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      backgroundColor: 'white',
      height: '50px',
      paddingLeft: '10px',
      paddingRight: '10px',
      alignItems: 'center',
      justifyContent: 'space-between',
      position: 'fixed',
      width: '100%',
      top: 0,
      zIndex: 1000,
      boxShadow: 'rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px'
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        gap: 6,
        alignItems: 'center'
      }}>
        <TemporaryDrawer navigate={navigate} user={user} signOut={signOut}/>
        <div style={{
          fontSize: 23,
          paddingBottom: 3
        }}>📚</div>
        <img
          src='/woodle-logo.png'
          alt='Website logo'
          height='18px'
          width='95px'
          onClick={handleClickOnLogo}
          style={{ cursor: 'pointer' }}
        />
        
      </div>
      <div>
        <MenuPopupState navigate={navigate} user={user} signOut={signOut} />
      </div>
    </div>
  );
};