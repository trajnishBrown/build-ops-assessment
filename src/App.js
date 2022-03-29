import React from "react";

import "./App.css";
import Dropdown1 from "./components/dropdown1/Dropdown1";

function App() {
  return (
    <div className="App">
      <div style={{ flex: 1 }}>
        <h1>Build-Ops Multi-Select Dropdown</h1>
      </div>
      <div style={{ flex: 10 }}>
        <Dropdown1></Dropdown1>
      </div>
      <div style={{ color: "red", flex: 10 }}>
        <p>Bye</p>
      </div>
    </div>
  );
}

export default App;
