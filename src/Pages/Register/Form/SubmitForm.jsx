import { Button, Typography, Box } from '@mui/material';

export default function SubmitForm() {
  return (
    <Box sx={{ position: 'relative', textAlign: 'center' }}>
      <Typography variant="h2" color="primary">
        All Good? Click SignUp to register as a new user
      </Typography>
      <Box
        component="img"
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '450%',
          zIndex: -1,
        }}
        alt="The house from the offer."
        src="https://img.freepik.com/free-vector/cute-girl-writing-diary-sitting-desk-flat-illustration_74855-15392.jpg?w=360"
      />
      <Button
        variant="contained"
        color="primary"
        sx={{ position: 'relative', zIndex: 1, marginTop: '20px' }}
      >
        SignUp
      </Button>
    </Box>
  );
}
