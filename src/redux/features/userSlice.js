import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { fetchAllTutorSlice } from './fetchAllTutorsSlice';

export const login = createAsyncThunk(
  'user/logIn',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const data = fetch('https://studentsteach.re-coded.com/api/auth/signin', {
        method: 'POST',
        body: JSON.stringify({
          email,
          password,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }).then((res) => res.json());
      // dispatch(fetchAllTutorSlice({ userEmail: email }));
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

export const signUp = createAsyncThunk(
  'user/signUp',
  async (
    { firstName, lastName, email, password, isTutor = true },
    { rejectWithValue },
  ) => {
    try {
      const data = fetch('https://studentsteach.re-coded.com/api/auth/signup', {
        method: 'POST',
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          password,
          isTutor,
        }),
        headers: { 'Content-Type': 'application/json' },
      }).then((res) => res.json());
      // setTimeout(() => {
      //   dispatch(fetchAllTutorSlice({ userEmail: email }));
      // }, 1000);
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

export const passToLocalStorage = (state, action) => {
  return (
    !state.user.userInfo.error &&
    localStorage.setItem('userInfo', JSON.stringify(action.payload))
  );
};

export const passSignedUpUserToStorage = (state, action) => {
  return (
    !state.signUp.isSignedUp.error &&
    localStorage.setItem('signedUser', JSON.stringify(action.payload))
  );
};

const userSlice = createSlice({
  name: 'signIn',
  initialState: {
    user: { status: '', userInfo: {} },
    signUp: { status: '', isSignedUp: {} },
  },
  reducers: {},
  extraReducers: {
    [login.pending]: (state) => {
      state.user.status = 'loading';
    },
    [login.fulfilled]: (state, action) => {
      state.user.status = 'success';
      state.user.userInfo = action.payload;
      passToLocalStorage(state, action);
    },
    [login.rejected]: (state, action) => {
      state.user.status = 'error';
      state.user.userInfo = action.payload;
    },
    [signUp.pending]: (state) => {
      state.signUp.status = 'loading';
    },
    [signUp.fulfilled]: (state, action) => {
      state.signUp.status = 'success';
      state.signUp.isSignedUp = action.payload;
      passSignedUpUserToStorage(state, action);
    },
    [signUp.rejected]: (state, action) => {
      state.signUp.status = 'error';
      state.signUp.isSignedUp = action.payload;
    },
  },
});

export default userSlice.reducer;
