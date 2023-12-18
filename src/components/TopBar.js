import React from 'react';
import TemporaryDrawer from './TemporaryDrawer';
import MenuListComposition from './MenuListComposition';

export default function TopBar({ user, signOut }) {
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
        gap: '10px',
        alignItems: 'center'
      }}>
        <TemporaryDrawer />
        <img
          src='/woodle-logo.png'
          alt='Website logo'
          height='20px'
          width='110px'
        />
      </div>
      <div>
        <MenuListComposition user={user} signOut={signOut} />
      </div>
    </div>
  );
};