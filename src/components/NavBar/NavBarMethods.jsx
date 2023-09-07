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
        <Link to="/upcoming" style={{ textDecoration: 'none' }}>
          <Typography color="white" variant="h8" sx={{ margin: '0 10px' }}>
            Upcoming Events
          </Typography>
        </Link>
        <Link to="/Previous" style={{ textDecoration: 'none' }}>
          <Typography color="white" variant="h8" sx={{ margin: '0 10px' }}>
            Previous
          </Typography>
        </Link>
      </Box>
    </>
  );
}
