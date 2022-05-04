import { configureStore } from '@reduxjs/toolkit';
import addQuestionSlice from '../features/addQuestionSlice';
import singleQuestionSlice from '../features/singleQuestionSlice';
import editProfileSlice from '../features/editProfileSlice';
import darkModeSlice from '../features/darkModeSlice';
import userSlice from '../features/userSlice';
import questionsSlice from '../features/questionsSlice';
import fetchAllTutorsSlice from '../features/fetchAllTutorsSlice';
import fetchAllUsersSlice from '../features/fetchAllUsersSlice';
import uploadPicCloudinarySlice from '../features/uploadPicCloudinarySlice';
import editProfilePicSlice from '../features/editProfilePicSlice';
// eslint-disable-next-line import/no-named-as-default
import deleteQuestionSlice from '../features/deleteQuestionSlice';

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
    singleQuestionReducer: singleQuestionSlice,
    editProfileReducer: editProfileSlice,
    editProfilePicReducer: editProfilePicSlice,
    darkModeReducer: darkModeSlice,
    fetchAllTutorReducer: fetchAllTutorsSlice,
    fetchAllUsers: fetchAllUsersSlice,
    uploadPicCloudinaryReducer: uploadPicCloudinarySlice,
    deleteQuestionReducer: deleteQuestionSlice,
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
