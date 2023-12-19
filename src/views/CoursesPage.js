import React from 'react';
import TopBar from '../components/TopBar';

import CourseCard from '../components/CourseCard';

const CoursesPage = () => {
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
        <CourseCard />
      </div>
    </div>
  );
};

export default CoursesPage;