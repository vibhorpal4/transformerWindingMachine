import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isShown: true,
};

const splashSlice = createSlice({
  name: "splashSlice",
  initialState,
  reducers: {
    showSplash: (state, action) => {
      state.isShown = true;
    },
    closeSplash: (state, action) => {
      state.isShown = false;
    },
  },
});

export const { showSplash, closeSplash } = splashSlice.actions;

export default splashSlice.reducer;
