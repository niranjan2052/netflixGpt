import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptPage: false,
    movieSearchResults: null,
    movieNames: null,
  },
  reducers: {
    toggleshowGptPage: (state) => {
      state.showGptPage = !state.showGptPage;
    },
    addGptMovieResult:(state,action) => {
      const {movieNames, movieSearchResults} = action.payload;
      state.movieNames = movieNames;
      state.movieSearchResults = movieSearchResults;
    }
  },
});

export const { toggleshowGptPage, addGptMovieResult } = gptSlice.actions;

export default gptSlice.reducer;
