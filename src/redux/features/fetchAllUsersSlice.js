import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchAllUsers = createAsyncThunk(
  'users/fetchAllUser',
  async () => {
    try {
      return fetch('https://studentsteach.re-coded.com/api/tutors', {
        method: 'GET',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((res) => res.json())
        .then((data) => data);
    } catch (err) {
      return err;
    }
  },
);

const fetchAllUsersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    error: '',
    status: null,
  },
  extraReducers: {
    [fetchAllUsers.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchAllUsers.fulfilled]: (state, { payload }) => {
      state.status = 'success';
      state.users = payload;
    },
    [fetchAllUsers.rejected]: (state, { payload }) => {
      state.status = 'failed';
      state.error = payload;
    },
  },
});

export default fetchAllUsersSlice.reducer;
