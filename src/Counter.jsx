import { useState } from "react";
import "./Counter.css";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [maxValue, setMaxValue] = useState(10);

  const handleIncrement = () => {
    if (count < maxValue) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleChangeMax = event => {
    const newValue = parseInt(event.target.value);
    if (newValue > 0) {
      setMaxValue(newValue);
      if (count > newValue) {
        setCount(newValue);
      }
    }
  };

  return (
    <div className="counter">
      <h1>Counter</h1>
      <div className="counter-container">
        <button onClick={handleDecrement}>-</button>
        <span>{count}</span>
        <button onClick={handleIncrement}>+</button>
      </div>
      <div className="max-value-container">
        <label htmlFor="max-value">Max Value:</label>
        <input
          type="number"
          id="max-value"
          value={maxValue}
          onChange={handleChangeMax}
        />
      </div>
    </div>
  );
}
