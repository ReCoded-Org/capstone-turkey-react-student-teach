import { configureStore } from '@reduxjs/toolkit';
import addQuestionSlice from '../features/addQuestionSlice';
import editProfileSlice from '../features/editProfileSlice';

const store = configureStore({
  reducer: {
    addQuestionReducer: addQuestionSlice,
    editProfileReducer: editProfileSlice,
  },
});

export default store;
