import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login/Login';
import { useLayoutEffect } from 'react';
import Layout from './layout/Layout';
import Register from './Pages/Register/Register';
import HomePage from './Pages/HomePage/HomePage';
import Create from './Pages/Events/Create';
import { useDispatch, useSelector } from 'react-redux';
import { setLoggedInState } from './redux/LoggedInSlice';
import axios from 'axios';
import Cookies from 'js-cookie';
import CreateDiary from './Pages/Diary/createDiary';
import DisplayDiary from './Pages/Diary/displayDiary';

function App() {
  //const accessToken = Cookies.get('access_token');
  const dispatch = useDispatch();

  useLayoutEffect(() => {
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

    if (accessToken) {
      // Fetch user profile data only if there's an access token

      userProfile();
    }

    // userProfile();
  }, [dispatch]);
  const userData = useSelector((state) => state.loggedIn);
  const loggedIn = userData.loggedIn;

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {loggedIn ? (
          <Route index element={<HomePage />} />
        ) : (
          <Route index element={<Login />} />
        )}
        <Route path="/register" element={<Register />} />
        <Route path="/create" element={<Create />} />
        <Route path="/createDiary" element={<CreateDiary />} />
        <Route path="/showDiary" element={<DisplayDiary />} />
      </Route>
    </Routes>
  );
}

export default App;
