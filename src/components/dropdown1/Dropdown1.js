import React, { useState } from "react";
import Multiselect from "multiselect-react-dropdown";

import "./Dropdown1.css";

function Dropdown1() {
  const assetList = [
    {
      cat: "-",
      key: "Select All",
    },
    {
      cat: "Rooftop Units",
      key: "asdf",
    },
    {
      cat: "Rooftop Units",
      key: "RTU",
    },
    {
      cat: "Fire Safety",
      key: "Alarm",
    },
    {
      cat: "Fire Safety",
      key: "Fire Extinguisher",
    },
    {
      cat: "Fire Safety",
      key: "Hydrant",
    },
  ];
  const [selectedValues, setSelectedValues] = useState([]);
  const [assets, setAssets] = useState(assetList);

  return (
    <div style={{ flex: 1 }}>
      <h2>Prototype 1</h2>
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
        One of the best parts about React is its interoperability with powerful
        npm packages. This is a reusable component for a{" "}
        <i>multi-select dropdown</i> created using the{" "}
        <b>multiselect-react-dropdown</b> npm package. It has the ability to{" "}
        <b>group</b>, <b>select/de-select</b> all elements as well as{" "}
        <b>search</b>
      </p>
      <Multiselect
        className="multi-select"
        displayValue="key"
        groupBy="cat"
        onKeyPressFn={(event) => console.log(event)}
        onRemove={(selectedList, selectedItem) => {
          if (selectedItem.key === "Select All") {
            setSelectedValues([]);
          }
        }}
        onSearch={(event) => console.log(event)}
        onSelect={(selectedList, selectedItem) => {
          console.log(selectedList);
          console.log(selectedItem);
          if (selectedItem.key === "Select All") {
            setSelectedValues(assetList);
          }
        }}
        options={assets}
        showCheckbox
        selectedValues={selectedValues}
      />
    </div>
  );
}

export default Dropdown1;
