import React, { useState, useCallback } from "react";

import "./Dropdown2.css";

const Dropdown2 = (props) => {
  const [values, setValues] = useState([]);
  const [disabled, setDisabled] = useState(false);

  const handleChange = useCallback((event) => {
    if (event.target.value === "Select All") {
      setValues(["asdf", "RTU", "Alarm", "Fire Extinguisher", "Hydrant"]);
      console.log("value: ", values);
      setDisabled(true);
    } else {
      setDisabled(false);
      console.log(
        Array.from(event.target.selectedOptions, (item) => item.value)
      );
      setValues(Array.from(event.target.selectedOptions, (item) => item.value));
      console.log("value: ", values);
    }
  });

  const handleSubmit = useCallback((event) => {
    setDisabled(false);
    alert("You selected: " + values);
    event.preventDefault();
  });

  return (
    <div style={{ flex: 1 }}>
      <h2>Prototype 2</h2>
      <p
        style={{
          padding: "20px",
          fontFamily: "Trebuchet MS, sans-serif",
          width: "50%",
          right: "0",
          left: "0",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        Of course, maybe you also want to see an implementation of a
        multi-select DDL <i>without</i> using npm packages! Here I try and
        implement a similar dropdown using just HTML tags like <b>form</b> and{" "}
        <b>select</b> along with <b>states</b> and <b>callback functions</b>. It
        is not as clean and robust as the first prototype and lacks many key
        functionalities, but to select multiple options, just hold down the{" "}
        <i>shift key</i> and submit your options.
      </p>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <select
          multiple={true}
          onChange={handleChange}
          className="multi-select"
        >
          <option value="Select All">SELECT ALL</option>
          <option value="asdf" disabled={disabled}>
            asdf
          </option>
          <option value="RTU" disabled={disabled}>
            RTU
          </option>
          <option value="Alarm" disabled={disabled}>
            Alarm
          </option>
          <option value="Fire Extinguisher" disabled={disabled}>
            Fire Extinguisher
          </option>
          <option value="Hydrant" disabled={disabled}>
            Hydrant
          </option>
        </select>
        <input type="submit" value="Submit" className="submit" />
      </form>
    </div>
  );
};

export default Dropdown2;
