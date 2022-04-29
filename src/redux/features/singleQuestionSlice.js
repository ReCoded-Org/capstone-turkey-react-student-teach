import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getQuestion = createAsyncThunk(
  'singleQuestionSlice/getQuestion',
  async (questionID) => {
    const question = await Promise([
      axios(
        `https://studentsteach.re-coded.com/api/question?questionID=${questionID}`,
      ).then((res) => {
        console.log(res.data);
        return res.data;
      }),
    ]);
    return question;
  },
);

const singleQuestionSlice = createSlice({
  name: 'single-question',
  initialState: {
    question: null,
  },
  extraReducers: {
    [getQuestion.pending]: (state) => {
      state.status = 'loading';
    },
    [getQuestion.fulfilled]: (state, { payload }) => {
      console.log(payload);
      state.question = payload;
      state.status = 'success';
    },
    [getQuestion.rejected]: (state) => {
      state.status = 'failed';
    },
  },
});

export default singleQuestionSlice.reducer;
