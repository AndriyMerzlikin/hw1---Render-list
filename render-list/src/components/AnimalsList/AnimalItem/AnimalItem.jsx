import React, { useState } from "react";
import "../../../style.css";

const AnimalItem = ({ icon, type, index, handleDelete }) => {
  const [isButtonActive, setIsButtonActive] = useState(false);
  const [buttonName, setButtonName] = useState("Active");

  const handleButtonToggle = () => {
    setIsButtonActive(!isButtonActive);
    setButtonName(isButtonActive ? "Active" : "Deactivate");
  };

  return (
    <li>
      {icon}{" "}
      <span className={isButtonActive ? "active-button-text" : ""}>{type}</span>{" "}
      <button onClick={handleButtonToggle}>{buttonName}</button>{" "}
      <button onClick={() => handleDelete(index)}>Delete</button>
    </li>
  );
};

export default AnimalItem;
