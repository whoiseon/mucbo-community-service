import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {UserState} from "../types/state";
import axios from "axios";

const initialState: UserState = {
  session: null,
  getUserSessionLoading: false,
  getUserSessionDone: false,
  getUserSessionError: null,
}

export const getUserSession = createAsyncThunk('user/GET_USER_SESSION', async () => {
  try {
    const response = await axios.post('https://cheatdot.com/api/v1/api.php', {
      cmd: 'session'
    });

    return response.data.message.result;
  } catch (error) {
    throw error;
  }
})

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserSession.pending, (state) => {
        state.getUserSessionLoading = true;
        state.getUserSessionDone = false;
        state.getUserSessionError = null;
      })
      .addCase(getUserSession.fulfilled, (state, action) => {
        state.getUserSessionLoading = false;
        state.getUserSessionDone = true;
        state.session = action.payload;
      })
      .addCase(getUserSession.rejected, (state, action) => {
        state.getUserSessionLoading = false;
        state.getUserSessionDone = false;
        state.getUserSessionError = action.error;
      })
  }
});

export default userSlice;
