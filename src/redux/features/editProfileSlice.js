import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const editProfile = createAsyncThunk(
  'editProfileSlice/question-post',
  async ({ editFirstName, editLastName, picture }) => {
    try {
      return fetch(
        'https://studentsteach.re-coded.com/api/tutors/62646849c877d83a2421ef8b/edit',
        {
          method: 'PUT',
          body: JSON.stringify({
            firstName: editFirstName,
            lastName: editLastName,
            // email: editEmail,
            isTutor: true,
            avatar: picture,
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdHVkZW50Ijp7Il9pZCI6IjYyNjQ2ODQ5Yzg3N2Q4M2EyNDIxZWY4YiIsInVzZXJuYW1lIjoiZG9nZ2llc3RyaW5nNCIsImZpcnN0TmFtZSI6ImRvZ2dpZSIsImxhc3ROYW1lIjoic3RyaW5nIiwiaXNTaWduVXBXaXRoR29vZ2xlIjpmYWxzZSwicGFzc3dvcmRIYXNoIjoiJDJiJDEwJFcyYkFVVVZuOUkyQUh4NGw4QW5aSk9xbEpGZFk4b2Y4NkI5VDdMSHlzU2ZYVlhsamdWSU1tIiwiZW1haWwiOiJhbGlAZ21haWwuY29tIiwiaXNUdXRvciI6dHJ1ZSwiYXZhdGFyIjoic3RyaW5nIiwicXVlc3Rpb25zIjpbXSwibWVzc2FnaW5nQ2hhbm5lbHMiOltdLCJzdWJqZWN0cyI6W3sidGl0bGUiOiJNYXRoIiwiX2lkIjoiNjI2NDY4NDljODc3ZDgzYTI0MjFlZjhjIn1dLCJfX3YiOjAsImZ1bGxOYW1lIjoiZG9nZ2llIHN0cmluZyIsImlkIjoiNjI2NDY4NDljODc3ZDgzYTI0MjFlZjhiIn0sImlhdCI6MTY1MDc0NzQ4MCwiZXhwIjoxNjUwNzQ5MjgwfQ.J5ye81gXNy9ttT6cGO4RmahO5tVojzVjYkJnKvBljY4',
          },
        },
      )
        .then((res) => res.json())
        .then((data) => {
          if (data?.message) {
            return data;
          }
          if (data?.errors) {
            throw data;
          }
          return null;
        });
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
      console.log(payload, 'success');
      state.status = 'success';
      state.message = payload;
    },
    [editProfile.rejected]: (state, { payload }) => {
      console.log(payload, 'error payload');
      state.status = 'failed';
      state.error = payload;
    },
  },
});

export default editProfileSlice.reducer;
