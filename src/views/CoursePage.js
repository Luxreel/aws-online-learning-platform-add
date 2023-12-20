import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import TopBar from '../components/TopBar';
import VideoPlayer from '../components/VideoPlayer'
import { BACKEND_PORT } from '../constants/apiRoutes';
import { Skeleton } from '@mui/material';

const CoursePage = () => {
  const [courses, setCourses] = useState({
    title: 'Loading...',
    youtubeEmbedId: 'initial-id'
  });
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const courseName = searchParams.get('name');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:${BACKEND_PORT}/${courseName}`)
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
        {loading ? <Skeleton variant="rectangular" width={210} height={118} />
        : <VideoPlayer title={courses[0].title} embedId={courses[0].youtubeEmbedId} />}
      </div>
    </div>
  );
};

export default CoursePage;