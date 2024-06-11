import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increase } from "./store/reducers/counterSlice";
import { asyncDecrease } from "./store/actions/CounterActions";
import {
  asyncload,
  asyncstudentsignin,
  asyncstudentsignout,
} from "./store/actions/StudentActions";
import { useNavigate } from "react-router-dom";

const App = () => {
  const navigate = useNavigate();

  const { isAuthenticated } = useSelector((state) => state.studentReducer);
  const { value } = useSelector((state) => state.counterReducer);
  const dispatch = useDispatch();

  const IncreaseByOne = () => {
    dispatch(increase(value + 1));
  };

  const AsyncDecreaseByOne = () => {
    dispatch(asyncDecrease(value - 1));
  };

  const studentLoginHandler = async () => {
    dispatch(
      asyncstudentsignin({
        email: "saarthaksharma@gmail.com",
        password: "123456",
      })
    );
  };

  const studentLogoutHandler = () => {
    dispatch(asyncstudentsignout());
  };

  useEffect(() => {
    dispatch(asyncload());

    isAuthenticated && navigate("/profile");
    !isAuthenticated && navigate("/login");
  }, [isAuthenticated]);

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen text-white bg-zinc-700">
      <h1 className="text-3xl font-semibold">{value}</h1>
      <div className="mt-10 flex gap-x-5">
        <button
          onClick={IncreaseByOne}
          className="px-4 py-2 rounded-md bg-red-400"
        >
          Increase by 1
        </button>
        <button
          onClick={AsyncDecreaseByOne}
          className="px-4 py-2 rounded-md bg-red-400"
        >
          Async Decrease by 1
        </button>

        <button
          onClick={studentLoginHandler}
          className="px-4 py-2 rounded-md bg-green-400"
        >
          Login
        </button>

        <button
          onClick={studentLogoutHandler}
          className="px-4 py-2 rounded-md bg-red-600"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default App;
