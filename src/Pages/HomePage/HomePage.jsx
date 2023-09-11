import EventCard from '../../components/EventCard/EventCard';
import { fetchEvents } from '../../services/events/getEvents';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { addEvent, updateEvent } from '../../redux/eventInfoSlice';
export default function HomePage() {
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchAndSetEvents() {
      try {
        const response = await fetchEvents();
        if (response) {
          await dispatch(addEvent(response));
        }
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    }

    fetchAndSetEvents();
  }, []);

  return (
    <>
      <EventCard />
    </>
  );
}
