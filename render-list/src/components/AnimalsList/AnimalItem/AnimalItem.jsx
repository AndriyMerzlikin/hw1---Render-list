import React from "react";
import "../../../style.css";
import ButtonComponent from "./ButtonComponent/ButtonComponent";
import { getButtonClass, getButtonTitle } from "../../../utils/animalHelpers";

const AnimalItem = ({
  icon,
  type,
  isButtonActive,
  handleDelete,
  handleToggle,
}) => {
  return (
    <li>
      {icon} <span className={getButtonClass(isButtonActive)}>{type}</span>{" "}
      <ButtonComponent
        handleClick={handleToggle}
        title={getButtonTitle(isButtonActive)}
      />{" "}
      <ButtonComponent handleClick={handleDelete} title={"Delete"} />
    </li>
  );
};

export default AnimalItem;
