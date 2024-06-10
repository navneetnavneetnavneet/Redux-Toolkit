import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./reducers/counterSlice";
import studentSlice from "./reducers/studentSlice";

export const store = configureStore({
  reducer: {
    counterReducer: counterSlice,
    studentReducer: studentSlice
  },
});
