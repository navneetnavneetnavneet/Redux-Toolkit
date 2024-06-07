export { increase } from "../reducers/counterSlice";

import { decrease } from "../reducers/counterSlice";

export const asyncDecrease = (val) => async (dispatch, getState) => {
  try {
    setTimeout(() => {
      dispatch(decrease(val));
    }, 1000);
  } catch (error) {
    console.log(error);
  }
};
