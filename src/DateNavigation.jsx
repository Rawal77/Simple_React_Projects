import { useState } from "react";
import "./DateNavigation.css";

export default function DateNavigation() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(1);
  let date = new Date();
  date.setDate(date.getDate() + count);
  function autoIncrementSteps() {
    setStep(step + 1);
  }
  function autoDecrementSteps() {
    setStep(step - 1);
  }
  function autoIncrementCounts() {
    setCount(count + step);
  }
  function autoDecrementCounts() {
    setCount(count - step);
  }
  return (
    <div className="main">
      <div>
        <button className="steps" onClick={autoIncrementSteps}>
          +
        </button>
        steps : {step}
        <button className="steps" onClick={autoDecrementSteps}>
          -
        </button>
      </div>
      <br></br>
      <div>
        <button className="steps" onClick={autoIncrementCounts}>
          +
        </button>
        Count : {count}
        <button className="steps" onClick={autoDecrementCounts}>
          -
        </button>
      </div>
      <br />
      <div>
        <span>
          {count == 0
            ? `Today is `
            : count > 0
            ? ` ${count} day after is `
            : `Before ${Math.abs(count)} day was `}
        </span>
        <span>{date.toDateString()}</span>
      </div>
    </div>
  );
}
