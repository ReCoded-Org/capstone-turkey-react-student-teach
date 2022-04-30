import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { editProfilePic } from './editProfilePicSlice';

export const uploadPicCloudinary = createAsyncThunk(
  'uploadPicCloudinarySlice/question-post',
  async ({ files, id, jwt }, { dispatch }) => {
    const formData = new FormData();
    formData.append('file', files[0]);
    formData.append('upload_preset', 'ly6xe3sk');
    try {
      const data = axios.post(
        'https://api.cloudinary.com/v1_1/eyeblinded/image/upload',
        formData,
      );
      const res = await data;
      dispatch(
        editProfilePic({
          picUrl: res?.data.url,
          userId: id,
          userJwt: jwt,
        }),
      );
      return res;
    } catch (err) {
      return err;
    }
  },
);

const uploadPicCloudinarySlice = createSlice({
  name: 'question-post',
  initialState: {
    data: [],
    error: '',
    status: null,
  },
  extraReducers: {
    [uploadPicCloudinary.pending]: (state) => {
      state.status = 'loading';
    },
    [uploadPicCloudinary.fulfilled]: (state, { payload }) => {
      state.status = 'success';
      state.data = payload;
    },
    [uploadPicCloudinary.rejected]: (state, { payload }) => {
      state.status = 'failed';
      state.error = payload;
    },
  },
});

export default uploadPicCloudinarySlice.reducer;
