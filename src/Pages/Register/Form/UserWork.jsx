import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { TextField, Button, Typography, Grid } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { updateUserInfo } from '../../../redux/userInfoSlice';
import { increment } from '../../../redux/counterSlice';
export default function UserWork() {
  const dispatch = useDispatch();
  const activeStepIndex = useSelector((state) => state.counter.value);
  const ValidationSchema = yup.object().shape({
    country: yup.string().required('Country is required'),
    occupation: yup.string().required('occupation is required'),
    age: yup.number().required('age is required'),
  });

  const Formik = useFormik({
    initialValues: {
      country: '',
      occupation: '',
      age: '',
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
          Work Details
        </Typography>
      </Grid>
      <Grid item>
        <form onSubmit={Formik.handleSubmit} style={{ width: '300px' }}>
          <TextField
            fullWidth
            id="country"
            name="country"
            label="country"
            value={Formik.values.country}
            onChange={Formik.handleChange}
            onBlur={Formik.handleBlur}
            error={Formik.touched.country && Boolean(Formik.errors.country)}
            helperText={Formik.touched.country && Formik.errors.country}
            style={{ marginBottom: '20px' }} // Add margin to create space
          />
          <TextField
            fullWidth
            id="occupation"
            name="occupation"
            label="occupation"
            value={Formik.values.occupation}
            onChange={Formik.handleChange}
            onBlur={Formik.handleBlur}
            error={
              Formik.touched.occupation && Boolean(Formik.errors.occupation)
            }
            helperText={Formik.touched.occupation && Formik.errors.occupation}
            style={{ marginBottom: '20px' }} // Add margin to create space
          />
          <TextField
            fullWidth
            id="age"
            name="age"
            label="age"
            value={Formik.values.age}
            onChange={Formik.handleChange}
            onBlur={Formik.handleBlur}
            error={Formik.touched.age && Boolean(Formik.errors.age)}
            helperText={Formik.touched.age && Formik.errors.age}
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
