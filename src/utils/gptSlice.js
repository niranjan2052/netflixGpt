import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptPage: false,
    buttonName: "GPT-Search",
  },
  reducers: {
    toggleshowGptPage: (state) => {
      state.showGptPage = !state.showGptPage;
    },
    toggleButtonName: (state) => {
      state.buttonName =
        state.buttonName === "GPT-Search" ? "Back To Main" : "GPT-Search";
    },
  },
});

export const { toggleshowGptPage, toggleButtonName } = gptSlice.actions;

export default gptSlice.reducer;
