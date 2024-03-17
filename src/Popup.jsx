import React, { useState } from "react";
import "./Popup.css";

export default function Popup() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="popup-container">
      <button onClick={togglePopup}>Toggle Popup</button>
      {isOpen && (
        <div className="popup">
          <div className="popup-content">
            <h2>This is a Popup</h2>
            <button onClick={togglePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
