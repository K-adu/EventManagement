import * as React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import EditEventDialog from './EditEventDialog';
import { useDispatch, useSelector } from 'react-redux';
import { editEvent } from '../../redux/editEventSlice';
import axios from 'axios';
import { incrementToRender } from '../../redux/counterSlice';
import SearchBar from '../../Pages/HomePage/searchbar';
export default function EventCard(props) {
  const dispatch = useDispatch();
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const eventEditHandler = (event) => {
    setSelectedEvent(event);
    setOpenEditDialog(true);
    dispatch(editEvent(event));
  };
  const eventDeleteHandler = async (event) => {
    const url = `http://localhost:4000/events/delete/${event._id}`;
    await axios.delete(url, {
      withCredentials: true,
    });
    dispatch(incrementToRender());
  };

  const [search, setSearch] = useState('');
  const handleSearch = (searchText) => {
    setSearch(searchText);
  };
  const closeEditDialog = () => {
    setOpenEditDialog(false);
    dispatch(incrementToRender());
  };

  return (
    <>
      <br />
      <SearchBar onSearch={handleSearch} />
      <div>
        <div
          style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}
        >
          {props.events.flatMap((eventArray, index) =>
            eventArray
              .filter((event) => {
                return search.toLowerCase() === ''
                  ? event
                  : event.title.toLowerCase().includes(search.toLowerCase());
              })
              .map((event) => (
                <Card key={event._id} sx={{ minWidth: 275 }}>
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    ></Typography>
                    <Typography variant="h5" component="div">
                      {event.title}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      Priority-{event.priority}
                    </Typography>
                    <Typography variant="body2">
                      {event.description}
                      <br />
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      value={event._id}
                      onClick={() => eventEditHandler(event)}
                    >
                      Edit
                    </Button>
                    <Button
                      size="small"
                      value={event._id}
                      onClick={() => eventDeleteHandler(event)}
                    >
                      Delete
                    </Button>
                  </CardActions>
                </Card>
              ))
          )}
          {selectedEvent && (
            <EditEventDialog
              open={openEditDialog}
              handleClose={closeEditDialog}
              event={selectedEvent}
            />
          )}
        </div>
      </div>
    </>
  );
}
