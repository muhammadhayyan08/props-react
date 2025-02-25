import React from "react";

const Cards = ({ handleClick, text, children }) => {
  return (
    <div style={{ border: "1px solid #ddd", padding: "10px", borderRadius: "8px", textAlign: "center" }}>
      {children}
      <button 
        onClick={handleClick} 
        style={{ marginTop: "10px", padding: "5px 10px", cursor: "pointer", borderRadius: "5px" }}
      >
        {text}
      </button>
    </div>
  );
};

export default Cards;
