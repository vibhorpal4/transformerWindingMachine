import { combineReducers } from "@reduxjs/toolkit";
import splashSlice from "./slices/splashSlice";

const rootReducer = combineReducers({
  splashScreen: splashSlice,
});

export default rootReducer;
