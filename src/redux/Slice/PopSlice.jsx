import { createSlice } from "@reduxjs/toolkit";

const popupSlice = createSlice({
  name: "popup",
  initialState: {
    popslice: false,
  },
  reducers: {
    setPop: (state, action) => {
      state.popslice = action.payload;
    },
  },
});

export const { setPop } = popupSlice.actions;

export default popupSlice.reducer;
