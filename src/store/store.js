import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";

const combinedReducer = combineReducers({
  userSlice,
});

export const store = configureStore({
  reducer: combinedReducer,
});
