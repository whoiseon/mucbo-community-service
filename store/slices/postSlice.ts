import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import { PostState } from "../types/state";
import axios from "axios";
import {GetPostsAllPrams, GetPostsByTable} from "../types/thunk";

const initialState: PostState = {
  posts: null,
  getPostsAllLoading: false,
  getPostsAllDone: false,
  getPostsAllError: null,
  getPostsByTableLoading: false,
  getPostsByTableDone: false,
  getPostsByTableError: null,
}

export const getPostsAll = createAsyncThunk('post/GET_POSTS_ALL', async ({ page }: GetPostsAllPrams) => {
  try {
    const response = await axios.get('https://cheatdot.com/api/v1/board/all.php', {
      params: {
        page: page || '1'
      }
    });

    if (response.data.error.code === 100) return null;

    return response.data;
  } catch (error) {
    throw error;
  }
})

export const getPostsByTable = createAsyncThunk('post/GET_POSTS_BY_TABLE', async ({ page, table }: GetPostsByTable) => {
  try {
    const response = await axios.get('https://cheatdot.com/api/v1/board/board.php', {
      params: {
        page,
        bo_table: table,
      }
    });

    if (response.data.error.code === 100) return null;

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
      .addCase(getPostsByTable.pending, (state) => {
        state.getPostsByTableLoading = true;
        state.getPostsByTableDone = false;
        state.getPostsByTableError = null;
      })
      .addCase(getPostsByTable.fulfilled, (state, action) => {
        state.getPostsByTableLoading = false;
        state.getPostsByTableDone = true;
        state.posts = action.payload;
      })
      .addCase(getPostsByTable.rejected, (state, action) => {
        state.getPostsByTableLoading = false;
        state.getPostsByTableDone = false;
        state.getPostsByTableError = action.error;
      })
  }
});

export default postSlice;
