import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchQuestions = createAsyncThunk(
  'questions/fetchQuestions',
  async () => {
    try {
      return fetch('https://studentsteach.re-coded.com/api/questions', {
        method: 'GET',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((res) => res.json())
        .then((data) => data);
    } catch (err) {
      return err;
    }
  },
);
const initialState = {
  questions: [],
  error: '',
  status: null,
};
const questionsSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {
    questionAdded(state, action) {
      state.question.push(action.payload);
    },
    questionUpdated(state, action) {
      const question = state.question.find((q) => q.id === action.payload.id);
      question.url = action.payload.url;
    },
  },
  extraReducers: {
    [fetchQuestions.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchQuestions.fulfilled]: (state, { payload }) => {
      state.status = 'success';
      state.questions = payload;
    },
    [fetchQuestions.rejected]: (state, { payload }) => {
      state.status = 'failed';
      state.error = payload;
    },
  },
});
export const { questionAdded, questionUpdated } = questionsSlice.actions;
export default questionsSlice.reducer;
