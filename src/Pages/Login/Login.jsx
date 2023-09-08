import * as yup from 'yup';
import { useFormik } from 'formik';
import axios from 'axios';
import NavBar from '../../components/NavBar/NavBar';
import { TextField, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { loginUser } from '../../services/Login';
import { useNavigate } from 'react-router-dom';
export default function Login() {
  const navigate = useNavigate();
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
    onSubmit: async (values) => {
      try {
        await loginUser(values);
        const response = await axios.get('http://localhost:4000/user/profile', {
          withCredentials: true,
        });
        localStorage.setItem('userInfo', JSON.stringify(response.data));

        alert('user logged in success');
        navigate('/homepage');
      } catch (error) {
        console.log(error);
      }
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
