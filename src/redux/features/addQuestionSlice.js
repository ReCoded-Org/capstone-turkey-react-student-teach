import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const addQuestion = createAsyncThunk(
  'addQuestionSlice/question-post',
  async ({ title, body, studenId }, { rejectWithValue }) => {
    try {
      return fetch('https://studentsteach.re-coded.com/questions', {
        method: 'POST',
        body: JSON.stringify({
          comments: [],
          content: { questionTitle: title, questionBody: body },
          createdAt: new Date(),
          isSolved: false,
          studen: studenId,
          subjects: [],
          updatedAt: '',
          __v: 0,
          _id: '',
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

const addQuestionSlice = createSlice({
  name: 'question-post',
  initialState: {
    message: '',
    error: '',
    status: null,
  },
  extraReducers: {
    [addQuestion.pending]: (state) => {
      state.status = 'loading';
    },
    [addQuestion.fulfilled]: (state, { payload }) => {
      state.status = 'success';
      state.message = payload;
    },
    [addQuestion.rejected]: (state, { payload }) => {
      state.status = 'failed';
      state.error = payload;
    },
  },
});

export default addQuestionSlice.reducer;
