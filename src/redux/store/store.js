import { configureStore } from '@reduxjs/toolkit';
import addQuestionSlice from '../features/addQuestionSlice';
import editProfileSlice from '../features/editProfileSlice';
import darkModeSlice from '../features/darkModeSlice';
import userSlice from '../features/userSlice';
import fetchAllTutorsSlice from '../features/fetchAllTutorsSlice';
import uploadPicCloudinarySlice from '../features/uploadPicCloudinarySlice';

const userAvatar = localStorage.getItem('userPic')
  ? JSON.parse(localStorage.getItem('userPic'))
  : {};
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
    userPic: { pic: userAvatar },
  },
};

const store = configureStore({
  reducer: {
    addQuestionReducer: addQuestionSlice,
    editProfileReducer: editProfileSlice,
    darkModeReducer: darkModeSlice,
    fetchAllTutorReducer: fetchAllTutorsSlice,
    uploadPicCloudinaryReducer: uploadPicCloudinarySlice,
    signIn: userSlice,
  },
  preloadedState: initialState,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
