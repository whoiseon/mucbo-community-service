import {SerializedError} from "@reduxjs/toolkit";
import {BoardType, ViewType, ViewUserType, ViewUserWriteDataType} from "../../types/board";

export interface ActionProps {
  type: string,
  payload: string
}

export interface PostState {
  posts: BoardType | null,
  viewPost: ViewType | null,
  viewUserInfo: ViewUserType | null,
  viewUserWritePost: ViewUserWriteDataType | null,
  getPostsAllLoading: boolean,
  getPostsAllDone: boolean,
  getPostsAllError: string | null | SerializedError,
  getPostsByTableLoading: boolean,
  getPostsByTableDone: boolean,
  getPostsByTableError: string | null | SerializedError,
  getViewPostLoading: boolean,
  getViewPostDone: boolean,
  getViewPostError: string | null | SerializedError,
  getViewUserInfoLoading: boolean,
  getViewUserInfoDone: boolean,
  getViewUserInfoError: string | null | SerializedError,
  getViewUserWriteDataLoading: boolean,
  getViewUserWriteDataDone: boolean,
  getViewUserWriteDataError: string | null | SerializedError,
}

export interface UserState {
  userInfo: string | null,
  memberLoginLoading: boolean,
  memberLoginDone: boolean,
  memberLoginError: string | null | SerializedError,
  getLoadMyInfoLoading: boolean,
  getLoadMyInfoDone: boolean,
  getLoadMyInfoError: string | null | SerializedError,
}

export interface ReducerStates {
  post: PostState,
  user: UserState,
}