import axios from 'axios';

export async function fetchDiary() {
  const response = await axios.get('http://localhost:4000/events/myDiary', {
    withCredentials: true,
  });
  return response.data;
}