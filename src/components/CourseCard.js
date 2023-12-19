import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function CourseCard({}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/python.jpg"
          alt="python chapter image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Python
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Cultivate fundamental Python programming skills and dive into its syntax, data structures, and application in real-world scenarios.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Button size="small" color="primary">
          Learn
      </Button>
      </CardActions>
    </Card>
  );
}