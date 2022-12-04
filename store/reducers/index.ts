import {
  AnyAction,
  CombinedState,
  combineReducers
} from "@reduxjs/toolkit";
import { ReducerStates } from "../types/state";
import {HYDRATE} from "next-redux-wrapper";
import postSlice from "../slices/postSlice";

const rootReducer = (state: ReducerStates, action: AnyAction): CombinedState<ReducerStates> => {
  switch (action.type) {
    case HYDRATE:
      return action.payload;

    default: {
      const combinedReducer = combineReducers({
        post: postSlice.reducer,
      });

      return combinedReducer(state, action);
    }
  }
}

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
