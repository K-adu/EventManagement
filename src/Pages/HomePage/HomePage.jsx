import EventCard from '../../components/EventCard/EventCard';
import { fetchEvents } from '../../services/events/getEvents';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { addEvent } from '../../redux/eventInfoSlice';
import './homepage.css';

export default function HomePage() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const renderValue = useSelector((state) => state.counter.render);
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
        setLoading(false);
      }
    }

    fetchAndSetEvents();
  }, [dispatch, renderValue]);
  let eventsInfo = useSelector((state) => state.eventInfo);
  return (
    <>
      <div className="event-card-container">
        {eventsInfo.map((event) => (
          <EventCard key={event._id} events={[event]} />
        ))}
      </div>
    </>
  );
}
