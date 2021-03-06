import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchAllTutorSlice = createAsyncThunk(
  'fetchAllTutorSliceSlice/question-post',
  async ({ userId }, { rejectWithValue }) => {
    try {
      const users = fetch('https://studentsteach.re-coded.com/api/tutors');
      const data = await (await users).json();
      const wantedUser = data.filter((user) =>
        user.id === userId ? user : false,
      );

      return wantedUser[0];
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

const fetchAllTutorSliceSlice = createSlice({
  name: 'question-post',
  initialState: {
    user: [],
    error: '',
    status: null,
  },
  extraReducers: {
    [fetchAllTutorSlice.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchAllTutorSlice.fulfilled]: (state, { payload }) => {
      state.status = 'success';
      state.user = payload;
    },
    [fetchAllTutorSlice.rejected]: (state, { payload }) => {
      state.status = 'failed';
      state.error = payload;
    },
  },
});

export default fetchAllTutorSliceSlice.reducer;
