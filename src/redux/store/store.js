import { configureStore } from '@reduxjs/toolkit';
import addQuestionSlice from '../features/addQuestionSlice';
import userSlice from '../features/userSlice';

const store = configureStore({
  reducer: {
    addQuestionReducer: addQuestionSlice,
    signIn: userSlice,
  },
});

export default store;
