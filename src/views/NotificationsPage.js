import React from 'react';
import TopBar from '../components/TopBar';

const NotificationsPage = () => {
  return (
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
            justifyContent: 'center',
            gap: 50,
      }}>
        <h1>Work In Progress - Notifications</h1>
      </div>
    </div>
  );
};

export default NotificationsPage;