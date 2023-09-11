import axios from 'axios';
export async function createEvent(data) {
  try {
    await axios.post('http://localhost:4000/events/create', data, {
      withCredentials: true,
    });

  } catch (error) {
    console.log(error)
  }
}