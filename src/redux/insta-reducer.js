import { createSlice } from "@reduxjs/toolkit";

import { fetchInsta } from "./insta-operations";

const initialState = {
  likes: [],
  followers: [],
  comments: [],
  views: [],
  autoLikes: [],
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
      console.log(action.payload.data.Instagram);

      const { Likes, Views, Comments, Followers, ...other } =
        action.payload.data.Instagram;

      console.log(action.payload);

      state.likes = Likes.plans;
      state.followers = Followers.plans;
      state.comments = Comments.plans;
      state.views = Views.plans;
      state.autoLikes = other["Auto-Likes"].plans;
    });
  },
});

export default slice.reducer;
