import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { TextField, Button, Typography, Grid } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { updateUserInfo } from '../../../redux/userInfoSlice';
import { increment } from '../../../redux/counterSlice';
export default function UserInfo() {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.userInfo);
  let activeStepIndex = useSelector((state) => state.counter.value);
  const ValidationSchema = yup.object().shape({
    firstName: yup.string().required('First Name is required'),
    lastName: yup.string().required('Last Name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string().required('Password is required'),
  });

  const Formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
    validationSchema: ValidationSchema,
    onSubmit: (values) => {
      console.log('handling submit');
      dispatch(updateUserInfo(values));
      dispatch(increment());
    },
  });

  return (
    <Grid
      container
      spacing={2}
      direction="column"
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: '60vh' }}
    >
      <Grid item>
        <Typography variant="h4" gutterBottom>
          User Information
        </Typography>
      </Grid>
      <Grid item>
        <form onSubmit={Formik.handleSubmit} style={{ width: '300px' }}>
          <TextField
            fullWidth
            id="firstName"
            name="firstName"
            label="First Name"
            value={Formik.values.firstName}
            onChange={Formik.handleChange}
            onBlur={Formik.handleBlur}
            error={Formik.touched.firstName && Boolean(Formik.errors.firstName)}
            helperText={Formik.touched.firstName && Formik.errors.firstName}
            style={{ marginBottom: '20px' }} // Add margin to create space
          />
          <TextField
            fullWidth
            id="lastName"
            name="lastName"
            label="Last Name"
            value={Formik.values.lastName}
            onChange={Formik.handleChange}
            onBlur={Formik.handleBlur}
            error={Formik.touched.lastName && Boolean(Formik.errors.lastName)}
            helperText={Formik.touched.lastName && Formik.errors.lastName}
            style={{ marginBottom: '20px' }} // Add margin to create space
          />
          <TextField
            fullWidth
            id="email"
            name="email"
            label="Email"
            value={Formik.values.email}
            onChange={Formik.handleChange}
            onBlur={Formik.handleBlur}
            error={Formik.touched.email && Boolean(Formik.errors.email)}
            helperText={Formik.touched.email && Formik.errors.email}
            style={{ marginBottom: '20px' }} // Add margin to create space
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
            helperText={Formik.touched.password && Formik.errors.password}
            style={{ marginBottom: '20px' }} // Add margin to create space
          />
          <Button
            color="primary"
            variant="contained"
            fullWidth
            type="submit"
            style={{ marginTop: '20px' }}
          >
            Next
          </Button>
        </form>
      </Grid>
    </Grid>
  );
}
