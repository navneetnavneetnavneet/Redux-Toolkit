import { load, remove } from "../reducers/studentSlice";
import axios from "../../utils/axios";

export const asyncload = () => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/student");
    dispatch(load(data));
  } catch (error) {
    console.log(error.response.data);
  }
};

export const asyncstudentsignin =
  ({ email, password }) =>
  async (dispatch, getState) => {
    try {
      const { data } = await axios.post("/student/signin", { email, password });

      console.log(data);

      dispatch(asyncload());
    } catch (error) {
      console.log(error.response.data);
    }
  };

export const asyncstudentsignout = () => async (dispatch, getState) => {
  try {
    const { data } = await axios.get("/student/signout");
    console.log(data);
    dispatch(remove());
  } catch (error) {
    console.log(error.response.data);
  }
};
