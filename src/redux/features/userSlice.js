import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const login = createAsyncThunk(
  'user/logIn',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      return fetch('https://studentsteach.re-coded.com/api/auth/signin', {
        method: 'POST',
        body: JSON.stringify({
          email,
          password,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

const userSlice = createSlice({
  name: 'signIn',
  initialState: {
    user: { status: '', userInfo: {} },
  },
  extraReducers: {
    [login.pending]: (state) => {
      state.user.status = 'loading';
    },
    [login.fulfilled]: (state, action) => {
      state.user.status = action.payload.status;
      state.user.userInfo = action.payload.statusText;
    },
    [login.rejected]: (state, action) => {
      state.user.status = 'error';
      state.user.userInfo = action.payload;
    },
  },
});

export default userSlice.reducer;
