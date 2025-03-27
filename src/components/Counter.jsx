import React, { useState } from "react";
import {
  increment,
  decrement,
  addition,
  subtract,
  resetCount,
} from "../Features/Slices/counterSlice";
import { useDispatch, useSelector } from "react-redux";
const Counter = () => {
  const dispatch = useDispatch();
  const {count} = useSelector((state) => state.counter);

  const [amount, setAmount] = useState(0);
  // console.log(amount);

  const handleChange = (e) => {
    setAmount(e.target.value);
  };

  const addNum = () => {
    dispatch(addition(Number(amount)));
    setAmount(0);
  };
  const subtractNum = () => {
    dispatch(subtract(Number(amount)));
    setAmount(0);
  };

  const reset = () => {
    setAmount(0);
    dispatch(resetCount());
  };
  return (
    <>
      <div className="parent">
        <div className="btns">
          <button className="btn" onClick={() => dispatch(decrement())}>
            -
          </button>
          <h2>{count}</h2>
          <button className="btn" onClick={() => dispatch(increment())}>
            +
          </button>
        </div>

        <div>
          <input
            type="number"
            className="input"
            placeholder="Add Value"
            value={amount}
            onChange={handleChange}
          />
        </div>

        <div className="btns">
          <button className="btn" onClick={subtractNum}>
            Subtract
          </button>
          <button className="btn" onClick={addNum}>
            Addition
          </button>
        </div>
        <button className="btn reset" onClick={reset}>
          Reset
        </button>
      </div>
    </>
  );
};

export default Counter;
