import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increase } from "./store/reducers/counterSlice";

const App = () => {
  const {value} = useSelector((state) => state.counterReducer);
  const dispatch = useDispatch();

  const IncreaseByOne = () => {
    dispatch(increase(value + 1));
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen text-white bg-zinc-700">
      <h1 className="text-3xl font-semibold">{value}</h1>
      <button
        onClick={IncreaseByOne}
        className="px-4 py-2 mt-5 rounded-md bg-red-400"
      >
        Increase by 1
      </button>
    </div>
  );
};

export default App;
