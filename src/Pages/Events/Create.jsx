import React from 'react';
import { Formik, Form, Field, FieldArray } from 'formik';
import { Typography, Grid, Button, TextField, Box } from '@mui/material';

const eventsGroup = { title: '', description: '', priority: '' };

export default function Create() {
  return (
    <Formik
      initialValues={{
        events: [eventsGroup],
      }}
      onSubmit={async (values, actions) => {
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
                        size="small" // Make fields smaller
                      />
                    </Grid>
                    <Grid item xs={12} md={2}>
                      <Field
                        fullWidth
                        name={`events.${index}.priority`}
                        component={TextField}
                        label="Priority"
                        size="small" // Make fields smaller
                      />
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <Field
                        fullWidth
                        name={`events.${index}.description`}
                        component={TextField}
                        label="Description"
                        size="small" // Make fields smaller
                      />
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
                    {' '}
                    {/* Add margin-top */}
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
