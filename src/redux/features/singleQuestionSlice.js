import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getQuestion = createAsyncThunk(
  'singleQuestionSlice/getQuestion',
  async (questionID) => {
    return fetch(
      `https://studentsteach.re-coded.com/api/questions/${questionID}`,
    )
      .then((res) => res.json())
      .then((data) => {
        return fetch(
          `https://studentsteach.re-coded.com/api/tutors/${data.student}`,
        )
          .then((response) => response.json())
          .then((stdata) => {
            return { ...data, student: stdata };
          });
      });
  },
);

const singleQuestionSlice = createSlice({
  name: 'singleQuestion',
  initialState: {
    question: null,
    status: 'loading',
  },
  extraReducers: {
    [getQuestion.pending]: (state) => {
      state.status = 'loading';
    },
    [getQuestion.fulfilled]: (state, action) => {
      console.log('there', action.payload);
      state.question = action.payload;
      state.status = 'success';
    },
    [getQuestion.rejected]: (state) => {
      state.status = 'failed';
    },
  },
});

export default singleQuestionSlice.reducer;
