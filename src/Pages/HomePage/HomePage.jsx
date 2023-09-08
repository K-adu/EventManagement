import EventCard from '../../components/EventCard/EventCard';
import { useSelector } from 'react-redux';
export default function HomePage() {
  return (
    <>
      <EventCard />
      <EventCard />
    </>
  );
}
