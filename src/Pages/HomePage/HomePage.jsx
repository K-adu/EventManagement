import EventCard from '../../components/EventCard/EventCard';
import { fetchEvents } from '../../services/events/getEvents';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react'; // Import useState
import { addEvent } from '../../redux/eventInfoSlice';

export default function HomePage() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    async function fetchAndSetEvents() {
      try {
        const response = await fetchEvents();
        if (response) {
          await dispatch(addEvent(response));
        }
      } catch (error) {
        console.error('Error fetching events:', error);
      } finally {
        setLoading(false); // Set loading to false when the data is loaded or an error occurs
      }
    }

    fetchAndSetEvents();
  }, [dispatch]);

  return (
    <>
      <h1>hello world</h1>
    </>
  );
}
