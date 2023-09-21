import * as React from 'react';
import Box from '@mui/material/Box';
import { useSelector, useDispatch } from 'react-redux';
import Typography from '@mui/material/Typography';
import { Link } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { setLoggedInState } from '../../redux/LoggedInSlice';
export default function NavBarUserDetails(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userInfo = useSelector((value) => value.loggedIn);

  const handleLogout = async () => {
    const data = {
      email: '',
      id: '',
      loggedIn: false,
    };
    await axios
      .get('http://localhost:4000/auth/logout', {
        withCredentials: true,
      })
      .then(() => {
        dispatch(setLoggedInState(data));
        navigate('/');
      });
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
      <Typography>{userInfo.email}</Typography>
      <Link onClick={handleLogout} color="" underline="hover">
        LogOut
      </Link>
    </Box>
  );
}
