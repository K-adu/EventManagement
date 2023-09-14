import EventCard from '../../components/EventCard/EventCard';
import { fetchEvents } from '../../services/events/getEvents';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react'; // Import useState
import { addEvent } from '../../redux/eventInfoSlice';
import './homepage.css';
export default function HomePage() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true); // Add loading state
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
        setLoading(false); // Set loading to false when the data is loaded or an error occurs
      }
    }

    fetchAndSetEvents();
  }, [dispatch, renderValue]);
  let eventsInfo = useSelector((state) => state.eventInfo);
  //eventsInfo = [...eventsInfo];
  // const eventsInfo = [
  //   {
  //     _id: 1,
  //     title: 'Event 1',
  //     priority: 'High',
  //     description: 'Description 1',
  //   },
  //   {
  //     _id: 2,
  //     title: 'Event 2',
  //     priority: 'Medium',
  //     description: 'Description 2',
  //   },
  //   // Add more events with unique _id values
  // ];
  return (
    <>
      <div className="event-card-container">
        {eventsInfo.map((event) => (
          <EventCard key={event._id} events={[event]} />
        ))}
        {/* <EventCard events={[eventsInfo]} /> */}
      </div>
    </>
  );
}
