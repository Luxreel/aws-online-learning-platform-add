import React from 'react';
import TopBar from '../components/TopBar';
import CourseCard from '../components/CourseCard';

const CoursesCatalogPage = () => {
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
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 60,
      }}>
        <div style={{
          display: 'flex',
          flexFlow: 'row wrap',
          overflowX: 'hidden',
          overflowY: 'auto',
          gap: 70,
          paddingTop: 70,
          paddingLeft: 80,
          paddingBottom: 50
        }}>
          <CourseCard title='Python'/>
          <CourseCard title='ReactJS'/>
          <CourseCard title='Flutter'/>
          <CourseCard title='Docker Kubernetes'/>
          <CourseCard title='Excel'/>
        </div>
      </div>
    </div>
  );
};

export default CoursesCatalogPage;