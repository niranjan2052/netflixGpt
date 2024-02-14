import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptPage: false,
  },
  reducers: {
    toggleshowGptPage: (state) => {
      state.showGptPage = !state.showGptPage;
    },
  },
});

export const { toggleshowGptPage } = gptSlice.actions;

export default gptSlice.reducer;
