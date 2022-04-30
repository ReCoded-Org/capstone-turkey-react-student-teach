import { configureStore } from '@reduxjs/toolkit';
import addQuestionSlice from '../features/addQuestionSlice';
import singleQuestionSlice from '../features/singleQuestionSlice';

const store = configureStore({
  reducer: {
    addQuestionReducer: addQuestionSlice,
    singleQuestionReducer: singleQuestionSlice,
  },
});

export default store;
