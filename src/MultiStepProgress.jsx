import { useState } from "react";
import "./MultiStepProgress.css";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function MultiStepProgress() {
  const [step, activeStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  function handlePrevious() {
    if (step > 1) activeStep(step - 1);
  }
  function handleNext() {
    if (step < 3) activeStep(step + 1);
  }

  return (
    <div>
      <button className="close" onClick={() => setIsOpen(!isOpen)}>
        {console.log("is")}
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>
          <p className="message">{messages[step - 1]}</p>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#7593ff", color: "#fff" }}
              onClick={handlePrevious}>
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7593ff", color: "#fff" }}
              onClick={handleNext}>
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
