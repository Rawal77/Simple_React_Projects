import { useState } from "react";
import "./App.css";

function GenerateRandomColor() {
  const [color, setColor] = useState("#FFFFFF");

  const generateRandomColor = () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setColor(randomColor);
  };

  return (
    <div className="container" style={{ backgroundColor: color }}>
      <h1>Random Color Generator</h1>
      <div className="color-box" style={{ backgroundColor: color }}></div>
      <button onClick={generateRandomColor}>Generate Random Color</button>
    </div>
  );
}

export default GenerateRandomColor;
