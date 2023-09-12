import * as React from 'react';
import Box from '@mui/material/Box';
import { useSelector, useDispatch } from 'react-redux';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'; // Import your action here
import { Link } from '@mui/material';
import axios from 'axios';
export default function NavBarUserDetails(props) {
  const userInfo = useSelector((value) => value.loggedIn);
  //const dispatch = useDispatch();

  const handleLogout = async () => {
    await axios.post('http://localhost:4000/auth/logout');
    // Dispatch an action to set the logged-in state to false or perform other logout actions
    //dispatch(setLoggedInState(false)); // Example action to set logged-in state to false
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
      <Typography>{userInfo.email}</Typography>
      <Link
        onClick={handleLogout}
        color=""
        underline="hover"
        // style={{ cursor: 'pointer' }}
      >
        LogOut
      </Link>
    </Box>
  );
}
