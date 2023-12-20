import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import TopBar from '../components/TopBar';
import VideoPlayer from '../components/VideoPlayer'
import { BACKEND_PORT, CLUSTER_IP } from '../constants/apiRoutes';
import { Pagination, Skeleton } from '@mui/material';

const CoursePage = () => {
  const [courses, setCourses] = useState([{
    title: 'Loading...',
    youtubeEmbedId: 'initial-id'
  }]);
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const courseName = searchParams.get('name');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://${CLUSTER_IP}:${BACKEND_PORT}/${courseName}`)
        const jsonResp = await response.json();
        setCourses(jsonResp);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    }

    fetchData();
  }, [courseName]);

  const handleChange = (_, value) => {
    setPage(value);
  };
  console.log('data:', courses)

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
        gap: 50
      }}>
        <div style={{
          borderRadius: 15,
          boxShadow: 'blue 0px 0px 0px 2px inset, rgb(255, 255, 255) 10px -10px 0px -3px, rgb(31, 193, 27) 10px -10px, rgb(255, 255, 255) 20px -20px 0px -3px, rgb(255, 217, 19) 20px -20px, rgb(255, 255, 255) 30px -30px 0px -3px, rgb(255, 156, 85) 30px -30px, rgb(255, 255, 255) 40px -40px 0px -3px, rgb(255, 85, 85) 40px -40px'
        }}>
          {loading ?
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 20,
              padding: 40,
            }}>
              <Skeleton variant="rectangular" width={600} height={25} />
              <Skeleton variant="rectangular" width={672} height={378} />
              <Skeleton variant="rectangular" width={400} height={20} />
            </div>
            : 
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 50,
              padding: 40
            }}>
              <VideoPlayer title={courses[page - 1].title} embedId={courses[page - 1].youtubeEmbedId} />
              <Pagination count={courses.length} page={page} onChange={handleChange} color="secondary" />
            </div>}
        </div>
      </div>
    </div>
  );
};

export default CoursePage;