import React, { useEffect, useState } from 'react';
import TopBar from '../components/TopBar';
import CourseCard from '../components/CourseCard';

const BACKEND_PORT = 3001;

const CoursesPage = () => {
  const [pythonCourses, setPythonCourses] = useState([]);
  const [reactjsCourses, setReactJSCourses] = useState([]);
  const [flutterCourses, setFlutterCourses] = useState([]);
  const [dockerKubernetesCourses, setDockerKubernetesCourses] = useState([]);
  const [excelCourses, setExcelCourses] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:${BACKEND_PORT}/python`)
      .then(response => response.json())
      .then(data => {
        setPythonCourses(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });

    fetch(`http://localhost:${BACKEND_PORT}/reactjs`)
      .then(response => response.json())
      .then(data => {
        setReactJSCourses(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });

    fetch(`http://localhost:${BACKEND_PORT}/flutter`)
      .then(response => response.json())
      .then(data => {
        setFlutterCourses(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });

    fetch(`http://localhost:${BACKEND_PORT}/docker_kubernetes`)
      .then(response => response.json())
      .then(data => {
        setDockerKubernetesCourses(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
    
    fetch(`http://localhost:${BACKEND_PORT}/excel`)
      .then(response => response.json())
      .then(data => {
        setExcelCourses(data);
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
          <CourseCard title='Python' data={pythonCourses}/>
          <CourseCard title='ReactJS' data={reactjsCourses}/>
          <CourseCard title='Flutter' data={flutterCourses}/>
          <CourseCard title='Docker Kubernetes' data={dockerKubernetesCourses}/>
          <CourseCard title='Excel' data={excelCourses}/>
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;