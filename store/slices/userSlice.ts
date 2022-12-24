import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {UserState} from "../types/state";
import axios from "axios";
import {GetLoadMyInfoParams, MemberLoginParams} from "../types/thunk";

const initialState: UserState = {
  userInfo: null,
  memberLoginLoading: false,
  memberLoginDone: false,
  memberLoginError: null,
  getLoadMyInfoLoading: false,
  getLoadMyInfoDone: false,
  getLoadMyInfoError: null,
}

export const memberLogin = createAsyncThunk('user/MEMBER_LOGIN', async ({ id, password, session }: MemberLoginParams) => {
  try {
    const response = await axios.post('https://cheatdot.com/api/v1/member/login.php', {
      mb_id: id,
      mb_password: password
    }, {
      headers: {
        Cookie: `PHPSESSID=${session}`
      },
      withCredentials: true
    });

    if (response.data.error.msg !== '') {
      throw response.data.error.msg;
    }

    return response.data;
  } catch (error) {
    throw error;
  }
})

export const getLoadMyInfo = createAsyncThunk('user/GET_LOAD_MY_INFO', async ({ session }: GetLoadMyInfoParams) => {
  try {
    const response = await axios.post('https://cheatdot.com/api/v1/member/api.php', {
      cmd: "get_my_info",
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
});

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
      })
      .addCase(memberLogin.rejected, (state, action) => {
        state.memberLoginLoading = false;
        state.memberLoginDone = false;
        state.memberLoginError = action.error.message as string;
      })
      .addCase(getLoadMyInfo.pending, (state) => {
        state.getLoadMyInfoLoading = true;
        state.getLoadMyInfoDone = false;
        state.getLoadMyInfoError = null;
      })
      .addCase(getLoadMyInfo.fulfilled, (state, action) => {
        state.getLoadMyInfoLoading = false;
        state.getLoadMyInfoDone = true;
        state.userInfo = action.payload;
      })
      .addCase(getLoadMyInfo.rejected, (state, action) => {
        state.getLoadMyInfoLoading = false;
        state.getLoadMyInfoDone = false;
        state.getLoadMyInfoError = action.error;
      })
  }
});

export default userSlice;
