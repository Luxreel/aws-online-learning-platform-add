import React from 'react';
import TopBar from '../components/TopBar';
import MuiAlert from '@mui/material/Alert'

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

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
        paddingTop: 90,
        paddingLeft: 70,
        paddingRight: 70,
        gap: 20
      }}>
        <h1>Notifications</h1>
        <Alert severity="success">You have successfully completed the Python course!</Alert>
        <Alert severity="error">Please fill in your missing information on your profile.</Alert>
        <Alert severity="warning">You have an Excel assignment due on the 21th of December.</Alert>
        <Alert severity="info">You haven't completed the Flutter course yet.</Alert>
        <Alert severity="info">You haven't completed the ReactJS course yet.</Alert>
        <Alert severity="info">You haven't completed the Docker Kubernetes course yet.</Alert>
      </div>
    </div>
  );
};

export default NotificationsPage;