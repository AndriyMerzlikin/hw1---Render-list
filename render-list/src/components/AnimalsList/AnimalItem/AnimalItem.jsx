import React from "react";
import "../../../style.css";
import ButtonComponent from "./ButtonComponent/ButtonComponent";

const AnimalItem = ({
  icon,
  type,

  isButtonActive,
  handleDelete,
  handleToggle,
}) => {
  //   const [isButtonActive, setIsButtonActive] = useState(false);
  //   const [buttonName, setButtonName] = useState("Active");

  //   const handleButtonToggle = () => {
  //     setIsButtonActive(!isButtonActive);
  //     setButtonName(isButtonActive ? "Active" : "Deactivate");
  //   };

  return (
    <li>
      {icon}{" "}
      <span className={isButtonActive ? "active-button-text" : ""}>{type}</span>{" "}
      <ButtonComponent
        handleClick={handleToggle}
        title={isButtonActive ? "Deactivate" : "Active"}
      />{" "}
      <ButtonComponent handleClick={handleDelete} title={"Delete"} />
    </li>
  );
};

export default AnimalItem;
