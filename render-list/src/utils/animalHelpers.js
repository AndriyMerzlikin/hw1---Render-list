export const getButtonClass = (isButtonActive) => {
  return isButtonActive ? "active-button-text" : "";
};

export const getButtonTitle = (isButtonActive) => {
  return isButtonActive ? "Deactivate" : "Active";
};
