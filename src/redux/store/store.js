import { configureStore } from '@reduxjs/toolkit';
import addQuestionSlice from '../features/addQuestionSlice';

const store = configureStore({
  reducer: {
    addQuestionReducer: addQuestionSlice,
  },
});

export default store;
