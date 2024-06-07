import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increase: (state, action) => {
      state.value = action.payload;
    },
    decrease: (state, action) => {
      state.value = action.payload;
    },
  },
});

export default counterSlice.reducer;
export const { increase, decrease } = counterSlice.actions;
