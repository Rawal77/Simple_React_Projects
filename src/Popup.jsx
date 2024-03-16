import React, { useState } from "react";

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
            <p>Popup content goes here.</p>
            <button onClick={togglePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
