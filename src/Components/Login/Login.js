import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Login() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    return {
      type: "INCREMENT",
      payload: {
        name: "Raihan",
      },
    };
  };
  const handleDecrement = () => {
    return {
      type: "DECREMENT",
      payload: {
        name: "Raihan",
      },
    };
  };

  return (
    <div>
      <h1>{counter.count}</h1>
      <button onClick={() => dispatch(handleIncrement())}>INCREMENT</button>
      <button onClick={() => dispatch(handleDecrement())}>INCREMENT</button>
    </div>
  );
}
