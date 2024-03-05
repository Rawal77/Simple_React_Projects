import { useState } from "react";
import "./Tabs.css";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState(1);
  const handleTab = tabIndex => {
    setActiveTab(tabIndex);
  };
  return (
    <main>
      <div className="tabs">
        <div className="tabs-header">
          <button
            className={activeTab === 1 ? "active" : ""}
            onClick={() => handleTab(1)}>
            Tab 1
          </button>

          <button
            className={activeTab === 2 ? "active" : ""}
            onClick={() => handleTab(2)}>
            Tab 2
          </button>
          <button
            className={activeTab === 3 ? "active" : ""}
            onClick={() => handleTab(3)}>
            Tab 3
          </button>
        </div>
        <div className="tab-content">
          {activeTab === 1 && <p>Content of Tab 1</p>}
          {activeTab === 2 && <p>Content of Tab 2</p>}
          {activeTab === 3 && <p>Content of Tab 3</p>}
        </div>
        <div className="content"></div>
      </div>
    </main>
  );
}
