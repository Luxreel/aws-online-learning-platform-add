import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import TopBar from '../components/TopBar';
import { BACKEND_PORT } from '../constants/apiRoutes';

const CoursePage = () => {
  const [courses, setCourses] = useState([]);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const courseName = searchParams.get('name');

  useEffect(() => {
    fetch(`http://localhost:${BACKEND_PORT}/${courseName}`)
      .then(response => response.json())
      .then(data => {
        setCourses(data);
        console.log(data)
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

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
        <h1>Work In Progress - {courseName}</h1>
      </div>
    </div>
  );
};

export default CoursePage;