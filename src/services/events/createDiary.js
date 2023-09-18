import axios from 'axios';

export async function createDiary(htmlContent) {
  try {
    const response = await axios.post('http://localhost:4000/events/createDiary', { htmlContent },{
      withCredentials: true
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}
