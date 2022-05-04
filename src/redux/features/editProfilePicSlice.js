import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const editProfilePic = createAsyncThunk(
  'editProfilePicSlice/question-post',
  async ({ userJwt, userId, picUrl }) => {
    try {
      return fetch(
        `https://studentsteach.re-coded.com/api/tutors/${userId}/edit`,
        {
          method: 'PUT',
          body: JSON.stringify({
            avatar: picUrl,
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
            Authorization: `Bearer ${userJwt}`,
          },
        },
      )
        .then((res) => res.json())
        .then((data) => data);
    } catch (err) {
      return err;
    }
  },
);

const editProfilePicSlice = createSlice({
  name: 'question-post',
  initialState: {
    message: [],
    error: '',
    status: null,
  },
  extraReducers: {
    [editProfilePic.pending]: (state) => {
      state.status = 'loading';
    },
    [editProfilePic.fulfilled]: (state, { payload }) => {
      state.status = 'success';
      state.message.push(payload);
    },
    [editProfilePic.rejected]: (state, { payload }) => {
      state.status = 'failed';
      state.error = payload;
    },
  },
});

export default editProfilePicSlice.reducer;
