import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const addQuestion = createAsyncThunk(
  'addQuestionSlice/question-post',
  async ({ jwt, questionTitle, questionContnet }, { rejectWithValue }) => {
    try {
      return fetch('https://studentsteach.re-coded.com/api/questions', {
        method: 'POST',
        body: JSON.stringify({
          isSolved: false,
          comments: [],
          title: questionTitle,
          content: questionContnet,
          subjects: [
            {
              title: 'Math',
            },
          ],
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          Authorization: `Bearer ${jwt}`,
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
    message: [],
    error: '',
    status: null,
  },
  extraReducers: {
    [addQuestion.pending]: (state) => {
      state.status = 'loading';
    },
    [addQuestion.fulfilled]: (state, { payload }) => {
      state.status = 'success';
      state.message.push(payload);
    },
    [addQuestion.rejected]: (state, { payload }) => {
      state.status = 'failed';
      state.error = payload;
    },
  },
});

export default addQuestionSlice.reducer;
