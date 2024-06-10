import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  student: null,
  isAuthenticated: false,
};

const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    load: (state, action) => {
      state.student = action.payload;
      state.isAuthenticated = true;
    },
    remove: (state, action) => {
      state.student = null;
      state.isAuthenticated = false;
    },
  },
});

export default studentSlice.reducer;
export const { load, remove } = studentSlice.actions;
