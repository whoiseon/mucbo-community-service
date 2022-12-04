import {createWrapper} from "next-redux-wrapper";
import logger from "redux-logger";
import {
  Action,
  AnyAction,
  configureStore,
  Reducer,
  ThunkAction
} from "@reduxjs/toolkit";
import rootReducer, {RootState} from "./reducers";
import {ReducerStates} from "./types/state";

const isProduction = process.env.NODE_ENV === "production"

const makeStore = () => {
  const store = configureStore({
    reducer: rootReducer as Reducer<ReducerStates, AnyAction>,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: !isProduction
  });

  return store;
}

export type AppStore = ReturnType<typeof makeStore>; // store type
export type AppDispatch = AppStore['dispatch'];
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action>

export const wrapper = createWrapper<AppStore>(makeStore);