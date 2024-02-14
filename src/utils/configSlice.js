import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "config",
  initialState: {
    lang: "en",
  },
  reducers: {
    toggleLanguage: (state, action) => {
      state.lang = action.payload;
    },
  },
});

export const { toggleLanguage } = configSlice.actions;

export default configSlice.reducer;
