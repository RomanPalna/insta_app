import { createAsyncThunk } from "@reduxjs/toolkit";
import * as instaApi from "../api/instaApi";

export const fetchInsta = createAsyncThunk(
  "insta/instaFetch",

  async () => {
    const list = await instaApi.getlist();
    return list;
  }
);
