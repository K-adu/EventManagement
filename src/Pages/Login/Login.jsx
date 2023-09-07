import * as yup from 'yup';
import { useFormik } from 'formik';
import NavBar from '../../components/NavBar/NavBar';
import { TextField, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
export default function Login() {
  const ValidationSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
  });

  const Formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: ValidationSchema,
    onSubmit: (values) => {
      console.log('call axios in this part');
    },
  });

  return (
    <>
      <main>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '60vh', // Increase the height to vertically center the content better
          }}
        >
          <Typography variant="h3" style={{ marginBottom: '20px' }}>
            Login
          </Typography>
          <form
            onSubmit={Formik.handleSubmit}
            style={{ width: '100%', maxWidth: '300px' }}
          >
            <TextField
              fullWidth
              id="email"
              name="email"
              label="Email"
              value={Formik.values.email}
              onChange={Formik.handleChange}
              onBlur={Formik.handleBlur}
              error={Formik.touched.email && Boolean(Formik.errors.email)}
              style={{ marginBottom: '20px' }}
            />
            <TextField
              fullWidth
              id="password"
              name="password"
              label="Password"
              type="password"
              value={Formik.values.password}
              onChange={Formik.handleChange}
              onBlur={Formik.handleBlur}
              error={Formik.touched.password && Boolean(Formik.errors.password)}
              style={{ marginBottom: '20px' }}
            />
            <Button variant="contained" type="submit" style={{ width: '100%' }}>
              Login
            </Button>
          </form>
          <Link to="/register" style={{ marginTop: '10px' }}>
            <Typography variant="body2" color="primary">
              Don't have an account? Sign up here.
            </Typography>
          </Link>
        </div>
      </main>
    </>
  );
}
