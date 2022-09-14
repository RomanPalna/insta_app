import { createSlice } from "@reduxjs/toolkit";

import { fetchInsta } from "./insta-operations";

// const likes = createReducer([], {
//   [fetchInsta.fulfilled]: (__, action) => {
//     __ = action.payload.data.Instagram.Likes.plans;
//   },
// });

const initialState = {
  likes: [],
};

const slice = createSlice({
  initialState,
  name: "Service",
  reducers: {
    saveServise: (state, action) => {
      state.likes = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchInsta.fulfilled, (state, action) => {
      state.likes = action.payload;
    });
  },
});

export default slice.reducer;
