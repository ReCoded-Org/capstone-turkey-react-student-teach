import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const deleteQuestionSlice = createAsyncThunk(
  'deleteQuestionSliceSlice/question-post',
  async ({ Jwt, Id }) => {
    try {
      return fetch(`https://studentsteach.re-coded.com/api/question/${Id}`, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          Authorization: `Bearer ${Jwt}`,
        },
      })
        .then((res) => res.json())
        .then((data) => data);
    } catch (err) {
      return err;
    }
  },
);

const deleteQuestionSliceSlice = createSlice({
  name: 'question-post',
  initialState: {
    message: [],
    error: '',
    status: null,
  },
  extraReducers: {
    [deleteQuestionSlice.pending]: (state) => {
      state.status = 'loading';
    },
    [deleteQuestionSlice.fulfilled]: (state, { payload }) => {
      state.status = 'success';
      state.message.push(payload);
    },
    [deleteQuestionSlice.rejected]: (state, { payload }) => {
      state.status = 'failed';
      state.error = payload;
    },
  },
});

export default deleteQuestionSliceSlice.reducer;
