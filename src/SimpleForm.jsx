import React, { useState } from "react";
import "./Greeting.css";
export default function Greeting() {
  const [name, setName] = useState("");
  const handleChange = event => {
    setName(event.target.value);
  };

  return (
    <div className="greeting-container">
      <h2>Welcome to our website!</h2>
      <label htmlFor="nameInput">Enter your name: </label>
      <input
        type="text"
        id="nameInput"
        value={name}
        onChange={handleChange}
        placeholder="Your Name"
        className="name-input"
      />
      {name && (
        <p className="greeting-message">Hello, {name}! Welcome to our site.</p>
      )}
    </div>
  );
}
