import {SerializedError} from "@reduxjs/toolkit";

export interface ActionProps {
  type: string,
  payload: string
}

export interface PostState {
  posts: string[] | null | string,
  getPostsAllLoading: boolean,
  getPostsAllDone: boolean,
  getPostsAllError: string | null | SerializedError,
}

export interface ReducerStates {
  post: PostState,
}