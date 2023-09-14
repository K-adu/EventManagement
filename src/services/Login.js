import axios from 'axios';
export async function loginUser(data) {
  try {
    await axios.post('http://localhost:4000/auth/login', data, {
      withCredentials: true,
    });

  } catch (error) {
    console.log(error)
  }
}