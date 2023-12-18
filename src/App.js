import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GuestPage from './views/GuestPage';
import HomePage from './views/HomePage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GuestPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default App;