import axios from 'axios';

export async function createNewUser(data) {

  try {

    return await axios.post('http://localhost:4000/auth/register', data);


  } catch (error) {
    console.error(error);

    alert('An error occurred. Please try again later.');
  }
}
