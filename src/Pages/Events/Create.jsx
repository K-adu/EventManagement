import React from 'react';
import { Formik, Form, Field, FieldArray } from 'formik';
import { Typography, Grid, Button, TextField, Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { createEvent } from '../../services/events/createEvent';

const eventsGroup = { title: '', description: '', priority: '' };
export default function Create() {
  const sessionUserInfo = useSelector((state) => state.loggedIn);
  const initialEvents = [
    {
      ...eventsGroup,
      postedBy: sessionUserInfo.id,
    },
    // Add more events as needed
  ];
  console.log('this issession userInfo', sessionUserInfo);
  return (
    <Formik
      initialValues={{
        events: initialEvents,
      }}
      onSubmit={async (values) => {
        //values.id = sessionUserInfo.id;
        // console.log(values);
        await createEvent(values);
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
                        as={TextField} // Use 'as' prop to specify the component
                        label="Title"
                        size="small"
                      />
                    </Grid>
                    <Grid item xs={12} md={2}>
                      <Field
                        fullWidth
                        name={`events.${index}.priority`}
                        as={TextField}
                        label="Priority"
                        size="small"
                      />
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <Field
                        fullWidth
                        name={`events.${index}.description`}
                        as={TextField}
                        label="Description"
                        size="small"
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
                      onClick={() =>
                        push({
                          ...eventsGroup,
                          postedBy: sessionUserInfo.id,
                        })
                      }
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
