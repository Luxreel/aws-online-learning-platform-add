import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GuestPage from './views/GuestPage';
import HomePage from './views/HomePage';
import ProfilePage from './views/ProfilePage';
import { Authenticator } from '@aws-amplify/ui-react';

const App = () => {
  return (
    <Authenticator.Provider>
      <Router>
        <Routes>
          <Route path="/" element={<GuestPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </Router>
    </Authenticator.Provider>
  );
};

export default App;