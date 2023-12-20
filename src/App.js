import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GuestPage from './views/GuestPage';
import HomePage from './views/HomePage';
import ProfilePage from './views/ProfilePage';
import SettingsPage from './views/SettingsPage';
import NotificationsPage from './views/NotificationsPage';
import CoursesCatalogPage from './views/CoursesCatalogPage';
import CoursePage from './views/CoursePage';
import ForumPage from './views/ForumPage';
import ContactPage from './views/ContactPage';
import { Authenticator } from '@aws-amplify/ui-react';

const App = () => {
  return (
    <Authenticator.Provider>
      <Router>
        <Routes>
          <Route path="/" element={<GuestPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/notifs" element={<NotificationsPage />} />
          <Route path="/courses" element={<CoursesCatalogPage />} />
          <Route path="/courses/details" element={<CoursePage />} />
          <Route path="/forum" element={<ForumPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Router>
    </Authenticator.Provider>
  );
};

export default App;