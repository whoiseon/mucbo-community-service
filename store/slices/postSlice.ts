import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import { PostState } from "../types/state";
import axios from "axios";
import {GetPostsAllPrams, GetPostsByTable, GetViewPostParams, GetViewUserInfoParams} from "../types/thunk";

const initialState: PostState = {
  posts: null,
  viewPost: null,
  viewUserInfo: null,
  getPostsAllLoading: false,
  getPostsAllDone: false,
  getPostsAllError: null,
  getPostsByTableLoading: false,
  getPostsByTableDone: false,
  getPostsByTableError: null,
  getViewPostLoading: false,
  getViewPostDone: false,
  getViewPostError: null,
  getViewUserInfoLoading: false,
  getViewUserInfoDone: false,
  getViewUserInfoError: null,
}

export const getPostsAll = createAsyncThunk('post/GET_POSTS_ALL', async ({ page }: GetPostsAllPrams) => {
  try {
    const response = await axios.get('https://cheatdot.com/api/v1/board/all.php', {
      params: {
        page: page || '1'
      }
    });

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

    return response.data;
  } catch (error) {
    throw error;
  }
})

export const getViewPost = createAsyncThunk('post/GET_VIEW_POST', async ({ table, id }: GetViewPostParams) => {
  try {
    const response = await axios.get('https://cheatdot.com/api/v1/board/board.php', {
      params: {
        bo_table: table,
        wr_id: id,
      }
    });

    return response.data;
  } catch (error) {
    throw error;
  }
});

export const getViewUserInfo = createAsyncThunk('post/GET_VIEW_USER_INFO', async ({ mb_id }: GetViewUserInfoParams) => {
  try {
    const response = await axios.post(`https://cheatdot.com/api/v1/user/api.php`, {
      cmd: "get_user_info",
      data: {
        mb_id: mb_id,
      },
    });

    return response.data;
  } catch (error) {
    throw error;
  }
});

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
      .addCase(getViewPost.pending, (state) => {
        state.getViewPostLoading = true;
        state.getViewPostDone = false;
        state.getViewPostError = null;
      })
      .addCase(getViewPost.fulfilled, (state, action) => {
        state.getPostsByTableLoading = false;
        state.getPostsByTableDone = true;
        state.viewPost = action.payload;
      })
      .addCase(getViewPost.rejected, (state, action) => {
        state.getViewPostLoading = false;
        state.getViewPostDone = false;
        state.getViewPostError = action.error;
      })
      .addCase(getViewUserInfo.pending, (state) => {
        state.getViewUserInfoLoading = true;
        state.getViewUserInfoDone = false;
        state.getViewUserInfoError = null;
      })
      .addCase(getViewUserInfo.fulfilled, (state, action) => {
        state.getViewUserInfoLoading = false;
        state.getViewUserInfoDone = true;
        state.viewUserInfo = action.payload;
      })
      .addCase(getViewUserInfo.rejected, (state, action) => {
        state.getViewUserInfoLoading = false;
        state.getViewUserInfoDone = false;
        state.getViewUserInfoError = action.error;
      })
  }
});

export default postSlice;
