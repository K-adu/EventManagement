import axios from 'axios';

export async function createNewUser(data) {
  try {
    console.log('this is from the service', data);

    const response = await axios.post('http://localhost:4000/auth/register', data);

    if (response.status === 201) {
      alert('Signup Successful');
    } else {
      alert('Unexpected response from the server');
    }
  } catch (error) {
    console.error(error);

    alert('An error occurred. Please try again later.');
  }
}
