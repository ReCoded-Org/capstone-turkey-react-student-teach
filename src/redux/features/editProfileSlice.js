import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const editProfile = createAsyncThunk(
  'editProfileSlice/question-post',
  async ({ jwt, id, editFirstName, editLastName, editEmail, pic }) => {
    try {
      return fetch(`https://studentsteach.re-coded.com/api/tutors/${id}/edit`, {
        method: 'PUT',
        body: JSON.stringify({
          firstName: editFirstName,
          lastName: editLastName,
          email: editEmail,
          isTutor: true,
          avatar: pic,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          Authorization: `Bearer ${jwt}`,
        },
      })
        .then((res) => res.json())
        .then((data) => data);
    } catch (err) {
      return err;
    }
  },
);

const editProfileSlice = createSlice({
  name: 'question-post',
  initialState: {
    message: '',
    error: '',
    status: null,
  },
  extraReducers: {
    [editProfile.pending]: (state) => {
      state.status = 'loading';
    },
    [editProfile.fulfilled]: (state, { payload }) => {
      state.status = 'success';
      state.message = payload;
    },
    [editProfile.rejected]: (state, { payload }) => {
      state.status = 'failed';
      state.error = payload;
    },
  },
});

export default editProfileSlice.reducer;
