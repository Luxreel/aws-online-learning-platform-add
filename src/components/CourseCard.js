import React from 'react';
import {
  Button,
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography
} from '@mui/material';

const images = {
  'Python': '/python.jpg',
  'ReactJS': '/reactjs.jpg',
  'Flutter': '/flutter.jpg',
  'Docker Kubernetes': '/docker_kubernetes.jpg',
  'Excel': '/excel.png'
}

const descriptions = {
  'Python': 'Cultivate fundamental Python programming skills and dive into its syntax, data structures, and application in real-world scenarios.',
  'ReactJS': 'Master React.js fundamentals and build dynamic, interactive web applications through comprehensive hands-on learning and real-world projects.',
  'Flutter': 'Embark on a comprehensive journey to master Flutter, developing cross-platform mobile apps with fluid UIs and rich user experiences using Dart programming and cutting-edge development techniques.',
  'Docker Kubernetes': 'Explore Docker and Kubernetes in-depth, learning containerization, orchestration, and scalable deployment strategies to manage and scale applications seamlessly across diverse environments.',
  'Excel': 'Unlock the full potential of Excel with comprehensive training, mastering formulas, data analysis, and automation techniques to streamline tasks and maximize productivity.'
}

export default function CourseCard({ title, data }) {
  return (
    <Card sx={{ maxWidth: 345, minWidth: 300, display: 'flex', flexDirection: 'column' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={images[title]}
          alt={`${title} chapter image`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {descriptions[title]}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{ marginTop: 'auto' }}>
      <Button size="small" color="primary">
          Learn
      </Button>
      </CardActions>
    </Card>
  );
}