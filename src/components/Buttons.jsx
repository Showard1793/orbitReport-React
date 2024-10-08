import React from "react";
import satData from "./satData";
import "./styling.css"

const Buttons = ({filterByType, setSat, displaySats}) => {
  return (
    <div className="flex-container">
      {displaySats.map((sat, id) => (
        <button 
          key={id} 
          onClick={() => filterByType(sat)}
        >
          {sat} Orbit
        </button>
      ))}
      <button onClick={() => setSat(satData)}>
        Show All Orbits
      </button>
    </div>
  );
};

export default Buttons;