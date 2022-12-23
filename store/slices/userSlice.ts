import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {UserState} from "../types/state";
import axios from "axios";
import {MemberLoginParams} from "../types/thunk";

const initialState: UserState = {
  userInfo: null,
  memberLoginLoading: false,
  memberLoginDone: false,
  memberLoginError: null,
}

export const memberLogin = createAsyncThunk('user/MEMBER_LOGIN', async ({ id, password, session }: MemberLoginParams) => {
  try {
    const response = await axios.post('https://cheatdot.com/api/v1/member/login.php', {
      mb_id: id,
      mb_password: password
    }, {
      withCredentials: true,
      headers: {
        Cookie: `PHPSESSID=${session}`
      }
    });

    return response.data;
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
      .addCase(memberLogin.pending, (state) => {
        state.memberLoginLoading = true;
        state.memberLoginDone = false;
        state.memberLoginError = null;
      })
      .addCase(memberLogin.fulfilled, (state, action) => {
        state.memberLoginLoading = false;
        state.memberLoginDone = true;
        state.userInfo = action.payload;
      })
      .addCase(memberLogin.rejected, (state, action) => {
        state.memberLoginLoading = false;
        state.memberLoginDone = false;
        state.memberLoginError = action.error;
      })
  }
});

export default userSlice;
