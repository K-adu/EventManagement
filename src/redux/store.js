import {configureStore} from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import userInfoReducer from './userInfoSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    userInfo: userInfoReducer
  },
})