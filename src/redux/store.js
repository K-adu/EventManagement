import {configureStore} from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import userInfoReducer from './userInfoSlice'
import eventInfoReducer from './eventInfoSlice'
import loggedInReducer from './LoggedInSlice'
import editEventReducer from './editEventSlice'
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    userInfo: userInfoReducer,
    loggedIn: loggedInReducer,
    eventInfo: eventInfoReducer,
    editEvent: editEventReducer
  },
})