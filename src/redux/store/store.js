import { configureStore } from '@reduxjs/toolkit';
import addQuestionSlice from '../features/addQuestionSlice';
import editProfileSlice from '../features/editProfileSlice';
import userSlice from '../features/userSlice';

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : {};

const initialState = {
  signIn: { user: { userInfo: userInfoFromStorage } },
};

const store = configureStore({
  reducer: {
    addQuestionReducer: addQuestionSlice,
    editProfileReducer: editProfileSlice,
    signIn: userSlice,
  },
  preloadedState: initialState,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
