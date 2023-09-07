import React from 'react';
import { Formik, Form, Field, FieldArray } from 'formik';
import { Typography, Grid, Button, TextField, Box } from '@mui/material';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const eventsGroup = { title: '', description: '', priority: '', date: null };

export default function Create() {
  return (
    <Formik
      initialValues={{
        events: [eventsGroup],
      }}
      onSubmit={async (values) => {
        // Remove 'actions' argument
        console.log(values);
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {({ values }) => (
        <Form>
          <FieldArray name="events">
            {({ push, remove }) => (
              <Grid container spacing={2} sx={{ marginTop: 2, paddingX: 2 }}>
                <Grid item xs={12}>
                  <Typography variant="h6" component="h2">
                    Create New Event
                  </Typography>
                </Grid>
                {values.events.map((_, index) => (
                  <Grid container item key={index} spacing={2}>
                    <Grid item xs={4} md={2}>
                      <Field
                        fullWidth
                        name={`events.${index}.title`}
                        component={TextField}
                        label="Title"
                        size="small"
                      />
                    </Grid>
                    <Grid item xs={12} md={2}>
                      <Field
                        fullWidth
                        name={`events.${index}.priority`}
                        component={TextField}
                        label="Priority"
                        size="small"
                      />
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <Field
                        fullWidth
                        name={`events.${index}.description`}
                        component={TextField}
                        label="Description"
                        size="small"
                      />
                    </Grid>
                    <Grid item xs={12} md={2}>
                      {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                          label="Date"
                          value={values.events[index].date}
                          onChange={
                            (date) => (values.events[index].date = date) // Update the date directly
                          }
                          renderInput={(params) => (
                            <TextField {...params} size="small" />
                          )}
                        />
                      </LocalizationProvider> */}
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['DatePicker']}>
                          <DatePicker label="Date" />
                        </DemoContainer>
                      </LocalizationProvider>
                    </Grid>
                    {index > 0 && (
                      <Grid item xs={2}>
                        <Button
                          variant="outlined"
                          color="error"
                          onClick={() => remove(index)}
                        >
                          Delete
                        </Button>
                      </Grid>
                    )}
                  </Grid>
                ))}
                <Grid item xs={12}>
                  <Box display="flex" alignItems="center">
                    <Button
                      variant="outlined"
                      onClick={() => push(eventsGroup)}
                    >
                      Add Another Event
                    </Button>
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Box mt={2}>
                    <Button type="submit" variant="contained" color="primary">
                      Create Event
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            )}
          </FieldArray>
        </Form>
      )}
    </Formik>
  );
}
