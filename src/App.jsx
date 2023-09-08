import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login/Login';
import { useEffect } from 'react';
import Layout from './layout/Layout';
import Register from './Pages/Register/Register';
import HomePage from './Pages/HomePage/HomePage';
import Create from './Pages/Events/Create';
import { useDispatch, useSelector } from 'react-redux';
import { setLoggedInState } from './redux/LoggedInSlice';
function App() {
  const dispatch = useDispatch();
  let data;
  useEffect(() => {
    const storedData = localStorage.getItem('userInfo');
    if (storedData) {
      data = JSON.parse(storedData);
      dispatch(setLoggedInState(data));
    }
  }, [dispatch]);
  const userData = useSelector((state) => state.loggedIn);
  console.log(userData);
  const loggedIn = userData.loggedIn;
  console.log('checking', loggedIn);

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
