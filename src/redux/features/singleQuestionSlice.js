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
    question: '',
    status: {
      question: '',
    },
  },
  extraReducers: {
    [getQuestion.pending]: (state) => {
      state.status.question = 'loading';
    },
    [getQuestion.fulfilled]: (state, action) => {
      state.question = action.payload;
      state.status = 'success';
    },
    [getQuestion.rejected]: (state) => {
      state.status = 'failed';
    },
  },
});

export default singleQuestionSlice.reducer;
