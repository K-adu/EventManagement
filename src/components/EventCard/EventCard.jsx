import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function EventCard() {
  return (
    <div>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Here will be the date of the event
          </Typography>
          <Typography variant="h5" component="div">
            Here will be the title of the event
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            the priority order
          </Typography>
          <Typography variant="body2">
            the description of the event along will other info will go here
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Edit</Button>
          <Button size="small">Delete</Button>
        </CardActions>
      </Card>
    </div>
  );
}
