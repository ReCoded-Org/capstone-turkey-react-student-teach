import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

const getAnswers = createAsyncThunk(
  'singleQuestionSlice/getQuestion',
  async (comments) => {
    return Promise.all(
      comments.map(async (comment) => {
        return fetch(
          `https://studentsteach.re-coded.com/api/tutors/${comment.creator}`,
        )
          .then((response) => response.json())
          .then((data) => {
            console.log('right over here', { ...comment, creator: data });
            return { ...comment, creator: data };
          });
      }),
    );
  },
);

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
            console.log('fetched question', { ...data, student: stdata });
            const dispatch = useDispatch();
            dispatch(getAnswers(data.comments));
            return { ...data, student: stdata };
          });
      });
  },
);

const singleQuestionSlice = createSlice({
  name: 'singleQuestion',
  initialState: {
    question: '',
    comments: [],
    status: {
      question: '',
      comments: '',
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
    [getAnswers.pending]: (state) => {
      state.status.comments = 'loading';
    },
    [getAnswers.fulfilled]: (state, action) => {
      console.log('fetched answers', action.payload);
      state.comment = action.payload;
      state.status.comments = 'success';
    },
    [getAnswers.rejected]: (state) => {
      state.status.comments = 'failed';
    },
  },
});

export default singleQuestionSlice.reducer;
