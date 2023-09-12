import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';

export default function EventCard(props) {
  console.log(props);

  return (
    <div>
      {props.events.flatMap((eventArray, index) =>
        eventArray.map((event) => (
          <Card key={event._id} sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Here will be the date of the event
              </Typography>
              <Typography variant="h5" component="div">
                {event.title}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {event.priority}
              </Typography>
              <Typography variant="body2">
                {event.description}
                <br />
                {event.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Edit</Button>
              <Button size="small">Delete</Button>
            </CardActions>
          </Card>
        ))
      )}
    </div>
  );
}
