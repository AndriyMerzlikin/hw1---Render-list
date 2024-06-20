import React, { useState } from "react";

import AnimalItem from "./AnimalItem/AnimalItem";

const AnimalsList = ({ list }) => {
  const [animals, setAnimals] = useState(list);

  const handleButtonToggle = (index) => {
    setAnimals((prevState) =>
      prevState.map((animal, i) =>
        i === index
          ? { ...animal, isButtonActive: !animal.isButtonActive }
          : animal
      )
    );
  };

  const handleDeleteAnimal = (index) => {
    setAnimals((prevState) => prevState.filter((_, i) => i !== index));
  };

  return animals.length ? (
    <ul>
      {animals.map((animal, index) => (
        <AnimalItem
          key={index}
          index={index}
          animal={animal}
          handleToggle={() => handleButtonToggle(index)}
          handleDelete={() => handleDeleteAnimal(index)}
        />
      ))}
    </ul>
  ) : null;
};

export default AnimalsList;
