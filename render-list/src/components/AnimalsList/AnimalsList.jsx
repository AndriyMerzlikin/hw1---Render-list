import React, { useState } from "react";

import AnimalItem from "./AnimalItem/AnimalItem";

const AnimalsList = ({ list }) => {
  const [animals, setAnimals] = useState(list);

  const handleDeleteAnimal = (index) => {
    setAnimals((prevState) => prevState.filter((_, i) => i !== index));
  };

  return animals.length ? (
    <ul>
      {animals.map((animal, index) => (
        <AnimalItem
          key={index}
          index={index}
          icon={animal.icon}
          type={animal.type}
          handleDelete={handleDeleteAnimal}
        />
      ))}
    </ul>
  ) : null;
};

export default AnimalsList;
