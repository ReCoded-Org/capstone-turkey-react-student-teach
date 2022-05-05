import { createSlice } from '@reduxjs/toolkit';

const commentsSlice = createSlice({
  name: 'comments',
  initialState: {
    comments: [],
  },
  reducers: {
    addComment(state, { payload }) {
      state.comments.push(payload);
    },
  },
});

export default commentsSlice.reducer;
export const { addComment } = commentsSlice.actions;
