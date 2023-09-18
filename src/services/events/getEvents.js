import axios from 'axios';

export async function fetchEvents() {
  const response = await axios.get('http://localhost:4000/events/my', {
    withCredentials: true,
  });
  return response.data;
}