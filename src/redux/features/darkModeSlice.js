import { createSlice } from '@reduxjs/toolkit';

const darkModeSlice = createSlice({
  name: 'darkMode',
  initialState: {
    darkMode: false,
  },
  reducers: {
    setDarkMode(state, { payload }) {
      state.darkMode = payload;
    },
  },
});

export default darkModeSlice.reducer;
export const { setDarkMode } = darkModeSlice.actions;
