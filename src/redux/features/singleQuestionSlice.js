import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getQuestion = createAsyncThunk(
  'singleQuestionSlice/getQuestion',
  async (questionID) => {
    const getQuestionById = await fetch(
      `https://studentsteach.re-coded.com/api/questions/${questionID}`,
    ).then((res) => res.json());
    const getStudentById = await fetch(
      `https://studentsteach.re-coded.com/api/tutors/${getQuestionById.student}`,
    ).then((res) => res.json());
    const getStudentOnComments = await fetch(
      `https://studentsteach.re-coded.com/api/tutors/${getQuestionById.comments[0].creator}`,
    ).then((res) => res.json());
    return { getQuestionById, getStudentById, getStudentOnComments };
  },
);

const singleQuestionSlice = createSlice({
  name: 'singleQuestion',
  initialState: {
    question: '',

    status: '',
  },
  extraReducers: {
    [getQuestion.pending]: (state) => {
      state.status = 'loading';
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
