import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, reset } from "./features/counter/counterSlice";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };
  const handleReset = () => {
    dispatch(reset());
  };

  return (
    <div className="App">
      <div className="counter-container">
        <button className="counter-btn" onClick={handleIncrement}>
          +
        </button>
        <p className="count-text">Count : {count}</p>
        <button className="counter-btn" onClick={handleDecrement}>
          -
        </button>
      </div>

      <button className="reset-btn" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}

export default App;
