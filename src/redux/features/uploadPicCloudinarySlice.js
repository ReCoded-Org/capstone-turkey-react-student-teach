import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const uploadPicCloudinary = createAsyncThunk(
  'uploadPicCloudinarySlice/question-post',
  async () => {
    try {
      return fetch(
        'CLOUDINARY_URL=cloudinary://878744763289972:_svcS4LdCpSAYv2Zg3a2hzXbdYk@eyeblinded',
      )
        .then((res) => res.json())
        .then((data) => data);
    } catch (err) {
      return err;
    }
  },
);

const uploadPicCloudinarySlice = createSlice({
  name: 'question-post',
  initialState: {
    message: '',
    error: '',
    status: null,
  },
  extraReducers: {
    [uploadPicCloudinary.pending]: (state) => {
      state.status = 'loading';
    },
    [uploadPicCloudinary.fulfilled]: (state, { payload }) => {
      console.log(payload);
      state.status = 'success';
      state.message = payload;
    },
    [uploadPicCloudinary.rejected]: (state, { payload }) => {
      state.status = 'failed';
      state.error = payload;
    },
  },
});

export default uploadPicCloudinarySlice.reducer;
