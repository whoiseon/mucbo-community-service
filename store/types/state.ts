import {SerializedError} from "@reduxjs/toolkit";
import {BoardType} from "../../types/board";

export interface ActionProps {
  type: string,
  payload: string
}

export interface PostState {
  posts: BoardType | null,
  getPostsAllLoading: boolean,
  getPostsAllDone: boolean,
  getPostsAllError: string | null | SerializedError,
}

export interface ReducerStates {
  post: PostState,
}