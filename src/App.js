import React from "react";

import "./App.css";
import Dropdown1 from "./components/dropdown1/Dropdown1";
import Dropdown2 from "./components/dropdown2/Dropdown2";

function App() {
  return (
    <div className="App">
      <div style={{ flex: 1 }}>
        <h1>Build-Ops Multi-Select Dropdown</h1>
      </div>

      <Dropdown1></Dropdown1>

      <Dropdown2></Dropdown2>
    </div>
  );
}

export default App;
