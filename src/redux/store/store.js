import { configureStore } from '@reduxjs/toolkit';
import addQuestionSlice from '../features/addQuestionSlice';
import editProfileSlice from '../features/editProfileSlice';
import darkModeSlice from '../features/darkModeSlice';
import userSlice from '../features/userSlice';
import questionsSlice from '../features/questionsSlice';

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : {};

const userInfoFromSignUp = localStorage.getItem('signedUser')
  ? JSON.parse(localStorage.getItem('signedUser'))
  : {};

const initialState = {
  signIn: {
    user: { userInfo: userInfoFromStorage },
    signUp: { isSignedUp: userInfoFromSignUp },
  },
};

const store = configureStore({
  reducer: {
    addQuestionReducer: addQuestionSlice,
    editProfileReducer: editProfileSlice,
    darkModeReducer: darkModeSlice,
    signIn: userSlice,
    questions: questionsSlice,
  },
  preloadedState: initialState,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
