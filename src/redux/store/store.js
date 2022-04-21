import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../features/userSlice';

const store = configureStore({
  reducer: {
    signIn: userSlice,
  },
});

export default store;
