import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login/Login';
import { useEffect, useLayoutEffect } from 'react';
import Layout from './layout/Layout';
import Register from './Pages/Register/Register';
import HomePage from './Pages/HomePage/HomePage';
import Create from './Pages/Events/Create';
import { useDispatch, useSelector } from 'react-redux';
import { setLoggedInState } from './redux/LoggedInSlice';
import axios from 'axios';
import Cookies from 'js-cookie';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function userProfile() {
      const response = await axios.get('http://localhost:4000/user/profile', {
        withCredentials: true,
      });
      const data = {
        email: response.data.email,
        id: response.data.id,
        loggedIn: true,
      };

      // Store user information in localStorage
      localStorage.setItem('userInfo', JSON.stringify(data));
      dispatch(setLoggedInState(data));

      // Dispatch an action to set the logged-in state based on the presence of the cookie
    }
    const accessToken = Cookies.get('access_token'); // Read the 'access_token' cookie
    console.log(accessToken);
    if (accessToken) {
      // Fetch user profile data only if there's an access token

      userProfile();
    }

    // userProfile();
  }, [dispatch]);

  const userData = useSelector((state) => state.loggedIn);
  const loggedIn = userData.loggedIn;
  console.log('this is logged in', loggedIn);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {!loggedIn ? (
          <Route index element={<Login />} />
        ) : (
          <Route index element={<HomePage />} />
        )}
        <Route path="/register" element={<Register />} />
        <Route path="/create" element={<Create />} />
      </Route>
    </Routes>
  );
}

export default App;
