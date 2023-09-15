import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function NavBarMethods() {
  return (
    <>
      <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
        <Link to="/create" style={{ textDecoration: 'none' }}>
          <Typography color="white" variant="h8" sx={{ margin: '0 10px' }}>
            Create New Event
          </Typography>
        </Link>
        <Link to="/createDiary" style={{ textDecoration: 'none' }}>
          <Typography color="white" variant="h8" sx={{ margin: '0 10px' }}>
            Describe your Day
          </Typography>
        </Link>
        <Link to="/Previous" style={{ textDecoration: 'none' }}>
          <Typography color="white" variant="h8" sx={{ margin: '0 10px' }}>
            Show Diary
          </Typography>
        </Link>
      </Box>
    </>
  );
}
