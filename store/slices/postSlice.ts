import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import { PostState } from "../types/state";
import axios from "axios";

const initialState: PostState = {
  posts: null,
  getPostsAllLoading: false,
  getPostsAllDone: false,
  getPostsAllError: null,
}

export const getPostsAll = createAsyncThunk('post/GET_POSTS_ALL', async () => {
  try {
    const response = await axios.get("https://cheatdot.com/api/v1/board/all.php");

    response.headers['content-type'] = 'application/json'

    return response.data;
  } catch (error) {
    throw error;
  }
})

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPostsAll.pending, (state) => {
        state.getPostsAllLoading = true;
        state.getPostsAllDone = false;
        state.getPostsAllError = null;
      })
      .addCase(getPostsAll.fulfilled, (state, action) => {
        state.getPostsAllLoading = false;
        state.getPostsAllDone = true;
        state.posts = action.payload;
      })
      .addCase(getPostsAll.rejected, (state, action) => {
        state.getPostsAllLoading = false;
        state.getPostsAllDone = false;
        state.getPostsAllError = action.error;
      })
  }
});

export default postSlice;
