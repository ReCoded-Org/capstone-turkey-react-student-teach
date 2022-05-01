import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const addComment = createAsyncThunk(
  'addCommentSlice/comment-post',
  async ({ jwt, questionID, creatorID, content }, { rejectWithValue }) => {
    try {
      return fetch(
        `https://studentsteach.re-coded.com/api/questions/${questionID}`,
      )
        .then((response) => response.json())
        .then((question) => {
          fetch(`https://studentsteach.re-coded.com/api/tutors/${creatorID}`)
            .then((res) => res.json())
            .then((creator) => {
              return fetch(
                // eslint-disable-next-line no-underscore-dangle
                `https://studentsteach.re-coded.com/api/${question._id}/comments`,
                {
                  method: 'POST',
                  body: JSON.stringify({
                    question,
                    creator,
                    content,
                    isRead: false,
                  }),
                  headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    Authorization: `Bearer ${jwt}`,
                  },
                },
              );
            });
        });
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

const addCommentSlice = createSlice({
  name: 'comment-post',
  initialState: {
    message: '',
    error: '',
    status: null,
  },
  extraReducers: {
    [addComment.pending]: (state) => {
      state.status = 'loading';
    },
    [addComment.fulfilled]: (state, { payload }) => {
      state.status = 'success';
      state.message = payload;
    },
    [addComment.rejected]: (state, { payload }) => {
      state.status = 'failed';
      state.error = payload;
    },
  },
});

export default addCommentSlice.reducer;
